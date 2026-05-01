import { Link, NavLink, useLocation } from 'react-router-dom'
import { Icon } from './Icon'

interface NavigationProps {
  lang: 'en' | 'ar'
}

export function Navigation({ lang }: NavigationProps) {
  const location = useLocation()
  const isAr = lang === 'ar'
  const otherLangPath = isAr
    ? location.pathname.replace(/^\/ar/, '') || '/'
    : `/ar${location.pathname === '/' ? '' : location.pathname}`

  const links = isAr
    ? [
        { to: '/ar', label: 'الرئيسية' },
        { to: '/ar/services/home-luxury-clean', label: 'الخدمات' },
        { to: '/ar/booking', label: 'الحجز' },
      ]
    : [
        { to: '/', label: 'Home' },
        { to: '/#services', label: 'Services' },
        { to: '/#how-it-works', label: 'How it Works' },
        { to: '/#contact', label: 'Contact' },
      ]

  return (
    <header className="fixed top-0 w-full z-50 bg-[#FAFAF7]/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-8">
          <Link
            to={isAr ? '/ar' : '/'}
            className="text-2xl font-bold tracking-tight text-[#0F6E56] font-display-md"
          >
            SADA Luxury Clean
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
        <div className="flex items-center gap-4">
          <Link
            to={otherLangPath}
            className="text-[#0F6E56] font-medium px-3 py-1 border border-[#0F6E56] rounded-lg text-sm hover:bg-[#0F6E56] hover:text-white transition-all"
          >
            {isAr ? 'EN' : 'AR'}
          </Link>
          <button className="text-gray-600 font-medium hidden md:block">
            {isAr ? 'تسجيل الدخول' : 'Login'}
          </button>
          <Link
            to={isAr ? '/ar/booking' : '/booking'}
            className="bg-[#0F6E56] text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:opacity-90 active-scale transition-all flex items-center gap-2"
          >
            <Icon name="verified_user" className="text-sm" />
            {isAr ? 'احجز الآن' : 'Book Now'}
          </Link>
        </div>
      </div>
    </header>
  )
}
