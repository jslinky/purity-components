<script setup lang="ts">
import type { SectionComponentSettings } from "../../types";

const sectionSettings: SectionComponentSettings = reactive({
  surfaceTheme: 'primary',
  spanFull: true
});
</script>

<template>
  <Section v-model:settings="sectionSettings">
    <div class="wrapper-grid">
      <Card
        :css="{
          card: 'py-gutter-xl col-start-2 col-end-2 w-full p-0 [--card-left-col:0.5fr] [--card-right-col:0.5fr]',
          title: 'heading-md',
        }"
        :reverse-source-order="true"
        :interact="false"
        title="Explore resources for inspiration, instruction, and innovation."
      >
        <template #picture>
          <div class="layout layout-grid [--layout-grid-min:20ch] w-full">
            <template v-for="card in Array.from({ length: 4 })">
              <div>
                <Card
                  surface-theme="light"
                  :is-stacked="true"
                  title="Test"
                  :picture="{
                    src: 'https://picsum.photos/400/200',
                    alt: 'Image',
                  }"
                  :css="{
                    title: 'text-md',
                  }"
                />
              </div>
            </template>
          </div>
        </template>
        <template #footer>
          <button class="btn btn-outline">Button</button>
        </template>
      </Card>
    </div>
  </Section>
</template>
