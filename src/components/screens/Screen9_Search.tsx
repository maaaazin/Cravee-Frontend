import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';
import { BottomNav } from '../common/BottomNav';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const Screen9_Search: React.FC<Props> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('Search Results', 'push');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        showBack={false}
        title="Explore"
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full pt-28 bg-[#f8f9fa] pb-28">
        <div className="flex flex-col w-full">
          {/* Search Header & Interactive Input Section */}
          <div className="px-4 pt-1 pb-3 flex flex-col gap-2">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full shadow-sm rounded-xl">
              <span className="material-symbols-outlined absolute left-3.5 text-[#76777d] text-[20px] pointer-events-none select-none">
                search
              </span>
              <input
                className="w-full h-12 pl-11 pr-10 bg-[#f3f4f5] rounded-xl font-body-md text-body-md text-[#191c1d] placeholder:text-[#76777d] focus:outline-none focus:bg-white border border-[#e1e3e4] focus:border-[#191c1d] transition-all duration-200"
                id="explore-search-input"
                placeholder="Search dishes, restaurants, groceries..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  aria-label="Clear search"
                  className="absolute right-2.5 w-7 h-7 flex items-center justify-center rounded-full bg-[#e1e3e4] text-[#191c1d] active:scale-90 transition-transform duration-150 cursor-pointer"
                  onClick={() => setSearchQuery('')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              )}
            </form>

            {/* Quick Micro Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar">
              <button
                className="shrink-0 flex items-center gap-1.5 h-8 px-3 rounded-full bg-[#fea619] text-[#684000] font-label-md text-label-md active:scale-95 transition-transform font-semibold cursor-pointer"
                onClick={() => onNavigate('Search Results', 'push')}
                type="button"
              >
                <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  bolt
                </span>
                Under 30 mins
              </button>
              <button
                className="shrink-0 flex items-center gap-1.5 h-8 px-3 rounded-full bg-[#e7e8e9] text-[#45464c] font-label-md text-label-md active:scale-95 transition-transform cursor-pointer"
                onClick={() => onNavigate('Search Results', 'push')}
                type="button"
              >
                <span className="material-symbols-outlined text-[15px]">verified</span>
                Cravee Select
              </button>
              <button
                className="shrink-0 flex items-center gap-1.5 h-8 px-3 rounded-full bg-[#e7e8e9] text-[#45464c] font-label-md text-label-md active:scale-95 transition-transform cursor-pointer"
                onClick={() => onNavigate('Search Results', 'push')}
                type="button"
              >
                <span className="material-symbols-outlined text-[15px] text-[#ba1a1a]">local_fire_department</span>
                Trending
              </button>
              <button
                className="shrink-0 flex items-center gap-1.5 h-8 px-3 rounded-full bg-[#e7e8e9] text-[#45464c] font-label-md text-label-md active:scale-95 transition-transform cursor-pointer"
                onClick={() => onNavigate('Search Results', 'push')}
                type="button"
              >
                <span className="material-symbols-outlined text-[15px]">eco</span>
                Pure Veg
              </button>
            </div>
          </div>

          {/* Editorial Section Title & Subheading */}
          <div className="px-4 pt-1 pb-2 flex items-end justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-[#855300] font-semibold uppercase tracking-wider block">
                Gastronomic Atlas
              </span>
              <h2 className="font-headline-md text-headline-md text-[#191c1d] tracking-tight">
                Explore Cuisines & Categories
              </h2>
            </div>
            <span className="font-label-sm text-label-sm text-[#76777d] pb-0.5">11 Curations</span>
          </div>

          {/* Featured Spotlight Card: New on Cravee */}
          <div className="px-4 mb-3">
            <div
              className="relative w-full rounded-2xl overflow-hidden bg-[#000000] shadow-md active:scale-[0.99] transition-transform duration-200 cursor-pointer"
              onClick={() => onNavigate('Search Results', 'push')}
            >
              <div
                className="w-full h-36 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_11zAVoALBwekfbOaEmoHEiQebIMWDcnqWi-gfJvvpNcLTH_Zs9DhIBpDXlHZTjhsLHgRSmhBwZ1MNbq4KKyPCXA3_dUGr1ndVFDpCp2we1aNjwe8whuaKl5GzPVWEp_htm81TSI8A-IvqKS-M-0kvnSrghPp33txozKXbG8M2yut0gBUly1Cvyg83KNZxMnxtBBNy7p27RGT4208qlMs5mOB3cQT0gay27JMwqXHeSU7xFNC94gD')`,
                }}
              >
                <div className="w-full h-full bg-gradient-to-r from-black/95 via-black/75 to-transparent flex items-center p-4">
                  <div className="flex flex-col max-w-[210px] gap-1 text-white">
                    <div className="inline-flex items-center gap-1 self-start px-2 py-0.5 rounded-full bg-[#855300] text-white font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        stars
                      </span>
                      Fresh Discoveries
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-semibold tracking-tight leading-tight">
                      New on Cravee
                    </h3>
                    <p className="font-body-sm text-body-sm text-white/80 line-clamp-1">30 curated spots just launched</p>
                  </div>
                </div>
              </div>
              <div className="absolute right-3.5 bottom-3.5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </div>
            </div>
          </div>

          {/* Primary Categories Bento Grid */}
          <div className="px-4 pb-6 flex flex-col gap-2.5" id="categories-container">
            <div className="grid grid-cols-2 gap-2.5">
              {/* Indian */}
              <div
                className="cuisine-card relative bg-[#f3f4f5] rounded-2xl p-4 flex flex-col justify-between h-40 shadow-sm active:scale-[0.98] transition-transform duration-150 overflow-hidden cursor-pointer border border-[#e1e3e4]"
                onClick={() => onNavigate('Search Results', 'push')}
              >
                <div className="flex items-start justify-between z-10">
                  <div className="w-10 h-10 rounded-full bg-[#ffddb8] flex items-center justify-center text-[#2a1700]">
                    <span className="material-symbols-outlined text-[22px]">skillet</span>
                  </div>
                  <span className="material-symbols-outlined text-[#76777d] text-[18px]">north_east</span>
                </div>
                <div className="z-10 mt-auto">
                  <h3 className="font-headline-sm text-headline-sm text-[#191c1d]">Indian</h3>
                  <p className="font-body-sm text-body-sm text-[#45464c] font-medium">342 places</p>
                </div>
                <div
                  className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-cover bg-center opacity-40 mix-blend-multiply pointer-events-none"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAF9u7GZ9kk9rF9qfieZ3vE6uO67Om9zc54dCh3ODn4c_YnHsKYK9_0m-Z8H89cvRjfOPrLZl5gf3_n9KYM2B1iR4gzlmyGkC5h23szGZC-VYVilSismmHJetRJdGjszQ9h4FJmGhyMOr2GBmhXJx9AWuQR277w42Eoy2JGJSq2E45a5tYsANUyYiPUpQtM1Epaz16jSrsenXGclFeDW9ffbmFXx6OAh-HYU_HmItZhkHiqjqN3uXE4')`,
                  }}
                />
              </div>

              {/* Biryani & Mughlai */}
              <div
                className="cuisine-card relative bg-[#f3f4f5] rounded-2xl p-4 flex flex-col justify-between h-40 shadow-sm active:scale-[0.98] transition-transform duration-150 overflow-hidden cursor-pointer border border-[#e1e3e4]"
                onClick={() => onNavigate('Search Results', 'push')}
              >
                <div className="flex items-start justify-between z-10">
                  <div className="w-10 h-10 rounded-full bg-[#e1e3e4] flex items-center justify-center text-[#855300]">
                    <span className="material-symbols-outlined text-[22px]">ramen_dining</span>
                  </div>
                  <span className="material-symbols-outlined text-[#76777d] text-[18px]">north_east</span>
                </div>
                <div className="z-10 mt-auto">
                  <h3 className="font-headline-sm text-headline-sm text-[#191c1d]">Biryani & Mughlai</h3>
                  <p className="font-body-sm text-body-sm text-[#45464c] font-medium">210 places</p>
                </div>
                <div
                  className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-cover bg-center opacity-40 mix-blend-multiply pointer-events-none"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwUF3WiAcd7q0W4K75jGU8tgj3SRVtcMwWVNdtaxache_y-P-8mXaDiUkgulr78MgJmfAU_AFve-kzULtaeXUOq7agnyFGAMrwDjjn6NtYdK-8S3-dybqV6drnLOAbqY-4MiDnm16uN8rW5tFvQqBeNT3G3raDAp8rOG4HEQXCZSTkYkt2t2tZEewrfGVvm2YXWakLrxLcu48P4Dqzau8y74EzUEPzupCrQCRxEv6VXSOcnG5eaDFr')`,
                  }}
                />
              </div>

              {/* Fast Food */}
              <div
                className="cuisine-card relative bg-[#f3f4f5] rounded-2xl p-4 flex flex-col justify-between h-40 shadow-sm active:scale-[0.98] transition-transform duration-150 overflow-hidden cursor-pointer border border-[#e1e3e4]"
                onClick={() => onNavigate('Search Results', 'push')}
              >
                <div className="flex items-start justify-between z-10">
                  <div className="w-10 h-10 rounded-full bg-[#e1e3e4] flex items-center justify-center text-[#191c1d]">
                    <span className="material-symbols-outlined text-[22px]">lunch_dining</span>
                  </div>
                  <span className="material-symbols-outlined text-[#76777d] text-[18px]">north_east</span>
                </div>
                <div className="z-10 mt-auto">
                  <h3 className="font-headline-sm text-headline-sm text-[#191c1d]">Fast Food</h3>
                  <p className="font-body-sm text-body-sm text-[#45464c] font-medium">180 places</p>
                </div>
                <div
                  className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-cover bg-center opacity-40 mix-blend-multiply pointer-events-none"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQSByLQa7xgvQI_XDG5q6ZI_HFk728TLaIixhFJCbyY-nrtUgUwgyCzgaYroFSxgOiBtJXUwDxalcUbbGxG-6blAmTA8MhQSLrgBU-6Aw1q6jqs2Gn73M-0YXaVFX0xawLVa9PzaKi0D3QbLZ3W8xeg1Xa0w-Ei0x44UZdK6bU5fVTS8icEmvSxqlUBUDFYUB0Kk1FacdYIv4I1FFG354hFoceFaZ516CNFUNlqoU8Rde-CCjIUmTI')`,
                  }}
                />
              </div>

              {/* Bakery & Desserts */}
              <div
                className="cuisine-card relative bg-[#f3f4f5] rounded-2xl p-4 flex flex-col justify-between h-40 shadow-sm active:scale-[0.98] transition-transform duration-150 overflow-hidden cursor-pointer border border-[#e1e3e4]"
                onClick={() => onNavigate('Search Results', 'push')}
              >
                <div className="flex items-start justify-between z-10">
                  <div className="w-10 h-10 rounded-full bg-[#ede3b8] flex items-center justify-center text-[#201c02]">
                    <span className="material-symbols-outlined text-[22px]">bakery_dining</span>
                  </div>
                  <span className="material-symbols-outlined text-[#76777d] text-[18px]">north_east</span>
                </div>
                <div className="z-10 mt-auto">
                  <h3 className="font-headline-sm text-headline-sm text-[#191c1d]">Bakery & Desserts</h3>
                  <p className="font-body-sm text-body-sm text-[#45464c] font-medium">140 places</p>
                </div>
                <div
                  className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-cover bg-center opacity-40 mix-blend-multiply pointer-events-none"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1k9eKtoWsW_pPAlle3ri8LKKd6n0w7N0Ntpqki3kceMdzcpEBDUzPCAO-O-5Zegk4PjBFkvX532oMhcMg9sqfxjF7ZslTISF48k11-zRrhmeg1wF_nmHfELGZPcVpai9tpxy1iRlprjd2fO1SEDQHJBC8ykPxAk52rNQmolEubKslAB4tb4W2tDApd6mX4gRrXsk6eO1lcLi6OJzjpO7mVStpGqKtRdZNALTFrq-xbTYLGmyLzOT5')`,
                  }}
                />
              </div>

              {/* Asian & Pan-Asian */}
              <div
                className="cuisine-card relative bg-[#f3f4f5] rounded-2xl p-4 flex flex-col justify-between h-40 shadow-sm active:scale-[0.98] transition-transform duration-150 overflow-hidden cursor-pointer border border-[#e1e3e4]"
                onClick={() => onNavigate('Search Results', 'push')}
              >
                <div className="flex items-start justify-between z-10">
                  <div className="w-10 h-10 rounded-full bg-[#e1e3e4] flex items-center justify-center text-[#191c1d]">
                    <span className="material-symbols-outlined text-[22px]">set_meal</span>
                  </div>
                  <span className="material-symbols-outlined text-[#76777d] text-[18px]">north_east</span>
                </div>
                <div className="z-10 mt-auto">
                  <h3 className="font-headline-sm text-headline-sm text-[#191c1d]">Asian & Pan-Asian</h3>
                  <p className="font-body-sm text-body-sm text-[#45464c] font-medium">120 places</p>
                </div>
                <div
                  className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-cover bg-center opacity-40 mix-blend-multiply pointer-events-none"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcSlKv5Y-z6oCQI8F__TUgd0yQHtg0GnLd9_SjxNmiehE-7lqS-8HY7YosClC5jUK2M3TiHwHO2h4ZxIoRzMZVDXIklqFyqNqjKl0a0nz32AcwPF56B6H6nmyfS-dHKeQzWKuZI_0d8jSNH4ndtsmzHsVkxPxc5AQHet3Cn_mtOuAJoBQzJtJQroDpE4ywtJUnX7vB4-NSEtnAQr-PPd2Dn7tIEW9J5NiBh7MSZjG2pWC852x7JYjY')`,
                  }}
                />
              </div>

              {/* Continental & European (Target Element specified in navigation spec!) */}
              <div
                className="cuisine-card relative bg-[#f3f4f5] rounded-2xl p-4 flex flex-col justify-between h-40 shadow-sm active:scale-[0.98] transition-transform duration-150 overflow-hidden cursor-pointer border border-[#e1e3e4]"
                onClick={() => onNavigate('Search Results', 'push')}
              >
                <div className="flex items-start justify-between z-10">
                  <div className="w-10 h-10 rounded-full bg-[#e1e3e4] flex items-center justify-center text-[#191c1d]">
                    <span className="material-symbols-outlined text-[22px]">dinner_dining</span>
                  </div>
                  <span className="material-symbols-outlined text-[#76777d] text-[18px]">north_east</span>
                </div>
                <div className="z-10 mt-auto">
                  <h3 className="font-headline-sm text-headline-sm text-[#191c1d] truncate">Continental</h3>
                  <p className="font-body-sm text-body-sm text-[#45464c] font-medium">95 places</p>
                </div>
                <div
                  className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-cover bg-center opacity-40 mix-blend-multiply pointer-events-none"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCO2ynv5CcqE0jhzSdgdeUHk8C-gsdAmBLn7sgNNx7wmpVFNP4lHhnwuUhykamaxJn1QaaYrVw8mku-0mo52TnvhqjbeqKR-MKDh4WsZ_NsvI_feKCpJM-YwE1Nd6vYv6tjpvqVOdKt20OlToB2l2ZBW5skFNxz77OsJfqRYL-h7hztMBB0dM3uR6Mz7KRu_t32K2kgaFXXJiiTvolW56wMOVi3uoxx8KJ76zfJGtiuQhZtxEmGPV8e')`,
                  }}
                />
              </div>
            </div>

            {/* Wide Horizontal Category Cards */}
            {/* BBQ & Grills */}
            <div
              className="cuisine-card w-full bg-[#f3f4f5] rounded-xl p-4 flex items-center justify-between shadow-sm active:scale-[0.99] transition-transform duration-150 cursor-pointer border border-[#e1e3e4]"
              onClick={() => onNavigate('Search Results', 'push')}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[#e1e3e4] flex items-center justify-center text-[#855300] shrink-0">
                  <span className="material-symbols-outlined text-[26px]">outdoor_grill</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-headline-sm text-headline-sm text-[#191c1d] truncate">BBQ & Grills</h3>
                  <span className="font-body-sm text-body-sm text-[#45464c]">Smoked briskets, tandoor & skewers</span>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0 pl-2">
                <span className="font-label-md text-label-md text-[#45464c] font-semibold">65 places</span>
                <span className="material-symbols-outlined text-[#76777d] text-[18px]">chevron_right</span>
              </div>
            </div>

            {/* Mediterranean & Healthy */}
            <div
              className="cuisine-card w-full bg-[#f3f4f5] rounded-xl p-4 flex items-center justify-between shadow-sm active:scale-[0.99] transition-transform duration-150 cursor-pointer border border-[#e1e3e4]"
              onClick={() => onNavigate('Search Results', 'push')}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[#e1e3e4] flex items-center justify-center text-[#191c1d] shrink-0">
                  <span className="material-symbols-outlined text-[26px]">nutrition</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-headline-sm text-headline-sm text-[#191c1d] truncate">Mediterranean & Healthy</h3>
                  <span className="font-body-sm text-body-sm text-[#45464c]">Mezze bowls, falafel & grain salads</span>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0 pl-2">
                <span className="font-label-md text-label-md text-[#45464c] font-semibold">58 places</span>
                <span className="material-symbols-outlined text-[#76777d] text-[18px]">chevron_right</span>
              </div>
            </div>

            {/* Alcohol & Craft Brews */}
            <div
              className="cuisine-card w-full bg-[#f3f4f5] rounded-xl p-4 flex items-center justify-between shadow-sm active:scale-[0.99] transition-transform duration-150 cursor-pointer border border-[#e1e3e4]"
              onClick={() => onNavigate('Search Results', 'push')}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[#e1e3e4] flex items-center justify-center text-[#855300] shrink-0">
                  <span className="material-symbols-outlined text-[26px]">sports_bar</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-headline-sm text-headline-sm text-[#191c1d] truncate">Alcohol & Craft Brews</h3>
                  <span className="font-body-sm text-body-sm text-[#45464c]">Microbreweries, curated wine & cider</span>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0 pl-2">
                <span className="font-label-md text-label-md text-[#45464c] font-semibold">45 places</span>
                <span className="material-symbols-outlined text-[#76777d] text-[18px]">chevron_right</span>
              </div>
            </div>

            {/* Vegan & Plant-Based */}
            <div
              className="cuisine-card w-full bg-[#f3f4f5] rounded-xl p-4 flex items-center justify-between shadow-sm active:scale-[0.99] transition-transform duration-150 cursor-pointer border border-[#e1e3e4]"
              onClick={() => onNavigate('Search Results', 'push')}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[#ede3b8] flex items-center justify-center text-[#201c02] shrink-0">
                  <span className="material-symbols-outlined text-[26px]">spa</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-headline-sm text-headline-sm text-[#191c1d] truncate">Vegan & Plant-Based</h3>
                  <span className="font-body-sm text-body-sm text-[#45464c]">Conscious dairy-free & earth-first eats</span>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0 pl-2">
                <span className="font-label-md text-label-md text-[#45464c] font-semibold">42 places</span>
                <span className="material-symbols-outlined text-[#76777d] text-[18px]">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNav currentScreen="9. Search" onNavigate={onNavigate} />
    </div>
  );
};
