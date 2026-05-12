export interface Service {
  id: string;
  slug: string;
  icon: string;
  startingPrice: number;
  imageAr?: string;
  imageEn?: string;
  image?: string;
  span?: "large" | "wide" | "small";
  hasBadge?: boolean;
}

export interface ServicePackage {
  id: string;
  icon: string;
  price: number;
  popular?: boolean;
}

export interface AddOn {
  id: string;
  price: number;
  icon: string;
}

export interface SubscriptionPlan {
  id: "monthly" | "yearly";
  highlight?: boolean;
}

export const services: Service[] = [
  {
    id: "home-cleaning",
    slug: "home-cleaning",
    icon: "home",
    startingPrice: 250,
    hasBadge: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjc8L2t9IX2d15SD8YFnTmD_MXllaDLftlB3Kar4kaZ9La9QPw8nA1_C7PC0AIrEE8QJq55LbV4ebq1pmyE-mlf_SRitoytwWn9oqfqAJdVJPST-AAM24PpxP__KutthzvVZluj3v4pcp4q2S_58XjP589MU4KpqioZ10aWVGGF_hGqNuZ80QDhG_GE1ZTavSBXTCjAgCMJSipKTZUEFsST9-R01yUzOjn1LYChh_p5nRmQ37otFn6-G-GdjHNzHcL11TFvt3THp89",
    span: "large",
  },
  {
    id: "mosques",
    slug: "mosque-cleaning",
    icon: "mosque",
    startingPrice: 400,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEBHnDkVTo0ClA6LeuV_gg4sbiXjDJo5iR1RuLG4ZCLCtDN44X2DgUjWs0o1USWnnfMQmYDWDrfpQiDW9hCJdp7OTaAs5SSlqpIRCBYHLTdow6_wyrlajNoWLgJ0XGTwq14TQjkUwRuN-XutjvLCos-Ax_HTYGfGPMjwLvL4bBd5adIRhrIaHSqJFWc5vjEONklwLeqRINrmFsypK4UxoRCyyAJ0l7H_zwcK1Ndzdqu3EzTCgnptRqUnr1ThWPsF0ZSm6b0W2y7B3f",
    span: "small",
  },
  {
    id: "ac",
    slug: "ac-cleaning",
    icon: "ac_unit",
    startingPrice: 120,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZBBI1xitrMDD9qBM8XQtj01Pa1TFDjAQ6er8rKUbjQcQswHHjwtSqNap1xe-YxS7uCm77AZE8yR4-qeBiugA3tp62V8m2Wv7VL70GZcLcJjQUJO-OleGAhID4q2Vv63KSJrggcg9E9kn0bUvtDwmwA5YOHG92HdbOIkIfnYXLfxByYN1EfFCYvUAht_XRkZQMBeAbhM0IWOhYSEyd_-FZJom7E1_t8a4faoxmpx3wTIivb4Hfqby_9IbwT34Arr4D9JxbltsqsgQ7",
    span: "small",
  },
  {
    id: "tanks",
    slug: "tank-cleaning",
    icon: "water_drop",
    startingPrice: 350,
    hasBadge: true,
    imageEn: "/landing-fullwidth-en.png",
    imageAr: "/landing-fullwidth-ar.png",
    span: "wide",
  },
  {
    id: "pest-control",
    slug: "pest-control",
    icon: "pest_control",
    startingPrice: 180,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBYW_o3oi8VvC_j-hrzqSZwTZsDYXX_-7uaru1AZhiU80lyq15vidy6Hmlmsy4r7P-q1mv_39V1_ML85V52lVNKX_BltYBtDhncMxNNO7AEa3YC8R4x2l-RZqq3ZNEUqkj8jGTvij0-pfj7SL7SiYbPzwKiaa7_VQzN-Aerc7sFsKHUS1-B4SaSJ_WPLLlwZ2pc6iCw9LbRX383WO5FcnoA3XFqJh24jnWFM45-dBAi2MZcnR7fKZ1Zq8e58xGnIMOSGc8zmbAxnMC",
    span: "small",
  },
  {
    id: "upholstery",
    slug: "upholstery-steam",
    icon: "dry_cleaning",
    startingPrice: 200,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-GIqxH169sGpYzeSK1um5ZMvlIskh4Zlc8c5YPZyrfjyVFJyB5z1Ys9raOG5k2y-6XEzw4ssQyoxXL5cEQePZ5jhDY3TSFHmPA4YkUSiMtw5Pe8QV4kll_3sK9dnedBV4RfSEmYiVW6l4Gyp2wVh-zbJfoqq5ug3A-PPQot6eGtaTzm7NQHaL9Bsgb8GDVHmtCtk1BOBqWvTiz4G5mTeYXUGAg_gTtWF2c1ncUCWbo5L1nOXe1h5XGL5A9ylAMawUge1kPCHnUnDb",
    span: "small",
  },
  {
    id: "sanitization",
    slug: "full-sanitization",
    icon: "sanitizer",
    startingPrice: 220,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBYW_o3oi8VvC_j-hrzqSZwTZsDYXX_-7uaru1AZhiU80lyq15vidy6Hmlmsy4r7P-q1mv_39V1_ML85V52lVNKX_BltYBtDhncMxNNO7AEa3YC8R4x2l-RZqq3ZNEUqkj8jGTvij0-pfj7SL7SiYbPzwKiaa7_VQzN-Aerc7sFsKHUS1-B4SaSJ_WPLLlwZ2pc6iCw9LbRX383WO5FcnoA3XFqJh24jnWFM45-dBAi2MZcnR7fKZ1Zq8e58xGnIMOSGc8zmbAxnMC",
    span: "small",
  },
];

