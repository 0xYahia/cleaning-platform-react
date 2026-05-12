import { useTranslations } from "next-intl";
import { Icon } from "./Icon";
import { paymentOptions } from "@/lib/mockData";

export function PaymentSection() {
  const t = useTranslations();
  return (
    <section className="bg-surface-container-low py-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8 md:gap-lg items-center">
        <div className="md:col-span-1">
          <h2 className="text-2xl sm:text-3xl md:text-display-md font-display-md text-primary mb-4">
            {t("payment.title")}
          </h2>
          <p className="text-base sm:text-body-lg text-on-surface-variant">
            {t("payment.description")}
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-md">
          {paymentOptions.map((opt) => (
            <div
              key={opt.id}
              className="bg-white rounded-2xl p-md shadow-soft border border-surface-variant/40 flex flex-col items-center gap-3 text-center"
            >
              <span className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Icon name={opt.icon} className="text-3xl" />
              </span>
              <p className="font-bold text-primary">{t(`payment.options.${opt.id}`)}</p>
              <p className="text-xs text-on-surface-variant">{t("payment.splitNoInterest")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
