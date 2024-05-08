<template>
  <section
    :id="settingsModel?.id"
    class="region relative"
    :class="{
      '@container': settingsModel?.container ?? true,
      'col-span-full': settingsModel?.spanFull ?? false,
    }"
    :data-surface-theme="settingsModel.surfaceTheme"
  >
    <client-only>
      <div data-admin class="absolute top-md left-md z-50">
        <div class="flex">
          <select
            v-model="settingsModel.surfaceTheme"
            class="absolute top-md left-md"
          >
            <option
              v-for="(options, index) in surfaceThemeTypes"
              :key="index"
              :value="options"
            >
              {{ options }}
            </option>
          </select>
          <!-- <input type="checkbox" name="" /> -->

          <label :for="`span-full-${uuid}`">span full:</label>
          <input
            :id="`span-full-${uuid}`"
            v-model="settingsModel.spanFull"
            type="checkbox"
            :name="`span-full-${uuid}`"
          />
        </div>
      </div>
    </client-only>
    <slot />
  </section>
</template>

<script lang="ts" setup>
import type { SectionComponentSettings } from "../types";

const instance = getCurrentInstance();
const uuid = ref(instance?.uid);

const surfaceThemeTypes = useSurfaceTheme();

const settingsModel = defineModel<SectionComponentSettings>("settings", {
  default: {
    container: true,
    spanFull: false,
    surfaceTheme: undefined,
  },
});
</script>

<style></style>
