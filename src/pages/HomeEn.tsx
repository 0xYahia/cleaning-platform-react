import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import {
  services,
  trustLogos,
  heroImage,
  testimonialAvatars,
} from '../data/mockData'

export function HomeEn() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-xl grid lg:grid-cols-2 gap-lg items-center">
        <div className="flex flex-col gap-md">
          <span className="inline-flex items-center gap-2 text-secondary font-label-caps uppercase tracking-widest">
            <span className="w-8 h-px bg-secondary" /> Luxury Experience
          </span>
          <h1 className="text-display-lg font-display-lg text-primary leading-tight">
            Professional Cleaning at the Click of a Button
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl">
            Experience the gold standard of hygiene with SADA. We combine Saudi
            hospitality with high-tech efficiency for your home, office, and
            medical facilities.
          </p>
          <div className="flex flex-wrap gap-md mt-sm">
            <Link
              to="/booking"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:opacity-95 active-scale flex items-center gap-2"
            >
              Book Your Service <Icon name="arrow_forward" />
            </Link>
            <a
              href="#services"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary/5 active-scale transition-all"
            >
              Discover Our Services
            </a>
          </div>
          <div className="flex items-center gap-4 mt-lg">
            <div className="flex -space-x-3">
              {testimonialAvatars.map((url, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-surface-dim overflow-hidden shadow-sm"
                >
                  <img className="w-full h-full object-cover" src={url} alt="" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-on-surface-variant">
              <span className="text-secondary font-bold">4.9/5</span> from 10k+
              Happy Clients
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] bg-surface-container-high">
            <img className="w-full h-full object-cover" src={heroImage} alt="" />
          </div>
          <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-soft flex items-center gap-4 max-w-xs">
            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
              <Icon name="verified_user" filled />
            </div>
            <div>
              <p className="font-bold text-primary">SADA Certified</p>
              <p className="text-xs text-on-surface-variant">
                Top-tier professionals only
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-lg border-y border-surface-variant/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-lg opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          <p className="font-label-caps text-on-surface-variant w-full text-center lg:w-auto mb-4 lg:mb-0">
            TRUSTED BY LEADING ENTITIES
          </p>
          {trustLogos.map((logo, i) => (
            <img key={i} className="h-8" src={logo} alt="" />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-xl" id="services">
        <div className="text-center mb-xl">
          <h2 className="text-display-md font-display-md text-primary mb-4">
            Our Premium Services
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Tailored cleaning solutions designed for high-standard environments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
          {services.map((service) => {
            const colSpan =
              service.span === 'large' || service.span === 'wide'
                ? 'md:col-span-8'
                : 'md:col-span-4'
            return (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className={`${colSpan} bg-white rounded-3xl p-md shadow-soft shadow-interactive relative overflow-hidden group flex flex-col justify-between min-h-[260px]`}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    {service.badgeEn && (
                      <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                        {service.badgeEn}
                      </span>
                    )}
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                        <Icon name={service.icon} className="text-2xl" />
                      </span>
                      <h3 className="text-heading-sm font-display-md text-primary">
                        {service.titleEn}
                      </h3>
                    </div>
                    <p className="text-body-md text-on-surface-variant max-w-sm">
                      {service.descriptionEn}
                    </p>
                  </div>
                  <span className="flex items-center gap-2 text-primary font-bold mt-4 group-hover:gap-4 transition-all">
                    Learn More <Icon name="arrow_forward" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-surface py-xl" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
            <div className="max-w-xl">
              <h2 className="text-display-md font-display-md text-primary mb-4">
                Effortless Process
              </h2>
              <p className="text-body-lg text-on-surface-variant">
                Three simple steps to a pristine environment.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-lg relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-surface-variant to-transparent" />
            {[
              {
                n: '01',
                color: 'text-primary',
                title: 'Select & Schedule',
                desc: 'Pick your service and preferred time through our intuitive dashboard or app.',
              },
              {
                n: '02',
                color: 'text-secondary',
                title: 'Certified Care',
                desc: 'Our vetted specialists arrive with high-end equipment and eco-friendly products.',
              },
              {
                n: '03',
                color: 'text-primary',
                title: 'Pure Comfort',
                desc: 'Walk into a perfectly cleaned space. Pay securely after full satisfaction.',
              },
            ].map((step) => (
              <div key={step.n} className="relative z-10 flex flex-col gap-md">
                <div
                  className={`w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-surface font-display-md text-2xl ${step.color}`}
                >
                  {step.n}
                </div>
                <div>
                  <h4 className="text-heading-sm font-display-md text-primary mb-2">
                    {step.title}
                  </h4>
                  <p className="text-on-surface-variant text-body-md">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-lg">
        <div className="bg-primary-container rounded-[2.5rem] p-md md:p-xl flex flex-col md:flex-row items-center justify-between gap-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-display-md font-display-md text-white mb-4">
              First-Time Booking?
            </h3>
            <p className="text-primary-fixed text-body-lg mb-lg">
              Get{' '}
              <span className="text-secondary-container font-bold text-3xl">
                25% OFF
              </span>{' '}
              on your first full villa deep clean.
            </p>
          </div>
          <Link
            to="/booking"
            className="relative z-10 bg-secondary-container text-on-secondary-container px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-105 active-scale transition-all"
          >
            Claim Offer Now
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-xl">
        <div className="grid md:grid-cols-2 gap-xl items-center">
          <div className="grid grid-cols-2 gap-md">
            {[
              { icon: 'shield', t: 'Insured Service', d: 'Full coverage for your peace of mind.' },
              { icon: 'schedule', t: 'Punctuality', d: 'We value your time as much as you do.' },
              { icon: 'eco', t: 'Eco-Friendly', d: 'Non-toxic premium cleaning agents.' },
              { icon: 'workspace_premium', t: 'Elite Staff', d: 'Professionally trained & background checked.' },
            ].map((tile) => (
              <div key={tile.icon} className="bg-white p-md rounded-3xl shadow-soft">
                <Icon name={tile.icon} className="text-secondary text-4xl mb-4" filled />
                <h5 className="font-bold text-primary mb-2">{tile.t}</h5>
                <p className="text-sm text-on-surface-variant">{tile.d}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-md">
            <h2 className="text-display-md font-display-md text-primary">
              The SADA Standard
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              We don't just clean; we restore your environment to its absolute
              best state. Our teams are trained in the latest global hygiene
              protocols, ensuring every corner reflects your standard of luxury.
            </p>
            <ul className="flex flex-col gap-sm">
              {[
                '100% Satisfaction Guarantee',
                'Multi-point Quality Inspection',
                '24/7 Premium Support',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-medium text-primary"
                >
                  <Icon name="check_circle" className="text-secondary" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
