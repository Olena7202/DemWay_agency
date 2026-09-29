import { Reveal } from './Reveal'
import { useLocale } from '../i18n/locale'

export function WhyChoose() {
  const { t } = useLocale()
  const block = t.whyChoose

  return (
    <section className="why-choose" id="why-choose" data-scene="ink">
      <Reveal>
        <div className="why-choose__head">
          <p className="eyebrow">{block.kicker}</p>
          <h2>{block.title}</h2>
          <p className="why-choose__lede">{block.text}</p>
        </div>
      </Reveal>
      <ol className="why-choose__rows">
        {block.points.map((point, index) => {
          const Heading = point.heading
          return (
            <li key={point.title}>
              <Reveal delay={index * 200} from="up">
                <article className="reason">
                  <span className="reason__n" aria-hidden="true">
                    {index + 1}
                  </span>
                  <Heading className="reason__title">{point.title}</Heading>
                  <p className="reason__text">{point.text}</p>
                </article>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
