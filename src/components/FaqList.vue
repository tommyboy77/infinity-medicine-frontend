<template>
  <div class="max-w-3xl mx-auto space-y-2">
    <div v-for="(faq, i) in faqs" :key="i" class="rounded-xl overflow-hidden shadow-sm">
      <button
        class="w-full flex text-sm justify-between items-center px-6 py-4 hover:bg-infin-secbg cursor-pointer font-semibold"
        @click="toggle(i)"
      >
        {{ faq.q }}
        <svg
          class="w-5 h-5 transition-transform"
          :class="{ 'rotate-180': open === i }"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" stroke="currentColor" fill="none" />
        </svg>
      </button>

      <div v-show="open === i" class="px-6 py-4 bg-infin-pribg text-sm text-infin-teritiary">
        {{ faq.a }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref<number | null>(null)

const toggle = (i: number): void => {
  open.value = open.value === i ? null : i
}

const faqs = [
  {
    q: 'What types of medical devices does Infinity Medicals offer?',
    a: 'Infinity Medicals specializes in energy-based medical technologies for dermatology and ophthalmology. Our product portfolio includes advanced laser systems, RF microneedling devices, plasma technology platforms, and innovative hair regrowth therapies.',
  },
  { q: 'Are devices certified?', a: 'Yes, FDA & CE compliant.' },
  { q: 'Can I request a demo?', a: 'Yes, depending on region.' },
  { q: 'Bulk or distributor?', a: 'Yes, B2B partnerships welcome.' },
]
</script>
