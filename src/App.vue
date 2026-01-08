<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import HeaderVue from './components/Navigations/HeaderVue.vue'
import FooterVue from './components/Navigations/FooterVue.vue'

const route = useRoute()

// List of auth routes where we don't want header/footer
const authRoutes = [
  '/dashboard/login',
  '/dashboard/forgot',
  '/dashboard/password',
  '/user/login',
  '/user/forgot',
  '/user/password',
  '/user/register',
  '/user/verify',
]

// Make them reactive
const isAuth = computed(() => authRoutes.includes(route.path))
const isDashboard = computed(() => route.path.startsWith('/dashboard'))
</script>

<template>
  <div class="w-full min-h-screen max-w-screen relative bg-infin-secbg">
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.06),transparent_60%)]"
    ></div>
    <!-- Only render header/footer if not dashboard or auth routes -->
    <div v-if="!isDashboard && !isAuth">
      <HeaderVue />
      <RouterView />
      <FooterVue />
    </div>
  </div>
</template>
