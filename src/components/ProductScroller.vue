<template>
  <div
    class="mx-auto px-6 pb-6 overflow-hidden relative"
    @mouseenter="pause"
    @mouseleave="resume"
    @wheel.prevent="onWheel"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @mousemove="onMouseMove"
  >
    <div
      class="absolute w-32 md:w-64 h-full bg-gradient-to-r dark:from-infin-darksecbg from-infin-secbg to-transparent left-0 z-20"
    ></div>
    <div
      class="absolute w-32 md:w-64 h-full bg-gradient-to-l dark:from-infin-darksecbg from-infin-secbg to-transparent right-0 z-20"
    ></div>
    <div
      ref="track"
      class="flex gap-6 will-change-transform"
      :style="{ transform: `translateX(${-offset}px)` }"
    >
      <div
        v-for="p in loopedProducts"
        :key="p._key"
        class="product-card dark:bg-infin-darkpribg group"
      >
        <div
          class="h-1/2 bg-infin-secbg dark:bg-infin-darksecbg w-full flex items-center justify-center overflow-hidden"
        >
          <img
            :src="p.photo || ''"
            :alt="p.name"
            class="max-h-64 transition-transform duration-300 ease-out group-hover:scale-125 origin-bottom"
          />
        </div>

        <div class="text-left mt-2 w-full p-4 flex flex-col h-1/2">
          <p class="text-infin-teritiary dark:text-gray-400 text-xs capitalize">
            {{ p.short_description }}
          </p>

          <h3 class="text-xl font-semibold mb-2 text-infin dark:text-white">
            {{ p.name }}
          </h3>

          <p class="text-infin-secondary dark:text-gray-400 line-clamp-4 mb-4">
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
            <a :href="'quote?interest=' + p.slug" class="w-full btn-lg text-center block">
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'

/* =========================
   Props
========================= */
export interface Product {
  id: number
  name: string
  slug: string
  department: 'ophthalmology' | 'dermatology' | 'general-med'
  description?: string
  short_description?: string
  photo?: string
}

const props = defineProps<{ productsList: Product[] }>()

/* =========================
   Infinite data
========================= */
const loopedProducts = computed(() =>
  [...props.productsList, ...props.productsList].map((p, i) => ({
    ...p,
    _key: `${p.slug}-${i}`,
  })),
)

/* =========================
   Animation state
========================= */
const track = ref<HTMLElement | null>(null)
const offset = ref(0)
const SPEED = 20 // px/sec
let rafId: number | null = null
let lastTime = 0
let paused = false

/* =========================
   RAF loop
========================= */
const animate = (time: number) => {
  if (!paused && track.value) {
    const delta = time - lastTime
    offset.value += (SPEED * delta) / 1000

    const halfWidth = track.value.scrollWidth / 2
    if (offset.value >= halfWidth) offset.value = 0
  }

  lastTime = time
  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  rafId = requestAnimationFrame((t) => {
    lastTime = t
    animate(t)
  })
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
})

/* =========================
   Controls
========================= */
const pause = () => (paused = true)
const resume = () => (paused = false)

/* Wheel */
const onWheel = (e: WheelEvent) => {
  pause()
  offset.value += Math.sign(e.deltaY) * 120
}

/* Drag */
let dragging = false
let dragStartX = 0
let dragStartOffset = 0

const onMouseDown = (e: MouseEvent) => {
  dragging = true
  dragStartX = e.clientX
  dragStartOffset = offset.value
  pause()
}

const onMouseMove = (e: MouseEvent) => {
  if (!dragging) return
  offset.value = dragStartOffset - (e.clientX - dragStartX)
}

const onMouseUp = () => {
  dragging = false
  resume()
}
</script>
