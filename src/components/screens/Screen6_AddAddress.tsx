import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const Screen6_AddAddress: React.FC<Props> = ({ onNavigate }) => {
  const [selectedAddress, setSelectedAddress] = useState('Bandra West, Mumbai');
  const [searchQuery, setSearchQuery] = useState('');
  const [notes, setNotes] = useState('');

  const handleConfirm = () => {
    onNavigate('7. Add Address Details', 'push');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        title="Add Delivery Address"
        onBack={() => onNavigate('3. Sign In', 'push_back')}
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full bg-[#f8f9fa] pb-safe pt-28">
        <div className="flex flex-col w-full pb-8">
          {/* Search Input Container */}
          <div className="px-4 pt-2 pb-2">
            <div className="relative flex items-center w-full">
              <div className="absolute left-4 flex items-center pointer-events-none text-[#855300]">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input
                className="w-full h-12 pl-11 pr-10 bg-[#f3f4f5] text-[#191c1d] placeholder:text-[#76777d] font-body-md text-body-md rounded-xl outline-none focus:bg-white focus:shadow-md transition-all duration-200 border border-transparent focus:border-[#e1e3e4]"
                id="address-search-input"
                placeholder="Search street, locality, or landmark in Mumbai..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="absolute right-3 p-1 text-[#76777d] hover:text-[#191c1d] active:scale-95 transition-transform cursor-pointer"
                  onClick={() => setSearchQuery('')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>
          </div>

          {/* GPS Quick Action Card */}
          <div className="px-4 pt-1 pb-2">
            <div
              className="w-full bg-white rounded-xl p-4 shadow-sm active:scale-[0.99] transition-all duration-150 flex items-center justify-between cursor-pointer border border-[#e1e3e4]"
              onClick={() => {
                setSelectedAddress('Current GPS: Bandra West, Mumbai 400050');
                setSearchQuery('Bandra West, Mumbai (Current GPS)');
              }}
              role="button"
              tabIndex={0}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 rounded-full bg-[#ffddb8] flex items-center justify-center shrink-0 shadow-inner">
                  <span className="material-symbols-outlined text-[#855300] text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    near_me
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-headline-sm text-headline-sm text-[#191c1d] truncate">Use Current Location</span>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-[#fea619]/20 text-[#855300] font-label-sm text-[10px] tracking-wide uppercase font-bold">
                      Accurate
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-[#45464c] truncate">
                    Using GPS • Bandra West, Mumbai 400050
                  </span>
                </div>
              </div>
              <div className="pl-2 shrink-0 text-[#76777d]">
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </div>
            </div>
          </div>

          {/* Interactive / Visual Map Pinning Area */}
          <div className="px-4 py-1">
            <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-sm bg-[#e7e8e9] border border-[#e1e3e4]">
              {/* Embedded Styled Map View */}
              <div
                className="w-full h-full bg-cover bg-center"
                data-location="Bandra West, Mumbai, Maharashtra, India"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDr1qvlVmBuqxRVLdWlgx83BLJU8Rx2t9V8yTMgnA5GO_HW1Wsp3eu9gce9tzsntDW3ek8W6PQjqQxhsZDpXUHKPobB7Z1_QcNhH7ju06j5erM7_b-aDajIf0ojJudWLCzIuaSnbNMo8a6q7SE-x1QKTqtutW6d3PLVObKP8f1XWVJXm1_282fJjnLAJu62rmBjzqEdxLoOPQEWBvVlZsUxMnHs0vIgHVKstD9nsAobL9x1SsJD2wG1')`,
                }}
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />

              {/* Delivery Zone Coverage Indicator */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-[#fea619] animate-pulse" />
                <span className="font-label-sm text-label-sm text-[#191c1d] font-semibold">30 min Express Zone</span>
              </div>

              {/* Recenter Button */}
              <button
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-[#191c1d] active:scale-90 transition-all duration-200 cursor-pointer"
                type="button"
                onClick={() => setSelectedAddress('Bandra West (Re-centered)')}
              >
                <span className="material-symbols-outlined text-[18px]">my_location</span>
              </button>

              {/* Center Delivery Marker Pin Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -mt-4">
                <div className="bg-[#000000] text-white px-3 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 mb-1.5 animate-bounce">
                  <span className="material-symbols-outlined text-[#ffddb8] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    restaurant
                  </span>
                  <span className="font-label-md text-label-md text-white tracking-tight">Delivering here</span>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#000000] flex items-center justify-center shadow-lg">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffb95f]" />
                  </div>
                  <div className="absolute -bottom-2 w-4 h-1.5 bg-black/40 rounded-full blur-[1px]" />
                </div>
              </div>

              {/* Location Verification Detail Bar inside Map footer */}
              <div className="absolute bottom-2 inset-x-2 bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="material-symbols-outlined text-[#855300] text-[18px]">pin_drop</span>
                  <span className="font-body-sm text-body-sm text-[#191c1d] truncate font-semibold">
                    Perry Cross Rd, Bandra West
                  </span>
                </div>
                <span
                  className="font-label-sm text-label-sm text-[#855300] shrink-0 font-semibold cursor-pointer"
                  onClick={() => onNavigate('7. Add Address Details', 'push')}
                >
                  Adjust
                </span>
              </div>
            </div>
          </div>

          {/* Saved / Nearby Addresses Section */}
          <div className="px-4 pt-4 flex flex-col">
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-1.5">
                <span className="font-headline-sm text-headline-sm text-[#191c1d]">Nearby addresses</span>
                <span className="font-label-sm text-label-sm text-[#76777d]">• Mumbai</span>
              </div>
              <span className="font-label-sm text-label-sm text-[#855300] font-semibold cursor-pointer">Recent</span>
            </div>

            {/* Address Cards List */}
            <div className="flex flex-col gap-2.5">
              {/* Item 1: BKC */}
              <div
                className={`address-card w-full bg-white rounded-xl p-3.5 shadow-sm active:scale-[0.99] transition-all duration-150 flex items-start justify-between cursor-pointer border ${
                  selectedAddress.includes('BKC') ? 'border-[#000000] shadow-md' : 'border-[#e1e3e4]'
                }`}
                onClick={() => setSelectedAddress('Bandra Kurla Complex (BKC)')}
                role="button"
                tabIndex={0}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#edeeef] flex items-center justify-center shrink-0 text-[#45464c] mt-0.5">
                    <span className="material-symbols-outlined text-[20px]">corporate_fare</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-sm text-headline-sm text-[#191c1d] truncate">
                        Bandra Kurla Complex (BKC)
                      </span>
                      <span className="px-1.5 py-0.5 rounded-full bg-[#e7e8e9] text-[#45464c] font-label-sm text-[10px]">
                        Work
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-[#45464c] truncate mt-0.5">
                      G Block, Bandra Kurla Complex, Mumbai
                    </span>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-[#76777d]">
                        <span className="material-symbols-outlined text-[14px]">schedule</span> 20-25 mins
                      </span>
                      <span className="text-[#76777d] text-[10px]">•</span>
                      <span className="font-label-sm text-label-sm text-[#855300] font-medium">Free delivery available</span>
                    </div>
                  </div>
                </div>
                <div
                  className={`selection-indicator w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    selectedAddress.includes('BKC') ? 'bg-[#000000] text-white' : 'bg-[#f3f4f5] text-transparent'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
              </div>

              {/* Item 2: Pali Hill */}
              <div
                className={`address-card w-full bg-white rounded-xl p-3.5 shadow-sm active:scale-[0.99] transition-all duration-150 flex items-start justify-between cursor-pointer border ${
                  selectedAddress.includes('Pali') ? 'border-[#000000] shadow-md' : 'border-[#e1e3e4]'
                }`}
                onClick={() => setSelectedAddress('Pali Hill')}
                role="button"
                tabIndex={0}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#edeeef] flex items-center justify-center shrink-0 text-[#45464c] mt-0.5">
                    <span className="material-symbols-outlined text-[20px]">home_pin</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-sm text-headline-sm text-[#191c1d] truncate">Pali Hill</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-[#e7e8e9] text-[#45464c] font-label-sm text-[10px]">
                        Saved
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-[#45464c] truncate mt-0.5">
                      Union Park, Off Carter Road, Bandra West, Mumbai
                    </span>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-[#76777d]">
                        <span className="material-symbols-outlined text-[14px]">schedule</span> 15-20 mins
                      </span>
                      <span className="text-[#76777d] text-[10px]">•</span>
                      <span className="font-label-sm text-label-sm text-[#45464c]">Top Cravee hub</span>
                    </div>
                  </div>
                </div>
                <div
                  className={`selection-indicator w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    selectedAddress.includes('Pali') ? 'bg-[#000000] text-white' : 'bg-[#f3f4f5] text-transparent'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
              </div>

              {/* Item 3: Linking Road */}
              <div
                className={`address-card w-full bg-white rounded-xl p-3.5 shadow-sm active:scale-[0.99] transition-all duration-150 flex items-start justify-between cursor-pointer border ${
                  selectedAddress.includes('Linking') ? 'border-[#000000] shadow-md' : 'border-[#e1e3e4]'
                }`}
                onClick={() => setSelectedAddress('Linking Road')}
                role="button"
                tabIndex={0}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#edeeef] flex items-center justify-center shrink-0 text-[#45464c] mt-0.5">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-sm text-headline-sm text-[#191c1d] truncate">Linking Road</span>
                    </div>
                    <span className="font-body-sm text-body-sm text-[#45464c] truncate mt-0.5">
                      Near National College, Khar West, Mumbai
                    </span>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-[#76777d]">
                        <span className="material-symbols-outlined text-[14px]">schedule</span> 25-30 mins
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`selection-indicator w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    selectedAddress.includes('Linking') ? 'bg-[#000000] text-white' : 'bg-[#f3f4f5] text-transparent'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Delivery Notes Micro-Field */}
          <div className="px-4 pt-3 pb-2">
            <div className="bg-white rounded-xl p-2.5 flex items-center gap-2.5 border border-[#e1e3e4]">
              <div className="w-8 h-8 rounded-full bg-[#edeeef] flex items-center justify-center text-[#76777d] shrink-0">
                <span className="material-symbols-outlined text-[16px]">edit_note</span>
              </div>
              <input
                className="w-full bg-transparent text-[#191c1d] placeholder:text-[#76777d] font-body-sm text-body-sm outline-none"
                placeholder="Add apartment, flat number or landmark note..."
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>

          {/* Bottom Sticky CTA Container */}
          <div className="px-4 pt-2 pb-2 mt-auto">
            <button
              className="w-full h-14 bg-[#000000] text-white rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-xl active:scale-[0.98] transition-transform duration-150 cursor-pointer"
              id="confirm-cta-button"
              onClick={handleConfirm}
              type="button"
            >
              <span>Confirm Location & Continue</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
            <p className="text-center font-label-sm text-label-sm text-[#76777d] mt-2">
              Delivery available for over 850+ artisan kitchens in Mumbai
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
