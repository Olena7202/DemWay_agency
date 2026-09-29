import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  clusterServices,
  groupFromAnchor,
  serviceGroupAnchors,
  services,
  type Service,
  type ServiceGroup,
} from '../data/services'
import { Reveal } from './Reveal'
import { ScrollReveal } from './ScrollReveal'
import { ServiceTabs } from './ServiceTabs'
import { useLocale } from '../i18n/locale'
import { localizeService } from '../i18n/services'

function firstSlug(next: ServiceGroup) {
  return clusterServices(next)[0]?.items[0]?.slug ?? services[0].slug
}

export function Services() {
  const { t, locale } = useLocale()
  const location = useLocation()
  const navigate = useNavigate()
  const [group, setGroup] = useState<ServiceGroup>('Сайти')
  const [open, setOpen] = useState(services[0].slug)
  const clusters = useMemo(() => clusterServices(group), [group])
  const current =
    services.find((service) => service.slug === open && service.group === group) ??
    clusters[0]?.items[0]
  const activeCluster =
    clusters.find((cluster) => cluster.items.some((service) => service.slug === current?.slug)) ??
    clusters[0]
  const activeClusterLead = activeCluster
    ? t.clusterLeads[activeCluster.label]
    : undefined
  const openClusterLabels = clusters.length > 1 || clusters.some((cluster) => !t.clusterLeads[cluster.label])
  const firstClusterUnlabeled = Boolean(
    activeClusterLead && clusters[0]?.label === activeCluster?.label,
  )

  useEffect(() => {
    const napryam = new URLSearchParams(location.search).get('napryam')
    const paket = new URLSearchParams(location.search).get('paket')
    const hash = location.hash.replace('#', '')
    const fromGroup = groupFromAnchor(napryam) ?? groupFromAnchor(hash)
    const fromPaket = services.find((service) => service.slug === paket)
    if (fromPaket) {
      setGroup(fromPaket.group)
      setOpen(fromPaket.slug)
      return
    }
    if (fromGroup) {
      setGroup(fromGroup)
      setOpen(firstSlug(fromGroup))
      return
    }
    const found = services.find((service) => service.slug === hash)
    if (found) {
      setGroup(found.group)
      setOpen(found.slug)
      return
    }
    if (hash === 'contact' || hash === 'faq') return
    setGroup('Сайти')
    setOpen(firstSlug('Сайти'))
  }, [location.search, location.hash])

  function pickGroup(next: ServiceGroup) {
    setGroup(next)
    setOpen(firstSlug(next))
    navigate(
      { pathname: '/poslugy', search: `?napryam=${serviceGroupAnchors[next]}` },
      { replace: true },
    )
    document.getElementById('services')?.scrollIntoView({ block: 'start' })
  }

  function pickService(slug: string) {
    setOpen(slug)
    if (!window.matchMedia('(max-width: 1180px)').matches) return
    window.requestAnimationFrame(() => {
      document.getElementById('svc-detail')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }

  return (
    <section className="services services--page" id="services" data-scene="blush">
      <div className="services__top">
        <Reveal>
          <h1 className="services__h1">{t.nav.services}</h1>
        </Reveal>
        <Reveal delay={60} from="soft">
          <ServiceTabs group={group} onChange={pickGroup} />
        </Reveal>
      </div>

      <div className="svc-catalog">
        {activeClusterLead && activeCluster ? (
          <div className="svc-catalog__intro">
            <h3 className="svc-catalog__group">
              {t.clusters[activeCluster.label] ?? activeCluster.label}
            </h3>
            <p className="svc-catalog__lead">{activeClusterLead}</p>
          </div>
        ) : null}
        <div
          className={`svc-catalog__split${openClusterLabels && !firstClusterUnlabeled ? '' : ' svc-catalog__split--flush'}`}
        >
          <div
            key={group}
            className="teaser-board teaser-board--one"
            role="navigation"
            aria-label={`${t.catalog.packagesAria}: ${t.groups[group]}`}
          >
            {clusters.map((cluster, clusterIndex) => (
              <div key={cluster.label} className="teaser-cluster">
                {activeClusterLead && cluster.label === activeCluster?.label ? null : (
                  <ScrollReveal delay={clusterIndex * 70}>
                    <h3 className="teaser-cluster__label">
                      {t.clusters[cluster.label] ?? cluster.label}
                    </h3>
                  </ScrollReveal>
                )}
                <div className="teaser-list">
                  {cluster.items.map((service, index) => (
                    <ScrollReveal
                      key={service.slug}
                      delay={clusterIndex * 70 + (index + 1) * 55}
                    >
                      <button
                        type="button"
                        className={`teaser-row${open === service.slug ? ' is-on' : ''}`}
                        aria-current={open === service.slug ? 'true' : undefined}
                        onClick={() => pickService(service.slug)}
                      >
                        <span className="teaser-row__body">
                          <h4 className="teaser-row__title">
                            {localizeService(service, locale).title}
                          </h4>
                        </span>
                      </button>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {current ? (
            <div key={current.slug} className="svc-picked" id="svc-detail">
              <header className="section-head svc-detail__head">
                <p className="svc-detail__title">{localizeService(current, locale).title}</p>
                <p>{localizeService(current, locale).text}</p>
              </header>
              <p className="svc-picked__quote">{t.catalog.quote}</p>
              <ServicePlans service={localizeService(current, locale)} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

function ServicePlans({ service }: { service: Service }) {
  const { t } = useLocale()
  const location = useLocation()
  const hintWithPrice = service.group === 'Реклама'
  const params = new URLSearchParams(location.search)
  params.set('paket', service.slug)
  const discussTo = {
    pathname: '/poslugy',
    search: `?${params.toString()}`,
    hash: '#contact',
  } as const
  const namedPlans = service.plans.length > 1
  return (
    <div className={`svc__plans svc__plans--${service.plans.length}`}>
      {service.plans.map((plan, planIndex) => (
          <article
            key={plan.name}
            className={`plan${planIndex === 0 ? ' plan--base' : ''}`}
          >
            {(namedPlans && plan.name) || plan.term ? (
              <p className="plan__meta">
                {namedPlans && plan.name ? (
                  <span className="plan__name">{plan.name}</span>
                ) : null}
                {namedPlans && plan.name && plan.term ? (
                  <span className="plan__sep" aria-hidden="true">
                    ·
                  </span>
                ) : null}
                {plan.term ? (
                  <span className="plan__term">
                    {t.catalog.term} {plan.term}
                  </span>
                ) : null}
              </p>
            ) : null}
            {hintWithPrice && plan.note ? (
              <p className="plan__hint">{plan.note}</p>
            ) : null}
            {plan.items.length ? (
              <PlanItems key={`${service.slug}-${plan.name}`} slug={service.slug} items={plan.items} />
            ) : null}
            {!hintWithPrice && plan.note ? (
              <p className="plan__note">{plan.note}</p>
            ) : null}
            <Link className="btn btn--pink btn--slide" to={discussTo}>
              <span>
                <span>{t.catalog.discuss}</span>
                <span aria-hidden="true">{t.catalog.discuss}</span>
              </span>
            </Link>
          </article>
      ))}
    </div>
  )
}

const clipSlugs = new Set([
  'korporatyvnyy',
  'katalog',
  'redyzayn-korporatyvnyy',
  'crm',
  'crm-business',
])

function PlanItems({ slug, items }: { slug: string; items: string[] }) {
  const { t } = useLocale()
  const clip = clipSlugs.has(slug) && items.length > 4
  const preview = Math.ceil(items.length / 2)
  const [open, setOpen] = useState(false)
  const visible = clip && !open ? items.slice(0, preview) : items

  return (
    <div className={`plan__scope${clip && !open ? ' is-clip' : ''}`}>
      <ul className="plan__items">
        {visible.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {clip ? (
        <button
          type="button"
          className="plan__more"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? t.catalog.collapse : t.catalog.expand}
        </button>
      ) : null}
    </div>
  )
}
