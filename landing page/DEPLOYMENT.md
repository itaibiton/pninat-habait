# 🚀 Deployment Guide - פנינת הבית

Step-by-step guide to deploy your landing page to production.

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All images are added to `/public/images/`
- [ ] Contact information is updated in `/lib/constants.ts`
- [ ] Social media links are correct
- [ ] The site builds successfully (`npm run build`)
- [ ] You've tested the site locally
- [ ] Domain name is ready (if you have one)

## 🌟 Option 1: Vercel (Recommended - Easiest)

Vercel is the company behind Next.js and offers the best integration.

### Step 1: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Use your GitHub, GitLab, or Bitbucket account

### Step 2: Deploy from Git (Recommended)

**A. Push to GitHub first:**

```bash
git init
git add .
git commit -m "Initial commit - פנינת הבית landing page"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

**B. Connect to Vercel:**

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your repository
3. Vercel will auto-detect Next.js
4. Click "Deploy"
5. Done! Your site is live in ~2 minutes

**OR Deploy using Vercel CLI:**

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts and your site will be deployed!

### Step 3: Add Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Go to "Settings" → "Domains"
3. Add your custom domain (e.g., `pninat-habait.com`)
4. Follow the DNS configuration instructions
5. Vercel will automatically handle SSL certificates

**Vercel Features:**
- ✅ Free for personal projects
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Preview deployments for each branch
- ✅ Built-in analytics

---

## 🔷 Option 2: Netlify

Another excellent option with similar features to Vercel.

### Deploy to Netlify:

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub/GitLab/Bitbucket
3. Click "Add new site" → "Import an existing project"
4. Choose your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

**Add Custom Domain:**
1. Go to "Domain settings"
2. Add custom domain
3. Configure DNS records as instructed

---

## 📦 Option 3: Self-Hosting (VPS/Cloud)

If you have your own server or VPS:

### Requirements:
- Node.js 18+ installed
- Process manager (PM2 recommended)

### Deployment Steps:

```bash
# 1. Build the project locally or on server
npm run build

# 2. Install PM2 globally
npm install -g pm2

# 3. Start the application
pm2 start npm --name "pninat-habait" -- start

# 4. Make it start on server reboot
pm2 startup
pm2 save

# 5. Configure Nginx as reverse proxy (optional)
```

**Nginx Configuration:**

```nginx
server {
    listen 80;
    server_name pninat-habait.com www.pninat-habait.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔒 Environment Variables

If you add environment variables later (for CRM integration, analytics, etc.):

### Vercel:
1. Go to project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

### Netlify:
1. Go to "Site settings" → "Build & deploy"
2. Click "Environment"
3. Add variables

### Self-hosting:
Create a `.env.production` file (DON'T commit to git):

```env
NEXT_PUBLIC_API_URL=your_api_url
CRM_API_KEY=your_crm_key
```

---

## 📊 Analytics Setup (Optional)

### Google Analytics:

1. Create a Google Analytics account
2. Get your measurement ID (e.g., `G-XXXXXXXXXX`)
3. Add to `/app/layout.tsx`:

```tsx
import Script from 'next/script'

// In your layout component
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Vercel Analytics (Built-in):

1. Go to your project on Vercel
2. Click "Analytics" tab
3. Enable Web Analytics
4. Install the package:

```bash
npm install @vercel/analytics
```

5. Add to your layout:

```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## 🔍 SEO Setup

### 1. Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap: `https://yoursite.com/sitemap.xml`

### 2. Submit to Search Engines

Submit your URL to:
- [Google](https://www.google.com/webmasters/tools/submit-url)
- [Bing](https://www.bing.com/webmasters/submiturl)

---

## 📱 Social Media Integration

### Facebook Domain Verification:

1. Get your Facebook domain verification code
2. Add to `/app/layout.tsx` metadata:

```tsx
verification: {
  facebook: 'your-verification-code',
}
```

### WhatsApp Business:

Make sure your WhatsApp link is correct:
```
https://api.whatsapp.com/send?phone=972525474702
```

---

## 🎯 Performance Optimization

Before deploying, optimize:

1. **Images**: Compress all images (use [Squoosh](https://squoosh.app))
2. **Fonts**: Already optimized with next/font
3. **Code**: Run `npm run build` to check bundle size

---

## 🆘 Troubleshooting

### Build Fails:

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Site loads slowly:

- Optimize images
- Check bundle size in build output
- Enable caching headers

### Forms not working:

- Check CRM API endpoint
- Verify CORS settings
- Check browser console for errors

---

## 🔄 Continuous Deployment

Once set up with Vercel/Netlify + Git:

1. Make changes locally
2. Commit: `git commit -m "Update contact info"`
3. Push: `git push`
4. Your site automatically rebuilds and deploys!

---

## 📞 Need Help?

Contact: Kitchenspearl.info@gmail.com

---

**Good luck with your deployment! 🚀**
