import { useEffect, useRef, useState } from 'react'
import { useLocale } from '../i18n/locale'

export function Approach() {
  const { t } = useLocale()
  const steps = t.approach.steps.map((step, index) => ({
    n: String(index + 1),
    title: step.title,
    text: step.text,
    heading: step.heading ?? 'h3',
  }))
  const trackRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const railRef = useRef<HTMLUListElement>(null)
  const barRef = useRef<HTMLSpanElement>(null)
  const [active, setActive] = useState(0)
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [phone, setPhone] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 1180px)').matches,
  )

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const narrow = window.matchMedia('(max-width: 1180px)')
    const sync = () => {
      setReduced(motion.matches)
      setPhone(narrow.matches)
    }
    sync()
    motion.addEventListener('change', sync)
    narrow.addEventListener('change', sync)
    return () => {
      motion.removeEventListener('change', sync)
      narrow.removeEventListener('change', sync)
    }
  }, [])

  useEffect(() => {
    if (reduced || phone) return
    const track = trackRef.current
    const stage = stageRef.current
    const rail = railRef.current
    const bar = barRef.current
    if (!track || !stage || !rail) return

    let frame = 0
    let current = 0
    let goal = 0
    let lastActive = 0
    let touchX = 0

    const maxOf = () => Math.max(0, rail.scrollWidth - stage.clientWidth)

    const consume = (delta: number) => {
      const max = maxOf()
      if (max <= 0) return false
      const scale = max / Math.max(1, window.innerHeight * 0.78)
      const step = delta * scale
      if (delta > 0 && current < max - 1) {
        goal = Math.min(max, goal + step)
        return true
      }
      if (delta < 0 && current > 1) {
        goal = Math.max(0, goal + step)
        return true
      }
      return false
    }

    const tick = () => {
      frame = requestAnimationFrame(tick)
      const max = maxOf()
      const rising = goal >= current
      current += (goal - current) * (rising ? 0.055 : 0.4)
      if (Math.abs(goal - current) < 0.35) current = goal
      rail.style.transform = `translate3d(${-current}px, 0, 0)`
      const p = max > 0 ? current / max : 0
      if (bar) bar.style.width = `${p * 100}%`
      const index = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(p * steps.length + 0.35)),
      )
      if (index !== lastActive) {
        lastActive = index
        setActive(index)
      }
    }

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return
      const delta = event.deltaY + event.deltaX
      if (!consume(delta)) return
      event.preventDefault()
    }

    const onTouchStart = (event: TouchEvent) => {
      touchX = event.touches[0]?.clientX ?? 0
    }

    const onTouchMove = (event: TouchEvent) => {
      const x = event.touches[0]?.clientX ?? touchX
      const delta = touchX - x
      touchX = x
      if (!consume(delta)) return
      event.preventDefault()
    }

    frame = requestAnimationFrame(tick)
    track.addEventListener('wheel', onWheel, { passive: false })
    track.addEventListener('touchstart', onTouchStart, { passive: true })
    track.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => {
      cancelAnimationFrame(frame)
      track.removeEventListener('wheel', onWheel)
      track.removeEventListener('touchstart', onTouchStart)
      track.removeEventListener('touchmove', onTouchMove)
    }
  }, [reduced, phone, steps.length])

  useEffect(() => {
    if (reduced || !phone) return
    const stage = stageRef.current
    const bar = barRef.current
    if (!stage) return

    const sync = () => {
      const cards = [...stage.querySelectorAll<HTMLElement>(':scope > .approach-rail > li')]
      if (!cards.length) return
      const left = stage.getBoundingClientRect().left
      let best = 0
      let bestDist = Number.POSITIVE_INFINITY
      cards.forEach((card, index) => {
        const dist = Math.abs(card.getBoundingClientRect().left - left)
        if (dist < bestDist) {
          bestDist = dist
          best = index
        }
      })
      setActive(best)
      const max = Math.max(1, stage.scrollWidth - stage.clientWidth)
      if (bar) bar.style.width = `${(stage.scrollLeft / max) * 100}%`
    }

    sync()
    stage.addEventListener('scroll', sync, { passive: true })
    return () => stage.removeEventListener('scroll', sync)
  }, [reduced, phone, steps.length])

  const stepHeading = (step: (typeof steps)[number]) =>
    step.heading === 'h4' ? <h4>{step.title}</h4> : <h3>{step.title}</h3>

  if (reduced) {
    return (
      <section className="approach approach--plain" id="approach" data-scene="ink">
        <div className="section-head">
          <p className="eyebrow">{t.approach.kicker}</p>
          <h2>{t.approach.title}</h2>
        </div>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.n}>
              <article className="step-card">
                <span>{step.n}</span>
                {stepHeading(step)}
                <p>{step.text}</p>
              </article>
            </li>
          ))}
        </ol>
      </section>
    )
  }

  return (
    <section
      className={`approach${phone ? ' approach--swipe' : ''}`}
      id="approach"
      data-scene="ink"
    >
      <div className="approach-pin">
        <div className="approach-pin__sticky">
          <header className="approach-pin__head">
            <p className="eyebrow">{t.approach.kicker}</p>
            <p
              key={active}
              className="approach-pin__count"
              aria-live="polite"
            >
              {steps[active].n}
              <span> / {steps.length}</span>
            </p>
            <h2>{t.approach.title}</h2>
          </header>

          <div className="approach-track" ref={trackRef}>
            <div className="approach-stage" ref={stageRef}>
              <ul className="approach-rail" ref={railRef}>
                {steps.map((step, index) => (
                  <li key={step.n}>
                    <article
                      className={`approach-slide${index === active ? ' is-active' : ''}`}
                    >
                      <span className="approach-slide__ghost" aria-hidden="true">
                        {step.n}
                      </span>
                      {stepHeading(step)}
                      <p>{step.text}</p>
                    </article>
                  </li>
                ))}
              </ul>
            </div>

            <div className="approach-nav" aria-hidden="true">
              <ol className="approach-dots">
                {steps.map((step, index) => (
                  <li key={step.n} className={index === active ? 'is-on' : ''} />
                ))}
              </ol>
              <div className="approach-progress">
                <span ref={barRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
