import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Icon } from './Icon'
import { subscriptionPlans } from '../data/mockData'
import { useLocale, localePath } from '../hooks/useLocale'

export function SubscriptionSection() {
  const { t } = useTranslation()
  const locale = useLocale()

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-xl" id="subscriptions">
      <div className="text-center mb-12 sm:mb-xl">
        <h2 className="text-2xl sm:text-3xl md:text-display-md font-display-md text-primary mb-4">
          {t('subscriptions.title')}
        </h2>
        <p className="text-base sm:text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {t('subscriptions.description')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-md">
        {subscriptionPlans.map((plan) => {
          const benefits = t(`subscriptions.plans.${plan.id}.benefits`, {
            returnObjects: true,
          }) as string[]
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
                  {t('subscriptions.bestValue')}
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
                  {t(`subscriptions.plans.${plan.id}.title`)}
                </h3>
              </div>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className={`text-display-md font-display-md ${
                    plan.highlight ? 'text-white' : 'text-primary'
                  }`}
                >
                  {t(`subscriptions.plans.${plan.id}.price`)}
                </span>
                <span
                  className={
                    plan.highlight ? 'text-white/80' : 'text-on-surface-variant'
                  }
                >
                  {t(`subscriptions.plans.${plan.id}.cadence`)}
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
                to={localePath(locale, '/booking')}
                className={`block text-center w-full py-3 rounded-full font-bold transition-all active-scale ${
                  plan.highlight
                    ? 'bg-secondary-container text-on-secondary-container'
                    : 'bg-primary text-white'
                }`}
              >
                {t('subscriptions.subscribe')}
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
