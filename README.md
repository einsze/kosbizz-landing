# KosBizz Landing Page

Landing page untuk **kosbizz.com** — website marketing utama yang jadi pintu masuk untuk Visitor (calon tenant) dan Partner (pemilik properti).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Build production static export
npm run build

# Output di folder ./out (siap deploy ke Cloudflare Pages)
```

## 📁 Structure

```
landing/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage (main landing)
│   │   ├── features/page.tsx     # Halaman fitur lengkap (/features)
│   │   ├── layout.tsx            # Root layout + SEO meta
│   │   └── globals.css           # Tailwind + custom utility classes
│   ├── components/
│   │   ├── Navbar.tsx            # Top navigation (transparent/solid variants)
│   │   ├── Hero.tsx              # Section 01 — Hero dengan CTA WA
│   │   ├── HowItWorks.tsx        # Section 02 — 3-step process
│   │   ├── ChatDemo.tsx          # Section 03 — Chat mockup visual
│   │   ├── Trust.tsx             # Section 04 — Trust & safety points
│   │   ├── PartnerBanner.tsx     # Section 05 — Audience shift ke Partner
│   │   ├── FeaturesGrid.tsx      # Section 06 — 6 signature features
│   │   ├── PlanPreview.tsx       # Section 07 — 3 tier + Enterprise
│   │   ├── FAQ.tsx               # Section 09 — Accordion FAQ
│   │   ├── FinalCTA.tsx          # Section 10 — Dual CTA final
│   │   └── Footer.tsx            # Footer
│   └── config.ts                 # Global config (WA number, email, dsb)
├── public/                       # Static assets (favicon, images)
├── next.config.mjs               # Static export config
├── tailwind.config.ts            # Custom brand colors
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Design System

Consistent dengan Feature PDF dan Monetization PDF:

- **Primary colors**: Purple `#4C1D95`, Blue `#1E40AF`, Navy `#0F172A`
- **Accent**: WhatsApp Green `#25D366`
- **Typography**: Inter (weight 400-900)
- **Layout**: Mobile-first, container max 1200px, section padding 80-120px

## 🔧 Configuration

Sebelum deploy, edit `src/config.ts`:

```typescript
export const config = {
  contact: {
    // Ganti dengan WA number final (format tanpa + dan tanda kurung)
    waNumber: '628XXXXXXXXXX',  // ← TODO: isi nomor WA final
    email: 'hello@kosbizz.com',
  },
};
```

## 🚢 Deploy ke Cloudflare Pages

### Opsi 1 — Deploy via Cloudflare Dashboard

1. Push repo ini ke GitHub
2. Login ke Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Pilih repo, set:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: 20 (di Environment variables: `NODE_VERSION=20`)
4. Deploy — otomatis dapat URL `*.pages.dev`
5. Custom domain: Cloudflare Dashboard → domain kosbizz.com → tambah CNAME ke Pages

### Opsi 2 — Deploy via Wrangler CLI

```bash
# Install wrangler global
npm install -g wrangler

# Login
wrangler login

# Build
npm run build

# Deploy
wrangler pages deploy ./out --project-name=kosbizz-landing
```

## 📄 Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/app/page.tsx` | Homepage — Hero, How It Works, Chat Demo, Trust, Partner, Features Grid, Plan, FAQ, Final CTA |
| `/features/` | `src/app/features/page.tsx` | Fitur lengkap — 12 modul MVP dengan detail |

## 🎯 CTAs & WhatsApp Links

Semua CTA WA di-generate via helper `waLink(customMessage?)` di `src/config.ts`.

Contoh:
```typescript
import { waLink } from '@/config';

<a href={waLink('halo, saya ingin cari properti')}>Chat</a>
```

## 🔒 SEO & Meta

- Meta tags per page di `metadata` export
- Open Graph + Twitter Card ready
- Sitemap: auto-generate via Next.js
- Robots: `index, follow` di production

## 📊 Analytics (Recommended)

- **Cloudflare Web Analytics** (privacy-friendly, gratis, no cookie) — enable di Cloudflare Dashboard
- Optional: Vercel Analytics kalau ada demand

## 🐛 Troubleshooting

**Build error "Module not found: 'next/font/google'"**
```bash
npm install
# Kalau masih error, hapus .next dan node_modules, install ulang
```

**Static export tidak generate favicon**
- Tambah favicon.ico di `public/` — auto tercopy ke `out/`

**Font Inter tidak load**
- Cek koneksi internet saat build (Google Fonts di-fetch build-time)
- Alternative: download & pakai `next/font/local`

## 📝 TODOs sebelum Launch

- [ ] Isi `waNumber` final di `src/config.ts`
- [ ] Add favicon.ico ke `public/`
- [ ] Add og-image.png untuk social share
- [ ] Setup Cloudflare Web Analytics
- [ ] Test build production locally: `npm run build && npx serve out`
- [ ] Setup custom domain di Cloudflare Pages
- [ ] Verify semua CTA link berfungsi
