/**
 * TypeScript type definitions
 */

export interface Service {
  id: number
  title: string
  description: string
  image: string
  benefits: readonly string[]
}

export interface GalleryItem {
  id: number
  before: string
  after: string
  title: string
}

export interface ContactFormData {
  name: string
  city: string
  phone: string
  email: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}
