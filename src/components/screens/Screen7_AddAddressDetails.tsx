import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const Screen7_AddAddressDetails: React.FC<Props> = ({ onNavigate }) => {
  const [completeAddress, setCompleteAddress] = useState('Flat 402, Sea Pearl Apartments, Chimbai Road');
  const [aptSuite, setAptSuite] = useState('4th Floor, Tower B');
  const [landmark, setLandmark] = useState('Opposite St. Andrew’s Church');
  const [selectedTag, setSelectedTag] = useState<'home' | 'work' | 'other'>('home');
  const [dropoff, setDropoff] = useState<'hand' | 'doorstep' | 'gate'>('hand');
  const [instructions, setInstructions] = useState('Ring doorbell once. If unavailable, leave with lobby guard.');
  const [isGift, setIsGift] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      onNavigate('8. Home', 'push');
    }, 600);
  };

  const appendInstruction = (text: string) => {
    if (instructions.trim().length > 0) {
      setInstructions(`${instructions.trim()}. ${text}`);
    } else {
      setInstructions(text);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        title="Address Details"
        onBack={() => onNavigate('6. Add Address', 'push_back')}
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full bg-[#f8f9fa] pb-safe pt-28">
        <div className="flex flex-col w-full pb-32">
          {/* Map Preview Card */}
          <div className="px-4 pt-1 pb-2">
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#e7e8e9] shadow-md border border-[#e1e3e4]">
              <div
                className="w-full h-40 bg-cover bg-center"
                data-location="Sea Pearl Apartments, Chimbai Road, Bandra West, Mumbai, Maharashtra"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-6PqrEjTQ-fyXzUNNeCFRg4WzrUFHmchkMvOZ6C1i6bQA2BJSngpGwZd1yUcrJtavXKL9eaBY_9r1c1nwNdi1twlvVUfADXOKIax5_7WVl-eaCGS7NZBDax-39XkM_236-_2y7Z0m1uPb6471GfIgxS7CpM9JFqXDENNlrGYbLLLwMJw0QcN8KnXXT3AkjBEOpn2HtXFSGjyjwnuE5KT0KZZFWiJ0mKK1_hy7WG5xrDMCwhdYUUzc')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Center Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center pointer-events-none">
                <div className="relative flex items-center justify-center">
                  <div className="absolute -inset-2 bg-[#fea619]/40 rounded-full animate-ping" />
                  <div className="relative bg-[#fea619] text-[#684000] p-1.5 rounded-full shadow-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      location_on
                    </span>
                  </div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-black mt-0.5 opacity-60" />
              </div>

              {/* Overlay bar */}
              <div className="absolute bottom-0 inset-x-0 p-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 min-w-0 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                  <span className="material-symbols-outlined text-[#855300] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    explore
                  </span>
                  <span className="font-label-sm text-label-sm text-[#191c1d] truncate">
                    Flat 402, Sea Pearl Apt, Bandra W
                  </span>
                </div>
                <button
                  className="shrink-0 bg-[#000000] text-white font-label-sm text-label-sm px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1 active:scale-95 transition-transform duration-150 cursor-pointer"
                  id="btn-change-pin"
                  onClick={() => onNavigate('6. Add Address', 'push_back')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[14px]">edit_location_alt</span>
                  <span>Change Pin</span>
                </button>
              </div>
            </div>
          </div>

          {/* Form Fields Container */}
          <div className="px-4 flex flex-col gap-3.5 mt-1">
            {/* Complete Address Field */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md text-[#45464c] flex items-center gap-1" htmlFor="complete-address">
                  <span>Complete Address</span>
                  <span className="text-[#ba1a1a] font-body-sm">*</span>
                </label>
                <span className="font-label-sm text-label-sm text-[#855300] flex items-center gap-0.5 font-semibold">
                  <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                  Verified Area
                </span>
              </div>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-[#76777d] text-[20px] pointer-events-none">
                  home_pin
                </span>
                <input
                  className="w-full h-12 pl-10 pr-4 bg-white text-[#191c1d] font-body-md text-body-md rounded-xl outline-none shadow-sm border border-[#e1e3e4] focus:border-[#191c1d]"
                  id="complete-address"
                  type="text"
                  value={completeAddress}
                  onChange={(e) => setCompleteAddress(e.target.value)}
                />
              </div>
            </div>

            {/* Apartment / Suite / Floor & Landmark */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-[#45464c]" htmlFor="apt-suite">
                  Apartment / Suite / Floor
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3.5 text-[#76777d] text-[20px] pointer-events-none">
                    apartment
                  </span>
                  <input
                    className="w-full h-12 pl-10 pr-4 bg-white text-[#191c1d] font-body-md text-body-md rounded-xl outline-none shadow-sm border border-[#e1e3e4] focus:border-[#191c1d]"
                    id="apt-suite"
                    type="text"
                    value={aptSuite}
                    onChange={(e) => setAptSuite(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-[#45464c]" htmlFor="landmark">
                  Landmark / Nearby
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3.5 text-[#76777d] text-[20px] pointer-events-none">
                    near_me
                  </span>
                  <input
                    className="w-full h-12 pl-10 pr-4 bg-white text-[#191c1d] font-body-md text-body-md rounded-xl outline-none shadow-sm border border-[#e1e3e4] focus:border-[#191c1d]"
                    id="landmark"
                    placeholder="e.g. Near Lilavati Hospital or cafe"
                    type="text"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Address Tag Selector (Pills) */}
            <div className="flex flex-col gap-2 pt-1">
              <span className="font-label-md text-label-md text-[#45464c]">Save Address As</span>
              <div className="flex items-center gap-2.5" id="tag-selector-group">
                <button
                  className={`tag-btn flex-1 h-10 px-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all duration-150 cursor-pointer ${
                    selectedTag === 'home'
                      ? 'bg-[#000000] text-white font-label-md'
                      : 'bg-white text-[#45464c] border border-[#e1e3e4] font-label-md'
                  }`}
                  data-tag="home"
                  onClick={() => setSelectedTag('home')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    home
                  </span>
                  <span>Home</span>
                </button>

                <button
                  className={`tag-btn flex-1 h-10 px-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all duration-150 cursor-pointer ${
                    selectedTag === 'work'
                      ? 'bg-[#000000] text-white font-label-md'
                      : 'bg-white text-[#45464c] border border-[#e1e3e4] font-label-md'
                  }`}
                  data-tag="work"
                  onClick={() => setSelectedTag('work')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">domain</span>
                  <span>Work</span>
                </button>

                <button
                  className={`tag-btn flex-1 h-10 px-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all duration-150 cursor-pointer ${
                    selectedTag === 'other'
                      ? 'bg-[#000000] text-white font-label-md'
                      : 'bg-white text-[#45464c] border border-[#e1e3e4] font-label-md'
                  }`}
                  data-tag="other"
                  onClick={() => setSelectedTag('other')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span>Other</span>
                </button>
              </div>
            </div>

            {/* Drop-off Options Segment */}
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-[#45464c]">Drop-off Preference</span>
                <span className="font-label-sm text-label-sm text-[#76777d] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">shield</span>
                  Contactless ready
                </span>
              </div>

              <div className="flex flex-col gap-2" id="dropoff-options">
                {/* Hand it to me */}
                <div
                  className={`dropoff-item flex items-center justify-between p-3.5 rounded-xl shadow-sm cursor-pointer active:scale-[0.99] transition-all duration-150 border ${
                    dropoff === 'hand' ? 'bg-white border-[#000000]' : 'bg-[#f3f4f5] border-transparent'
                  }`}
                  data-dropoff="hand"
                  onClick={() => setDropoff('hand')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#ffddb8] flex items-center justify-center text-[#2a1700]">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        front_hand
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-[#191c1d]">Hand it to me</span>
                      <span className="font-body-sm text-body-sm text-[#76777d]">Meet rider at your front door</span>
                    </div>
                  </div>
                  <div
                    className={`radio-indicator w-5 h-5 rounded-full flex items-center justify-center ${
                      dropoff === 'hand' ? 'bg-[#000000]' : 'bg-[#e1e3e4]'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${dropoff === 'hand' ? 'bg-white' : 'bg-transparent'}`} />
                  </div>
                </div>

                {/* Leave at doorstep */}
                <div
                  className={`dropoff-item flex items-center justify-between p-3.5 rounded-xl shadow-sm cursor-pointer active:scale-[0.99] transition-all duration-150 border ${
                    dropoff === 'doorstep' ? 'bg-white border-[#000000]' : 'bg-[#f3f4f5] border-transparent'
                  }`}
                  data-dropoff="doorstep"
                  onClick={() => setDropoff('doorstep')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e7e8e9] flex items-center justify-center text-[#45464c]">
                      <span className="material-symbols-outlined text-[18px]">door_front</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-[#191c1d]">Leave at doorstep</span>
                      <span className="font-body-sm text-body-sm text-[#76777d]">Rider places order on door mat</span>
                    </div>
                  </div>
                  <div
                    className={`radio-indicator w-5 h-5 rounded-full flex items-center justify-center ${
                      dropoff === 'doorstep' ? 'bg-[#000000]' : 'bg-[#e1e3e4]'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${dropoff === 'doorstep' ? 'bg-white' : 'bg-transparent'}`} />
                  </div>
                </div>

                {/* Leave at security gate */}
                <div
                  className={`dropoff-item flex items-center justify-between p-3.5 rounded-xl shadow-sm cursor-pointer active:scale-[0.99] transition-all duration-150 border ${
                    dropoff === 'gate' ? 'bg-white border-[#000000]' : 'bg-[#f3f4f5] border-transparent'
                  }`}
                  data-dropoff="gate"
                  onClick={() => setDropoff('gate')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e7e8e9] flex items-center justify-center text-[#45464c]">
                      <span className="material-symbols-outlined text-[18px]">sensor_door</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-[#191c1d]">Leave at security gate</span>
                      <span className="font-body-sm text-body-sm text-[#76777d]">Collect from building gatekeeper</span>
                    </div>
                  </div>
                  <div
                    className={`radio-indicator w-5 h-5 rounded-full flex items-center justify-center ${
                      dropoff === 'gate' ? 'bg-[#000000]' : 'bg-[#e1e3e4]'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${dropoff === 'gate' ? 'bg-white' : 'bg-transparent'}`} />
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Instructions */}
            <div className="flex flex-col gap-1 pt-1">
              <div className="flex items-center justify-between">
                <label className="font-label-md text-label-md text-[#45464c]" htmlFor="delivery-notes">
                  Delivery Instructions for Rider
                </label>
                <button
                  className="font-label-sm text-label-sm text-[#855300] font-semibold flex items-center gap-1 active:scale-95 transition-transform cursor-pointer"
                  id="voice-memo-btn"
                  type="button"
                  onClick={() => appendInstruction('Voice memo: Calling security')}
                >
                  <span className="material-symbols-outlined text-[15px] animate-pulse">mic</span>
                  <span>Voice Note</span>
                </button>
              </div>
              <div className="relative bg-white rounded-xl shadow-sm overflow-hidden p-3 flex flex-col gap-2 border border-[#e1e3e4]">
                <textarea
                  className="w-full bg-transparent text-[#191c1d] font-body-md text-body-md resize-none outline-none"
                  id="delivery-notes"
                  rows={2}
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                />
                <div className="flex items-center justify-between pt-1 border-t border-[#f3f4f5]">
                  <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 no-scrollbar">
                    <button
                      className="px-2 py-1 rounded-full bg-[#f3f4f5] font-label-sm text-label-sm text-[#45464c] shrink-0 active:scale-95 cursor-pointer"
                      onClick={() => appendInstruction("Don't call")}
                      type="button"
                    >
                      + Don't call
                    </button>
                    <button
                      className="px-2 py-1 rounded-full bg-[#f3f4f5] font-label-sm text-label-sm text-[#45464c] shrink-0 active:scale-95 cursor-pointer"
                      onClick={() => appendInstruction('Pet inside')}
                      type="button"
                    >
                      + Pet inside
                    </button>
                    <button
                      className="px-2 py-1 rounded-full bg-[#f3f4f5] font-label-sm text-label-sm text-[#45464c] shrink-0 active:scale-95 cursor-pointer"
                      onClick={() => appendInstruction('Call on arrival')}
                      type="button"
                    >
                      + Call on arrival
                    </button>
                  </div>
                  <span className="material-symbols-outlined text-[#76777d] text-[18px]">edit_note</span>
                </div>
              </div>
            </div>

            {/* Sending a Gift Micro-card Toggle */}
            <label className="p-3.5 bg-white rounded-xl shadow-sm flex items-center justify-between cursor-pointer select-none active:scale-[0.99] transition-transform border border-[#e1e3e4]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ffddb8] flex items-center justify-center text-[#2a1700] shadow-sm">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    featured_seasonal_and_gifts
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-headline-sm text-headline-sm text-[#191c1d]">I’m sending a gift</span>
                    <span className="font-label-sm text-label-sm bg-[#ffb95f]/40 text-[#2a1700] px-1.5 py-0.5 rounded-full font-bold">
                      Surprise
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-[#76777d]">
                    Rider won't disclose pricing invoice
                  </span>
                </div>
              </div>
              <div className="relative inline-flex items-center">
                <input
                  className="sr-only peer"
                  id="gift-toggle"
                  type="checkbox"
                  checked={isGift}
                  onChange={(e) => setIsGift(e.target.checked)}
                />
                <div className="w-11 h-6 bg-[#e1e3e4] rounded-full peer peer-checked:bg-[#fea619] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
              </div>
            </label>
          </div>

          {/* Bottom Floating Transactional Bar */}
          <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-8 shadow-[0_-8px_24px_rgba(0,0,0,0.06)] z-40 border-t border-[#e1e3e4]">
            <button
              className="w-full h-14 bg-[#000000] text-white font-label-lg text-label-lg rounded-2xl shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-transform duration-150 cursor-pointer"
              id="save-address-btn"
              onClick={handleSave}
              type="button"
            >
              {isSaving ? (
                <>
                  <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
                  <span>Saving Details...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  <span>Save Address</span>
                </>
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
