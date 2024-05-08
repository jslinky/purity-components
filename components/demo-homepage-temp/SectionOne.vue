<template>
  <Section
    v-model:settings="sectionSettings"
  >
    <PartnerCompanies>
      <template #intro>
        <h2 class="heading heading-sm text-center pb-sm">Trusted by...</h2>
      </template>
    </PartnerCompanies>
  </Section>
</template>

<script setup lang="ts">

import type { SectionComponentSettings } from "../../types";

const sectionSettings: SectionComponentSettings = reactive({
  container: false
})

</script>
