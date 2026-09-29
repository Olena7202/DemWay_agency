import moon from '../assets/logo-moon.png'
import mark from '../assets/logo-dw.png'
import { Reveal } from './Reveal'
import { useLocale } from '../i18n/locale'

export function Hero() {
  const { t } = useLocale()
  return (
    <section className="hero" id="top" data-scene="khaki">
      <div className="hero__grid">
        <div className="hero__copy">
          <Reveal>
            <h1 className="hero__title">
              <span className="hero__title-name">{t.hero.titleName}</span>
              <span className="hero__title-agency">{t.hero.titleAgency}</span>
            </h1>
          </Reveal>
          <Reveal delay={90} from="soft">
            <p className="lede">{t.hero.lede}</p>
          </Reveal>
        </div>
        <figure
          className="hero__mark"
          aria-label="DemWay"
          onContextMenu={(event) => event.preventDefault()}
          onDragStart={(event) => event.preventDefault()}
        >
          <span className="hero__glow" aria-hidden="true" />
          <div className="hero__stage">
            <div
              className="hero__planet"
              style={{ backgroundImage: `url(${moon})` }}
            />
            <div
              className="hero__brand"
              style={{ backgroundImage: `url(${mark})` }}
            />
          </div>
        </figure>
        <Reveal delay={160} from="soft" className="hero__cta">
          <div className="hero__actions">
            <a className="btn btn--pink btn--slide" href="#contact">
              <span>
                <span>{t.hero.discuss}</span>
                <span aria-hidden="true">{t.hero.discuss}</span>
              </span>
            </a>
            <a className="btn btn--ink btn--slide" href="#services">
              <span>
                <span>{t.hero.cases}</span>
                <span aria-hidden="true">{t.hero.cases}</span>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
