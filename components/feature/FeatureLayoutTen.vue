<template>
  <Section>
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
            <div v-for="card in Array.from({ length: 2 })">
              <Card
                :css="{
                  card: 'flex',
                  caption: 'flex',
                }"
              >
                <template #caption="{ css }">
                  <h3
                    :class="[css.title, 'heading-xxs flex-col items-start']"
                    class="inline-flex items-center gap-rel-0.5"
                  >
                    <Icon
                      name="uil:github"
                      color="var(--color-primary)"
                      class="text-[1.5em]"
                    />
                    <span>Subheading 1</span>
                  </h3>
                </template>
                <template #default>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </template>
              </Card>
            </div>
          </div>
        </template>
        <template #footer>
          <button class="btn btn-primary btn-outline">Buy Now</button>
        </template>
      </Card>
    </div>
  </Section>
</template>
