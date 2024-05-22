<script setup lang="ts">
import type { SectionComponentSettings } from "../../types";

const sectionSettings: SectionComponentSettings = reactive({});
</script>

<template>
  <Section v-model:settings="sectionSettings">
    <div class="wrapper-grid flow" :class="{'wrapper': sectionSettings.spanFull}">
      <template v-for="(card, index) in Array.from({ length: 4 })" :key="index">
        <Card
          title="Test card"
          :reverse-source-order="false"
          :css="{
            card: 'col-span-full w-full p-0 [--card-left-col:fit-content(clamp(150px,30vw,300px))] [--card-right-col:1fr]',
          }"
        >
          <template #picture>
            <img
              alt="user header"
              class="w-full"
              src="https://picsum.photos/400/200"
            />
          </template>
          <template #default>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
          <template #footer>
            <button class="btn btn-primary">Buy Now</button>
          </template>
        </Card>
      </template>
    </div>
  </Section>
</template>
