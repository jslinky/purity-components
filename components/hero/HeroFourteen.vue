<template>
    <article class="hero-content wrapper-grid @container">
      <div
        class="col-span-full @[120ch]:col-start-2 @[120ch]:col-end-4 hero-content__container flex-layout-grid justify-center"
      >
        <div
          class="hero-content__text @container flex-col flow justify-center place-content-center py-2xl px-card-component pl-card @[120ch]:py-card-component lg:pl-2xl"
        >
          <h2 class="heading-xl">We build your digital future</h2>
          <p class="text-xl max-w-prose text-balance">
            Help us help you take the next step in a journey which will lead you
            to the final step
          </p>
          <div class="flex">
            <a href="#" class="btn btn-accent self-start">Find out more</a>
          </div>
        </div>
        <div class="hero-content__image overflow-clip max-w-[700px] mr-[--layout-gap]">
            <div class="absolute w-full h-full flex items-center">
                <div class="grid grid-rows-2 gap-[--layout-gap]">
                    <div class="grid grid-flow-col grid-cols-[repeat(auto-fit, 300px)] min-w-max gap-[--layout-gap]">
                        <div v-for="card in Array.from({length:12})">
                            <img src="https://picsum.photos/400/280" />
                        </div>
                    </div>
                    <div class="grid grid-flow-col grid-cols-[repeat(auto-fit, 300px)] min-w-max gap-[--layout-gap]">
                        <div v-for="card in Array.from({length:12})">
                            <img src="https://picsum.photos/400/280" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </article>
  </template>
  
  <script lang="ts" setup></script>
  