

<template>
  <section class="region @container">
    <div class="wrapper-grid">
      <Card
        title="Test card"
        tagline="Tagline"
        :reverse-order="true"
        :align-items="{
          column: 'center',
        }"
        :picture="{
          ratio: {
            column: 'sqaure',
            row: 'square',
          },
        }"
        :css="{
          card: 'col-span-full w-full p-0',
          title: 'heading-md',
          picture: 'self-start',
        }"
      >
        <!-- https://github.com/nuxt/image/issues/309 -->
        <template #picture>
          <!-- <CarPicture /> -->
          <img
            alt="user header"
            class="w-full"
            src="https://picsum.photos/600/600"
          />
        </template>
        <template #default>
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <div
            class="layout layout-grid w-full [--layout-column-min:10ch] [--column-count:2]"
          >
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>  
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>  
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>  
            </ul>
          </div>
        </template>
        <template #footer>
          <button class="btn btn-primary btn-outline">Buy Now</button>
        </template>
      </Card>
    </div>
  </section>
</template>
