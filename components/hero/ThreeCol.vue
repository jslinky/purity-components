<template>
  <article class="hero-content wrapper-grid [--end-col:0]">
    <div
      class="hero-content__container flex-layout-grid flex-wrap @2xl:flex-nowrap justify-center col-span-full [--flex-grid-min:45ch]"
    >
      <div class="hero-content__image">
        <slot name="hero-content-image">
          <img src="https://picsum.photos/1200/500" />
        </slot>
      </div>
      <div
        class="hero-content__text flex-col flow justify-center place-content-center px-layout-gap xl:px-0"
      >
        <slot name="hero-content-heading">
          <h1 class="heading-xl">We build your digital future</h1>
        </slot>
        <slot name="hero-content-body">
          <p class="text-xl text-slate max-w-prose text-balance">
            Help us help you take the next step in a journey which will lead you
            to the final step
          </p>
        </slot>
        <slot name="hero-content-button">
          <div class="flex">
            <a href="#" class="btn btn-primary self-start">Find out more</a>
          </div>
        </slot>
      </div>
      <div class="hero-content__col hero-content__image @7xl:flex">
        <slot name="hero-content-image-2">
          <img src="https://picsum.photos/1200/500" />
        </slot>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup></script>

<!-- <style scoped>
  .hero-content__container {
    grid-column: 1 / -1;
  }
</style> -->
