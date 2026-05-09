import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { WhatsAppFAB } from './WhatsAppFAB'
import { CallFAB } from './CallFAB'
import { MailFAB } from './MailFAB'
import { useLocaleSync } from '../hooks/useLocale'

export function Layout() {
  const locale = useLocaleSync()
  const location = useLocation()

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
  }, [locale])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7]">
      <Navigation />
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFAB />
      <CallFAB />
      <MailFAB />
    </div>
  )
}
