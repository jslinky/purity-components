<template>
  <article class="hero-content wrapper-grid [--end-col:0]">
    <div class="hero-content__container flex-layout-grid justify-center col-span-full">
      <div class="hero-content__text flex-col flow justify-center flex @container-normal">
        <h2 class="heading-xl">We build your digital future</h2>
        <p class="text-xl text-slate max-w-prose text-balance mx-auto">Help us help you take the next step in a journey which will lead you to the final step</p>
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

<style scoped>
.hero-content__container {
  grid-column: 1 / -1;
}
</style>