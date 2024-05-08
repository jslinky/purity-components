<script setup lang="ts">
import type { SectionComponentSettings } from "../../types";

const sectionSettings: SectionComponentSettings = reactive({
  surfaceTheme: 'eggshell',
  spanFull: true
});
</script>
<template>
  <Section 
    v-model:settings="sectionSettings"
    class="flow"
  >
    <div class="flex justify-between items-center wrapper mt-gutter">
      <h2 class="heading-sm">This is a section heading</h2>
      <a href="#" class="btn btn-link">
        View all
        <Icon name="uil:github" color="black" />
      </a>
    </div>
    <div
      class="wrapper layout layout-grid [--color-surface-bg:var(--color-light)]"
    >
      <div>
        <Card data-surface-theme="light" title="Test card">
          <template #picture>
            <img
              alt="user header"
              class="w-full"
              src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
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
            <button>Button</button>
          </template>
        </Card>
      </div>
      <div>
        <Card data-surface-theme="light" title="Test card">
          <template #picture>
            <img
              alt="user header"
              class="w-full"
              src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
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
            <button>Button</button>
          </template>
        </Card>
      </div>
      <div>
        <Card data-surface-theme="light" title="Test card">
          <template #picture>
            <img
              alt="user header"
              class="w-full"
              src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
            />
          </template>
          <template #default>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas! numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
          <template #footer>
            <button>Button</button>
          </template>
        </Card>
      </div>
    </div>
  </Section>
</template>
