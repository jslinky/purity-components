<script lang="ts" setup>
const { reverse = false } = defineProps<{
  reverse: boolean;
}>();

const slots = useSlots();

const heroContentText = () => {
  return h(
    "div",
    {
      class:
        "hero-content__text @container flex-col flow justify-center place-content-center py-2xl px-card-component pl-card @[120ch]:py-card-component lg:pl-2xl",
    },
    [
      h(
        "div",
        {},
        slots["hero-content-heading"]
          ? slots["hero-content-heading"]()
          : [h("h2", { class: "heading-xl" }, "We build your digital future")]
      ),
      h(
        "div",
        {},
        slots["hero-content-body"]
          ? slots["hero-content-body"]()
          : [
              h(
                "p",
                { class: "text-xl max-w-prose text-balance" },
                "Help us help you take the next step in a journey which will lead you to the final step"
              ),
            ]
      ),
      h(
        "div",
        {},
        slots["hero-content-button"]
          ? slots["hero-content-button"]()
          : [
              h("div", { class: "flex" }, [
                h(
                  "a",
                  { href: "#", class: "btn btn-accent self-start" },
                  "Find out more"
                ),
              ]),
            ]
      ),
    ]
  );
};

const heroContentImage = () => {
  return h(
    "div",
    { class: "hero-content__image" },
    slots["hero-content-image"]
      ? slots["hero-content-image"]()
      : [h("img", { src: "https://picsum.photos/1200/500" })]
  );
};
</script>
<template>
  <article
    :class="{ '[--start-col:0]': reverse, '[--end-col:0]': !reverse }"
    class="hero-content wrapper-grid @container"
  >
    <div
      class="col-span-full @[120ch]:col-start-2 @[120ch]:col-end-2 hero-content__container flex-layout-grid justify-center"
    >
      <template v-if="!reverse">
        <component :is="heroContentText" />
        <component :is="heroContentImage" />
      </template>
      <template v-else>
        <component :is="heroContentImage" />
        <component :is="heroContentText" />
      </template>
      <!-- <div
        class="hero-content__text @container flex-col flow justify-center place-content-center py-2xl px-card-component pl-card @[120ch]:py-card-component lg:pl-2xl"
      >
        <slot name="hero-content-heading">
          <h2 class="heading-xl">We build your digital future</h2>
        </slot>
        <slot name="hero-content-body">
          <p class="text-xl max-w-prose text-balance">
            Help us help you take the next step in a journey which will lead you
            to the final step
          </p>
        </slot>
        <slot name="hero-content-button">
          <div class="flex">
            <a href="#" class="btn btn-accent self-start">Find out more</a>
          </div>
        </slot>
      </div>
      <div class="hero-content__image">
        <slot name="hero-content-image">
          <img src="https://picsum.photos/1200/500" />
        </slot>
      </div> -->
    </div>
  </article>
</template>
