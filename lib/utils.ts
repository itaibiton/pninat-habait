/**
 * Utility functions for the application
 */

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatPhoneNumber(phone: string): string {
  // Format Israeli phone number
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
}

export function getWhatsAppLink(phone: string, message?: string): string {
  const formattedPhone = phone.replace(/\D/g, '')
  const baseUrl = 'https://api.whatsapp.com/send'
  const params = new URLSearchParams({
    phone: formattedPhone,
    ...(message && { text: message }),
  })
  return `${baseUrl}?${params.toString()}`
}

export function getWazeLink(address: string): string {
  return `https://waze.com/ul?q=${encodeURIComponent(address)}`
}
