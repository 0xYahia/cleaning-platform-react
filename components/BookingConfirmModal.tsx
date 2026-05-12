"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Icon } from "./Icon";

const WHATSAPP_NUMBER = "966554918518";
const EMAIL = "support@mediclean2030.com";

export interface BookingPayload {
  packageTitle: string;
  packagePrice: string;
  addOns: { title: string; price: string }[];
  date: string;
  time: string;
  total: string;
}

interface Props {
  open: boolean;
  booking: BookingPayload;
  onClose: () => void;
}

export function BookingConfirmModal({ open, booking, onClose }: Props) {
  const t = useTranslations();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setError("");
    } else {
      setName("");
      setPhone("");
      setAddress("");
      setNotes("");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const validate = () => {
    if (!name.trim() || !phone.trim() || !address.trim()) {
      setError(t("booking.modal.validation"));
      return false;
    }
    setError("");
    return true;
  };

  const buildMessage = () => {
    const lines = [
      `${t("booking.modal.title")}`,
      ``,
      `👤 ${t("booking.modal.fullName")}: ${name}`,
      `📞 ${t("booking.modal.phone")}: ${phone}`,
      `📍 ${t("booking.modal.address")}: ${address}`,
    ];
    if (notes.trim()) lines.push(`📝 ${t("booking.modal.notes")}: ${notes}`);
    lines.push("");
    lines.push(`📦 ${t("booking.summary")}`);
    lines.push(`• ${booking.packageTitle} — ${booking.packagePrice}`);
    booking.addOns.forEach((a) => lines.push(`• ${a.title} — ${a.price}`));
    lines.push(`📅 ${t("booking.date")}: ${booking.date || "—"}`);
    lines.push(`⏰ ${t("booking.time")}: ${booking.time}`);
    lines.push(`💰 ${t("booking.total")}: ${booking.total}`);
    return lines.join("\n");
  };

  const sendWhatsApp = () => {
    if (!validate()) return;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const sendEmail = () => {
    if (!validate()) return;
    const subject = `${t("booking.modal.title")} — ${name}`;
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage())}`;
    window.location.href = url;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between p-6 border-b border-surface-variant/40">
          <div>
            <h2 className="font-display-md text-2xl text-primary mb-1">
              {t("booking.modal.title")}
            </h2>
            <p className="text-sm text-on-surface-variant">{t("booking.modal.subtitle")}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -m-2 text-outline hover:text-primary rounded-lg transition-colors"
            aria-label="Close"
          >
            <Icon name="close" className="text-2xl" />
          </button>
        </div>

        <form
          className="p-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            sendWhatsApp();
          }}
        >
          <label className="flex flex-col gap-2">
            <span className="text-sm font-bold text-primary">{t("booking.modal.fullName")}</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("booking.modal.fullNamePlaceholder")}
              className="bg-surface-container-low rounded-lg px-4 py-3 border border-surface-variant/50 focus:border-primary focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-bold text-primary">{t("booking.modal.phone")}</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t("booking.modal.phonePlaceholder")}
              className="bg-surface-container-low rounded-lg px-4 py-3 border border-surface-variant/50 focus:border-primary focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-bold text-primary">{t("booking.modal.address")}</span>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={t("booking.modal.addressPlaceholder")}
              rows={3}
              className="bg-surface-container-low rounded-lg px-4 py-3 border border-surface-variant/50 focus:border-primary focus:outline-none resize-none"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-bold text-primary">{t("booking.modal.notes")}</span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t("booking.modal.notesPlaceholder")}
              rows={2}
              className="bg-surface-container-low rounded-lg px-4 py-3 border border-surface-variant/50 focus:border-primary focus:outline-none resize-none"
            />
          </label>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={sendWhatsApp}
              className="flex-1 bg-[#25D366] text-white py-3 rounded-xl font-bold shadow-md hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Icon name="chat" />
              {t("booking.modal.sendWhatsApp")}
            </button>
            <button
              type="button"
              onClick={sendEmail}
              className="flex-1 bg-primary text-white py-3 rounded-xl font-bold shadow-md hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Icon name="mail" />
              {t("booking.modal.sendEmail")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
