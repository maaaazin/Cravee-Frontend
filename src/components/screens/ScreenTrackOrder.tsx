import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const ScreenTrackOrder: React.FC<Props> = ({ onNavigate }) => {
  const [showItems, setShowItems] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        title="Live Tracking"
        onBack={() => onNavigate('8. Home', 'push_back')}
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full pt-28 bg-[#f8f9fa] pb-safe">
        <div className="flex flex-col w-full pb-8">
          {/* Live Status Bar Sub-header */}
          <div className="px-4 pt-1 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#fea619]/20 text-[#855300]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fea619] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fea619]" />
                </span>
                <span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase">
                  Live Tracking
                </span>
              </div>
              <span className="font-label-md text-label-md text-[#45464c] font-medium">#CRV-8942</span>
            </div>
            <button
              className="flex items-center gap-1 text-[#45464c] hover:text-[#191c1d] transition-colors active:scale-95 duration-150 cursor-pointer"
              onClick={() => onNavigate('Order Receipt', 'push')}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">receipt_long</span>
              <span className="font-label-sm text-label-sm font-medium">Receipt</span>
            </button>
          </div>

          {/* Interactive Map Canvas Container */}
          <div className="px-4 mb-4">
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-md bg-[#edeeef] border border-[#e1e3e4]">
              {/* Map background image */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                data-location="Bandra West, Mumbai, India"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMkynyv02lGXkkC1ukuDQvDugwKJywflu4KIszdFxd3Ll4YEKdALHtakuOjeWHo8EOtsXntTvKAAqMcZdnUlM1d3-LxTJf6StHFo0xot1wJZlU815yuDg-jseJba8hBELXJ3lRWpjiHUClPRp49D3X1KpP94za2yYYLHxwo1_Iv1VE6d-tWcMtlO23z9xA1V8MnMrELV8vpfw9kXTCHy7v_aiEgxeX3QMpBSvmvI3H_qe-EohLSpCu')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

              {/* Animated SVG Route */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" viewBox="0 0 360 288">
                <path
                  d="M 68 215 C 110 195, 145 220, 190 160 C 220 120, 250 115, 292 78"
                  stroke="#111827"
                  strokeDasharray="7 5"
                  strokeLinecap="round"
                  strokeWidth="4.5"
                />
                <path
                  d="M 68 215 C 110 195, 145 220, 175 178"
                  stroke="#fea619"
                  strokeLinecap="round"
                  strokeWidth="4.5"
                />
              </svg>

              {/* Origin Pin: Cactus Club Cafe */}
              <div
                className="absolute left-12 bottom-12 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer"
                onClick={() => onNavigate('10. Restaurant Menu', 'push')}
              >
                <div className="px-2 py-0.5 mb-1 rounded-md bg-white/95 backdrop-blur-md shadow-sm">
                  <span className="font-label-sm text-[10px] font-semibold text-[#191c1d]">Cactus Club</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#000000] flex items-center justify-center text-white shadow-md">
                  <span className="material-symbols-outlined text-[15px]">storefront</span>
                </div>
              </div>

              {/* Moving Rider Marker */}
              <div
                className="absolute left-[52%] top-[56%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 cursor-pointer"
                onClick={() => onNavigate('Order Chat', 'push')}
              >
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-11 w-11 rounded-full bg-[#fea619] opacity-40" />
                  <div className="w-10 h-10 rounded-full bg-[#fea619] shadow-lg flex items-center justify-center text-black border-2 border-white">
                    <span className="material-symbols-outlined text-[20px] font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>
                      electric_moped
                    </span>
                  </div>
                </div>
                <div className="mt-1 px-2.5 py-0.5 rounded-full bg-black/95 text-white backdrop-blur-md shadow-md flex items-center gap-1">
                  <span className="font-label-sm text-[10px] font-bold tracking-tight">Ramesh • 1.2 km</span>
                </div>
              </div>

              {/* Destination Pin */}
              <div className="absolute right-10 top-14 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                <div className="px-2 py-0.5 mb-1 rounded-md bg-white/95 backdrop-blur-md shadow-sm">
                  <span className="font-label-sm text-[10px] font-semibold text-[#191c1d]">Sea Pearl, 402</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#ba1a1a] flex items-center justify-center text-white shadow-md">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    home_pin
                  </span>
                </div>
              </div>

              {/* Recenter Button */}
              <div className="absolute right-3 bottom-3 flex flex-col gap-1.5 z-20">
                <button
                  aria-label="Recenter map"
                  className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-md text-[#191c1d] shadow-md flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">my_location</span>
                </button>
              </div>
            </div>
          </div>

          {/* Primary ETA & Live Status Card */}
          <div className="px-4 mb-4">
            <div className="p-4 rounded-xl bg-white shadow-sm flex flex-col gap-3 border border-[#e1e3e4]">
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-[#855300] font-bold">
                    Estimated Arrival
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-[#191c1d] font-extrabold tracking-tight mt-0.5">
                    14–18 mins
                  </h2>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f3f4f5] text-[#45464c] border border-[#e1e3e4]">
                  <span className="material-symbols-outlined text-[16px] text-[#855300]">schedule</span>
                  <span className="font-label-md text-label-md font-semibold text-[#191c1d]">8:45 PM</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="flex flex-col gap-1.5">
                <div className="grid grid-cols-4 gap-1.5 w-full">
                  <div className="h-1.5 rounded-full bg-[#fea619]" />
                  <div className="h-1.5 rounded-full bg-[#fea619]" />
                  <div className="h-1.5 rounded-full bg-[#fea619] animate-pulse" />
                  <div className="h-1.5 rounded-full bg-[#e1e3e4]" />
                </div>
                <div className="flex items-center justify-between text-[#45464c] font-label-sm text-label-sm pt-0.5">
                  <span className="font-semibold text-[#191c1d]">Step 3 of 4: On the way</span>
                  <span>72% of route completed</span>
                </div>
              </div>

              {/* Status Note */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#f3f4f5] border border-[#e1e3e4]">
                <div className="w-7 h-7 rounded-full bg-[#fea619]/20 flex items-center justify-center text-[#855300] shrink-0">
                  <span className="material-symbols-outlined text-[17px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    restaurant
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-[#191c1d] font-medium leading-snug">
                  Rider picked up your order fresh from the kitchen & is navigating via Hill Road.
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Partner (Captain) Card */}
          <div className="px-4 mb-4">
            <div className="p-4 rounded-xl bg-white shadow-sm flex flex-col gap-3.5 border border-[#e1e3e4]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      className="w-12 h-12 rounded-full object-cover shadow-sm"
                      alt="Ramesh Kumar delivery rider"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqs0bh7cpIc4mMQppUk5acxT9VjiabfxVLqoD0UeH3GdcKigGDIM7ICUxZDAIDV9qSvRpNebIVsAxO28WXs5FuFhnG6KTBp9X2nzgeU6mH246UOZ5Gjc54GNAIjyk8SbJZlO2Y7mpP4nUfLzvWl_I8hPsfPmpOmPcWjw9e9w9X9ZO9JXGOVbPke4j3kGnjFTAd9PPvrFAmnAUlF1MzpVviTd4fWab0rRuOp4vUu5ZYYdgsrQt9DSjZ"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#fea619] flex items-center justify-center text-black shadow-xs">
                      <span className="material-symbols-outlined text-[13px] font-bold">verified</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-headline-sm text-headline-sm text-[#191c1d] font-bold">Ramesh K.</h3>
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-[#000000] text-white">
                        CAPTAIN
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex items-center text-[#855300] font-bold text-label-sm">
                        <span className="material-symbols-outlined text-[14px] mr-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                        4.9
                      </div>
                      <span className="text-[#76777d] font-label-sm text-label-sm">• 2,400+ deliveries</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    aria-label="Call Rider"
                    className="w-10 h-10 rounded-full bg-[#f3f4f5] text-[#191c1d] flex items-center justify-center hover:bg-[#e7e8e9] active:scale-90 transition-all duration-150 shadow-xs border border-[#e1e3e4] cursor-pointer"
                    id="call-rider-btn"
                    onClick={() => onNavigate('Order Chat', 'push')}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[19px]">call</span>
                  </button>
                  <button
                    aria-label="Chat with Rider"
                    className="w-10 h-10 rounded-full bg-[#000000] text-white flex items-center justify-center hover:opacity-90 active:scale-90 transition-all duration-150 shadow-xs cursor-pointer"
                    id="chat-rider-btn"
                    onClick={() => onNavigate('Order Chat', 'push')}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[19px]">chat</span>
                  </button>
                </div>
              </div>

              {/* Eco Vehicle Badge */}
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#f3f4f5] border border-[#e1e3e4]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#855300] text-[18px]">electric_scooter</span>
                  <span className="font-body-sm text-body-sm text-[#191c1d] font-medium">
                    Ather 450X (MH-02-EE-4192)
                  </span>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white text-[#45464c] font-label-sm text-[11px] font-semibold shadow-xs border border-[#e1e3e4]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fea619]" />
                  Zero Emission
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Order Milestones Stepper */}
          <div className="px-4 mb-4">
            <div className="p-4 rounded-xl bg-white shadow-sm border border-[#e1e3e4]">
              <h3 className="font-headline-sm text-headline-sm text-[#191c1d] font-bold mb-3.5">Order Journey</h3>
              <div className="relative flex flex-col gap-4">
                {/* Step 1: Confirmed */}
                <div className="flex items-start gap-3 relative">
                  <div className="w-6 h-6 rounded-full bg-[#000000] text-white flex items-center justify-center shrink-0 z-10 shadow-xs">
                    <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                  </div>
                  <div className="absolute left-3 top-6 w-[2px] h-6 bg-[#000000]" />
                  <div className="flex-1 flex items-baseline justify-between pt-0.5">
                    <div>
                      <p className="font-label-lg text-label-lg text-[#191c1d] font-semibold">Order Confirmed</p>
                      <p className="font-body-sm text-body-sm text-[#45464c]">Restaurant accepted your order</p>
                    </div>
                    <span className="font-label-sm text-label-sm text-[#45464c]">8:15 PM</span>
                  </div>
                </div>

                {/* Step 2: Prepared */}
                <div className="flex items-start gap-3 relative">
                  <div className="w-6 h-6 rounded-full bg-[#000000] text-white flex items-center justify-center shrink-0 z-10 shadow-xs">
                    <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                  </div>
                  <div className="absolute left-3 top-6 w-[2px] h-6 bg-[#fea619]" />
                  <div className="flex-1 flex items-baseline justify-between pt-0.5">
                    <div>
                      <p className="font-label-lg text-label-lg text-[#191c1d] font-semibold">Kitchen Prepared & Packed</p>
                      <p className="font-body-sm text-body-sm text-[#45464c]">Sealed with tamper-proof packaging</p>
                    </div>
                    <span className="font-label-sm text-label-sm text-[#45464c]">8:26 PM</span>
                  </div>
                </div>

                {/* Step 3: Out for Delivery */}
                <div className="flex items-start gap-3 relative">
                  <div className="relative w-6 h-6 rounded-full bg-[#fea619] text-[#684000] flex items-center justify-center shrink-0 z-10 shadow-sm">
                    <span className="material-symbols-outlined text-[14px] font-bold">two_wheeler</span>
                  </div>
                  <div className="absolute left-3 top-6 w-[2px] h-6 bg-[#e1e3e4]" />
                  <div className="flex-1 flex items-baseline justify-between pt-0.5">
                    <div>
                      <p className="font-label-lg text-label-lg text-[#191c1d] font-bold">
                        Rider on the way to your door
                      </p>
                      <p className="font-body-sm text-body-sm text-[#855300] font-medium">
                        Navigating via Turner Rd & Perry Cross
                      </p>
                    </div>
                    <span className="font-label-sm text-label-sm font-semibold text-[#855300]">8:31 PM</span>
                  </div>
                </div>

                {/* Step 4: Final Point */}
                <div className="flex items-start gap-3 relative opacity-60">
                  <div className="w-6 h-6 rounded-full bg-[#e1e3e4] text-[#45464c] flex items-center justify-center shrink-0 z-10">
                    <span className="material-symbols-outlined text-[14px]">pin_drop</span>
                  </div>
                  <div className="flex-1 flex items-baseline justify-between pt-0.5">
                    <div>
                      <p className="font-label-lg text-label-lg text-[#191c1d] font-semibold">Delivered at Sea Pearl</p>
                      <p className="font-body-sm text-body-sm text-[#45464c]">402 Sea Pearl, Bandra West</p>
                    </div>
                    <span className="font-label-sm text-label-sm text-[#45464c]">Est. 8:45 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items & Invoice Accordion */}
          <div className="px-4 mb-4">
            <div className="p-4 rounded-xl bg-white shadow-sm flex flex-col gap-2 border border-[#e1e3e4]">
              <div className="flex items-center justify-between pb-1">
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-[#191c1d] font-bold">
                    Cactus Club Cafe & Kitchen
                  </h4>
                  <p className="font-body-sm text-body-sm text-[#45464c]">3 dishes • Order #CRV-8942</p>
                </div>
                <button
                  className="w-8 h-8 rounded-full bg-[#f3f4f5] text-[#191c1d] flex items-center justify-center cursor-pointer"
                  onClick={() => setShowItems(!showItems)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {showItems ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                  </span>
                </button>
              </div>

              {showItems && (
                <div className="flex flex-col gap-2 pt-1 border-t border-[#f3f4f5]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#15803D]" />
                      <span className="font-body-md text-body-md text-[#191c1d]">Truffle Edamame Dumplings × 1</span>
                    </div>
                    <span className="font-label-md text-label-md font-semibold text-[#191c1d]">₹495</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#ba1a1a]" />
                      <span className="font-body-md text-body-md text-[#191c1d]">Galouti Kebab Sliders × 1</span>
                    </div>
                    <span className="font-label-md text-label-md font-semibold text-[#191c1d]">₹549</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#ba1a1a]" />
                      <span className="font-body-md text-body-md text-[#191c1d]">Smoked Chicken Tikka × 2</span>
                    </div>
                    <span className="font-label-md text-label-md font-semibold text-[#191c1d]">₹680</span>
                  </div>
                  <div className="mt-2 pt-2 bg-[#f3f4f5] rounded-lg p-2.5 flex items-center justify-between border border-[#e1e3e4]">
                    <span className="font-label-sm text-[#45464c]">Total Paid (Google Pay)</span>
                    <span className="font-currency-display text-currency-display text-[#191c1d] font-bold">₹1,724</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Delivery Note */}
          <div className="px-4 mb-4">
            <div className="p-3.5 rounded-xl bg-white shadow-sm flex items-start gap-3 border border-[#e1e3e4]">
              <div className="w-8 h-8 rounded-full bg-[#f3f4f5] flex items-center justify-center text-[#45464c] shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h5 className="font-label-md text-label-md font-bold text-[#191c1d]">Delivering To</h5>
                  <span className="font-label-sm text-label-sm text-[#855300] font-semibold">Home</span>
                </div>
                <p className="font-body-sm text-body-sm text-[#45464c] mt-0.5">
                  402 Sea Pearl, Perry Cross Rd, Bandra West, Mumbai 400050
                </p>
                <p className="font-label-sm text-[11px] text-[#191c1d] font-medium mt-1">
                  Note: Please leave order with security guard if not answering bell.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="px-4 flex items-center gap-3">
            <button
              className="flex-1 h-12 rounded-full bg-white text-[#191c1d] shadow-sm font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 active:scale-98 transition-transform border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('16. Rate Your Experience', 'push')}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">rate_review</span>
              <span>Rate Experience</span>
            </button>
            <button
              className="h-12 px-5 rounded-full bg-white text-[#855300] shadow-sm font-label-lg text-label-lg font-semibold flex items-center justify-center active:scale-98 transition-transform border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('Order Chat', 'push')}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px] mr-1">chat</span>
              <span>Chat</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
