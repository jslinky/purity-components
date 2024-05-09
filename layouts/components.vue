<template>
  <aside class="col-start-1 col-end-1">
    <details>
      <summary>Feature</summary>
      <div class="flex flex-col">
        <NuxtLink to="/style-guide/components/feature/featureOne">Feature One</NuxtLink>
        <NuxtLink to="/style-guide/components/feature/featureFour">Feature Four</NuxtLink>
        <NuxtLink to="/style-guide/components/feature/featureSeven">Feature Seven</NuxtLink>
        <NuxtLink to="/style-guide/components/feature/featureTen">Feature Ten</NuxtLink>
        <NuxtLink to="/style-guide/components/feature/featureThirteen">Feature Thirteen</NuxtLink>
        <NuxtLink to="/style-guide/components/feature/featureSixteen">Feature Sixteen</NuxtLink>
      </div>
    </details>
    <details>
      <summary>FAQ</summary>
      <div class="flex flex-col">
        <NuxtLink to="/style-guide/components/faq/faqOne">FAQ One</NuxtLink>
        <NuxtLink to="/style-guide/components/faq/faqTwo">FAQ Two</NuxtLink>
        <NuxtLink to="/style-guide/components/faq/faqThree">FAQ Three</NuxtLink>
        <NuxtLink to="/style-guide/components/faq/faqSeven">FAQ Seven</NuxtLink>
      </div>
    </details>    
    <details>
      <summary>Testimonial</summary>
      <div class="flex flex-col">
        <NuxtLink to="/style-guide/components/testimonial/testimonialOne">Testimonial One</NuxtLink>
        <NuxtLink to="/style-guide/components/testimonial/testimonialFour">Testimonial Four</NuxtLink>
      </div>
    </details>        
  </aside>
  <slot></slot>
</template>
