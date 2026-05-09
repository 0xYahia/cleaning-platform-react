import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { Locale } from '../i18n'

export function useLocale(): Locale {
  const { pathname } = useLocation()
  return pathname.startsWith('/ar') ? 'ar' : 'en'
}

export function useLocaleSync() {
  const locale = useLocale()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (i18n.language !== locale) i18n.changeLanguage(locale)
  }, [locale, i18n])

  return locale
}

export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  if (locale === 'ar') {
    return clean === '/' ? '/ar' : `/ar${clean}`
  }
  return clean
}
