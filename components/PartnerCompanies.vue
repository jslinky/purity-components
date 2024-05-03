<script setup lang="ts">
import { useElementBounding, useDebouncedRefHistory } from "@vueuse/core";
import type { Ref } from "vue";
import type { PartnerLogos } from "../types";

type ComponentProps = {
  logos?: PartnerLogos[];
};

const logoArr: Ref<PartnerLogos[]> = ref([]);

const { logos } = defineProps<ComponentProps>();

watchEffect(async () => {
  if (logos) {
    logoArr.value = logos;
  } else {
    const { data, pending, error } = await useFetch("/api/mock/default", {
      pick: ["logos"],
    });
    if (data) {
      const { logos } = data.value as ComponentProps;
      logoArr.value = logos as PartnerLogos[];
    }
  }
});

const itemCss = ref(
  "relative w-full h-8 md:h-10 max-w-[160px] md:max-w-[130px] flex items-center justify-center"
);

const container: Ref<HTMLElement | null> = ref(null);
const inner: Ref<HTMLElement | null> = ref(null);
const initialInnerWidth = ref(0);

const overflowLogoArray: Ref<PartnerLogos[]> = ref([]);
const logoRefs: Ref<HTMLElement[]> = ref([]);
const likesMotion = ref(false);

const componentLoaded = ref(false);

const isOverflow = computed(
  () =>
    Math.round(initialInnerWidth.value) >
    Math.round(containerWidthHistory.value[0].snapshot)
);

const { width: containerWidth } = useElementBounding(container);
const { history: containerWidthHistory } = useDebouncedRefHistory(
  containerWidth,
  { deep: true, debounce: 500 }
);

const { history: componentLoadedHistory } = useDebouncedRefHistory(
  componentLoaded,
  { debounce: 500 }
);

const getInitialInnerWidth = async () => {
  await nextTick();
  let logoWidths = 0;
  const gap = getPropComputedStyle(inner.value as HTMLElement)("gap");
  logoRefs.value.forEach((el, index: number) => {
    if (index < logoArr.value?.length) {
      logoWidths += el.clientWidth + (index > 0 ? parseInt(gap) : 0);
    }
  });
  initialInnerWidth.value = logoWidths;
  componentLoaded.value = true;
};

const pushToLogoRefs = (el: HTMLElement) => {
  if (!logoRefs.value.includes(el)) {
    logoRefs.value.push(el);
  }
  nextTick();
};

onMounted(async () => {
  if (container.value && logoArr.value) {
    if (!window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
      likesMotion.value = true;
      container.value.setAttribute(
        "data-animated",
        likesMotion.value ? "true" : "false"
      );
    }
    overflowLogoArray.value = [...logoArr.value, ...logoArr.value];
    await getInitialInnerWidth();
  }
});
</script>

<template>
  <div
    class="transition-opacity duration-300"
    :class="{
      'opacity-100': componentLoadedHistory[0].snapshot,
      'opacity-0': !componentLoadedHistory[0].snapshot,
    }"
  >
    <slot name="heading"> </slot>
    <slot name="intro"></slot>
    <slot name="logos">
      <div
        ref="container"
        class="c-partner-logos"
        :class="{
          'justify-center': !isOverflow,
          'justify-start': isOverflow,
          'has-overflow': isOverflow,
        }"
      >
        <div ref="inner" class="c-partner-logos__inner">
          <template v-for="(item, index) in logoArr" :key="index">
            <div class="flex items-center justify-center">
              <div
                class="c-partner-logos__item"
                :class="cn(itemCss, item.item?.css)"
                :ref="(el) => pushToLogoRefs(el as HTMLElement)"
              >
                <component
                  :is="item?.svg?.el"
                  v-if="item && typeof item?.svg?.el !== 'string'"
                />
                <div v-html="item?.svg?.el" v-else></div>
              </div>
            </div>
          </template>
          <template
            v-for="(item, index) in logos"
            :key="index"
            v-if="isOverflow && componentLoaded && likesMotion"
            :aria-hidden="true"
          >
            <div class="flex items-center justify-center">
              <div
                class="c-partner-logos__item"
                v-if="item"
                :class="cn(itemCss, item?.item?.css)"
              >
                <component
                  :is="item?.svg?.el"
                  v-if="item && typeof item?.svg?.el !== 'string'"
                />
                <div v-html="item?.svg?.el" v-else></div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </slot>
  </div>
</template>

<style lang="scss">
@keyframes scroll {
  to {
    transform: translate(calc(-50% - (var(--gap) / 2)));
  }
}

.c-partner-logos {
  display: flex;
  --gap: var(--space-2xl);
  max-width: min(
    calc(var(--wrapper-width) - var(--wrapper-padding) * 2),
    calc(100vw - var(--wrapper-padding) * 2)
  );
  // overflow: hidden;
  // margin-top: var(--spacing-2xl);
}

.c-partner-logos svg {
  height: 100%;
  width: auto;
}

.c-partner-logos__inner {
  display: flex;
  gap: var(--gap);
  flex-wrap: wrap;
  justify-content: center;
}

.c-partner-logos[data-animated="true"] {
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  &.has-overflow {
    .c-partner-logos__inner {
      flex-wrap: nowrap;
      min-width: max-content;
      animation: scroll 20s linear infinite;
      > div {
        flex-shrink: 0;
      }
    }
  }
}

:is(.c-partner-logos a, .c-partner-logos__item > div) {
  height: 100%;
  width: 100%;
}
</style>
