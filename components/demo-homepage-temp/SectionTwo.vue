

<template>
  <Section v-model:settings="sectionSettings">
    <div class="layout layout-grid max-w-6xl mx-auto w-full">
      <div>
        <Card
          title="Advanced Card"
          subtitle="Card subtitle"
          :css="{
            caption: 'flex',
          }"
        >
          <template #caption="{ css }">
            <h3 :class="css.title" class="inline-flex items-center gap-rel-0.5">
              <Icon
                name="uil:github"
                color="var(--color-primary)"
                class="text-[1.5em]"
              />
              <span>Text</span>
            </h3>
          </template>
          <template #default>
            <p class="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
              sed consequuntur error repudiandae numquam deserunt quisquam.
            </p>
          </template>
        </Card>
      </div>
      <div>
        <Card
          title="Advanced Card"
          subtitle="Card subtitle"
          :css="{
            caption: 'flex',
          }"
        >
          <template #caption="{ css }">
            <h3 :class="css.title" class="inline-flex items-center gap-rel-0.5">
              <Icon
                name="uil:github"
                color="var(--color-primary)"
                class="text-[1.5em]"
              />
              <span>Text</span>
            </h3>
          </template>
          <template #default>
            <p class="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
              sed consequuntur error repudiandae numquam deserunt quisquam.
            </p>
          </template>
        </Card>
      </div>
      <div>
        <Card
          title="Advanced Card"
          subtitle="Card subtitle"
          :css="{
            caption: 'flex',
          }"
        >
          <template #caption="{ css }">
            <h3 :class="css.title" class="inline-flex items-center gap-rel-0.5">
              <Icon
                name="uil:github"
                color="var(--color-primary)"
                class="text-[1.5em]"
              />
              <span>Text</span>
            </h3>
          </template>
          <template #default>
            <p class="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
              sed consequuntur error repudiandae numquam deserunt quisquam.
            </p>
          </template>
        </Card>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">

import type { SectionComponentSettings } from "../../types";

const sectionSettings: SectionComponentSettings = reactive({
  container: false,
  spanFull: true
})

</script>
