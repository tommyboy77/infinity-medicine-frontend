<template>
  <div
    v-if="!loading && productStore.dermatology.length && productStore.ophthalmology.length"
    class="relative"
  >
    <!-- HERO -->
    <main class="py-12 container md:py-20">
      <div class="mx-auto max-w-4xl">
        <div class="text-center space-y-4 mb-12">
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
              class="lucide lucide-file-text h-12 w-12 text-infin"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
          </div>
          <h1 class="text-4xl font-bold tracking-tight md:text-5xl">Complete Your Demo Request</h1>
          <p class="text-lg text-infin-secondary max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and our team will provide you with detailed information about
            our products and pricing.
          </p>
        </div>
        <div
          data-slot="card"
          class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-infin-teritiary/30 py-6 shadow-sm"
        >
          <div
            data-slot="card-header"
            class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
          >
            <div data-slot="card-title" class="leading-none font-semibold">Contact Information</div>
            <div data-slot="card-description" class="text-infin-secondary text-sm">
              Please provide your details so we can prepare a customized quote for your practice.
            </div>
          </div>
          <div data-slot="card-content" class="px-6">
            <form class="space-y-6" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="clinicName"
                    >Clinic Name *</label
                  ><input
                    data-slot="input"
                    class="file:text-primary placeholder:text-infin-secondary selection:bg-infin selection:text-infin dark:bg-infin-teritiary/30 border-infin-teritiary h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-infin-teritiary focus-visible:ring-infin-teritiary/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                    id="clinicName"
                    :required="true"
                    placeholder="Enter your clinic name"
                    value=""
                  />
                </div>
                <div class="space-y-2">
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="contactName"
                    >Contact Name *</label
                  ><input
                    data-slot="input"
                    class="file:text-primary placeholder:text-infin-secondary selection:bg-infin selection:text-infin dark:bg-infin-teritiary/30 border-infin-teritiary h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-infin-teritiary focus-visible:ring-infin-teritiary/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                    id="contactName"
                    :required="true"
                    placeholder="Your full name"
                    value=""
                  />
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="email"
                    >Email Address *</label
                  ><input
                    data-slot="input"
                    class="file:text-primary placeholder:text-infin-secondary selection:bg-infin selection:text-infin dark:bg-infin-teritiary/30 border-infin-teritiary h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-infin-teritiary focus-visible:ring-infin-teritiary/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                    id="email"
                    :required="true"
                    placeholder="you@clinic.com"
                    type="email"
                    value=""
                  />
                </div>
                <div class="space-y-2">
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="phone"
                    >Phone Number *</label
                  ><input
                    data-slot="input"
                    class="file:text-primary placeholder:text-infin-secondary selection:bg-infin selection:text-infin dark:bg-infin-teritiary/30 border-infin-teritiary h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-infin-teritiary focus-visible:ring-infin-teritiary/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                    id="phone"
                    :required="true"
                    placeholder="+965 XXXX XXXX"
                    type="tel"
                    value=""
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="country"
                  >Country *</label
                >
                <select
                  aria-hidden="true"
                  class="file:text-primary placeholder:text-infin-secondary selection:bg-infin selection:text-infin dark:bg-infin-teritiary/30 border-infin-teritiary h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-infin-teritiary focus-visible:ring-infin-teritiary/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                  :required="true"
                  tabindex="-1"
                >
                  <option value="Kuwait">Kuwait</option>
                  <option value="Oman">Oman</option>
                  <option value="Egypt">Egypt</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <!-- PRODUCTS OF INTEREST -->
              <div class="space-y-4">
                <div>
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >Products of Interest *</label
                  >
                  <p class="text-sm text-infin-secondary">
                    Select a product from the categories below that you’d like more information
                    about.
                  </p>
                </div>

                <div class="rounded-xl border border-infin-teritiary/60 bg-infin-pribg/10">
                  <div
                    v-for="(category, index) in accordionCategories"
                    :key="index"
                    class="border-b border-infin-teritiary/30 last:border-b-0"
                  >
                    <div>
                      <h3 class="flex">
                        <button
                          type="button"
                          class="flex flex-1 items-start justify-between gap-4 text-sm font-medium px-4 py-3 outline-none transition-all hover:underline"
                          @click="toggleAccordion(index)"
                        >
                          <div>
                            <p
                              class="text-sm text-left font-semibold uppercase tracking-[0.25em] text-infin-secondary"
                            >
                              {{ category.title }}
                            </p>
                            <p class="mt-1 text-left text-xs text-infin-secondary">
                              {{ category.description }}
                            </p>
                          </div>
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
                            class="lucide lucide-chevron-down text-infin-secondary pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                            :class="{ 'rotate-180': activeAccordion === index }"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </button>
                      </h3>

                      <div
                        v-show="activeAccordion === index"
                        class="overflow-hidden text-sm px-4 py-4 flex flex-wrap gap-2 border-t border-infin-teritiary/60"
                      >
                        <button
                          v-for="product in category.products"
                          :key="product.slug"
                          type="button"
                          @click="interest = product.slug"
                          :class="
                            interest === product.slug ? 'bg-infin text-white' : 'bg-background'
                          "
                          class="rounded-full border px-4 py-2 text-sm transition-colors border-infin-teritiary hover:border-primary/60 hover:text-primary"
                        >
                          {{ product.name }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="notes"
                  >Additional Notes</label
                ><textarea
                  class="flex min-h-[80px] w-full rounded-md border border-infin-teritiary bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-infin-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-infin-teritiary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="notes"
                  placeholder="Tell us about your specific requirements, questions, or any other details..."
                  rows="4"
                ></textarea>
              </div>
              <div v-if="date" class="bg-infin/5 border border-infin/20 rounded-lg p-4">
                <p class="text-sm">
                  <span class="font-semibold">Demo Date:</span>
                  {{
                    new Date(date.toString()).toLocaleDateString('en', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })
                  }}
                </p>
              </div>
              <button data-slot="button" class="btn-lg w-full" type="submit">Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>

  <div v-else class="container py-16 flex items-center justify-center" id="ourproducts">
    <div
      class="h-12 w-12 rounded-full border-4 border-infin border-t-transparent animate-spin"
      aria-label="Loading"
    />
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/productStore'
import { useRoute } from 'vue-router'
import { computed, nextTick, onMounted, ref } from 'vue'

