# 🚀 Quick Start Guide - פנינת הבית

## ⚡ Getting Started

### 1️⃣ Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### 2️⃣ Add Your Images

The site is fully functional but uses placeholder image paths. To complete the design, add images to these locations:

#### **Hero Section**
```
public/images/hero/hero-bg.jpg
```
Recommended size: 1920x1080px
Content: Beautiful kitchen renovation background

#### **Services (4 images)**
```
public/images/services/pearl-coating.jpg
public/images/services/premium-coating.jpg
public/images/services/pvc-coating.jpg
public/images/services/polymer-panels.jpg
```
Recommended size: 800x600px
Content: Examples of each service

#### **Gallery (12 images - 6 before/after pairs)**
```
public/images/gallery/before1.jpg  →  public/images/gallery/after1.jpg
public/images/gallery/before2.jpg  →  public/images/gallery/after2.jpg
public/images/gallery/before3.jpg  →  public/images/gallery/after3.jpg
public/images/gallery/before4.jpg  →  public/images/gallery/after4.jpg
public/images/gallery/before5.jpg  →  public/images/gallery/after5.jpg
public/images/gallery/before6.jpg  →  public/images/gallery/after6.jpg
```
Recommended size: 800x600px
Content: Before and after renovation photos

#### **DIY Section**
```
public/images/diy/diy-coming-soon.jpg
```
Recommended size: 1200x800px
Content: DIY kit preview or coming soon graphic

#### **SEO/Social**
```
public/og-image.jpg
```
Recommended size: 1200x630px
Content: Logo or brand image for social media sharing

### 3️⃣ Update Contact Info (Optional)

Edit `/lib/constants.ts` to update:
- Phone number
- Email
- Address
- Social media links

### 4️⃣ Build for Production

```bash
npm run build
npm start
```

Your site will be optimized and ready for deployment!

## 📱 Features Checklist

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ RTL (Right-to-Left) Hebrew layout
- ✅ Smooth scroll animations
- ✅ Interactive before/after gallery
- ✅ Contact form (ready for CRM integration)
- ✅ WhatsApp & phone call buttons
- ✅ SEO optimized
- ✅ Fast loading with Next.js 15

## 🎨 Customization

### Change Colors

Edit `/app/globals.css`:

```css
@theme {
  --color-primary: #19b4b5;
  --color-primary-light: #7ba8ad;
  --color-accent-orange: #ed7b15;
  --color-accent-coral: #ff6139;
}
```

### Modify Content

- **Services**: Edit `/lib/constants.ts` → `SERVICES` array
- **Gallery**: Edit `/lib/constants.ts` → `GALLERY_ITEMS` array
- **Contact Info**: Edit `/lib/constants.ts` → `CONTACT_INFO` object

## 🔌 Connect to CRM

To integrate the contact form with your CRM:

1. Open `/components/sections/Contact.tsx`
2. Find the `handleSubmit` function
3. Replace the placeholder with your API endpoint:

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

## 🚢 Deploy

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Or deploy to any hosting platform that supports Next.js

## 📞 Support

For questions: Kitchenspearl.info@gmail.com

---

**Built with ❤️ by שניר אבגי**
