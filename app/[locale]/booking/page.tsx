import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { locales } from "@/i18n/routing";
import { BookingForm } from "./BookingForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "booking" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/booking/`,
      languages: { en: "/en/booking/", ar: "/ar/booking/" },
    },
  };
}

export default async function BookingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locales, locale)) notFound();
  setRequestLocale(locale);

  return <BookingForm />;
}
