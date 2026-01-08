<template>
  <div class="relative">
    <!-- CTA -->
    <section class="relative container overflow-hidden py-16 border-b">
      <div
        class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br frominfin/10 via-infin-secbg to-/20"
      ></div>
      <div class="mx-auto relative max-w-4xl text-center space-y-6">
        <h2 class="text-3xl font-bold tracking-tight text-infin md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p class="text-base text-infin-secondary leading-relaxed">
          Find answers to common questions about our products and services
        </p>
      </div>
    </section>
    <section class="relative container overflow-hidden py-16 border-b">
      <FaqList />
    </section>
  </div>
</template>

<script setup lang="ts">
import FaqList from '@/components/FaqList.vue'
</script>
