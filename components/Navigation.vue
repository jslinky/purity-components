<template>
    <nav class="navigation main-header__main-nav">
      <div class="navigation__brand">
        <DemoLogo width="100%" height="100%" />
      </div>
      <div class="navigation__menu" v-if="!isStyleGuide">
        <button
          @click="toggleMenu"
          id="menu-toggle-btn"
          class="btn btn-circle"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="#menu"
        >
          <Icon v-if="isMenuOpen" name="uil:multiply" color="black" />
          <Icon v-else name="uil:bars" color="black" />
        </button>
        <ul id="menu" role="list" class="navigation__menu__menu">
          <li><NuxtLink to="/"><span>Home</span></NuxtLink></li>
          <li><NuxtLink to="/page-examples/about-us"><span>About us</span></NuxtLink></li>
          <li><NuxtLink to="/page-examples/our-services"><span>Our Services</span></NuxtLink></li>
          <li><NuxtLink to="/page-examples/news"><span>News</span></NuxtLink></li>
          <li><NuxtLink to="/page-examples/faqs"><span>FAQs</span></NuxtLink></li>
          <li><NuxtLink to="/page-examples/contact"><span>Contact</span></NuxtLink></li>
        </ul>
      </div>
      <div>
        <ul class="flex items-center">
          <li>
            <button class="btn btn-ghost">
              <Icon name="uil:search" color="black" />
            </button>
          </li>
          <li><button class="btn btn-neutral">Get in touch</button></li>
        </ul>
        
      </div>
    </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isStyleGuide = inject("isStyleGuide")

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
