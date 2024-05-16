<script setup lang="ts">

const { slice } = defineProps<{
  slice: PrismicSlice;
}>();

</script>

<template>
  <Section>
    <div class="wrapper-grid">
      <Card
        :reverse-order="!slice?.primary?.reverse_column_layout ?? false"
        :is-stacked="slice?.primary?.stacked_layout ?? false"
        :align-items="{
          column: slice?.primary?.align_column_body_content ?? 'center',
          row: slice?.primary?.align_row_body_content ?? 'start',
        }"
        :justify-content="{
          column: slice?.primary?.justify_column_body_content ?? 'start',
          row: slice?.primary?.justify_row_body_content ?? 'start',
        }"
        :picture="{
          ratio: {
            column: slice?.primary?.column_image_ratio ?? 'square',
            row: slice?.primary?.row_image_ratio ?? 'square',
          },
        }"
        :text-align="{
          column: slice?.primary?.content_column_text_align ?? 'start',
          row: slice?.primary?.content_row_text_align ?? 'start',
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
            <p :class="css.subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. </p>
            </slot>
        </template>

        <template #default>
          <slot name="feature-content" />

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
