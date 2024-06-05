<script setup lang="ts">
import * as prismic from "@prismicio/client";
import type { RouteLocationRaw } from "#vue-router";
const { $prismic } = useNuxtApp();


type ButtonComponentProps = {
  as?: "PrismicLink" | string;
  link: prismic.LinkField | RouteLocationRaw | null | undefined;
  text: prismic.KeyTextField;
  buttonStyle?: prismic.SelectField;
  buttonSize?: prismic.SelectField;
  iconName?: prismic.KeyTextField;
  iconPosition?: prismic.SelectField;
  iconSize?: prismic.SelectField;
  circular?: boolean;
  fullWidth?: boolean;
};

const { as } = defineProps<ButtonComponentProps>();

const componentIs = computed(() => {
  return $prismic && as === "PrismicLink" ? defineAsyncComponent(() => import("@prismicio/vue").then(module => module.PrismicLink)) : "a";
});


</script>

<template>
  <!-- :on-click="as !== 'PrismicLink' ? () => ((link ?? {})?.path ? navigateTo(link) : null) : null" -->
  <component
    :is="componentIs"
    :field="as === 'PrismicLink' ? link : null"    
    class="btn"
    :class="{
      'btn-neutral': buttonStyle === 'neutral',
      'btn-primary': buttonStyle === 'primary',
      'btn-secondary': buttonStyle === 'secondary',
      'btn-accent': buttonStyle === 'accent',
      'btn-ghost': buttonStyle === 'ghost',
      'btn-link': buttonStyle === 'link',
      'btn-circular': circular,
      'btn-full-width': fullWidth,
      'btn-outline': buttonStyle === 'outline-default',
      'btn-outline btn-primary': buttonStyle === 'outline-primary',
      'btn-outline btn-secondary': buttonStyle === 'outline-secondary',
      'btn-outline btn-accent': buttonStyle === 'outline-accent',
      'btn-sm': buttonSize === 'sm',
      'btn-md': buttonSize === 'md',
      'btn-lg': buttonSize === 'lg',
      'flex-row-reverse': iconPosition === 'right',
      'flex-col': iconPosition === 'top',
      'flex-col-reverse': iconPosition === 'bottom',
    }"
  >
    <slot v-if="iconName" name="icon" />
    {{ text }}
  </component>
</template>
