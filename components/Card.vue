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

type ComponentPropsStyles = Partial<ComponentStyles>;

type ComponentProps = {
  picture?: ComponentPicture;
  title?: string;
  tagline?: string;
  subtitle?: string;
  isStacked?: boolean;
  reverseOrder?: boolean;
  interact?: boolean;
  noClip?: boolean;
  alignItems?: {
    column?: ComponentAlignItemsOption;
    row?: ComponentAlignItemsOption;
  };
  css?: ComponentPropsStyles;
};

const {
  picture,
  title,
  tagline,
  subtitle,
  isStacked = false,
  reverseOrder = false,
  interact = false,
  noClip,
  alignItems,
  css,
} = defineProps<ComponentProps>();

const alignItemsClass = (val: string) => {
  switch (val) {
    case "start":
      return "items-start";
      break;
    case "center":
      return "items-center";
      break;
    case "end":
      return "items-end";
      break;
    default:
      return "";
      break;
  }
};

const alignItemsColumn = computed(() =>
  alignItems?.column ? alignItemsClass(alignItems.column) : ""
);
const alignItemsRow = computed(() =>
  alignItems?.row ? alignItemsClass(alignItems.row) : ""
);

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
      alignItemsColumn.value,
      alignItemsRow.value,
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
    :data-surface-interact="interact"
    :data-card-clip="noClip ? false : true"
  >
    <template v-if="!reverseOrder">
      <component v-if="slots.picture || picture" :is="renderPicture" />
      <component v-if="slots.caption || slots.default || slots.footer || tagline || subtitle || title" :is="renderBody" />
    </template>
    <template v-else>
      <component v-if="slots.caption || slots.default || slots.footer || tagline || subtitle || title" :is="renderBody" />
      <component v-if="slots.picture || picture" :is="renderPicture" />
    </template>
  </article>
</template>
