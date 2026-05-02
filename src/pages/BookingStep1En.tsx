import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { addOns, servicePackages } from '../data/mockData'

const TIME_SLOTS = [
  '08:00 AM',
  '10:00 AM',
  '12:00 PM',
  '02:00 PM',
  '04:00 PM',
  '06:00 PM',
]

const STEPS = [
  { key: 'service', label: 'Service', icon: 'cleaning_services' },
  { key: 'details', label: 'Details', icon: 'person' },
  { key: 'payment', label: 'Payment', icon: 'payments' },
  { key: 'confirm', label: 'Confirm', icon: 'task_alt' },
]

export function BookingStep1En() {
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
    <div className="px-4 sm:px-6 max-w-7xl mx-auto pb-xl">
      <div className="mb-lg">
        <div className="flex items-center justify-between mb-8 max-w-3xl overflow-x-auto">
          {STEPS.map((step, idx) => (
            <div key={step.key} className="flex items-center flex-1 last:flex-initial min-w-0">
              <div className="flex flex-col items-center gap-2 min-w-0">
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${
                    idx === 0
                      ? 'bg-primary-container text-white shadow-lg'
                      : 'bg-surface-container text-outline'
                  }`}
                >
                  <Icon name={step.icon} />
                </div>
                <span
                  className={`font-heading-sm text-xs sm:text-sm whitespace-nowrap ${
                    idx === 0 ? 'font-bold text-primary' : 'text-outline'
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {idx < STEPS.length - 1 && (
                <div className="h-[2px] flex-1 bg-surface-dim mx-2 sm:mx-4 -mt-8" />
              )}
            </div>
          ))}
        </div>
        <h1 className="font-display-md text-2xl sm:text-3xl md:text-display-md text-primary mb-3 sm:mb-4">
          Choose your service & time
        </h1>
        <p className="text-base sm:text-body-lg text-outline max-w-2xl">
          Pick from our luxury cleaning packages that fit your needs and select
          the most convenient time for our team to visit.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-lg items-start">
        <div className="lg:col-span-8 space-y-xl">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Icon name="auto_awesome" className="text-primary" />
              <h2 className="font-heading-sm text-primary">Cleaning Packages</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              {servicePackages.map((pkg) => {
                const isActive = pkg.id === packageId
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setPackageId(pkg.id)}
                    className={`text-left bg-surface-container-lowest p-5 sm:p-6 rounded-xl shadow-soft transition-all cursor-pointer ${
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
                          Most Popular
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading-sm mb-2">{pkg.titleEn}</h3>
                    <p className="text-body-md text-outline mb-6 h-12 overflow-hidden">
                      {pkg.descriptionEn}
                    </p>
                    <div className="flex justify-between items-end border-t border-surface-container pt-4">
                      <div>
                        <span className="block text-xs text-outline">Starting at</span>
                        <span className="text-xl font-bold text-primary">
                          SAR {pkg.price}
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
              <h2 className="font-heading-sm text-primary">Optional Add-ons</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              {addOns.map((addOn) => {
                const isActive = selectedAddOns.includes(addOn.id)
                return (
                  <button
                    key={addOn.id}
                    type="button"
                    onClick={() => toggleAddOn(addOn.id)}
                    className={`flex items-center justify-between bg-white p-5 rounded-xl border transition-all text-left ${
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
                          {addOn.titleEn}
                        </span>
                        <span className="block text-sm text-outline">
                          + SAR {addOn.price}
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
              <h2 className="font-heading-sm text-primary">Date & Time</h2>
            </div>
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-soft border border-surface-variant/50 grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2 text-left">
                <span className="font-bold text-primary">Choose date</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-surface-container-low rounded-lg px-4 py-3 border border-surface-variant/50 focus:border-primary focus:outline-none"
                />
              </label>
              <div className="flex flex-col gap-2 text-left">
                <span className="font-bold text-primary">Choose time</span>
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
          <div className="lg:sticky lg:top-32 bg-white rounded-3xl shadow-soft p-6 sm:p-8 border border-surface-container-high">
            <h3 className="font-display-md text-2xl text-primary mb-6">
              Order Summary
            </h3>
            <div className="flex justify-between items-start pb-4 border-b border-surface-variant/50">
              <span className="text-on-surface-variant">{currentPackage.titleEn}</span>
              <span className="font-bold text-primary">
                SAR {currentPackage.price}
              </span>
            </div>
            {selectedAddOns.length > 0 && (
              <div className="py-4 border-b border-surface-variant/50 space-y-2">
                {selectedAddOns.map((id) => {
                  const a = addOns.find((x) => x.id === id)!
                  return (
                    <div key={id} className="flex justify-between text-sm">
                      <span className="text-outline">{a.titleEn}</span>
                      <span className="text-primary font-medium">
                        SAR {a.price}
                      </span>
                    </div>
                  )
                })}
              </div>
            )}
            <div className="py-4 text-sm text-outline space-y-2 border-b border-surface-variant/50">
              <div className="flex justify-between">
                <span>Date</span>
                <span className="font-medium text-on-surface">
                  {date || '—'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Time</span>
                <span className="font-medium text-on-surface">{time}</span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-6 mb-6">
              <span className="text-lg font-bold text-primary">Total</span>
              <span className="text-2xl font-bold text-primary">
                SAR {total}
              </span>
            </div>
            <button
              type="button"
              className="w-full bg-primary-container text-white py-4 rounded-xl font-bold shadow-md hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Continue to details
              <Icon name="arrow_forward" />
            </button>
            <Link
              to="/"
              className="block text-center mt-3 text-sm text-outline hover:text-primary transition-colors"
            >
              Back to home
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}
