<template>
  <div class="flex-1 flex flex-col gap-4 relative">
    <div
      class="absolute w-full top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.04)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.06)_0%,transparent_60%)]"
    ></div>
    <div
      class="relative bg-infin-secbg/80 overflow-hidden rounded-3xl border border-gray-200 p-6 shadow-sm"
    >
      <div class="mt-4 grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
        <button
          v-for="(info, i) in infos"
          :key="i"
          type="button"
          class="letter-btn group relative flex flex-col items-center gap-2 px-2 py-3 text-gray-400 hover:text-gray-900"
          :class="{ active: index === i }"
          @mouseenter="select(i)"
          @click="select(i)"
        >
          <span class="font-serif text-2xl md:text-4xl tracking-[0.08em]">
            {{ info.letter }}
          </span>
          <span
            class="h-[2px] w-8 rounded-full bg-gradient-to-r from-transparent via-gray-500 to-transparent transition-all duration-300 dark:via-white/50 scale-50 opacity-0 group-hover:opacity-60 group-hover:scale-95 md:w-10 ="
          ></span>
        </button>
      </div>
    </div>
    <div
      v-if="current"
      class="relative bg-infin-secbg/80 rounded-3xl border border-gray-200 p-8 shadow-lg"
    >
      <div class="flex items-start content-start gap-4">
        <div>
          <div
            class="flex my-auto h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white"
          >
            <span class="font-serif text-2xl">{{ current.letter }}</span>
          </div>
        </div>
        <div class="space-y-3">
          <p class="text-xs uppercase tracking-[0.4em] text-gray-500">
            {{ current.title }}
          </p>
          <p class="text-sm md:text-base text-gray-700">
            {{ current.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Info {
  letter: string
  title: string
  text: string
}

const infos: Info[] = [
  {
    letter: 'I',
    title: 'Identity',
    text: 'Infinity Medicals is a leading company in laser and energy-based medical (EBM) device technology.',
  },
  {
    letter: 'N',
    title: 'Next-generation technology',
    text: 'Powered by advanced engineering, Infinity delivers medical solutions that elevate precision, performance, and patient confidence. Every device reflects the future of clinical innovation.',
  },
  {
    letter: 'F',
    title: 'Future ready-equipment',
    text: 'Our equipment is engineered for the evolving demands of dermatology and ophthalmology. Built with advanced materials, intelligent architecture, and upgradeable technology to keep your practice ahead of innovation.',
  },
  {
    letter: 'I',
    title: 'Integrity in quality',
    text: 'Integrity means more than exceptional products — it means transparent communication, genuine support, and service built on trust.',
  },
  {
    letter: 'N',
    title: 'No risk commitment',
    text: 'Every purchase is protected by fair, transparent refund options. Your confidence matters, and our guarantees give you complete peace of mind.',
  },
  {
    letter: 'I',
    title: 'Instrument reliability',
    text: 'Our devices deliver absolute reliability and long-term performance — engineered for precision, stability, and dependable daily operation.',
  },
  {
    letter: 'T',
    title: 'Technical support',
    text: 'Our highly trained engineers provide installation, maintenance, and on-site assistance. Support you can rely on at every stage.',
  },
  {
    letter: 'Y',
    title: 'Your peace of mind',
    text: 'With Infinity, you receive dependable equipment, transparent service, and a company that truly stands behind every device it delivers.',
  },
]

const index = ref(0)
let timer: number | undefined

const current = computed(() => infos[index.value])
const emit = defineEmits<{
  (e: 'update', payload: Number): void
}>()

const select = (i: number): void => {
  index.value = i
  emit('update', i)
  reset()
}

const reset = (): void => {
  if (timer) window.clearTimeout(timer)
  timer = window.setTimeout(() => {
    index.value = (index.value + 1) % infos.length
    reset()
  }, 10000)
}

onMounted(reset)
onUnmounted(() => timer && window.clearTimeout(timer))
</script>
