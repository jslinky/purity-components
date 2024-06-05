<script lang="ts" setup>
// import Card from "@base/pages/design-system/components/card.vue";
import type { CardDocumentData } from "@base/prismicio-types";
import * as prismic from "@prismicio/client";
const { $prismic } = useNuxtApp();

type CardStyles = {
  card: CssProp;
  caption: CssProp;
  tagline: CssProp;
  title: CssProp;
  subtitle: CssProp;
  picture: CssProp;
  body: CssProp;
  content: CssProp;
  footer: CssProp;
};

type CardPictureRatio =
  CardDocumentData["column_image_ratio"] extends prismic.SelectField<infer U>
    ? U
    :
        | "square"
        | "landscape"
        | "portrait"
        | "widescreen"
        | "ultrawide"
        | "golden"
        | "auto";

type CardPicture = {
  src?: string;
  alt?: string;
  css?: CssProp;
  linkUrl?: CardDocumentData["image_link"] | string;
  ratio?: {
    column?: CardPictureRatio;
    row?: CardPictureRatio;
  };
};

type CardSurfaceTheme =
  CardDocumentData["surface_background"] extends prismic.SelectField<infer U>
    ? U
    :
        | "light"
        | "dark"
        | "eggshell"
        | "primary"
        | "primary-light"
        | "primary-dark"
        | "secondary"
        | "secondary-light"
        | "secondary-dark"
        | "accent"
        | "accent-light"
        | "accent-dark";

type CardImageMask = CardDocumentData["image_mask"] extends prismic.SelectField<
  infer U
>
  ? U
  :
      | "linear-to-top"
      | "linear-to-right"
      | "linear-to-bottom"
      | "linear-to-left"
      | "none";

type CardOverlayBackdropDirection =
  CardDocumentData["content_overlay_backdrop_dir_column"] extends prismic.SelectField<
    infer U
  >
    ? U
    :
        | "uniform"
        | "linear-to-top"
        | "linear-to-right"
        | "linear-to-bottom"
        | "linear-to-left";
("filled");

type CardAlignItemsOption =
  CardDocumentData["align_column_body_content"] extends prismic.SelectField<
    infer U
  >
    ? U
    : "start" | "center" | "end";

type CardJustifyContentOption =
  CardDocumentData["justify_column_body_content"] extends prismic.SelectField<
    infer U
  >
    ? U
    : "start" | "center" | "end";

type CardTextAlignOption =
  CardDocumentData["content_column_text_align"] extends prismic.SelectField<
    infer U
  >
    ? U
    : "start" | "center" | "end";

type CardColumnWidths =
  CardDocumentData["column_widths"] extends prismic.SelectField<infer U>
    ? U
    :
        | "picture_3-content_9"
        | "picture_4-content_8"
        | "picture_5-content_7"
        | "picture_6-content_6"
        | "picture_7-content_5"
        | "picture_8-content_4"
        | "picture_9-content_3";

type CardPropsStyles = Partial<CardStyles>;

type CardProps = {
  picture?: CardPicture;
  title?: string;
  tagline?: string;
  subtitle?: string;
  isStacked?: boolean;
  isColumnLayout?: boolean;
  reverseSourceOrder?: boolean;
  reverseOrder?: {
    column?: boolean;
    row?: boolean;
  };
  overlayImage?: boolean;
  overlayBackdrop?: boolean;
  overlayBackdropDirection?: {
    column?: CardOverlayBackdropDirection;
    row?: CardOverlayBackdropDirection;
  };
  interact?: boolean;
  clip?: boolean;
  surfaceTheme?: CardSurfaceTheme;
  imageMask?: {
    column?: CardImageMask;
    row?: CardImageMask;
  };
  alignItems?: {
    column?: CardAlignItemsOption;
    row?: CardAlignItemsOption;
  };
  justifyContent?: {
    column?: CardJustifyContentOption;
    row?: CardJustifyContentOption;
  };
  textAlign?: {
    column?: CardTextAlignOption;
    row?: CardTextAlignOption;
  };
  columnWidths?: CardColumnWidths;
  css?: CardPropsStyles;
};

const {
  picture,
  title,
  tagline,
  subtitle,
  isStacked = false,
  reverseSourceOrder = false,
  isColumnLayout = false,
  interact = false,
  reverseOrder,
  overlayImage = false,
  overlayBackdrop = false,
  overlayBackdropDirection,
  clip,
  surfaceTheme,
  imageMask,
  alignItems,
  justifyContent,
  textAlign,
  columnWidths,
  css,
} = defineProps<CardProps>();

