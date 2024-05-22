<template>
  <Section>
    <div class="wrapper-grid">
      <Card
        :reverse-source-order="!slice?.primary?.reverse_column_layout ?? false"
        :is-stacked="slice.primary.staked_layout ?? false"
        :align-items="{
          column: 'center',
        }"
        :picture="{
          ratio: {
            column: slice.primary.column_image_ratio ?? 'square',
            row: slice.primary.row_image_ratio ?? 'square',
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
          <slot name="feature-image">
            <img
              alt="user header"
              class="w-full"
              src="https://picsum.photos/600/600"
            />
          </slot>
        </template>

        <template #caption="{ css }">
          <slot name="feature-tagline">
            <p :class="css.tagline">Tagline</p>
          </slot>
          <slot name="feature-title">
            <h3 :class="css.title">Heading</h3>
          </slot>
          <slot name="feature-subtitle">
            <p :class="css.subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </slot>
        </template>

        <template #default>
          <slot name="feature-content" />
          <slot name="feature-content-repeat" :content="slice">
            <div
              class="layout layout-grid w-full [--layout-column-min:18ch] [--column-count:2]"
            >
              <div v-for="(item, index) in slice.items ?? Array.from({length:2})" :key="index">
                <Card
                  :css="{
                    card: 'flex',
                    caption: 'flex',
                  }"
                >
                  <template #caption="{ css }">
                    <div 
                    class="heading flex-auto inline-flex items-center gap-rel-0.5"
                    :class="[css.title, item.sub_heading_type
                            ? `heading-${item.sub_heading_type}`
                            : 'heading-xxs']">
                      <Icon
                      v-if="item.sub_heading_icon"
                      :name="item.sub_heading_icon"
                      color="var(--color-primary)"
                      class="text-[1.5em]"
                    />                      
                      <PrismicRichText
                        :field="item.sub_heading ?? 'Sub Heading'" class="contents"
                      />
                    </div> 
                    
                  </template>
                  <template #default>
                    <PrismicRichText :field="item.sub_content ?? ''" :class="item.sub_content_size ? `text-${item.sub_content_size}` : ''" />
                  </template>
                </Card>
              </div>
            </div>
          </slot>
        </template>
        <template #footer>
          <slot name="feature-footer" />
          <slot name="feature-buttons">
            <button class="btn btn-primary btn-outline">Buy Now</button>
          </slot>
        </template>
      </Card>
    </div>
  </Section>
</template>

<script setup lang="ts">
const { slice } = defineProps<{
  slice: PrismicSlice;
}>();

const slots = useSlots();

</script>