const route = useRoute()
const productStore = useProductStore()
const loading = ref(false)
const interest = ref(route.query.interest || '')
const date = route.query.demo

const activeAccordion = ref<number | null>(null)

const toggleAccordion = (index: number) => {
  activeAccordion.value = activeAccordion.value === index ? null : index
}

// Group products into categories
const accordionCategories = computed(() => [
  {
    title: 'Dermatology Platforms',
    description: 'Energy-based systems for resurfacing, vascular, and rejuvenation.',
    products: productStore.dermatology.filter((s) => s.type === 'equipment'),
  },
  {
    title: 'Trichology & Hair Restoration',
    description: 'Clinical solutions supporting hair growth and maintenance.',
    products: productStore.dermatology.filter((s) => s.type === 'consumable'),
  },
  {
    title: 'Opthalmology Equipment & Tools',
    description: 'All sorts of machines, fillers and equipment of Opthalmology',
    products: productStore.ophthalmology,
  },
  {
    title: 'Energy-Based Accessories',
    description: 'Complementary handpieces and consumables for energy platforms.',
    products: [
      { name: 'Lavieen Roller Tip', slug: 'lavieen-roller' },
      { name: 'Lavieen Fractional Handpiece', slug: 'lavieen-fractional' },
      { name: 'Virtue RF Precision Tips', slug: 'virtue-rf-precision' },
      { name: 'Virtue RF DeepRF Handpiece', slug: 'virtue-rf-deeprf' },
      { name: 'PLADUO Spin Shot Applicator', slug: 'pladuo-spin' },
    ],
  },
  {
    title: 'Clinic Operations',
    description: 'Tools and services supporting clinical implementation.',
    products: [
      { name: 'On-Site Training', slug: 'onsite-training' },
      { name: 'Calibration & Servicing', slug: 'calibration' },
      { name: 'Marketing Support Kit', slug: 'marketing-kit' },
      { name: 'Clinical Protocol Library', slug: 'protocol-library' },
    ],
  },
])

onMounted(async () => {
  await productStore.fetchDermatology()
  await productStore.fetchOphthalmology()

  // Wait for computed categories to be ready
  await nextTick()

  // Open the accordion containing the initial interest
  if (interest.value) {
    const index = accordionCategories.value.findIndex((category) =>
      category.products.some((p) => p.slug === interest.value),
    )
    if (index !== -1) activeAccordion.value = index
  }
})

const handleSubmit = () => {
  alert(`Form submitted! Selected interest: ${interest.value}, Selected day:${date}`)
}
</script>
