import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { services, heroImageAr } from '../data/mockData'

export function HomeAr() {
  return (
    <>
      <section className="relative pb-20 overflow-hidden min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src={heroImageAr} alt="" />
          <div className="absolute inset-0 bg-gradient-to-l from-surface/80 via-surface/40 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-2xl">
            <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">
              نظافة احترافية في ضغطة زر
            </h1>
            <p className="font-heading-sm text-body-lg text-on-surface-variant mb-10">
              نخبة من الكوادر المدربة والمؤمن عليها لتقديم أعلى معايير النظافة
              والرفاهية لمنزلك ومكتبك في المملكة.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/ar/booking"
                className="px-10 py-4 bg-primary-container text-white rounded-full font-bold text-lg hover:shadow-lg transition-all active:scale-95"
              >
                احجز الآن
              </Link>
              <a
                href="#services"
                className="px-10 py-4 border-2 border-primary-container text-primary-container rounded-full font-bold text-lg hover:bg-primary-container/5 transition-all"
              >
                تعرف على خدماتنا
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-2">
                <Icon name="star" className="text-accent" filled />
                <span className="font-display-md text-3xl text-primary">4.9</span>
              </div>
              <p className="text-on-surface-variant font-medium">
                تقييم العملاء الراضين
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display-md text-3xl text-primary mb-2">
                +10,000
              </span>
              <p className="text-on-surface-variant font-medium">
                طلب مكتمل بنجاح
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="support_agent" className="text-3xl text-primary mb-2" />
              <p className="text-on-surface-variant font-medium">
                خدمة عملاء 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xl max-w-7xl mx-auto px-6" id="services">
        <div className="text-center mb-16">
          <h2 className="font-display-md text-display-md text-primary mb-4">
            خدماتنا الفاخرة
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            حلول تنظيف شاملة مصممة خصيصاً لتناسب احتياجاتكم بلمسة من الرقي.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/ar/services/${service.slug}`}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video w-full">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={service.image}
                  alt=""
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-surface-container rounded-2xl text-primary-container">
                    <Icon name={service.icon} className="text-3xl" />
                  </div>
                  {service.badgeAr && (
                    <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-bold">
                      {service.badgeAr}
                    </span>
                  )}
                </div>
                <h3 className="font-display-md text-2xl text-primary mb-2">
                  {service.titleAr}
                </h3>
                <p className="text-on-surface-variant mb-6">
                  {service.descriptionAr}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-xs text-outline">يبدأ من</span>
                    <span className="text-xl font-bold text-primary">
                      {service.startingPrice} ر.س
                    </span>
                  </div>
                  <span className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                    اعرف المزيد <Icon name="arrow_back" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-lg">
        <div className="bg-primary-container rounded-[2.5rem] p-md md:p-xl flex flex-col md:flex-row items-center justify-between gap-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mt-32" />
          <div className="relative z-10 text-center md:text-right">
            <h3 className="text-display-md font-display-md text-white mb-4">
              حجزك الأول معنا؟
            </h3>
            <p className="text-primary-fixed text-body-lg mb-lg">
              احصل على خصم{' '}
              <span className="text-secondary-container font-bold text-3xl">
                25%
              </span>{' '}
              على أول طلب تنظيف عميق للفلل.
            </p>
          </div>
          <Link
            to="/ar/booking"
            className="relative z-10 bg-secondary-container text-on-secondary-container px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-105 active-scale transition-all"
          >
            احصل على الخصم
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-xl">
        <div className="grid md:grid-cols-2 gap-xl items-center">
          <div className="flex flex-col gap-md">
            <h2 className="text-display-md font-display-md text-primary">
              معيار سدى
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              نحن لا ننظف فحسب، بل نعيد بيئتك إلى أفضل حالاتها. فرقنا مدربة على
              أحدث بروتوكولات النظافة العالمية، لضمان أن كل ركن يعكس مستوى
              فخامتك.
            </p>
            <ul className="flex flex-col gap-sm">
              {[
                'ضمان رضا العميل 100%',
                'فحص جودة متعدد النقاط',
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
          <div className="grid grid-cols-2 gap-md">
            {[
              { icon: 'shield', t: 'خدمة مؤمنة', d: 'تغطية كاملة لراحة بالك.' },
              { icon: 'schedule', t: 'الالتزام بالوقت', d: 'نقدر وقتك كما تقدره.' },
              { icon: 'eco', t: 'صديق للبيئة', d: 'منتجات تنظيف فاخرة وآمنة.' },
              { icon: 'workspace_premium', t: 'فريق نخبة', d: 'مدربون ومفحوصون أمنياً.' },
            ].map((tile) => (
              <div key={tile.icon} className="bg-white p-md rounded-3xl shadow-soft">
                <Icon
                  name={tile.icon}
                  className="text-secondary text-4xl mb-4"
                  filled
                />
                <h5 className="font-bold text-primary mb-2">{tile.t}</h5>
                <p className="text-sm text-on-surface-variant">{tile.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
