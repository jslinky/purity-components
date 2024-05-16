<script setup lang="ts">
import type { PartnerLogos } from "../../types";

const { slice } = defineProps<{
  slice: PrismicSlice;
}>();

type ComponentProps = {
  logos?: PartnerLogos[];
};

const logoArr: Ref<PartnerLogos[]> = ref([]);
const value = ref(
  slice?.primary?.rating ? parseInt(slice?.primary?.rating) : 3
);

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
  <section class="region @container text-center flow">
    <slot name="testimonials-heading" />
    <slot name="testimonials-intro" />
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
              picture: 'quote order-2',
              content: 'mt-0',
            }"
          >
            <!-- https://github.com/nuxt/image/issues/309 -->
            <template #picture>
              <UserProfile
                :testimonial="item?.testimonial"
                :css="{
                  figure: 'w-auto',
                }"
              />
              <div
                v-if="item?.testimonial?.data?.company_logo"
                class="*:w-full *:h-full aspect-[16/3] w-48 self-center"
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
                  v-model="value"
                  readonly
                  :cancel="false"
                  class="justify-center"
                />

                <PrismicRichText
                  v-if="item?.testimonial?.data?.quote"
                  wrapper="q"
                  :field="item?.testimonial?.data?.quote"
                  class="text-lg block text-center"
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
