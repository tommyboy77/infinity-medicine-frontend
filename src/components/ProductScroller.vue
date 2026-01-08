<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div
    ref="scroller"
    id="productScroller"
    class="mx-auto flex gap-6 overflow-x-auto overflow-y-hidden pb-6 scrollbar-none"
    @wheel.prevent="onWheel"
    @mousedown="onMouseDown"
    @mouseleave="onMouseLeave"
    @mouseup="onMouseUp"
    @mousemove="onMouseMove"
  >
    <div v-for="p in productsList" :key="p.slug" class="product-card group">
      <div class="h-1/2 bg-infin-secbg w-full flex items-center justify-center overflow-hidden">
        <img
          :src="p.photo || ''"
          :alt="p.name"
          class="max-h-64 transition-transform duration-300 ease-out group-hover:scale-125 origin-bottom"
        />
      </div>

      <div class="text-left mt-2 w-full p-4 flex flex-col h-1/2">
        <p class="text-infin-teritiary text-xs capitalize">
          {{ p.short_description }}
        </p>

        <h3 class="text-xl font-semibold mb-2">
          {{ p.name }}
        </h3>

        <p class="text-infin-secondary line-clamp-4 mb-4">
          {{ p.description }}
        </p>
        <div class="w-full mt-auto space-y-2">
          <RouterLink
            v-if="p.department === 'dermatology'"
            :to="'products/' + p.slug"
            class="w-full btn-lg-outline text-center block"
          >
            Learn More
          </RouterLink>
          <button :href="'/quote?interest=' + p.slug" class="w-full btn-lg">Request Quote</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const isDragging = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)

const onMouseDown = (e: MouseEvent) => {
  if (!scroller.value) return
  isDragging.value = true
  startX.value = e.pageX - scroller.value.offsetLeft
  scrollLeft.value = scroller.value.scrollLeft
}

const onMouseLeave = () => {
  isDragging.value = false
}

const onMouseUp = () => {
  isDragging.value = false
}

const onMouseMove = (e: MouseEvent) => {
  if (!isDragging.value || !scroller.value) return
  e.preventDefault()
  const x = e.pageX - scroller.value.offsetLeft
  const walk = (x - startX.value) * 1.2 // drag sensitivity
  scroller.value.scrollLeft = scrollLeft.value - walk
}

export type Department = 'ophthalmology' | 'dermatology' | 'general-med'
export type ProductType = 'equipment' | 'consumable' | 'tool'

export interface Product {
  id: number
  name: string
  slug: string
  type: ProductType
  department: Department
  description?: string
  short_description?: string

  photo?: string
  technicalSpecifications?: unknown
  keyFeatures?: unknown
  keyIngredients?: unknown
  treatmentIndications?: unknown
  clinicalBenefits?: unknown
  application?: string
}

const props = defineProps<{
  productsList: Product[]
}>()

const scroller = ref<HTMLElement | null>(null)
const STEP = 200

const products = ref<Product[]>([...props.productsList])

// Keep products reactive if props change
watch(
  () => props.productsList,
  (newVal) => {
    products.value = [...newVal]
  },
)

const onWheel = (e: WheelEvent): void => {
  if (!scroller.value) return
  scroller.value.scrollLeft += Math.sign(e.deltaY) * STEP
}
</script>
