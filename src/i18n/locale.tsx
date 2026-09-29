import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { copy, type Copy, type Locale } from './copy'

const storageKey = 'demway-lang'

type LocaleContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  t: Copy
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function readLocale(): Locale {
  try {
    const stored = localStorage.getItem(storageKey)
    if (stored === 'en' || stored === 'uk') return stored
  } catch {
    /* ignore */
  }
  return 'uk'
}

function persistLocale(next: Locale) {
  try {
    localStorage.setItem(storageKey, next)
  } catch {
    /* ignore */
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readLocale)

  const value = useMemo(
    () => ({
      locale,
      setLocale: (next: Locale) => {
        persistLocale(next)
        setLocaleState(next)
      },
      t: copy[locale],
    }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used inside LocaleProvider')
  return ctx
}
