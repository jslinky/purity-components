<script setup lang="ts">
import type { SystemFontNames, SitePropSettings, ColorNames, GoogleFontNames } from "@/types";

const sitePropSettings = defineModel<SitePropSettings>("sitePropSettings");

const selectedBodyFont = ref("");
const selectedHeadingFont = ref("");
const baseFontSizePx = ref();
const textSizeIncrementProxy = ref();
const textFrameRatio = ref();
const textFrameY = ref();
const spaceIncrement = ref();
const unitMax = ref();
const unitFluid = ref();
const radius = ref();
const lineHeightFixed = ref();
const lineHeightRelative = ref();

const primaryH = ref();
const primaryC = ref();
const primaryL = ref();
const secondaryH = ref();
const secondaryC = ref();
const secondaryL = ref();
const accentH = ref();
const accentC = ref();
const accentL = ref();

const systemFonts: Ref<SystemFontNames[]> = ref([
  { name: "sans-system-ui" },
  { name: "sans-humanist" },
  { name: "sans-geometric-humanist" },
  { name: "sans-classical-humanist" },
  { name: "sans-neo-grotesque" },
  { name: "sans-industrial" },
  { name: "sans-rounded-sans" },
  { name: "serif-transitional" },
  { name: "serif-old-style" },
  { name: "serif-slab-serif" },
  { name: "serif-antique" },
  { name: "serif-didone" },
  { name: "monospace-slab-serif" },
  { name: "monospace-code" },
  { name: "cursive-handwritten" },
]);

const googleFonts: Ref<GoogleFontNames[]> = ref([
  {
    name: "sans-montserrat"
  }
])

const colors: Ref<ColorNames[]> = ref([
  { name: "primary-h" },
  { name: "primary-c" },
  { name: "primary-l" },
  { name: "secondary-h" },
  { name: "secondary-c" },
  { name: "secondary-l" },
  { name: "accent-h" },
  { name: "accent-c" },
  { name: "accent-l" },    
])

defineProps<{
  showMenu: boolean;
}>();

onMounted(() => {
  if (sitePropSettings.value) {
    const styles = getPropComputedStyle(document.documentElement);

    const basePx = splitValueAndUnit(styles("--font-size-base-px"));
    if (basePx) {
      const [value] = basePx;
      if (value) {
        baseFontSizePx.value = Number(value);
      }
    }

    const textSizeIncr = splitValueAndUnit(styles("--text-size-increment"));
    if (textSizeIncr) {
      const [value] = textSizeIncr;
      if (value) {
        textSizeIncrementProxy.value = Number(value);
      }
    }

    const spaceIncr = splitValueAndUnit(styles("--space-increment"));
    if (spaceIncr) {
      const [value] = spaceIncr;
      if (value) {
        spaceIncrement.value = Number(value);
      }
    }

    const radiusVal = splitValueAndUnit(styles("--radius"));
    if (radiusVal) {
      const [value] = radiusVal;
      if (value) {
        radius.value = Number(value);
      }
    }

    const textFrameRatioVal = splitValueAndUnit(styles("--text-frame-ratio"));
    if (textFrameRatioVal) {
      const [value] = textFrameRatioVal;
      if (value) {
        textFrameRatio.value = Number(value);
      }
    } 
    
    const textFrameYVal = splitValueAndUnit(styles("--text-frame-y"));
    if (textFrameYVal) {
      const [value] = textFrameYVal;
      if (value) {
        textFrameY.value = Number(value);
      }
    }
    
    const unitMaxVal = splitValueAndUnit(styles("--unit-max"));
    if (unitMaxVal) {
      const [value] = unitMaxVal;
      if (value) {
        unitMax.value = Number(value);
      }
    } 
    
    const unitFluidVal = splitValueAndUnit(styles("--unit-fluid"));
    if (unitFluidVal) {
      const [value] = unitFluidVal;
      if (value) {
        unitFluid.value = Number(value);
      }
    }
    
    const lineHeightFixedVal = splitValueAndUnit(styles("--line-height-fixed"));
    if (lineHeightFixedVal) {
      const [value] = lineHeightFixedVal;
      if (value) {
        lineHeightFixed.value = Number(value);
      }
    }
    
    const lineHeightRelativeVal = splitValueAndUnit(styles("--line-height-relative"));
    if (lineHeightRelativeVal) {
      const [value] = lineHeightRelativeVal;
      if (value) {
        lineHeightRelative.value = Number(value);
      }
    }    

  }
});

