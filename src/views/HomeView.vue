<template>
  <div class="relative">
    <!-- HERO + LETTER INFO -->
    <section v-reveal="'up'" class="container py-16">
      <div class="mx-auto flex flex-col md:flex-row items-start gap-10">
        <!-- Left -->

        <div class="flex-1 flex flex-col justify-center space-y-6">
          <p
            class="mb-6 text-sm uppercase tracking-[0.6em] text-infin-secondary dark:text-gray-400"
          >
            Partnership &amp; Support
          </p>
          <h1
            class="font-serif uppercase font-light text-3xl leading-tight text-infin dark:text-white md:text-6xl lg:leading-[1.05]"
          >
            {{ infos[index].title }}
          </h1>
          <p class="text-base leading-relaxed text-infin-secondary dark:text-gray-400 md:text-lg">
            {{ infos[index].text }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <RouterLink to="/quote" class="btn-lg"> Get a Quote </RouterLink>

            <RouterLink to="/demo" class="btn-lg-outline"> Book a Demo </RouterLink>
          </div>
        </div>

        <!-- Right -->
        <LetterInfo class="hidden md:block" @update="updateIndex" />
      </div>
    </section>

    <!-- Dermatology Products -->
    <section
      v-reveal="'down'"
      v-if="!productStore.loading && productStore.dermatology.length > 0"
      class="pb-4 pt-16"
      id="ourproducts"
    >
      <div class="flex container items-center justify-between space-y-6 mx-auto mb-2">
        <div>
          <h3 class="subheader mb-2">Our Products</h3>
          <h3 class="title">Dermatology Solutions</h3>
        </div>
        <RouterLink to="/dermatology" class="linktext"> View All >> </RouterLink>
      </div>

      <ProductScroller :productsList="productStore.dermatology.slice(0, 6)" />
    </section>

    <section
      v-reveal="'left'"
      v-else-if="productStore.loading"
      class="pt-16 pb-4 flex items-center justify-center"
      id="ourproducts"
    >
      <div
        class="h-12 w-12 rounded-full border-4 border-infin-secondary border-t-transparent animate-spin"
        aria-label="Loading"
      />
    </section>

    <!-- Ophthalmology Products -->
    <section
      v-reveal="'right'"
      v-if="!productStore.loading && productStore.ophthalmology.length > 0"
      class="py-16 pb-4"
      id="ourproducts"
    >
      <div class="flex container items-center justify-between space-y-6 mx-auto mb-2">
        <div>
          <h3 class="subheader mb-2">Specialized Equipment</h3>
          <h3 class="title">Ophthalmology Solutions</h3>
        </div>
        <RouterLink to="/ophthalmology" class="linktext"> View All >> </RouterLink>
      </div>

      <ProductScroller :productsList="productStore.ophthalmology.slice(0, 6)" />
    </section>

    <section
      v-else-if="productStore.loading"
      class="container pt-16 flex items-center justify-center"
      id="ourproducts"
    >
      <div
        class="h-12 w-12 rounded-full border-4 border-infin-secondary border-t-transparent animate-spin"
        aria-label="Loading"
      />
    </section>

    <!-- STATEMENTS -->
    <section
      v-reveal="'leftt'"
      class="container py-16 flex flex-col items-center space-y-6 text-center px-6 py-36"
    >
      <p class="max-w-140 header">Redefining What's Possible in Modern Medical Technology</p>
      <p class="max-w-3xl bodytext">
        Infinity Medicals is built on one mission: redefining what's possible in modern medical
        technology. By studying global market trends, clinical needs, and practitioner feedback, we
        continuously transform insights into next-generation devices.
        <br />
        <br />
        Our solutions combine intelligent engineering, premium materials, and future-ready
        innovation — empowering medical specialists with tools designed for accuracy, durability,
        and truly exceptional patient results.
      </p>
    </section>
    <div v-reveal="'down'" class="w-full dark:bg-infin-darkpribg bg-infin-pribg">
      <section class="container py-16 flex flex-col items-center space-y-6 text-center px-6 py-36">
        <div class="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-award h-12 w-12 text-infin dark:text-white"
          >
            <path
              d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
            ></path>
            <circle cx="12" cy="8" r="6"></circle>
          </svg>
        </div>
        <p class="max-w-140 text-xl md:text-4xl mb-4 font-bold text-infin dark:text-white">
          ISO Certified Excellence
        </p>
        <p class="max-w-3xl text-xl text-infin-secondary dark:text-gray-400">
          All Infinity Medicals devices meet rigorous international quality and safety standards,
          ensuring compliance with global medical device regulations.
        </p>
      </section>
    </div>

    <!-- LOCATIONS -->
    <!-- (Kept inline – no logic, pure markup) -->
    <!-- You can extract later if needed -->

    <!-- FAQ -->
    <!-- <FaqList /> -->
  </div>
</template>

<script setup lang="ts">
import LetterInfo from '@/components/LetterInfo.vue'
import ProductScroller from '@/components/ProductScroller.vue'
import { useProductStore } from '@/stores/productStore'
// import FaqList from '@/components/FaqList.vue'
import { onMounted, ref } from 'vue'
const productStore = useProductStore()
const index = ref(0)

onMounted(async () => {
  productStore.fetchOphthalmology()
  productStore.fetchDermatology()
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function updateIndex(event: any) {
  index.value = event % 4
}
const vReveal = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mounted(el: HTMLElement, binding: any) {
    const direction = binding.value || 'up'
    el.classList.add('reveal', `reveal-${direction}`)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          el.classList.add('reveal-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
  },
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const infos: any[] = [
  {
    title: 'Infinity Medicine',
    text: 'From onboarding to lifetime maintenance, our engineers and clinical educators stay by your side.',
  },
  {
    title: 'Precision for Every Skin Journey',
    text: 'Our laser and RF systems deliver clinical-grade accuracy, consistent outcomes, and elegant patient experiences.',
  },
  {
    title: 'Visionary Solutions for Specialists',
    text: 'Engineered for delicate ophthalmic procedures with reliability that keeps operating rooms and clinics moving.',
  },
  {
    title: 'Service Beyond Installation',
    text: 'From onboarding to lifetime maintenance, our engineers and clinical educators stay by your side.',
  },
]
</script>
