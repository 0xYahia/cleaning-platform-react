import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { WhatsAppFAB } from './WhatsAppFAB'
import { CallFAB } from './CallFAB'
import { MailFAB } from './MailFAB'

interface LayoutProps {
  lang: 'en' | 'ar'
}

export function Layout({ lang }: LayoutProps) {
  const location = useLocation()

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7]">
      <Navigation lang={lang} />
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer lang={lang} />
      <WhatsAppFAB />
      <CallFAB />
      <MailFAB />
    </div>
  )
}
