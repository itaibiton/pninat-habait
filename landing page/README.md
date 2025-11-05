# פנינת הבית - Landing Page

Modern, responsive landing page for an Israeli home renovation brand built with Next.js 15, Tailwind CSS v4, and TypeScript.

## 🚀 Features

- ✅ Next.js 15 with App Router
- ✅ Tailwind CSS v4 with RTL support
- ✅ TypeScript for type safety
- ✅ Framer Motion animations
- ✅ Fully responsive design
- ✅ Hebrew typography with Rubik font
- ✅ SEO optimized with metadata
- ✅ Modern UI components
- ✅ Contact form (ready for CRM integration)
- ✅ Before/After gallery with lightbox
- ✅ Smooth scroll animations

## 📁 Project Structure

```
new-landing-page/
├── app/
│   ├── layout.tsx              # Root layout with RTL and SEO
│   ├── page.tsx                # Homepage
│   └── globals.css             # Global styles with Tailwind
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Header with navigation
│   │   └── Footer.tsx          # Footer with contact info
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Services.tsx        # Services section
│   │   ├── Gallery.tsx         # Before/After gallery
│   │   ├── DIYTeaser.tsx       # DIY teaser section
│   │   └── Contact.tsx         # Contact form
│   └── ui/
│       ├── Button.tsx          # Button component
│       ├── Card.tsx            # Card component
│       ├── Container.tsx       # Container component
│       ├── Input.tsx           # Input component
│       └── Section.tsx         # Section component
├── lib/
│   ├── utils.ts                # Utility functions
│   └── constants.ts            # App constants
├── types/
│   └── index.ts                # TypeScript types
└── public/
    └── images/                 # Image assets
```

## 🎨 Brand Colors

- Primary: `#19b4b5` (Turquoise)
- Primary Light: `#7ba8ad` (Light Teal)
- Accent Orange: `#ed7b15`
- Accent Coral: `#ff6139`

## 🖼️ Placeholder Images

You need to add the following images to complete the design:

### Hero Section
- `/public/images/hero/hero-bg.jpg` (1920x1080px) - Kitchen renovation background

### Services
- `/public/images/services/pearl-coating.jpg` (800x600px) - Pearl coating method
- `/public/images/services/premium-coating.jpg` (800x600px) - Premium coating
- `/public/images/services/pvc-coating.jpg` (800x600px) - PVC cabinet coating
- `/public/images/services/polymer-panels.jpg` (800x600px) - Polymer panels

### Gallery (Before/After pairs)
- `/public/images/gallery/before1.jpg` → `/public/images/gallery/after1.jpg`
- `/public/images/gallery/before2.jpg` → `/public/images/gallery/after2.jpg`
- `/public/images/gallery/before3.jpg` → `/public/images/gallery/after3.jpg`
- `/public/images/gallery/before4.jpg` → `/public/images/gallery/after4.jpg`
- `/public/images/gallery/before5.jpg` → `/public/images/gallery/after5.jpg`
- `/public/images/gallery/before6.jpg` → `/public/images/gallery/after6.jpg`

Each gallery image should be 800x600px.

### DIY Section
- `/public/images/diy/diy-coming-soon.jpg` (1200x800px) - DIY kit preview

### SEO
- `/public/og-image.jpg` (1200x630px) - Open Graph image for social sharing

## 🚦 Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 📝 Configuration

### Contact Information

Update contact details in `/lib/constants.ts`:

```typescript
export const CONTACT_INFO = {
  phone: '0525474702',
  phoneFormatted: '052-5474702',
  phoneInternational: '972525474702',
  email: 'Kitchenspearl.info@gmail.com',
  address: 'הטיילת 5 אשדוד',
}
```

### Social Links

Update social media links in `/lib/constants.ts`:

```typescript
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/thepearlhouse.il',
  facebook: '#',
  tiktok: '#',
  whatsapp: 'https://api.whatsapp.com/send?phone=972525474702',
}
```

## 🔌 CRM Integration

The contact form is ready for integration. To connect it to your CRM:

1. Open `/components/sections/Contact.tsx`
2. Find the `handleSubmit` function
3. Replace the placeholder code with your API call:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setSubmitMessage('תודה! נחזור אליך בהקדם')
      setFormData({ name: '', city: '', phone: '', email: '' })
    }
  } catch (error) {
    setSubmitMessage('אירעה שגיאה. אנא נסה שוב')
  } finally {
    setIsSubmitting(false)
  }
}
```

## 🎯 SEO & Metadata

SEO metadata is configured in `/app/layout.tsx`. Update the following:

- Site title and description
- Open Graph tags
- Twitter card
- Canonical URL

## 📱 RTL Support

The entire site is built with RTL (right-to-left) support for Hebrew:

- HTML `dir="rtl"` attribute
- Tailwind CSS v4 logical properties
- Rubik font optimized for Hebrew

## 🎨 Customization

### Colors

Update brand colors in `/app/globals.css`:

```css
@theme {
  --color-primary: #19b4b5;
  --color-primary-light: #7ba8ad;
  --color-accent-orange: #ed7b15;
  --color-accent-coral: #ff6139;
}
```

### Typography

Change fonts in `/app/layout.tsx`:

```typescript
import { Rubik } from 'next/font/google'

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})
```

## 📦 Technologies

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Animations:** Framer Motion
- **Font:** Rubik (Google Fonts)
- **Icons:** Heroicons (inline SVG)

## 🤝 Credits

Built by: **שניר אבגי**

## 📄 License

© 2025 פנינת הבית – כל הזכויות שמורות

---

For questions or support, contact: Kitchenspearl.info@gmail.com
