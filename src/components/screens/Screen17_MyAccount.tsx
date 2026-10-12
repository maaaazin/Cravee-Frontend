import React from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';
import { BottomNav } from '../common/BottomNav';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const Screen17_MyAccount: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        showBack={false}
        title="Account"
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full pt-28 bg-[#f8f9fa] pb-28">
        <div className="flex flex-col w-full px-4 pb-6 gap-3.5">
          {/* Top Utility Row */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-headline-sm text-[#191c1d]">My Account</span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-[#ffddb8] text-[#2a1700] text-label-sm font-label-sm font-bold">
                PRO
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Notifications"
                className="w-10 h-10 rounded-full bg-[#f3f4f5] flex items-center justify-center text-[#191c1d] active:scale-95 transition-transform duration-150 relative shadow-sm cursor-pointer border border-[#e1e3e4]"
                onClick={() => onNavigate('Order Chat', 'push')}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">notifications</span>
                <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#fea619]" />
              </button>
              <button
                aria-label="Settings"
                className="w-10 h-10 rounded-full bg-[#f3f4f5] flex items-center justify-center text-[#191c1d] active:scale-95 transition-transform duration-150 shadow-sm cursor-pointer border border-[#e1e3e4]"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">tune</span>
              </button>
            </div>
          </div>

          {/* Profile Summary Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm relative overflow-hidden flex flex-col gap-3.5 border border-[#e1e3e4]">
            <div className="flex items-start gap-3.5">
              <div className="relative shrink-0">
                <img
                  alt="Maazin Shah"
                  className="w-20 h-20 rounded-full object-cover shadow-md"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD51EmdIaKp0cDQ0XFDoQR-23XvBWWI0E0yvKKBNgVurDX_r2hOxN9fvl4ZNlcsSKoSUWhkPfoWI7h7KvnW5dAbHQQulcHfAG5vggaDGgn3mwYhsK6YUPnJkwpHpeFO48tlY_hhJjUvwNMD2HMgFOBViYrApLpqWcjHJQhIzlwmh2bPQ3VTSc21WHpV1C1FWmKw-QQJLBTjEHgfuQwr4U4hQBAomNcU7cXgfjWnmiBE-Iw_ZPDy113j"
                />
                <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full">
                  <div className="bg-[#855300] text-white w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      workspace_premium
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex items-center justify-between gap-1">
                  <h2 className="font-headline-md text-headline-md text-[#191c1d] truncate">Maazin Shah</h2>
                  <button
                    className="shrink-0 text-[#855300] font-label-md text-label-md active:opacity-75 transition-opacity px-2 py-1 rounded-lg hover:bg-[#ffddb8]/30 font-semibold cursor-pointer"
                    type="button"
                  >
                    Edit
                  </button>
                </div>
                <p className="font-body-sm text-body-sm text-[#45464c] truncate mt-0.5">maazin.shah@example.com</p>
                <p className="font-body-sm text-body-sm text-[#45464c] truncate">+91 98201 23456</p>
                <div className="mt-2 flex items-center">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ffddb8] text-[#2a1700] font-label-sm text-label-sm font-semibold shadow-xs">
                    <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      restaurant_menu
                    </span>
                    Cravee Gourmet Member
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#f3f4f5] text-[#45464c] font-label-sm text-label-sm">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#855300] text-[16px]">verified</span>
                <span>Zero Surge Pricing</span>
              </div>
              <span className="text-[#c6c6cd]">•</span>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#855300] text-[16px]">bolt</span>
                <span>Priority Kitchen Delivery</span>
              </div>
            </div>
          </div>

          {/* Quick Shortcuts Bar (4 Rounded Cards) */}
          <div className="grid grid-cols-4 gap-2.5">
            <button
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white text-[#191c1d] active:scale-95 transition-all shadow-sm gap-1.5 border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('Favorites', 'none')}
              type="button"
            >
              <div className="w-10 h-10 rounded-full bg-[#f3f4f5] flex items-center justify-center text-[#ba1a1a]">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  favorite
                </span>
              </div>
              <span className="font-label-md text-label-md text-[#191c1d]">Favorites</span>
            </button>

            <button
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white text-[#191c1d] active:scale-95 transition-all shadow-sm gap-1.5 border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('Saved Addresses', 'push')}
              type="button"
            >
              <div className="w-10 h-10 rounded-full bg-[#f3f4f5] flex items-center justify-center text-[#855300]">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  location_on
                </span>
              </div>
              <span className="font-label-md text-label-md text-[#191c1d]">Addresses</span>
            </button>

            <button
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white text-[#191c1d] active:scale-95 transition-all shadow-sm gap-1.5 border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('Saved Payment Methods', 'push')}
              type="button"
            >
              <div className="w-10 h-10 rounded-full bg-[#f3f4f5] flex items-center justify-center text-[#191c1d]">
                <span className="material-symbols-outlined text-[20px]">credit_card</span>
              </div>
              <span className="font-label-md text-label-md text-[#191c1d]">Payments</span>
            </button>

            <button
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white text-[#191c1d] active:scale-95 transition-all shadow-sm gap-1.5 relative border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('Order Chat', 'push')}
              type="button"
            >
              <div className="w-10 h-10 rounded-full bg-[#f3f4f5] flex items-center justify-center text-[#191c1d]">
                <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
              </div>
              <span className="font-label-md text-label-md text-[#191c1d]">Messages</span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#fea619]" />
            </button>
          </div>

          {/* Active Order Micro-Banner */}
          <div
            className="p-3.5 rounded-2xl bg-[#141b2b] text-white flex items-center justify-between shadow-sm active:scale-[0.99] transition-transform cursor-pointer"
            onClick={() => onNavigate('Track Order', 'push')}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-full bg-[#fea619] text-[#684000] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">delivery_dining</span>
              </div>
              <div className="min-w-0">
                <p className="font-label-lg text-label-lg text-white truncate font-bold">Dum Biryani by Oudh 1590</p>
                <p className="font-body-sm text-body-sm text-[#7d8497] truncate">On the way • Arriving in 14 mins</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#7d8497] text-[20px] shrink-0">chevron_right</span>
          </div>

          {/* Orders & Bookings list */}
          <div className="flex flex-col gap-1.5">
            <h3 className="font-label-sm text-label-sm text-[#45464c] px-1 font-semibold uppercase tracking-wider">
              Orders & Bookings
            </h3>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col border border-[#e1e3e4]">
              <div
                className="px-4 py-3.5 flex items-center justify-between hover:bg-[#f3f4f5] transition-colors cursor-pointer"
                onClick={() => onNavigate('Past Orders History', 'none')}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f3f4f5] flex items-center justify-center text-[#191c1d]">
                    <span className="material-symbols-outlined text-[19px]">receipt_long</span>
                  </div>
                  <span className="font-body-lg text-body-lg text-[#191c1d] font-medium">Your orders</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-[#ffddb8] text-[#2a1700] font-label-sm text-label-sm font-semibold">
                    1 Active Order
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-[#76777d]">chevron_right</span>
                </div>
              </div>

              <div className="h-[1px] bg-[#f3f4f5] ml-14" />

              <div
                className="px-4 py-3.5 flex items-center justify-between hover:bg-[#f3f4f5] transition-colors cursor-pointer"
                onClick={() => onNavigate('Past Orders History', 'none')}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f3f4f5] flex items-center justify-center text-[#191c1d]">
                    <span className="material-symbols-outlined text-[19px]">history</span>
                  </div>
                  <span className="font-body-lg text-body-lg text-[#191c1d] font-medium">Order history</span>
                </div>
                <span className="material-symbols-outlined text-[20px] text-[#76777d]">chevron_right</span>
              </div>
            </div>
          </div>

          {/* Preferences & Feedback */}
          <div className="flex flex-col gap-1.5">
            <h3 className="font-label-sm text-label-sm text-[#45464c] px-1 font-semibold uppercase tracking-wider">
              Preferences & Feedback
            </h3>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col border border-[#e1e3e4]">
              <div
                className="px-4 py-3.5 flex items-center justify-between hover:bg-[#f3f4f5] transition-colors cursor-pointer"
                onClick={() => onNavigate('16. Rate Your Experience', 'push')}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f3f4f5] flex items-center justify-center text-[#191c1d]">
                    <span className="material-symbols-outlined text-[19px]">reviews</span>
                  </div>
                  <span className="font-body-lg text-body-lg text-[#191c1d] font-medium">Send feedback</span>
                </div>
                <span className="material-symbols-outlined text-[20px] text-[#76777d]">chevron_right</span>
              </div>
            </div>
          </div>

          {/* Account Actions */}
          <div className="flex flex-col gap-1.5">
            <h3 className="font-label-sm text-label-sm text-[#45464c] px-1 font-semibold uppercase tracking-wider">
              Account
            </h3>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col border border-[#e1e3e4]">
              <button
                className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-[#ffdad6]/20 transition-colors text-left cursor-pointer"
                onClick={() => onNavigate('2. Sign In / Sign Up — Initial Screen', 'push_back')}
                type="button"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[19px]">logout</span>
                  </div>
                  <span className="font-body-lg text-body-lg text-[#ba1a1a] font-medium">Log out</span>
                </div>
                <span className="material-symbols-outlined text-[20px] text-[#ba1a1a]">chevron_right</span>
              </button>
            </div>
          </div>

          {/* App Version Footer */}
          <div className="mt-2 mb-2 flex flex-col items-center justify-center gap-1 text-center select-none">
            <div className="flex items-center justify-center gap-1.5 text-[#855300]">
              <span className="material-symbols-outlined text-[18px]">dinner_dining</span>
              <span className="font-label-md text-label-md tracking-wide font-semibold">Cravee Premium Dining</span>
            </div>
            <p className="font-body-sm text-body-sm text-[#76777d]">
              Cravee v2.4.0 (Build 412) • Crafted with <span className="text-[#ba1a1a]">♥</span> in India
            </p>
          </div>
        </div>
      </main>

      <BottomNav currentScreen="17. My Account" onNavigate={onNavigate} />
    </div>
  );
};
