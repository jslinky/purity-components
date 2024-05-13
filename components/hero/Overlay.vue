<template>
  <article class="hero-content wrapper-grid [--end-col:0]">
    <div class="hero-content__container flex-layout-grid justify-center col-span-full">
      <div class="hero-content__text flex-col flow justify-center flex">
        <slot name="hero-content-heading">
          <h1 class="heading-xl">We build your digital future</h1>
        </slot>
        <slot name="hero-content-body">
          <p class="text-xl text-slate max-w-prose text-balance">Help us help you take the next step in a journey which will lead you to the final step</p>
        </slot>
        <slot name="hero-content-button">
          <div class="flex justify-center">
            <a href="#" class="btn btn-primary self-start">Find out more</a>
          </div>        
        </slot>
      </div>
      <div class="hero-content__image">
        <slot name="hero-content-image">
          <img src="https://picsum.photos/1200/500" />
        </slot>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>

</script>

<style scoped>

.flex-layout-grid {
  background-image: url('https://images.unsplash.com/photo-1517670972079-a58c8d6c0af8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
}

</style>