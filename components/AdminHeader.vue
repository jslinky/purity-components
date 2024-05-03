<template>
  <nav class="admin-header flex justify-center bg-dark text-light sticky top-0 z-10 [grid-area:admin-header] uppercase text-sm" role="navigation">
    <ul v-if="!isStyleGuide" class="flex gap-lg p-sm">
      <li><NuxtLink to="/">Example Pages</NuxtLink></li>
      <li><NuxtLink to="/style-guide/colour">Style Guide</NuxtLink></li>
    </ul>
    <ul v-else class="flex gap-lg p-sm">
      <li><NuxtLink to="/">Back</NuxtLink></li>
      <li><NuxtLink to="/style-guide/colour">Colour</NuxtLink></li>
      <li><NuxtLink to="/style-guide/typography">Typography</NuxtLink></li>
      <li><a href="#">Layout and Navigation</a></li>
      <li><NuxtLink to="/style-guide/components">Components</NuxtLink></li>
      <li><a href="#">Tables</a></li>
      <li><a href="#">Graphs and Charts</a></li>
      <li><a href="#">Icons and Shapes</a></li>
      <li><a href="#">Containers</a></li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>

const isStyleGuide = inject('isStyleGuide')

</script>

<style scoped>
  a[aria-current] {
    border-bottom: 1px solid white;
  }
</style>