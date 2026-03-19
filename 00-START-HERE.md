# FLESH & CODE - START HERE 🚀

Welcome to the complete FLESH & CODE Next.js 14 website! This document will get you up and running in minutes.

## What You Have

A **production-ready, fully-typed Next.js 14 website** for a fashion-tech hybrid brand with:

✓ 4 complete pages (Home, Shop, Blog listing, Blog posts)
✓ 4 reusable components (Header, Footer, ProductCard, PostCard)
✓ 9 products with full details
✓ 6 blog posts with 3 fully implemented
✓ Cyberpunk dark aesthetic with neon green accents
✓ Fully responsive design
✓ 100% TypeScript with strict mode
✓ Tailwind CSS with custom color palette
✓ Zero external UI libraries

## Quick Start (3 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Open [http://localhost:3000](http://localhost:3000) and you'll see the site!

## File Organization

```
flesh-and-code-nextjs/
├── 📄 Configuration (package.json, tsconfig.json, etc.)
├── 📁 app/              → Pages (home, shop, blog)
├── 📁 components/       → Reusable components
├── 📁 public/           → Images & static files (ready for yours)
└── 📖 Docs              → README, SETUP, guides
```

## Key Files to Know

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage |
| `app/shop/page.tsx` | Product catalog |
| `app/blog/page.tsx` | Blog listing |
| `app/blog/[slug]/page.tsx` | Individual blog posts |
| `components/Header.tsx` | Navigation |
| `components/Footer.tsx` | Footer |
| `tailwind.config.ts` | Colors & design system |

## Color Palette (Cyberpunk Theme)

- **Matrix Green** `#00FF41` - Primary accent (neon)
- **Void Black** `#050505` - Background
- **Terminal Gray** `#0D1117` - Cards
- **Signal Red** `#FF3B3B` - Alerts
- **Static Gray** `#B0B0B0` - Body text
- **Chrome White** `#D4D4D4` - Headings

## Fonts

- **Space Mono** - Headlines (techy, monospace)
- **Inter** - Body text (clean, readable)
- Both imported from Google Fonts automatically

## Quick Customization

### Change Brand Name
Find and replace `FLESH & CODE` with your brand name:
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/page.tsx`
- `tailwind.config.ts`

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  matrix: '#YOUR_COLOR',  // Primary accent
  void: '#YOUR_COLOR',    // Background
  // ... more colors
}
```

### Add Products
Edit arrays in:
- `app/page.tsx` (featured products)
- `app/shop/page.tsx` (all products)

### Add Blog Posts
Edit the `posts` object in `app/blog/[slug]/page.tsx`:
```typescript
'your-slug': {
  slug: 'your-slug',
  title: 'Your Post Title',
  date: 'March 19, 2025',
  category: 'Category',
  author: 'Your Name',
  content: (<>Your content here</>),
  relatedPosts: [/* ... */],
}
```

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Check code quality
```

## Page Overview

### Home (`/`)
- Full-screen hero with glitch effect
- 3 featured products
- 2 editorial posts preview
- Email subscription form

### Shop (`/shop`)
- 9-item product grid
- Filter and sort options
- Product cards with hover effects
- Info section

### Blog (`/blog`)
- 6 blog posts with categories
- Featured post highlight
- Filtering by category
- Newsletter signup

### Blog Post (`/blog/[slug]`)
- Full article content
- Related posts section
- Email subscription
- 3 sample posts ready to explore

## Important Notes

- **All TypeScript** - Full type safety, no `any` types
- **No External UI Libraries** - Pure Tailwind CSS
- **Mobile First** - Fully responsive design
- **Production Ready** - Can deploy immediately
- **SEO Optimized** - Metadata configured
- **Accessible** - Semantic HTML & ARIA labels

## Deploy Your Site

### Vercel (Easiest)
```bash
npm i -g vercel
vercel
```

### Netlify
- Connect GitHub repo
- Deploy from `main` branch

### Any Node.js Host
```bash
npm run build
# Deploy the .next folder
```

## Documentation

- **README.md** - Full project documentation
- **SETUP.md** - Detailed setup & customization
- **PROJECT_SUMMARY.md** - Technical overview
- **CHECKLIST.md** - Development checklist
- **FILES.txt** - Complete file listing

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ View site at http://localhost:3000
4. ✅ Explore the pages
5. ✅ Customize content (colors, text, images)
6. ✅ Add real product images
7. ✅ Replace placeholder images with real ones
8. ✅ Update social media links
9. ✅ Run `npm run build` when ready
10. ✅ Deploy to Vercel or your host

## Common Questions

**Q: How do I add a new product?**
A: Edit the product arrays in `app/page.tsx` or `app/shop/page.tsx`

**Q: How do I add a new blog post?**
A: Add an entry to the `posts` object in `app/blog/[slug]/page.tsx`

**Q: How do I change the colors?**
A: Edit `tailwind.config.ts` in the `colors` section

**Q: Can I deploy this?**
A: Yes! It's production-ready. Use Vercel, Netlify, or any Node.js host.

**Q: Do I need to buy dependencies?**
A: No. Everything is free and open-source.

**Q: Is it mobile-friendly?**
A: Yes. Fully responsive mobile-first design.

**Q: Can I use real images?**
A: Yes. Replace the placeholders in product/post cards.

## Support

For questions about:
- **Next.js**: https://nextjs.org/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev

## You're Ready! 🎉

```bash
npm install && npm run dev
```

Open http://localhost:3000 and start exploring your new site!

---

**Version**: 1.0.0
**Status**: Production Ready
**Created**: March 2025
