import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import { subscriptionPlans } from '../data/mockData'

interface Props {
  lang: 'en' | 'ar'
}

export function SubscriptionSection({ lang }: Props) {
  const isAr = lang === 'ar'
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-xl" id="subscriptions">
      <div className="text-center mb-12 sm:mb-xl">
        <h2 className="text-2xl sm:text-3xl md:text-display-md font-display-md text-primary mb-4">
          {isAr ? 'باقات الاشتراك' : 'Subscription Plans'}
        </h2>
        <p className="text-base sm:text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {isAr
            ? 'وفّر أكثر بزيارات منتظمة وأولوية الحجز وخدمات إضافية مجانية.'
            : 'Save more with regular visits, priority booking and free extras.'}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-md">
        {subscriptionPlans.map((plan) => {
          const benefits = isAr ? plan.benefitsAr : plan.benefitsEn
          const title = isAr ? plan.titleAr : plan.titleEn
          const price = isAr ? plan.priceAr : plan.priceEn
          const cadence = isAr ? plan.cadenceAr : plan.cadenceEn
          return (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 sm:p-md md:p-lg shadow-soft transition-all relative overflow-hidden ${
                plan.highlight
                  ? 'bg-primary-container text-white'
                  : 'bg-white border border-surface-variant/50'
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container text-xs font-bold px-3 py-1 rounded-full">
                  {isAr ? 'الأكثر توفيراً' : 'Best Value'}
                </span>
              )}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    plan.highlight
                      ? 'bg-white/15 text-white'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  <Icon name="workspace_premium" />
                </span>
                <h3
                  className={`text-heading-sm font-display-md ${
                    plan.highlight ? 'text-white' : 'text-primary'
                  }`}
                >
                  {title}
                </h3>
              </div>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className={`text-display-md font-display-md ${
                    plan.highlight ? 'text-white' : 'text-primary'
                  }`}
                >
                  {price}
                </span>
                <span
                  className={
                    plan.highlight ? 'text-white/80' : 'text-on-surface-variant'
                  }
                >
                  {cadence}
                </span>
              </div>
              <ul className="flex flex-col gap-3 mb-lg">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className={`flex items-center gap-3 ${
                      plan.highlight ? 'text-white' : 'text-on-surface'
                    }`}
                  >
                    <Icon
                      name="check_circle"
                      className={
                        plan.highlight ? 'text-secondary-container' : 'text-primary'
                      }
                      filled
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={isAr ? '/ar/booking' : '/booking'}
                className={`block text-center w-full py-3 rounded-full font-bold transition-all active-scale ${
                  plan.highlight
                    ? 'bg-secondary-container text-on-secondary-container'
                    : 'bg-primary text-white'
                }`}
              >
                {isAr ? 'اشترك الآن' : 'Subscribe Now'}
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
