<script setup lang="ts">
import type { CardPropsStyles } from "../../../../types/global";
import type { CardDocument } from "@base/prismicio-types";

defineProps<{
  card: CardDocument;
  css?: CardPropsStyles;
}>();
</script>

<template>
  <div
    v-if="
      card?.data?.slices &&
      card?.data?.slices.length > 0 &&
      card?.data?.slices.filter((item) => item.slice_type === 'button')
    "
    class="flex gap-md"
  >
    <template
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
</template>
