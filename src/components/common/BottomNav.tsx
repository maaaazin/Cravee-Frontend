import React from 'react';
import { ScreenId } from '../../types/navigation';

interface BottomNavProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId, transition?: 'none' | 'push' | 'push_back' | 'slide_up') => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const isHome = currentScreen === '8. Home';
  const isExplore = currentScreen === '9. Search';
  const isOrders = currentScreen === 'Past Orders History';
  const isFavorites = currentScreen === 'Favorites';
  const isAccount = currentScreen === '17. My Account';

  return (
    <nav
      className="fixed bottom-0 w-full z-40 pb-safe bg-[#f8f9fa]/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)] border-t border-[#e1e3e4]/60"
      data-active-classes="text-secondary font-semibold"
    >
      <div className="h-16 px-1 flex items-center justify-around">
        {/* Home */}
        <a
          aria-current={isHome ? 'page' : undefined}
          className={`flex-1 min-h-[44px] py-1 flex flex-col items-center justify-center gap-0.5 transition-colors duration-150 cursor-pointer ${
            isHome ? 'text-[#855300] font-semibold' : 'text-[#45464c] hover:text-[#191c1d]'
          }`}
          data-path="home"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('8. Home', 'none');
          }}
        >
          <span
            className="material-symbols-outlined text-[22px]"
            style={{ fontVariationSettings: isHome ? "'FILL' 1" : "'FILL' 0" }}
          >
            roofing
          </span>
          <span className="font-label-sm text-label-sm">Home</span>
        </a>

        {/* Search / Explore */}
        <a
          aria-current={isExplore ? 'page' : undefined}
          className={`flex-1 min-h-[44px] py-1 flex flex-col items-center justify-center gap-0.5 transition-colors duration-150 cursor-pointer ${
            isExplore ? 'text-[#855300] font-semibold' : 'text-[#45464c] hover:text-[#191c1d]'
          }`}
          data-path="explore"
          href="#explore"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('9. Search', 'none');
          }}
        >
          <span
            className="material-symbols-outlined text-[22px]"
            style={{ fontVariationSettings: isExplore ? "'FILL' 1" : "'FILL' 0" }}
          >
            search
          </span>
          <span className="font-label-sm text-label-sm">Search</span>
        </a>

        {/* Orders */}
        <a
          aria-current={isOrders ? 'page' : undefined}
          className={`flex-1 min-h-[44px] py-1 flex flex-col items-center justify-center gap-0.5 transition-colors duration-150 cursor-pointer ${
            isOrders ? 'text-[#855300] font-semibold' : 'text-[#45464c] hover:text-[#191c1d]'
          }`}
          data-path="my-orders"
          href="#my-orders"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('Past Orders History', 'none');
          }}
        >
          <span
            className="material-symbols-outlined text-[22px]"
            style={{ fontVariationSettings: isOrders ? "'FILL' 1" : "'FILL' 0" }}
          >
            receipt_long
          </span>
          <span className="font-label-sm text-label-sm">Orders</span>
        </a>

        {/* Favorites */}
        <a
          aria-current={isFavorites ? 'page' : undefined}
          className={`flex-1 min-h-[44px] py-1 flex flex-col items-center justify-center gap-0.5 transition-colors duration-150 cursor-pointer ${
            isFavorites ? 'text-[#855300] font-semibold' : 'text-[#45464c] hover:text-[#191c1d]'
          }`}
          data-path="favorites"
          href="#favorites"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('Favorites', 'none');
          }}
        >
          <span
            className="material-symbols-outlined text-[22px]"
            style={{ fontVariationSettings: isFavorites ? "'FILL' 1" : "'FILL' 0" }}
          >
            favorite
          </span>
          <span className="font-label-sm text-label-sm">Favorites</span>
        </a>

        {/* Account / Profile */}
        <a
          aria-current={isAccount ? 'page' : undefined}
          className={`flex-1 min-h-[44px] py-1 flex flex-col items-center justify-center gap-0.5 transition-colors duration-150 cursor-pointer ${
            isAccount ? 'text-[#855300] font-semibold' : 'text-[#45464c] hover:text-[#191c1d]'
          }`}
          data-path="account"
          href="#account"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('17. My Account', 'none');
          }}
        >
          <span
            className="material-symbols-outlined text-[22px]"
            style={{ fontVariationSettings: isAccount ? "'FILL' 1" : "'FILL' 0" }}
          >
            person
          </span>
          <span className="font-label-sm text-label-sm">Profile</span>
        </a>
      </div>
    </nav>
  );
};
