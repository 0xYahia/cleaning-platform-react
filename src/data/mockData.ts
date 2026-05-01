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
  descriptionAr: string
  icon: string
  price: number
  popular?: boolean
}

export interface AddOn {
  id: string
  titleAr: string
  price: number
  icon: string
}

export interface ServiceFeature {
  titleAr: string
  descriptionAr: string
  icon: string
}

export const services: Service[] = [
  {
    id: 'home-luxury',
    slug: 'home-luxury-clean',
    titleEn: 'Home Luxury Clean',
    titleAr: 'تنظيف المنازل والفلل',
    descriptionEn:
      'Deep cleaning for villas and apartments with museum-level care for fine surfaces.',
    descriptionAr: 'تنظيف دوري وشامل للغرف، المطابخ، والواجهات بخصوصية تامة.',
    icon: 'home',
    startingPrice: 150,
    badgeEn: 'Most Popular',
    badgeAr: 'الأكثر طلباً',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjc8L2t9IX2d15SD8YFnTmD_MXllaDLftlB3Kar4kaZ9La9QPw8nA1_C7PC0AIrEE8QJq55LbV4ebq1pmyE-mlf_SRitoytwWn9oqfqAJdVJPST-AAM24PpxP__KutthzvVZluj3v4pcp4q2S_58XjP589MU4KpqioZ10aWVGGF_hGqNuZ80QDhG_GE1ZTavSBXTCjAgCMJSipKTZUEFsST9-R01yUzOjn1LYChh_p5nRmQ37otFn6-G-GdjHNzHcL11TFvt3THp89',
    span: 'large',
  },
  {
    id: 'medical-grade',
    slug: 'medical-grade',
    titleEn: 'Medical Grade',
    titleAr: 'تنظيف طبي',
    descriptionEn: 'Surgical precision disinfection for clinics and pharmacies.',
    descriptionAr: 'تعقيم بدقة جراحية للعيادات والصيدليات.',
    icon: 'medical_services',
    startingPrice: 350,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEBHnDkVTo0ClA6LeuV_gg4sbiXjDJo5iR1RuLG4ZCLCtDN44X2DgUjWs0o1USWnnfMQmYDWDrfpQiDW9hCJdp7OTaAs5SSlqpIRCBYHLTdow6_wyrlajNoWLgJ0XGTwq14TQjkUwRuN-XutjvLCos-Ax_HTYGfGPMjwLvL4bBd5adIRhrIaHSqJFWc5vjEONklwLeqRINrmFsypK4UxoRCyyAJ0l7H_zwcK1Ndzdqu3EzTCgnptRqUnr1ThWPsF0ZSm6b0W2y7B3f',
    span: 'small',
  },
  {
    id: 'office-corporate',
    slug: 'office-corporate',
    titleEn: 'Office & Corporate',
    titleAr: 'المكاتب والشركات',
    descriptionEn: 'Maintaining professional excellence for workspaces.',
    descriptionAr: 'الحفاظ على التميز المهني لبيئات العمل.',
    icon: 'corporate_fare',
    startingPrice: 250,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBZBBI1xitrMDD9qBM8XQtj01Pa1TFDjAQ6er8rKUbjQcQswHHjwtSqNap1xe-YxS7uCm77AZE8yR4-qeBiugA3tp62V8m2Wv7VL70GZcLcJjQUJO-OleGAhID4q2Vv63KSJrggcg9E9kn0bUvtDwmwA5YOHG92HdbOIkIfnYXLfxByYN1EfFCYvUAht_XRkZQMBeAbhM0IWOhYSEyd_-FZJom7E1_t8a4faoxmpx3wTIivb4Hfqby_9IbwT34Arr4D9JxbltsqsgQ7',
    span: 'small',
  },
  {
    id: 'specialized',
    slug: 'specialized-services',
    titleEn: 'Specialized Services',
    titleAr: 'الخدمات المتخصصة',
    descriptionEn:
      'Carpet deep steaming, chandelier cleaning, and pool maintenance by certified experts.',
    descriptionAr: 'تنظيف السجاد بالبخار والثريات والمسابح بأيدي خبراء معتمدين.',
    icon: 'cleaning_services',
    startingPrice: 200,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBYW_o3oi8VvC_j-hrzqSZwTZsDYXX_-7uaru1AZhiU80lyq15vidy6Hmlmsy4r7P-q1mv_39V1_ML85V52lVNKX_BltYBtDhncMxNNO7AEa3YC8R4x2l-RZqq3ZNEUqkj8jGTvij0-pfj7SL7SiYbPzwKiaa7_VQzN-Aerc7sFsKHUS1-B4SaSJ_WPLLlwZ2pc6iCw9LbRX383WO5FcnoA3XFqJh24jnWFM45-dBAi2MZcnR7fKZ1Zq8e58xGnIMOSGc8zmbAxnMC',
    span: 'wide',
  },
]

export const serviceFeatures: ServiceFeature[] = [
  {
    titleAr: 'تنظيف الأرضيات العميق',
    descriptionAr: 'شفط الغبار ومسح وتلميع كافة أنواع الأرضيات (رخام، باركيه، سيراميك).',
    icon: 'vacuum',
  },
  {
    titleAr: 'تلميع النوافذ والزجاج',
    descriptionAr: 'تنظيف شامل للنوافذ الداخلية والخارجية والمرايا بمنتجات مضادة للبقع.',
    icon: 'window',
  },
  {
    titleAr: 'تعقيم المطبخ والحمامات',
    descriptionAr: 'استخدام معقمات طبية عالية الجودة لضمان بيئة صحية لعائلتك.',
    icon: 'kitchen',
  },
  {
    titleAr: 'تعطير وتنقية الهواء',
    descriptionAr: 'رش زيوت عطرية فاخرة تعطي انطباعاً بالنظافة الفندقية المتميزة.',
    icon: 'air',
  },
]