export const subscriptionPlans: SubscriptionPlan[] = [
  { id: "monthly" },
  { id: "yearly", highlight: true },
];

export const paymentOptions = [
  { id: "account", icon: "account_balance" },
  { id: "tabby", icon: "splitscreen" },
  { id: "tamara", icon: "view_week" },
] as const;

export const loyaltyBenefitIcons = [
  "redeem",
  "card_giftcard",
  "sell",
  "celebration",
] as const;

export const trustBadges = [
  { icon: "shield" },
  { icon: "verified_user" },
  { icon: "eco" },
  { icon: "engineering" },
] as const;

export const servicePackages: ServicePackage[] = [
  { id: "bundle-home-sanitize", icon: "home_repair_service", price: 450, popular: true },
  { id: "home-cleaning", icon: "cleaning_services", price: 280 },
  { id: "tanks-full", icon: "water_drop", price: 600 },
  { id: "ac-bundle", icon: "ac_unit", price: 220 },
];

export const addOns: AddOn[] = [
  { id: "sanitize", price: 120, icon: "sanitizer" },
  { id: "carpet", price: 120, icon: "cleaning_bucket" },
  { id: "pest", price: 100, icon: "pest_control" },
  { id: "curtains", price: 90, icon: "blinds" },
];

export const heroBanner: Record<"ar" | "en", string> = {
  ar: "/landing-ar.png",
  en: "/landing-en.png",
};

export const galleryImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCEBHnDkVTo0ClA6LeuV_gg4sbiXjDJo5iR1RuLG4ZCLCtDN44X2DgUjWs0o1USWnnfMQmYDWDrfpQiDW9hCJdp7OTaAs5SSlqpIRCBYHLTdow6_wyrlajNoWLgJ0XGTwq14TQjkUwRuN-XutjvLCos-Ax_HTYGfGPMjwLvL4bBd5adIRhrIaHSqJFWc5vjEONklwLeqRINrmFsypK4UxoRCyyAJ0l7H_zwcK1Ndzdqu3EzTCgnptRqUnr1ThWPsF0ZSm6b0W2y7B3f",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBCUAI26b-O8fhwDWmkoZ473zk9SP5gOTnUugfeK0tozHsq5gvobTihmBbyP8qNqcoc3jHSxb3aHbRyFy9qNLtSdIZs_2HnXpT-WIMTg21YvaHKQJxY8Wsry3GihiP3H5em2jBVqrehgatgVaw7NxyGeMEJ7bw0ubZ9_95PQwrYTVHmCC8gfBGkwFF27FVyuEAAtNb0tTp1rD8COXLmbYmZHZTtcMH0DuTgDPQRVCd69z2OvTwUWG_1sm6CVfniIt9iGwi9H-VLJX3q",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBZft4N9p42pmu5Xj8fJHbcJVlJSBWTkVxhZnvqQS6xetzfpYDf7Us0EVC1S9djq4iCTN_xYbWTn6EkT88lFoDs2DnWnhiFGBHAV_NWZG1ntWi01VJkilhyv8BZNr2pry8Ar1nMvo0wApascubkkY2TgTG2kYzQEQR_u_0_tFz8VUUJfgIaLGKn1Cr-5-0SI9XX3vGBwp44cIbtatxnNklExLJhd8k-_ZF5LiperffSLxnRGFSayeczsnf0np8daIcFGBjPiMc2sPcy",
];
