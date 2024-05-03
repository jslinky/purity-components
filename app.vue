<!-- <template>
  <HelloWorld />
</template> -->

<script setup lang="ts">

const route = useRoute()

const isStyleGuide = computed(() => route.fullPath.split('/').includes("style-guide"))

provide('isStyleGuide', isStyleGuide)

</script>

<template>
  <!-- <Header /> -->
  <!-- <aside class="main-aside">
    <p>Aside</p>
  </aside> -->
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>

</template>
