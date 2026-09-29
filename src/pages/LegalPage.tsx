import { useLocale } from '../i18n/locale'

export function LegalPage() {
  const { t } = useLocale()
  const legal = t.legal

  return (
    <article className="legal" data-scene="close">
      <header className="section-head legal__head">
        <p className="eyebrow">{legal.kicker}</p>
        <h1>{legal.title}</h1>
        <p>{legal.updated}</p>
      </header>

      <section className="legal__block" id="privacy">
        <h2>{legal.privacyTitle}</h2>
        {legal.privacy.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="legal__block" id="offer">
        <h2>{legal.offerTitle}</h2>
        {legal.offer.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>
    </article>
  )
}
