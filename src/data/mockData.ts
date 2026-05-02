export interface Service {
  id: string
  slug: string
  titleEn: string
  titleAr: string
  descriptionEn: string
  descriptionAr: string
  icon: string
  startingPrice: number
  badgeAr?: string
  badgeEn?: string
  image: string
  span?: 'large' | 'wide' | 'small'
}

export interface ServicePackage {
  id: string
  titleAr: string
  titleEn: string
  descriptionAr: string
  descriptionEn: string
  icon: string
  price: number
  popular?: boolean
}

export interface AddOn {
  id: string
  titleAr: string
  titleEn: string
  price: number
  icon: string
}

export interface ServiceFeature {
  titleAr: string
  titleEn: string
  descriptionAr: string
  descriptionEn: string
  icon: string
}

export interface SubscriptionPlan {
  id: string
  titleAr: string
  titleEn: string
  priceAr: string
  priceEn: string
  cadenceAr: string
  cadenceEn: string
  benefitsAr: string[]
  benefitsEn: string[]
  highlight?: boolean
}

export const cities = {
  ar: ['الدمام', 'الخبر', 'الظهران', 'الجبيل', 'القطيف', 'سيهات'],
  en: ['Dammam', 'Khobar', 'Dhahran', 'Jubail', 'Qatif', 'Sihat'],
}

export const slogan = {
  ar: 'نظافة... أمان... تعقيم بمعايير احترافية',
  en: 'Cleanliness. Safety. Sanitization. Professional standards.',
}

