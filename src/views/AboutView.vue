<template>
  <div class="relative">
    <!-- HERO -->
    <section class="relative overflow-hidden">
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-br from-infin-pribg/10 via-infin-secbg/30 to-infin-pribg/30"
      ></div>
      <div class="absolute -top-28 left-12 h-56 w-56 rounded-full bg-infin/15 blur-3xl"></div>
      <div class="absolute bottom-10 right-16 h-64 w-64 rounded-full blur-3xl"></div>
      <div class="relative container py-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div class="space-y-8">
          <div class="space-y-5">
            <span
              class="inline-flex items-center justify-center rounded-full border border-infin/20 bg-infin/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-infin/80"
              >About Infinity Medicals</span
            >
            <h1 class="text-4xl font-bold tracking-tight text-infin md:text-5xl">
              Redefining What's Possible in Modern Medical Technology
            </h1>
            <p class="text-xl text-infin-teritiary leading-relaxed">
              Infinity Medicals is built on one mission: transforming insights into next-generation
              medical devices.
            </p>
          </div>
          <div class="flex flex-wrap gap-3 text-sm font-medium text-infin-teritiary">
            <span class="rounded-full border border-infin-teritiary/30 bg-infin-secbg px-4 py-1"
              >Skin Care Specialists</span
            ><span class="rounded-full border border-infin-teritiary/30 bg-infin-secbg px-4 py-1"
              >Ophthalmology Experts</span
            ><span class="rounded-full border border-infin-teritiary/30 bg-infin-secbg px-4 py-1"
              >ISO Certified Supply Partner</span
            >
          </div>
          <div class="flex flex-wrap gap-4">
            <a data-slot="button" class="btn-lg" href="/quote">Start a Partnership</a
            ><a data-slot="button" class="btn-lg-outline" href="/products">View Our Devices</a>
          </div>
        </div>
        <div
          data-slot="card"
          class="text-infin flex flex-col gap-6 rounded-xl border py-6 border-none bg-infin-secbg shadow-[0_25px_55px_-35px_rgba(15,23,42,0.65)] ring-1 ring-infin-teritiary/80 backdrop-blur"
        >
          <div data-slot="card-content" class="space-y-6 p-8">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-infin/70">
              Why Clinics Choose Us
            </p>
            <div class="space-y-6">
              <div class="space-y-2">
                <h3 class="text-base font-semibold text-infin">
                  Dermatology &amp; Ophthalmology Focus
                </h3>
                <p class="text-sm text-infin-teritiary leading-relaxed">
                  Premium, ISO-certified energy devices tailored for specialists advancing skin and
                  eye care.
                </p>
              </div>
              <div class="space-y-2">
                <h3 class="text-base font-semibold text-infin">Insight-Led Innovation</h3>
                <p class="text-sm text-infin-teritiary leading-relaxed">
                  Development driven by global market intelligence, clinical feedback, and
                  practitioner collaborations.
                </p>
              </div>
              <div class="space-y-2">
                <h3 class="text-base font-semibold text-infin">End-to-End Partnership</h3>
                <p class="text-sm text-infin-teritiary leading-relaxed">
                  Consultative guidance, responsive support, and continuous education to maximize
                  every installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- INSIGHTS -->
    <section class="py-20">
      <div class="container grid gap-8 md:grid-cols-2">
        <div
          data-slot="card"
          class="text-infin flex flex-col gap-6 rounded-xl py-6 border border-infin-teritiary/30 bg-infin-secbg/90 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.5)] backdrop-blur"
        >
          <div data-slot="card-content" class="space-y-4 p-8">
            <h3 class="text-2xl font-semibold text-infin">Insight-Led Development</h3>
            <p class="text-base text-infin-secondary leading-relaxed">
              By studying global market trends, clinical needs, and practitioner feedback, we
              continuously transform insights into next-generation devices that empower medical
              specialists worldwide.
            </p>
          </div>
        </div>
        <div
          data-slot="card"
          class="text-infin flex flex-col gap-6 rounded-xl py-6 border border-infin-teritiary/30 bg-infin-secbg/90 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.5)] backdrop-blur"
        >
          <div data-slot="card-content" class="space-y-4 p-8">
            <h3 class="text-2xl font-semibold text-infin">Engineered for Excellence</h3>
            <p class="text-base text-infin-secondary leading-relaxed">
              Our solutions combine intelligent engineering, premium materials, and future-ready
              innovation — empowering medical specialists with tools designed for accuracy,
              durability, and exceptional patient outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- PRINCIPLES -->
    <section class="relative overflow-hidden py-16">
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-infin-secbg/50 via-infin-pribg to-infin-secbg/40"
      ></div>
      <div
        class="absolute -top-32 right-32 h-64 w-64 rounded-full bg-infin-pribg/20 blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-16 h-48 w-48 rounded-full bg-infin-teritiary/10 blur-2xl"
      ></div>
      <div class="container max-w-3xl relative">
        <div class="mx-auto space-y-6 text-center">
          <span
            class="inline-flex items-center justify-center rounded-full border border-infin/20 bg-infin/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-infin/80"
            >Our Values</span
          >
          <h2 class="text-4xl font-bold tracking-tight text-infin md:text-5xl">
            The Principles Behind Every Device We Deliver
          </h2>
          <p class="text-base text-infin-secondary leading-relaxed">
            From concept to clinical deployment, we invest in the standards and talent that keep
            practitioners ahead of patient expectations.
          </p>
        </div>
        <div
          class="mt-16 overflow-hidden rounded-3xl border border-infin-teritiary/30 bg-infin-secbg/95 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.45)] backdrop-blur"
        >
          <div class="grid divide-gray-100 divide-[1px] sm:grid-cols-2 sm:divide-x">
            <div class="group relative px-8 py-12 sm:px-10">
              <div
                class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-infin/20 via-infin/10 to-transparent text-infin ring-2 ring-infin/10 transition-all duration-300 group-hover:shadow-[0_12px_30px_-18px_rgba(15,23,42,0.4)]"
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
                  class="lucide lucide-target h-5 w-5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <div class="mt-6 space-y-3">
                <h3 class="text-lg font-semibold text-infin">Precision</h3>
                <p class="text-sm text-infin-secondary leading-relaxed">
                  Every platform is engineered for accurate diagnostics and dependable clinical
                  results, day after day.
                </p>
              </div>
            </div>
            <div class="group relative px-8 py-12 sm:px-10">
              <div
                class="absolute inset-y-0 left-0 hidden w-px bg-infin-teritiary/60 sm:block"
              ></div>
              <div
                class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-infin/20 via-infin/10 to-transparent text-infin ring-2 ring-infin/10 transition-all duration-300 group-hover:shadow-[0_12px_30px_-18px_rgba(15,23,42,0.4)]"
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
                  class="lucide lucide-lightbulb h-5 w-5"
                >
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  ></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                </svg>
              </div>
              <div class="mt-6 space-y-3">
                <h3 class="text-lg font-semibold text-infin">Innovation</h3>
                <p class="text-sm text-infin-secondary leading-relaxed">
                  We benchmark global breakthroughs and integrate the most advanced technologies
                  into our portfolio.
                </p>
              </div>
            </div>
            <div class="group relative px-8 py-12 sm:px-10">
              <div class="absolute top-0 left-0 h-px w-full bg-infin-teritiary/60 sm:hidden"></div>
              <div
                class="absolute top-0 left-0 hidden h-px w-full bg-infin-teritiary/60 sm:block"
              ></div>
              <div
                class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-infin/20 via-infin/10 to-transparent text-infin ring-2 ring-infin/10 transition-all duration-300 group-hover:shadow-[0_12px_30px_-18px_rgba(15,23,42,0.4)]"
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
                  class="lucide lucide-users h-5 w-5"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div class="mt-6 space-y-3">
                <h3 class="text-lg font-semibold text-infin">Partnership</h3>
                <p class="text-sm text-infin-secondary leading-relaxed">
                  Dedicated onboarding, training, and responsive support keep every clinic confident
                  and future-ready.
                </p>
              </div>
            </div>
            <div class="group relative px-8 py-12 sm:px-10">
              <div class="absolute top-0 left-0 h-px w-full bg-infin-teritiary/60 sm:hidden"></div>
              <div
                class="absolute inset-y-0 left-0 hidden w-px bg-infin-teritiary/60 sm:block"
              ></div>
              <div
                class="absolute top-0 left-0 hidden h-px w-full bg-infin-teritiary/60 sm:block"
              ></div>
              <div
                class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-infin/20 via-infin/10 to-transparent text-infin ring-2 ring-infin/10 transition-all duration-300 group-hover:shadow-[0_12px_30px_-18px_rgba(15,23,42,0.4)]"
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
                  class="lucide lucide-award h-5 w-5"
                >
                  <path
                    d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                  ></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <div class="mt-6 space-y-3">
                <h3 class="text-lg font-semibold text-infin">Quality</h3>
                <p class="text-sm text-infin-secondary leading-relaxed">
                  Rigorous quality control and ISO compliance ensure consistent performance across
                  every market we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- MISSION VISION -->
    <section class="py-20">
      <div class="container grid gap-10 lg:grid-cols-2">
        <div
          data-slot="card"
          class="text-card-infin flex flex-col gap-6 rounded-xl py-6 border border-infin-teritiary/30 bg-infin-secbg/95 shadow-[0_20px_45px_-32px_rgba(15,23,42,0.55)]"
        >
          <div data-slot="card-content" class="space-y-6 p-10">
            <div class="space-y-3">
              <span class="text-xs font-semibold uppercase tracking-[0.25em] text-infin/70"
                >Our Mission</span
              >
              <h2 class="text-3xl font-bold tracking-tight text-infin">
                Built for Long-Term Clinical Success
              </h2>
            </div>
            <div class="space-y-4 text-base text-infin-secondary leading-relaxed">
              <p>
                Our mission at Infinity Medicals is to deliver premium, ISO-certified medical
                devices specialized in skin care, eye care, and related fields that meet the highest
                standards of safety, effectiveness, and innovation.
              </p>
              <p>
                We are committed to providing healthcare providers and aesthetic professionals with
                a curated portfolio of products that enable precise diagnostics, effective
                treatments, and superior patient outcomes.
              </p>
              <p>
                Beyond supplying equipment, we strive to build enduring partnerships by offering
                expert guidance, responsive customer support, and continuous education to ensure our
                clients maximize the benefits of their investment.
              </p>
              <p>
                Through integrity, dedication, and a relentless pursuit of excellence, we aim to
                drive advancements in medical technology that empower our partners to achieve
                clinical success and business growth.
              </p>
            </div>
          </div>
        </div>
        <div
          data-slot="card"
          class="text-card-infin flex flex-col gap-6 rounded-xl py-6 border border-infin-teritiary/30 bg-infin/5 shadow-[0_20px_45px_-32px_rgba(15,23,42,0.5)] backdrop-blur"
        >
          <div data-slot="card-content" class="space-y-6 p-10">
            <div class="space-y-3">
              <span class="text-xs font-semibold uppercase tracking-[0.25em] text-infin"
                >Our Vision</span
              >
              <h2 class="text-3xl font-bold tracking-tight text-infin">
                Advancing Healthcare Through Trusted Technology
              </h2>
            </div>
            <div class="space-y-4 text-base text-infin-secondary leading-relaxed">
              <p>
                At Infinity Medicals, our vision is to become a global leader in the medical device
                supply industry, renowned for innovation, quality, and transformative impact on
                healthcare and aesthetic medicine.
              </p>
              <p>
                We aspire to empower healthcare professionals with advanced, reliable technologies
                that elevate patient care and promote wellness worldwide.
              </p>
              <p>
                By fostering strong partnerships and continuously integrating cutting-edge
                advancements, we aim to revolutionize the standards of skin and eye care solutions,
                making world-class medical technology accessible and trusted by clinics everywhere.
              </p>
              <p>
                Our ultimate goal is to contribute to a healthier, more confident society where
                technology seamlessly supports the art and science of healing and beauty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROADMAP -->
    <section class="relative container py-20">
      <div
        class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-infin-secbg via-/30 to-infin-secbg"
      ></div>
      <div class="mx-auto max-w-4xl space-y-12">
        <div class="space-y-4 text-center">
          <span
            class="inline-flex items-center justify-center rounded-full border border-infin/20 bg-infin/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-infin/70"
            >Our Objectives</span
          >
          <h2 class="text-3xl font-bold tracking-tight text-infin md:text-4xl">
            A Roadmap for Sustainable Partnerships
          </h2>
          <p class="text-base text-infin-secondary leading-relaxed">
            We measure progress through commitments that reinforce trust, innovation, and long-term
            collaboration with every healthcare provider we support.
          </p>
        </div>
        <div class="relative space-y-10">
          <div class="relative pl-12">
            <span
              class="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-infin/15 text-sm font-semibold text-infin ring-2 ring-infin/20"
              >1</span
            ><span
              class="absolute left-4 top-9 h-full w-px bg-infin-teritiary/30"
              aria-hidden="true"
            ></span>
            <h3 class="text-lg font-semibold text-infin">Quality Assurance</h3>
            <p class="mt-3 text-sm text-infin-secondary leading-relaxed">
              To consistently provide ISO-certified medical devices that adhere to stringent
              international safety and performance standards, ensuring reliability and trust in
              every product we deliver.
            </p>
          </div>
          <div class="relative pl-12">
            <span
              class="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-infin/15 text-sm font-semibold text-infin ring-2 ring-infin/20"
              >2</span
            ><span
              class="absolute left-4 top-9 h-full w-px bg-infin-teritiary/30"
              aria-hidden="true"
            ></span>
            <h3 class="text-lg font-semibold text-infin">Innovation Leadership</h3>
            <p class="mt-3 text-sm text-infin-secondary leading-relaxed">
              To actively source and integrate the latest technological advancements in skin care
              and eye care devices, keeping our clients at the forefront of medical aesthetics and
              health solutions.
            </p>
          </div>
          <div class="relative pl-12">
            <span
              class="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-infin/15 text-sm font-semibold text-infin ring-2 ring-infin/20"
              >3</span
            ><span
              class="absolute left-4 top-9 h-full w-px bg-infin-teritiary/30"
              aria-hidden="true"
            ></span>
            <h3 class="text-lg font-semibold text-infin">Client Partnership</h3>
            <p class="mt-3 text-sm text-infin-secondary leading-relaxed">
              To develop strong, transparent relationships with healthcare providers by offering
              personalized service, expert consultations, and tailored device recommendations that
              address unique clinical needs.
            </p>
          </div>
          <div class="relative pl-12">
            <span
              class="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-infin/15 text-sm font-semibold text-infin ring-2 ring-infin/20"
              >4</span
            ><span
              class="absolute left-4 top-9 h-full w-px bg-infin-teritiary/30"
              aria-hidden="true"
            ></span>
            <h3 class="text-lg font-semibold text-infin">Educational Support</h3>
            <p class="mt-3 text-sm text-infin-secondary leading-relaxed">
              To invest in ongoing training and knowledge-sharing initiatives, empowering our
              clients with the skills and understanding necessary to fully leverage our technologies
              for optimal patient care.
            </p>
          </div>
          <div class="relative pl-12">
            <span
              class="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-infin/15 text-sm font-semibold text-infin ring-2 ring-infin/20"
              >5</span
            ><span
              class="absolute left-4 top-9 h-full w-px bg-infin-teritiary/30"
              aria-hidden="true"
            ></span>
            <h3 class="text-lg font-semibold text-infin">Market Expansion</h3>
            <p class="mt-3 text-sm text-infin-secondary leading-relaxed">
              To broaden our reach by entering new markets and forming strategic alliances,
              increasing accessibility to high-quality medical devices globally.
            </p>
          </div>
          <div class="relative pl-12">
            <span
              class="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-infin/15 text-sm font-semibold text-infin ring-2 ring-infin/20"
              >6</span
            ><span
              class="absolute left-4 top-9 h-full w-px bg-infin-teritiary/30"
              aria-hidden="true"
            ></span>
            <h3 class="text-lg font-semibold text-infin">Sustainability and Ethics</h3>
            <p class="mt-3 text-sm text-infin-secondary leading-relaxed">
              To operate with a commitment to ethical business practices, environmental
              responsibility, and social impact, fostering a sustainable future for the medical
              device industry.
            </p>
          </div>
          <div class="relative pl-12">
            <span
              class="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-infin/15 text-sm font-semibold text-infin ring-2 ring-infin/20"
              >7</span
            >
            <h3 class="text-lg font-semibold text-infin">Customer Satisfaction</h3>
            <p class="mt-3 text-sm text-infin-secondary leading-relaxed">
              To maintain exceptional customer service standards, ensuring prompt responses,
              reliable logistics, and continuous support that exceeds client expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- PARTNERS -->
    <section class="py-16 bg-infin-pribg">
      <div class="container space-y-8">
        <div class="text-center space-y-4">
          <h2 class="text-3xl font-bold tracking-tight md:text-4xl">Our Partners</h2>
          <p class="text-lg text-infin-secondary leading-relaxed max-w-2xl mx-auto">
            Strategic alliances across the Middle East extend our ability to deliver trusted,
            high-performance medical technologies to clinics and healthcare providers.
          </p>
        </div>
        <div class="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          <div
            class="rounded-xl border border-infin-teritiary/30 bg-infin-secbg p-6 text-center space-y-3"
          >
            <span class="text-3xl" role="img" aria-label="Egypt flag">🇪🇬</span>
            <div class="space-y-1">
              <p class="text-sm font-semibold text-infin-secondary">Egypt</p>
              <p class="text-lg font-bold tracking-tight">PGT Egypt</p>
            </div>
          </div>
          <div
            class="rounded-xl border border-infin-teritiary/30 bg-infin-secbg p-6 text-center space-y-3"
          >
            <span class="text-3xl" role="img" aria-label="Oman flag">🇴🇲</span>
            <div class="space-y-1">
              <p class="text-sm font-semibold text-infin-secondary">Oman</p>
              <p class="text-lg font-bold tracking-tight">PGT Oman</p>
            </div>
          </div>
          <div
            class="rounded-xl border border-infin-teritiary/30 bg-infin-secbg p-6 text-center space-y-3"
          >
            <span class="text-3xl" role="img" aria-label="United Arab Emirates flag">🇦🇪</span>
            <div class="space-y-1">
              <p class="text-sm font-semibold text-infin-secondary">United Arab Emirates</p>
              <p class="text-lg font-bold tracking-tight">PGT UAE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- CTA -->
    <section class="relative container overflow-hidden py-16">
      <div
        class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br frominfin/10 via-infin-secbg to-/20"
      ></div>
      <div class="mx-auto relative max-w-4xl text-center space-y-6">
        <h2 class="text-3xl font-bold tracking-tight text-infin md:text-4xl">
          Ready to Build Your Next Advantage?
        </h2>
        <p class="text-base text-infin-secondary leading-relaxed">
          Partner with Infinity Medicals for tailored device recommendations, regulatory-ready
          documentation, and a support team committed to your long-term clinical and commercial
          success.
        </p>
        <div class="space-x-4">
          <a data-slot="button" class="btn-lg" href="/quote">Request a Consultation</a
          ><a data-slot="button" class="btn-lg-outline" href="/demo">Book a Demo</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
