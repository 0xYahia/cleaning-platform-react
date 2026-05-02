import { Icon } from './Icon'

export function CallFAB() {
  return (
    <a
      className="fixed bottom-28 right-8 w-16 h-16 bg-[#0EA5A4] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active-scale transition-all z-50"
      href="tel:+966554918518"
      aria-label="Call us"
    >
      <Icon name="call" className="text-3xl" filled />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-[#0EA5A4]" />
      </span>
    </a>
  )
}
