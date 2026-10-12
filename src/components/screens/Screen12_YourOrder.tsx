import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const Screen12_YourOrder: React.FC<Props> = ({ onNavigate }) => {
  const [cutlery, setCutlery] = useState(false);
  const [noContact, setNoContact] = useState(false);
  const [dumplingQty, setDumplingQty] = useState(1);
  const [galoutiQty, setGaloutiQty] = useState(1);
  const [tikkaQty, setTikkaQty] = useState(2);
  const [cookingNote, setCookingNote] = useState('Please pack extra mint chutney & cutlery napkins.');

  const itemTotal = dumplingQty * 420 + galoutiQty * 480 + tikkaQty * 390;
  const packaging = 30;
  const taxes = 84;
  const toPay = itemTotal + packaging + taxes;

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        title="Checkout"
        onBack={() => onNavigate('11. Restaurant Menu with Cart', 'push_back')}
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full pt-28 bg-[#f8f9fa] pb-safe">
        <div className="flex flex-col w-full pb-32">
          {/* Delivery Address Banner */}
          <div className="px-4 pt-1 pb-2">
            <div className="bg-white p-4 rounded-xl shadow-sm flex items-start gap-3 border border-[#e1e3e4]">
              <div className="w-9 h-9 rounded-full bg-[#ffddb8] flex items-center justify-center shrink-0 text-[#2a1700]">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  location_on
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-label-lg text-label-lg text-[#191c1d]">Delivering to Home</span>
                  <span className="bg-[#ffb95f]/40 text-[#2a1700] px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold">
                    25-30 mins
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-[#45464c] truncate mt-0.5">
                  402 Sea Pearl, Bandra West, Mumbai
                </p>
              </div>
              <button
                className="text-[#855300] font-label-md text-label-md font-bold active:opacity-70 p-1 cursor-pointer"
                onClick={() => onNavigate('Saved Addresses', 'slide_up')}
                type="button"
              >
                Change
              </button>
            </div>
          </div>

          {/* Gourmet Pass Delight Banner */}
          <div className="px-4 pb-2">
            <div className="bg-[#141b2b] text-white rounded-xl p-4 flex items-center justify-between shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 z-10">
                <div className="w-8 h-8 rounded-full bg-[#fea619] flex items-center justify-center text-[#684000]">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    stars
                  </span>
                </div>
                <div>
                  <p className="font-label-lg text-label-lg text-white">Cravee Gourmet Active</p>
                  <p className="font-body-sm text-body-sm text-[#7d8497]">₹45 delivery fee saved on this order</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#ffb95f] z-10">verified</span>
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-[#fea619]/10 pointer-events-none" />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="px-4 flex flex-col gap-2">
            <div className="flex items-center justify-between py-1">
              <h2 className="font-headline-sm text-headline-sm text-[#191c1d]">Order Items (3)</h2>
              <span className="font-body-sm text-body-sm text-[#45464c]">The Bombay Canteen</span>
            </div>

            {/* Dish 1: Truffle Edamame Dumplings */}
            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between gap-3 border border-[#e1e3e4]">
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-3.5 h-3.5 rounded-sm bg-white flex items-center justify-center shrink-0 mt-1 shadow-[inset_0_0_0_1.5px_#15803D]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                </div>
                <div className="min-w-0">
                  <p className="font-label-lg text-label-lg text-[#191c1d] truncate">Truffle Edamame Dumplings</p>
                  <p className="font-currency-body text-currency-body text-[#191c1d] mt-0.5">₹420</p>
                  <span className="font-label-sm text-label-sm text-[#665f3d]">Steamed • Chive Oil</span>
                </div>
              </div>

              <div className="flex items-center bg-[#f3f4f5] rounded-full px-2 py-1 shadow-sm shrink-0">
                <button
                  className="w-7 h-7 flex items-center justify-center text-[#191c1d] active:scale-90 transition-transform cursor-pointer"
                  onClick={() => setDumplingQty(Math.max(1, dumplingQty - 1))}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">remove</span>
                </button>
                <span className="font-label-md text-label-md text-[#191c1d] w-6 text-center">{dumplingQty}</span>
                <button
                  className="w-7 h-7 flex items-center justify-center text-[#191c1d] active:scale-90 transition-transform cursor-pointer"
                  onClick={() => setDumplingQty(dumplingQty + 1)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">add</span>
                </button>
              </div>
            </div>

            {/* Dish 2: Slow-Cooked Awadhi Galouti */}
            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between gap-3 border border-[#e1e3e4]">
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-3.5 h-3.5 rounded-sm bg-white flex items-center justify-center shrink-0 mt-1 shadow-[inset_0_0_0_1.5px_#B91C1C]">
                  <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#B91C1C]" />
                </div>
                <div className="min-w-0">
                  <p className="font-label-lg text-label-lg text-[#191c1d] truncate">Slow-Cooked Awadhi Galouti</p>
                  <p className="font-currency-body text-currency-body text-[#191c1d] mt-0.5">₹480</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-[#855300]">tune</span>
                    <span className="font-label-sm text-label-sm text-[#855300]">Less spicy</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-[#f3f4f5] rounded-full px-2 py-1 shadow-sm shrink-0">
                <button
                  className="w-7 h-7 flex items-center justify-center text-[#191c1d] active:scale-90 transition-transform cursor-pointer"
                  onClick={() => setGaloutiQty(Math.max(1, galoutiQty - 1))}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">remove</span>
                </button>
                <span className="font-label-md text-label-md text-[#191c1d] w-6 text-center">{galoutiQty}</span>
                <button
                  className="w-7 h-7 flex items-center justify-center text-[#191c1d] active:scale-90 transition-transform cursor-pointer"
                  onClick={() => setGaloutiQty(galoutiQty + 1)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">add</span>
                </button>
              </div>
            </div>

            {/* Dish 3: Kaffir Lime Chicken Tikka */}
            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between gap-3 border border-[#e1e3e4]">
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-3.5 h-3.5 rounded-sm bg-white flex items-center justify-center shrink-0 mt-1 shadow-[inset_0_0_0_1.5px_#B91C1C]">
                  <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#B91C1C]" />
                </div>
                <div className="min-w-0">
                  <p className="font-label-lg text-label-lg text-[#191c1d] truncate">Kaffir Lime Chicken Tikka</p>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="font-currency-body text-currency-body text-[#191c1d]">₹{tikkaQty * 390}</span>
                    <span className="font-body-sm text-body-sm text-[#45464c]">(₹390 each)</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-[#45464c]">Charcoal Smoked • 6 pcs</span>
                </div>
              </div>

              <div className="flex items-center bg-[#ffddb8]/50 rounded-full px-2 py-1 shadow-sm shrink-0 border border-[#ffddb8]">
                <button
                  className="w-7 h-7 flex items-center justify-center text-[#191c1d] active:scale-90 transition-transform cursor-pointer"
                  onClick={() => setTikkaQty(Math.max(1, tikkaQty - 1))}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">remove</span>
                </button>
                <span className="font-label-md text-label-md text-[#191c1d] w-6 text-center font-bold">
                  {tikkaQty}
                </span>
                <button
                  className="w-7 h-7 flex items-center justify-center text-[#191c1d] active:scale-90 transition-transform cursor-pointer"
                  onClick={() => setTikkaQty(tikkaQty + 1)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">add</span>
                </button>
              </div>
            </div>
          </div>

          {/* Cooking / Delivery Notes Section */}
          <div className="px-4 pt-3">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-[#e1e3e4]">
              <label className="flex items-center gap-1 font-label-md text-label-md text-[#191c1d] mb-2" htmlFor="cooking-note">
                <span className="material-symbols-outlined text-[18px] text-[#855300]">edit_note</span>
                Cooking & Delivery Instructions
              </label>
              <div className="bg-[#f3f4f5] rounded-lg p-2.5 flex items-center gap-2">
                <input
                  className="bg-transparent font-body-sm text-body-sm text-[#191c1d] w-full focus:outline-none placeholder:text-[#76777d]"
                  id="cooking-note"
                  placeholder="E.g. Extra spicy, leave at door"
                  type="text"
                  value={cookingNote}
                  onChange={(e) => setCookingNote(e.target.value)}
                />
                <span className="material-symbols-outlined text-[18px] text-[#76777d] shrink-0">edit</span>
              </div>
            </div>
          </div>

          {/* Delivery Toggles & Preferences */}
          <div className="px-4 pt-3">
            <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col gap-3 border border-[#e1e3e4]">
              {/* Don't send cutlery toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ede3b8] flex items-center justify-center text-[#201c02]">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      eco
                    </span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-[#191c1d]">Don't send cutlery</p>
                    <p className="font-body-sm text-body-sm text-[#45464c]">Save 100g plastic footprint</p>
                  </div>
                </div>
                <button
                  aria-checked={cutlery}
                  className={`w-12 h-6 rounded-full relative p-0.5 transition-colors duration-200 cursor-pointer ${
                    cutlery ? 'bg-[#000000]' : 'bg-[#e1e3e4]'
                  }`}
                  onClick={() => setCutlery(!cutlery)}
                  role="switch"
                  type="button"
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-200 ${
                      cutlery ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="h-[1px] bg-[#e7e8e9] w-full" />

              {/* No-Contact Delivery toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#e7e8e9] flex items-center justify-center text-[#191c1d]">
                    <span className="material-symbols-outlined text-[18px]">doorbell</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-[#191c1d]">No-Contact Delivery</p>
                    <p className="font-body-sm text-body-sm text-[#45464c]">Rider leaves package at reception/door</p>
                  </div>
                </div>
                <button
                  aria-checked={noContact}
                  className={`w-12 h-6 rounded-full relative p-0.5 transition-colors duration-200 cursor-pointer ${
                    noContact ? 'bg-[#000000]' : 'bg-[#e1e3e4]'
                  }`}
                  onClick={() => setNoContact(!noContact)}
                  role="switch"
                  type="button"
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-200 ${
                      noContact ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Bill Details Breakdown Card */}
          <div className="px-4 pt-3">
            <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col gap-2 border border-[#e1e3e4]">
              <div className="flex items-center justify-between">
                <h3 className="font-label-lg text-label-lg text-[#191c1d]">Bill Summary</h3>
                <span className="font-label-sm text-label-sm text-[#855300] flex items-center gap-0.5 font-semibold">
                  <span className="material-symbols-outlined text-[14px]">receipt_long</span>
                  Detailed GST
                </span>
              </div>

              <div className="flex justify-between items-center text-[#45464c] pt-1">
                <span className="font-body-sm text-body-sm">Item Total</span>
                <span className="font-currency-body text-currency-body text-[#191c1d]">₹{itemTotal}</span>
              </div>

              <div className="flex justify-between items-center text-[#45464c]">
                <span className="font-body-sm text-body-sm">Restaurant Packaging</span>
                <span className="font-currency-body text-currency-body text-[#191c1d]">₹{packaging}</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span className="font-body-sm text-body-sm text-[#45464c]">Delivery Partner Fee</span>
                  <span className="material-symbols-outlined text-[14px] text-[#76777d]">info</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-body-sm text-body-sm text-[#76777d] line-through">₹45</span>
                  <span className="font-label-sm text-label-sm text-[#855300] font-bold">FREE</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-[#45464c]">
                <span className="font-body-sm text-body-sm">Taxes and Charges (GST 5%)</span>
                <span className="font-currency-body text-currency-body text-[#191c1d]">₹{taxes}</span>
              </div>

              <div className="h-[1px] bg-[#e7e8e9] w-full my-1" />

              <div className="flex justify-between items-center">
                <div>
                  <span className="font-headline-sm text-headline-sm text-[#191c1d]">To Pay</span>
                  <p className="font-label-sm text-label-sm text-[#45464c]">Inclusive of all taxes</p>
                </div>
                <span className="font-currency-display text-currency-display text-[#191c1d] font-bold">
                  ₹{toPay}
                </span>
              </div>
            </div>
          </div>

          {/* Cancellation Policy Note */}
          <div className="px-4 pt-2 pb-4">
            <div className="bg-[#f3f4f5] p-2.5 rounded-lg flex items-center gap-2 border border-[#e1e3e4]">
              <span className="material-symbols-outlined text-[16px] text-[#76777d] shrink-0">policy</span>
              <p className="font-label-sm text-label-sm text-[#45464c]">
                100% refund available within 60s of placing order. No questions asked.
              </p>
            </div>
          </div>

          {/* Sticky Bottom Checkout CTA (Matches button xpath: //button[contains(., 'Proceed to Checkout')]) */}
          <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-xl px-4 pt-2 pb-safe z-40 shadow-[0_-8px_24px_rgba(0,0,0,0.06)] border-t border-[#e1e3e4]">
            <div className="flex items-center justify-between mb-2 px-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#15803D] animate-pulse" />
                <span className="font-label-sm text-label-sm text-[#191c1d] font-medium">
                  Kitchen accepting priority orders
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-[#855300] font-bold">Saved ₹45</span>
            </div>

            <button
              className="w-full bg-[#000000] text-white py-4 px-4 rounded-2xl flex items-center justify-between font-label-lg text-label-lg active:scale-[0.98] transition-all duration-150 shadow-md cursor-pointer"
              onClick={() => onNavigate('13. Checkout', 'push')}
              type="button"
            >
              <div className="flex flex-col text-left">
                <span className="font-label-sm text-label-sm text-[#7d8497] leading-none">Total Amount</span>
                <span className="font-currency-display text-currency-display text-white leading-tight mt-0.5">
                  ₹{toPay}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>Proceed to Checkout</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
