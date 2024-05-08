<script setup lang="ts">

import type { SectionComponentSettings } from "../../types";

const sectionSettings: SectionComponentSettings = reactive({});

const tabs = ref([
  {
    title: "This is a title",
    content: "This is some content",
  },
  {
    title: "This is a title",
    content: "This is some content",
  },
  {
    title: "This is a title",
    content: "This is some content",
  },
]);
</script>

<template>
  <Section v-model:settings="sectionSettings">
    <div class="wrapper-grid" :class="{'wrapper': sectionSettings.spanFull}">
      <Card
        title="Test card"
        :reverse-order="false"
        :align-items="{
          column: 'center',
        }"
        :picture="{
          ratio: {
            column: 'landscape',
            row: 'square',
          },
        }"
        :css="{
          card: 'col-span-full w-full p-0',
          title: 'heading-md',
          picture: 'self-start',
        }"
      >
        <!-- https://github.com/nuxt/image/issues/309 -->
        <template #picture>
          <!-- <CarPicture /> -->
          <img
            alt="user header"
            class="w-full"
            src="https://picsum.photos/800/600"
          />
        </template>
        <template #default>
          <p class="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <Accordion :activeIndex="0">
            <AccordionTab
              v-for="tab in tabs"
              :key="tab.title"
              :header="tab.title"
            >
              <p class="m-0">{{ tab.content }}</p>
            </AccordionTab>
          </Accordion>
        </template>
      </Card>
    </div>
  </Section>
</template>
