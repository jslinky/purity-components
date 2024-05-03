<template>
  <section class="region @container">
    <div class="wrapper-grid">
      <Card
        title="Test card"
        :reverse-order="true"
        :is-stacked="true"
        :css="{
          card: 'col-span-full w-full p-0',
          title: 'heading-md',
          caption: 'flex-auto text-center',
          content: 'text-center max-w-prose mx-auto',
          picture: 'max-w-6xl mx-auto w-full',
          footer: 'text-center',
        }"
      >
        <template #picture>
          <img
            alt="user header"
            class="w-full"
            src="https://picsum.photos/400/200"
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