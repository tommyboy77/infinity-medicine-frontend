import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LocationsView from '@/views/LocationsView.vue'
import SupportView from '@/views/SupportView.vue'
import OphthalmologyView from '@/views/Products/OphthalmologyView.vue'
import DermatologyView from '@/views/Products/DermatologyView.vue'
import ProductView from '@/views/Products/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/locations',
      name: 'locations',
      component: LocationsView,
    },
    {
      path: '/support',
      name: 'support',
      component: SupportView,
    },
    {
      name: 'ophthalmology',
      path: '/ophthalmology',
      component:OphthalmologyView

    },
    {
      name: 'dermatology',
      path: '/dermatology',
      component: DermatologyView

    },

    {
      name: 'product',
      path: '/products/:slug',
      component: ProductView

    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})


export default router
