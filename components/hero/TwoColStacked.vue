<template>
  <article class="hero-content wrapper-grid [--end-col:0]">
    <div
      class="col-span-full hero-content__container layout flex-layout-grid justify-center gap-0"
    >
    <div class="hero-content__image">
        <img src="https://picsum.photos/1200/500" />
      </div>  
      <div
        class="hero-content__text flex @container flex-col-reverse @[120ch]:flex-col flow justify-center place-content-center p-0"
      >
      <div>
          <img src="https://picsum.photos/1200/500" />
      </div>
      <div class="flex-auto flow p-card-component">
          <h2 class="heading-xl">We build your digital future</h2>
          <p class="text-xl max-w-prose text-balance">
            Help us help you take the next step in a journey which will lead you to
            the final step
          </p>
          <div class="flex">
            <a href="#" class="btn btn-accent self-start">Find out more</a>
          </div>
      </div>
      
      </div>
  
    </div>
  </article>
</template>

<script lang="ts" setup></script>

<!-- <style scoped>
/* Move this temp - tailwind not picking up classes */
  .hero-content__container {
    grid-column-start:2;
    grid-column-end:4;
  }
</style> -->
