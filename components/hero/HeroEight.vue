<template>
  <article class="hero-content wrapper-grid">
    <div class="hero-content__container justify-center col-start-2 col-end-2 py-card-component">
      <div class="layout-grid layout-grid--column-count">
        <div
          class="hero-content__text col-span-full flex-col flow justify-center place-content-center px-layout-gap xl:px-0"
        >
          <Card
            title="We build your digital future"
            :reverse-source-order="true"
            :css="{
                title: 'heading-xl',
                card: '[--card-left-col:1fr] [--card-right-col:1fr]',
                picture: '@[80ch]:mt-3xl justify-start max-w-[55ch] order-2 [--card-aspect:none]'
            }"
          >
            <template #picture>
              <div class="flow">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos velit odit facilis qui! Expedita aperiam dignissimos doloribus impedit eum assumenda reiciendis repellat nihil officia, provident ipsam facilis nesciunt libero.</p>
                <div class="flex gap-sm">
                    <button>Button 1</button>
                    <button class="btn-outline">Button 2</button>
                </div>
              </div>
            </template>
        </Card>
        </div>
        <div class="layout-grid layout-grid--column-count col-span-full [--layout-grid-auto-repeat:auto-fill] [--layout-column-min:10ch]">
            <div class="hero-content__image mt-4xl">
              <img class="self-start" src="https://picsum.photos/340/440" />
            </div>
            <div class="hero-content__col hero-content__image col-start-2 col-end-4 mt-xl">
              <img class="self-start" src="https://picsum.photos/680/880" />
            </div>
            <div class="hero-content__col hero-content__image">
              <img class="self-start" src="https://picsum.photos/340/440" />
            </div>            
        </div>        
      </div>
    </div>
  </article>
</template>