<template>
  <div v-if="!loading && productStore.activeProduct" class="relative">
    <!-- HERO -->
    <section class="relative overflow-hidden border-b border-infin-teritiary/30 bg-infin-secbg/95">
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-b from-infin-secbg via-transparent to-infin-secbg"
      ></div>
      <div class="container relative py-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div class="lg:col-span-7 space-y-8">
            <div class="space-y-4">
              <div
                class="inline-flex items-center rounded-full border border-infin/20 bg-infin/5 px-3 py-1 text-xs font-medium text-infin uppercase tracking-wider"
              >
                Medical Aesthetic Device
              </div>
              <h1 class="text-5xl font-bold tracking-tight text-infin md:text-6xl lg:text-7xl">
                {{ productStore.activeProduct.name }}
              </h1>
              <p class="text-xl font-medium text-infin/90 md:text-2xl tracking-tight">
                {{ productStore.activeProduct.short_description }}
              </p>
            </div>
            <p
              class="text-lg text-infin-secondary leading-relaxed max-w-2xl border-l-2 border-infin/20 pl-6"
            >
              {{ productStore.activeProduct.description }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <a :href="'/quote?interest=' + productStore.activeProduct.slug"
                ><button data-slot="button" class="btn-lg">Request Quote</button></a
              ><a :href="'/demo?interest=' + productStore.activeProduct.slug"
                ><button data-slot="button" class="btn-lg-outline">Book a Demo</button></a
              >
            </div>
            <div
              class="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-infin-teritiary/50"
            >
              <div>
                <div
                  class="text-xs font-semibold uppercase tracking-wider text-infin-secondary mb-1"
                >
                  Type
                </div>
                <div class="font-medium">Medical Grade</div>
              </div>
              <div>
                <div
                  class="text-xs font-semibold uppercase tracking-wider text-infin-secondary mb-1"
                >
                  Support
                </div>
                <div class="font-medium">24/7 Technical</div>
              </div>
              <div>
                <div
                  class="text-xs font-semibold uppercase tracking-wider text-infin-secondary mb-1"
                >
                  Warranty
                </div>
                <div class="font-medium">Comprehensive</div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-5 relative">
            <div
              class="relative aspect-square lg:aspect-[3/4] rounded-3xl overflow-hidden border border-infin-teritiary/50 bg-infin-pribg/20 shadow-2xl"
            >
              <div
                class="absolute top-0 left-0 h-16 w-16 border-t-2 border-l-2 border-infin/20 rounded-tl-3xl"
              ></div>
              <div
                class="absolute top-0 right-0 h-16 w-16 border-t-2 border-r-2 border-infin/20 rounded-tr-3xl"
              ></div>
              <div
                class="absolute bottom-0 left-0 h-16 w-16 border-b-2 border-l-2 border-infin/20 rounded-bl-3xl"
              ></div>
              <div
                class="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-infin/20 rounded-br-3xl"
              ></div>
              <img
                :alt="productStore.activeProduct.name"
                class="w-full h-full object-cover p-8 mix-blend-multiply dark:mix-blend-normal"
                :src="productStore.activeProduct.photo"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-infin-secbg/20 to-transparent pointer-events-none"
              ></div>
            </div>
            <div
              class="absolute -z-10 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-infin/5 blur-3xl rounded-full"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section v-if="productStore.activeProduct.keyFeatures" class="py-24 bg-infin-pribg/20">
      <div class="container px-4 md:px-6 max-w-7xl">
        <div class="flex flex-col items-start space-y-4 mb-12 md:mb-16 max-w-3xl">
          <h2 class="text-3xl font-bold tracking-tight text-infin sm:text-4xl">Key Features</h2>
        </div>
        <div
          class="rounded-3xl border border-infin-teritiary/50 bg-infin-secbg shadow-sm overflow-hidden"
        >
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 lg:divide-y-0 divide-infin-teritiary/50"
          >
            <div
              v-for="feature in productStore.activeProduct.keyFeatures.keyFeatures"
              :key="feature.name"
              class="group relative p-8 transition-colors hover:bg-infin-pribg/30 md:border-r border-infin-teritiary/50 last:border-r-0 md:[&amp;:nth-child(2n)]:border-r-0 lg:[&amp;:nth-child(2n)]:border-r lg:[&amp;:nth-child(3n)]:border-r-0 border-b last:border-b-0 md:border-b md:[&amp;:nth-last-child(-n+2)]:border-b-0 lg:[&amp;:nth-last-child(-n+3)]:border-b-0"
            >
              <div class="flex flex-col h-full">
                <div
                  class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-infin-teritiary/50 bg-infin-pribg text-infin transition-colors group-hover:border-infin/20 group-hover:bg-infin/10 group-hover:text-infin"
                >
                  <div v-html="feature.icon" class="h-5 w-5 text-current" />
                </div>
                <h3
                  class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-infin-secondary transition-colors group-hover:text-infin"
                >
                  {{ feature.title }}
                </h3>
                <p class="text-sm text-infin-secondary leading-relaxed">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Key Ingredients -->
    <section v-if="productStore.activeProduct.keyIngredients" class="container py-16 md:py-24">
      <div class="mx-auto max-w-4xl space-y-8">
        <div class="text-center space-y-4">
          <h2 class="text-3xl font-bold tracking-tight md:text-4xl">Key Ingredients</h2>
          <p class="text-infin-secondary leading-relaxed">
            {{ productStore.activeProduct.keyIngredients.description }}
          </p>
        </div>
        <div
          v-if="productStore.activeProduct.keyIngredients.ingredients"
          class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base"
        >
          <div
            v-for="ingredient in productStore.activeProduct.keyIngredients.ingredients.slice(
              0,
              productStore.activeProduct.keyIngredients.ingredients.length - 1,
            )"
            :key="ingredient.name"
            class="bg-infin-secbg text-infin flex flex-col gap-6 rounded-xl border py-6 border-infin-teritiary/30 shadow-sm"
          >
            <div class="p-6 space-y-2">
              <h3 class="text-lg font-semibold">{{ ingredient.name }}</h3>
              <p>{{ ingredient.description }}</p>
            </div>
          </div>
          <div
            data-slot="card"
            class="bg-infin-secbg text-infin flex flex-col gap-6 rounded-xl border py-6 border-infin-teritiary/30 shadow-sm md:col-span-2"
          >
            <div
              v-if="
                productStore.activeProduct.keyIngredients.ingredients[
                  productStore.activeProduct.keyIngredients.ingredients.length - 1
                ]
              "
              data-slot="card-content"
              class="p-6 space-y-2"
            >
              <h3 class="text-lg font-semibold">
                {{
                  productStore.activeProduct.keyIngredients.ingredients[
                    productStore.activeProduct.keyIngredients.ingredients.length - 1
                  ].name
                }}
              </h3>
              <p>
                {{
                  productStore.activeProduct.keyIngredients.ingredients[
                    productStore.activeProduct.keyIngredients.ingredients.length - 1
                  ].description
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Technical Specs -->
    <section
      v-if="productStore.activeProduct.technicalSpecifications"
      class="container py-16 md:py-24"
    >
      <div class="max-w-4xl mx-auto space-y-8">
        <div class="text-center space-y-4">
          <h2 class="text-3xl font-bold tracking-tight md:text-4xl">Technical Specifications</h2>
        </div>
        <div class="rounded-2xl border border-infin-teritiary/60 bg-infin-secbg/90 shadow-sm">
          <dl class="divide-y divide-infin-teritiary/60">
            <div
              v-for="(value, key, index) in productStore.activeProduct.technicalSpecifications"
              :key="index"
              class="flex flex-col gap-2 p-6 md:flex-row md:items-baseline md:gap-6"
            >
              <dt
                class="text-xs font-semibold uppercase tracking-[0.3em] text-infin-secondary md:w-48"
              >
                {{ key }}
              </dt>
              <dd class="text-base font-medium text-infin md:text-lg">
                {{ value }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
    <!-- Clinical Benefits -->
    <section v-if="productStore.activeProduct.clinicalBenefits" class="py-16 md:py-24">
      <div class="container">
        <div class="max-w-3xl mx-auto">
          <div class="text-center space-y-4 mb-12">
            <h2 class="text-3xl font-bold tracking-tight md:text-4xl">Clinical Benefits</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="(benefit, index) in productStore.activeProduct.clinicalBenefits.benefits"
              :key="index"
              class="flex items-start gap-3"
            >
              <div
                class="flex-shrink-0 w-5 h-5 rounded-full bg-infin/10 flex items-center justify-center mt-0.5"
              >
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
                  class="lucide lucide-check h-3 w-3 text-infin"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <p class="text-sm leading-relaxed">
                {{ benefit }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Treatment Indications -->
    <section
      v-if="productStore.activeProduct.treatmentIndications"
      class="py-16 md:py-24 bg-infin-pribg/30"
    >
      <div class="container">
        <div class="text-center space-y-4 mb-12">
          <h2 class="text-3xl font-bold tracking-tight md:text-4xl">Treatment Indications</h2>
        </div>
        <div
          data-slot="card"
          class="bg-infin-secbg text-infin-secondary flex flex-col gap-6 rounded-xl border py-6 border-infin-teritiary/30 shadow-sm max-w-4xl mx-auto"
        >
          <div data-slot="card-content" class="p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="(indication, index) in productStore.activeProduct.treatmentIndications
                  .indications"
                :key="index"
                class="flex items-center gap-3 p-3 rounded-lg bg-infin-pribg/70"
              >
                <div class="w-2 h-2 rounded-full bg-infin flex-shrink-0"></div>
                <p class="text-sm font-medium">{{ indication }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Application -->
    <section
      v-if="productStore.activeProduct.application"
      class="py-16 container md:py-24 border-t border-infin-teritiary/30"
    >
      <div class="max-w-3xl mx-auto text-center space-y-6">
        <h2 class="text-3xl font-bold tracking-tight md:text-4xl">How to Use</h2>
        <p class="text-infin-secondary leading-relaxed">
          {{ productStore.activeProduct.application }}
        </p>
      </div>
    </section>
  </div>
  <div
    v-else-if="loading"
    class="container py-16 flex items-center justify-center"
    id="ourproducts"
  >
    <div
      class="h-12 w-12 rounded-full border-4 border-infin border-t-transparent animate-spin"
      aria-label="Loading"
    />
  </div>
  <div v-else class="container py-16 flex items-center justify-center" id="ourproducts">
    <p class="flex items-center text-center text-infin">No Product with this ID exists!</p>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/productStore'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
const route = useRoute()

const productStore = useProductStore()
const loading = ref(false)
const slug = route.params.slug
onMounted(async () => {
  if (slug) productStore.fetchBySlug(slug)
  else productStore.activeProduct = null
})
</script>
