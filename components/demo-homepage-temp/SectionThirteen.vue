<template>
  <section
    class="region [--color-surface-bg:var(--color-eggshell)] col-span-full flow"
  >
    <div class="wrapper layout layout-grid">
      <template v-for="card in Array.from({ length: 4 })">
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
  </section>
</template>