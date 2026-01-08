<template>
  <div class="relative">
    <!-- HERO -->
    <section
      class="relative overflow-hidden border-b border-infin-teritiary/30 bg-background py-16 md:py-24"
    >
      <div
        class="absolute inset-0 bg-gradient-to-b from-infin/5 via-background to-background"
      ></div>
      <div
        class="absolute inset-y-0 left-1/2 hidden w-[60rem] -translate-x-1/2 rounded-full bg-infin/5 blur-3xl md:block"
      ></div>
      <div class="container relative">
        <div class="mx-auto max-w-4xl space-y-6 text-center">
          <span
            data-slot="badge"
            class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 mx-auto w-fit uppercase tracking-wider"
            >Ophthalmology Department</span
          >
          <h1 class="text-4xl font-bold tracking-tight md:text-5xl">
            Ophthalmic Devices for Precision-Driven Care
          </h1>
          <p class="text-lg text-infin-secondary leading-relaxed">
            Precision-engineered imaging, diagnostics, and periocular therapeutics curated for
            practices that demand clinical certainty and elevated patient experiences.
          </p>
          <div class="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a data-slot="button" class="btn-lg" href="/quote">Request a Consultation</a
            ><a data-slot="button" class="btn-lg-outline" href="/products">Explore All Devices</a>
          </div>
          <div class="flex flex-col items-center gap-2 text-sm text-infin-secondary">
            <span class="flex items-center gap-2"
              >Continue to discover our diagnostic suites, refractive labs, and surgical support
              systems.</span
            ><a
              href="#diagnostic-equipment"
              data-slot="button"
              class="linktext text-xs text-infin hover:font-semibold"
              >Explore Diagnostic Equipment</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- elevate -->
    <section class="py-16 container md:py-24">
      <div class="max-w-3xl mx-auto space-y-6 text-center">
        <h2 class="text-3xl font-bold tracking-tight md:text-4xl">
          Ready to Elevate Your Ophthalmic Practice?
        </h2>
        <p class="text-lg text-infin-secondary leading-relaxed">
          Partner with Infinity Medicals for tailored device selection, regulatory guidance, and
          continuous clinical support that keeps you on the leading edge of vision care.
        </p>
        <a data-slot="button" class="btn-lg" href="/demo">Book a Demo</a>
      </div>
    </section>
    <!--  VISION -->
    <section class="relative bg-infin-pribg/20 py-16 md:py-24">
      <div
        class="absolute inset-0 bg-gradient-to-b from-background via-infin-pribg/20 to-background"
      ></div>
      <div class="container relative space-y-10">
        <div
          data-slot="card"
          class="bg-infin-secbg text-infin-secondary flex flex-col gap-6 rounded-xl border py-6 shadow-sm scroll-mt-32"
          id="diagnostic-equipment"
        >
          <div
            data-slot="card-header"
            class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
          >
            <div data-slot="card-title" class="text-2xl font-semibold">Diagnostic Equipment</div>
          </div>
          <div
            data-slot="card-content"
            class="px-6 space-y-4 text-sm text-infin-secondary leading-relaxed"
          >
            <p>
              OCT, topography, and imaging systems that deliver precise diagnostics to guide
              confident ophthalmic decision-making.
            </p>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div
                v-for="eq in equipment"
                :key="eq.slug"
                data-slot="card"
                class="text-infin-secondary gap-6 rounded-xl py-6 flex h-full flex-col overflow-hidden border border-infin-teritiary/30 bg-infin-secbg shadow-sm transition-shadow hover:shadow-md"
              >
                <div class="aspect-square bg-infin-secbg">
                  <img :alt="eq.name" class="h-full w-full object-cover max-h-64" :src="eq.photo" />
                </div>
                <div
                  data-slot="card-content"
                  class="flex flex-1 flex-col justify-between space-y-4 p-4"
                >
                  <div class="space-y-2">
                    <h3 class="text-base font-semibold">{{ eq.name }}</h3>
                    <p class="text-xs text-infin-secondary line-clamp-4 leading-relaxed md:text-sm">
                      {{ eq.description }}
                    </p>
                  </div>
                  <a data-slot="button" class="btn-lg" :href="'/quote?interest=' + eq.slug"
                    >Request Quote</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-slot="card"
          class="bg-infin-secbg text-infin-secondary flex flex-col gap-6 rounded-xl border py-6 shadow-sm scroll-mt-32"
          id="refractive-machines"
        >
          <div
            data-slot="card-header"
            class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
          >
            <div data-slot="card-title" class="text-2xl font-semibold">Refractive Machines</div>
          </div>
          <div
            data-slot="card-content"
            class="px-6 space-y-4 text-sm text-infin-secondary leading-relaxed"
          >
            <p>
              Cutting-edge refractive platforms that support accurate measurements for cataract,
              refractive, and vision correction procedures.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center justify-between gap-4">
                <span>Wavefront Aberrometers</span
                ><a
                  data-slot="button"
                  class="btn-lg-outline"
                  href="/quote?interest=Wavefront%20Aberrometers"
                  >Request Quote</a
                >
              </li>
              <li class="flex items-center justify-between gap-4">
                <span>Optical Biometry Systems</span
                ><a
                  data-slot="button"
                  class="btn-lg-outline"
                  href="/quote?interest=Optical%20Biometry%20Systems"
                  >Request Quote</a
                >
              </li>
              <li class="flex items-center justify-between gap-4">
                <span>Autorefractors &amp; Keratometers</span
                ><a
                  data-slot="button"
                  class="btn-lg-outline"
                  href="/quote?interest=Autorefractors%20%26%20Keratometers"
                  >Request Quote</a
                >
              </li>
              <li class="flex items-center justify-between gap-4">
                <span>Corneal Cross-Linking Units</span
                ><a
                  data-slot="button"
                  class="btn-lg-outline"
                  href="/quote?interest=Corneal%20Cross-Linking%20Units"
                  >Request Quote</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          data-slot="card"
          class="bg-infin-secbg text-infin-secondary flex flex-col gap-6 rounded-xl border py-6 shadow-sm scroll-mt-32"
          id="plasma-treatment-devices"
        >
          <div
            data-slot="card-header"
            class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
          >
            <div data-slot="card-title" class="text-2xl font-semibold">
              Plasma Treatment Devices
            </div>
          </div>
          <div
            data-slot="card-content"
            class="px-6 space-y-4 text-sm text-infin-secondary leading-relaxed"
          >
            <p>
              Plasma-based technology for non-invasive eyelid and periocular rejuvenation with
              controlled tissue interaction.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center justify-between gap-4">
                <span>PLEXR Plasma Platform</span
                ><a data-slot="button" class="btn-lg-outline" href="/products/plexr">View</a>
              </li>
              <li class="flex items-center justify-between gap-4">
                <span>Plasma Pen Consumable Kits</span
                ><a
                  data-slot="button"
                  class="btn-lg-outline"
                  href="/quote?interest=Plasma%20Pen%20Consumable%20Kits"
                  >Request Quote</a
                >
              </li>
              <li class="flex items-center justify-between gap-4">
                <span>Specialized Periocular Plasma Tips</span
                ><a
                  data-slot="button"
                  class="btn-lg-outline"
                  href="/quote?interest=Specialized%20Periocular%20Plasma%20Tips"
                  >Request Quote</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          data-slot="card"
          class="bg-infin-secbg text-infin-secondary flex flex-col gap-6 rounded-xl border py-6 shadow-sm scroll-mt-32"
          id="surgical-instruments"
        >
          <div
            data-slot="card-header"
            class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
          >
            <div data-slot="card-title" class="text-2xl font-semibold">Surgical Instruments</div>
          </div>
          <div
            data-slot="card-content"
            class="px-6 space-y-4 text-sm text-infin-secondary leading-relaxed"
          >
            <p>
              Curated sets of microsurgical tools designed for ophthalmic precision, durability, and
              consistent performance.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center justify-between gap-4">
                <span>Microsurgical Forceps &amp; Scissors</span
                ><a
                  data-slot="button"
                  class="btn-lg-outline"
                  href="/quote?interest=Microsurgical%20Forceps%20%26%20Scissors"
                  >Request Quote</a
                >
              </li>
              <li class="flex items-center justify-between gap-4">
                <span>Speculums, Retractors &amp; Needle Holders</span
                ><a
                  data-slot="button"
                  class="btn-lg-outline"
                  href="/quote?interest=Speculums%2C%20Retractors%20%26%20Needle%20Holders"
                  >Request Quote</a
                >
              </li>
              <li class="flex items-center justify-between gap-4">
                <span>Cryo Probes &amp; Cannulas</span
                ><a
                  data-slot="button"
                  class="btn-lg-outline"
                  href="/quote?interest=Cryo%20Probes%20%26%20Cannulas"
                  >Request Quote</a
                >
              </li>
              <li class="flex items-center justify-between gap-4">
                <span>IOL Injector Systems</span
                ><a
                  data-slot="button"
                  class="btn-lg-outline"
                  href="/quote?interest=IOL%20Injector%20Systems"
                  >Request Quote</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          data-slot="card"
          class="bg-infin-secbg text-infin-secondary flex flex-col gap-6 rounded-xl border py-6 shadow-sm scroll-mt-32"
          id="surgical-disposables"
        >
          <div
            data-slot="card-header"
            class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
          >
            <div data-slot="card-title" class="text-2xl font-semibold">Surgical Disposables</div>
          </div>
          <div
            data-slot="card-content"
            class="px-6 space-y-4 text-sm text-infin-secondary leading-relaxed"
          >
            <p>
              Reliable single-use consumables that maintain sterile environments and streamline
              ophthalmic operating workflows.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center justify-between gap-4">
                <span>Ophthalmic Drapes &amp; Packs</span
                ><a
                  data-slot="button"
                  class="btn-lg-outline"
                  href="/quote?interest=Ophthalmic%20Drapes%20%26%20Packs"
                  >Request Quote</a
                >
              </li>
              <li class="flex items-center justify-between gap-4">
                <span>Viscoelastic Syringes &amp; Irrigation Sets</span
                ><a
                  data-slot="button"
                  class="btn-lg-outline"
                  href="/quote?interest=Viscoelastic%20Syringes%20%26%20Irrigation%20Sets"
                  >Request Quote</a
                >
              </li>
              <li class="flex items-center justify-between gap-4">
                <span>Protective Eye Shields &amp; Pads</span
                ><a
                  data-slot="button"
                  class="btn-lg-outline"
                  href="/quote?interest=Protective%20Eye%20Shields%20%26%20Pads"
                  >Request Quote</a
                >
              </li>
              <li class="flex items-center justify-between gap-4">
                <span>Sterile Blades &amp; Sutures</span
                ><a
                  data-slot="button"
                  class="btn-lg-outline"
                  href="/quote?interest=Sterile%20Blades%20%26%20Sutures"
                  >Request Quote</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/productStore'
// import FaqList from '@/components/FaqList.vue'
import { computed, onMounted } from 'vue'
const productStore = useProductStore()

onMounted(async () => {
  productStore.fetchOphthalmology()
})
const equipment = computed(() => {
  return productStore.ophthalmology.filter((s) => s.type === 'equipment')
})
</script>
