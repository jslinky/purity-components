import type { ComponentVariationsObj } from "../types";

const useComponentVariation = <VariationNames>(
  variations: ComponentVariationsObj<VariationNames>[],
  selectedType: Ref<VariationNames>
) => {
  return computed(() => {
    const variation = variations.find((v) => v.name === selectedType.value);
    return variation ? variation.component : variations[0].component;
  });
};

export default useComponentVariation
