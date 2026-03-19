# FLESH & CODE - Fashion-Tech Hybrid Brand

A next-generation fashion-tech brand website built with Next.js 14, featuring an edgy cyberpunk aesthetic with dark mode as default.

## Overview

FLESH & CODE is a cutting-edge fashion brand that blends technology with wearable innovation. The site showcases:

- **Home**: Full-screen hero with dramatic branding, product grid, and editorial preview
- **Shop**: Product catalog with filtering and sorting
- **Blog (Signal)**: Editorial content exploring fashion-technology intersection
- **Blog Posts**: Deep-dive articles with related content recommendations

## Design System

### Color Palette

- **Void**: `#050505` - Near-absolute black background
- **Matrix**: `#00FF41` - Neon green accent (primary)
- **Terminal**: `#0D1117` - Dark gray for card backgrounds
- **Signal**: `#FF3B3B` - Alert red accent
- **Static**: `#B0B0B0` - Body text
- **Chrome**: `#D4D4D4` - Bright text

### Typography

- **Headlines**: Space Mono (monospace, techy)
- **Body**: Inter (clean sans-serif)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

```bash
npm run build
npm start
```

## Project Structure

```
flesh-and-code-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── shop/
│   │   └── page.tsx        # Shop/catalog page
│   └── blog/
│       ├── page.tsx        # Blog listing
│       └── [slug]/
│           └── page.tsx    # Individual blog post
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer
│   ├── ProductCard.tsx     # Product display component
│   └── PostCard.tsx        # Blog post preview card
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind CSS customization
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Features

### Homepage
- Full-screen hero section with glitch effect
- Featured product grid (3 items)
- Editorial/signal section (2 featured posts)
- Email subscription CTA

### Shop
- Product grid (9 items)
- Filter by category
- Sort options (Featured, Price, Newest)
- Product information cards with hover effects
- Info section with Quality, Shipping, Returns details

### Blog/Signal
- Editorial listing with 6 posts
- Featured post highlight
- Category filtering
- Individual post pages with deep content
- Related posts section
- Newsletter signup forms

## Styling

All styling uses Tailwind CSS with custom extensions:

- Matrix-green glow effects
- Terminal-style cards with hover animations
- Monospace button styles
- Glitch text effects (CSS-only, no JavaScript)

## Responsive Design

- Mobile-first approach
- Full responsive grid layouts
- Touch-friendly navigation
- Optimized for all device sizes

## Performance

- Server-side rendering with Next.js
- Static pre-generation for blog posts
- Optimized images with Next.js Image component
- Minimal JavaScript (mostly `use client` for interactivity)

## Customization

### Adding Products

Edit the product arrays in:
- `app/page.tsx` (featured products)
- `app/shop/page.tsx` (full catalog)

### Adding Blog Posts

Add new posts to the `posts` object in `app/blog/[slug]/page.tsx` and update:
- `app/blog/page.tsx` (listing)
- Related posts references

### Updating Colors

Modify the color palette in `tailwind.config.ts` and update CSS variables in `app/globals.css`.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Author

Designed and developed by **St. Clair Design Co.**

---

## License

All rights reserved. FLESH & CODE © 2025.
