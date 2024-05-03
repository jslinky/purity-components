<template>
  <article class="hero-content wrapper-grid [--end-col:0]">
    <div class="hero-content__container flex-layout-grid justify-center col-span-full">
      <div class="hero-content__text flex-col flow justify-center flex">
        <h2 class="heading-xl">We build your digital future</h2>
        <p class="text-xl text-slate max-w-prose text-balance">Help us help you take the next step in a journey which will lead you to the final step</p>
          <div class="flex justify-center">
            <a href="#" class="btn btn-primary self-start">Find out more</a>
          </div>        
      </div>
      <div class="hero-content__image">
        <img src="https://picsum.photos/1200/500" />
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