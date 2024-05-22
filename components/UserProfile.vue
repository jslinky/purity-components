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
  testimonial?: Content.TestimonialSliceDefaultItem; // not sure if correct
  stacked?: boolean;
  justify?: "start" | "center" | "end";
  css?: ComponentStyles;
};

const {
  name,
  jobTitle,
  image,
  testimonial,
  stacked = false,
  justify = "center",
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
    {
      "flex justify-center @[80ch]:flex-col w-full gap-x-md gap-y-sm": true,
      "flex-col": stacked,
    },
    css?.figure
  ),
  imageWrapper: cn({
    "@[80ch]:w-full flex": true,
    "justtify-start": !stacked || justify === "start",
    "justify-center": justify === "center",
    "justify-end": justify === "end"
  }, css?.imageWrapper),
  image: cn(
    "quote__avatar self-center h-auto w-16 @[80ch]:w-[clamp(4rem,15cqi,14rem)]",
    css?.image
  ),
  figcaption: cn(
    {
      "flex flex-col flex-auto @container": true,
      "text-left": !stacked,
      "text-left items-start": justify === "start" && stacked,
      "text-end items-end": justify === "end" && stacked,
      // "text-left items-start @[80ch]:items-center": justify === "center",
      "text-center items-center": justify === "center" && stacked,
      "items-center text-center": justify === "center" && stacked,
    }, // not sure if correct
    css?.figcaption
  ),
  name: cn("font-semibold", css?.name),
  jobTitle: cn(
    { "max-w-[80cqw] text-balance": true, "flex flex-col": stacked },
    css?.jobTitle
  ),
});
</script>

<template>
  <!-- <p class="absolute bg-primary z-50">{{ testimonial }}</p> -->
  <figure :class="figureStyles">
    <div :class="imageWrapperStyles">
      <slot name="image">
        <template v-if="testimonial">
          <PrismicImage
            v-if="testimonial?.data?.avatar"
            :field="testimonial?.data?.avatar"
            :class="imageStyles"
          />
        </template>
        <img
          v-else
          :src="
            image?.src
              ? image.src
              : 'https://assets.codepen.io/174183/avatar-2.jpg'
          "
          :alt="image?.alt ? image.alt : ''"
          :class="imageStyles"
        />
      </slot>
    </div>
    <figcaption :class="figcaptionStyles">
      <div>
        <p :class="nameStyles">
          {{ testimonial?.data?.name || name || "Justin Small" }}
        </p>
        <p :class="jobTitleStyles">
          <span
            >{{
              testimonial?.data?.job_title || jobTitle || "Front End Developer"
            }}<span v-if="testimonial?.data?.company_name">,</span></span
          ><span>{{
            testimonial?.data?.company_name
              ? ` ${testimonial?.data?.company_name}`
              : ""
          }}</span>
        </p>
      </div>
    </figcaption>
  </figure>
</template>