export const servicePackages: ServicePackage[] = [
  {
    id: 'deep-residential',
    titleAr: 'التنظيف العميق (سكني)',
    descriptionAr: 'تنظيف شامل ودقيق لكافة غرف المنزل مع تعقيم الأسطح.',
    icon: 'home_repair_service',
    price: 450,
    popular: true,
  },
  {
    id: 'standard-residential',
    titleAr: 'التنظيف الدوري',
    descriptionAr: 'تنظيف منتظم للمنازل والشقق للحفاظ على بيئة نظيفة دائماً.',
    icon: 'cleaning_services',
    price: 280,
  },
  {
    id: 'office',
    titleAr: 'تنظيف المكاتب',
    descriptionAr: 'باقة متخصصة للمكاتب وبيئات العمل لضمان الإنتاجية.',
    icon: 'corporate_fare',
    price: 600,
  },
  {
    id: 'post-construction',
    titleAr: 'ما بعد التشطيب',
    descriptionAr: 'إزالة الغبار والمخلفات بعد أعمال البناء والتشطيب.',
    icon: 'construction',
    price: 750,
  },
]

export const addOns: AddOn[] = [
  { id: 'windows', titleAr: 'تنظيف نوافذ خارجية', price: 80, icon: 'window' },
  { id: 'carpet', titleAr: 'تنظيف سجاد بالبخار', price: 120, icon: 'cleaning_bucket' },
  { id: 'fridge', titleAr: 'تنظيف داخلي للثلاجة', price: 60, icon: 'kitchen' },
  { id: 'oven', titleAr: 'تنظيف الفرن العميق', price: 70, icon: 'oven_gen' },
]

export const trustLogos: string[] = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBfs-Qtyv-b50aqBGcIfjrgBGCjEbCEhqQrd5MlsPp61ZvSAc8jf3m9ajjm0iR7MgORo_aqM79H2RUP8o19D4xQyw102_DSsVpJbMheptLHlytgmMh6r7VuHyuPcy2VNjA7NKchgQPWTcp6H6j06JNESD4k-2yu019dQb24HMbuR4N7E_RgGPKlrduJkH9gfaJn4j9M5nsKqPAKc-5flxcZbfSKpoTXXDyHV2bpf6ULIrcYwEgJdaNwGVIlQCVlppxkqYqCy4glKkGR',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDzTSegLrBzfHldaCjM-w1EROibBMg3LMUP1gyWT4L-iedhmArn903CHj7OdmSDxT5UyM5_ETW-yjrEG-pwyRbb3QaGc27DaBNoStKuNY2TF4CoO2OoWDeqxb-wcNPMIeScdZ4BPYkZg5L1dL0TRd10ZUuryYqGzEa0F0aZFdEOuoSjoK0nfILGXoVw06C8nPf7Zh5uTnd0kw5EZKaiF9x1ldZkzPim0c6mE5ORUGzF-FqZ1V5G5D3jtDIvwthhTcoPN5WWQwDuops5',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBRYy2W7DpuLpBCms-Gn_e5__PRfBALH497wRKw-m_ttXV6dwDdoRvakiYuBMxmVIMDQ6KiIM2hdC83dA-xjpbrUGk3fVXzcXPTnzBXFXcN9cAmhoANsG_sokuKelpAyWulB1fMUtpFAQLgqpRKbAS7XE2s5J33uAvUACmCBe4K_vZdOkV_bD81CXVa33-ZQQ4cu8xzGUOaCgfwF-Ubxi8YC1635zC3i7LMLs3JxBnfDLIyRT5C_7PqYKXWB83CFhmHwWpIcKLyKFuU',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBNgNSSRfuSnNhM3cHky8WT0ey7KHrBX0VoGg-OqV3qPpwCqmjH-Wt-3xVsEKGc7WZvgMseZxMJEB4tpVbPNhh4S1M9bxfyE9vtMq1l3ajN-I-X2nD71WP7g_VV6MupDw5iZdqqd7GcD3DFW9HoYL8RsvdeUN4PHurO8TyXjgs-eoW_qqCSbSvxLVVqzy1nyS3teFXLAHnRC8fMruz8ebvwruPY7yYOWbM64C4c-jiwgbeXPwHOkyK5MEvav_KUMv-iGjqKPQvtJrY6',
]

export const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCBYW_o3oi8VvC_j-hrzqSZwTZsDYXX_-7uaru1AZhiU80lyq15vidy6Hmlmsy4r7P-q1mv_39V1_ML85V52lVNKX_BltYBtDhncMxNNO7AEa3YC8R4x2l-RZqq3ZNEUqkj8jGTvij0-pfj7SL7SiYbPzwKiaa7_VQzN-Aerc7sFsKHUS1-B4SaSJ_WPLLlwZ2pc6iCw9LbRX383WO5FcnoA3XFqJh24jnWFM45-dBAi2MZcnR7fKZ1Zq8e58xGnIMOSGc8zmbAxnMC'

export const heroImageAr =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB-GIqxH169sGpYzeSK1um5ZMvlIskh4Zlc8c5YPZyrfjyVFJyB5z1Ys9raOG5k2y-6XEzw4ssQyoxXL5cEQePZ5jhDY3TSFHmPA4YkUSiMtw5Pe8QV4kll_3sK9dnedBV4RfSEmYiVW6l4Gyp2wVh-zbJfoqq5ug3A-PPQot6eGtaTzm7NQHaL9Bsgb8GDVHmtCtk1BOBqWvTiz4G5mTeYXUGAg_gTtWF2c1ncUCWbo5L1nOXe1h5XGL5A9ylAMawUge1kPCHnUnDb'

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
