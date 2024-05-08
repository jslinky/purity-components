<script setup lang="ts">

import type { SectionComponentSettings } from "../../types";

const sectionSettings: SectionComponentSettings = reactive({});

</script>

<template>
  <Section v-model:settings="sectionSettings">
    <div class="wrapper-grid" :class="{'wrapper': sectionSettings.spanFull}">
      <Card
        title="Test card"
        :reverse-order="true"
        :picture="{
          ratio: {
            column: 'landscape',
            row: 'square',
          },
        }"
        :align-items="{
          column: 'center',
        }"
        :css="{
          card: 'col-span-full w-full p-0',
          title: 'heading-md',
        }"
      >
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
        <template #footer>
          <button class="btn btn-primary">Buy Now</button>
        </template>
      </Card>
    </div>
  </Section>
</template>
