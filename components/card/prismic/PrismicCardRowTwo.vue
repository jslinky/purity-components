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
    :reverse-source-order="true"
    :surface-theme="card?.data?.surface_background"
    :picture="{
      linkUrl: card?.data?.image_link,
      ratio: {
        column:
          cardRowSettings?.column?.imageRatio ?? card?.data?.column_image_ratio,
        row: cardRowSettings?.row?.imageRatio ?? card?.data?.row_image_ratio,
      },
    }"
    :align-items="{
      column: cardRowSettings.column?.alignBodyContent
        ? cardRowSettings.column?.alignBodyContent
        : card?.data?.align_column_body_content ?? 'center',
      row:
        cardRowSettings.row?.alignBodyContent ??
        card?.data?.align_row_body_content,
    }"
    :justify-content="{
      column:
        cardRowSettings.column?.justifyBodyContent ??
        card?.data?.justify_column_body_content,
      row:
        cardRowSettings.row?.justifyBodyContent ??
        card?.data?.justify_row_body_content,
    }"
    :text-align="{
      column: cardRowSettings.column?.contentTextAlign
        ? cardRowSettings.column?.contentTextAlign
        : card?.data?.content_column_text_align ?? 'start',
      row: cardRowSettings.row?.contentTextAlign
        ? cardRowSettings.row?.contentTextAlign
        : card?.data?.content_row_text_align ?? 'start',
    }"
    :clip="card?.data?.overflow_clip"
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
