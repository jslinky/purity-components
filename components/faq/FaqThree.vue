<script setup lang="ts">
const tabs = ref([
  {
    title: "This is a title",
    content: "This is some content",
  },
  {
    title: "This is a title",
    content: "This is some content",
  },
  {
    title: "This is a title",
    content: "This is some content",
  },
]);
</script>

<template>
  <Section class="@container">
    <div class="w-full">
      <Card
        title="FAQs"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        :align-items="{
          column: 'center',
        }"
        :reverse-source-order="true"
        :css="{
          title: 'heading-md',
          subtitle: 'text-lg',
          content: '[--flow-space:var(--spacing-xl)]',
        }"
      >
        <template #picture>
          <Accordion :activeIndex="0" class="w-full">
            <AccordionTab
              v-for="tab in tabs"
              :key="tab.title"
              :header="tab.title"
            >
              <p class="m-0">{{ tab.content }}</p>
            </AccordionTab>
          </Accordion>
        </template>
        <template #footer>
          <button class="btn btn-outline">Contact</button>
        </template>
      </Card>
    </div>
  </Section>
</template>
