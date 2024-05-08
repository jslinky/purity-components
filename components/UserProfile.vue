<script setup lang="ts">
type ComponentStyles = {
  figure?: CssProp;
  imageWrapper?: CssProp;
  image?: CssProp;
  figcaption?: CssProp;
  name?: CssProp;
  jobTitle?: CssProp;
};

type ComponentPicture = {
  src?: string;
  alt?: string;
};

type ComponentProps = {
  name?: string;
  jobTitle?: string;
  image?: ComponentPicture;
  css?: ComponentStyles;
};

const {
  name,
  jobTitle,
  image,
  css,
} = defineProps<ComponentProps>();

const {
  figure: figureStyles,
  imageWrapper: imageWrapperStyles,
  image: imageStyles,
  figcaption: figcaptionStyles,
  name: nameStyles,
  jobTitle: jobTitleStyles,
} = reactive({
  figure: cn(
    "flex justify-center @[80ch]:flex-col w-full gap-x-md gap-y-sm",
    css?.figure
  ),
  imageWrapper: cn("@[80ch]:w-full flex justify-center", css?.imageWrapper),
  image: cn(
    "self-center h-auto w-16 @[80ch]:w-[clamp(4rem,15cqi,14rem)]",
    css?.image
  ),
  figcaption: cn(
    "flex items-start @[80ch]:items-center flex-col",
    css?.figcaption
  ),
  name: cn("font-semibold", css?.name),
  jobTitle: cn("", css?.jobTitle),
});
</script>

<template>
  <figure :class="figureStyles">
    <div :class="imageWrapperStyles">
      <slot name="image">
        <img :src="image?.src ? image.src : 'https://assets.codepen.io/174183/avatar-2.jpg' " :alt="image?.alt ? image.alt : ''" :class="imageStyles" />
      </slot>
    </div>
    <figcaption :class="figcaptionStyles">
      <p :class="nameStyles">{{ name || 'Justin Small' }}</p>
      <p :class="jobTitleStyles">{{ jobTitle || 'Front End Developer @ Self' }}</p>
    </figcaption>
  </figure>
</template>