export const services: Service[] = [
  {
    id: 'home-cleaning',
    slug: 'home-cleaning',
    titleEn: 'Comprehensive Home Cleaning',
    titleAr: 'تنظيف منازل شامل',
    descriptionEn:
      'Deep cleaning for villas and apartments with safe, certified products and advanced equipment.',
    descriptionAr:
      'تنظيف عميق ومتكامل للمنازل والشقق بأحدث المعدات ومواد آمنة 100%.',
    icon: 'home',
    startingPrice: 250,
    badgeEn: 'Most Popular',
    badgeAr: 'الأكثر طلباً',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjc8L2t9IX2d15SD8YFnTmD_MXllaDLftlB3Kar4kaZ9La9QPw8nA1_C7PC0AIrEE8QJq55LbV4ebq1pmyE-mlf_SRitoytwWn9oqfqAJdVJPST-AAM24PpxP__KutthzvVZluj3v4pcp4q2S_58XjP589MU4KpqioZ10aWVGGF_hGqNuZ80QDhG_GE1ZTavSBXTCjAgCMJSipKTZUEFsST9-R01yUzOjn1LYChh_p5nRmQ37otFn6-G-GdjHNzHcL11TFvt3THp89',
    span: 'large',
  },
  {
    id: 'mosques',
    slug: 'mosque-cleaning',
    titleEn: 'Mosque Cleaning & Sanitization',
    titleAr: 'تنظيف وتعقيم المساجد',
    descriptionEn: 'Specialized cleaning and sanitization service for mosques and prayer halls.',
    descriptionAr: 'خدمة متخصصة لتنظيف وتعقيم المساجد ومصليات الجوامع بعناية تامة.',
    icon: 'mosque',
    startingPrice: 400,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEBHnDkVTo0ClA6LeuV_gg4sbiXjDJo5iR1RuLG4ZCLCtDN44X2DgUjWs0o1USWnnfMQmYDWDrfpQiDW9hCJdp7OTaAs5SSlqpIRCBYHLTdow6_wyrlajNoWLgJ0XGTwq14TQjkUwRuN-XutjvLCos-Ax_HTYGfGPMjwLvL4bBd5adIRhrIaHSqJFWc5vjEONklwLeqRINrmFsypK4UxoRCyyAJ0l7H_zwcK1Ndzdqu3EzTCgnptRqUnr1ThWPsF0ZSm6b0W2y7B3f',
    span: 'small',
  },
  {
    id: 'ac',
    slug: 'ac-cleaning',
    titleEn: 'AC Washing (Split / Window / Central)',
    titleAr: 'غسيل المكيفات (سبليت – شباك – مركزي)',
    descriptionEn: 'Full deep clean of split, window and central AC units to extend lifetime.',
    descriptionAr: 'تنظيف عميق وغسيل احترافي لجميع أنواع المكيفات لإطالة عمرها وتحسين أدائها.',
    icon: 'ac_unit',
    startingPrice: 120,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBZBBI1xitrMDD9qBM8XQtj01Pa1TFDjAQ6er8rKUbjQcQswHHjwtSqNap1xe-YxS7uCm77AZE8yR4-qeBiugA3tp62V8m2Wv7VL70GZcLcJjQUJO-OleGAhID4q2Vv63KSJrggcg9E9kn0bUvtDwmwA5YOHG92HdbOIkIfnYXLfxByYN1EfFCYvUAht_XRkZQMBeAbhM0IWOhYSEyd_-FZJom7E1_t8a4faoxmpx3wTIivb4Hfqby_9IbwT34Arr4D9JxbltsqsgQ7',
    span: 'small',
  },
  {
    id: 'tanks',
    slug: 'tank-cleaning',
    titleEn: 'Water Tank Cleaning, Sanitization, Sealing & Lining',
    titleAr: 'تنظيف وغسيل الخزانات + التعقيم + العزل + التبطين',
    descriptionEn:
      'All-in-one service: cleaning, sanitization, leak sealing and food-grade lining for ground and surface tanks.',
    descriptionAr:
      'تنظيف وتعقيم وعزل وتبطين الخزانات الأرضية والسطحية بمواد آمنة معتمدة للحفاظ على نقاء المياه.',
    icon: 'water_drop',
    startingPrice: 350,
    badgeEn: 'Featured',
    badgeAr: 'عرض مميز',
    image: '/landing-fullwidth.png',
    span: 'wide',
  },
  {
    id: 'pest-control',
    slug: 'pest-control',
    titleEn: 'Pest Control',
    titleAr: 'مكافحة الحشرات',
    descriptionEn: 'Safe and effective pest extermination for homes and businesses.',
    descriptionAr: 'مكافحة آمنة وفعّالة لجميع أنواع الحشرات والقوارض للمنازل والمنشآت.',
    icon: 'pest_control',
    startingPrice: 180,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBYW_o3oi8VvC_j-hrzqSZwTZsDYXX_-7uaru1AZhiU80lyq15vidy6Hmlmsy4r7P-q1mv_39V1_ML85V52lVNKX_BltYBtDhncMxNNO7AEa3YC8R4x2l-RZqq3ZNEUqkj8jGTvij0-pfj7SL7SiYbPzwKiaa7_VQzN-Aerc7sFsKHUS1-B4SaSJ_WPLLlwZ2pc6iCw9LbRX383WO5FcnoA3XFqJh24jnWFM45-dBAi2MZcnR7fKZ1Zq8e58xGnIMOSGc8zmbAxnMC',
    span: 'small',
  },
  {
    id: 'upholstery',
    slug: 'upholstery-steam',
    titleEn: 'Sofa, Carpet & Curtain Steam Cleaning',
    titleAr: 'غسيل الكنب والسجاد والستائر بالبخار',
    descriptionEn: 'High-temperature steam cleaning for sofas, carpets and curtains.',
    descriptionAr: 'غسيل بالبخار للكنب والسجاد والستائر لإزالة البقع والروائح والجراثيم.',
    icon: 'dry_cleaning',
    startingPrice: 200,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-GIqxH169sGpYzeSK1um5ZMvlIskh4Zlc8c5YPZyrfjyVFJyB5z1Ys9raOG5k2y-6XEzw4ssQyoxXL5cEQePZ5jhDY3TSFHmPA4YkUSiMtw5Pe8QV4kll_3sK9dnedBV4RfSEmYiVW6l4Gyp2wVh-zbJfoqq5ug3A-PPQot6eGtaTzm7NQHaL9Bsgb8GDVHmtCtk1BOBqWvTiz4G5mTeYXUGAg_gTtWF2c1ncUCWbo5L1nOXe1h5XGL5A9ylAMawUge1kPCHnUnDb',
    span: 'small',
  },
  {
    id: 'sanitization',
    slug: 'full-sanitization',
    titleEn: 'Full Premise Sanitization',
    titleAr: 'تعقيم شامل للمنازل والمنشآت',
    descriptionEn: 'Hospital-grade sanitization for homes, offices, and commercial facilities.',
    descriptionAr: 'تعقيم شامل بمعايير طبية للمنازل والمكاتب والمنشآت التجارية.',
    icon: 'sanitizer',
    startingPrice: 220,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBYW_o3oi8VvC_j-hrzqSZwTZsDYXX_-7uaru1AZhiU80lyq15vidy6Hmlmsy4r7P-q1mv_39V1_ML85V52lVNKX_BltYBtDhncMxNNO7AEa3YC8R4x2l-RZqq3ZNEUqkj8jGTvij0-pfj7SL7SiYbPzwKiaa7_VQzN-Aerc7sFsKHUS1-B4SaSJ_WPLLlwZ2pc6iCw9LbRX383WO5FcnoA3XFqJh24jnWFM45-dBAi2MZcnR7fKZ1Zq8e58xGnIMOSGc8zmbAxnMC',
    span: 'small',
  },
]

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'monthly',
    titleAr: 'الاشتراك الشهري',
    titleEn: 'Monthly Plan',
    priceAr: 'حتى 20%',
    priceEn: 'Up to 20%',
    cadenceAr: 'خصم على الزيارات',
    cadenceEn: 'off every visit',
    benefitsAr: [
      'زيارات منتظمة على مدار الشهر',
      'خصم يصل إلى 20%',
      'أولوية الحجز عند الطوارئ',
    ],
    benefitsEn: [
      'Regular visits throughout the month',
      'Up to 20% discount',
      'Priority booking on demand',
    ],
  },
  {
    id: 'yearly',
    titleAr: 'الاشتراك السنوي',
    titleEn: 'Yearly Plan',
    priceAr: 'حتى 20%',
    priceEn: 'Up to 20%',
    cadenceAr: 'خصم + خدمات مجانية',
    cadenceEn: 'off + free services',
    benefitsAr: [
      'خصم يصل إلى 20% على كافة الخدمات',
      'تعقيم مجاني دوري',
      'فحص مكيفات وخزانات مجانًا',
      'أولوية مطلقة في الحجز',
    ],
    benefitsEn: [
      'Up to 20% off across all services',
      'Free periodic sanitization',
      'Free AC & water tank inspection',
      'Top priority booking',
    ],
    highlight: true,
  },
]

