<script setup lang="ts">
import type { SectionComponentSettings } from "../../types";

const sectionSettings: SectionComponentSettings = reactive({
  surfaceTheme: 'eggshell',
  spanFull: true,
  container: false,
});
</script>

<template>
  <Section
    v-model:settings="sectionSettings"
    class="flow"
  >
    <div class="wrapper layout layout-grid">
      <template v-for="(card, index) in Array.from({ length: 4 })" :key="index">
        <div>
          <!-- Add image-full as a prop -->
          <Card
            data-surface-theme="light"
            :css="{
              card: 'image-full',
              picture: '[--card-aspect:9/16]',
            }"
          >
            <template #picture>
              <img
                alt="user header"
                class="w-full"
                src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
              />
            </template>
          </Card>
        </div>
      </template>
    </div>
  </Section>
</template>
