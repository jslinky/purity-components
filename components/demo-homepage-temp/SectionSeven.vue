<template>
  <section
    data-surface-theme="secondary-dark"
    class="region @container col-span-full"
  >
    <div class="wrapper-grid @[80ch]:[--end-col:0]">
      <Card
        title="Test card"
        :reverse-order="true"
        :css="{
          card: 'col-start-2 col-end-2 w-full p-0',
          title: 'heading-md',
        }"
        :align-items="{
          column: 'center'
        }"
        :picture="{
          ratio: {
            column: 'widescreen'
          }
        }"
      >
        <template #picture>
          <!-- <CarPicture /> -->
          <img
            alt="user header"
            class="w-full"
            src="https://picsum.photos/1600/900"
          />          
        </template>
        <template #default>
          <p class="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
        <template #footer>
          <button class="btn btn-primary">Buy Now</button>
        </template>
      </Card>
    </div>
  </section>
</template>