export const paymentOptions = {
  ar: [
    { id: 'account', label: 'الدفع عبر الحساب', icon: 'account_balance' },
    { id: 'tabby', label: 'تابي - Tabby', icon: 'splitscreen' },
    { id: 'tamara', label: 'تمارا - Tamara', icon: 'view_week' },
  ],
  en: [
    { id: 'account', label: 'Pay by Account', icon: 'account_balance' },
    { id: 'tabby', label: 'Tabby', icon: 'splitscreen' },
    { id: 'tamara', label: 'Tamara', icon: 'view_week' },
  ],
}

export const loyaltyProgram = {
  ar: {
    title: 'برنامج "عميلنا الذهبي"',
    tagline: 'كل طلب = نقاط تستبدلها بخدمات وهدايا',
    benefits: [
      { icon: 'redeem', text: 'كل طلب = نقاط' },
      { icon: 'card_giftcard', text: 'استبدل النقاط بخدمات مجانية' },
      { icon: 'sell', text: 'خصومات حصرية للأعضاء' },
      { icon: 'celebration', text: 'هدية عند كل 5 طلبات' },
    ],
  },
  en: {
    title: 'Golden Customer Program',
    tagline: 'Every order earns points — redeem for free services and gifts.',
    benefits: [
      { icon: 'redeem', text: 'Every order earns points' },
      { icon: 'card_giftcard', text: 'Redeem points for free services' },
      { icon: 'sell', text: 'Exclusive member-only discounts' },
      { icon: 'celebration', text: 'Free gift every 5 orders' },
    ],
  },
}

