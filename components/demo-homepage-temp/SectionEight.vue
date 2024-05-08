<script setup lang="ts">
import type { SectionComponentSettings } from "../../types";

const sectionSettings: SectionComponentSettings = reactive({});
</script>

<template>
  <Section v-model:settings="sectionSettings">
    <div class="wrapper-grid">
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
        }"
      >
        <template #picture>
          <CarPicture />
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
