/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

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
  technicalSpecifications?: any
  keyFeatures?: any
  keyIngredients?: any
  treatmentIndications?: any
  clinicalBenefits?: any
  application?: string
}

// map Strapi v5 response to Product
const mapStrapiProduct = (item: any): Product => {
  return {
    id: item.id,
    name: item.name ?? 'Unknown',
    slug: item.slug ?? '',
    type: item.type ?? 'tool',
    department: item.department ?? 'general-med',
    description: item.description,
    short_description: item.short_description,
    technicalSpecifications: item.technicalSpecifications,
    keyFeatures: item.keyFeatures,
    keyIngredients: item.keyIngredients,
    treatmentIndications: item.treatmentIndications,
    clinicalBenefits: item.clinicalBenefits,
    application: item.application,
    photo: item.photo ? `${API_URL}${item.photo.url}` : undefined,
  }
}

export const useProductStore = defineStore('product', () => {
  const allproducts = ref<Product[]>([])
  const ophthalmology = ref<Product[]>([])
  const dermatology = ref<Product[]>([])
  const generalMed = ref<Product[]>([])

  const activeProduct = ref<Product | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  /* =======================
   * Generic fetch
   * ======================= */
  const fetchProducts = async (filters?: string): Promise<Product[]> => {
    try {
      const url = filters ? `${API_URL}/api/products?populate=*&${filters}` : `${API_URL}/api/products?populate=*`
      const res = await axios.get(url)
      const products = res.data.data.map(mapStrapiProduct)
      console.log('Fetched products:', products)
      return products
    } catch (err) {
      console.error(err)
      throw new Error('Failed to fetch products')
    }
  }

  /* =======================
   * Department fetchers
   * ======================= */
  const fetchOphthalmology = async (): Promise<void> => {
    loading.value = true
    try {
      const products = await fetchProducts('filters[department][$eq]=ophthalmology')
      ophthalmology.value = [...products] // spread fixes reactivity
      console.log('Ophthalmology:', ophthalmology.value)
    } catch {
      error.value = 'Failed to load ophthalmology products'
    } finally {
      loading.value = false
    }
  }

  const fetchDermatology = async (): Promise<void> => {
    loading.value = true
    try {
      const products = await fetchProducts('filters[department][$eq]=dermatology')
      dermatology.value = [...products] // spread fixes reactivity
      console.log('Dermatology:', dermatology.value.length)
    } catch {
      error.value = 'Failed to load dermatology products'
    } finally {
      loading.value = false
    }
  }

  const fetchGeneralMed = async (): Promise<void> => {
    loading.value = true
    try {
      const products = await fetchProducts('filters[department][$eq]=general-med')
      generalMed.value = [...products] // spread fixes reactivity
      console.log('General Med:', generalMed.value)
    } catch {
      error.value = 'Failed to load general medical products'
    } finally {
      loading.value = false
    }
  }

  /* =======================
   * Slug fetcher
   * ======================= */
  const fetchBySlug = async (slug: any): Promise<void> => {
    loading.value = true
    activeProduct.value = null
    try {
      const products = await fetchProducts(`filters[slug][$eq]=${slug}`)
      activeProduct.value = products[0] ?? null
      console.log('Active product:', activeProduct.value)
    } catch {
      error.value = 'Product not found'
    } finally {
      loading.value = false
    }
  }

  return {
    allproducts,
    ophthalmology,
    dermatology,
    generalMed,
    activeProduct,
    loading,
    error,
    fetchProducts,
    fetchOphthalmology,
    fetchDermatology,
    fetchGeneralMed,
    fetchBySlug,
  }
})
