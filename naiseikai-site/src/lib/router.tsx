// ============================================================
// Lightweight router shim — replaces react-router-dom for Astro
// ------------------------------------------------------------
// Astro handles routing at the file level (src/pages/*.astro), so
// we don't need a client-side router. This shim provides drop-in
// replacements for the react-router APIs the site used:
//   • <Link to="...">   → renders a real <a href="...">
//   • useLocation()      → reads window.location (SSR-safe)
//   • useNavigate()      → window.location.assign
//   • <BrowserRouter>    → passthrough
//
// astro.config.mjs aliases the bare 'react-router-dom' specifier
// to this file, so all 47 page/components resolve here WITHOUT any
// import edits — the build never breaks on a missed import.
// ============================================================

import type { AnchorHTMLAttributes, ReactNode } from 'react'

// ── <Link> ──────────────────────────────────────────────────
interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string
  children?: ReactNode
}

export function Link({ to, children, ...rest }: LinkProps) {
  return (
    <a href={to} {...rest}>
      {children}
    </a>
  )
}

// ── useLocation() ───────────────────────────────────────────
export interface ShimLocation {
  pathname: string
  search: string
  hash: string
}

export function useLocation(): ShimLocation {
  if (typeof window === 'undefined') {
    return { pathname: '/', search: '', hash: '' }
  }
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
  }
}

// ── Compatibility no-ops ────────────────────────────────────
export function BrowserRouter({ children }: { children?: ReactNode }) {
  return <>{children}</>
}

export function useNavigate() {
  return (to: string) => {
    if (typeof window !== 'undefined') window.location.assign(to)
  }
}

// Routes/Route are not used outside App.tsx (which is removed),
// but exported as no-ops just in case any stray import exists.
export function Routes({ children }: { children?: ReactNode }) {
  return <>{children}</>
}
export function Route(_props: { path?: string; element?: ReactNode }) {
  return null
}
