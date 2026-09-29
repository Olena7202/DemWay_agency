import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-in')
      return
    }

    const show = () => el.classList.add('is-in')
    const fallback = window.setTimeout(show, 160)

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        window.clearTimeout(fallback)
        show()
        io.disconnect()
      },
      { threshold: 0.01, rootMargin: '48px 0px 48px 0px' },
    )

    io.observe(el)
    return () => {
      window.clearTimeout(fallback)
      io.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`teaser-in from-down ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
