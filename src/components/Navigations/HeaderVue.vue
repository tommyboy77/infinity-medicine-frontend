<template>
  <header
    class="sticky w-full top-0 z-50 border-b blurred-bg dark:bg-infin/40 translate-y-0 opacity-100"
  >
    <div class="container md:px-6 max-w-7xl relative mx-auto flex items-center h-20">
      <!-- Logo -->
      <div class="w-64 flex items-center">
        <div class="flex items-center gap-2">
          <img class="h-8" src="@/assets/logo.png" alt="">
          <span class="text-lg font-bold tracking-extra-trackinge text-infin dark:text-white"
            >INFINITY MEDICALS</span
          >
        </div>
      </div>
      <button class="flex md:hidden ml-auto" @click="mobileOpen = !mobileOpen">
        <svg
          class="w-4 h-4 mt-[1px] text-infin dark:text-white"
          :class="mobileOpen ? 'rotate-180' : ''"
          fill="none"
          stroke="currentColor"
          stroke-extra-trackingth="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium justify-center">
        <RouterLink
          to="/"
          class="hover:text-infin dark:hover:text-white text-infin-secondary dark:text-gray-400 uppercase transition active:text-infin dark:active:text-white"
          >HOME</RouterLink
        >

        <RouterLink
          to="/about"
          class="hover:text-infin dark:hover:text-white text-infin-secondary dark:text-gray-400 uppercase transition active:text-infin dark:active:text-white"
          >ABOUT</RouterLink
        >
        <RouterLink
          to="/locations"
          class="hover:text-infin dark:hover:text-white text-infin-secondary dark:text-gray-400 uppercase transition active:text-infin dark:active:text-white"
          >LOCATIONS</RouterLink
        >
        <!-- DERMATOLOGY -->
        <div
          @mouseenter="showCategories = true"
          @mouseleave="showCategories = false"
          class="relative"
        >
          <RouterLink
            :to="{ name: 'dermatology' }"
            class="flex items-center gap-1 hover:text-infin dark:hover:text-white text-infin-secondary dark:text-gray-400 uppercase transition active:text-infin dark:active:text-white"
          >
            DERMATOLOGY
            <svg
              class="w-4 h-4 mt-[1px]"
              fill="none"
              stroke="currentColor"
              stroke-extra-trackingth="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </RouterLink>

          <div
            v-show="showCategories"
            class="absolute top-full w-64 -left-20 rounded-lg mx-auto backdrop-blur-md bg-infin-secbg dark:bg-infin-darksecbg shadow-xl border border-infin-teritiary/40 p-4 z-50"
          >
            <div class="space-y-4 text-sm">
              <div>
                <RouterLink to="/dermatology#trichology">
                  <p
                    class="text-xs font-semibold extra-tracking text-infin-teritiary dark:text-gray-400 mb-2"
                  >
                    PRODUCTS
                  </p>
                </RouterLink>

                <RouterLink
                  v-for="item in dermprod"
                  :key="item.to"
                  :to="item.to"
                  class="block text-infin-secondary dark:text-gray-400 py-1 px-2 rounded-lg hover:bg-zinc-300 transition"
                >
                  {{ item.label }}
                </RouterLink>
              </div>

              <div>
                <RouterLink to="/dermatology#equipment">
                  <p
                    class="text-xs font-semibold extra-tracking text-infin-teritiary dark:text-gray-400 mb-2"
                  >
                    EQUIPMENT
                  </p>
                </RouterLink>

                <RouterLink
                  v-for="item in dermeq"
                  :key="item.to"
                  :to="item.to"
                  class="block text-infin-secondary dark:text-gray-400 py-1 rounded hover:bg-gray-300 px-2 transition"
                >
                  {{ item.label }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <!-- OPTHALMOLOGY -->
        <div
          @mouseenter="showCategories2 = true"
          @mouseleave="showCategories2 = false"
          class="relative"
        >
          <router-link
            :to="{ name: 'ophthalmology' }"
            class="flex items-center gap-1 hover:text-infin dark:hover:text-white text-infin-secondary dark:text-gray-400 uppercase transition active:text-infin dark:active:text-white"
          >
            OPTHALMOLOGY
            <svg
              class="w-4 h-4 mt-[1px]"
              fill="none"
              stroke="currentColor"
              stroke-extra-trackingth="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </router-link>

          <div
            v-show="showCategories2"
            class="absolute top-full w-64 -left-20 rounded-lg mx-auto backdrop-blur-md bg-infin-secbg dark:bg-infin-darksecbg shadow-xl border border-infin-teritiary/40 p-4 z-50"
          >
            <div class="space-y-4 text-sm">
              <div>
                <RouterLink
                  v-for="item in oph"
                  :key="item.to"
                  :to="item.to"
                  class="block text-infin-secondary dark:text-gray-400 py-1 px-2 rounded-lg hover:bg-zinc-300 transition"
                >
                  {{ item.label }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <RouterLink
          to="/support"
          class="hover:text-infin dark:hover:text-white text-infin-secondary dark:text-gray-400 uppercase transition active:text-infin dark:active:text-white"
          >SUPPORT</RouterLink
        >
      </nav>
      <!-- Right Controls -->
      <div class="flex items-center gap-2 ml-auto justify-end">
        <button
          class="p-2 rounded-full bg-white dark:bg-gray-800 text-infin-secondary cursor-pointer dark:text-gray-400 transition-colors"
          @click="toggleDark"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v1m0 16v1m8.485-8.485h1M3.515 12.515h1M18.364 5.636l.707.707M5.636 18.364l.707.707M18.364 18.364l.707-.707M5.636 5.636l.707-.707M12 5a7 7 0 000 14 7 7 0 000-14z"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="mobileOpen"
      class="md:hidden shadow-lg border-t border-infin-teritiary dark:border-gray-400 max-h-[80vh] overflow-y-auto p-6"
    >
      <nav class="flex flex-col gap-4">
        <RouterLink
          to="/"
          class="text-lg font-medium hover:text-infin dark:hover:text-white text-infin-secondary dark:text-gray-400 uppercase"
          >HOME</RouterLink
        >

        <RouterLink
          to="/about"
          class="text-lg font-medium hover:text-infin dark:hover:text-white text-infin-secondary dark:text-gray-400 uppercase"
          >ABOUT</RouterLink
        >
        <RouterLink
          to="/locations"
          class="text-lg font-medium hover:text-infin dark:hover:text-white text-infin-secondary dark:text-gray-400 uppercase"
          >Locations</RouterLink
        >
        <details class="border-t border-infin-teritiary dark:border-gray-400 pt-4">
          <summary
            class="flex justify-between items-center cursor-pointer text-lg font-medium text-infin-secondary dark:text-gray-400"
          >
            Ophthalmology
            <svg
              class="w-5 h-5 text-infin dark:text-white transition-transform"
              fill="none"
              stroke="currentColor"
              stroke-extra-trackingth="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <div class="mt-3 flex flex-col gap-2 ps-4">
            <RouterLink
              v-for="item in oph"
              :key="item.to"
              :to="item.to"
              class="py-1 rounded hover:bg-gray-300 px-2 transition text-infin-secondary dark:text-gray-400"
            >
              {{ item.label }}
            </RouterLink>
          </div>
        </details>
        <details class="border-t border-infin-teritiary dark:border-gray-400 pt-4">
          <summary
            class="flex justify-between items-center cursor-pointer text-lg font-medium text-infin-secondary dark:text-gray-400"
          >
            Dermatology
            <svg
              class="w-5 h-5 transition-transform"
              fill="none"
              stroke="currentColor"
              stroke-extra-trackingth="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <div class="mt-3 flex flex-col gap-2 ps-4">
            <RouterLink
              v-for="item in [...dermprod, ...dermeq]"
              :key="item.to"
              :to="item.to"
              class="py-1 rounded hover:bg-gray-300 px-2 transition text-infin-secondary dark:text-gray-400"
            >
              {{ item.label }}
            </RouterLink>
          </div>
        </details>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const showCategories = ref(false)
const showCategories2 = ref(false)
const mobileOpen = ref(false)

const toggleDark = (): void => {
  const darkmode = localStorage.getItem('darkmode')
  if (document.getElementById('main')) {
    document.getElementById('main')?.classList.toggle('dark')
    if (darkmode === 'true') {
      localStorage.setItem('darkmode', 'false')
    } else {
      localStorage.setItem('darkmode', 'true')
    }
  }
}

onMounted(() => {
  const darkmode = localStorage.getItem('darkmode')
  if (darkmode === 'true') {
    document.getElementById('main')?.classList.add('dark')
  } else {
    document.getElementById('main')?.classList.remove('dark')
  }
})

const dermeq = [
  { label: 'Lavieen', to: '/products/lavieen' },
  { label: 'Virtue RF', to: '/products/virtue-rf' },
  { label: 'V Laser', to: '/products/v-laser' },
  // { label: 'PLADUO', to: '/products/pladuo' },
  // { label: 'PLEXR', to: '/products/plexr' },
]
const dermprod = [
  { label: 'QR678 Injectable', to: '/products/qr-678-injectable' },
  { label: 'QR678 Shampoo', to: '/products/qr-678-fortifying-shampoo' },
  { label: 'Skin-F', to: '/products/skin-f' },
  { label: 'EPTQ Filler', to: '/products/e-p-t-q-filler' },
]
const oph = [
  { label: 'Diagnostic Equipment', to: '/ophthalmology#diagnostic-equipment' },
  { label: 'Plasma Treatment Devices', to: '/ophthalmology#plasma-treatment-devices' },
  { label: 'Surgical Instruments', to: '/ophthalmology#surgical-instruments' },
  { label: 'Surgical Disposables', to: '/ophthalmology#surgical-disposables' },
]
</script>
<style scoped>
.router-link-active {
  color: #121c26;
}
.dark .router-link-active {
  color: #ffffff;
}
</style>
