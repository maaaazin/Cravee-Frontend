import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const Screen11_RestaurantMenuCart: React.FC<Props> = ({ onNavigate }) => {
  const [dumplingQty, setDumplingQty] = useState(1);
  const [galoutiQty, setGaloutiQty] = useState(1);
  const [tikkaQty, setTikkaQty] = useState(2);
  const [prawnRollAdded, setPrawnRollAdded] = useState(false);

  const totalItems = dumplingQty + galoutiQty + tikkaQty + (prawnRollAdded ? 1 : 0);
  const totalAmount = dumplingQty * 420 + galoutiQty * 480 + tikkaQty * 390 + (prawnRollAdded ? 560 : 0);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        title="Cactus Club Cafe & Kitchen"
        hideTitleText
        onBack={() => onNavigate('10. Restaurant Menu', 'push_back')}
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full bg-[#f8f9fa] pb-safe pt-28">
        <div className="flex flex-col w-full pb-36">
          {/* Restaurant Editorial Header */}
          <div className="relative w-full px-4 pt-1 pb-3 flex flex-col gap-2">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#fea619] text-[#684000] font-label-sm text-label-sm font-bold">
                    <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      stars
                    </span>
                    MICHELIN Curated
                  </span>
                  <span className="text-[#76777d] text-label-sm">•</span>
                  <span className="font-label-sm text-label-sm text-[#45464c] font-medium truncate">
                    Asian & Contemporary Indian
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-[#191c1d] tracking-tight truncate">
                  Cactus Club Cafe & Kitchen
                </h2>
                <p className="font-body-sm text-body-sm text-[#45464c] flex items-center gap-1 mt-0.5">
                  <span className="material-symbols-outlined text-[15px] text-[#855300]">location_on</span>
                  Indiranagar, 100ft Road • <span className="font-semibold text-[#191c1d]">25 mins</span>
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-1 bg-[#e7e8e9] px-2.5 py-1.5 rounded-xl shadow-sm">
                  <span className="material-symbols-outlined text-[16px] text-[#855300]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="font-label-lg text-label-lg text-[#191c1d] font-bold">4.8</span>
                  <span className="font-label-sm text-label-sm text-[#45464c]">(1.2k)</span>
                </div>
              </div>
            </div>

            {/* Taste Story & Perks Pill Bar */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ffddb8] text-[#2a1700] shrink-0 text-label-sm font-label-sm font-semibold shadow-sm">
                <span className="material-symbols-outlined text-[15px]">electric_bolt</span>
                Express Kitchen 20m
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f3f4f5] text-[#191c1d] shrink-0 text-label-sm font-label-sm shadow-sm border border-[#e1e3e4]">
                <span className="material-symbols-outlined text-[15px] text-[#855300]">eco</span>
                Farm-to-Fork Certified
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f3f4f5] text-[#191c1d] shrink-0 text-label-sm font-label-sm shadow-sm border border-[#e1e3e4]">
                <span className="material-symbols-outlined text-[15px] text-[#855300]">wine_bar</span>
                Cocktail Pairings
              </div>
            </div>
          </div>

          {/* Search & Category Rails */}
          <div className="px-4 mb-3">
            <div className="relative w-full flex items-center bg-[#f3f4f5] rounded-xl px-3.5 py-2.5 shadow-sm border border-[#e1e3e4]">
              <span className="material-symbols-outlined text-[#76777d] text-[20px] mr-2">search</span>
              <input
                className="w-full bg-transparent font-body-md text-body-md text-[#191c1d] placeholder:text-[#76777d] focus:outline-none"
                placeholder="Search menu, flavors, dietary..."
                type="text"
              />
              <button
                className="w-7 h-7 rounded-lg bg-[#edeeef] flex items-center justify-center text-[#45464c] active:scale-95 transition-transform"
                type="button"
              >
                <span className="material-symbols-outlined text-[17px]">tune</span>
              </button>
            </div>

            {/* Culinary Tabs */}
            <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar">
              <button className="px-4 py-2 rounded-full bg-[#000000] text-white font-label-md text-label-md shrink-0 shadow-sm" type="button">
                Signature Small Plates (4)
              </button>
              <button className="px-4 py-2 rounded-full bg-white text-[#45464c] font-label-md text-label-md shrink-0 shadow-sm border border-[#e1e3e4]" type="button">
                Clay Oven Robata
              </button>
              <button className="px-4 py-2 rounded-full bg-white text-[#45464c] font-label-md text-label-md shrink-0 shadow-sm border border-[#e1e3e4]" type="button">
                Dumplings & Baos
              </button>
              <button className="px-4 py-2 rounded-full bg-white text-[#45464c] font-label-md text-label-md shrink-0 shadow-sm border border-[#e1e3e4]" type="button">
                Curated Mains
              </button>
            </div>
          </div>

          {/* Section Header */}
          <div className="px-4 flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <h3 className="font-headline-sm text-headline-sm text-[#191c1d]">Chef's Curated Selection</h3>
              <span className="px-2 py-0.5 rounded-full bg-[#ffddb8] text-[#2a1700] font-label-sm text-label-sm font-semibold">
                Ordered
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-[#76777d]">Customisable</span>
          </div>

          {/* Itemized Menu List */}
          <div className="px-4 flex flex-col gap-3">
            {/* ITEM 1: Truffle Edamame Dumplings */}
            <div className="bg-white rounded-2xl p-4 shadow-sm flex gap-3.5 relative overflow-hidden transition-all duration-200 border border-[#e1e3e4]">
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-[3px] bg-white shadow-xs p-0.5 border border-[#15803D]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#ede3b8] text-[#201c02] font-label-sm text-label-sm font-semibold">
                      Bestseller
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-[#191c1d] leading-snug">
                    Truffle Edamame Dumplings
                  </h4>
                  <div className="font-currency-body text-currency-body text-[#191c1d] mt-1">₹420</div>
                  <p className="font-body-sm text-body-sm text-[#45464c] mt-1 line-clamp-2">
                    Steamed translucent crystal skin parcels filled with crushed edamame, aromatic white truffle oil, and water chestnuts.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[#855300]">
                  <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    thumb_up
                  </span>
                  <span className="font-label-sm text-label-sm font-medium">96% of patrons recommend this</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-between shrink-0 w-28">
                <div className="relative w-28 h-28 rounded-xl overflow-hidden shadow-xs bg-[#edeeef]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Truffle Edamame Dumplings"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeevjrn0VfCFU_hbHXp-BARs6G2KZ8730tJA7BkAdf5MSys7s7h4_6Z65CrfAyIMIUAIJeXj7KQ4RJ4lhT504ENDKPSzM3ryzEbqana0gtkYz70b13rR2gh97EyFgdZO3q5Sekla80xJJ017H6_u62f0-dBdOFqHNhYq0OLTlXwZdgiMAh1eqFWlB0e0UCsIpsxgvU9kUzcypcUBk_ooeWkJBRu_Nief_s4IIH43Ph-FdHMyD5qeJy"
                  />
                </div>
                <div className="w-full mt-2 flex items-center justify-between bg-[#141b2b] text-white rounded-full px-2 py-1.5 shadow-md">
                  <button
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[#7d8497] hover:text-white active:scale-90 transition-transform cursor-pointer"
                    onClick={() => setDumplingQty(Math.max(0, dumplingQty - 1))}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">remove</span>
                  </button>
                  <span className="font-headline-sm text-headline-sm text-[#ffb95f] font-bold px-2">{dumplingQty}</span>
                  <button
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[#7d8497] hover:text-white active:scale-90 transition-transform cursor-pointer"
                    onClick={() => setDumplingQty(dumplingQty + 1)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">add</span>
                  </button>
                </div>
              </div>
            </div>

            {/* ITEM 2: Crispy Prawn Tempura Roll */}
            <div className="bg-white rounded-2xl p-4 shadow-sm flex gap-3.5 relative overflow-hidden transition-all duration-200 border border-[#e1e3e4]">
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-[3px] bg-white shadow-xs p-0.5 border border-[#ba1a1a]">
                      <span className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[6px] border-b-[#ba1a1a]" />
                    </span>
                    <span className="text-[#76777d] text-label-sm font-label-sm">8 Pieces</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-[#191c1d] leading-snug">
                    Crispy Prawn Tempura Roll
                  </h4>
                  <div className="font-currency-body text-currency-body text-[#191c1d] mt-1">₹560</div>
                  <p className="font-body-sm text-body-sm text-[#45464c] mt-1 line-clamp-2">
                    Tiger prawns fried crisp in panko, rolled with Hass avocado, Japanese mayo, and crowned with toasted tobiko.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1 text-[#45464c] font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px] text-[#76777d]">timer</span>
                  <span>Made fresh to order</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-between shrink-0 w-28">
                <div className="relative w-28 h-28 rounded-xl overflow-hidden shadow-xs bg-[#edeeef]">
                  <img
                    alt="Crispy Prawn Tempura Roll"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9IEq3iIDVwq-Me2tLbnFkMbu0By4b1s7i5QDBExjZdr7f_4escYZi3UI4pgvPrWmlF6YkGJPqCx8HAoasRKmnEpVVe02TrT7msac0VNWdKlzBlw0F_OH3bPhuozcs-rcPHvbdZ6NXzxuWGJ8D588JwBAvwcyqSKw7T2vUMHxT3ajLFc4Q21kRmuJUA-s1bt4wrt62zreq1MdA7z9booNtEhyYodTzh8BtNSsbu1kAUFIMaQJrrBie"
                  />
                </div>
                {prawnRollAdded ? (
                  <div className="w-full mt-2 flex items-center justify-between bg-[#141b2b] text-white rounded-full px-2 py-1.5 shadow-md">
                    <button
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[#7d8497] hover:text-white active:scale-90 transition-transform cursor-pointer"
                      onClick={() => setPrawnRollAdded(false)}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">remove</span>
                    </button>
                    <span className="font-headline-sm text-headline-sm text-[#ffb95f] font-bold px-2">1</span>
                    <button
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[#7d8497] hover:text-white active:scale-90 transition-transform cursor-pointer"
                      onClick={() => setPrawnRollAdded(true)}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">add</span>
                    </button>
                  </div>
                ) : (
                  <button
                    className="w-full mt-2 h-9 rounded-full bg-[#f3f4f5] text-[#191c1d] hover:bg-[#ffddb8] active:scale-95 transition-all flex items-center justify-center gap-1 shadow-xs border border-[#e1e3e4] cursor-pointer"
                    onClick={() => setPrawnRollAdded(true)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#855300]">add</span>
                    <span className="font-label-md text-label-md uppercase tracking-wider font-bold">ADD</span>
                  </button>
                )}
              </div>
            </div>

            {/* ITEM 3: Slow-Cooked Awadhi Galouti */}
            <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-3 relative overflow-hidden transition-all duration-200 border border-[#e1e3e4]">
              <div className="flex gap-3.5">
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-[3px] bg-white shadow-xs p-0.5 border border-[#ba1a1a]">
                        <span className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[6px] border-b-[#ba1a1a]" />
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-[#ffddb8] text-[#2a1700] font-label-sm text-label-sm font-semibold">
                        Chef's Pride
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-[#191c1d] leading-snug">
                      Slow-Cooked Awadhi Galouti
                    </h4>
                    <div className="font-currency-body text-currency-body text-[#191c1d] mt-1">₹480</div>
                    <p className="font-body-sm text-body-sm text-[#45464c] mt-1 line-clamp-2">
                      Melt-in-mouth smoked lamb patties smoked with cloves, cardamom, and saffron over miniature saffron sheermal crisps.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-between shrink-0 w-28">
                  <div className="relative w-28 h-28 rounded-xl overflow-hidden shadow-xs bg-[#edeeef]">
                    <img
                      alt="Slow-Cooked Awadhi Galouti"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO0bQP_g41lCXfClqZ0QC9CrQMmc1dJJHCsWwjblHofNOJvwYn91lu21976paai-AUcHIcrSP0NfGU8KVwv2kzp0YVb5LuajbKmOpZZw0WvL2grHMhyj3HY71YVUET4nSuh5QLWGtr-uO4pQ09PVyvC7hripHRElJV0MSfU9m2puVFJ1trhXJrqdDPiDEBUeXU6NJYES8QM71NvsTWKTze4tKSMxCN41whrRUp1lnD1HxkNrlyjQtU"
                    />
                  </div>
                  <div className="w-full mt-2 flex items-center justify-between bg-[#141b2b] text-white rounded-full px-2 py-1.5 shadow-md">
                    <button
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[#7d8497] hover:text-white active:scale-90 transition-transform cursor-pointer"
                      onClick={() => setGaloutiQty(Math.max(0, galoutiQty - 1))}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">remove</span>
                    </button>
                    <span className="font-headline-sm text-headline-sm text-[#ffb95f] font-bold px-2">{galoutiQty}</span>
                    <button
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[#7d8497] hover:text-white active:scale-90 transition-transform cursor-pointer"
                      onClick={() => setGaloutiQty(galoutiQty + 1)}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">add</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Customized Note Tag Strip */}
              <div className="pt-2 flex items-center justify-between bg-[#f3f4f5] rounded-xl px-3 py-2 text-[#191c1d]">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="material-symbols-outlined text-[16px] text-[#855300]">tune</span>
                  <span className="font-label-sm text-label-sm text-[#45464c] truncate">
                    Customization: <span className="font-semibold text-[#191c1d]">"Less spicy"</span>
                  </span>
                </div>
                <button className="font-label-sm text-label-sm text-[#855300] font-semibold shrink-0 cursor-pointer" type="button">
                  Edit
                </button>
              </div>
            </div>

            {/* ITEM 4: Kaffir Lime Chicken Tikka */}
            <div className="bg-white rounded-2xl p-4 shadow-sm flex gap-3.5 relative overflow-hidden transition-all duration-200 border border-[#e1e3e4]">
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-[3px] bg-white shadow-xs p-0.5 border border-[#ba1a1a]">
                      <span className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[6px] border-b-[#ba1a1a]" />
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#f3f4f5] text-[#191c1d] font-label-sm text-label-sm">
                      Charcoal Robata
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-[#191c1d] leading-snug">
                    Kaffir Lime Chicken Tikka
                  </h4>
                  <div className="font-currency-body text-currency-body text-[#191c1d] mt-1">₹390</div>
                  <p className="font-body-sm text-body-sm text-[#45464c] mt-1 line-clamp-2">
                    Boneless tender chicken infused with pounded Thai kaffir leaf, bird’s eye chili, mustard oil, and hung curd glaze.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1 text-[#45464c] font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px] text-[#855300]">local_fire_department</span>
                  <span>Medium spice • Smoky finish</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-between shrink-0 w-28">
                <div className="relative w-28 h-28 rounded-xl overflow-hidden shadow-xs bg-[#edeeef]">
                  <img
                    alt="Kaffir Lime Chicken Tikka"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmpD7OJRLY5BNGcXyhU6GtXvfhfZlTKeyx-loag-TDIRrFAkGB5hHAparUscjIkPM7JudYtOxryLDTB0wzrxhJdXAqkodPif414FcAVpczC_Yzu8BNCG2X0M9GZOX84bQZFczpFzhssChh2I0laeJy8DTmpq0V7aOgri7Uk8i7U_VhJGwJ4PciaXoeKe59y6AvidwATUmKRH_J5depHZMj9Q5l9ce6JJe4ugEKxUkaOOeKVEvSP4O3"
                  />
                </div>
                <div className="w-full mt-2 flex items-center justify-between bg-[#141b2b] text-white rounded-full px-2 py-1.5 shadow-md">
                  <button
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[#7d8497] hover:text-white active:scale-90 transition-transform cursor-pointer"
                    onClick={() => setTikkaQty(Math.max(0, tikkaQty - 1))}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">remove</span>
                  </button>
                  <span className="font-headline-sm text-headline-sm text-[#ffb95f] font-bold px-2">{tikkaQty}</span>
                  <button
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[#7d8497] hover:text-white active:scale-90 transition-transform cursor-pointer"
                    onClick={() => setTikkaQty(tikkaQty + 1)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Delighter / Pairing Suggestion Banner */}
          <div className="mx-4 mt-5 p-4 rounded-2xl bg-[#edeeef] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffddb8] flex items-center justify-center text-[#2a1700] shrink-0">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  restaurant
                </span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-[#191c1d] font-semibold">Pairing Tip for your table</p>
                <p className="font-body-sm text-body-sm text-[#45464c]">
                  Smoked Yuzu Ginger Ale goes best with Dumplings & Tikka.
                </p>
              </div>
            </div>
            <button
              className="px-3 py-1.5 rounded-full bg-white text-[#191c1d] font-label-sm text-label-sm font-bold shadow-xs active:scale-95 shrink-0 border border-[#e1e3e4] cursor-pointer"
              type="button"
            >
              + Add ₹180
            </button>
          </div>
        </div>

        {/* STICKY BOTTOM CART BUTTON / FLOATING CHECKOUT DRAWER */}
        {/* Exactly matches xpath: //div[contains(@class, 'fixed bottom-0')]//div[contains(@class, 'cursor-pointer')][.//span[contains(text(), 'View Cart')]] */}
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-safe bg-[#f8f9fa]/85 backdrop-blur-md border-t border-[#e1e3e4]">
          <div
            className="w-full max-w-md mx-auto bg-[#000000] text-white rounded-2xl p-3.5 shadow-xl transition-transform active:scale-[0.99] cursor-pointer flex flex-col gap-1.5"
            onClick={() => onNavigate('12. Your Order', 'push')}
          >
            {/* Main Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#fea619] text-[#684000] flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    shopping_bag
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-lg text-label-lg text-white font-bold">{totalItems} items</span>
                    <span className="text-[#7d8497] text-label-sm">•</span>
                    <span className="font-currency-display text-currency-display text-[#ffb95f]">₹{totalAmount}</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-[#7d8497] font-medium">
                    Extra taxes & charges calculated next
                  </span>
                </div>
              </div>

              {/* Right: View Cart Action */}
              <div className="flex items-center gap-1 pl-3">
                <span className="font-label-lg text-label-lg text-white font-bold tracking-tight">View Cart</span>
                <span className="material-symbols-outlined text-[20px] text-white font-bold">arrow_forward</span>
              </div>
            </div>

            {/* Subtext Strip */}
            <div className="flex items-center justify-between pt-1 text-[#7d8497]">
              <span className="font-body-sm text-body-sm flex items-center gap-1 truncate text-[#e7e8e9]">
                <span className="material-symbols-outlined text-[13px] text-[#ffb95f]">moped</span>
                Delivery from Cactus Club Cafe • 25 mins
              </span>
              <span className="font-label-sm text-label-sm text-[#ffb95f] font-semibold shrink-0">Free Deliv</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
