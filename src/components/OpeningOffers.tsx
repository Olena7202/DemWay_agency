import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'
import { useLocale } from '../i18n/locale'

type OfferIcon = 'start' | 'grow' | 'rebrand' | 'system'

function OfferPromo({ text }: { text: string }) {
  const [discount, bonus] = text.split(/\s*·\s*/)

  return (
    <p className="offer-card__promo">
      <span className="offer-card__promo-lead">{discount}</span>
      {bonus ? <span className="offer-card__promo-bonus">{bonus}</span> : null}
    </p>
  )
}

function PackIcon({ name }: { name: OfferIcon }) {
  const common = {
    className: 'offer-card__icon',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true as const,
  }

  if (name === 'start') {
    return (
      <svg {...common}>
        <path
          d="M12 3.2c2.4 2.1 3.8 5.2 3.8 8.6 0 1.7-.4 3.1-1.1 4.2H9.3c-.7-1.1-1.1-2.5-1.1-4.2 0-3.4 1.4-6.5 3.8-8.6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9.4 14.2 7.2 17.8M14.6 14.2 16.8 17.8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M10.4 18.2h3.2c0 1.1-.7 2-1.6 2s-1.6-.9-1.6-2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10.2" r="1.35" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    )
  }

  if (name === 'grow') {
    return (
      <svg {...common}>
        <path
          d="M4 17.5 9.2 12l3.1 3.1L20 7.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 7.5H20v5.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (name === 'rebrand') {
    return (
      <svg {...common}>
        <path
          d="M12 3.5 13.4 8.6 18.5 10 13.4 11.4 12 16.5 10.6 11.4 5.5 10 10.6 8.6 12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinejoin="round"
        />
        <path
          d="M18.2 15.2 18.8 17.2 20.8 17.8 18.8 18.4 18.2 20.4 17.6 18.4 15.6 17.8 17.6 17.2 18.2 15.2Z"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path
        d="M13.2 3.5 7 13.2h4.4L10.8 20.5 17 10.8h-4.4L13.2 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function OpeningOffers() {
  const { t } = useLocale()
  const offers = t.openingOffers

  return (
    <section className="offers" id="offers" data-scene="ink">
      <Reveal className="offers__head" from="soft">
        <div className="section-head">
          <p className="eyebrow">{offers.kicker}</p>
          <h2>{offers.title}</h2>
          <p className="lede offers__lede">{offers.text}</p>
        </div>
      </Reveal>

      <Reveal delay={80} from="soft">
        <aside className="offers__banner">
          <div className="offers__banner-main">
            <span className="offers__banner-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3.2 18.2 5.4v5.2c0 3.7-2.5 7.1-6.2 8.4-3.7-1.3-6.2-4.7-6.2-8.4V5.4L12 3.2Z"
                  stroke="currentColor"
                  strokeWidth="1.45"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8.1 12.7 10.4 15 11.1 12.7 11.8 12 14.1 11.3 11.8 9 11.1 11.3 10.4Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="offers__banner-copy">
              <p className="offers__banner-title">
                {offers.banner.titleBefore}{' '}
                <span className="offers__banner-brand">{offers.banner.brand}</span>
              </p>
              <p className="offers__banner-text">{offers.banner.text}</p>
              <div className="offers__banner-meta">
                <span className="offers__banner-chip">
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="5.4" stroke="currentColor" strokeWidth="1.3" />
                    <path
                      d="M8 5.2V8.2l2 1.3"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {offers.banner.dates}
                </span>
                <span className="offers__banner-chip">
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="5.4" r="2.1" stroke="currentColor" strokeWidth="1.3" />
                    <path
                      d="M3.6 13c.7-2.1 2.3-3.2 4.4-3.2s3.7 1.1 4.4 3.2"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                  {offers.banner.limit}
                </span>
              </div>
            </div>
          </div>
          <Link className="offers__banner-cta" to={{ pathname: '/', hash: '#contact' }}>
            {offers.banner.cta}
            <span aria-hidden="true">→</span>
          </Link>
        </aside>
      </Reveal>

      <ul className="offers__grid">
        {offers.items.map((pack, index) => {
          const featured = Boolean(pack.featured)
          return (
            <li key={pack.id}>
              <Reveal delay={140 + index * 120} from="up">
                <article className={`offer-card${featured ? ' offer-card--hit' : ''}`}>
                  <span className="offer-card__sheen" aria-hidden="true" />
                  <span className="offer-card__orb" aria-hidden="true" />
                  {featured ? (
                    <span className="offer-card__glow" aria-hidden="true" />
                  ) : null}
                  <div className="offer-card__meta">
                    <p className="offer-card__label">
                      <PackIcon name={pack.icon} />
                      <span>{pack.label}</span>
                    </p>
                    {featured ? (
                      <p className="offer-card__badge">{offers.popular}</p>
                    ) : null}
                  </div>
                  <h3>{pack.name}</h3>
                  <p className="offer-card__for">{pack.for}</p>
                  <p className="offer-card__includes">{offers.includes}</p>
                  <ul className="offer-card__items">
                    {pack.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="offer-card__price">
                    <div className="offer-card__amounts">
                      <span className="offer-card__was">{pack.originalPrice}</span>
                      <p className="offer-card__amount">{pack.price}</p>
                    </div>
                    <OfferPromo text={pack.promo} />
                  </div>
                  <div className="offer-card__cta">
                    <Link
                      className="btn btn--pink btn--slide"
                      to={{ pathname: '/', search: `?paket=${pack.id}`, hash: '#contact' }}
                    >
                      <span>
                        <span>{pack.cta}</span>
                        <span aria-hidden="true">{pack.cta}</span>
                      </span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            </li>
          )
        })}
      </ul>

      <Reveal delay={420} from="soft">
        <p className="offers__note">{offers.note}</p>
      </Reveal>
    </section>
  )
}
