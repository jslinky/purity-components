<script setup lang="ts">
import type { ComponentVariationsObj } from "../../types";

type FeatureComponentVariationNames =
  | "one"
  | "four"
  | "seven"
  | "ten"
  | "thirteen"
  | "sixteen";

const selectedFeatureType: Ref<FeatureComponentVariationNames> = ref("one");

const featureVariations: ComponentVariationsObj<FeatureComponentVariationNames>[] =
  [
    {
      name: "one",
      component: defineAsyncComponent(() => import("./FeatureLayoutOne.vue")),
    },
    {
      name: "four",
      component: defineAsyncComponent(() => import("./FeatureLayoutFour.vue")),
    },
    {
      name: "seven",
      component: defineAsyncComponent(() => import("./FeatureLayoutSeven.vue")),
    },
    {
      name: "ten",
      component: defineAsyncComponent(() => import("./FeatureLayoutTen.vue")),
    },
    {
      name: "thirteen",
      component: defineAsyncComponent(
        () => import("./FeatureLayoutThirteen.vue")
      ),
    },
    {
      name: "sixteen",
      component: defineAsyncComponent(
        () => import("./FeatureLayoutSixteen.vue")
      ),
    },
  ];

const currentCom = useComponentVariation(
  featureVariations,
  selectedFeatureType
);
</script>

<template>
  <div data-admin>
    <select
      id="feature-options"
      v-model="selectedFeatureType"
      name="feature-options"
    >
      <option
        v-for="(options, index) in featureVariations"
        :key="index"
        :value="options.name"
      >
        {{ options.name }}
      </option>
    </select>
  </div>
  <component :is="currentCom" />
</template>
