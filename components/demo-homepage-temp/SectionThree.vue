<script setup lang="ts">

import type { SectionComponentSettings } from "../../types";

const sectionSettings: SectionComponentSettings = reactive({})

</script>

<template>
  <Section v-model:settings="sectionSettings" class="flow">
    <div :class="{'wrapper': sectionSettings.spanFull}">
      <div class="flex justify-center mb-xl">
        <h2 class="heading-md">This is a section heading</h2>
      </div>
      <div
        class="layout layout-grid layout-grid--column-count [--column-count:6] [--layout-grid-min:15ch]"
      >
        <div class="@[980px]:col-span-4">
          <Card
            surface-theme="primary-light"
            :interact="true"
            title="Advanced Card"
            subtitle="Card subtitle"
          >
            <template #default>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione
                quam perferendis esse, cupiditate neque quas!
              </p>
            </template>
            <template #footer>
              <button class="btn-link btn-primary px-0">See more</button>
            </template>
          </Card>
        </div>
        <div class="@[980px]:col-span-2">
          <Card
            surface-theme="primary"
            :interact="true"
            title="Advanced Card"
            subtitle="Card subtitle"
          >
            <template #default>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione
                quam perferendis esse, cupiditate neque quas!
              </p>
            </template>
            <template #footer>
              <button class="btn-outline">See more</button>
            </template>
          </Card>
        </div>
        <div class="@[980px]:col-span-3">
          <Card
            surface-theme="primary-light"
            :interact="true"
            title="Advanced Card"
            subtitle="Card subtitle"
          >
            <template #default>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione
                quam perferendis esse, cupiditate neque quas!
              </p>
            </template>
            <template #footer>
              <button class="btn-link btn-primary px-0">See more</button>
            </template>
          </Card>
        </div>
        <div class="@[980px]:col-span-3">
          <Card
            surface-theme="primary-light"
            :interact="true"
            title="Advanced Card"
            subtitle="Card subtitle"
          >
            <template #default>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione
                quam perferendis esse, cupiditate neque quas!
              </p>
            </template>
            <template #footer>
              <button class="btn-link btn-primary px-0">See more</button>
            </template>
          </Card>
        </div>
        <div class="@[980px]:col-span-2">
          <Card
            surface-theme="primary"
            :interact="true"
            title="Advanced Card"
            subtitle="Card subtitle"
          >
            <template #default>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione
                quam perferendis esse, cupiditate neque quas!
              </p>
            </template>
            <template #footer>
              <button class="btn-outline">See more</button>
            </template>
          </Card>
        </div>
        <div class="@[980px]:col-span-4">
          <Card
            surface-theme="dark"
            :interact="true"
            title="Advanced Card"
            subtitle="Card subtitle"
          >
            <template #default>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione
                quam perferendis esse, cupiditate neque quas!
              </p>
            </template>
            <template #footer>
              <button class="btn-outline">See more</button>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </Section>
</template>
