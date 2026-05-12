import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/i18n/routing";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { CallFAB } from "@/components/CallFAB";
import { MailFAB } from "@/components/MailFAB";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "seo" });
  return {
    title: { default: t("siteTitle"), template: `%s · ${t("siteTitle")}` },
    description: t("siteDescription"),
    icons: {
      icon: [
        { url: "/md-logo.png", type: "image/png" },
      ],
      apple: "/md-logo.png",
    },
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        en: "/en/",
        ar: "/ar/",
        "x-default": "/en/",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      siteName: t("siteTitle"),
      title: t("siteTitle"),
      description: t("siteDescription"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locales, locale)) notFound();
  setRequestLocale(locale);

  const isAr = locale === "ar";

  return (
    <html lang={locale} dir={isAr ? "rtl" : "ltr"} className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&family=Inter:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAFAF7]">
        <NextIntlClientProvider locale={locale as Locale}>
          <Navigation />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
          <WhatsAppFAB />
          <CallFAB />
          <MailFAB />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
