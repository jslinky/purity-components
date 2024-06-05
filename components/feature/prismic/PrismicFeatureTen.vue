<script setup lang="ts">
import type {
  FeatureSlice,
  FeatureSliceFeature10Primary,
  FeatureSliceFeature10PrimarySubContentItem,
} from "@base/prismicio-types";

const { slice } = defineProps<{
  slice: FeatureSlice;
}>();

// const slots = useSlots();
const primary = slice.primary as FeatureSliceFeature10Primary;

const subContent = computed(() => {
  const subContent =
    primary.sub_content as FeatureSliceFeature10PrimarySubContentItem[];
  return subContent.map((item) => item);
});

const footerButtons = computed(() => {
  return primary.button;
});
</script>

<template>
  <Section>
    <div class="wrapper-grid">
      <Card
        :reverse-source-order="!slice?.primary?.reverse_column_layout ?? false"
        :is-stacked="slice.primary.stacked_layout ?? false"
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
        :align-items="{
          column: primary.align_column_body_content || undefined,
          row: primary.align_row_body_content || undefined,
        }"
        :justify-content="{
          column: primary.justify_column_body_content || undefined,
          row: primary.justify_row_body_content || undefined,
        }"
        :text-align="{
          column: primary.content_column_text_align ?? 'start',
          row: primary.content_row_text_align ?? 'start',
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
            <PrismicRichText
              v-if="slice.primary.tagline"
              :field="slice.primary.tagline"
            />
            <p v-else :class="css.tagline">Tagline</p>
          </slot>
          <slot name="feature-title">
            <!-- {{ slice.primary.title_type }} -->
            <PrismicRichText
              :class="
                slice.primary.title_type
                  ? `heading-${slice.primary.title_type}` + ' ' + css.title
                  : `${css.title}`
              "
              v-if="slice.primary.title"
              :field="slice.primary.title"
            />
            <h3 v-else :class="css.title">Heading</h3>
          </slot>
          <slot name="feature-subtitle">
            <PrismicRichText
              v-if="slice.primary.sub_title"
              :field="slice.primary.sub_title"
              :class="
                slice.primary.sub_title_size
                  ? `text-${slice.primary.sub_title_size}` + ' ' + css.subtitle
                  : `${css.subtitle}`
              "
            />
            <p v-else :class="css.subtitle">
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
              <div
                v-for="(item, index) in subContent ?? Array.from({ length: 2 })"
                :key="index"
              >
                <Card
                  :css="{
                    card: 'flex',
                    caption: 'flex',
                  }"
                >
                  <template #caption="{ css }">
                    <div
                      class="heading flex-auto flex-col items-start inline-flex gap-rel-0.5"
                      :class="[
                        css.title,
                        item.heading_type
                          ? `heading-${item.heading_type}`
                          : 'heading-xxs',
                      ]"
                    >
                      <Icon
                        v-if="item.heading_icon"
                        :name="item.heading_icon"
                        color="var(--color-primary)"
                        class="text-[1.5em]"
                      />
                      <PrismicRichText
                        :field="item.heading ?? 'Sub Heading'"
                        class="contents"
                      />
                    </div>
                  </template>
                  <template #default>
                    <PrismicRichText
                      :field="item.content ?? ''"
                      :class="
                        item.content_size ? `text-${item.content_size}` : ''
                      "
                    />
                  </template>
                </Card>
              </div>
            </div>
          </slot>
        </template>
        <template #footer>
          <slot name="feature-footer" />
          <slot name="feature-buttons">
            <template v-for="(item, index) in footerButtons" :key="index">
              <PurityButton
                as="PrismicLink"
                :link="item.link"
                :text="item.text ? item.text : ''"
                :button-style="item.button_style ? item.button_style : ''"
                :icon-name="item.icon_svg_name"
                :icon-position="item.icon_position"
                :icon-size="item.icon_size"
                :circular="item.circular"
                :full-width="item.full_width"
              />
            </template>
          </slot>
        </template>
      </Card>
    </div>
  </Section>
</template>
