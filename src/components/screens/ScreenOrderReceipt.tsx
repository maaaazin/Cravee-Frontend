import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const ScreenOrderReceipt: React.FC<Props> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const copyUPI = () => {
    navigator.clipboard?.writeText('UPI/429810298301');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        title="Order Receipt"
        onBack={() => onNavigate('Past Orders History', 'push_back')}
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full pt-28 bg-[#f8f9fa] pb-safe">
        <div className="flex flex-col w-full px-4 pb-12 space-y-4">
          {/* Status & Delivery Receipt Banner */}
          <div className="w-full bg-white rounded-2xl p-4 shadow-sm relative overflow-hidden border border-[#e1e3e4]">
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#fea619]/10 rounded-full pointer-events-none" />
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-emerald-700 text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-headline-sm text-headline-sm text-[#191c1d] font-bold">Delivered</span>
                  <span className="font-label-sm text-label-sm bg-[#f3f4f5] px-2 py-0.5 rounded-full text-[#45464c] font-medium">
                    #CRV-8942
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-[#45464c] mt-0.5">Delivered on Oct 17, 8:12 PM</p>
                <div className="flex items-center gap-1.5 mt-2 text-[#191c1d]">
                  <span className="material-symbols-outlined text-[16px] text-[#855300]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    home_pin
                  </span>
                  <p className="font-label-md text-label-md truncate">Home (Prestige Hermitage, Indiranagar)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Restaurant Card */}
          <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-[#e1e3e4]">
            <div className="flex items-center gap-3.5">
              <img
                className="w-14 h-14 rounded-xl object-cover shrink-0 shadow-sm"
                alt="Cactus Club Cafe interior"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDREVZIRBWEB1ZvMLQnw5PmE3YVjDGesBYP_BVjpZETf6ou5YYIp3A4kDang0vfRSE1KfOdWBbxPRUrwNzAEyCmHq8z3N3ISJoce8So9rh-VSmexI2mT09oSaEmXmoEfvKn1Tteaa45MT3fMz7c7tRFsPyJfsPVwvXO3Rlp6yk7PSAj2ObSJEUiybW0xHcwxxRQyZn-TphXk8TL8Fmy_-lEIuw7QQ7Kv7L4A8Qskbo3EHruuChg8Iaf"
              />
              <div className="flex-1 min-w-0">
                <h2 className="font-headline-sm text-headline-sm text-[#191c1d] truncate font-bold">
                  Cactus Club Cafe & Kitchen
                </h2>
                <p className="font-body-sm text-body-sm text-[#45464c] truncate">
                  12th Main Rd, Indiranagar, Bengaluru
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[14px] text-[#fea619]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="font-label-md text-label-md text-[#191c1d] font-semibold">4.8</span>
                  <span className="font-body-sm text-body-sm text-[#45464c]">• European & Artisanal Pasta</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-3 pt-1">
              <button
                className="h-10 px-3 bg-[#f3f4f5] hover:bg-[#edeeef] rounded-full flex items-center justify-center gap-1.5 text-[#191c1d] cursor-pointer"
                onClick={() => alert('Calling Cactus Club Cafe Kitchen...')}
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span className="font-label-md text-label-md font-semibold">Call Kitchen</span>
              </button>
              <button
                className="h-10 px-3 bg-[#f3f4f5] hover:bg-[#edeeef] rounded-full flex items-center justify-center gap-1.5 text-[#191c1d] cursor-pointer"
                onClick={() => onNavigate('10. Restaurant Menu', 'push')}
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">restaurant_menu</span>
                <span className="font-label-md text-label-md font-semibold">View Menu</span>
              </button>
            </div>
          </div>

          {/* Itemized Receipt Card */}
          <div className="w-full bg-white rounded-2xl shadow-sm relative overflow-hidden border border-[#e1e3e4]">
            <div className="p-4 pb-2">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-md text-label-md tracking-wider uppercase text-[#45464c] font-bold">
                  Order Summary (3 items)
                </span>
                <span className="font-label-sm text-label-sm text-[#855300] font-semibold bg-[#ffddb8]/50 px-2 py-0.5 rounded-full">
                  Gourmet Delivery
                </span>
              </div>

              <div className="space-y-3 mt-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2 min-w-0">
                    <span className="w-3.5 h-3.5 rounded-sm bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-700" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-label-lg text-label-lg text-[#191c1d] font-semibold">
                        1 × Truffle Tagliolini with Wild Mushrooms
                      </p>
                      <p className="font-body-sm text-body-sm text-[#45464c]">Regular portion • Handcrafted Tagliolini</p>
                      <p className="font-label-sm text-label-sm text-[#855300] mt-0.5 font-medium">
                        + Extra Shaved Umbrian Truffle
                      </p>
                    </div>
                  </div>
                  <span className="font-currency-body text-currency-body text-[#191c1d] shrink-0 font-bold">₹800</span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2 min-w-0">
                    <span className="w-3.5 h-3.5 rounded-sm bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-700" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-label-lg text-label-lg text-[#191c1d] font-semibold">
                        1 × Crisp Garlic Focaccia (2 pcs)
                      </p>
                      <p className="font-body-sm text-body-sm text-[#45464c]">Rosemary sea-salt & confit garlic oil</p>
                    </div>
                  </div>
                  <span className="font-currency-body text-currency-body text-[#191c1d] shrink-0 font-bold">₹95</span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2 min-w-0">
                    <span className="w-3.5 h-3.5 rounded-sm bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-700" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-label-lg text-label-lg text-[#191c1d] font-semibold">
                        2 × San Pellegrino Sparkling Water (500ml)
                      </p>
                      <p className="font-body-sm text-body-sm text-[#45464c]">Chilled with Sicilian lemon slice</p>
                    </div>
                  </div>
                  <span className="font-currency-body text-currency-body text-[#191c1d] shrink-0 font-bold">₹360</span>
                </div>
              </div>
            </div>

            {/* Perforation Divider */}
            <div className="relative py-2 flex items-center justify-center">
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#f8f9fa] border-r border-[#e1e3e4]" />
              <div className="w-full mx-6 h-0.5 bg-[#e7e8e9] border-t border-dashed border-[#c6c6cd]" />
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#f8f9fa] border-l border-[#e1e3e4]" />
            </div>

            {/* Fee Breakdown */}
            <div className="p-4 pt-1 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-body-md text-body-md text-[#45464c]">Item Subtotal</span>
                <span className="font-label-md text-label-md text-[#191c1d]">₹1,255</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-body-md text-body-md text-[#45464c]">Delivery Partner Fee</span>
                <span className="font-label-md text-label-md text-[#191c1d]">₹45</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-body-md text-body-md text-[#45464c]">Cravee Platform Fee</span>
                <span className="font-label-md text-label-md text-[#191c1d]">₹15</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-body-md text-body-md text-[#45464c]">Taxes & Restaurant GST (5%)</span>
                <span className="font-label-md text-label-md text-[#191c1d]">₹64</span>
              </div>
              <div className="flex items-center justify-between text-emerald-700 font-semibold">
                <span>Cravee Gold Benefit</span>
                <span>-₹50</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-body-md text-body-md text-[#45464c]">Rider Tip (Ramesh Kumar)</span>
                <span className="font-label-md text-label-md text-[#191c1d]">₹30</span>
              </div>

              {/* Total Row */}
              <div className="pt-3 mt-2 bg-[#f3f4f5] -mx-4 px-4 pb-4 rounded-b-2xl border-t border-[#e1e3e4]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-headline-sm text-headline-sm text-[#191c1d] font-bold">Total Paid</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="material-symbols-outlined text-[16px] text-[#855300]">verified</span>
                      <p className="font-body-sm text-body-sm text-[#45464c]">Paid via PhonePe UPI</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-currency-display text-currency-display text-[#191c1d] font-bold">₹1,724</p>
                    <p className="font-label-sm text-label-sm text-[#76777d] tracking-wider">INR</p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-[#e1e3e4]">
                  <span className="font-label-sm text-label-sm text-[#45464c]">UPI ID: UPI/429810298301</span>
                  <button
                    className="font-label-sm text-label-sm text-[#855300] font-semibold active:opacity-70 flex items-center gap-1 cursor-pointer"
                    onClick={copyUPI}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[14px]">content_copy</span>
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Partner Spotlight */}
          <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-[#e1e3e4]">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md tracking-wider uppercase text-[#45464c] font-bold">
                Delivery Partner
              </span>
              <span className="font-label-sm text-label-sm text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                Completed in 24 mins
              </span>
            </div>

            <div className="flex items-center gap-3.5 mt-3">
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                  alt="Ramesh Kumar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj1J8Vmg2OQWkEtPvp2DJP6EIsTG1i5Ye14l1EfA9c5SZdipJR9L7n-5yXmrN-0ec8W809-E_66ISkLzzUXpfU2Z-_JTrk0phBRxxVHJGhvNtIRFc9AhQlSt69jY-mscBpsV36yFi6P4qgZSU_LE-cUJKcwUTnqKPapO6HOrCZJAN0Z_n3b_K_-KFhiWogSiFj3sMtDxg5TmH_BmrJZPwLSPkXxYfi14pP7lYa2-9Q7_Uw5uO1xZqE"
                />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                  <div className="w-4 h-4 bg-emerald-600 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[11px] text-white">check</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-label-lg text-label-lg text-[#191c1d] font-bold">Ramesh Kumar</h3>
                  <div className="flex items-center gap-0.5 bg-[#f3f4f5] px-1.5 py-0.5 rounded-full">
                    <span className="material-symbols-outlined text-[12px] text-[#fea619]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="font-label-sm text-label-sm text-[#191c1d] font-bold">4.9</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-[#45464c] truncate mt-0.5">
                  Vaccinated • Over 2,400+ delight deliveries
                </p>
              </div>

              <button
                aria-label="Favorite partner"
                className="w-10 h-10 rounded-full bg-[#f3f4f5] flex items-center justify-center text-[#ba1a1a] cursor-pointer"
                onClick={() => alert('Ramesh Kumar added to favorite delivery captains!')}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  favorite
                </span>
              </button>
            </div>
          </div>

          {/* Primary Bottom Actions */}
          <div className="w-full pt-1 space-y-2.5">
            <button
              className="w-full h-[52px] bg-[#fea619] text-[#684000] font-label-lg text-label-lg font-bold rounded-full flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all cursor-pointer"
              onClick={() => onNavigate('11. Restaurant Menu with Cart', 'push')}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">cached</span>
              Reorder Items
            </button>

            <button
              className="w-full h-[48px] bg-white text-[#191c1d] font-label-lg text-label-lg font-semibold rounded-full flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all border border-[#e1e3e4] cursor-pointer"
              onClick={() => alert('Generating official tax receipt PDF...')}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">download</span>
              Download Invoice (PDF)
            </button>

            <div className="pt-2 text-center">
              <button
                className="inline-flex items-center gap-1 font-label-md text-label-md text-[#45464c] hover:text-[#191c1d] cursor-pointer"
                onClick={() => onNavigate('16. Rate Your Experience', 'push')}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">help_outline</span>
                Need help with this order?
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
