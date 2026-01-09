<template>
  <footer
    class="text-infin relative w-full bg-infin-pribg border-t border-infin-teritiary/40 pt-12 pb-8"
  >
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Company Info -->
      <div class="space-y-4">
        <h2 class="text-xl font-bold">INFINITY MEDICALS</h2>
        <p class="text-infin-secondary text-sm">
          Delivering premium, ISO-certified medical devices specialized in skin care and eye care
          that empower providers with precise diagnostics, effective treatments, and superior
          patient outcomes.
        </p>
        <p class="text-infin-secondary text-sm">
          Hawalli-Al-Adsani Complex, Abdullah Abdul Latif Al Othman Street, Hawally, Al 'Asimah,
          Kuwait
        </p>
        <a
          href="tel:+96596671100"
          class="block text-infin font-bold text-sm hover:text-infin transition"
        >
          +965 9667 1100
        </a>
        <a
          href="mailto:kuwait@infinitymedicalkwt.com"
          class="block text-infin font-bold text-sm hover:text-infin transition"
        >
          kuwait@infinitymedicalkwt.com
        </a>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="uppercase text-sm font-bold mb-4">Quick Links</h3>
        <ul class="space-y-2 text-infin-secondary text-sm">
          <li>
            <RouterLink to="/dermatology" class="hover:text-infin transition"
              >Dermatology</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/ophthalmology" class="hover:text-infin transition"
              >Ophthalmology</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/support" class="hover:text-infin transition">Support</RouterLink>
          </li>
          <li>
            <RouterLink to="/quote" class="hover:text-infin transition">Get Quote</RouterLink>
          </li>
          <li>
            <RouterLink to="/demo" class="hover:text-infin transition">Book Demo</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Partners -->
      <div>
        <h3 class="uppercase text-sm font-bold mb-4">Our Partners</h3>
        <ul class="space-y-2 text-infin-secondary text-sm">
          <li>
            <RouterLink to="/locations" class="hover:text-infin transition">
              <span class="font-bold text-infin">PGT Egypt </span><br />Egypt
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/locations" class="hover:text-infin transition">
              <span class="font-bold text-infin">PGT Oman </span><br />Oman
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/locations" class="hover:text-infin transition">
              <span class="font-bold text-infin">PGT UAE </span><br />United Arab Emirates
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div class="space-y-4">
        <h3 class="text-lg font-bold mb-2">Stay Updated</h3>
        <p class="text-infin-secondary text-sm">Enter your email below for daily updates.</p>

        <form class="flex flex-col sm:flex-row gap-2" @submit.prevent="submitNewsletter">
          <input v-model="email" type="email" required placeholder="Email" class="inputbox" />
          <button type="submit" class="btn-lg">Subscribe</button>
        </form>

        <p v-if="message" class="mt-2 text-infin-secondary text-sm text-green-600">
          {{ message }}
        </p>

        <h3 class="text-lg font-bold mb-2">Follow us on</h3>
        <a
          href="https://www.instagram.com/infinitymedicals/"
          target="_blank"
          rel="noopener"
          class="text-infin-secondary text-sm hover:text-infin transition"
        >
          Instagram
        </a>
      </div>
    </div>

    <div
      class="pt-12 mt-12 text-center text-infin-secondary text-sm border-t border-infin-teritiary/40 container"
    >
      © 2026, InfinityMedicals
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref<string>('')
const message = ref<string>('')

const submitNewsletter = async (): Promise<void> => {
  try {
    const res = await fetch('/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value }),
    })

    const result: { success: boolean; message: string } = await res.json()
    message.value = result.message

    if (result.success) {
      email.value = ''
    }
  } catch {
    message.value = 'An error occurred. Please try again later.'
  }
}
</script>
