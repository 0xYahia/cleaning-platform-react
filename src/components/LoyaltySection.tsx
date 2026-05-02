import { Icon } from './Icon'
import { loyaltyProgram } from '../data/mockData'

interface Props {
  lang: 'en' | 'ar'
}

export function LoyaltySection({ lang }: Props) {
  const data = loyaltyProgram[lang]
  const isAr = lang === 'ar'
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-xl" id="loyalty">
      <div className="bg-gradient-to-br from-primary-container to-primary rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-md md:p-xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -mr-24 -mt-24" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -ml-24 -mb-24" />
        <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-lg items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full font-bold mb-4 text-sm">
              <Icon name="stars" filled className="text-base" />
              {isAr ? 'برنامج الولاء' : 'Loyalty Program'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-display-md font-display-md mb-4">
              {data.title}
            </h2>
            <p className="text-base sm:text-body-lg text-white/90 mb-lg">{data.tagline}</p>
            <button
              type="button"
              className="bg-secondary-container text-on-secondary-container px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold shadow-lg hover:scale-105 active-scale transition-all"
            >
              {isAr ? 'انضم إلينا الآن' : 'Join Now'}
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-md">
            {data.benefits.map((b) => (
              <div
                key={b.text}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-md border border-white/15"
              >
                <Icon
                  name={b.icon}
                  className="text-secondary-container text-2xl sm:text-3xl mb-3"
                  filled
                />
                <p className="font-bold leading-snug text-sm sm:text-base">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
