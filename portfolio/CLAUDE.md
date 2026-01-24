# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # TypeScript check + production build
npm run lint     # Run ESLint with auto-fix
npm run preview  # Preview production build
```

## Architecture

This is a React portfolio site built with Vite, HeroUI component library, and Tailwind CSS v4.

### Key Structure

- **Entry**: `src/main.tsx` → `App.tsx` (routes) → page components
- **Provider hierarchy**: `BrowserRouter` → `HeroUIProvider` (in `provider.tsx`)
- **Routing**: React Router v6 in `App.tsx`, pages in `src/pages/`
- **Layout**: `src/layouts/default.tsx` wraps pages with navbar and footer
- **Config**: `src/config/site.ts` contains nav items and external links

### Path Alias

`@/*` maps to `src/*` (configured in `tsconfig.json`)

### Component Libraries

- **HeroUI**: Primary UI components (`@heroui/*` packages)
- **Lucide React**: Icons
- **Framer Motion**: Animations
- **Tailwind Variants**: Component styling variants

### Static Assets

Files in `public/` are served at root path - reference directly: `<img src="/image.png" />`
