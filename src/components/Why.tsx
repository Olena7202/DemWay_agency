import { useEffect, useState } from 'react'
import moon from '../assets/logo-moon.png'
import { Reveal } from './Reveal'
import { useLocale } from '../i18n/locale'

export function Why() {
  const { t } = useLocale()
  const [openTip, setOpenTip] = useState<number | null>(null)

  useEffect(() => {
    const close = (event: PointerEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      if (target.closest('.why__point')) return
      setOpenTip(null)
    }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [])

  return (
    <section className="why" id="why" data-scene="why">
      <Reveal className="why__intro" from="left">
        <h2 className="why__kicker">
          <span>{t.why.kicker}</span>
        </h2>
        <div className="why__panel">
          <p className="why__text">
            <strong className="why__brand">{t.why.brand}</strong>
            {t.why.textBefore}
            <em className="why__em">{t.why.textAccent}</em>
            {t.why.textAfter}
          </p>
        </div>
      </Reveal>

      <Reveal className="why__visual" from="soft" delay={120}>
        <div className="why__orbit">
          <div className="why__track why__track--back" aria-hidden="true">
            <span className="why__ring" />
          </div>

          <div className="why__track why__track--light" aria-hidden="true">
            <span className="why__ring why__ring--light" />
          </div>

          <div
            className="why__globe"
            style={{ backgroundImage: `url(${moon})` }}
          />
          <span className="why__haze" aria-hidden="true" />

          <div className="why__track why__track--front" aria-hidden="true">
            <span className="why__ring" />
          </div>

          <ol className="why__points">
            {t.why.steps.map((step, index) => {
              const n = index + 1
              const tipId = `why-tip-${n}`
              const isOpen = openTip === n
              return (
                <li
                  key={step.title}
                  className={`why__point why__point--${n}${isOpen ? ' is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="why__dot"
                    aria-expanded={isOpen}
                    aria-controls={tipId}
                    aria-label={`${String(n).padStart(2, '0')} ${step.title}. ${t.why.orbitHint}`}
                    onClick={() => setOpenTip((prev) => (prev === n ? null : n))}
                  />
                  <div className="why__point-meta">
                    <h4 className="why__point-title">
                      <button
                        type="button"
                        className="why__point-title-btn"
                        aria-expanded={isOpen}
                        aria-controls={tipId}
                        onClick={() => setOpenTip((prev) => (prev === n ? null : n))}
                      >
                        <span className="why__step-n">
                          {String(n).padStart(2, '0')}
                        </span>
                        <span className="why__step-label">{step.title}</span>
                      </button>
                    </h4>
                    <p className="why__tip" id={tipId} role="tooltip">
                      {step.text}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
        <p
          className={`why__hint${openTip !== null ? ' is-hidden' : ''}`}
          aria-hidden={openTip !== null}
        >
          {t.why.orbitHint}
        </p>
      </Reveal>

      <Reveal className="why__aside why__panel" from="right" delay={180}>
        <p className="why__text why__aside-text">
          {t.why.textMoreBefore}
          <em className="why__em">{t.why.textMoreAccent1}</em>
          {t.why.textMoreMid1}
          <em className="why__em">{t.why.textMoreAccent2}</em>
          {t.why.textMoreMid2}
          <em className="why__em">{t.why.textMoreAccent3}</em>
          {t.why.textMoreAfter}
        </p>
      </Reveal>
    </section>
  )
}
