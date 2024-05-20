<script setup lang="ts">
import type { PartnerLogos } from "../../types";

const { slice } = defineProps<{
  slice: PrismicSlice;
}>();

type ComponentProps = {
  logos?: PartnerLogos[];
};

const logoArr: Ref<PartnerLogos[]> = ref([]);

const { data, pending, error } = await useFetch("/api/mock/default", {
  pick: ["logos"],
});
if (data) {
  const { logos } = data.value as ComponentProps;
  if (logos) {
    logoArr.value = logos.slice(0, 1) as PartnerLogos[];
  }
}

const quoteCSS = computed(() => {
  let cssClass = "";

  switch (true) {
    case slice.primary.justify_quote === "center":
      cssClass = "text-center";
      break;
    case slice.primary.justify_quote === "start":
      cssClass = "text-left";
      break;
    case slice.primary.justify_quote === "end":
      cssClass = "text-right";
      break;
    default:
      cssClass = "";
  }

  return cssClass;
});
</script>

<template>
  {{ slice.primary.justify_quote }}
  <pre>{{ quoteCSS }}</pre>
  {{ slice.primary.surface_background }}
  {{ slice?.primary?.expand_to_full_width }}
  <section
    class="region @container text-center flow"
    :class="{
      'col-span-full': slice?.primary?.expand_to_full_width ?? false,
      'col-start-2 col-end-2': !slice?.primary?.expand_to_full_width ?? true,
    }"
    :data-surface-theme="slice.primary.surface_background"
  >
    <slot name="testimonials-heading">
      <PrismicRichText
        v-if="slice?.primary?.heading"
        :field="slice?.primary?.heading"
        class="heading-md"
      />
      <h2 v-else class="heading-md">Customer testimonials</h2>
    </slot>
    <div>
      <slot name="testimonials-intro">
        <PrismicRichText
          v-if="slice?.primary?.intro"
          :field="slice?.primary?.intro"
          class="text-lg"
        />
        <p v-else class="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </slot>
    </div>
    <slot name="testimonials-content">
      <div
        class="layout-grid [--column-count:3] [--flow-space:var(--spacing-2xl)] place-items-center"
      >
        <div
          v-for="(item, index) in slice?.items ?? Array.from({ length: 3 })"
          :key="index"
          class="[--flow-space:1em] max-w-2xl w-full"
        >
          <Card
            :data-surface-theme="item?.surface_background"
            :align-items="{
              column: 'center',
            }"
            :picture="{
              ratio: {
                row: 'auto',
                column: 'auto',
              },
            }"
            :css="{
              card: 'grid-rows-[1fr_max-content]',
              title: 'heading-md',
              picture: 'quote order-2',
              content: 'mt-0',
            }"
          >
            <template #picture>
              <UserProfile
                :testimonial="item?.testimonial"
                :stacked="slice?.primary?.stacked_layout_user_profile"
                :justify="slice?.primary?.justify_profile"
              />
            </template>
            <template #default>
              <div class="flow">
                <PrismicImage
                  v-if="item?.testimonial?.data?.company_logo"
                  :field="item?.testimonial?.data?.company_logo"
                  class="w-28"
                  :class="{
                    'mr-auto': slice?.primary?.justify_logo
                      ? slice?.primary?.jufify_logo === 'start'
                      : slice?.primary?.justify_quote
                      ? slice?.primary?.justify_quote === 'start'
                      : false,
                    'mx-auto': slice?.primary?.justify_logo
                      ? slice?.primary?.justify_logo === 'center'
                      : !slice?.primary?.justify_quote
                      ? slice?.primary?.justify_quote === 'center'
                      : false,
                    'ml-auto': slice?.primary?.justify_logo
                      ? slice?.primary?.justify_logo === 'end'
                      : slice?.primary?.justify_quote
                      ? slice?.primary?.justify_quote === 'end'
                      : false,
                  }"
                />
                <div
                  v-else-if="logoArr.length > 0"
                  v-html="logoArr[0].svg.el"
                  class="*:w-full *:h-full aspect-[16/3] w-48 mx-auto"
                />
                <PrismicRichText
                  v-if="item?.testimonial?.data?.quote"
                  wrapper="q"
                  :field="item?.testimonial?.data?.quote"
                  class="text-lg block"
                  :class="quoteCSS"
                />
                <q v-else class="text-lg block text-center" :class="quoteCSS">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </q>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </slot>
  </section>
</template>
