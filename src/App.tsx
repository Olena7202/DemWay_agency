import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { PageBg } from './components/PageBg'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { LegalPage } from './pages/LegalPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { useLocale } from './i18n/locale'
import './App.css'

function isHeroLanding(hash: string) {
  return hash === '' || hash === '#top' || hash === '#why'
}

function jumpHero() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}

function stripHeroHash() {
  const hash = window.location.hash
  if (hash === '#top' || hash === '#why') {
    history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
  }
}

function dismissBoot() {
  const html = document.documentElement
  if (html.classList.contains('is-booted')) return
  const boot = document.getElementById('boot')
  html.classList.remove('is-booting')
  html.classList.add('is-booted')
  if (isHeroLanding(window.location.hash)) {
    jumpHero()
    stripHeroHash()
  }
  if (!boot) return
  boot.classList.add('is-away')
  window.setTimeout(() => boot.remove(), 800)
}

function ScrollTo() {
  const location = useLocation()
  const firstPaint = useRef(true)

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  }, [])

  useEffect(() => {
    const path = location.pathname.replace(/\/$/, '')
    const onCatalog = path.endsWith('/poslugy')
    const onLegal = path.endsWith('/privacy')
    const onHome = path === ''
    const hash = location.hash
    let timer = 0
    let later = 0
    let frame = 0
    let attempts = 0

    const afterBoot = (fn: () => void) => {
      if (document.documentElement.classList.contains('is-booting')) {
        timer = window.setTimeout(() => afterBoot(fn), 32)
        return
      }
      fn()
    }

    afterBoot(() => {
      const instant = firstPaint.current
      firstPaint.current = false
      const landOnHero =
        onHome && (instant ? isHeroLanding(hash) : hash === '' || hash === '#top')

      if (landOnHero) {
        jumpHero()
        frame = window.requestAnimationFrame(jumpHero)
        timer = window.setTimeout(jumpHero, 80)
        later = window.setTimeout(jumpHero, 400)
        if (instant || hash === '#top') stripHeroHash()
        return
      }

      if (!onHome && !onCatalog && !onLegal) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        return
      }

      const allowed =
        Boolean(hash) &&
        (!onCatalog || hash === '#contact' || hash === '#faq') &&
        (!onLegal || hash === '#privacy' || hash === '#offer')

      if (!allowed) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        return
      }

      const seek = () => {
        const node = document.querySelector(hash)
        if (node) {
          node.scrollIntoView({
            behavior: instant ? 'auto' : 'smooth',
            block: 'start',
          })
          return
        }
        attempts += 1
        if (attempts < 80) frame = window.requestAnimationFrame(seek)
      }
      frame = window.requestAnimationFrame(seek)
    })

    return () => {
      window.clearTimeout(timer)
      window.clearTimeout(later)
      window.cancelAnimationFrame(frame)
    }
  }, [location.pathname, location.hash, location.search])

  return null
}

function DocumentTitle() {
  const { t, locale } = useLocale()
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname.replace(/\/$/, '')
    document.documentElement.lang = locale
    if (path.endsWith('/poslugy')) document.title = `${t.catalog.title} · ${t.meta.tab}`
    else if (path.endsWith('/privacy')) document.title = `${t.legal.title} · ${t.meta.tab}`
    else if (path !== '') document.title = `404 · ${t.meta.tab}`
    else document.title = t.meta.tab
    const seoTitle = path.endsWith('/privacy') ? `${t.legal.title} | DemWay` : t.meta.title
    const og = document.querySelector('meta[property="og:title"]')
    if (og) og.setAttribute('content', seoTitle)
    const meta = document.querySelector('meta[name="description"]')
    if (!meta) return
    meta.setAttribute(
      'content',
      path.endsWith('/privacy') ? t.legal.description : t.meta.description,
    )
  }, [locale, location.pathname, t])

  return null
}

function App() {
  useEffect(() => {
    if (document.documentElement.classList.contains('is-booted')) return

    const boot = document.getElementById('boot')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const minMs = reduce ? 240 : 1800
    const started = performance.now()
    let later = 0

    const finish = () => {
      const wait = Math.max(0, minMs - (performance.now() - started))
      window.clearTimeout(later)
      later = window.setTimeout(dismissBoot, wait)
    }

    const images = [...(boot?.querySelectorAll('img') ?? [])]
    const imageReady = Promise.all(
      images.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise<void>((resolve) => {
              img.addEventListener('load', () => resolve(), { once: true })
              img.addEventListener('error', () => resolve(), { once: true })
            }),
      ),
    )

    const fonts = document.fonts?.ready ?? Promise.resolve()
    void Promise.race([
      Promise.all([fonts, imageReady]),
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, 1400)
      }),
    ]).then(finish)

    const failsafe = window.setTimeout(finish, 2600)
    return () => window.clearTimeout(failsafe)
  }, [])

  return (
    <>
      <PageBg />
      <DocumentTitle />
      <Header />
      <div className="page">
        <ScrollTo />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/poslugy" element={<ServicesPage />} />
            <Route path="/privacy" element={<LegalPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
