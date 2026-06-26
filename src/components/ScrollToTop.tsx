import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to the top on every route change.
 * If the URL has a hash (e.g. #yokai-relinquishment), it lets the
 * browser handle the anchor scroll naturally instead.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Let browser resolve the hash after render
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        const NAVBAR_HEIGHT = 80 // 64px nav + 16px breathing room
        const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
        window.scrollTo({ top, behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}