export const serviceFeatures: ServiceFeature[] = [
  {
    titleAr: 'تنظيف الأرضيات العميق',
    titleEn: 'Deep Floor Cleaning',
    descriptionAr: 'شفط الغبار ومسح وتلميع كافة أنواع الأرضيات (رخام، باركيه، سيراميك).',
    descriptionEn: 'Vacuuming, mopping and polishing for marble, parquet and ceramic floors.',
    icon: 'vacuum',
  },
  {
    titleAr: 'تلميع النوافذ والزجاج',
    titleEn: 'Window & Glass Polishing',
    descriptionAr: 'تنظيف شامل للنوافذ الداخلية والخارجية والمرايا بمنتجات مضادة للبقع.',
    descriptionEn: 'Streak-free cleaning of interior and exterior windows and mirrors.',
    icon: 'window',
  },
  {
    titleAr: 'تعقيم المطبخ والحمامات',
    titleEn: 'Kitchen & Bathroom Sanitization',
    descriptionAr: 'استخدام معقمات عالية الجودة لضمان بيئة صحية لعائلتك.',
    descriptionEn: 'Hospital-grade disinfectants to keep your family safe.',
    icon: 'kitchen',
  },
  {
    titleAr: 'تعطير وتنقية الهواء',
    titleEn: 'Air Freshening & Purifying',
    descriptionAr: 'رش زيوت عطرية فاخرة تعطي انطباعاً بالنظافة المتميزة.',
    descriptionEn: 'Premium aromatic oils for a lasting clean impression.',
    icon: 'air',
  },
]

export const servicePackages: ServicePackage[] = [
  {
    id: 'bundle-home-sanitize',
    titleAr: 'باقة المنزل + تعقيم شامل',
    titleEn: 'Home + Full Sanitization Bundle',
    descriptionAr: 'تنظيف منزل كامل مع تعقيم شامل للأسطح والأرضيات بسعر خاص.',
    descriptionEn: 'Complete home cleaning paired with full surface and floor sanitization.',
    icon: 'home_repair_service',
    price: 450,
    popular: true,
  },
  {
    id: 'home-cleaning',
    titleAr: 'تنظيف منازل شامل',
    titleEn: 'Comprehensive Home Cleaning',
    descriptionAr: 'تنظيف عميق ومتكامل للمنازل والشقق مع منتجات آمنة.',
    descriptionEn: 'Deep, end-to-end cleaning for homes and apartments using safe products.',
    icon: 'cleaning_services',
    price: 280,
  },
  {
    id: 'tanks-full',
    titleAr: 'خزان: غسيل + تعقيم + عزل',
    titleEn: 'Tank: Washing + Sanitization + Sealing',
    descriptionAr: 'باقة شاملة لتنظيف وتعقيم وعزل وتبطين الخزانات الأرضية والسطحية.',
    descriptionEn: 'Full-package cleaning, sanitization, sealing and lining for ground and surface tanks.',
    icon: 'water_drop',
    price: 600,
  },
  {
    id: 'ac-bundle',
    titleAr: 'صيانة وغسيل المكيفات',
    titleEn: 'AC Maintenance & Washing',
    descriptionAr: 'غسيل احترافي لجميع المكيفات (سبليت / شباك / مركزي).',
    descriptionEn: 'Professional washing for split, window and central AC units.',
    icon: 'ac_unit',
    price: 220,
  },
]

export const addOns: AddOn[] = [
  { id: 'sanitize', titleAr: 'تعقيم إضافي شامل', titleEn: 'Extra Full Sanitization', price: 120, icon: 'sanitizer' },
  { id: 'carpet', titleAr: 'تنظيف سجاد بالبخار', titleEn: 'Carpet Steam Cleaning', price: 120, icon: 'cleaning_bucket' },
  { id: 'pest', titleAr: 'مكافحة حشرات', titleEn: 'Pest Control', price: 100, icon: 'pest_control' },
  { id: 'curtains', titleAr: 'غسيل ستائر بالبخار', titleEn: 'Curtain Steam Cleaning', price: 90, icon: 'blinds' },
]

