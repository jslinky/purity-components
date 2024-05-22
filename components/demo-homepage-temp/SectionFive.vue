
<script setup lang="ts">
import type { SectionComponentSettings } from "../../types";

const sectionSettings: SectionComponentSettings = reactive({
  container: false
});
</script>
<template>
  <Section v-model:settings="sectionSettings">
    <div class="@container" :class="{'wrapper': sectionSettings.spanFull}">
      <Card
        :reverse-source-order="true"
        surface-theme="primary-light"
        :css="{
          card: '[--card-left-col:0.6fr] [--card-right-col:0.4fr] [--card-gutter-stacked:var(--spacing-gutter-xl)]',
          picture:
            'quote justify-center order-2 @[80ch]:order-0 pb-card-component @[80ch]:py-md',
        }"
        :align-items="{
          column: 'center',
        }"
      >
        <template #default>
          <blockquote class="m-0 text-display-xs -snug">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </blockquote>
        </template>
        <template #picture>
          <div class="@[80ch]:max-w-72 w-full">
            <figure
              class="flex justify-center @[80ch]:flex-col w-full gap-x-md gap-y-sm"
            >
              <div class="@[80ch]:w-full flex justify-center">
                <img
                  src="https://assets.codepen.io/174183/avatar-2.jpg"
                  alt=""
                  class="self-center h-auto w-16 @[80ch]:w-[clamp(4rem,15cqi,14rem)]"
                />
              </div>
              <figcaption
                class="flex items-start @[80ch]:items-center flex-col"
              >
                <p class="font-semibold">Justin Small</p>
                <p>Front End Developer @ Self</p>
              </figcaption>
            </figure>
          </div>
        </template>
      </Card>
    </div>
  </Section>
</template>
