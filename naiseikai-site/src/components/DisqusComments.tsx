import { useEffect, useRef } from 'react'

interface DisqusCommentsProps {
  /** Canonical URL of the page — e.g. https://naiseikaiuniverse.com/titles/KarasuToNinja-TQCTN */
  pageUrl: string
  /** Unique identifier for this thread — e.g. 'KarasuToNinja-TQCTN' */
  pageIdentifier: string
}

declare global {
  interface Window {
    DISQUS?: {
      reset: (opts: { reload: boolean; config: () => void }) => void
    }
    disqus_config?: () => void
  }
}

export default function DisqusComments({ pageUrl, pageIdentifier }: DisqusCommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const SHORTNAME = 'the-naiseikai-universe'

    if (window.DISQUS) {
      // Already loaded — just reset with new config (handles tab/page switching)
      window.DISQUS.reset({
        reload: true,
        config: function () {
          // @ts-expect-error disqus uses `this`
          this.page.url = pageUrl
          // @ts-expect-error disqus uses `this`
          this.page.identifier = pageIdentifier
        },
      })
    } else {
      // First load
      window.disqus_config = function () {
        // @ts-expect-error disqus uses `this`
        this.page.url = pageUrl
        // @ts-expect-error disqus uses `this`
        this.page.identifier = pageIdentifier
      }
      const script = document.createElement('script')
      script.src = `https://${SHORTNAME}.disqus.com/embed.js`
      script.setAttribute('data-timestamp', String(+new Date()))
      script.async = true
      ;(document.head || document.body).appendChild(script)
    }
  }, [pageUrl, pageIdentifier])

  return (
    <section className="mt-12">
      <div className="section-divider mb-8" />
      <div className="mb-6">
        <span className="neon-sign neon-sign-purple text-[10px] mb-3 inline-block">Reader Reviews</span>
        <h2 className="font-serif text-2xl text-text">Leave a Review</h2>
        <p className="text-sm text-text-muted mt-1">
          Thoughts, feelings, reactions — all welcome. Log in with Disqus, Google, Facebook, or Twitter.
        </p>
      </div>
      <div
        ref={containerRef}
        id="disqus_thread"
        className="min-h-[200px]"
      />
      <noscript>
        Please enable JavaScript to view the{' '}
        <a
          href="https://disqus.com/?ref_noscript"
          className="text-[#00e5ff] underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          comments powered by Disqus.
        </a>
      </noscript>
    </section>
  )
}
