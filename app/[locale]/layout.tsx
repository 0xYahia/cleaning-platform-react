import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Tajawal, Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/i18n/routing";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { CallFAB } from "@/components/CallFAB";
import { MailFAB } from "@/components/MailFAB";
import "../globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-tajawal-self",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter-self",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mediclean2030.com";

const KEYWORDS_AR = [
  "تنظيف منازل", "شركة تنظيف منازل", "تنظيف فلل", "تنظيف شقق",
  "تنظيف مساجد", "تنظيف شركات", "تنظيف مكاتب", "تنظيف مستشفيات",
  "تنظيف مباني", "تنظيف واجهات زجاجية", "تنظيف واجهات", "غسيل واجهات زجاج",
  "تنظيف وتعقيم", "شركة تعقيم", "تعقيم منازل", "تعقيم شركات",
  "تنظيف مسابح", "تعقيم مسابح", "تنظيف خزانات", "غسيل خزانات",
  "تعقيم خزانات", "عزل خزانات", "تنظيف خزانات مياه",
  "مكافحة حشرات", "شركة مكافحة حشرات", "رش حشرات", "مكافحة الصراصير",
  "مكافحة النمل الأبيض", "مكافحة البعوض", "مكافحة القوارض",
  "تنظيف مكيفات", "غسيل مكيفات", "تنظيف مكيفات سبليت",
  "تنظيف وحدات التكييف", "تنظيف مكيفات مركزية",
  "تنظيف بعد البناء", "تنظيف ما بعد التشطيب", "تنظيف دوري", "تنظيف عميق",
  "شركة نظافة", "خدمات تنظيف منزلية", "خدمات تنظيف تجارية",
  "تنظيف منازل في الدمام", "تنظيف منازل في الخبر", "تنظيف منازل في الظهران",
  "تنظيف منازل في سيهات", "تنظيف منازل في القطيف",
  "شركة تنظيف في الدمام", "شركة تنظيف في الخبر", "شركة تنظيف في الظهران",
  "شركة تنظيف في سيهات", "شركة تنظيف في القطيف",
  "مكافحة حشرات الدمام", "مكافحة حشرات الخبر", "مكافحة حشرات الظهران",
  "مكافحة حشرات سيهات", "مكافحة حشرات القطيف",
  "تنظيف خزانات في الدمام", "تنظيف خزانات في الخبر", "تنظيف خزانات في الظهران",
  "تنظيف خزانات في سيهات", "تنظيف خزانات في القطيف",
  "تنظيف مكيفات الدمام", "تنظيف مكيفات الخبر", "تنظيف مكيفات الظهران",
  "تنظيف مكيفات سيهات", "تنظيف مكيفات القطيف",
];

const KEYWORDS_EN = [
  "house cleaning", "villa cleaning", "apartment cleaning", "office cleaning",
  "mosque cleaning", "hospital cleaning", "deep cleaning", "post construction cleaning",
  "sanitization", "disinfection", "water tank cleaning", "water tank sanitization",
  "AC cleaning", "split AC cleaning", "central AC cleaning",
  "pest control", "cockroach control", "termite control", "mosquito control", "rodent control",
  "glass facade cleaning", "swimming pool cleaning",
  "cleaning company Dammam", "cleaning company Khobar", "cleaning company Dhahran",
  "cleaning company Saihat", "cleaning company Qatif",
  "pest control Dammam", "pest control Khobar", "pest control Dhahran",
  "tank cleaning Dammam", "AC cleaning Dammam",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "seo" });
  const isAr = locale === "ar";
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t("siteTitle"), template: `%s · ${t("siteTitle")}` },
    description: t("siteDescription"),
    keywords: isAr ? KEYWORDS_AR : KEYWORDS_EN,
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: "/favicon.svg",
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
      locale: isAr ? "ar_SA" : "en_US",
      siteName: t("siteTitle"),
      title: t("siteTitle"),
      description: t("siteDescription"),
      url: `${SITE_URL}/${locale}/`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

function LocalBusinessJsonLd({ locale }: { locale: string }) {
  const isAr = locale === "ar";
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: isAr ? "ميدي كلين" : "Medi Clean",
    alternateName: "Medi Clean 2030",
    url: `${SITE_URL}/${locale}/`,
    logo: `${SITE_URL}/favicon.svg`,
    image: `${SITE_URL}/favicon.svg`,
    description: isAr
      ? "شركة ميدي كلين لخدمات التنظيف والتعقيم ومكافحة الحشرات وتنظيف الخزانات والمكيفات في الدمام والخبر والظهران وسيهات والقطيف."
      : "Medi Clean provides professional cleaning, sanitization, pest control, water tank and AC cleaning services across Dammam, Khobar, Dhahran, Saihat and Qatif.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressRegion: isAr ? "المنطقة الشرقية" : "Eastern Province",
      addressLocality: isAr ? "الدمام" : "Dammam",
    },
    areaServed: [
      { "@type": "City", name: isAr ? "الدمام" : "Dammam" },
      { "@type": "City", name: isAr ? "الخبر" : "Khobar" },
      { "@type": "City", name: isAr ? "الظهران" : "Dhahran" },
      { "@type": "City", name: isAr ? "سيهات" : "Saihat" },
      { "@type": "City", name: isAr ? "القطيف" : "Qatif" },
    ],
    knowsLanguage: ["ar", "en"],
    makesOffer: (isAr
      ? [
          "تنظيف منازل", "تنظيف فلل", "تنظيف شقق", "تنظيف مساجد",
          "تنظيف مكاتب", "تنظيف مستشفيات", "تنظيف مباني",
          "تنظيف وتعقيم", "تعقيم منازل", "تنظيف خزانات", "عزل خزانات",
          "مكافحة حشرات", "مكافحة الصراصير", "مكافحة النمل الأبيض",
          "تنظيف مكيفات", "تنظيف مكيفات سبليت", "تنظيف مكيفات مركزية",
          "تنظيف بعد البناء", "تنظيف عميق", "تنظيف واجهات زجاجية",
        ]
      : [
          "House Cleaning", "Villa Cleaning", "Apartment Cleaning",
          "Mosque Cleaning", "Office Cleaning", "Hospital Cleaning",
          "Sanitization", "Water Tank Cleaning", "Tank Sealing",
          "Pest Control", "AC Cleaning", "Deep Cleaning",
          "Post-Construction Cleaning", "Glass Facade Cleaning",
        ]
    ).map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
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
    <html
      lang={locale}
      dir={isAr ? "rtl" : "ltr"}
      className={`h-full antialiased ${tajawal.variable} ${inter.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <LocalBusinessJsonLd locale={locale} />
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
