import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';
import { BottomNav } from '../common/BottomNav';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const Screen8_Home: React.FC<Props> = ({ onNavigate }) => {
  const [selectedCuisine, setSelectedCuisine] = useState('All Dishes');
  const [butterChickenQty, setButterChickenQty] = useState(1);
  const [paneerTikkaQty, setPaneerTikkaQty] = useState(1);

  const cuisines = [
    { name: 'All Dishes', icon: 'restaurant_menu' },
    { name: 'Biryani', emoji: '🍚' },
    { name: 'North Indian', emoji: '🥘' },
    { name: 'South Indian', emoji: '🥞' },
    { name: 'Chinese', emoji: '🥢' },
    { name: 'Bakery & Sweets', emoji: '🍰' },
    { name: 'Gourmet', icon: 'star' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        showBack={false}
        title="Home"
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full pt-28 bg-[#f8f9fa] pb-28">
        <div className="flex flex-col w-full">
          {/* Top Location and Status Bar Row */}
          <div className="px-4 pt-1 pb-1 flex items-center justify-between">
            <div
              className="cursor-pointer flex items-center gap-2 min-w-0 select-none"
              onClick={() => onNavigate('Saved Addresses', 'push')}
            >
              <div className="w-8 h-8 rounded-full bg-[#ffddb8] flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[#855300] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  location_on
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-label-sm text-label-sm text-[#855300] uppercase tracking-wider font-bold">
                    Home Delivery
                  </span>
                  <span className="material-symbols-outlined text-[#45464c] text-[16px]">keyboard_arrow_down</span>
                </div>
                <span className="font-headline-sm text-headline-sm text-[#191c1d] truncate max-w-[240px]">
                  402 Sea Pearl, Bandra West, Mumbai
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                aria-label="Notifications"
                className="w-9 h-9 rounded-full bg-[#edeeef] flex items-center justify-center text-[#191c1d] hover:bg-[#e7e8e9] transition-colors cursor-pointer"
                type="button"
                onClick={() => onNavigate('Order Chat', 'push')}
              >
                <span className="material-symbols-outlined text-[20px]">notifications</span>
              </button>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="px-4 pt-2 pb-2">
            <div
              className="w-full h-12 bg-[#f3f4f5] rounded-xl px-4 flex items-center justify-between shadow-sm border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('9. Search', 'push')}
            >
              <div className="flex items-center gap-2 flex-1 min-w-0 mr-1">
                <span className="material-symbols-outlined text-[#76777d] text-[20px] shrink-0">search</span>
                <span className="font-body-sm text-body-sm text-[#76777d] truncate">
                  Search "Dum Biryani", "Butter Chicken", or "Cactus Club"...
                </span>
              </div>
              <button
                aria-label="Filters"
                className="w-8 h-8 rounded-lg bg-[#e1e3e4] flex items-center justify-center text-[#191c1d] hover:bg-[#ffddb8] transition-colors shrink-0"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">tune</span>
              </button>
            </div>
          </div>

          {/* Horizontal Cuisine Categories Scroll */}
          <div className="pt-1 pb-2">
            <div className="flex items-center gap-2 overflow-x-auto px-4 no-scrollbar">
              {cuisines.map((c) => {
                const isActive = selectedCuisine === c.name;
                return (
                  <button
                    key={c.name}
                    className={`cuisine-pill shrink-0 h-9 px-4 rounded-full font-label-md text-label-md flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#000000] text-white'
                        : 'bg-white text-[#191c1d] border border-[#e1e3e4] hover:bg-[#f3f4f5]'
                    }`}
                    onClick={() => {
                      setSelectedCuisine(c.name);
                      if (c.name === 'Gourmet' || c.name === 'Biryani') {
                        onNavigate('Search Results', 'push');
                      }
                    }}
                    type="button"
                  >
                    {c.icon && (
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {c.icon}
                      </span>
                    )}
                    {c.emoji && <span className="text-[14px]">{c.emoji}</span>}
                    <span>{c.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hero Promotional Banner */}
          <div className="px-4 pt-1 pb-3">
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#141b2b] text-white p-4 shadow-md">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-[#fea619]/20 blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between gap-2 relative z-10">
                <div className="flex-1 pr-1">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#fea619] text-[#684000] font-label-sm text-label-sm mb-1.5 font-bold">
                    <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      local_fire_department
                    </span>
                    <span>FESTIVAL EXCLUSIVE</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-white font-bold tracking-tight leading-snug">
                    Cravee Gourmet Fest
                  </h2>
                  <p className="font-body-sm text-body-sm text-[#e1e3e4] mt-0.5">
                    Flat 40% OFF up to ₹150
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur-md text-white font-label-sm text-label-sm tracking-widest uppercase">
                      USE <span className="font-bold text-[#ffddb8]">CRAVEE40</span>
                    </div>
                    <button
                      className="h-8 px-3 rounded-full bg-[#fea619] text-[#684000] font-label-sm text-label-sm font-semibold active:scale-95 transition-transform cursor-pointer"
                      onClick={() => onNavigate('11. Restaurant Menu with Cart', 'push')}
                      type="button"
                    >
                      Claim
                    </button>
                  </div>
                </div>
                <div className="w-28 h-28 shrink-0 rounded-xl overflow-hidden shadow-inner relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="Cravee Gourmet Fest Biryani"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5XL1ac80uH2zf7mPtQ0hZcMAAkn4-mHC3PYnVq7AocnW22JpDK5G-5g_S7tCHPiGy5ZaKWuFBQIOlfkeKNwWTtWuJdvFCRXv8vMaliIhJG46faZf9u48AJKw3-tStsvXS9K27VXNPN2qwKtdEMX6XMTDzcAO47TXr6yXl2BmXDc47Jb0wnEDPcGVX4v-4D4Rk4QhIDanVMy3XFMxn6E_C3A0e7jpMOTUcO77_ef0QcQ51sCqWirHg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Top Restaurants Near You Section */}
          <div className="pt-1 pb-3">
            <div className="px-4 flex items-center justify-between mb-2">
              <div>
                <h3 className="font-headline-md text-headline-md text-[#191c1d]">Top Restaurants Near You</h3>
                <p className="font-body-sm text-body-sm text-[#45464c]">Handpicked for discerning palates</p>
              </div>
              <button
                className="font-label-md text-label-md text-[#855300] font-bold flex items-center hover:opacity-80 transition-opacity cursor-pointer"
                onClick={() => onNavigate('Search Results', 'push')}
                type="button"
              >
                See All <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>

            {/* Restaurant Feed Stack */}
            <div className="px-4 flex flex-col gap-3.5">
              {/* Restaurant Card 1: Cactus Club Cafe & Kitchen */}
              <div
                className="rounded-2xl bg-white shadow-sm overflow-hidden active:scale-[0.99] transition-transform duration-150 cursor-pointer border border-[#e1e3e4]"
                onClick={() => onNavigate('10. Restaurant Menu', 'push')}
              >
                <div className="relative w-full h-44">
                  <img
                    className="w-full h-full object-cover"
                    alt="Cactus Club Cafe & Kitchen interior and food spread"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYgpvR_A6JshFUZpIgRtm3MDfCMxzQnsMZf8GiRNvWEsk1DRKvaBYVH7-G6O8mpBLTPgJtJ1G3OPCpXhPX2fWIEcaNNKLYduo1cVz1Ri_2X5LAzzI8rD9xqRZ_In36e4ZI3EImqrv_q1dRfutwh5M7np8U4z-HrEvlaZl1rJIibPkuq-st4CRyLO8sehRQrHEZv9vatyiXkciB-8NIkAQdnWoHqG3K54p_eSZmFg4tSkLg2Sur_xq0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#191c1d] font-label-sm text-label-sm font-semibold shadow-sm">
                      Featured Gourmet
                    </span>
                  </div>
                  <button
                    aria-label="Favorite"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#45464c] hover:text-[#ba1a1a] transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('Favorites', 'none');
                    }}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                  </button>
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <span className="font-headline-sm text-headline-sm font-bold block text-white">
                        Cactus Club Cafe & Kitchen
                      </span>
                      <span className="font-body-sm text-body-sm text-[#e1e3e4]">
                        Continental, Awadhi & Asian • ₹₹
                      </span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-white text-[#191c1d] shadow-sm">
                      <span className="material-symbols-outlined text-[16px] text-[#855300]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="font-label-md text-label-md font-bold">4.8</span>
                      <span className="font-label-sm text-label-sm text-[#76777d]">(1.2k+)</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-3 text-[#45464c] font-label-md text-label-md">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-[#855300]">schedule</span>
                      <span>25-30 mins</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-[#855300]">distance</span>
                      <span>2.4 km</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#ffddb8] text-[#2a1700] font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">local_offer</span>
                    <span>Flat ₹100 OFF &gt; ₹499</span>
                  </div>
                </div>
              </div>

              {/* Restaurant Card 2: The Royal Biryani Co. */}
              <div
                className="rounded-2xl bg-white shadow-sm overflow-hidden active:scale-[0.99] transition-transform duration-150 cursor-pointer border border-[#e1e3e4]"
                onClick={() => onNavigate('10. Restaurant Menu', 'push')}
              >
                <div className="relative w-full h-44">
                  <img
                    className="w-full h-full object-cover"
                    alt="The Royal Biryani Co."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH0Mi3x5ZgKjZvbAJiVf6gR3gr9PW0_qeR-laskhMgoPX35k5DjXcrxNlWjtr7lHsewOHx_4cpUx4SbAbIXy6VGMLs3CU2F0yjSI6YtKsdAesUG5Ebcr_lXQKrlRKI6_hFHpyvWUE9HFX39HKNHJPfFr58GXqdG0DKsie_rL-feo6SoOyydzsaDlsictWYjlyd9YWuli1hqK2TigkaigqY_74kX1pdMNwWhypbBuUjtWGHms24JuEF"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#fea619] text-[#684000] font-label-sm text-label-sm font-bold shadow-sm">
                      Trending Top 10
                    </span>
                  </div>
                  <button
                    aria-label="Favorite"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#45464c] hover:text-[#ba1a1a] transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('Favorites', 'none');
                    }}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                  </button>
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <span className="font-headline-sm text-headline-sm font-bold block text-white">
                        The Royal Biryani Co.
                      </span>
                      <span className="font-body-sm text-body-sm text-[#e1e3e4]">
                        Lucknowi & Hyderabadi Biryani • ₹₹
                      </span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-white text-[#191c1d] shadow-sm">
                      <span className="material-symbols-outlined text-[16px] text-[#855300]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="font-label-md text-label-md font-bold">4.9</span>
                      <span className="font-label-sm text-label-sm text-[#76777d]">(3.4k+)</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-3 text-[#45464c] font-label-md text-label-md">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-[#855300]">schedule</span>
                      <span>20 mins</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-[#855300]">moped</span>
                      <span className="text-[#855300] font-semibold">Free Delivery</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#edeeef] text-[#191c1d] font-label-sm text-label-sm">
                    <span>Pure Handi Cooked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Food Recommendations Grid */}
          <div className="pt-1 pb-4">
            <div className="px-4 flex items-center justify-between mb-2">
              <div>
                <h3 className="font-headline-md text-headline-md text-[#191c1d]">Must-Try Specialties</h3>
                <p className="font-body-sm text-body-sm text-[#45464c]">Direct from Mumbai's award-winning kitchens</p>
              </div>
              <span className="font-label-md text-label-md text-[#855300] font-semibold">2 items added</span>
            </div>

            <div className="px-4 flex flex-col gap-3">
              {/* Dish 1: Murgh Makhani */}
              <div className="p-3 bg-white rounded-2xl shadow-sm flex items-center justify-between gap-3 border border-[#e1e3e4]">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-3.5 h-3.5 rounded-sm bg-[#e1e3e4] flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#ba1a1a]" />
                    </div>
                    <span className="font-label-sm text-label-sm text-[#855300] font-bold uppercase">Bestseller</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-[#191c1d] truncate">Murgh Makhani Butter Chicken</h4>
                  <p className="font-body-sm text-body-sm text-[#45464c] line-clamp-2 mt-0.5">
                    Slow-simmered pulled tandoori chicken immersed in a velvety vine-ripened tomato, butter, and cashew gravy.
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="font-currency-body text-currency-body text-[#191c1d]">₹380</span>
                    <span className="font-label-sm text-label-sm text-[#76777d] line-through">₹440</span>
                  </div>
                </div>

                <div className="relative shrink-0 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-xl overflow-hidden shadow-sm bg-[#edeeef]">
                    <img
                      className="w-full h-full object-cover"
                      alt="Murgh Makhani Butter Chicken"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnI5RYQN4qBLNFpNAGKTo1PbJeHZDfxIXOR55FqUqmo8A2oOgnQfdOVAdYb5RvLfL7m6w9KCxNli1kbB1tm_ZlrymarghnHIvtBwGYdeGwWmO55SXdVjPrySNIwiWnbSSBdjRX7qdRPVgifoq-3At4De-aQtHVm6_1xz0eRN3AwvF0YVrVE8fqcQL49lyCv61yokxroWnYMFhpKsDCtzaW9feZRu3Ljmfn9vScNU3b8CliegkIwO6F"
                    />
                  </div>
                  <div className="cart-stepper -mt-3 relative z-10 flex items-center justify-between w-20 h-7 bg-white rounded-full shadow-md text-[#000000] font-label-md text-label-md px-1 border border-[#e1e3e4]">
                    <button
                      aria-label="Decrease quantity"
                      className="w-5 h-5 flex items-center justify-center text-[#191c1d] active:scale-90 cursor-pointer"
                      onClick={() => setButterChickenQty(Math.max(0, butterChickenQty - 1))}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[14px]">remove</span>
                    </button>
                    <span className="qty-count font-bold text-[#191c1d]">{butterChickenQty}</span>
                    <button
                      aria-label="Increase quantity"
                      className="w-5 h-5 flex items-center justify-center text-[#855300] active:scale-90 cursor-pointer"
                      onClick={() => setButterChickenQty(butterChickenQty + 1)}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[14px]">add</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Dish 2: Paneer Tikka Platter */}
              <div className="p-3 bg-white rounded-2xl shadow-sm flex items-center justify-between gap-3 border border-[#e1e3e4]">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-3.5 h-3.5 rounded-sm bg-[#e1e3e4] flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#855300]" />
                    </div>
                    <span className="font-label-sm text-label-sm text-[#45464c] font-semibold">Chef's Special</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-[#191c1d] truncate">Paneer Tikka Platter</h4>
                  <p className="font-body-sm text-body-sm text-[#45464c] line-clamp-2 mt-0.5">
                    Charcoal-charred artisanal cottage cheese cubes infused with Kashmiri degi mirch, bell peppers, and mint chutney.
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="font-currency-body text-currency-body text-[#191c1d]">₹290</span>
                  </div>
                </div>

                <div className="relative shrink-0 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-xl overflow-hidden shadow-sm bg-[#edeeef]">
                    <img
                      className="w-full h-full object-cover"
                      alt="Paneer Tikka Platter"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU8-w8-71-ddislZfKe9SbSg9E63zMprCMgJOlhEiQk7J6PdoH_zLHE4K5t5lmg-1YEbSo2stWSuxkjMWyUaZy3kzFAe_xHl9iewVI7Z8B5lve5n6DSpHOyiXtXxKK8lGy70zaxAzadreD8ZOpP-mq23W2Zk_uyABQsWUTOmS2CcBnojFbgwTU5RM427bKdpft5xmQkquIbhVvGEL168Dt3dJv1LhT22EXpNEy9A4cfHiNpX8kopjT"
                    />
                  </div>
                  <div className="cart-stepper -mt-3 relative z-10 flex items-center justify-between w-20 h-7 bg-white rounded-full shadow-md text-[#000000] font-label-md text-label-md px-1 border border-[#e1e3e4]">
                    <button
                      aria-label="Decrease quantity"
                      className="w-5 h-5 flex items-center justify-center text-[#191c1d] active:scale-90 cursor-pointer"
                      onClick={() => setPaneerTikkaQty(Math.max(0, paneerTikkaQty - 1))}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[14px]">remove</span>
                    </button>
                    <span className="qty-count font-bold text-[#191c1d]">{paneerTikkaQty}</span>
                    <button
                      aria-label="Increase quantity"
                      className="w-5 h-5 flex items-center justify-center text-[#855300] active:scale-90 cursor-pointer"
                      onClick={() => setPaneerTikkaQty(paneerTikkaQty + 1)}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[14px]">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Active Order Drawer Preview */}
          <div className="px-4 pb-2">
            <div
              className="w-full bg-[#141b2b] text-white rounded-2xl p-3 shadow-xl flex items-center justify-between cursor-pointer active:scale-[0.99] transition-transform"
              onClick={() => onNavigate('11. Restaurant Menu with Cart', 'push')}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#fea619] text-[#684000] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    shopping_bag
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-label-md text-label-md text-white font-bold">2 Items in Cart</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffddb8]" />
                    <span className="font-currency-body text-currency-body text-[#ffddb8]">₹670</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-[#e1e3e4] truncate">
                    From Cactus Club Cafe & Kitchen
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0 bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-full">
                <span className="font-label-md text-label-md text-white font-semibold">View</span>
                <span className="material-symbols-outlined text-[16px] text-white">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNav currentScreen="8. Home" onNavigate={onNavigate} />
    </div>
  );
};
