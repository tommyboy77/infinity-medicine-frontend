<template>
  <div class="relative">
    <!-- HERO -->
    <section v-reveal="'up'" class="relative overflow-hidden py-16">
      <div
        class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b dark:bg-infin dark:bg-none from-secondary/40 via-infin-secbg to-infin-pribg"
      ></div>
      <div class="container">
        <div class="mx-auto max-w-3xl space-y-6 text-center">
          <span
            class="inline-flex items-center justify-center rounded-full border border-infin/15 bg-infin/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-infin/80"
            >Our Footprint</span
          >
          <h1 class="text-infin dark:text-white text-4xl font-bold tracking-tight md:text-5xl">
            Precision Support Across the Middle East
          </h1>
          <p class="text-base text-infin-secondary dark:text-gray-400 leading-relaxed">
            from our headquarters in Kuwait to dedicated teams across the region, we deliver local
            expertise, regulatory-ready guidance, and responsive after-sales support.
          </p>
          <div
            class="flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-infin-secondary"
          >
            <span
              class="rounded-full border border-infin-teritiary/30 dark:border-infin/30 bg-infin-secbg/80 px-4 py-1"
              >Kuwait Headquarters</span
            ><span
              class="rounded-full border border-infin-teritiary/30 dark:border-infin/30 bg-infin-secbg/80 px-4 py-1"
              >Oman &amp; Egypt Operations</span
            ><span
              class="rounded-full border border-infin-teritiary/30 dark:border-infin/30 bg-infin-secbg/80 px-4 py-1"
              >UAE Coming Soon</span
            >
          </div>
          <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a data-slot="button" class="btn-lg" href="/quote">Request a Call</a
            ><a data-slot="button" class="btn-lg-outline" href="/demo">Book a Demo</a>
          </div>
        </div>
      </div>
    </section>
    <!-- LOCATIONS -->
    <section v-reveal="'left'" class="py-16 container">
      <div class="max-w-5xl mx-auto space-y-6">
        <div class="grid gap-6 md:grid-cols-2">
          <div
            data-slot="card"
            class="text-infin dark:text-white flex flex-col dark:shadow-white/10/20 gap-6 rounded-xl border py-6 border-infin-teritiary/30 dark:border-infin/30 bg-infin-secbg/90 dark:bg-infin-darksecbg/90 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.5)] transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.55)] md:col-span-2 ring-1 ring-infin/30"
          >
            <div data-slot="card-content" class="space-y-6 p-8">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div class="space-y-2">
                  <div class="flex items-center gap-3">
                    <span class="text-3xl" role="img" aria-label="Kuwait flag">🇰🇼</span>
                    <div>
                      <h3 class="text-xl font-semibold dark:text-white text-infin">Kuwait</h3>
                      <p class="text-sm text-infin-secondary">Main Headquarters</p>
                    </div>
                  </div>
                  <span
                    class="inline-flex items-center rounded-full border border-infin/20 bg-infin/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] dark:text-white text-infin"
                    >Headquarters</span
                  >
                </div>
                <a
                  href="mailto:info@infinitymedicals.com"
                  data-slot="button"
                  class="inline-flex text-infin-secondary dark:text-gray-400 items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-infin-teritiary focus-visible:ring-infin-teritiary/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-infin-secbg dark:bg-infin-darksecbg shadow-xs hover:bg-infin-terititary hover:text-infin dark:hover:text-white-teritiary 3ark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[&gt;svg]:px-2.5 rounded-full"
                  >Contact Team</a
                >
              </div>
              <div
                class="space-y-4 text-sm text-infin-secondary dark:text-gray-400 leading-relaxed"
              >
                <div class="flex gap-3">
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
                    class="lucide lucide-map-pin mt-0.5 h-4 w-4 dark:text-white text-infin"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle></svg
                  ><span>4th Floor, Infinity Medicals Building</span>
                </div>
                <div class="flex gap-3">
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
                    class="lucide lucide-phone h-4 w-4 dark:text-white text-infin"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path></svg
                  ><a
                    href="tel:+965 XXXX XXXX"
                    class="font-medium text-infin dark:text-white transition-colors hover:text-infin dark:hover:text-white"
                    >+965 9667 1100</a
                  >
                </div>
                <div class="flex gap-3">
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
                    class="lucide lucide-mail h-4 w-4 dark:text-white text-infin"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg
                  ><a
                    href="mailto:info@infinitymedicals.com"
                    class="font-medium text-infin dark:text-white transition-colors hover:text-infin dark:hover:text-white"
                    >info@infinitymedicals.com</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            data-slot="card"
            class="text-infin dark:text-white flex flex-col dark:shadow-white/10 gap-6 rounded-xl border py-6 border-infin-teritiary/30 dark:border-infin/30 bg-infin-secbg/90 dark:bg-infin-darksecbg/90 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.5)] transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.55)]"
          >
            <div data-slot="card-content" class="space-y-6 p-8">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div class="space-y-2">
                  <div class="flex items-center gap-3">
                    <span class="text-3xl" role="img" aria-label="Oman flag">🇴🇲</span>
                    <div>
                      <h3 class="text-xl font-semibold dark:text-white text-infin">Oman</h3>
                      <p class="text-sm text-infin-secondary">Oman Office</p>
                    </div>
                  </div>
                </div>
                <a
                  href="mailto:Oman@agulftrade.com"
                  data-slot="button"
                  class="text-infin-secondary dark:text-gray-400 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-infin-teritiary focus-visible:ring-infin-teritiary/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-infin-secbg dark:bg-infin-darksecbg shadow-xs hover:bg-infin-terititary hover:text-infin dark:hover:text-white-teritiary 3ark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[&gt;svg]:px-2.5 rounded-full"
                  >Contact Team</a
                >
              </div>
              <div
                class="space-y-4 text-sm text-infin-secondary dark:text-gray-400 leading-relaxed"
              >
                <div class="flex gap-3">
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
                    class="lucide lucide-phone h-4 w-4 dark:text-white text-infin"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path></svg
                  ><a
                    href="tel:+968 9695 9202"
                    class="font-medium text-infin dark:text-white transition-colors hover:text-infin dark:hover:text-white"
                    >+968 9695 9202</a
                  >
                </div>
                <div class="flex gap-3">
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
                    class="lucide lucide-mail h-4 w-4 dark:text-white text-infin"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg
                  ><a
                    href="mailto:Oman@agulftrade.com"
                    class="font-medium text-infin dark:text-white transition-colors hover:text-infin dark:hover:text-white"
                    >Oman@agulftrade.com</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            data-slot="card"
            class="text-infin dark:text-white flex flex-col dark:shadow-white/10/20 gap-6 rounded-xl border py-6 border-infin-teritiary/30 dark:border-infin/30 bg-infin-secbg/90 dark:bg-infin-darksecbg/90 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.5)] transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.55)]"
          >
            <div data-slot="card-content" class="space-y-6 p-8">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div class="space-y-2">
                  <div class="flex items-center gap-3">
                    <span class="text-3xl" role="img" aria-label="Egypt flag">🇪🇬</span>
                    <div>
                      <h3 class="text-xl font-semibold dark:text-white text-infin">Egypt</h3>
                      <p class="text-sm text-infin-secondary">Egypt Office</p>
                    </div>
                  </div>
                </div>
                <a
                  href="mailto:Egypt@agulftrade.com"
                  data-slot="button"
                  class="text-infin-secondary dark:text-gray-400 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-infin-teritiary focus-visible:ring-infin-teritiary/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-infin-secbg dark:bg-infin-darksecbg shadow-xs hover:bg-infin-terititary hover:text-infin dark:hover:text-white-teritiary 3ark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[&gt;svg]:px-2.5 rounded-full"
                  >Contact Team</a
                >
              </div>
              <div
                class="space-y-4 text-sm text-infin-secondary dark:text-gray-400 leading-relaxed"
              >
                <div class="flex gap-3">
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
                    class="lucide lucide-phone h-4 w-4 dark:text-white text-infin"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path></svg
                  ><a
                    href="tel:+20 106 502 3256"
                    class="font-medium text-infin dark:text-white transition-colors hover:text-infin dark:hover:text-white"
                    >+20 106 502 3256</a
                  >
                </div>
                <div class="flex gap-3">
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
                    class="lucide lucide-mail h-4 w-4 dark:text-white text-infin"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg
                  ><a
                    href="mailto:Egypt@agulftrade.com"
                    class="font-medium text-infin dark:text-white transition-colors hover:text-infin dark:hover:text-white"
                    >Egypt@agulftrade.com</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            data-slot="card"
            class="text-infin dark:text-white flex flex-col dark:shadow-white/10/20 gap-6 rounded-xl border py-6 border-infin-teritiary/30 dark:border-infin/30 bg-infin-secbg/90 dark:bg-infin-darksecbg/90 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.5)] transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.55)]"
          >
            <div data-slot="card-content" class="space-y-6 p-8">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div class="space-y-2">
                  <div class="flex items-center gap-3">
                    <span class="text-3xl" role="img" aria-label="United Arab Emirates flag"
                      >🇦🇪</span
                    >
                    <div>
                      <h3 class="text-xl font-semibold dark:text-white text-infin">
                        United Arab Emirates
                      </h3>
                      <p class="text-sm text-infin-secondary">UAE Office</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="rounded-2xl border border-dashed border-infin-teritiary/30 dark:border-infin/30 dark:bg-infin-darkpribg bg-infin-pribg/40 px-5 py-6 text-center text-sm font-medium text-infin-secondary"
              >
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- SUPPORT -->
    <section
      v-reveal="'right'"
      class="py-16 container border-t border-infin-teritiary/30 dark:border-infin/30 max-w-4xl"
    >
      <div class="max-w-4xl space-y-6 text-center mx-auto">
        <h2 class="text-3xl font-bold tracking-tight md:text-4xl text-infin dark:text-white">
          Need Assistance in Your Market?
        </h2>
        <p class="text-base text-infin-secondary dark:text-gray-400 leading-relaxed">
          Our regional specialists respond within 24 hours to coordinate demonstrations, regulatory
          documentation, and deployment timelines tailored to your clinic.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <a data-slot="button" class="btn-lg" href="/quote">Talk to Sales</a
          ><a data-slot="button" class="btn-lg-outline" href="mailto:info@infinitymedicals.com"
            >Email Support</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
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
</script>