const {
  card: cardStyles,
  caption: captionStyles,
  tagline: taglineStyles,
  title: titleStyles,
  subtitle: subtitleStyles,
  picture: pictureStyles,
  body: bodyStyles,
  content: contentStyles,
  footer: footerStyles,
} = reactive({
  card: cn(
    [
      "card",
      isStacked ? "card--stacked" : "",
      isColumnLayout ? "card--side" : "",
    ],
    css?.card
  ),
  caption: cn("card-caption", css?.caption),
  tagline: cn("card-tagline", css?.tagline),
  title: cn("card-title", css?.title),
  subtitle: cn("card-subtitle", css?.subtitle),
  picture: cn("card-picture", css?.picture),
  body: cn("card-body", css?.body),
  content: cn("card-content", css?.content),
  footer: cn("card-footer", css?.footer),
}) as CardStyles;

const slots = useSlots();

const computedColumnWidths = computed(() => {
  if (columnWidths) {
    switch (columnWidths) {
      case "picture_3-content_9":
        return ["[--card-left-col:0.25fr]", "[--card-right-col:0.75fr]"];
      case "picture_4-content_8":
        return ["[--card-left-col:0.33fr]", "[--card-right-col:0.66fr]"];
      case "picture_5-content_7":
        return ["[--card-left-col:0.4fr]", "[--card-right-col:0.6fr]"];
      case "picture_6-content_6":
        return ["[--card-left-col:0.5fr]", "[--card-right-col:0.5fr]"];
      case "picture_7-content_5":
        return ["[--card-left-col:0.58fr]", "[--card-right-col:0.42fr]"];
      case "picture_8-content_4":
        return ["[--card-left-col:0.66fr]", "[--card-right-col:0.33fr]"];
      case "picture_9-content_3":
        return ["[--card-left-col:0.75fr]", "[--card-right-col:0.25fr]"];        
      default:
        break;
    }
  }
});

const renderPicture = () => {
  return h(
    "div",
    {
      class: pictureStyles,
      "data-card-picture-aspect-column": picture?.ratio?.column || null,
      "data-card-picture-aspect-row": picture?.ratio?.row || null,
      "data-card-picture-mask-column": imageMask?.column
        ? imageMask?.column !== "none"
          ? imageMask?.column
          : null
        : null,
      "data-card-picture-mask-row": imageMask?.row
        ? imageMask?.row !== "none"
          ? imageMask?.row
          : null
        : null,
    },
    [
      // Render slot 'picture' or the <img> tag if 'picture' prop is provided
      slots.picture
        ? slots.picture()
        : picture
        ? h("img", {
            src: picture.src,
            alt: picture.alt,
            css: picture.css, // Note: Vue doesn't inherently handle `css` prop, use `style` if it was intended to be inline styles
          })
        : undefined,
    ]
  );
};

const renderBody = () => {
  return h("div", { class: bodyStyles }, [
    h("div", { class: captionStyles }, [
      // Render 'caption' slot or fallback content
      slots.caption
        ? slots.caption({
            css: {
              title: titleStyles,
              tagline: taglineStyles,
              subtitle: subtitleStyles,
            },
          })
        : [
            tagline ? h("p", { class: taglineStyles }, tagline) : undefined,
            title ? h("h3", { class: titleStyles }, title) : undefined,
            subtitle ? h("p", { class: subtitleStyles }, subtitle) : undefined,
          ],
    ]),
    // Conditionally render the default slot
    slots.default
      ? h("div", { class: contentStyles }, slots.default())
      : undefined,
    // Conditionally render the footer slot
    slots.footer
      ? h("div", { class: footerStyles }, slots.footer())
      : undefined,
  ]);
};
</script>

<template>
  <article
    :class="[cardStyles, computedColumnWidths]"
    :data-surface-theme="surfaceTheme"
    :data-surface-interact="interact"
    :data-card-clip="clip ?? true"
    :data-card-column-align="alignItems?.column"
    :data-card-row-align="alignItems?.row"
    :data-card-column-justify="justifyContent?.column"
    :data-card-row-justify="justifyContent?.row"
    :data-card-column-text-align="textAlign?.column"
    :data-card-row-text-align="textAlign?.row"
    :data-card-reverse-order-column="reverseOrder?.column"
    :data-card-reverse-order-row="reverseOrder?.row"
    :data-card-overlay-image="overlayImage ? 'true' : null"
    :data-card-overlay-backdrop="overlayBackdrop ? 'true' : null"
    :data-card-overlay-backdrop-direction-column="
      overlayBackdropDirection?.column ?? null
    "
    :data-card-overlay-backdrop-direction-row="
      overlayBackdropDirection?.row ?? null
    "
  >
    <template v-if="!reverseSourceOrder">
      <component :is="renderPicture" v-if="slots.picture || picture" />
      <component
        :is="renderBody"
        v-if="
          slots.caption ||
          slots.default ||
          slots.footer ||
          tagline ||
          subtitle ||
          title
        "
      />
    </template>
    <template v-else>
      <component
        :is="renderBody"
        v-if="
          slots.caption ||
          slots.default ||
          slots.footer ||
          tagline ||
          subtitle ||
          title
        "
      />
      <component :is="renderPicture" v-if="slots.picture || picture" />
    </template>
  </article>
</template>
