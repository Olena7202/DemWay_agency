import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  from?: 'up' | 'left' | 'right' | 'soft' | 'scale' | 'slide' | 'orb'
  once?: boolean
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  from = 'up',
  once = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Restart CSS animations when the block re-enters the viewport
          el.classList.remove('is-visible')
          void el.offsetWidth
          el.classList.add('is-visible')
          if (once) io.unobserve(el)
          return
        }
        if (!once) el.classList.remove('is-visible')
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      className={`reveal reveal--${from} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
