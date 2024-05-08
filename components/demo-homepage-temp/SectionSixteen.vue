<script setup lang="ts">
import type { SectionComponentSettings } from "../../types";

const sectionSettings: SectionComponentSettings = reactive({
  container: false,
});
</script>

<template>
  <Section v-model:settings="sectionSettings">
    <div class="layout layout-grid [--layout-column-min:8ch]">
      <div>
        <div class="card border aspect-square">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card border aspect-square">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card border aspect-square">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card border aspect-square">
          <div class="card-body">
            <p>Card</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
