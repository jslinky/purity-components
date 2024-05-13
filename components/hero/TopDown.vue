<template>
  <article class="hero-content wrapper-grid [--end-col:0]">
    <div class="hero-content__container flex-layout-grid justify-center col-span-full">
      <div class="hero-content__text flex-col flow justify-center flex @container-normal basis-[max-content]">
        <slot name="hero-content-heading">
          <h1 class="heading-xl">We build your digital future</h1>
          </slot>
          <slot name="hero-content-body">
            <p class="text-xl text-slate max-w-prose text-balance mx-auto">Help us help you take the next step in a journey which will lead you to the final step</p>
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

<style scoped>
.hero-content__container {
  grid-column: 1 / -1;
}
</style>