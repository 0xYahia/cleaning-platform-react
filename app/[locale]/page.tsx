import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { SubscriptionSection } from "@/components/SubscriptionSection";
import { LoyaltySection } from "@/components/LoyaltySection";
import { PaymentSection } from "@/components/PaymentSection";
import { heroBanner, services, trustBadges } from "@/lib/mockData";
import { localePath } from "@/lib/locale";
import { locales, type Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "hero" });
  return { title: t("title"), description: t("description") };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!hasLocale(locales, rawLocale)) notFound();
  setRequestLocale(rawLocale);
  const locale = rawLocale as Locale;
  const isAr = locale === "ar";
  const t = await getTranslations();

  const cities = (await getTranslations({ locale })).raw("cities") as string[];
  const whyItems = (await getTranslations({ locale })).raw("whyUs.items") as string[];

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-md pb-lg">
        <div className="rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl border border-surface-variant/30 bg-white">
          <img
            src={heroBanner[locale]}
            alt={t("hero.alt")}
            className="w-full h-auto block"
            loading="eager"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-xl">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-label-caps mb-4 text-sm">
            <Icon name="verified" className="text-base" filled />
            {t("slogan")}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-display-md lg:text-display-lg font-display-lg text-primary mb-4 sm:mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-base sm:text-body-lg text-on-surface-variant mb-6">
            {t("hero.description")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-lg">
            {cities.map((city) => (
              <span
                key={city}
                className="bg-white border border-surface-variant/50 text-primary px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm"
              >
                <Icon name="location_on" className="text-sm align-text-bottom me-1 text-secondary" />
                {city}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
            <Link
              href={localePath(locale, "/booking")}
              className={`${isAr ? "bg-primary-container" : "bg-primary"} text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-lg active-scale transition-all`}
            >
              {t("hero.bookCta")}
            </Link>
            <a
              href="#services"
              className={`border-2 ${isAr ? "border-primary-container text-primary-container hover:bg-primary-container/5" : "border-primary text-primary hover:bg-primary/5"} px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all`}
            >
              {t("hero.exploreCta")}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-surface-variant/40 py-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-md">
          {trustBadges.map((b) => (
            <div key={b.icon} className="flex items-center gap-3">
              <span className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Icon name={b.icon} filled />
              </span>
              <span className="font-bold text-primary">{t(`trustBadges.${b.icon}`)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-xl" id="services">
        <div className="text-center mb-12 sm:mb-xl">
          <h2 className="text-2xl sm:text-3xl md:text-display-md font-display-md text-primary mb-4">
            {t("servicesSection.title")}
          </h2>
          <p className="text-base sm:text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t("servicesSection.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const isWide = service.span === "wide";
            const image =
              (isAr ? service.imageAr : service.imageEn) ??
              service.image ??
              service.imageEn ??
              service.imageAr;
            const title = t(`services.${service.id}.title`);
            const description = t(`services.${service.id}.description`);
            const badge = service.hasBadge ? t(`services.${service.id}.badge`) : undefined;
            return (
              <Link
                key={service.id}
                href={localePath(locale, `/services/${service.slug}`)}
                className={`group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-surface-variant/30 ${
                  isWide ? "md:col-span-2 lg:col-span-3 flex flex-col lg:flex-row" : ""
                }`}
              >
                <div
                  className={`overflow-hidden relative ${
                    isWide ? "lg:w-3/5 lg:h-auto h-72 md:h-96" : "aspect-video w-full"
                  }`}
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={image}
                    alt={title}
                  />
                  {isWide && (
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${isAr ? "lg:bg-gradient-to-l" : "lg:bg-gradient-to-r"} from-primary/60 via-primary/10 to-transparent`}
                    />
                  )}
                </div>
                <div className={`p-6 ${isWide ? "lg:w-2/5 lg:p-10 flex flex-col justify-center" : ""}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 bg-surface-container rounded-2xl text-primary-container ${isWide ? "lg:p-4" : ""}`}>
                      <Icon name={service.icon} className={isWide ? "text-4xl" : "text-3xl"} />
                    </div>
                    {badge && (
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold">
                        {badge}
                      </span>
                    )}
                  </div>
                  <h3 className={`font-display-md text-primary mb-2 ${isWide ? "text-2xl lg:text-3xl" : "text-xl"}`}>
                    {title}
                  </h3>
                  <p className={`text-on-surface-variant mb-4 ${isWide ? "text-base lg:text-lg" : "text-sm min-h-[60px]"}`}>
                    {description}
                  </p>
                  <div className="flex items-center justify-between border-t border-surface-variant/40 pt-4">
                    <div>
                      <span className="block text-xs text-outline">{t("common.startingAt")}</span>
                      <span className={`font-bold text-primary ${isWide ? "text-2xl" : "text-lg"}`}>
                        {isAr
                          ? `${service.startingPrice} ${t("common.currency")}`
                          : `${t("common.currency")} ${service.startingPrice}`}
                      </span>
                    </div>
                    <span className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                      {t("common.learnMore")}{" "}
                      <Icon name={isAr ? "arrow_back" : "arrow_forward"} className="text-base" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-lg">
        <div className="bg-secondary-container/30 border border-secondary-container rounded-3xl sm:rounded-[2rem] p-6 sm:p-md md:p-lg flex flex-col md:flex-row items-center justify-between gap-6 md:gap-md">
          <div className={`flex flex-col sm:flex-row items-center gap-4 text-center ${isAr ? "md:text-right" : "md:text-left"}`}>
            <span className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary-container rounded-2xl flex items-center justify-center text-on-secondary-container shrink-0">
              <Icon name="local_offer" className="text-2xl sm:text-3xl" filled />
            </span>
            <div>
              <h3 className="text-lg sm:text-heading-sm font-display-md text-primary mb-1">
                {t("offerBanner.title")}
              </h3>
              <p className="text-sm sm:text-base text-on-surface-variant">
                {t("offerBanner.description")}
              </p>
            </div>
          </div>
          <Link
            href={localePath(locale, "/booking")}
            className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold shadow-lg hover:opacity-95 active-scale transition-all whitespace-nowrap"
          >
            {t("common.claimOffer")}
          </Link>
        </div>
      </section>

      <SubscriptionSection />

      <PaymentSection />

      <LoyaltySection />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-xl items-center">
          {isAr && (
            <div className="rounded-3xl overflow-hidden shadow-lg bg-black aspect-video">
              <iframe
                src="https://app.heygen.com/embeds/a74bfba8bb464a30a58b9a5f59252fcd"
                title={t("video.title")}
                className="w-full h-full border-0"
                allow="encrypted-media; fullscreen;"
                allowFullScreen
              />
            </div>
          )}
          <div className="flex flex-col gap-md">
            <h2 className="text-2xl sm:text-3xl md:text-display-md font-display-md text-primary">
              {t("whyUs.title")}
            </h2>
            <p className="text-base sm:text-body-lg text-on-surface-variant">
              {t("whyUs.description")}
            </p>
            <ul className="flex flex-col gap-sm">
              {whyItems.map((item) => (
                <li key={item} className="flex items-center gap-3 font-medium text-primary">
                  <Icon name="check_circle" className="text-secondary" filled /> {item}
                </li>
              ))}
            </ul>
          </div>
          {!isAr && (
            <div className="rounded-3xl overflow-hidden shadow-lg bg-black aspect-video">
              <iframe
                src="https://app.heygen.com/embeds/a74bfba8bb464a30a58b9a5f59252fcd"
                title={t("video.title")}
                className="w-full h-full border-0"
                allow="encrypted-media; fullscreen;"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
