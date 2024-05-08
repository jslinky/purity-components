<script lang="ts" setup>
import type { ComponentVariationsObj } from "../../types";

type HeroOptions = {
  spanFull?: boolean;
};

type HeroComponentVariationNames =
  | "classic"
  | "three-col"
  | "overlay"
  | "top-down"
  | "two-col-stacked"
  | "hero-six"
  | "hero-eight"
  | "hero-nine"
  | "hero-ten"
  | "hero-eleven"
  | "hero-twelve"
  | "hero-thirteen"
  | "hero-fourteen";

const { spanFull = true } = defineProps<HeroOptions>();

const selectedHeroType: Ref<HeroComponentVariationNames> = ref("hero-fourteen");

const heroVariations: ComponentVariationsObj<HeroComponentVariationNames>[] = [
  {
    name: "classic",
    component: defineAsyncComponent(() => import("./Classic.vue")),
  },
  {
    name: "three-col",
    component: defineAsyncComponent(() => import("./ThreeCol.vue")),
  },
  {
    name: "overlay",
    component: defineAsyncComponent(() => import("./Overlay.vue")),
  },
  {
    name: "top-down",
    component: defineAsyncComponent(() => import("./TopDown.vue")),
  },
  {
    name: "two-col-stacked",
    component: defineAsyncComponent(() => import("./TwoColStacked.vue")),
  },
  {
    name: "hero-six",
    component: defineAsyncComponent(() => import("./HeroSix.vue")),
  },
  {
    name: "hero-eight",
    component: defineAsyncComponent(() => import("./HeroEight.vue")),
  },
  {
    name: "hero-nine",
    component: defineAsyncComponent(() => import("./HeroNine.vue")),
  },
  {
    name: "hero-ten",
    component: defineAsyncComponent(() => import("./HeroTen.vue")),
  },
  {
    name: "hero-eleven",
    component: defineAsyncComponent(() => import("./HeroEleven.vue")),
  },
  {
    name: "hero-twelve",
    component: defineAsyncComponent(() => import("./HeroTwelve.vue")),
  },
  {
    name: "hero-thirteen",
    component: defineAsyncComponent(() => import("./HeroThirteen.vue")),
  },
  {
    name: "hero-fourteen",
    component: defineAsyncComponent(() => import("./HeroFourteen.vue")),
  },
];

const currentComponent = useComponentVariation(
  heroVariations,
  selectedHeroType
);
</script>

<template>
  <div
    class="hero"
    data-surface-theme="primary"
    :class="{
      'col-span-full': spanFull,
      'hero--full-overlay': selectedHeroType === 'overlay',
      'hero--top-down': selectedHeroType === 'top-down',
    }"
  >
    <div class="hero__container">
      <div data-admin>
        <select
          id="hero-options"
          v-model="selectedHeroType"
          name="hero-options"
        >
          <option
            v-for="(options, index) in heroVariations"
            :key="index"
            :value="options.name"
          >
            {{ options.name }}
          </option>
        </select>
      </div>
      <div class="hero__container">
        <slot>
          <component :is="currentComponent" />
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  grid-column: 1 / -1;
}

[data-admin] {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  z-index: 50;
}
</style>