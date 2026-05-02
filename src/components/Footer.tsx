import { Icon } from './Icon'

interface FooterProps {
  lang: 'en' | 'ar'
}

export function Footer({ lang }: FooterProps) {
  const isAr = lang === 'ar'
  return (
    <footer
      className="bg-white border-t border-surface-variant/50 pt-xl pb-10"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-lg mb-xl">
          <div className="md:col-span-1">
            <p className="text-2xl font-bold text-[#0F6E56] font-display-md mb-6">
              SADA Luxury Clean
            </p>
            <p className="text-sm text-on-surface-variant mb-6">
              {isAr
                ? 'نظافة... أمان... تعقيم بمعايير احترافية في الدمام والخبر والظهران والجبيل والقطيف وسيهات.'
                : 'Cleanliness, safety and sanitization with professional standards across the Eastern Province.'}
            </p>
            <div className="flex gap-4">
              {['social_leaderboard', 'share', 'camera'].map((icon) => (
                <button
                  key={icon}
                  className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                >
                  <Icon name={icon} className="text-xl" />
                </button>
              ))}
            </div>
          </div>
          <div>
            <h6 className="font-bold text-primary mb-6">
              {isAr ? 'روابط سريعة' : 'Quick Links'}
            </h6>
            <ul className="flex flex-col gap-4 text-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">{isAr ? 'خدماتنا' : 'Our Services'}</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">{isAr ? 'برنامج الولاء' : 'Loyalty Program'}</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">{isAr ? 'حلول الشركات' : 'Corporate Solutions'}</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">{isAr ? 'الوظائف' : 'Careers'}</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-primary mb-6">
              {isAr ? 'تواصل معنا' : 'Contact Us'}
            </h6>
            <ul className="flex flex-col gap-4 text-sm text-on-surface-variant">
              <li className="flex items-start gap-2">
                <Icon name="call" className="text-secondary text-sm" />
                <span>0554918518</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="mail" className="text-secondary text-sm" />
                <span>concierge@sadaclean.sa</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="location_on" className="text-secondary text-sm" />
                <span>
                  {isAr
                    ? 'الدمام، الخبر، الظهران، الجبيل، القطيف، سيهات'
                    : 'Dammam, Khobar, Dhahran, Jubail, Qatif, Sihat'}
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-primary mb-6">
              {isAr ? 'حمل التطبيق' : 'Download Our App'}
            </h6>
            <div className="flex flex-col gap-4">
              <button className="bg-on-background text-white p-3 rounded-xl flex items-center gap-3 active-scale">
                <Icon name="apple" className="text-3xl" />
                <span className="text-left">
                  <span className="block text-[10px] uppercase font-label-caps">
                    {isAr ? 'حمله من' : 'Download on the'}
                  </span>
                  <span className="block text-sm font-bold -mt-1">App Store</span>
                </span>
              </button>
              <button className="bg-on-background text-white p-3 rounded-xl flex items-center gap-3 active-scale">
                <Icon name="play_arrow" className="text-3xl" />
                <span className="text-left">
                  <span className="block text-[10px] uppercase font-label-caps">
                    {isAr ? 'متوفر على' : 'Get it on'}
                  </span>
                  <span className="block text-sm font-bold -mt-1">Google Play</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-lg border-t border-surface-variant/30 flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="text-sm text-on-surface-variant">
            © 2026 SADA Cleaning Services. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
          <div className="flex gap-6 text-sm text-on-surface-variant">
            <a className="hover:text-primary transition-colors" href="#">
              {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              {isAr ? 'شروط الخدمة' : 'Terms of Service'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
