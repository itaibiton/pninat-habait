import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-rubik',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pninat-habait.com'),
  title: 'פנינת הבית - חידוש מטבחים ושיש בשיטה חדשנית',
  description: 'ציפוי והדבקה לארונות ולשיש בעיצוב אישי, במחיר נגיש ועם תוצאות פנומנליות. שירותי שיפוץ מטבחים מקצועיים בישראל.',
  keywords: ['ציפוי מטבחים', 'ציפוי שיש', 'חידוש מטבחים', 'שיפוץ מטבח', 'ציפוי ארונות', 'פנינת הבית', 'ציפוי PVC', 'לוחות פולימריים'],
  authors: [{ name: 'פנינת הבית' }],
  creator: 'פנינת הבית',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://pninat-habait.com',
    siteName: 'פנינת הבית',
    title: 'פנינת הבית - חידוש מטבחים ושיש בשיטה חדשנית',
    description: 'ציפוי והדבקה לארונות ולשיש בעיצוב אישי, במחיר נגיש ועם תוצאות פנומנליות',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'פנינת הבית - חידוש מטבחים ושיש',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'פנינת הבית - חידוש מטבחים ושיש בשיטה חדשנית',
    description: 'ציפוי והדבקה לארונות ולשיש בעיצוב אישי',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={rubik.variable}>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
