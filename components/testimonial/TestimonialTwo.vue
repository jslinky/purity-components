<script setup lang="ts">
import type { PartnerLogos } from "../../types";

const { slice } = defineProps<{
  slice: PrismicSlice;
}>();

type ComponentProps = {
  logos?: PartnerLogos[];
};

const logoArr: Ref<PartnerLogos[]> = ref([]);
const defaultRatingValue = ref(3);

const { data, pending, error } = await useFetch("/api/mock/default", {
  pick: ["logos"],
});
if (data) {
  const { logos } = data.value as ComponentProps;
  if (logos) {
    logoArr.value = logos.slice(0, 1) as PartnerLogos[];
  }
}
</script>

<template>
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
    <slot name="testimonials-content">
      <div
        class="layout-grid [--column-count:3] [--flow-space:var(--spacing-2xl)] place-items-center"
      >
        <div
          v-for="(item, index) in slice?.items ?? Array.from({ length: 1 })"
          :key="index"
          class="[--flow-space:1em] max-w-2xl w-full"
        >
          <Card
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
              title: 'heading-md',
              picture: {
                'quote order-2': true,
                'flex-col':
                  slice?.primary?.stacked_layout_user_profile ?? false,
              },
              content: 'mt-0',
            }"
          >
            <template #picture>
              <UserProfile
                :testimonial="item?.testimonial"
                :stacked="slice?.primary?.stacked_layout_user_profile ?? false"
                :css="{
                  figure: 'w-auto',
                }"
              />
              <div
                v-if="item?.testimonial?.data?.company_logo"
                class="*w-full *radius-none flex justify-center w-28 self-center"
              >
                <PrismicImage :field="item?.testimonial?.data?.company_logo" />
              </div>
              <div
                v-else-if="logoArr.length > 0"
                v-html="logoArr[0].svg.el"
                class="*:w-full *:h-full aspect-[16/3] w-48 self-center"
              />
            </template>
            <template #default>
              <div class="flow">
                <Rating
                  v-if="item?.testimonial?.data?.rating"
                  v-model="item.testimonial.data.rating"
                  readonly
                  :cancel="false"
                  :class="{
                    'justify-start':
                      (slice?.primary?.justify_rating &&
                        slice?.primary?.justify_rating === 'start') ??
                      false,
                    'justify-center':
                      (slice?.primary?.justify_rating &&
                        slice?.primary?.justify_rating === 'center') ??
                      true,
                    'justify-end':
                      (slice?.primary?.justify_rating &&
                        slice?.primary?.justify_rating === 'end') ??
                      false,
                  }"
                />
                <Rating
                  v-else
                  v-model="defaultRatingValue"
                  readonly
                  :cancel="false"
                  class="justify-center"
                />

                <PrismicRichText
                  v-if="item?.testimonial?.data?.quote"
                  wrapper="q"
                  :field="item?.testimonial?.data?.quote"
                  class="text-lg block"
                  :class="{
                    'text-left':
                      (slice?.primary?.justify_quote &&
                        slice?.primary?.justify_quote === 'start') ??
                      false,
                    'text-center':
                      (slice?.primary?.justify_quote &&
                        slice?.primary?.justify_quote === 'center') ??
                      true,
                    'text-right':
                      (slice?.primary?.justify_quote &&
                        slice?.primary?.justify_quote === 'end') ??
                      false,
                  }"                  
                />
                <q v-else class="text-lg block text-center">
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
