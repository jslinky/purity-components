<script setup lang="ts">
import usePrismicClassResolve from "../../../../composables/usePrismicClassResolve";
import type {
  LayoutGrid,
  IconSize,
  CardPropsStyles,
} from "../../../../types/global";
import type { CardDocument } from "@base/prismicio-types";

const { getIconSize } = usePrismicClassResolve<LayoutGrid, IconSize>();

defineProps<{
  card: CardDocument;
  css: CardPropsStyles;
}>();
</script>

<template>
  <div :class="['flex items-center gap-x-xs', css.tagline]">
    <Icon
      v-if="card?.data?.tagline_icon_svg_name"
      :name="card?.data?.tagline_icon_svg_name"
      color="var(--color-primary)"
      :size="
        card?.data?.tagline_icon_size
          ? getIconSize(card.data.tagline_icon_size).value
          : '1em'
      "
    />
    <PrismicRichText v-if="card?.data?.tagline" :field="card?.data?.tagline" />
  </div>
  <PrismicRichText
    v-if="card?.data?.title"
    :class="
      cn(
        css.title,
        card?.data?.title_type
          ? `heading-${card.data.title_type}`
          : 'heading-xs'
      )
    "
    :field="card?.data?.title"
  />
  <PrismicRichText
    v-if="card?.data?.sub_title"
    :class="
      cn(
        css.subtitle,
        card?.data?.sub_title_size
          ? `text-${card.data.sub_title_size}`
          : 'text-md'
      )
    "
    :field="card?.data?.sub_title"
  />
</template>
<!-- <template #default>
    <PrismicRichText :field="card?.data?.content" />
  </template>
  <template #footer>
    <div class="flex gap-md">
      <template
        v-if="
          card?.data?.slices &&
          card?.data?.slices.length > 0 &&
          card?.data?.slices.filter((item) => item.slice_type === 'button')
        "
        v-for="(button, index) of card?.data?.slices.filter(
          (item) => item.slice_type === 'button'
        )"
        :key="index"
      >
        <PurityButton
          as="PrismicLink"
          :link="button.primary.link"
          :text="button?.primary?.text ? button.primary.text : ''"
          :button-style="
            button.primary.button_style ? button.primary.button_style : ''
          "
          :icon-name="button.primary.icon_svg_name"
          :icon-position="button.primary.icon_position"
          :icon-size="button.primary.icon_size"
          :circular="button.primary.circular"
          :full-width="button.primary.full_width"
        />
      </template>
    </div>
  </template> -->
