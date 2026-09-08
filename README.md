# Davin Loise S.A.H — Liquid Glass Portfolio (Aceternity port)

Next.js 14 + TypeScript + Tailwind CSS port of the Liquid Glass portfolio,
with five Aceternity-style sections replacing the original Bootstrap page.

## Install & run

```bash
cd "davin-portfolio"
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

> PowerShell / cmd on Windows: `cd "davin-portfolio"` then `npm install`.

## Move the profile photo

`foto_profile.jpeg` lives next to the old `index.html`. Copy it into the
`public/` folder so the hero card can reference it:

```bash
# PowerShell
Copy-Item "..\foto_profile.jpeg" "public\foto_profile.jpeg"

# bash / git bash
cp ../foto_profile.jpeg public/foto_profile.jpeg
```

The hero `<img>` is wired to `/foto_profile.jpeg` via `Profile3DCard`.

## Aceternity components (vanilla React ports)

| Aceternity | File | What it does |
| --- | --- | --- |
| `BackgroundBeamsWithCollision` | `components/background-beams-with-collision.tsx` | Animated beams from the top, particle explosion + auto-replenish on collision. Wraps `<main>` inside the page. |
| `FloatingNav` | `components/floating-navbar.tsx` | Floating glass pill nav (About / Projects / Skills / Contact) with scroll-spy, auto-hide on scroll down, smooth-scroll to anchors. |
| `InfiniteMovingCards` | `components/infinite-moving-cards.tsx` | Marquee of the 4 skill cards (Design Systems, Interaction Design, Frontend Craft, Spatial Computing) with edge fade. |
| `Carousel` | `components/carousel.tsx` | 4-slide projects carousel (Lumina OS 26, Aetheria Cloud, Chronos Pay, Vortex Engine) with autoplay, pause-on-hover, dots, prev/next. |
| `Profile3DCard` | `components/profile-3d-card.tsx` | 3D profile photo with on-mount intro rotation (rotateX [0,-8,0] / rotateY [0,12,0]), mouse-tilt, cursor glare, drag gesture, reduced-motion fallback. |

## Preserved from the original

- Identity: **Davin Loise S.A.H** — Web Dev, UI/UX, & Multimedia · XII RPL A · 4+ Proyek · JKT • UTC+7
- Photo: `/foto_profile.jpeg` (local copy of the original file)
- Palette, type tokens, spacing, radii, Material Symbols, dark-mode Liquid Glass system
- Scroll-reveal fade-up, `prefers-reduced-motion` respected
- Mobile responsive

## Extra dependencies

- `framer-motion` — animations for floating nav, carousel transitions, intro rotation, beams
- `clsx`, `tailwind-merge` — utility for class composition (`cn`)
- `@tabler/icons-react` — listed in `package.json` for future icon swap (currently using Material Symbols Outlined via the `<link>` in `app/layout.tsx`)

No shadcn CLI is required: the components above are hand-rolled ports that
match the Aceternity behavior so the project stays a single static-feeling
Next.js app.
