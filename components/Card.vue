<script lang="ts" setup>
type ComponentStyles = {
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

type ComponentPictureRatio =
  | "square"
  | "landscape"
  | "portrait"
  | "widescreen"
  | "ultrawide"
  | "golden"
  | "auto";

type ComponentPicture = {
  src?: string;
  alt?: string;
  css?: CssProp;
  linkUrl?: string;
  ratio?: {
    column?: ComponentPictureRatio;
    row?: ComponentPictureRatio;
  };
};

type ComponentAlignItemsOption = "start" | "center" | "end";
type ComponentJustifyContentOption = ComponentAlignItemsOption;

type ComponentPropsStyles = Partial<ComponentStyles>;

type ComponentProps = {
  picture?: ComponentPicture;
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
    column?: CardDocumentData["content_overlay_backdrop_dir_column"];
    row?: CardDocumentData["content_overlay_backdrop_dir_row"];
  }
  interact?: boolean;
  clip?: boolean;
  surfaceTheme?: string;
  imageMask?: {
    column?: CardDocumentData["image_mask"];
    row?: CardDocumentData["image_mask"];
  };
  alignItems?: {
    column?: ComponentAlignItemsOption;
    row?: ComponentAlignItemsOption;
  };
  justifyContent?: {
    column?: ComponentJustifyContentOption;
    row?: ComponentJustifyContentOption;
  };
  textAlign?: {
    column?: "left" | "center" | "right";
    row?: "left" | "center" | "right";
  };
  css?: ComponentPropsStyles;
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
  css,
} = defineProps<ComponentProps>();

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
}) as ComponentStyles;

const slots = useSlots();

const renderPicture = () => {
  return h(
    "div",
    {
      class: pictureStyles,
      "data-card-picture-aspect-column": picture?.ratio?.column || null,
      "data-card-picture-aspect-row": picture?.ratio?.row || null,
      "data-card-picture-mask-column": imageMask?.column ? (imageMask?.column !== 'none' ? imageMask?.column : null) : null,
      "data-card-picture-mask-row": imageMask?.row ? (imageMask?.row !== 'none' ? imageMask?.row : null) : null,
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
    :class="cardStyles"
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
    :data-card-overlay-backdrop-direction-column="overlayBackdropDirection?.column ?? null"
    :data-card-overlay-backdrop-direction-row="overlayBackdropDirection?.row ?? null"
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
