import { Icon } from "./Icon";

export function MailFAB() {
  return (
    <a
      className="fixed bottom-48 right-8 w-16 h-16 bg-[#EA4335] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active-scale transition-all z-50"
      href="mailto:support@mediclean2030.com

"
      aria-label="Email us"
    >
      <Icon name="mail" className="text-3xl" filled />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-[#EA4335]" />
      </span>
    </a>
  );
}