watchEffect(() => {
  if (selectedBodyFont.value && sitePropSettings.value) {
    sitePropSettings.value.fonts["font-family-base"].name = selectedBodyFont.value;
  }
  if (selectedHeadingFont.value && sitePropSettings.value) {
    sitePropSettings.value.fonts["heading-font-family"].name =
      selectedHeadingFont.value;
  }
  if (baseFontSizePx.value && sitePropSettings.value) {
    sitePropSettings.value.size["font-size-base-px"].value =
      baseFontSizePx.value.toString();
  }
  if (textSizeIncrementProxy.value && sitePropSettings.value) {
    sitePropSettings.value.size["text-size-increment"].value =
      textSizeIncrementProxy.value.toString();
  }
  if (spaceIncrement.value && sitePropSettings.value) {
    sitePropSettings.value.size["space-increment"].value =
      spaceIncrement.value.toString();
  }

  if (radius.value && sitePropSettings.value) {
    sitePropSettings.value.size["radius"].value =
      radius.value.toString();
  } 
  
  if (textFrameRatio.value && sitePropSettings.value) {
    sitePropSettings.value.size["text-frame-ratio"].value =
      textFrameRatio.value.toString();
  } 
  
  if (textFrameY.value && sitePropSettings.value) {
    sitePropSettings.value.size["text-frame-y"].value =
      textFrameY.value.toString();
  }
  
  if (unitMax.value && sitePropSettings.value) {
    sitePropSettings.value.size["unit-max"].value =
      unitMax.value.toString();
  }  

  if (unitFluid.value && sitePropSettings.value) {
    sitePropSettings.value.size["unit-fluid"].value =
      unitFluid.value.toString();
  }
  
  if (lineHeightFixed.value && sitePropSettings.value) {
    sitePropSettings.value.size["line-height-fixed"].value =
      lineHeightFixed.value.toString();
  }
  
  if (lineHeightRelative.value && sitePropSettings.value) {
    sitePropSettings.value.size["line-height-relative"].value =
      lineHeightRelative.value.toString();
  }  
  
  if (primaryH.value && sitePropSettings.value) {
    sitePropSettings.value.color["primary-h"].value =
      primaryH.value.toString();
  }
  
  if (primaryC.value && sitePropSettings.value) {
    sitePropSettings.value.color["primary-c"].value =
      primaryC.value.toString();
  }
  
  if (primaryL.value && sitePropSettings.value) {
    sitePropSettings.value.color["primary-l"].value =
      primaryL.value.toString();
  }  

});
</script>

<template>
  <div
    v-if="showMenu"
    class="ui-settings-panel fixed top-0 right-0 col-start-2 col-end-4 row-span-full bg-light/90 w-56 h-full ml-auto mr-0 z-50"
  >
    <div class="px-sm">
      <Dropdown
        :options="[...systemFonts, ...googleFonts]"
        @change="(val) => (selectedBodyFont = val.value.name)"
        optionLabel="name"
        placeholder="Select a body font"
        class="w-full block"
      />

      <Dropdown
        :options="systemFonts"
        @change="(val) => (selectedHeadingFont = val.value.name)"
        optionLabel="name"
        placeholder="Select a heading font"
        class="w-full block"
      />

      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Base font size</h4>
        <p>{{ baseFontSizePx }}</p>
        <!-- <InputText v-model.number="baseFontSize" :min="12" :max="18" class="w-full mb-3" /> -->
        <Slider
          v-model="baseFontSizePx"
          :step="1"
          :min="12"
          :max="18"
          class="w-full"
        />
      </div>

      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Text size increment</h4>
        <p>
          {{ textSizeIncrementProxy }}
        </p>
        <Slider
          v-model="textSizeIncrementProxy"
          :step="0.025"
          :min="1.2"
          :max="1.4"
          class="w-full"
        />
      </div>

      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Space increment</h4>
        <p>
          {{ spaceIncrement }}
        </p>
        <Slider
          v-model="spaceIncrement"
          :step="0.001"
          :min="1.1"
          :max="2"
          class="w-full"
        />
      </div>

      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Radius</h4>
        <p>
          {{ radius }}
        </p>
        <Slider
          v-model="radius"
          :step="0.025"
          :min="0"
          :max="4"
          class="w-full"
        />
      </div>

      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Text frame ratio</h4>
        <p>
          {{ textFrameRatio }}
        </p>
        <Slider
          v-model="textFrameRatio"
          :step="0.025"
          :min="1"
          :max="3"
          class="w-full"
        />
      </div>  
      
      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Text frame Y</h4>
        <p>
          {{ textFrameY }}
        </p>
        <Slider
          v-model="textFrameY"
          :step="0.025"
          :min="0.25"
          :max="1.5"
          class="w-full"
        />
      </div>
      
      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Unit (max)</h4>
        <p>
          {{ unitMax }}
        </p>
        <Slider
          v-model="unitMax"
          :step="0.025"
          :min="0.25"
          :max="1.5"
          class="w-full"
        />
      </div>  
      
      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Unit (fluid)</h4>
        <p>
          {{ unitFluid }}
        </p>
        <Slider
          v-model="unitFluid"
          :step="0.025"
          :min="0.25"
          :max="2"
          class="w-full"
        />
      </div>

      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Line height (fixed)</h4>
        <p>
          {{ lineHeightFixed }}
        </p>
        <Slider
          v-model="lineHeightFixed"
          :step="0.125"
          :min="-0.25"
          :max="1.5"
          class="w-full"
        />
      </div> 
      
      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Line height (relative)</h4>
        <p>
          {{ lineHeightRelative }}
        </p>
        <Slider
          v-model="lineHeightRelative"
          :step="0.125"
          :min="-0.125"
          :max="1.5"
          class="w-full"
        />
      </div>       
      
      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Primary Hue</h4>
        <p>
          {{ primaryH }}
        </p>
        <Slider
          v-model="primaryH"
          :step="1"
          :min="0"
          :max="360"
          class="w-full"
        />
      </div>    
      
      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Primary Chroma</h4>
        <p>
          {{ primaryC }}
        </p>
        <Slider
          v-model="primaryC"
          :step="0.01"
          :min="0"
          :max="0.37"
          class="w-full"
        />
      </div> 
      
      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Primary Lightness</h4>
        <p>
          {{ primaryL }}
        </p>
        <Slider
          v-model="primaryL"
          :step="0.25"
          :min="0"
          :max="100"
          class="w-full"
        />
      </div>       

    </div>
  </div>
</template>
