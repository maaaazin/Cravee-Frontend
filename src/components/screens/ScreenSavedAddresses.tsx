import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const ScreenSavedAddresses: React.FC<Props> = ({ onNavigate }) => {
  const [selectedId, setSelectedId] = useState('1');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 1800);
  };

  const handleSelect = (id: string, name: string) => {
    setSelectedId(id);
    showToast(`Delivering to ${name}`);
    setTimeout(() => {
      onNavigate('13. Checkout', 'push_back');
    }, 700);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        title="Saved Addresses"
        onBack={() => onNavigate('8. Home', 'push_back')}
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full pt-28 bg-[#f8f9fa] pb-safe">
        <div className="flex flex-col w-full px-4 pb-8 gap-3.5">
          {/* Header Context Bar */}
          <div className="flex items-center justify-between pt-1">
            <div>
              <p className="font-headline-md text-headline-md text-[#191c1d]">Saved Locations</p>
              <p className="font-body-sm text-body-sm text-[#45464c]">
                3 addresses saved for rapid doorstep delivery
              </p>
            </div>
            <button
              className="h-9 px-3.5 bg-[#fea619]/20 text-[#855300] rounded-full flex items-center gap-1 font-semibold active:scale-95 transition-transform cursor-pointer"
              onClick={() => onNavigate('6. Add Address', 'push')}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span className="font-label-md text-label-md">Add New</span>
            </button>
          </div>

          {/* Live GPS Quick Detection Banner */}
          <div className="bg-[#f3f4f5] rounded-2xl p-4 shadow-sm border border-[#e1e3e4]">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#fea619] text-[#684000] flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[22px]">my_location</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#fea619] animate-pulse" />
                  <p className="font-label-md text-label-md text-[#191c1d] font-bold truncate">
                    Deliver to current location?
                  </p>
                </div>
                <p className="font-body-sm text-body-sm text-[#45464c] truncate">
                  12th Main Rd, HAL 2nd Stage, Indiranagar
                </p>
              </div>
              <button
                className="shrink-0 px-3 py-1.5 bg-[#000000] text-white rounded-full font-label-sm text-label-sm font-semibold active:scale-95 transition-transform cursor-pointer"
                onClick={() => handleSelect('gps', 'Current GPS Location')}
                type="button"
              >
                Select
              </button>
            </div>
          </div>

          {/* Section Header */}
          <div className="flex items-center justify-between mt-1">
            <span className="font-label-md text-label-md text-[#45464c] uppercase tracking-wider font-semibold">
              Default & Saved
            </span>
            <span className="font-label-sm text-label-sm text-[#855300] font-semibold">Tap card to select</span>
          </div>

          {/* Card 1: Home */}
          <article
            className={`bg-white rounded-2xl p-4 shadow-sm transition-all cursor-pointer border ${
              selectedId === '1' ? 'border-[#000000] ring-1 ring-[#000000]' : 'border-[#e1e3e4]'
            }`}
            onClick={() => handleSelect('1', 'Home')}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-full bg-[#ffddb8] text-[#2a1700] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    home
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="font-headline-sm text-headline-sm text-[#191c1d] font-bold">Home</h2>
                  <span className="bg-[#855300] text-white px-2 py-0.5 rounded-full font-label-sm text-[10px] font-bold uppercase">
                    Default
                  </span>
                </div>
              </div>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                  selectedId === '1' ? 'bg-[#fea619] text-[#684000]' : 'bg-[#e1e3e4]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px] font-bold">check</span>
              </div>
            </div>

            <div className="pl-11 flex flex-col gap-1.5">
              <p className="font-body-md text-body-md text-[#191c1d] leading-snug">
                Flat 402, Prestige Hermitage, 12th Main Road, Indiranagar, Bengaluru, 560038
              </p>
              <div className="flex items-center gap-1.5 text-[#45464c] font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[15px]">call</span>
                <span>+91 98765 43210</span>
                <span>•</span>
                <span>Opp. Glen's Bakehouse</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 bg-[#f3f4f5] px-2.5 py-1 rounded-full w-fit">
                <span className="material-symbols-outlined text-[14px] text-[#45464c]">shield</span>
                <span className="font-label-sm text-label-sm text-[#45464c]">Leave with security</span>
              </div>

              <div className="flex items-center justify-between pt-2 mt-1">
                <span className="font-label-sm text-label-sm text-[#855300] flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#855300]" />
                  Selected for Delivery
                </span>
                <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                  <button
                    className="px-3 py-1.5 rounded-full bg-[#f3f4f5] hover:bg-[#edeeef] text-[#191c1d] font-label-md text-label-md flex items-center gap-1 border border-[#e1e3e4] cursor-pointer"
                    onClick={() => onNavigate('7. Add Address Details', 'push')}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[15px]">edit</span>
                    <span>Edit</span>
                  </button>
                  <button
                    className="w-8 h-8 rounded-full bg-[#f3f4f5] hover:bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center border border-[#e1e3e4] cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2: Office / Work */}
          <article
            className={`bg-white rounded-2xl p-4 shadow-sm transition-all cursor-pointer border ${
              selectedId === '2' ? 'border-[#000000] ring-1 ring-[#000000]' : 'border-[#e1e3e4]'
            }`}
            onClick={() => handleSelect('2', 'Office / Work')}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-full bg-[#e7e8e9] text-[#191c1d] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    work
                  </span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-[#191c1d] font-bold">Office / Work</h2>
              </div>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                  selectedId === '2' ? 'bg-[#fea619] text-[#684000]' : 'bg-[#e1e3e4]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {selectedId === '2' ? 'check' : 'radio_button_unchecked'}
                </span>
              </div>
            </div>

            <div className="pl-11 flex flex-col gap-1.5">
              <p className="font-body-md text-body-md text-[#191c1d] leading-snug">
                Floor 6, Tech Park Alpha, Outer Ring Road, Bellandur, Bengaluru, 560103
              </p>
              <div className="flex items-center gap-1.5 text-[#45464c] font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[15px]">call</span>
                <span>+91 98765 43210</span>
                <span>•</span>
                <span>Tower B Reception</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 bg-[#f3f4f5] px-2.5 py-1 rounded-full w-fit">
                <span className="material-symbols-outlined text-[14px] text-[#45464c]">phone_in_talk</span>
                <span className="font-label-sm text-label-sm text-[#45464c]">Call when downstairs</span>
              </div>

              <div className="flex items-center justify-between pt-2 mt-1">
                <button
                  className="font-label-sm text-label-sm text-[#855300] hover:underline font-semibold cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId('2');
                    showToast('Office set as default');
                  }}
                  type="button"
                >
                  Set as Default
                </button>
                <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                  <button
                    className="px-3 py-1.5 rounded-full bg-[#f3f4f5] hover:bg-[#edeeef] text-[#191c1d] font-label-md text-label-md flex items-center gap-1 border border-[#e1e3e4] cursor-pointer"
                    onClick={() => onNavigate('7. Add Address Details', 'push')}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[15px]">edit</span>
                    <span>Edit</span>
                  </button>
                  <button
                    className="w-8 h-8 rounded-full bg-[#f3f4f5] hover:bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center border border-[#e1e3e4] cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Card 3: Parents' Place */}
          <article
            className={`bg-white rounded-2xl p-4 shadow-sm transition-all cursor-pointer border ${
              selectedId === '3' ? 'border-[#000000] ring-1 ring-[#000000]' : 'border-[#e1e3e4]'
            }`}
            onClick={() => handleSelect('3', "Parents' Place")}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-full bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    favorite
                  </span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-[#191c1d] font-bold">Parents' Place</h2>
              </div>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                  selectedId === '3' ? 'bg-[#fea619] text-[#684000]' : 'bg-[#e1e3e4]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {selectedId === '3' ? 'check' : 'radio_button_unchecked'}
                </span>
              </div>
            </div>

            <div className="pl-11 flex flex-col gap-1.5">
              <p className="font-body-md text-body-md text-[#191c1d] leading-snug">
                #84, 4th Cross, 7th Block, Koramangala, Bengaluru, 560095
              </p>
              <div className="flex items-center gap-1.5 text-[#45464c] font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[15px]">call</span>
                <span>+91 98450 11223</span>
              </div>

              <div className="flex items-center justify-between pt-2 mt-1">
                <button
                  className="font-label-sm text-label-sm text-[#855300] hover:underline font-semibold cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId('3');
                    showToast("Parents' Place set as default");
                  }}
                  type="button"
                >
                  Set as Default
                </button>
                <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                  <button
                    className="px-3 py-1.5 rounded-full bg-[#f3f4f5] hover:bg-[#edeeef] text-[#191c1d] font-label-md text-label-md flex items-center gap-1 border border-[#e1e3e4] cursor-pointer"
                    onClick={() => onNavigate('7. Add Address Details', 'push')}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[15px]">edit</span>
                    <span>Edit</span>
                  </button>
                  <button
                    className="w-8 h-8 rounded-full bg-[#f3f4f5] hover:bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center border border-[#e1e3e4] cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col gap-3">
            <button
              className="w-full h-14 bg-white text-[#191c1d] rounded-2xl flex items-center justify-between px-4 shadow-sm active:scale-[0.99] transition-transform border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('6. Add Address', 'push')}
              type="button"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#fea619]/20 text-[#855300] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">add_location_alt</span>
                </div>
                <span className="font-label-lg text-label-lg font-semibold text-[#191c1d]">
                  Add New Delivery Address
                </span>
              </div>
              <span className="material-symbols-outlined text-[#76777d] text-[20px]">chevron_right</span>
            </button>

            <button
              className="w-full h-12 bg-[#000000] text-white rounded-full flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform font-label-lg text-label-lg font-semibold cursor-pointer"
              onClick={() => handleSelect('gps', 'Current GPS')}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-[#fea619]">gps_fixed</span>
              <span>Use GPS Current Location</span>
            </button>
          </div>

          {/* Security Banner */}
          <div className="mt-3 flex items-center justify-center gap-2 p-3 bg-[#f3f4f5] rounded-xl text-center border border-[#e1e3e4]">
            <span className="material-symbols-outlined text-[18px] text-[#855300] shrink-0">encrypted</span>
            <p className="font-label-sm text-label-sm text-[#45464c]">
              Addresses are encrypted & shared only with assigned Cravee delivery partners.
            </p>
          </div>
        </div>

        {/* Toast */}
        {toastMsg && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-[#000000] text-white px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 transition-all">
            <span className="material-symbols-outlined text-[#fea619] text-[18px]">check_circle</span>
            <span className="font-label-md text-label-md">{toastMsg}</span>
          </div>
        )}
      </main>
    </div>
  );
};
