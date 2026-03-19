# FLESH & CODE - Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
cd flesh-and-code-nextjs
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
npm start
```

## What's Included

### Pages
- **Home** (`/`) - Hero section, featured products, editorial preview
- **Shop** (`/shop`) - Full product catalog with 9 items
- **Blog** (`/blog`) - Editorial listing with 6 posts
- **Blog Post** (`/blog/[slug]`) - Dynamic post pages (3 sample posts)

### Components
- **Header** - Sticky navigation with logo
- **Footer** - Footer with links and social
- **ProductCard** - Product display with hover effects
- **PostCard** - Blog post preview cards

### Styling
- **Tailwind CSS** - Custom color palette (matrix green, void black, etc.)
- **Global CSS** - Glitch effects, terminal cards, button styles
- **Google Fonts** - Space Mono (headings) and Inter (body)

## Color Palette

| Name | Color | Usage |
|------|-------|-------|
| Void | `#050505` | Background |
| Matrix | `#00FF41` | Primary accent (neon green) |
| Terminal | `#0D1117` | Card backgrounds |
| Signal | `#FF3B3B` | Alert accent (red) |
| Static | `#B0B0B0` | Body text |
| Chrome | `#D4D4D4` | Bright text |

## Customization Tips

### Change Brand Name
Replace "FLESH & CODE" across:
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/page.tsx`
- `tailwind.config.ts` (metadata)

### Modify Color Scheme
Update `tailwind.config.ts`:
```typescript
colors: {
  void: '#YOUR_COLOR',
  matrix: '#YOUR_COLOR',
  // ... etc
}
```

### Add New Products
Edit product arrays in:
- `app/page.tsx` (featured)
- `app/shop/page.tsx` (catalog)

### Add Blog Posts
Add to `posts` object in `app/blog/[slug]/page.tsx`:
```typescript
'your-slug': {
  slug: 'your-slug',
  title: 'Post Title',
  date: 'Month DD, YYYY',
  category: 'Category',
  author: 'Author Name',
  content: (<>Content here</>),
  relatedPosts: [/* ... */],
}
```

Then update `app/blog/page.tsx` to include in listing.

## File Structure Explained

```
app/
├── layout.tsx          # Root layout + metadata
├── page.tsx            # Homepage
├── globals.css         # Global styles (glitch effects, etc.)
├── shop/
│   └── page.tsx        # Shop page with product grid
└── blog/
    ├── page.tsx        # Blog listing with filters
    └── [slug]/
        └── page.tsx    # Dynamic blog post pages

components/
├── Header.tsx          # Navigation
├── Footer.tsx          # Footer with links
├── ProductCard.tsx     # Product card component
└── PostCard.tsx        # Blog post card component
```

## TypeScript

All components are fully typed with TypeScript. No `any` types.

## Performance

- Static generation for blog posts
- No external image CDN (images referenced as placeholders)
- Minimal client-side JavaScript
- CSS-only animations (no heavy JS libraries)

## Accessibility

- Semantic HTML
- ARIA labels on interactive elements
- Focus states on buttons and links
- Proper heading hierarchy

## Next Steps

1. Replace placeholder images with actual product photos
2. Add real blog content
3. Integrate with a headless CMS (optional)
4. Connect payment processing for shop
5. Deploy to Vercel, Netlify, or your preferred host

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
The site is a standard Next.js 14 app and works with any Node.js hosting.

## Support

For Next.js documentation: https://nextjs.org/docs
For Tailwind CSS: https://tailwindcss.com/docs
