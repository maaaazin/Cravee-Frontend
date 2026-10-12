import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const Screen13_Checkout: React.FC<Props> = ({ onNavigate }) => {
  const [dropoff, setDropoff] = useState<'hand' | 'door' | 'gate'>('hand');
  const [tip, setTip] = useState(30);
  const [deliveryNote, setDeliveryNote] = useState('Ring bell once, call on arrival');

  const baseItemTotal = 1680;
  const promoDiscount = 100;
  const packaging = 30;
  const taxes = 84;
  const toPay = baseItemTotal - promoDiscount + packaging + tip + taxes;

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        title="Checkout"
        onBack={() => onNavigate('12. Your Order', 'push_back')}
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full pt-28 bg-[#f8f9fa] pb-safe">
        <div className="flex flex-col w-full px-4 pb-28 pt-1">
          {/* Arrival banner */}
          <div className="flex items-center justify-between bg-[#f3f4f5] px-4 py-2.5 rounded-xl mb-3 shadow-sm border border-[#e1e3e4]">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#fea619]/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#855300] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  electric_moped
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-sm text-label-sm text-[#45464c] uppercase tracking-wider">
                  Estimated Arrival
                </span>
                <span className="font-headline-sm text-headline-sm text-[#191c1d] truncate">
                  28-34 mins • Gourmet Express
                </span>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-1 bg-white px-2.5 py-1 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#855300] animate-pulse" />
              <span className="font-label-sm text-label-sm font-semibold text-[#855300]">Live Hub</span>
            </div>
          </div>

          {/* 1. Delivery Address Card */}
          <section className="bg-white rounded-xl p-4 shadow-sm mb-3 flex flex-col gap-2 border border-[#e1e3e4]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[#855300] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  location_on
                </span>
                <span className="font-label-lg text-label-lg text-[#191c1d] font-semibold">Delivery Address</span>
              </div>
              <button
                className="font-label-md text-label-md text-[#855300] font-bold py-1 px-1 active:scale-95 cursor-pointer"
                onClick={() => onNavigate('Saved Addresses', 'slide_up')}
                type="button"
              >
                Change
              </button>
            </div>

            {/* Map Preview Snippet */}
            <div className="relative w-full h-32 rounded-xl overflow-hidden shadow-sm">
              <div
                className="w-full h-full bg-cover bg-center"
                data-location="Chimbai Road, Bandra West, Mumbai, India"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-6PqrEjTQ-fyXzUNNeCFRg4WzrUFHmchkMvOZ6C1i6bQA2BJSngpGwZd1yUcrJtavXKL9eaBY_9r1c1nwNdi1twlvVUfADXOKIax5_7WVl-eaCGS7NZBDax-39XkM_236-_2y7Z0m1uPb6471GfIgxS7CpM9JFqXDENNlrGYbLLLwMJw0QcN8KnXXT3AkjBEOpn2HtXFSGjyjwnuE5KT0KZZFWiJ0mKK1_hy7WG5xrDMCwhdYUUzc')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="material-symbols-outlined text-[#855300] text-[16px]">near_me</span>
                  <span className="font-label-sm text-label-sm text-[#191c1d] truncate">
                    Bandra West Hub • 1.8 km away
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-[#45464c] font-medium">GPS Confirmed</span>
              </div>
            </div>

            {/* Text description */}
            <div className="flex items-start gap-2.5 pt-1">
              <div className="w-7 h-7 rounded-full bg-[#edeeef] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[#45464c] text-[16px]">home</span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-label-md text-label-md text-[#191c1d] font-semibold">Home</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-[#edeeef] text-[#45464c] font-label-sm text-[10px]">
                    Primary
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-[#45464c] mt-0.5 line-clamp-2">
                  Flat 402, Sea Pearl Apt, Chimbai Rd, Bandra West
                </p>
              </div>
            </div>
          </section>

          {/* 2. Drop-off Options */}
          <section className="bg-white rounded-xl p-4 shadow-sm mb-3 flex flex-col gap-2 border border-[#e1e3e4]">
            <div className="flex items-center justify-between">
              <span className="font-label-lg text-label-lg text-[#191c1d] font-semibold">Drop-off Preference</span>
              <span className="font-label-sm text-label-sm text-[#45464c]">Contactless ready</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-xl transition-all duration-200 cursor-pointer ${
                  dropoff === 'hand' ? 'bg-[#000000] text-white shadow-sm' : 'bg-[#edeeef] text-[#45464c]'
                }`}
                onClick={() => setDropoff('hand')}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px] mb-1">front_hand</span>
                <span className="font-label-sm text-label-sm text-center leading-tight">Hand it to me</span>
              </button>

              <button
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-xl transition-all duration-200 cursor-pointer ${
                  dropoff === 'door' ? 'bg-[#000000] text-white shadow-sm' : 'bg-[#edeeef] text-[#45464c]'
                }`}
                onClick={() => setDropoff('door')}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px] mb-1">meeting_room</span>
                <span className="font-label-sm text-label-sm text-center leading-tight">Leave at door</span>
              </button>

              <button
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-xl transition-all duration-200 cursor-pointer ${
                  dropoff === 'gate' ? 'bg-[#000000] text-white shadow-sm' : 'bg-[#edeeef] text-[#45464c]'
                }`}
                onClick={() => setDropoff('gate')}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px] mb-1">fence</span>
                <span className="font-label-sm text-label-sm text-center leading-tight">Leave at gate</span>
              </button>
            </div>

            {/* Delivery Note Box */}
            <div className="mt-1 pt-1 flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="font-label-sm text-label-sm text-[#45464c] flex items-center gap-1" htmlFor="delivery-notes">
                  <span className="material-symbols-outlined text-[14px]">edit_note</span>
                  Delivery instructions
                </label>
                <span className="font-label-sm text-label-sm text-[#855300] font-medium">Saved</span>
              </div>
              <div className="relative bg-[#f3f4f5] rounded-xl p-2.5 flex items-center gap-2 border border-[#e1e3e4]">
                <span className="material-symbols-outlined text-[#855300] text-[18px]">notifications_active</span>
                <input
                  className="w-full bg-transparent font-body-sm text-body-sm text-[#191c1d] focus:outline-none"
                  id="delivery-notes"
                  placeholder="Add drop-off instructions..."
                  type="text"
                  value={deliveryNote}
                  onChange={(e) => setDeliveryNote(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* 3. Courier Tip Selector */}
          <section className="bg-white rounded-xl p-4 shadow-sm mb-3 flex flex-col gap-2 border border-[#e1e3e4]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[#855300] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  volunteer_activism
                </span>
                <span className="font-label-lg text-label-lg text-[#191c1d] font-semibold">Courier Tip</span>
              </div>
              <span className="font-label-sm text-label-sm text-[#855300] font-medium bg-[#fea619]/20 px-2 py-0.5 rounded-full">
                Fair Wage Partner
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-[#45464c]">
              Express your gratitude. 100% of tips go directly to your delivery partner.
            </p>
            <div className="grid grid-cols-4 gap-2 mt-1" id="tip-selector">
              <button
                className={`tip-pill flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all cursor-pointer ${
                  tip === 20 ? 'bg-[#000000] text-white shadow-sm' : 'bg-[#edeeef] text-[#191c1d]'
                }`}
                onClick={() => setTip(20)}
                type="button"
              >
                <span className="font-currency-body text-currency-body">₹20</span>
              </button>

              <button
                className={`tip-pill relative flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all cursor-pointer ${
                  tip === 30 ? 'bg-[#000000] text-white shadow-sm' : 'bg-[#edeeef] text-[#191c1d]'
                }`}
                onClick={() => setTip(30)}
                type="button"
              >
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#855300] text-white font-label-sm text-[9px] px-1.5 py-0.2 rounded-full whitespace-nowrap uppercase tracking-wider font-bold">
                  Popular
                </span>
                <span className="font-currency-body text-currency-body">₹30</span>
              </button>

              <button
                className={`tip-pill flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all cursor-pointer ${
                  tip === 50 ? 'bg-[#000000] text-white shadow-sm' : 'bg-[#edeeef] text-[#191c1d]'
                }`}
                onClick={() => setTip(50)}
                type="button"
              >
                <span className="font-currency-body text-currency-body">₹50</span>
              </button>

              <button
                className={`tip-pill flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all cursor-pointer ${
                  tip === 40 ? 'bg-[#000000] text-white shadow-sm' : 'bg-[#edeeef] text-[#191c1d]'
                }`}
                onClick={() => setTip(40)}
                type="button"
              >
                <span className="font-label-sm text-label-sm font-semibold">Custom</span>
              </button>
            </div>
          </section>

          {/* 4. Promo Code Card */}
          <section className="bg-white rounded-xl p-4 shadow-sm mb-3 flex flex-col gap-1 border border-[#e1e3e4]">
            <div className="flex items-center justify-between">
              <span className="font-label-lg text-label-lg text-[#191c1d] font-semibold">Offers & Benefits</span>
              <span className="font-label-sm text-label-sm text-[#855300] font-semibold">1 Applied</span>
            </div>
            <div className="flex items-center justify-between bg-[#f3f4f5] rounded-xl px-4 py-3 mt-1 shadow-sm border border-[#e1e3e4]">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-full bg-[#fea619]/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#855300] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    confirmation_number
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-label-md text-label-md font-bold tracking-wide text-[#191c1d]">
                      CRAVEE100
                    </span>
                    <span className="bg-[#fea619] text-[#684000] font-label-sm text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      Applied
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-[#855300] truncate">
                    ₹100 gourmet savings unlocked
                  </span>
                </div>
              </div>
              <button
                className="shrink-0 font-label-sm text-label-sm text-[#ba1a1a] font-semibold hover:opacity-80 transition-opacity ml-2 active:scale-95 cursor-pointer"
                type="button"
              >
                Remove
              </button>
            </div>
          </section>

          {/* 5. Bill Summary Card */}
          <section className="bg-white rounded-xl p-4 shadow-sm mb-3 flex flex-col gap-2 border border-[#e1e3e4]">
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[#855300] text-[20px]">receipt_long</span>
                <span className="font-label-lg text-label-lg text-[#191c1d] font-semibold">Bill Summary</span>
              </div>
              <span className="font-label-sm text-label-sm text-[#45464c]">3 Items</span>
            </div>

            <div className="space-y-2 text-[#45464c] font-body-sm text-body-sm">
              <div className="flex items-center justify-between">
                <span>Item Total</span>
                <span className="font-currency-body text-currency-body text-[#191c1d]">₹{baseItemTotal}</span>
              </div>
              <div className="flex items-center justify-between text-[#855300]">
                <div className="flex items-center gap-1.5">
                  <span>Promo Discount</span>
                  <span className="font-label-sm text-[10px] bg-[#fea619]/20 text-[#855300] px-1.5 py-0.5 rounded font-semibold">
                    CRAVEE100
                  </span>
                </div>
                <span className="font-currency-body text-currency-body text-[#855300]">-₹{promoDiscount}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span>Packaging & Delivery</span>
                  <span className="material-symbols-outlined text-[14px] text-[#76777d]">info</span>
                </div>
                <span className="font-currency-body text-currency-body text-[#191c1d]">₹{packaging}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span>Delivery Tip</span>
                  <span className="font-label-sm text-[10px] bg-[#edeeef] text-[#45464c] px-1.5 py-0.5 rounded">
                    Partner
                  </span>
                </div>
                <span className="font-currency-body text-currency-body text-[#191c1d]">₹{tip}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span>Taxes & Platform Fees</span>
                  <span className="material-symbols-outlined text-[14px] text-[#76777d]">info</span>
                </div>
                <span className="font-currency-body text-currency-body text-[#191c1d]">₹{taxes}</span>
              </div>
            </div>

            <div className="h-[1px] bg-[#e7e8e9] my-1" />

            <div className="flex items-baseline justify-between pt-1">
              <div className="flex flex-col">
                <span className="font-label-lg text-label-lg font-bold text-[#191c1d]">To Pay</span>
                <span className="font-label-sm text-label-sm text-[#855300]">Inclusive of all taxes</span>
              </div>
              <span className="font-currency-display text-currency-display text-[#191c1d] font-bold">₹{toPay}</span>
            </div>
          </section>

          {/* Policy Note */}
          <div className="bg-[#f3f4f5] rounded-xl p-3 mb-6 flex items-start gap-2 text-[#45464c] border border-[#e1e3e4]">
            <span className="material-symbols-outlined text-[18px] text-[#855300] shrink-0 mt-0.5">policy</span>
            <p className="font-body-sm text-body-sm leading-relaxed">
              Review your order before proceeding. Once the restaurant begins gourmet preparation, cancellations are subject to partner confirmation.
            </p>
          </div>
        </div>

        {/* Sticky Bottom Button Container */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-safe shadow-[0_-8px_24px_rgba(0,0,0,0.06)] border-t border-[#e1e3e4]">
          <div className="max-w-md mx-auto flex flex-col gap-2">
            <div className="flex items-center justify-between px-1 text-[#45464c]">
              <span className="font-label-sm text-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#855300]">verified_user</span>
                100% Secure Payment
              </span>
              <span className="font-label-sm text-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#855300]">bolt</span>
                UPI, Cards & NetBanking
              </span>
            </div>

            <button
              className="w-full h-14 bg-[#000000] text-white rounded-xl font-label-lg text-label-lg font-semibold flex items-center justify-between px-4 shadow-xl active:scale-[0.98] transition-all duration-150 cursor-pointer"
              id="pay-button"
              onClick={() => onNavigate('14. Select Payment Method', 'push')}
              type="button"
            >
              <div className="flex flex-col items-start leading-none">
                <span className="font-label-sm text-[11px] text-white/70 uppercase tracking-widest font-normal">
                  Total Payable
                </span>
                <span className="font-currency-body text-currency-body text-white font-bold mt-0.5">₹{toPay}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Proceed to Pay</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
