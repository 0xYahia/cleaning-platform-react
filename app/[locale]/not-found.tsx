import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { localePath } from "@/lib/locale";
import type { Locale } from "@/i18n/routing";

export default function NotFoundPage() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  return (
    <section className="max-w-3xl mx-auto px-6 py-xl text-center">
      <p className="text-display-lg font-display-lg text-primary">404</p>
      <h1 className="text-display-md font-display-md text-primary mb-4">
        {t("notFound.title")}
      </h1>
      <p className="text-body-lg text-on-surface-variant mb-lg">
        {t("notFound.description")}
      </p>
      <Link
        href={localePath(locale, "/")}
        className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold"
      >
        {t("notFound.backHome")}
      </Link>
    </section>
  );
}
