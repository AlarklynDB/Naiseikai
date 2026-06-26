import { useEffect, useRef, useState, type ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavItem {
  id: string
  label: string
}

// ─── Side Nav ─────────────────────────────────────────────────────────────────

function LoreSideNav({ items, activeId }: { items: NavItem[]; activeId: string }) {
  if (items.length < 4) return null

  return (
    <nav
      className="hidden lg:flex flex-col gap-1 fixed top-28 right-6 w-52 z-40"
      aria-label="Page sections"
    >
      <p className="text-[10px] font-mono text-text-faint uppercase tracking-widest mb-2 px-2">
        On this page
      </p>
      {items.map((item) => {
        const isActive = activeId === item.id
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById(item.id)
              if (el) {
                const NAVBAR_HEIGHT = 80
                const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
                window.scrollTo({ top, behavior: 'smooth' })
              }
            }}
            className="text-xs px-2 py-1.5 rounded-md transition-all duration-200 leading-snug"
            style={{
              color: isActive ? '#7ef5ff' : 'var(--color-text-faint, #6b7280)',
              background: isActive ? 'rgba(126,245,255,0.08)' : 'transparent',
              borderLeft: isActive ? '2px solid #7ef5ff' : '2px solid transparent',
              fontWeight: isActive ? 600 : 400,
            }}
          >
            {item.label}
          </a>
        )
      })}
    </nav>
  )
}

// ─── Layout ───────────────────────────────────────────────────────────────────

interface LorePageLayoutProps {
  children: ReactNode
}

export default function LorePageLayout({ children }: LorePageLayoutProps) {
  const [navItems, setNavItems] = useState<NavItem[]>([])
  const [activeId, setActiveId] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  // Build nav from h2[id] elements after render
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const headings = Array.from(container.querySelectorAll('h2[id]')) as HTMLHeadingElement[]
    const items: NavItem[] = headings.map((h) => ({
      id: h.id,
      label: h.textContent?.replace(/^\s+|\s+$/g, '') ?? '',
    }))
    setNavItems(items)
    if (items.length > 0) setActiveId(items[0].id)
  }, [children])

  // Intersection observer — highlight active section
  useEffect(() => {
    if (navItems.length < 4) return

    const observers: IntersectionObserver[] = []

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        {
          rootMargin: '-20% 0px -70% 0px',
          threshold: 0,
        }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [navItems])

  return (
    <>
      <LoreSideNav items={navItems} activeId={activeId} />
      <div ref={containerRef} className="lg:pr-60">
        {children}
      </div>
    </>
  )
}
