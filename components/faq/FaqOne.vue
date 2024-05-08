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
  <Section>
    <div class="wrapper">
      <Card
        title="FAQs"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        :align-items="{
          column: 'center',
        }"
        :css="{
          caption: 'text-center',
          title: 'heading-md',
          subtitle: 'text-lg',
          content: '[--flow-space:var(--spacing-xl)]',
          footer: 'text-center'
        }"
      >
        <template #default>
          <Accordion :activeIndex="0">
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
          <h3 class="heading-xxs">Still have questions?</h3>
          <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button class="btn btn-outline">Contact</button>
        </template>
      </Card>
    </div>
  </Section>
</template>
