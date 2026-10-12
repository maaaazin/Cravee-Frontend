import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';

interface Props {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const ALL_SCREENS: { id: ScreenId; label: string; group: string }[] = [
  { id: '2. Sign In / Sign Up — Initial Screen', label: '1. Welcome & Initial Screen', group: 'Auth & Onboarding' },
  { id: '3. Sign In', label: '2. Sign In', group: 'Auth & Onboarding' },
  { id: '4. Sign Up', label: '3. Sign Up', group: 'Auth & Onboarding' },
  { id: '6. Add Address', label: '4. Add Delivery Address (Map)', group: 'Address & Location' },
  { id: '7. Add Address Details', label: '5. Add Address Details & Notes', group: 'Address & Location' },
  { id: 'Saved Addresses', label: '6. Saved Addresses List', group: 'Address & Location' },
  { id: '8. Home', label: '7. Home (Gourmet Feed & Specialties)', group: 'Discovery' },
  { id: '9. Search', label: '8. Search & Explore Cuisines', group: 'Discovery' },
  { id: 'Search Results', label: '9. Search Results (Truffle Pasta)', group: 'Discovery' },
  { id: 'Favorites', label: '10. Favorites (Dishes & Spots)', group: 'Discovery' },
  { id: '10. Restaurant Menu', label: '11. Restaurant Menu (Cactus Club)', group: 'Menu & Ordering' },
  { id: '11. Restaurant Menu with Cart', label: '12. Menu with Sticky Cart Bar', group: 'Menu & Ordering' },
  { id: '12. Your Order', label: '13. Your Order Review', group: 'Checkout Flow' },
  { id: '13. Checkout', label: '14. Checkout & Drop-off Preference', group: 'Checkout Flow' },
  { id: '14. Select Payment Method', label: '15. Select Payment Method (UPI/Cards)', group: 'Checkout Flow' },
  { id: 'Saved Payment Methods', label: '16. Saved Payment Methods (Manage)', group: 'Checkout Flow' },
  { id: '15. Payment Confirmed', label: '17. Payment Confirmed Celebration', group: 'Order Tracking' },
  { id: 'Track Order', label: '18. Live Order Tracking Map', group: 'Order Tracking' },
  { id: 'Order Chat', label: '19. Order Chat with Delivery Captain', group: 'Order Tracking' },
  { id: 'Order Receipt', label: '20. Order Receipt & Tax Breakdown', group: 'Order History' },
  { id: 'Past Orders History', label: '21. Past Orders History', group: 'Order History' },
  { id: '16. Rate Your Experience', label: '22. Rate Your Experience (Moods)', group: 'Feedback' },
  { id: '17. My Account', label: '23. My Account & Profile', group: 'Profile & Settings' },
];

export const ScreenSwitcher: React.FC<Props> = ({ currentScreen, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filteredScreens = ALL_SCREENS.filter(
    (s) =>
      s.label.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase()) ||
      s.group.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Floating Quick Drawer Switcher Pill */}
      <div className="fixed top-12 right-3 z-50">
        <button
          className="bg-black/90 text-white backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-semibold flex items-center gap-1.5 shadow-2xl hover:bg-black active:scale-95 transition-all border border-white/20 cursor-pointer"
          onClick={() => setIsOpen(true)}
          type="button"
          title="Jump to any screen"
        >
          <span className="w-2 h-2 rounded-full bg-[#fea619] animate-pulse" />
          <span className="truncate max-w-[120px]">
            {ALL_SCREENS.find((s) => s.id === currentScreen)?.label.split('.')[1]?.trim() || currentScreen}
          </span>
          <span className="material-symbols-outlined text-[14px]">tune</span>
        </button>
      </div>

      {/* Modal Sheet for 23 Screens */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-0 sm:p-4">
          <div
            className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-[#e1e3e4]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 border-b border-[#f3f4f5] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#855300] text-[22px]">view_carousel</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-[#191c1d] font-bold">All 23 Prototype Screens</h3>
                  <p className="font-body-sm text-[12px] text-[#45464c]">Direct jump & navigation flow testing</p>
                </div>
              </div>
              <button
                className="w-8 h-8 rounded-full bg-[#f3f4f5] flex items-center justify-center text-[#191c1d] active:scale-90 cursor-pointer"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="p-3 bg-[#f8f9fa] border-b border-[#e1e3e4]">
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-[#76777d] text-[18px]">search</span>
                <input
                  className="w-full h-10 pl-9 pr-3 rounded-xl bg-white border border-[#e1e3e4] text-sm text-[#191c1d] placeholder:text-[#76777d] outline-none focus:border-black"
                  placeholder="Filter 23 screens..."
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Screens List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {filteredScreens.map((s, idx) => {
                const isCurrent = s.id === currentScreen;
                return (
                  <button
                    key={s.id}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between gap-2 border cursor-pointer ${
                      isCurrent
                        ? 'bg-black text-white border-black font-semibold shadow-sm'
                        : 'bg-[#f8f9fa] hover:bg-[#f3f4f5] text-[#191c1d] border-[#e1e3e4]'
                    }`}
                    onClick={() => {
                      onNavigate(s.id, 'none');
                      setIsOpen(false);
                    }}
                    type="button"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                          isCurrent ? 'bg-[#fea619] text-black' : 'bg-[#e1e3e4] text-[#191c1d]'
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-medium truncate">{s.label}</span>
                        <span className={`text-[11px] truncate ${isCurrent ? 'text-white/70' : 'text-[#76777d]'}`}>
                          {s.group} • {s.id}
                        </span>
                      </div>
                    </div>
                    {isCurrent ? (
                      <span className="material-symbols-outlined text-[18px] text-[#fea619]">check_circle</span>
                    ) : (
                      <span className="material-symbols-outlined text-[16px] text-[#76777d]">arrow_forward</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
