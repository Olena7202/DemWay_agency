import { Link } from 'react-router-dom'
import {
  serviceGroupAnchors,
  serviceGroups,
} from '../data/services'
import { Reveal } from './Reveal'
import { useLocale } from '../i18n/locale'

const marks: Record<(typeof serviceGroups)[number], string> = {
  Сайти: 'WEB',
  Редизайн: 'RE',
  SEO: 'SEO',
  Реклама: 'ADS',
  Системи: 'SYS',
  Айдентика: 'ID',
}

export function ServicesTeaser() {
  const { t } = useLocale()
  return (
    <section className="services" id="services" data-scene="blush">
      <Reveal className="services__head-block">
        <div className="section-head services__head">
          <p className="eyebrow">{t.servicesTeaser.kicker}</p>
          <h2>{t.servicesTeaser.title}</h2>
          <p>{t.servicesTeaser.text}</p>
        </div>
      </Reveal>

      <div className="teaser-catalog">
        <div className="hero__actions">
          <Link className="btn btn--pink btn--slide" to="/poslugy">
            <span>
              <span>{t.servicesTeaser.catalog}</span>
              <span aria-hidden="true">{t.servicesTeaser.catalog}</span>
            </span>
          </Link>
        </div>
      </div>

      <ul className="case-grid services__cards">
        {serviceGroups.map((name, index) => {
          const label = t.groupHeadings[name] ?? t.groups[name]
          const text = t.groupLeads[name] ?? t.teaserBlurbs[name]
          return (
            <li key={name}>
              <Reveal delay={index * 70} from="up">
                <Link
                  className="case-card"
                  to={`/poslugy?napryam=${serviceGroupAnchors[name]}`}
                  aria-label={t.servicesTeaser.openTab.replace('{name}', label)}
                >
                  <span className="case-card__visual" aria-hidden="true">
                    <span className="case-card__mark">{marks[name]}</span>
                  </span>
                  <span className="case-card__copy">
                    <span className="case-card__title">{label}</span>
                    <span className="case-card__text">{text}</span>
                  </span>
                </Link>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
