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
        :css="{
          card: '[--card-left-col:1fr] [--card-right-col:auto]',
          title: 'heading-lg',
          picture: 'flex items-center',
        }"
        title="Add function to your flair with built-in business tools"
      >
        <template #picture>
          <div class="flex flex-col w-min min-w-[40ch] flow">
            <p>
              Explore our industry-leading collection of website templates and
              customize them to reflect your brand's unique identity.
            </p>
            <button class="self-start">Button</button>
          </div>
        </template>
      </Card>
    </div>
  </Section>
</template>
