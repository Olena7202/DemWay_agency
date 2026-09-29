import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { useLocale } from '../i18n/locale'

export function NotFoundPage() {
  const { t } = useLocale()
  const page = t.notFound

  return (
    <section className="hero lost" id="lost" data-scene="khaki">
      <div className="lost__inner">
        <Reveal>
          <p className="lost__code" aria-hidden="true">
            404
          </p>
          <h1>{page.title}</h1>
        </Reveal>
        <Reveal delay={120} from="soft">
          <div className="hero__actions">
            <Link className="btn btn--pink btn--slide" to="/">
              <span>
                <span>{page.home}</span>
                <span aria-hidden="true">{page.home}</span>
              </span>
            </Link>
            <Link className="btn btn--ink btn--slide" to="/poslugy">
              <span>
                <span>{page.catalog}</span>
                <span aria-hidden="true">{page.catalog}</span>
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