export const trustBadges = [
  { icon: 'shield', titleAr: 'ضمان الجودة', titleEn: 'Quality Guaranteed' },
  { icon: 'verified_user', titleAr: 'معدات متطورة', titleEn: 'Advanced Equipment' },
  { icon: 'eco', titleAr: 'مواد آمنة 100%', titleEn: '100% Safe Products' },
  { icon: 'engineering', titleAr: 'عمالة مدربة', titleEn: 'Trained Staff' },
]

export const heroBanner = '/landing-fullwidth.png'

export const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCBYW_o3oi8VvC_j-hrzqSZwTZsDYXX_-7uaru1AZhiU80lyq15vidy6Hmlmsy4r7P-q1mv_39V1_ML85V52lVNKX_BltYBtDhncMxNNO7AEa3YC8R4x2l-RZqq3ZNEUqkj8jGTvij0-pfj7SL7SiYbPzwKiaa7_VQzN-Aerc7sFsKHUS1-B4SaSJ_WPLLlwZ2pc6iCw9LbRX383WO5FcnoA3XFqJh24jnWFM45-dBAi2MZcnR7fKZ1Zq8e58xGnIMOSGc8zmbAxnMC'

export const heroImageAr =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB-GIqxH169sGpYzeSK1um5ZMvlIskh4Zlc8c5YPZyrfjyVFJyB5z1Ys9raOG5k2y-6XEzw4ssQyoxXL5cEQePZ5jhDY3TSFHmPA4YkUSiMtw5Pe8QV4kll_3sK9dnedBV4RfSEmYiVW6l4Gyp2wVh-zbJfoqq5ug3A-PPQot6eGtaTzm7NQHaL9Bsgb8GDVHmtCtk1BOBqWvTiz4G5mTeYXUGAg_gTtWF2c1ncUCWbo5L1nOXe1h5XGL5A9ylAMawUge1kPCHnUnDb'

export const trustLogos: string[] = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBfs-Qtyv-b50aqBGcIfjrgBGCjEbCEhqQrd5MlsPp61ZvSAc8jf3m9ajjm0iR7MgORo_aqM79H2RUP8o19D4xQyw102_DSsVpJbMheptLHlytgmMh6r7VuHyuPcy2VNjA7NKchgQPWTcp6H6j06JNESD4k-2yu019dQb24HMbuR4N7E_RgGPKlrduJkH9gfaJn4j9M5nsKqPAKc-5flxcZbfSKpoTXXDyHV2bpf6ULIrcYwEgJdaNwGVIlQCVlppxkqYqCy4glKkGR',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDzTSegLrBzfHldaCjM-w1EROibBMg3LMUP1gyWT4L-iedhmArn903CHj7OdmSDxT5UyM5_ETW-yjrEG-pwyRbb3QaGc27DaBNoStKuNY2TF4CoO2OoWDeqxb-wcNPMIeScdZ4BPYkZg5L1dL0TRd10ZUuryYqGzEa0F0aZFdEOuoSjoK0nfILGXoVw06C8nPf7Zh5uTnd0kw5EZKaiF9x1ldZkzPim0c6mE5ORUGzF-FqZ1V5G5D3jtDIvwthhTcoPN5WWQwDuops5',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBRYy2W7DpuLpBCms-Gn_e5__PRfBALH497wRKw-m_ttXV6dwDdoRvakiYuBMxmVIMDQ6KiIM2hdC83dA-xjpbrUGk3fVXzcXPTnzBXFXcN9cAmhoANsG_sokuKelpAyWulB1fMUtpFAQLgqpRKbAS7XE2s5J33uAvUACmCBe4K_vZdOkV_bD81CXVa33-ZQQ4cu8xzGUOaCgfwF-Ubxi8YC1635zC3i7LMLs3JxBnfDLIyRT5C_7PqYKXWB83CFhmHwWpIcKLyKFuU',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBNgNSSRfuSnNhM3cHky8WT0ey7KHrBX0VoGg-OqV3qPpwCqmjH-Wt-3xVsEKGc7WZvgMseZxMJEB4tpVbPNhh4S1M9bxfyE9vtMq1l3ajN-I-X2nD71WP7g_VV6MupDw5iZdqqd7GcD3DFW9HoYL8RsvdeUN4PHurO8TyXjgs-eoW_qqCSbSvxLVVqzy1nyS3teFXLAHnRC8fMruz8ebvwruPY7yYOWbM64C4c-jiwgbeXPwHOkyK5MEvav_KUMv-iGjqKPQvtJrY6',
]

