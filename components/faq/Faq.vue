<script setup lang="ts">
import type { ComponentVariationsObj } from "../../types";

type FaqComponentVariationNames = "one" | "two" | "three" | "seven";

const selectedFeatureType: Ref<FaqComponentVariationNames> = ref("one");

const faqVariations: ComponentVariationsObj<FaqComponentVariationNames>[] = [
  {
    name: "one",
    component: defineAsyncComponent(() => import("./FaqOne.vue")),
  },
  {
    name: "two",
    component: defineAsyncComponent(() => import("./FaqTwo.vue")),
  },
  {
    name: "three",
    component: defineAsyncComponent(() => import("./FaqThree.vue")),
  },
  {
    name: "seven",
    component: defineAsyncComponent(() => import("./FaqSeven.vue")),
  },
];

const currentCom = useComponentVariation(faqVariations, selectedFeatureType);
</script>

<template>
  <div data-admin>
    <select id="faq-options" v-model="selectedFeatureType" name="faq-options">
      <option
        v-for="(options, index) in faqVariations"
        :key="index"
        :value="options.name"
      >
        {{ options.name }}
      </option>
    </select>
  </div>
  <component :is="currentCom" />
</template>
