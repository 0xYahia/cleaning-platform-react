import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { SubscriptionSection } from '../components/SubscriptionSection'
import { LoyaltySection } from '../components/LoyaltySection'
import { PaymentSection } from '../components/PaymentSection'
import {
  cities,
  heroBanner,
  services,
  slogan,
  trustBadges,
} from '../data/mockData'

export function HomeAr() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-md pb-lg">
        <div className="rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl border border-surface-variant/30 bg-white">
          <img
            src={heroBanner.ar}
            alt="نظافة وعزل جميع أنواع الخزانات"
            className="w-full h-auto block"
            loading="eager"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-xl">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-label-caps mb-4 text-sm">
            <Icon name="verified" className="text-base" filled />
            {slogan.ar}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-display-md lg:text-display-lg font-display-lg text-primary mb-4 sm:mb-6 leading-tight">
            أفضل خدمات التنظيف والتعقيم باحترافية عالية
          </h1>
          <p className="text-base sm:text-body-lg text-on-surface-variant mb-6">
            نقدم لك حلول تنظيف وتعقيم متكاملة للمنازل، المساجد، المكيفات،
            الخزانات، والمفروشات باستخدام أحدث الأجهزة ومواد آمنة 100% مع ضمان
            الجودة.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-lg">
            {cities.ar.map((city) => (
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
              to="/ar/booking"
              className="bg-primary-container text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-lg active-scale transition-all"
            >
              احجز الآن
            </Link>
            <a
              href="#services"
              className="border-2 border-primary-container text-primary-container px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-primary-container/5 transition-all"
            >
              تعرف على خدماتنا
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
              <span className="font-bold text-primary">{b.titleAr}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-xl max-w-7xl mx-auto px-4 sm:px-6" id="services">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display-md text-2xl sm:text-3xl md:text-display-md text-primary mb-4">
            خدماتنا
          </h2>
          <p className="text-base sm:text-body-lg text-on-surface-variant max-w-xl mx-auto">
            باقة شاملة من الخدمات لتلبية احتياجات منزلك ومنشأتك بأعلى المعايير.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const isWide = service.span === 'wide'
            return (
              <Link
                key={service.id}
                to={`/ar/services/${service.slug}`}
                className={`group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-surface-variant/30 ${
                  isWide
                    ? 'md:col-span-2 lg:col-span-3 flex flex-col lg:flex-row'
                    : ''
                }`}
              >
                <div
                  className={`overflow-hidden relative ${
                    isWide
                      ? 'lg:w-3/5 lg:h-auto h-72 md:h-96'
                      : 'aspect-video w-full'
                  }`}
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={service.imageAr ?? service.image ?? service.imageEn}
                    alt={service.titleAr}
                  />
                  {isWide && (
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-primary/60 via-primary/10 to-transparent" />
                  )}
                </div>
                <div className={`p-6 ${isWide ? 'lg:w-2/5 lg:p-10 flex flex-col justify-center' : ''}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 bg-surface-container rounded-2xl text-primary-container ${isWide ? 'lg:p-4' : ''}`}>
                      <Icon name={service.icon} className={isWide ? 'text-4xl' : 'text-3xl'} />
                    </div>
                    {service.badgeAr && (
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold">
                        {service.badgeAr}
                      </span>
                    )}
                  </div>
                  <h3 className={`font-display-md text-primary mb-2 ${isWide ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                    {service.titleAr}
                  </h3>
                  <p className={`text-on-surface-variant mb-4 ${isWide ? 'text-base lg:text-lg' : 'text-sm min-h-[60px]'}`}>
                    {service.descriptionAr}
                  </p>
                  <div className="flex items-center justify-between border-t border-surface-variant/40 pt-4">
                    <div>
                      <span className="block text-xs text-outline">يبدأ من</span>
                      <span className={`font-bold text-primary ${isWide ? 'text-2xl' : 'text-lg'}`}>
                        {service.startingPrice} ر.س
                      </span>
                    </div>
                    <span className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                      اعرف المزيد <Icon name="arrow_back" className="text-base" />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-lg">
        <div className="bg-secondary-container/30 border border-secondary-container rounded-3xl sm:rounded-[2rem] p-6 sm:p-md md:p-lg flex flex-col md:flex-row items-center justify-between gap-6 md:gap-md">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-right">
            <span className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary-container rounded-2xl flex items-center justify-center text-on-secondary-container shrink-0">
              <Icon name="local_offer" className="text-2xl sm:text-3xl" filled />
            </span>
            <div>
              <h3 className="text-lg sm:text-heading-sm font-display-md text-primary mb-1">
                باقة تنظيف منزل + تعقيم شامل بسعر خاص
              </h3>
              <p className="text-sm sm:text-base text-on-surface-variant">
                خصم إضافي عند الاشتراك الشهري أو السنوي
              </p>
            </div>
          </div>
          <Link
            to="/ar/booking"
            className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold shadow-lg hover:opacity-95 active-scale transition-all whitespace-nowrap"
          >
            احصل على العرض
          </Link>
        </div>
      </section>

      <SubscriptionSection lang="ar" />

      <PaymentSection lang="ar" />

      <LoyaltySection lang="ar" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-xl items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg bg-black aspect-video">
            <iframe
              src="https://app.heygen.com/embeds/a74bfba8bb464a30a58b9a5f59252fcd"
              title="Medi Clean - احترافية النظافة في السعودية"
              className="w-full h-full border-0"
              allow="encrypted-media; fullscreen;"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col gap-md">
            <h2 className="text-2xl sm:text-3xl md:text-display-md font-display-md text-primary">
              لماذا تختارنا؟
            </h2>
            <p className="text-base sm:text-body-lg text-on-surface-variant">
              نلتزم بتقديم أعلى مستويات الجودة باستخدام أحدث المعدات ومواد آمنة
              ومعتمدة، مع فرق عمل مدربة ومؤمن عليها لراحة بالك التامة.
            </p>
            <ul className="flex flex-col gap-sm">
              {[
                'ضمان جودة الخدمة 100%',
                'مواد تنظيف وتعقيم آمنة ومعتمدة',
                'تغطية كاملة لمنطقة الشرقية',
                'دعم متميز على مدار الساعة',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-medium text-primary"
                >
                  <Icon name="check_circle" className="text-secondary" filled />{' '}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
