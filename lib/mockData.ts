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
    imageAr:
      "/house-ar.png",
    imageEn:
      "/house-en.png",
    span: "large",
  },
  {
    id: "mosques",
    slug: "mosque-cleaning",
    icon: "mosque",
    startingPrice: 400,
    imageAr:
      "/mosque-ar.png",
    imageEn:
      "/mosque-en.png",
    span: "small",
  },
  {
    id: "ac",
    slug: "air-conditioning-cleaning",
    icon: "ac_unit",
    startingPrice: 120,
    imageAr:
      "/air-conditioner-cleaning-ar.png",
    imageEn:
      "/air-conditioner-cleaning-en.png",
    span: "small",
  },
  {
    id: "tanks",
    slug: "tank-cleaning",
    icon: "water_drop",
    startingPrice: 350,
    hasBadge: true,
    imageEn: "/tank-cleaning-en.png",
    imageAr: "/tank-cleaning-ar.png",
    span: "wide",
  },
  {
    id: "pest-control",
    slug: "pest-control",
    icon: "pest_control",
    startingPrice: 180,
    imageAr:
      "/pest-control-ar.png",
    imageEn:
      "/pest-control-en.png",
    span: "small",
  },
  {
    id: "upholstery",
    slug: "carpet-cleaning",
    icon: "dry_cleaning",
    startingPrice: 200,
    imageAr:
      "/carpets-cleaning-ar.png",
    imageEn:
      "/carpets-cleaning-en.png",
    span: "small",
  },
  {
    id: "sanitization",
    slug: "full-sanitization",
    icon: "sanitizer",
    startingPrice: 220,
    imageAr:
      "/homes-and-facilities-ar.png",
    imageEn:
      "/homes-and-facilities-en.png",
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
