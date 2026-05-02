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

export function HomeEn() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-md pb-lg">
        <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-surface-variant/30 bg-white">
          <img
            src={heroBanner}
            alt="Tank cleaning, sanitization & lining"
            className="w-full h-auto block"
            loading="eager"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-xl">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-label-caps mb-4">
            <Icon name="verified" className="text-base" filled />
            {slogan.en}
          </span>
          <h1 className="text-display-md md:text-display-lg font-display-lg text-primary mb-6 leading-tight">
            Premium Cleaning & Sanitization Across the Eastern Province
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-6">
            We deliver complete cleaning and sanitization solutions for homes,
            mosques, AC units, water tanks and upholstery — using advanced
            equipment and 100% safe materials, fully guaranteed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-lg">
            {cities.en.map((city) => (
              <span
                key={city}
                className="bg-white border border-surface-variant/50 text-primary px-4 py-1.5 rounded-full text-sm font-medium shadow-sm"
              >
                <Icon name="location_on" className="text-sm align-text-bottom me-1 text-secondary" />
                {city}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg active-scale transition-all"
            >
              Book Your Service
            </Link>
            <a
              href="#services"
              className="border-2 border-primary text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-all"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-surface-variant/40 py-lg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-md">
          {trustBadges.map((b) => (
            <div key={b.icon} className="flex items-center gap-3">
              <span className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Icon name={b.icon} filled />
              </span>
              <span className="font-bold text-primary">{b.titleEn}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-xl" id="services">
        <div className="text-center mb-xl">
          <h2 className="text-display-md font-display-md text-primary mb-4">
            Our Services
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            A full catalog of cleaning and sanitization services for homes,
            mosques and businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-surface-variant/30"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={service.image}
                  alt=""
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-surface-container rounded-2xl text-primary-container">
                    <Icon name={service.icon} className="text-3xl" />
                  </div>
                  {service.badgeEn && (
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold">
                      {service.badgeEn}
                    </span>
                  )}
                </div>
                <h3 className="font-display-md text-xl text-primary mb-2">
                  {service.titleEn}
                </h3>
                <p className="text-on-surface-variant text-sm mb-4 min-h-[60px]">
                  {service.descriptionEn}
                </p>
                <div className="flex items-center justify-between border-t border-surface-variant/40 pt-4">
                  <div>
                    <span className="block text-xs text-outline">Starting at</span>
                    <span className="text-lg font-bold text-primary">
                      SAR {service.startingPrice}
                    </span>
                  </div>
                  <span className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                    Learn more <Icon name="arrow_forward" className="text-base" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-lg">
        <div className="bg-secondary-container/30 border border-secondary-container rounded-[2rem] p-md md:p-lg flex flex-col md:flex-row items-center justify-between gap-md">
          <div className="flex items-center gap-4 text-center md:text-left">
            <span className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center text-on-secondary-container">
              <Icon name="local_offer" className="text-3xl" filled />
            </span>
            <div>
              <h3 className="text-heading-sm font-display-md text-primary mb-1">
                Home Cleaning + Full Sanitization Bundle
              </h3>
              <p className="text-on-surface-variant">
                Extra discount when you subscribe monthly or yearly.
              </p>
            </div>
          </div>
          <Link
            to="/booking"
            className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:opacity-95 active-scale transition-all whitespace-nowrap"
          >
            Claim Offer
          </Link>
        </div>
      </section>

      <SubscriptionSection lang="en" />

      <PaymentSection lang="en" />

      <LoyaltySection lang="en" />

      <section className="max-w-7xl mx-auto px-6 py-xl">
        <div className="grid md:grid-cols-2 gap-xl items-center">
          <div className="flex flex-col gap-md">
            <h2 className="text-display-md font-display-md text-primary">
              Why choose us?
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              We pair the latest equipment with safe, certified materials and
              fully insured trained crews — so your space gets the highest
              standard of clean, every time.
            </p>
            <ul className="flex flex-col gap-sm">
              {[
                '100% service quality guarantee',
                'Safe, certified cleaning & sanitization materials',
                'Full coverage across the Eastern Province',
                '24/7 premium customer support',
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
          <div className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-md md:p-lg text-white relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-15">
              <Icon name="play_circle" className="text-[200px]" filled />
            </div>
            <div className="relative z-10">
              <Icon name="movie" className="text-4xl text-secondary-container mb-4" />
              <h3 className="text-heading-sm font-display-md mb-2">
                See us in action
              </h3>
              <p className="text-white/90">
                Short field videos of our crews cleaning and sanitizing on-site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
