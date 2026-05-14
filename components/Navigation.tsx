"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { localePath } from "@/lib/locale";
import type { Locale } from "@/i18n/routing";

export function Navigation() {
  const pathname = usePathname();
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const isAr = locale === "ar";
  const [menuOpen, setMenuOpen] = useState(false);

  const stripped = pathname.replace(/^\/(en|ar)/, "") || "/";
  const otherLang: Locale = isAr ? "en" : "ar";
  const otherLangPath = localePath(otherLang, stripped);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { to: localePath(locale, "/"), label: t("nav.home") },
    { to: localePath(locale, "/services/tank-cleaning"), label: t("nav.services") },
    { to: localePath(locale, "/booking"), label: t("nav.booking") },
  ];

  const homeHref = localePath(locale, "/");
  const isActive = (href: string) => {
    if (href === homeHref) return pathname === homeHref || pathname === `${homeHref}/`;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#FAFAF7]/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 gap-3">
        <div className="flex items-center gap-4 md:gap-8 min-w-0">
          <Link
            href={homeHref}
            className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#0F6E56] font-display-md whitespace-nowrap"
          >
            <Logo
              title="Medi Clean"
              className="h-12 w-12 object-contain shrink-0"
            />
            <span>{t("nav.medi-clean")}</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className={`transition-colors font-body-md ${
                  isActive(link.to)
                    ? "text-[#0F6E56] font-bold"
                    : "text-gray-600 hover:text-[#0F6E56]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <Link
            href={otherLangPath}
            className="text-[#0F6E56] font-medium px-2.5 sm:px-3 py-1 border border-[#0F6E56] rounded-lg text-xs sm:text-sm hover:bg-[#0F6E56] hover:text-white transition-all"
          >
            {t("common.switchLang")}
          </Link>
          <button className="text-gray-600 font-medium hidden lg:block">
            {t("common.login")}
          </button>
          <Link
            href={localePath(locale, "/booking")}
            className="bg-[#0F6E56] text-white px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full font-bold shadow-md hover:opacity-90 active-scale transition-all flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
          >
            <Icon name="verified_user" className="text-sm" />
            <span className="hidden sm:inline">{t("common.bookNow")}</span>
            <span className="sm:hidden">{t("common.book")}</span>
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 text-[#0F6E56] hover:bg-[#0F6E56]/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "close" : "menu"} className="text-2xl" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-200/50 bg-[#FAFAF7]/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className={`px-3 py-3 rounded-lg transition-colors font-body-md ${
                  isActive(link.to)
                    ? "bg-[#0F6E56]/10 text-[#0F6E56] font-bold"
                    : "text-gray-600 hover:bg-[#0F6E56]/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="px-3 py-3 text-start text-gray-600 hover:bg-[#0F6E56]/5 rounded-lg transition-colors"
            >
              {t("common.login")}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
