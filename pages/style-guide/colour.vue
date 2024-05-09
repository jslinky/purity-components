<template>
    <template v-for="(color, key) in styleDef.colors" :key="key">
        <div :class="color.color" class="grid place-content-center p-3">
          <p :class="color.foreground">{{ key }}</p>
        </div>
      </template>  
  
      <div v-for="(color, key) in styleDef.colors" :key="key" class="layout-grid grid-layout-col-count-1">
        <div v-for="(entry, entryKey) in color.range" :class="entry" class="lg:grid place-content-center p-md">
          <p>{{key}}-{{ entryKey }}</p>
        </div>
      </div>  
</template>

<script lang="ts" setup>

import { reactive } from 'vue';


const styleDef = reactive({
  colors: {
    primary: {
      color: 'bg-primary',
      foreground: 'text-primary-text',
      range: {
        'color-0': 'bg-primary-0 text-primary-0-text',
        'color-1': 'bg-primary-1 text-primary-1-text',
        'color-2': 'bg-primary-2 text-primary-2-text',
        'color-3': 'bg-primary-3 text-primary-3-text',
        'color-4': 'bg-primary-4 text-primary-4-text',
        'color-5': 'bg-primary-5 text-primary-5-text',
        'color-6': 'bg-primary-6 text-primary-6-text',
        'color-7': 'bg-primary-7 text-primary-7-text',
        'color-8': 'bg-primary-8 text-primary-8-text',
        'color-9': 'bg-primary-9 text-primary-9-text',
        'color-10': 'bg-primary-10 text-primary-10-text',
        'color-11': 'bg-primary-11 text-primary-11-text',
        'color-12': 'bg-primary-12 text-primary-12-text',
        'color-13': 'bg-primary-13 text-primary-13-text',
        'color-14': 'bg-primary-14 text-primary-14-text',
        'color-15': 'bg-primary-15 text-primary-15-text',        
      }
    },
    secondary: {
      color: 'bg-secondary',
      foreground: 'text-secondary-text',
      range: {
        'color-0': 'bg-secondary-0 text-secondary-0-text',
        'color-1': 'bg-secondary-1 text-secondary-1-text',
        'color-2': 'bg-secondary-2 text-secondary-2-text',
        'color-3': 'bg-secondary-3 text-secondary-3-text',
        'color-4': 'bg-secondary-4 text-secondary-4-text',
        'color-5': 'bg-secondary-5 text-secondary-5-text',
        'color-6': 'bg-secondary-6 text-secondary-6-text',
        'color-7': 'bg-secondary-7 text-secondary-7-text',
        'color-8': 'bg-secondary-8 text-secondary-8-text',
        'color-9': 'bg-secondary-9 text-secondary-9-text',
        'color-10': 'bg-secondary-10 text-secondary-10-text',
        'color-11': 'bg-secondary-11 text-secondary-11-text',
        'color-12': 'bg-secondary-12 text-secondary-12-text',
        'color-13': 'bg-secondary-13 text-secondary-13-text',
        'color-14': 'bg-secondary-14 text-secondary-14-text',
        'color-15': 'bg-secondary-15 text-secondary-15-text',           
      }
    }, 
    accent: {
      color: 'bg-accent',
      foreground: 'text-accent-text',
      range: {
        'color-0': 'bg-accent-0 text-accent-0-text',
        'color-1': 'bg-accent-1 text-accent-1-text',
        'color-2': 'bg-accent-2 text-accent-2-text',
        'color-3': 'bg-accent-3 text-accent-3-text',
        'color-4': 'bg-accent-4 text-accent-4-text',
        'color-5': 'bg-accent-5 text-accent-5-text',
        'color-6': 'bg-accent-6 text-accent-6-text',
        'color-7': 'bg-accent-7 text-accent-7-text',
        'color-8': 'bg-accent-8 text-accent-8-text',
        'color-9': 'bg-accent-9 text-accent-9-text',
        'color-10': 'bg-accent-10 text-accent-10-text',
        'color-11': 'bg-accent-11 text-accent-11-text',
        'color-12': 'bg-accent-12 text-accent-12-text',
        'color-13': 'bg-accent-13 text-accent-13-text',
        'color-14': 'bg-accent-14 text-accent-14-text',
        'color-15': 'bg-accent-15 text-accent-15-text',           
      }      
    },   
    grey: {
      color: 'bg-color-grey-8',
      foreground: 'text-grey-1',
      range: {
        'color-0': 'bg-grey-0 text-grey-0',
        'color-1': 'bg-grey-1 text-grey-1',
        'color-2': 'bg-grey-2 text-grey-2',
        'color-3': 'bg-grey-3 text-grey-3',
        'color-4': 'bg-grey-4 text-grey-4',
        'color-5': 'bg-grey-5 text-grey-5',
        'color-6': 'bg-grey-6 text-grey-6',
        'color-7': 'bg-grey-7 text-grey-7',
        'color-8': 'bg-grey-8 text-grey-8',
        'color-9': 'bg-grey-9 text-grey-9',
        'color-10': 'bg-grey-10 text-grey-10',
        'color-11': 'bg-grey-11 text-grey-11',
        'color-12': 'bg-grey-12 text-grey-12',
        'color-13': 'bg-grey-13 text-grey-13',
        'color-14': 'bg-grey-14 text-grey-14',
        'color-15': 'bg-grey-15 text-grey-15',           
      }      
    },            
  }
})

</script>

<style>

</style>