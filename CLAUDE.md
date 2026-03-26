# Island Freeze Website

Business website for **Island Freeze** — frozen cocktails & tropical slushies based in Aruba.

## Stack
- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS v3

## Dev
```bash
npm run dev     # start dev server at http://localhost:3000
npm run build   # production build
npm run lint    # lint
```

## Pages
- `/` — Home (hero, features, bestsellers, CTA)
- `/menu` — Full drink menu with categories and pricing
- `/about` — Story and brand values
- `/contact` — Hours, address, contact form, map placeholder

## Customization Notes
- Update address, phone, email, Instagram in `app/contact/page.tsx`
- Replace map placeholder with a real Google Maps `<iframe>` in `app/contact/page.tsx`
- Menu items and prices are in `app/menu/page.tsx`
- Brand colors: teal `#06b6d4`, dark navy `#0c1a2e`