export const testimonialAvatars = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDrxX3ZuoDyw_BPUe1-3cY3VT-wBL5ENxCPJagxwnUa3Clf9AiDm88gm69s_AIwelpm_9_9otomHLr3wD89MFdA-1PEf4i0kV0wf_ya0DyeeCcVBy0QrvSnyGADLxAB5N12y34cruud3JrWSMVkNky97Ot92SEQ1nWUiyxZm_vmUYqtMrV_daJcGr9kOfKoK66iW_3P_tNd3tQK4eikq1ohPX1-ToQykxNkdW0UDl1Y9DI9bm23hp2ff9mgFkxx-VJHgW5J0iWR5AHN',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAMbPqluYRQctL5mOVAqVsKY5Ofco0vHwWH2xOcEIMwKMpxZNXv6PulRO8PnWx3WrB9AtU6mZch_oLoHpmBKv6O3K2-rpNdZc3XpOcke53HXMMD_iGv_bJmhlUUZlsm7UJsNc5FU13JhG8K7T12th9ZBvQQWuNr31iRd6lT5p35hycGVBRl98wDRepfDRKlHuU37DzTliUU0nCIjsYhziH_TwMLbVqPvhCJ7Lh1YDjNjyfY5fJpYMAqhdUhYa-DWIkNqX6UM3QdKhuo',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB62hn50Do5MEvjyrntPwW2b8Ip6hzQrYPPMYswRbzvhmFUVqCBF_j1o1QzLqrTKLBwWpUJfqC_s29Xc_u8H7tb9bLK8cvwBZsQ6rfqHunB_iPIUrzlIGx1SKA73H1ndlfFj_NeXmNWa45F7vYo7xCydXjfuSxmA0bXnH4MTrpDJLL7wBN92KC2IAKauQfElXIYidb4Div70kRe0IO_03NV5rOt42QJju5-BXa1biidUWBjcAjPUxzMqMatEun1202_4XK7WqhGrO5x',
]

export const galleryImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCEBHnDkVTo0ClA6LeuV_gg4sbiXjDJo5iR1RuLG4ZCLCtDN44X2DgUjWs0o1USWnnfMQmYDWDrfpQiDW9hCJdp7OTaAs5SSlqpIRCBYHLTdow6_wyrlajNoWLgJ0XGTwq14TQjkUwRuN-XutjvLCos-Ax_HTYGfGPMjwLvL4bBd5adIRhrIaHSqJFWc5vjEONklwLeqRINrmFsypK4UxoRCyyAJ0l7H_zwcK1Ndzdqu3EzTCgnptRqUnr1ThWPsF0ZSm6b0W2y7B3f',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBCUAI26b-O8fhwDWmkoZ473zk9SP5gOTnUugfeK0tozHsq5gvobTihmBbyP8qNqcoc3jHSxb3aHbRyFy9qNLtSdIZs_2HnXpT-WIMTg21YvaHKQJxY8Wsry3GihiP3H5em2jBVqrehgatgVaw7NxyGeMEJ7bw0ubZ9_95PQwrYTVHmCC8gfBGkwFF27FVyuEAAtNb0tTp1rD8COXLmbYmZHZTtcMH0DuTgDPQRVCd69z2OvTwUWG_1sm6CVfniIt9iGwi9H-VLJX3q',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBZft4N9p42pmu5Xj8fJHbcJVlJSBWTkVxhZnvqQS6xetzfpYDf7Us0EVC1S9djq4iCTN_xYbWTn6EkT88lFoDs2DnWnhiFGBHAV_NWZG1ntWi01VJkilhyv8BZNr2pry8Ar1nMvo0wApascubkkY2TgTG2kYzQEQR_u_0_tFz8VUUJfgIaLGKn1Cr-5-0SI9XX3vGBwp44cIbtatxnNklExLJhd8k-_ZF5LiperffSLxnRGFSayeczsnf0np8daIcFGBjPiMc2sPcy',
]
