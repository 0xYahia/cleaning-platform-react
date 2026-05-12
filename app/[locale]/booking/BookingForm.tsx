"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import {
  isValidPhoneNumber,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js";
import { Icon } from "@/components/Icon";
import { addOns, servicePackages } from "@/lib/mockData";
import { localePath } from "@/lib/locale";
import type { Locale } from "@/i18n/routing";
import Image from "next/image";

const STEP_KEYS = ["service", "details", "payment"] as const;
type StepKey = (typeof STEP_KEYS)[number];
type StepNumber = 1 | 2 | 3;

const STEP_ICONS: Record<StepKey, string> = {
  service: "cleaning_services",
  details: "person",
  payment: "payments",
};

const WHATSAPP_NUMBER = "966554918518";
const BANK_NAME = "Riyad Bank";
const BANK_ACCOUNT = "3225519979940";
const BANK_IBAN = "SA1720000003225519979940";

const BOOKING_HOURS = Array.from({ length: 15 }, (_, i) => i + 8);

function toDateInputValue(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function parseDateInput(v: string): Date | null {
  if (!v) return null;
  const parts = v.split("-").map(Number);
  if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) return null;
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatHour(h: number, isAr: boolean) {
  const ampm = h < 12 ? (isAr ? "ص" : "AM") : isAr ? "م" : "PM";
  const displayH = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${displayH.toString().padStart(2, "0")}:00 ${ampm}`;
}

interface CalendarProps {
  value: string;
  onChange: (v: string) => void;
  locale: string;
  isAr: boolean;
}

function Calendar({ value, onChange, locale, isAr }: CalendarProps) {
  const intlLocale = isAr ? "ar" : "en";
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [view, setView] = useState(() => {
    const d = parseDateInput(value) ?? new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });

  const year = view.getFullYear();
  const month = view.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = new Date(year, month, 1).getDay();

  const weekdayLabels = useMemo(() => {
    const fmt = new Intl.DateTimeFormat(intlLocale, { weekday: "short" });
    return Array.from({ length: 7 }, (_, i) =>
      fmt.format(new Date(2024, 0, 7 + i))
    );
  }, [intlLocale]);

  const monthLabel = useMemo(
    () =>
      new Intl.DateTimeFormat(intlLocale, {
        month: "long",
        year: "numeric",
      }).format(view),
    [intlLocale, view]
  );

  const selected = parseDateInput(value);
  const cells: ({ day: number; date: Date } | null)[] = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, date: new Date(year, month, d) });
  }

  const canGoPrev =
    new Date(year, month, 1).getTime() >
    new Date(today.getFullYear(), today.getMonth(), 1).getTime();

  return (
    <div
      className="bg-surface-container-lowest rounded-2xl border border-surface-variant/50 p-4 sm:p-5 shadow-soft"
      lang={locale}
    >
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={() => canGoPrev && setView(new Date(year, month - 1, 1))}
          disabled={!canGoPrev}
          className={`p-2 rounded-lg transition-colors ${canGoPrev
            ? "text-primary hover:bg-primary/10"
            : "text-outline/40 cursor-not-allowed"
            }`}
          aria-label="prev"
        >
          <Icon name={isAr ? "chevron_right" : "chevron_left"} />
        </button>
        <span className="font-bold text-primary capitalize">{monthLabel}</span>
        <button
          type="button"
          onClick={() => setView(new Date(year, month + 1, 1))}
          className="p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
          aria-label="next"
        >
          <Icon name={isAr ? "chevron_left" : "chevron_right"} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekdayLabels.map((label, i) => (
          <span key={i} className="text-center text-xs font-bold text-outline py-1">
            {label}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((cell, i) => {
          if (!cell) return <span key={`empty-${i}`} />;
          const isPast = cell.date < today;
          const isToday = isSameDay(cell.date, today);
          const isSelected = Boolean(selected && isSameDay(cell.date, selected));
          return (
            <button
              key={cell.day}
              type="button"
              disabled={isPast}
              onClick={() => onChange(toDateInputValue(cell.date))}
              className={`aspect-square rounded-lg text-sm font-medium transition-all ${isSelected
                ? "bg-primary text-white shadow-md ring-2 ring-primary/20"
                : isPast
                  ? "text-outline/40 cursor-not-allowed line-through decoration-1"
                  : isToday
                    ? "bg-primary/10 text-primary border border-primary/40 hover:bg-primary/20"
                    : "text-on-surface hover:bg-primary/5"
                }`}
            >
              {cell.day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface TimeGridProps {
  date: string;
  value: number | null;
  onChange: (h: number) => void;
  isAr: boolean;
}

function TimeGrid({ date, value, onChange, isAr }: TimeGridProps) {
  const now = new Date();
  const selectedDate = parseDateInput(date);
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  const isToday = Boolean(selectedDate && isSameDay(selectedDate, todayDate));
  const minHour = isToday ? now.getHours() + 1 : 0;

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
      {BOOKING_HOURS.map((h) => {
        const disabled = !date || h < minHour;
        const active = value === h;
        return (
          <button
            key={h}
            type="button"
            disabled={disabled}
            onClick={() => onChange(h)}
            className={`py-2.5 px-2 rounded-lg text-sm font-medium transition-all ${active
              ? "bg-primary text-white shadow-md ring-2 ring-primary/20"
              : disabled
                ? "bg-surface-container-low/40 text-outline/40 cursor-not-allowed"
                : "bg-surface-container-low text-on-surface hover:bg-primary/10 border border-surface-variant/40"
              }`}
          >
            {formatHour(h, isAr)}
          </button>
        );
      })}
    </div>
  );
}

export function BookingForm() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const isAr = locale === "ar";

  const [step, setStep] = useState<StepNumber>(2);

  const [packageId, setPackageId] = useState<string>(servicePackages[0].id);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [date, setDate] = useState<string>("");
  const [timeHour, setTimeHour] = useState<number | null>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+966");
  const [phoneCountry, setPhoneCountry] = useState<CountryCode>("SA");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [building, setBuilding] = useState("");
  const [notes, setNotes] = useState("");

  const [paymentMethod, setPaymentMethod] = useState<"qr" | "cod" | "">("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!date || timeHour === null) return;
    const now = new Date();
    const todayStr = toDateInputValue(now);
    if (date === todayStr && timeHour <= now.getHours()) {
      setTimeHour(null);
    }
  }, [date, timeHour]);

  const timeLabel = timeHour !== null ? formatHour(timeHour, isAr) : "";

  const [copiedField, setCopiedField] = useState<"account" | "iban" | null>(null);

  const copyToClipboard = async (value: string, field: "account" | "iban") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1800);
    } catch {
      // ignore
    }
  };

  const [error, setError] = useState("");

  const canContinueStep1 = Boolean(packageId && date && timeHour !== null);
  const phoneValid = useMemo(
    () => Boolean(phone) && isValidPhoneNumber(phone, phoneCountry),
    [phone, phoneCountry]
  );
  const canContinueStep2 = Boolean(
    name.trim() && phoneValid && city.trim() && street.trim()
  );
  const formattedPhone = useMemo(() => {
    const parsed = parsePhoneNumberFromString(phone, phoneCountry);
    return parsed?.formatInternational() ?? phone;
  }, [phone, phoneCountry]);
  const canSubmit =
    name.trim() && phoneValid && city.trim() && street.trim() && building.trim();

  const currentPackage = useMemo(
    () => servicePackages.find((p) => p.id === packageId)!,
    [packageId]
  );

  const addOnTotal = useMemo(
    () =>
      selectedAddOns.reduce(
        (sum, id) => sum + (addOns.find((a) => a.id === id)?.price ?? 0),
        0
      ),
    [selectedAddOns]
  );

  const total = currentPackage.price + addOnTotal;

  const formatPrice = (n: number) =>
    isAr ? `${n} ${t("common.currency")}` : `${t("common.currency")} ${n}`;

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const textAlign = isAr ? "text-right" : "text-left";

  const goToStep = (target: StepNumber) => {
    setError("");
    if (target <= step) {
      setStep(target);
      return;
    }
    if (target === 2 && !canContinueStep1) {
      setError(t("booking.selectDateTimeFirst"));
      return;
    }
    if (target === 3 && !canContinueStep2) {
      setError(t("booking.fillContactFirst"));
      return;
    }
    setStep(target);
  };

  const goNext = () => {
    setError("");
    if (step === 1) {
      if (!canContinueStep1) {
        setError(t("booking.selectDateTimeFirst"));
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!canContinueStep2) {
        setError(t("booking.fillContactFirst"));
        return;
      }
      setStep(3);
    }
  };

  const goPrev = () => {
    setError("");
    if (step > 1) setStep((step - 1) as StepNumber);
  };

  const buildMessage = () => {
    const lines = [
      `${t("booking.modal.title")}`,
      ``,
      `👤 ${t("booking.modal.fullName")}: ${name}`,
      `📞 ${t("booking.modal.phone")}: ${formattedPhone}`,
      `📍 ${t("booking.modal.address")}: ${[city, district, street, building]
        .filter(Boolean)
        .join(" - ")}`,
    ];
    if (notes.trim()) lines.push(`📝 ${t("booking.modal.notes")}: ${notes}`);
    // lines.push("");
    // lines.push(`📦 ${t("booking.summary")}`);
    // lines.push(
    //   `• ${t(`booking.packages.${currentPackage.id}.title`)} — ${formatPrice(currentPackage.price)}`
    // );
    // selectedAddOns.forEach((id) => {
    //   const a = addOns.find((x) => x.id === id)!;
    //   lines.push(`• ${t(`booking.addOns.${a.id}`)} — ${formatPrice(a.price)}`);
    // });
    // lines.push(`📅 ${t("booking.date")}: ${date || "—"}`);
    // lines.push(`⏰ ${t("booking.time")}: ${timeLabel || "—"}`);
    // lines.push(`💰 ${t("booking.total")}: ${formatPrice(total)}`);
    // lines.push("");
    // lines.push(
    //   `💳 ${t("booking.payment.method")}: ${t(
    //     paymentMethod === "qr" ? "booking.payment.qr" : "booking.payment.cod"
    //   )}`
    // );
    // if (paymentMethod === "qr") {
    //   lines.push(`📎 ${t("booking.payment.attachInstruction")}`);
    // }
    return lines.join("\n");
  };

  // const handleSubmit = () => {
  //   setError("");
  //   if (!paymentMethod) {
  //     setError(t("booking.payment.choosePaymentFirst"));
  //     return;
  //   }
  //   if (paymentMethod === "qr" && !screenshot) {
  //     setError(t("booking.payment.screenshotRequired"));
  //     return;
  //   }
  //   const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
  //   window.open(url, "_blank", "noopener,noreferrer");
  //   setSubmitted(true);
  // };
  const handleSubmit = () => {
    setError("");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const pageTitle =
    step === 1
      ? t("booking.title")
      : step === 2
        ? t("booking.detailsTitle")
        : t("booking.paymentTitle");

  const pageDescription =
    step === 1
      ? t("booking.description")
      : step === 2
        ? t("booking.detailsDescription")
        : t("booking.paymentDescription");

  return (
    <div className="px-4 sm:px-6 max-w-7xl mx-auto pb-xl">
      <div className="mb-lg">
        {/* <div className="flex items-center justify-between mb-8 max-w-3xl overflow-x-auto">
          {STEP_KEYS.map((key, idx) => {
            const stepNum = (idx + 1) as StepNumber;
            const isActive = stepNum === step;
            const isCompleted = stepNum < step;
            const canClick =
              stepNum <= step ||
              (stepNum === 2 && canContinueStep1) ||
              (stepNum === 3 && canContinueStep1 && canContinueStep2);

            return (
              <div key={key} className="flex items-center flex-1 last:flex-initial min-w-0">
                <button
                  type="button"
                  onClick={() => canClick && goToStep(stepNum)}
                  disabled={!canClick}
                  className={`flex flex-col items-center gap-2 min-w-0 ${canClick ? "cursor-pointer" : "cursor-not-allowed"
                    }`}
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${isActive
                        ? "bg-primary-container text-white shadow-lg ring-4 ring-primary/15"
                        : isCompleted
                          ? "bg-primary text-white shadow-md"
                          : "bg-surface-container text-outline"
                      }`}
                  >
                    <Icon name={isCompleted ? "check" : STEP_ICONS[key]} filled={isCompleted} />
                  </div>
                  <span
                    className={`font-heading-sm text-xs sm:text-sm whitespace-nowrap ${isActive || isCompleted ? "font-bold text-primary" : "text-outline"
                      }`}
                  >
                    {t(`booking.steps.${key}`)}
                  </span>
                </button>
                {idx < STEP_KEYS.length - 1 && (
                  <div
                    className={`h-[2px] flex-1 mx-2 sm:mx-4 -mt-8 transition-colors ${stepNum < step ? "bg-primary" : "bg-surface-dim"
                      }`}
                  />
                )}
              </div>
            );
          })}
        </div> */}
        <h1 className="font-display-md text-2xl sm:text-3xl md:text-display-md text-primary mb-3 sm:mb-4">
          {pageTitle}
        </h1>
        <p className="text-base sm:text-body-lg text-outline max-w-2xl">{pageDescription}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-lg items-start">
        <div className="lg:col-span-8 space-y-xl">
          {/* {step === 1 && (
            <>
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="auto_awesome" className="text-primary" />
                  <h2 className="font-heading-sm text-primary">{t("booking.packagesHeading")}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  {servicePackages.map((pkg) => {
                    const isActive = pkg.id === packageId;
                    return (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setPackageId(pkg.id)}
                        className={`${textAlign} bg-surface-container-lowest p-5 sm:p-6 rounded-xl shadow-soft transition-all cursor-pointer ${isActive
                          ? "border-2 border-primary ring-4 ring-primary/5"
                          : "border border-surface-variant/50 hover:border-primary"
                          }`}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <Icon name={pkg.icon} className="text-primary text-3xl" />
                          {pkg.popular && (
                            <span className="bg-secondary-container/20 text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold">
                              {t("booking.mostPopular")}
                            </span>
                          )}
                        </div>
                        <h3 className="font-heading-sm mb-2">{t(`booking.packages.${pkg.id}.title`)}</h3>
                        <p className="text-body-md text-outline mb-6 h-12 overflow-hidden">
                          {t(`booking.packages.${pkg.id}.description`)}
                        </p>
                        <div className="flex justify-between items-end border-t border-surface-container pt-4">
                          <div>
                            <span className="block text-xs text-outline">
                              {t("common.startingAt")}
                            </span>
                            <span className="text-xl font-bold text-primary">
                              {formatPrice(pkg.price)}
                            </span>
                          </div>
                          <Icon
                            name={isActive ? "check_circle" : "radio_button_unchecked"}
                            className={isActive ? "text-primary" : "text-outline"}
                            filled={isActive}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="add_circle" className="text-primary" />
                  <h2 className="font-heading-sm text-primary">{t("booking.addOnsHeading")}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  {addOns.map((addOn) => {
                    const isActive = selectedAddOns.includes(addOn.id);
                    return (
                      <button
                        key={addOn.id}
                        type="button"
                        onClick={() => toggleAddOn(addOn.id)}
                        className={`flex items-center justify-between bg-white p-5 rounded-xl border transition-all ${textAlign} ${isActive
                          ? "border-primary bg-primary/5"
                          : "border-surface-variant/50 hover:border-primary"
                          }`}
                      >
                        <span className="flex items-center gap-3">
                          <Icon name={addOn.icon} className="text-primary text-2xl" />
                          <span>
                            <span className="block font-bold text-primary">
                              {t(`booking.addOns.${addOn.id}`)}
                            </span>
                            <span className="block text-sm text-outline">
                              + {formatPrice(addOn.price)}
                            </span>
                          </span>
                        </span>
                        <Icon
                          name={isActive ? "check_box" : "check_box_outline_blank"}
                          className="text-primary"
                          filled={isActive}
                        />
                      </button>
                    );
                  })}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="calendar_month" className="text-primary" />
                  <h2 className="font-heading-sm text-primary">{t("booking.dateTimeHeading")}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className={`flex flex-col gap-3 ${textAlign}`}>
                    <span className="font-bold text-primary">{t("booking.chooseDate")}</span>
                    <Calendar value={date} onChange={setDate} locale={locale} isAr={isAr} />
                  </div>
                  <div className={`flex flex-col gap-3 ${textAlign}`}>
                    <span className="font-bold text-primary">{t("booking.chooseTime")}</span>
                    <div className="bg-surface-container-lowest rounded-2xl border border-surface-variant/50 p-4 sm:p-5 shadow-soft">
                      {date ? (
                        <TimeGrid date={date} value={timeHour} onChange={setTimeHour} isAr={isAr} />
                      ) : (
                        <div className="flex flex-col items-center justify-center py-10 text-outline text-sm gap-2">
                          <Icon name="event" className="text-3xl text-primary/40" />
                          <span>{t("booking.pickDateFirst")}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </>
          )} */}

          {step === 2 && (
            <section className="bg-white rounded-2xl p-5 sm:p-8 shadow-soft border border-surface-variant/50 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="person" className="text-primary" />
                <h2 className="font-heading-sm text-primary">{t("booking.contactHeading")}</h2>
              </div>

              <label className={`flex flex-col gap-2 ${textAlign}`}>
                <span className="text-sm font-bold text-primary">{t("booking.modal.fullName")}</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("booking.modal.fullNamePlaceholder")}
                  className="bg-surface-container-low rounded-lg px-4 py-3 border border-surface-variant/50 focus:border-primary focus:outline-none"
                />
              </label>

              <div className={`flex flex-col gap-2 ${textAlign}`}>
                <span className="text-sm font-bold text-primary">{t("booking.modal.phone")}</span>
                <PhoneInput
                  defaultCountry="sa"
                  value={phone}
                  onChange={(value, meta) => {
                    setPhone(value);
                    setPhoneCountry(meta.country.iso2.toUpperCase() as CountryCode);
                  }}
                  onBlur={() => setPhoneTouched(true)}
                  inputClassName="!w-full !bg-surface-container-low !border !border-surface-variant/50 focus:!border-primary !rounded-lg !px-4 !py-3 !h-auto !text-base"
                  countrySelectorStyleProps={{
                    buttonClassName:
                      "!bg-surface-container-low !border !border-surface-variant/50 !rounded-lg !px-2 !py-3 !h-auto",
                    dropdownStyleProps: {
                      className: "!max-w-[min(18rem,calc(100vw-2rem))]",
                      style: isAr ? { left: "auto", right: 0 } : { left: 0, right: "auto" },
                    },
                  }}
                  className="!w-full !flex !gap-2"
                  forceDialCode
                />
                {phoneTouched && phone && !phoneValid && (
                  <span className="text-xs text-red-600 flex items-center gap-1">
                    <Icon name="error" className="text-sm" />
                    {t("booking.invalidPhone")}
                  </span>
                )}
                {phoneValid && (
                  <span className="text-xs text-emerald-700 flex items-center gap-1">
                    <Icon name="check_circle" className="text-sm" />
                    {formattedPhone}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className={`flex flex-col gap-2 ${textAlign}`}>
                  <span className="text-sm font-bold text-primary">{t("booking.city")}</span>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={t("booking.cityPlaceholder")}
                    className="bg-surface-container-low rounded-lg px-4 py-3 border border-surface-variant/50 focus:border-primary focus:outline-none"
                  />
                </label>
                <label className={`flex flex-col gap-2 ${textAlign}`}>
                  <span className="text-sm font-bold text-primary">{t("booking.district")}</span>
                  <input
                    type="text"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder={t("booking.districtPlaceholder")}
                    className="bg-surface-container-low rounded-lg px-4 py-3 border border-surface-variant/50 focus:border-primary focus:outline-none"
                  />
                </label>
                <label className={`flex flex-col gap-2 ${textAlign}`}>
                  <span className="text-sm font-bold text-primary">{t("booking.street")}</span>
                  <input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    placeholder={t("booking.streetPlaceholder")}
                    className="bg-surface-container-low rounded-lg px-4 py-3 border border-surface-variant/50 focus:border-primary focus:outline-none"
                  />
                </label>
                <label className={`flex flex-col gap-2 ${textAlign}`}>
                  <span className="text-sm font-bold text-primary">{t("booking.building")}</span>
                  <input
                    type="text"
                    value={building}
                    onChange={(e) => setBuilding(e.target.value)}
                    placeholder={t("booking.buildingPlaceholder")}
                    className="bg-surface-container-low rounded-lg px-4 py-3 border border-surface-variant/50 focus:border-primary focus:outline-none"
                  />
                </label>
              </div>

              <label className={`flex flex-col gap-2 ${textAlign}`}>
                <span className="text-sm font-bold text-primary">{t("booking.modal.notes")}</span>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t("booking.modal.notesPlaceholder")}
                  rows={2}
                  className="bg-surface-container-low rounded-lg px-4 py-3 border border-surface-variant/50 focus:border-primary focus:outline-none resize-none"
                />
              </label>
            </section>
          )}

          {/* {step === 3 && (
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Icon name="payments" className="text-primary" />
                <h2 className="font-heading-sm text-primary">{t("booking.payment.method")}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                <button
                  type="button"
                  onClick={() => {
                    setPaymentMethod("qr");
                    setError("");
                  }}
                  className={`${textAlign} bg-white p-5 rounded-xl border transition-all ${paymentMethod === "qr"
                    ? "border-2 border-primary ring-4 ring-primary/5"
                    : "border-surface-variant/50 hover:border-primary"
                    }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <Icon name="qr_code_2" className="text-primary text-3xl" />
                    <Icon
                      name={paymentMethod === "qr" ? "check_circle" : "radio_button_unchecked"}
                      className={paymentMethod === "qr" ? "text-primary" : "text-outline"}
                      filled={paymentMethod === "qr"}
                    />
                  </div>
                  <h3 className="font-bold text-primary mb-1">{t("booking.payment.qr")}</h3>
                  <p className="text-sm text-outline">{t("booking.payment.qrDesc")}</p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setPaymentMethod("cod");
                    setError("");
                  }}
                  className={`${textAlign} bg-white p-5 rounded-xl border transition-all ${paymentMethod === "cod"
                    ? "border-2 border-primary ring-4 ring-primary/5"
                    : "border-surface-variant/50 hover:border-primary"
                    }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <Icon name="local_shipping" className="text-primary text-3xl" />
                    <Icon
                      name={paymentMethod === "cod" ? "check_circle" : "radio_button_unchecked"}
                      className={paymentMethod === "cod" ? "text-primary" : "text-outline"}
                      filled={paymentMethod === "cod"}
                    />
                  </div>
                  <h3 className="font-bold text-primary mb-1">{t("booking.payment.cod")}</h3>
                  <p className="text-sm text-outline">{t("booking.payment.codDesc")}</p>
                </button>
              </div>

              {paymentMethod === "qr" && (
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-soft border border-surface-variant/50 space-y-5">
                  <div className={textAlign}>
                    <h3 className="font-bold text-primary mb-1">
                      {t("booking.payment.scanQrTitle")}
                    </h3>
                    <p className="text-sm text-outline">{t("booking.payment.scanQrDesc")}</p>
                  </div>

                  <div className="bg-surface-container-low/60 rounded-xl border border-surface-variant/50 p-4 space-y-3">
                    <div
                      className={`flex items-center gap-2 ${textAlign} ${isAr ? "flex-row-reverse" : ""}`}
                    >
                      <Icon name="account_balance" className="text-primary text-xl" />
                      <span className="font-bold text-primary">{BANK_NAME}</span>
                    </div>

                    {(["account", "iban"] as const).map((field) => {
                      const value = field === "account" ? BANK_ACCOUNT : BANK_IBAN;
                      const label = t(`booking.payment.${field}`);
                      const isCopied = copiedField === field;
                      return (
                        <div key={field} className={`flex flex-col gap-1 ${textAlign}`}>
                          <span className="text-xs text-outline font-medium">{label}</span>
                          <div
                            className={`flex items-center gap-2 bg-white rounded-lg border border-surface-variant/50 px-3 py-2 ${isAr ? "flex-row-reverse" : ""
                              }`}
                          >
                            <span
                              dir="ltr"
                              className="flex-1 font-mono text-sm sm:text-base text-on-surface tracking-wider truncate"
                            >
                              {value}
                            </span>
                            <button
                              type="button"
                              onClick={() => copyToClipboard(value, field)}
                              className={`shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${isCopied
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-primary text-white hover:opacity-90 active:scale-95"
                                }`}
                              aria-label={`${t("booking.payment.copy")} ${label}`}
                            >
                              <Icon name={isCopied ? "check" : "content_copy"} className="text-sm" />
                              {isCopied ? t("booking.payment.copied") : t("booking.payment.copy")}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-center">
                    <Image
                      src="/pay-way.jpeg"
                      alt={t("booking.payment.qr")}
                      width={500}
                      height={500}
                      className="w-full max-w-xs rounded-xl border border-surface-variant/50 shadow-soft"
                      priority={true}
                    />
                  </div>

                  <div className={`flex flex-col gap-2 ${textAlign}`}>
                    <span className="text-sm font-bold text-primary">
                      {t("booking.payment.uploadScreenshot")}
                      <span className="text-red-600"> *</span>
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setScreenshot(e.target.files?.[0] ?? null)}
                      className="bg-surface-container-low rounded-lg px-4 py-3 border border-surface-variant/50 focus:border-primary focus:outline-none file:mr-3 file:rounded-md file:border-0 file:bg-primary file:text-white file:px-3 file:py-1.5 file:font-bold file:cursor-pointer"
                    />
                    {screenshot && (
                      <span className="text-xs text-primary font-medium flex items-center gap-1">
                        <Icon name="check_circle" className="text-base" />
                        {screenshot.name}
                      </span>
                    )}
                    <span className="text-xs text-outline">
                      {t("booking.payment.screenshotHint")}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900">
                    <Icon name="info" className="text-base shrink-0 mt-0.5" />
                    <span>{t("booking.payment.attachInstruction")}</span>
                  </div>
                </div>
              )}

              {paymentMethod === "cod" && (
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-soft border border-surface-variant/50">
                  <div className={`flex items-start gap-3 ${isAr ? "flex-row-reverse text-right" : ""}`}>
                    <Icon name="local_shipping" className="text-primary text-3xl shrink-0" />
                    <div>
                      <h3 className="font-bold text-primary mb-1">{t("booking.payment.codTitle")}</h3>
                      <p className="text-sm text-outline">{t("booking.payment.codDetail")}</p>
                    </div>
                  </div>
                </div>
              )}

              {submitted && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex items-start gap-3 text-emerald-900">
                  <Icon name="task_alt" className="text-2xl shrink-0" />
                  <div>
                    <h3 className="font-bold">{t("booking.success.title")}</h3>
                    <p className="text-sm">{t("booking.success.description")}</p>
                  </div>
                </div>
              )}
            </section>
          )} */}

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {/* {step > 1 && (
              <button
                type="button"
                onClick={goPrev}
                className="sm:w-auto px-6 py-3 rounded-xl font-bold border border-primary text-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
              >
                <Icon name={isAr ? "arrow_forward" : "arrow_back"} />
                {t("booking.back")}
              </button>
            )}
            {step < 3 &&
              (() => {
                const enabled = step === 1 ? canContinueStep1 : canContinueStep2;
                return (
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={!enabled}
                    className={`flex-1 py-3 rounded-xl font-bold shadow-md transition-all flex items-center justify-center gap-2 ${enabled
                      ? "bg-primary-container text-white hover:opacity-95 active:scale-95 cursor-pointer"
                      : "bg-surface-container text-outline cursor-not-allowed"
                      }`}
                  >
                    {step === 1 ? t("booking.continueToDetails") : t("booking.continueToPayment")}
                    <Icon name={isAr ? "arrow_back" : "arrow_forward"} />
                  </button>
                );
              })()} */}
            {step === 2 && (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canSubmit}
                className={`flex-1 py-3 rounded-xl font-bold shadow-md transition-all flex items-center justify-center gap-2 ${canSubmit
                  ? "bg-primary-container text-white hover:opacity-95 active:scale-95 cursor-pointer"
                  : "bg-surface-container text-outline cursor-not-allowed"
                  }`}
              >
                <Icon name="task_alt" />
                {t("booking.submit")}
              </button>
            )}
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-32 bg-white rounded-3xl shadow-soft p-6 sm:p-8 border border-surface-container-high">
            <h3 className="font-display-md text-2xl text-primary mb-6">{t("booking.summary")}</h3>
            {/* <div className="flex justify-between items-start pb-4 border-b border-surface-variant/50">
              <span className="text-on-surface-variant">
                {t(`booking.packages.${currentPackage.id}.title`)}
              </span>
              <span className="font-bold text-primary">{formatPrice(currentPackage.price)}</span>
            </div> */}
            {selectedAddOns.length > 0 && (
              <div className="py-4 border-b border-surface-variant/50 space-y-2">
                {selectedAddOns.map((id) => {
                  const a = addOns.find((x) => x.id === id)!;
                  return (
                    <div key={id} className="flex justify-between text-sm">
                      <span className="text-outline">{t(`booking.addOns.${a.id}`)}</span>
                      <span className="text-primary font-medium">{formatPrice(a.price)}</span>
                    </div>
                  );
                })}
              </div>
            )}
            {/* <div className="py-4 text-sm text-outline space-y-2 border-b border-surface-variant/50">
              <div className="flex justify-between">
                <span>{t("booking.date")}</span>
                <span className="font-medium text-on-surface">{date || "—"}</span>
              </div>
              <div className="flex justify-between">
                <span>{t("booking.time")}</span>
                <span className="font-medium text-on-surface">{timeLabel || "—"}</span>
              </div>
            </div> */}

            {step >= 2 && (name || phoneValid || city) && (
              <div className="py-4 text-sm text-outline space-y-1 border-b border-surface-variant/50">
                {name && (
                  <div className="flex justify-between gap-2">
                    <span>{t("booking.modal.fullName")}</span>
                    <span className="font-medium text-on-surface truncate">{name}</span>
                  </div>
                )}
                {phoneValid && (
                  <div className="flex justify-between gap-2">
                    <span>{t("booking.modal.phone")}</span>
                    <span dir="ltr" className="font-medium text-on-surface truncate">
                      {formattedPhone}
                    </span>
                  </div>
                )}
                {(city || district) && (
                  <div className="flex justify-between gap-2">
                    <span>{t("booking.modal.address")}</span>
                    <span className="font-medium text-on-surface truncate">
                      {[city, district].filter(Boolean).join(" - ")}
                    </span>
                  </div>
                )}
              </div>
            )}

            {step === 3 && paymentMethod && (
              <div className="py-4 text-sm text-outline space-y-1 border-b border-surface-variant/50">
                <div className="flex justify-between gap-2">
                  <span>{t("booking.payment.method")}</span>
                  <span className="font-medium text-on-surface">
                    {t(paymentMethod === "qr" ? "booking.payment.qr" : "booking.payment.cod")}
                  </span>
                </div>
              </div>
            )}

            {/* <div className="flex justify-between items-center pt-6 mb-2">
              <span className="text-lg font-bold text-primary">{t("booking.total")}</span>
              <span className="text-2xl font-bold text-primary">{formatPrice(total)}</span>
            </div> */}

            <Link
              href={localePath(locale, "/")}
              className="block text-center mt-3 text-sm text-outline hover:text-primary transition-colors"
            >
              {t("common.backToHome")}
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
