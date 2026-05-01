import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { addOns, servicePackages } from '../data/mockData'

const TIME_SLOTS = [
  '08:00 ص',
  '10:00 ص',
  '12:00 م',
  '02:00 م',
  '04:00 م',
  '06:00 م',
]

const STEPS = [
  { key: 'service', label: 'الخدمة', icon: 'cleaning_services' },
  { key: 'details', label: 'التفاصيل', icon: 'person' },
  { key: 'payment', label: 'الدفع', icon: 'payments' },
  { key: 'confirm', label: 'تأكيد', icon: 'task_alt' },
]

export function BookingStep1Ar() {
  const [packageId, setPackageId] = useState<string>(servicePackages[0].id)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [date, setDate] = useState<string>('')
  const [time, setTime] = useState<string>(TIME_SLOTS[0])

  const currentPackage = useMemo(
    () => servicePackages.find((p) => p.id === packageId)!,
    [packageId]
  )

  const addOnTotal = useMemo(
    () =>
      selectedAddOns.reduce(
        (sum, id) => sum + (addOns.find((a) => a.id === id)?.price ?? 0),
        0
      ),
    [selectedAddOns]
  )

  const total = currentPackage.price + addOnTotal

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  return (
    <div className="px-6 max-w-7xl mx-auto pb-xl">
      <div className="mb-lg">
        <div className="flex items-center justify-between mb-8 max-w-3xl">
          {STEPS.map((step, idx) => (
            <div key={step.key} className="flex items-center flex-1 last:flex-initial">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    idx === 0
                      ? 'bg-primary-container text-white shadow-lg'
                      : 'bg-surface-container text-outline'
                  }`}
                >
                  <Icon name={step.icon} />
                </div>
                <span
                  className={`font-heading-sm text-sm ${
                    idx === 0 ? 'font-bold text-primary' : 'text-outline'
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {idx < STEPS.length - 1 && (
                <div className="h-[2px] flex-1 bg-surface-dim mx-4 -mt-8" />
              )}
            </div>
          ))}
        </div>
        <h1 className="font-display-md text-display-md text-primary mb-4">
          اختر الخدمة والوقت
        </h1>
        <p className="text-body-lg text-outline max-w-2xl">
          اختر من بين باقات التنظيف الفاخرة التي تناسب احتياجاتك وحدد الموعد
          الأنسب لزيارة فريقنا.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
        <div className="lg:col-span-8 space-y-xl">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Icon name="auto_awesome" className="text-primary" />
              <h2 className="font-heading-sm text-primary">باقات التنظيف</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              {servicePackages.map((pkg) => {
                const isActive = pkg.id === packageId
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setPackageId(pkg.id)}
                    className={`text-right bg-surface-container-lowest p-6 rounded-xl shadow-soft transition-all cursor-pointer ${
                      isActive
                        ? 'border-2 border-primary ring-4 ring-primary/5'
                        : 'border border-surface-variant/50 hover:border-primary'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <Icon
                        name={pkg.icon}
                        className="text-primary text-3xl"
                      />
                      {pkg.popular && (
                        <span className="bg-secondary-container/20 text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold">
                          الأكثر طلباً
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading-sm mb-2">{pkg.titleAr}</h3>
                    <p className="text-body-md text-outline mb-6 h-12 overflow-hidden">
                      {pkg.descriptionAr}
                    </p>
                    <div className="flex justify-between items-end border-t border-surface-container pt-4">
                      <div>
                        <span className="block text-xs text-outline">يبدأ من</span>
                        <span className="text-xl font-bold text-primary">
                          {pkg.price} ر.س
                        </span>
                      </div>
                      <Icon
                        name={isActive ? 'check_circle' : 'radio_button_unchecked'}
                        className={isActive ? 'text-primary' : 'text-outline'}
                        filled={isActive}
                      />
                    </div>
                  </button>
                )
              })}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Icon name="add_circle" className="text-primary" />
              <h2 className="font-heading-sm text-primary">إضافات اختيارية</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              {addOns.map((addOn) => {
                const isActive = selectedAddOns.includes(addOn.id)
                return (
                  <button
                    key={addOn.id}
                    type="button"
                    onClick={() => toggleAddOn(addOn.id)}
                    className={`flex items-center justify-between bg-white p-5 rounded-xl border transition-all text-right ${
                      isActive
                        ? 'border-primary bg-primary/5'
                        : 'border-surface-variant/50 hover:border-primary'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon
                        name={addOn.icon}
                        className="text-primary text-2xl"
                      />
                      <span>
                        <span className="block font-bold text-primary">
                          {addOn.titleAr}
                        </span>
                        <span className="block text-sm text-outline">
                          + {addOn.price} ر.س
                        </span>
                      </span>
                    </span>
                    <Icon
                      name={isActive ? 'check_box' : 'check_box_outline_blank'}
                      className="text-primary"
                      filled={isActive}
                    />
                  </button>
                )
              })}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Icon name="calendar_month" className="text-primary" />
              <h2 className="font-heading-sm text-primary">التاريخ والوقت</h2>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft border border-surface-variant/50 grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2 text-right">
                <span className="font-bold text-primary">اختر التاريخ</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-surface-container-low rounded-lg px-4 py-3 border border-surface-variant/50 focus:border-primary focus:outline-none"
                />
              </label>
              <div className="flex flex-col gap-2 text-right">
                <span className="font-bold text-primary">اختر الوقت</span>
                <div className="grid grid-cols-3 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTime(slot)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                        slot === time
                          ? 'bg-primary text-white'
                          : 'bg-surface-container-low text-on-surface hover:bg-primary/10'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-32 bg-white rounded-3xl shadow-soft p-8 border border-surface-container-high">
            <h3 className="font-display-md text-2xl text-primary mb-6">
              ملخص الطلب
            </h3>
            <div className="flex justify-between items-start pb-4 border-b border-surface-variant/50">
              <span className="text-on-surface-variant">{currentPackage.titleAr}</span>
              <span className="font-bold text-primary">
                {currentPackage.price} ر.س
              </span>
            </div>
            {selectedAddOns.length > 0 && (
              <div className="py-4 border-b border-surface-variant/50 space-y-2">
                {selectedAddOns.map((id) => {
                  const a = addOns.find((x) => x.id === id)!
                  return (
                    <div key={id} className="flex justify-between text-sm">
                      <span className="text-outline">{a.titleAr}</span>
                      <span className="text-primary font-medium">
                        {a.price} ر.س
                      </span>
                    </div>
                  )
                })}
              </div>
            )}
            <div className="py-4 text-sm text-outline space-y-2 border-b border-surface-variant/50">
              <div className="flex justify-between">
                <span>التاريخ</span>
                <span className="font-medium text-on-surface">
                  {date || '—'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>الوقت</span>
                <span className="font-medium text-on-surface">{time}</span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-6 mb-6">
              <span className="text-lg font-bold text-primary">الإجمالي</span>
              <span className="text-2xl font-bold text-primary">
                {total} ر.س
              </span>
            </div>
            <button
              type="button"
              className="w-full bg-primary-container text-white py-4 rounded-xl font-bold shadow-md hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              متابعة إلى التفاصيل
              <Icon name="arrow_back" />
            </button>
            <Link
              to="/ar"
              className="block text-center mt-3 text-sm text-outline hover:text-primary transition-colors"
            >
              العودة للرئيسية
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}
