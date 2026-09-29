import { Link, NavLink, useLocation } from 'react-router-dom'
import { Wordmark } from './Wordmark'
import { Reveal } from './Reveal'
import {
  contactInbox,
  facebookUrl,
  instagramUrl,
  telegramHandle,
  telegramUrl,
} from '../data/contact'
import { serviceGroupAnchors, serviceGroups } from '../data/services'
import { useLocale } from '../i18n/locale'

export function Footer() {
  const { t } = useLocale()
  const location = useLocation()
  const onServices = location.pathname.replace(/\/$/, '').endsWith('/poslugy')
  const contactTo = onServices
    ? { pathname: '/poslugy', search: '', hash: '#contact' }
    : { pathname: '/', search: '', hash: '#contact' }
  const faqTo = onServices
    ? { pathname: '/poslugy', hash: '#faq' }
    : { pathname: '/', hash: '#faq' }

  return (
    <footer className="site-footer" data-scene="close">
      <Reveal from="soft">
        <div className="site-footer__head">
          <Link
            to={{ pathname: '/', search: '', hash: '#top' }}
            className="brand"
            aria-label="DemWay digital agency"
          >
            <Wordmark />
          </Link>
        </div>

        <div className="site-footer__cols">
          <nav className="site-footer__col" aria-label={t.footer.services}>
            <p className="site-footer__label">{t.footer.services}</p>
            <ul>
              {serviceGroups.map((group) => (
                <li key={group}>
                  <Link to={`/poslugy?napryam=${serviceGroupAnchors[group]}`}>
                    {t.groups[group]}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="site-footer__more" to="/poslugy?napryam=sayty">
                  {t.footer.catalog}
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="site-footer__col" aria-label={t.footer.company}>
            <p className="site-footer__label">{t.footer.company}</p>
            <ul>
              <li>
                <Link to={{ pathname: '/', hash: '#why' }}>{t.nav.about}</Link>
              </li>
              <li>
                <Link to={{ pathname: '/', hash: '#offers' }}>{t.nav.packages}</Link>
              </li>
              <li>
                <Link className="nav__approach" to={{ pathname: '/', hash: '#approach' }}>{t.nav.approach}</Link>
              </li>
              <li>
                <Link to={faqTo}>FAQ</Link>
              </li>
              <li>
                <NavLink
                  to="/poslugy?napryam=sayty"
                  className={({ isActive }) => (isActive ? 'is-current' : '')}
                >
                  {t.catalog.title}
                </NavLink>
              </li>
              <li>
                <Link to="/privacy">{t.legal.privacyTitle}</Link>
              </li>
              <li>
                <Link to="/privacy#offer">{t.legal.offerTitle}</Link>
              </li>
              <li>
                <Link to={contactTo}>{t.nav.brief}</Link>
              </li>
            </ul>
          </nav>

          <div className="site-footer__col site-footer__col--contact">
            <p className="site-footer__label">{t.footer.contacts}</p>
            <ul>
              <li>
                <span>{t.footer.mail}</span>
                <a href={`mailto:${contactInbox}`}>{contactInbox}</a>
              </li>
              <li>
                <span>{t.footer.channel}</span>
                <a href={telegramUrl} target="_blank" rel="noreferrer">
                  {telegramHandle}
                </a>
              </li>
              <li>
                <span>{t.footer.format}</span>
                <p>{t.footer.formatValue}</p>
              </li>
              <li>
                <span>{t.footer.hours}</span>
                <p>{t.footer.hoursValue}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bar">
          <p className="site-footer__legal">
            © {new Date().getFullYear()} DemWay. {t.footer.rights}
          </p>
          <div className="site-footer__socials">
            <a
              className="site-footer__social"
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram DemWay"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M21.8 4.4c.2-.9-.7-1.6-1.5-1.3L2.6 10.2c-.9.3-.8 1.6.1 1.8l4.6 1.4 1.8 5.6c.2.8 1.3 1 1.8.3l2.6-3.3 4.6 3.4c.7.5 1.7.1 1.9-.7l2.4-14.3ZM8.4 12.7 17.7 7l-7.2 7.4-.3 2.4-1.8-4.1Z"
                />
              </svg>
            </a>
            <a
              className="site-footer__social"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram DemWay"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
                />
              </svg>
            </a>
            <a
              className="site-footer__social"
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook DemWay"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M13.5 21v-7.2h2.42l.36-2.8H13.5V9.18c0-.81.22-1.36 1.39-1.36H16.5V5.32A18.9 18.9 0 0 0 13.86 5C11.2 5 9.4 6.63 9.4 9.02v1.98H7v2.8h2.4V21h4.1Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
