<template>
  <AdminHeader v-if="uiSettings" />
  <Header />
  <aside class="main-aside bg-primary">
    <slot name="aside"></slot>
  </aside>
  <main class="main-area"">
    <slot />
  </main>
  <UiSettingsPanel v-if="propsLoaded" v-model:sitePropSettings="settings" :showMenu="uiSettings" />
  <button
    v-if="propsLoaded"
    @click="uiSettings = !uiSettings"
    class="btn btn-circle fixed mr-lg bottom-lg z-50 right-0"
  >
    <Icon name="uil:cog" color="black" />
  </button>
</template>

<script lang="ts" setup>
import { useSiteSettings } from "../composables/useSiteSettings";
import globalFontProps, { systemFontDefinitions, googleFontDefinitions } from "../data/config/global-font-props"
import sizeProps from "../data/config/size-props"
import colorProps from "../data/config/color-props"
import CssCustomProperties from 'css-custom-properties';
// const { $CssCustomProperties } = useNuxtApp();

import type { SitePropSettings, GlobalFontConfigPropNames, SizeConfigKeys, ColorConfigKeys } from "../types";
import type { ValueUnitObj } from "../types";

const uiSettings = useState("ui-settings", () => false);
const settings: globalThis.Ref<SitePropSettings> = useSiteSettings();
const propsLoaded = ref(false)

const { $prismic } = useNuxtApp();

if ($prismic) {
  const { asImageSrc } = usePrismic()
  const siteSettings = useSettings()
  if(siteSettings) {
    useSeoMeta({
      title: siteSettings.value?.data?.site_title,
      description: siteSettings.value?.data?.meta_description,
      ogImage: asImageSrc(siteSettings.value?.data?.og_image),

    })
  }
} else {
  // The composable does not exist in the app
  // Handle the case accordingly
}


const getPropValues = () => {

  Object.entries(globalFontProps.fonts).forEach(([key, value]) => {
    if (key as GlobalFontConfigPropNames) {
      const propValue = CssCustomProperties.get(`--${key}`)
      if (propValue) {
        console.log(key,  propValue)
        const fontPropLookup = Object.entries({...systemFontDefinitions, ...googleFontDefinitions}).filter(([fontName, fontValue]) => {
          return propValue === fontValue
        })
        if(fontPropLookup) {
          console.log(fontPropLookup)
          const name = fontPropLookup[0] as unknown as string;
          settings.value.fonts[key as GlobalFontConfigPropNames].name = name;
        }
      }
    }
  });
  
  const setValueAndUnit = <T extends SizeConfigKeys | ColorConfigKeys>(props: Record<T, ValueUnitObj>, type: keyof SitePropSettings) => {
    Object.entries(props as Record<string, ValueUnitObj>).forEach(([key, config]) => {
      const propValue = CssCustomProperties.get(`--${key}`) ? CssCustomProperties.get(`--${key}`).toString().trim() : ''
      const propValueResult = splitValueAndUnit(propValue);

      if (propValueResult) {
        const [value, unit] = propValueResult;
        if (value && settings.value[type] && key in settings.value[type]) {
          settings.value[type][key as T] = { value, unit }; // Ensure type-safe assignment
        }
      }
  });  
  }

  setValueAndUnit<SizeConfigKeys>(sizeProps, 'size')
  setValueAndUnit<ColorConfigKeys>(colorProps, 'color')
}


onMounted(() => {

  getPropValues()
  propsLoaded.value = true


  watchEffect(() => {

    const newBodyFont = settings.value.fonts["font-family-base"].name;
    const newHeadingFont = settings.value.fonts["heading-font-family"].name;
    const newBaseFontSizePx = settings.value.size["font-size-base-px"]
    const textSizeIncrement = settings.value.size["text-size-increment"]
    const textFrameRatio = settings.value.size["text-frame-ratio"]
    const textFrameY = settings.value.size["text-frame-y"]
    const spaceIncrement = settings.value.size["space-increment"]
    const unitMax = settings.value.size["unit-max"]
    const unitFluid = settings.value.size["unit-fluid"]
    const radius = settings.value.size["radius"]
    const lineHeightFixed = settings.value.size["line-height-fixed"]
    const lineHeightRelative = settings.value.size["line-height-relative"]

    const primaryH = settings.value.color["primary-h"]
    const primaryC = settings.value.color["primary-c"]
    const primaryL = settings.value.color["primary-l"]
    const secondaryH = settings.value.color["secondary-h"]
    const secondaryC = settings.value.color["secondary-c"]
    const secondaryL = settings.value.color["secondary-l"]   
    const accentH = settings.value.color["accent-h"]
    const accentC = settings.value.color["accent-c"]
    const accentL = settings.value.color["accent-l"]        

    if (newBodyFont) {
      // check if google font and output based on value on googleFontDefinitions
      updateCustomProp('--font-family-base', `var(--font-family-${newBodyFont})`)
    }
    if (newHeadingFont) {
      updateCustomProp('--heading-font-family', `var(--font-family-${newHeadingFont})`)
    }
    if (newBaseFontSizePx) {
      updateSizeCustomProp('--font-size-base-px', newBaseFontSizePx)
    }
    if (textSizeIncrement) {
      updateSizeCustomProp('--text-size-increment', textSizeIncrement)
    }
    if (textFrameRatio) {
      updateSizeCustomProp('--text-frame-ratio', textFrameRatio)
    }  
    if (textFrameY) {
      updateSizeCustomProp('--text-frame-y', textFrameY)
    }
    if (spaceIncrement) {
      updateSizeCustomProp('--space-increment', spaceIncrement)
    }
    if (unitMax) {
      updateSizeCustomProp('--unit-max', unitMax)
    }
    if (unitFluid) {
      updateSizeCustomProp('--unit-fluid', unitFluid)
    }
    if (radius) {
      updateSizeCustomProp('--radius', radius)
    }
    if (lineHeightFixed) {
      updateSizeCustomProp('--line-height-fixed', lineHeightFixed)
    }
    if (lineHeightRelative) {
      updateSizeCustomProp('--line-height-relative', lineHeightRelative)
    }        
    if (primaryH) {
      updateSizeCustomProp('--primary-h', primaryH)
    }  
    if (primaryC) {
      updateSizeCustomProp('--primary-c', primaryC)
    }
    if (primaryL) {
      updateSizeCustomProp('--primary-l', primaryL)
    }
    if (secondaryH) {
      updateSizeCustomProp('--secondary-h', secondaryH)
    }  
    if (secondaryC) {
      updateSizeCustomProp('--secondary-c', secondaryC)
    }
    if (secondaryL) {
      updateSizeCustomProp('--secondary-l', secondaryL)
    } 
    if (accentH) {
      updateSizeCustomProp('--accent-h', accentH)
    }  
    if (accentC) {
      updateSizeCustomProp('--accent-c', accentC)
    }
    if (accentL) {
      updateSizeCustomProp('--accent-l', accentL)
    }                    
    

  });  

})


</script>

<style></style>
