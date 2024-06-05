<script setup lang="ts">
import type { CardPropsStyles, RowCardSettings } from "../../../types/global";
import type { CardDocument } from "@base/prismicio-types";

import DefaultCardSlotContent from "./default-content/DefaultCardSlotContent.vue";
import DefaultCardSlotContentCaption from "./default-content/DefaultCardSlotContentCaption.vue";
import DefaultCardSlotContentFooter from "./default-content/DefaultCardSlotFooter.vue";
import DefaultCardSlotContentPicture from "./default-content/DefaultCardSlotContentPicture.vue";

defineProps<{
  card: CardDocument;
  cardRowSettings: RowCardSettings;
  css?: CardPropsStyles;
}>();
</script>

<template>
  <Card
    :surface-theme="card?.data?.surface_background"
    :is-stacked="card?.data?.stacked_layout"
    :is-column-layout="card?.data?.column_layout"
    :picture="{
      linkUrl: card?.data?.image_link,
      ratio: {
        column: card?.data?.column_image_ratio,
        row: card?.data?.row_image_ratio,
      },
    }"
    :align-items="{
      column: card?.data?.align_column_body_content,
      row: card?.data?.align_row_body_content,
    }"
    :justify-content="{
      column: card?.data?.justify_column_body_content,
      row: card?.data?.justify_row_body_content,
    }"
    :text-align="{
      column: card?.data?.content_column_text_align ?? 'start',
      row: card?.data?.content_row_text_align ?? 'start',
    }"
    :clip="card?.data?.overflow_clip"
    :reverse-source-order="card?.data?.reverse_source_order"
    :reverse-order="{
      column: card?.data?.reverse_column_layout,
      row: card?.data?.reverse_row_layout,
    }"
    :overlay-image="card?.data?.content_overlay_image"
    :overlay-backdrop="card?.data?.content_overlay_backdrop"
    :overlay-backdrop-direction="{
      column: card?.data?.content_overlay_backdrop_dir_column,
      row: card?.data?.content_overlay_backdrop_dir_row,
    }"
    :image-mask="{
      column: card?.data?.image_mask,
      row: card?.data?.row_image_mask,
    }"
    :css="{
      card: card?.data?.class,
      picture: {
        'self-start': card?.data?.column_layout,
      },
    }"
  >
    <template #picture>
      <DefaultCardSlotContentPicture :card="card" />
    </template>
    <template #caption="{ css }">
      <DefaultCardSlotContentCaption :card="card" :css="css" />
    </template>
    <template #default>
      <DefaultCardSlotContent :card="card" />
    </template>
    <template #footer>
      <DefaultCardSlotContentFooter :card="card" />
    </template>
  </Card>
</template>
