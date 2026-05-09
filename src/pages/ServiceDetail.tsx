import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Icon } from '../components/Icon'
import { services, galleryImages } from '../data/mockData'
import { useLocale, localePath } from '../hooks/useLocale'

interface ServiceFeatureT {
  title: string
  description: string
  icon: string
}

export function ServiceDetail() {
  const { t } = useTranslation()
  const locale = useLocale()
  const isAr = locale === 'ar'
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug) ?? services[0]

  const image =
    (isAr ? service.imageAr : service.imageEn) ?? service.image ?? service.imageEn ?? service.imageAr
  const title = t(`services.${service.id}.title`)
  const description = t(`services.${service.id}.description`)
  const badge = service.hasBadge
    ? t(`services.${service.id}.badge`)
    : t('serviceDetail.featuredBadge')

  const features = t('serviceFeatures', { returnObjects: true }) as ServiceFeatureT[]
  const priceLabel = isAr
    ? `${service.startingPrice} ${t('common.currency')}`
    : `${t('common.currency')} ${service.startingPrice}`

  return (
    <>
      <section className="relative min-h-[480px] sm:min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src={image} alt={title} />
          <div
            className={`absolute inset-0 bg-gradient-to-${isAr ? 'r' : 'l'} from-[#0F6E56]/80 via-[#0F6E56]/40 to-transparent`}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-12">
          <div className="max-w-2xl bg-white/10 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl border border-white/20">
            <span className="inline-block px-3 sm:px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs sm:text-label-caps font-label-caps mb-4 sm:mb-6">
              {badge}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-display-lg font-display-lg text-white mb-3 sm:mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-base md:text-body-lg text-white/90 mb-6 sm:mb-8">
              {description}
            </p>
            <div className="flex items-baseline gap-3 sm:gap-4 mb-6 sm:mb-8 flex-wrap">
              <span className="text-white/80 text-sm sm:text-heading-sm">
                {t('common.startingFrom')}
              </span>
              <span className="text-white text-2xl sm:text-3xl md:text-display-md font-bold">
                {priceLabel}
              </span>
            </div>
            <Link
              to={localePath(locale, '/booking')}
              className="inline-block bg-[#0F6E56] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-sm sm:text-heading-sm font-bold shadow-xl active:scale-95 transition-all hover:bg-[#0c5a46]"
            >
              {t('common.bookNow')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-xl max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
        <div className="lg:col-span-2 space-y-xl">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-display-md font-display-md mb-md">
              {t('serviceDetail.included')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-surface-container-high transition-all hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={feature.icon} className="text-primary-container" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p className="text-gray-500 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-display-md font-display-md mb-md">
              {t('serviceDetail.gallery')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  src={galleryImages[0]}
                  alt=""
                />
              </div>
              {galleryImages.slice(1).map((img, i) => (
                <div key={i} className="overflow-hidden rounded-2xl sm:rounded-3xl h-32 sm:h-48">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    src={img}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-32 bg-white rounded-3xl shadow-soft p-6 sm:p-8 border border-surface-container-high">
            <h3 className="font-display-md text-2xl text-primary mb-6">
              {t('serviceDetail.summary')}
            </h3>
            <ul className="flex flex-col gap-4 mb-6 text-on-surface-variant">
              <li className="flex items-center justify-between">
                <span>{t('serviceDetail.duration')}</span>
                <span className="font-bold text-primary">{t('serviceDetail.durationValue')}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>{t('serviceDetail.technicians')}</span>
                <span className="font-bold text-primary">{t('serviceDetail.techniciansValue')}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>{t('serviceDetail.tools')}</span>
                <span className="font-bold text-primary">{t('serviceDetail.toolsValue')}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>{t('serviceDetail.guarantee')}</span>
                <span className="font-bold text-primary">{t('serviceDetail.guaranteeValue')}</span>
              </li>
            </ul>
            <div className="bg-surface-container-low rounded-2xl p-6 mb-6">
              <p className="text-sm text-outline mb-1">{t('common.startingAt')}</p>
              <p className="text-3xl font-bold text-primary">{priceLabel}</p>
            </div>
            <Link
              to={localePath(locale, '/booking')}
              className="block text-center w-full bg-[#0F6E56] text-white py-4 rounded-xl font-bold shadow-md hover:opacity-95 active:scale-95 transition-all"
            >
              {t('serviceDetail.bookService')}
            </Link>
          </div>
        </aside>
      </section>

      <section className="bg-surface-container-low py-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-display-md font-display-md text-primary mb-4">
            {t('serviceDetail.otherServices')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-lg">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((other) => (
                <Link
                  key={other.id}
                  to={localePath(locale, `/services/${other.slug}`)}
                  className={`bg-white rounded-2xl p-6 shadow-soft shadow-interactive ${isAr ? 'text-right' : 'text-left'}`}
                >
                  <Icon name={other.icon} className="text-primary text-3xl mb-4" />
                  <h4 className="font-bold text-lg text-primary mb-2">
                    {t(`services.${other.id}.title`)}
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    {t(`services.${other.id}.description`)}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
