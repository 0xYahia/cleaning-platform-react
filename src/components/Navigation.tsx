import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Icon } from './Icon'
import { useLocale, localePath } from '../hooks/useLocale'

export function Navigation() {
  const location = useLocation()
  const { t } = useTranslation()
  const locale = useLocale()
  const isAr = locale === 'ar'
  const [menuOpen, setMenuOpen] = useState(false)

  const otherLangPath = isAr
    ? location.pathname.replace(/^\/ar/, '') || '/'
    : `/ar${location.pathname === '/' ? '' : location.pathname}`

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const links = [
    { to: localePath(locale, '/'), label: t('nav.home') },
    { to: localePath(locale, '/services/tank-cleaning'), label: t('nav.services') },
    { to: localePath(locale, '/booking'), label: t('nav.booking') },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-[#FAFAF7]/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 gap-3">
        <div className="flex items-center gap-4 md:gap-8 min-w-0">
          <Link
            to={localePath(locale, '/')}
            className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#0F6E56] font-display-md whitespace-nowrap"
          >
            Medi Clean
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/' || link.to === '/ar'}
                className={({ isActive }) =>
                  `transition-colors font-body-md ${
                    isActive
                      ? 'text-[#0F6E56] font-bold'
                      : 'text-gray-600 hover:text-[#0F6E56]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <Link
            to={otherLangPath}
            className="text-[#0F6E56] font-medium px-2.5 sm:px-3 py-1 border border-[#0F6E56] rounded-lg text-xs sm:text-sm hover:bg-[#0F6E56] hover:text-white transition-all"
          >
            {t('common.switchLang')}
          </Link>
          <button className="text-gray-600 font-medium hidden lg:block">
            {t('common.login')}
          </button>
          <Link
            to={localePath(locale, '/booking')}
            className="bg-[#0F6E56] text-white px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full font-bold shadow-md hover:opacity-90 active-scale transition-all flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
          >
            <Icon name="verified_user" className="text-sm" />
            <span className="hidden sm:inline">{t('common.bookNow')}</span>
            <span className="sm:hidden">{t('common.book')}</span>
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 text-[#0F6E56] hover:bg-[#0F6E56]/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="text-2xl" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-200/50 bg-[#FAFAF7]/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/' || link.to === '/ar'}
                className={({ isActive }) =>
                  `px-3 py-3 rounded-lg transition-colors font-body-md ${
                    isActive
                      ? 'bg-[#0F6E56]/10 text-[#0F6E56] font-bold'
                      : 'text-gray-600 hover:bg-[#0F6E56]/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              type="button"
              className="px-3 py-3 text-start text-gray-600 hover:bg-[#0F6E56]/5 rounded-lg transition-colors"
            >
              {t('common.login')}
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
