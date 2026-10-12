import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';
import { BottomNav } from '../common/BottomNav';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const ScreenFavorites: React.FC<Props> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'dishes' | 'restaurants'>('dishes');
  const [activeFilter, setActiveFilter] = useState('All');
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const handleAddDish = (name: string) => {
    setAddedItems((prev) => ({ ...prev, [name]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [name]: false }));
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        showBack={false}
        title="Favorites"
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full pt-28 bg-[#f8f9fa] pb-28">
        <div className="flex flex-col w-full pb-8">
          {/* Favorites Header & Counter Badge */}
          <section className="px-4 pt-1 pb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="font-headline-lg text-headline-lg text-[#191c1d] tracking-tight">Favorites</h2>
              <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-[#fea619]/20 text-[#855300] font-label-md text-label-md font-bold">
                8 Saved
              </span>
            </div>
            <button
              aria-label="Search saved items"
              className="w-10 h-10 rounded-full bg-[#f3f4f5] flex items-center justify-center text-[#45464c] active:scale-95 transition-transform border border-[#e1e3e4] cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>
          </section>

          {/* Segmented Sub-tabs */}
          <div className="px-4 pt-1 pb-3">
            <div className="p-1 rounded-xl bg-[#edeeef] flex items-center gap-1 shadow-inner">
              <button
                className={`flex-1 py-2 rounded-lg font-label-md text-label-md transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'dishes'
                    ? 'bg-white text-[#191c1d] shadow-sm font-semibold'
                    : 'text-[#45464c] hover:text-[#191c1d]'
                }`}
                id="tab-dishes"
                onClick={() => setActiveTab('dishes')}
                type="button"
              >
                <span>Dishes</span>
                <span className="w-5 h-5 rounded-full bg-[#000000] text-white text-[10px] flex items-center justify-center font-bold">
                  5
                </span>
              </button>
              <button
                className={`flex-1 py-2 rounded-lg font-label-md text-label-md transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'restaurants'
                    ? 'bg-white text-[#191c1d] shadow-sm font-semibold'
                    : 'text-[#45464c] hover:text-[#191c1d]'
                }`}
                id="tab-restaurants"
                onClick={() => setActiveTab('restaurants')}
                type="button"
              >
                <span>Restaurants</span>
                <span className="w-5 h-5 rounded-full bg-[#e7e8e9] text-[#45464c] text-[10px] flex items-center justify-center font-bold">
                  3
                </span>
              </button>
            </div>
          </div>

          {/* Quick Filter Pills Rail */}
          <div className="w-full overflow-x-auto no-scrollbar py-1 mb-2 px-4 flex items-center gap-2">
            {['All', 'Veg Only', 'Under 30 mins', 'Top Rated 4.5+'].map((f) => (
              <button
                key={f}
                className={`filter-pill h-9 px-4 rounded-full font-label-md text-label-md shadow-sm transition-all active:scale-95 cursor-pointer ${
                  activeFilter === f
                    ? 'bg-[#000000] text-white'
                    : 'bg-white text-[#45464c] border border-[#e1e3e4]'
                }`}
                onClick={() => setActiveFilter(f)}
                type="button"
              >
                {f === 'Veg Only' && <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 mr-1.5" />}
                {f === 'Top Rated 4.5+' && (
                  <span className="material-symbols-outlined text-[15px] text-[#fea619] mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                )}
                {f}
              </button>
            ))}
          </div>

          {/* Tab 1: Favorite Dishes Content View */}
          {activeTab === 'dishes' ? (
            <div className="flex flex-col gap-3 px-4" id="content-dishes">
              {/* Dish 1: Truffle Edamame Dumplings */}
              <article
                className="p-3.5 rounded-2xl bg-white shadow-sm flex gap-3 relative transition-all border border-[#e1e3e4] cursor-pointer"
                onClick={() => onNavigate('10. Restaurant Menu', 'push')}
              >
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-[#edeeef]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Truffle Edamame Dumplings"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyCCqROv4tHP5uLbj52iD4IbDuQtjQgj2OMhPy3Y4ebZadDDNkytvTnZesmmv1myyAD76ZKDM3cdcglGOIBumT5438V1eV2FbvWTL4zccCaqgITIADe3s5o9nKlEwL3NGIz7mxc_FDabqeSkjmHbnS5JZQJcs4a-gSfMBOvow5uAD5BNXZ7_ij3w_ZAwl7PhYGBeBzBHpVsPxXLZxfqMNmiJqfbF2r8hRReCaHuHywcrSNBoc3eEM5"
                  />
                  <button
                    aria-label="Remove from favorites"
                    className="absolute top-1.5 left-1.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#ba1a1a]"
                    onClick={(e) => e.stopPropagation()}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      favorite
                    </span>
                  </button>
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0 pr-1">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-3.5 h-3.5 rounded-sm bg-emerald-700/10 flex items-center justify-center p-0.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-700" />
                      </span>
                      <span className="font-label-sm text-label-sm text-[#45464c] truncate">
                        Cactus Club Cafe • Bandra W
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-[#191c1d] truncate">
                      Truffle Edamame Dumplings
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-[#fea619]/20 text-[#855300] font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                        <span>4.8</span>
                      </div>
                      <span className="text-[#45464c] font-body-sm text-body-sm">• 25 mins</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-1">
                    <span className="font-currency-display text-currency-display text-[#191c1d] font-bold">₹420</span>
                    <button
                      className="px-3.5 py-1.5 rounded-full bg-[#000000] text-white font-label-md text-label-md flex items-center gap-1 shadow-sm active:scale-95 transition-all cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddDish('Dumplings');
                      }}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {addedItems['Dumplings'] ? 'check' : 'add'}
                      </span>
                      <span>{addedItems['Dumplings'] ? 'ADDED' : 'ADD'}</span>
                    </button>
                  </div>
                </div>
              </article>

              {/* Dish 2: Awadhi Gosht Dum Biryani */}
              <article
                className="p-3.5 rounded-2xl bg-white shadow-sm flex gap-3 relative transition-all border border-[#e1e3e4] cursor-pointer"
                onClick={() => onNavigate('10. Restaurant Menu', 'push')}
              >
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-[#edeeef]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Awadhi Gosht Dum Biryani"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7cf-ZhZfrC0ULwDnFbkdRqkyVXjhcgpIegrK9EoIGReKbqdm4uTIp6uCnO2BQNPbzJWVV7gNM9-cFgaeySRjWHjEloye_SfHK6NE9YFUMYZ5HntJ5v6qRojzF7SYKWkSRlqnYZt5Ta-N8n_jzSJ2oz7k8LN6LU9an4k41-dYH0d8NXNltpl5r_iyYhgoJ7XuVehPj_YIz1FqDjv5yvrbHEnGA_L8mV8AUsggZJSk9T9RLvrwe4TJx"
                  />
                  <button
                    aria-label="Remove from favorites"
                    className="absolute top-1.5 left-1.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#ba1a1a]"
                    onClick={(e) => e.stopPropagation()}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      favorite
                    </span>
                  </button>
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0 pr-1">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-3.5 h-3.5 rounded-sm bg-rose-700/10 flex items-center justify-center p-0.5">
                        <span className="w-2 h-2 rounded-none bg-rose-700 rotate-45" />
                      </span>
                      <span className="font-label-sm text-label-sm text-[#45464c] truncate">
                        The Royal Biryani Co. • Bandra
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-[#191c1d] truncate">
                      Awadhi Gosht Dum Biryani
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-[#fea619]/20 text-[#855300] font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                        <span>4.9</span>
                      </div>
                      <span className="text-[#45464c] font-body-sm text-body-sm">• 30 mins</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-1">
                    <span className="font-currency-display text-currency-display text-[#191c1d] font-bold">₹480</span>
                    <button
                      className="px-3.5 py-1.5 rounded-full bg-[#000000] text-white font-label-md text-label-md flex items-center gap-1 shadow-sm active:scale-95 transition-all cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddDish('Biryani');
                      }}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {addedItems['Biryani'] ? 'check' : 'add'}
                      </span>
                      <span>{addedItems['Biryani'] ? 'ADDED' : 'ADD'}</span>
                    </button>
                  </div>
                </div>
              </article>

              {/* Dish 3: Crispy Prawn Tempura Roll */}
              <article
                className="p-3.5 rounded-2xl bg-white shadow-sm flex gap-3 relative transition-all border border-[#e1e3e4] cursor-pointer"
                onClick={() => onNavigate('10. Restaurant Menu', 'push')}
              >
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-[#edeeef]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Crispy Prawn Tempura Roll"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeLZOlSRNhSEIgc27zH5qlRrU-TuhneBzEATicwrYi-Se7scvUKUFddEbsjNeFkmtkqsI9UeR9FkIZf51mBEn347mvZ7nqm3UJQ9dNIHGj1xM3BPcMcGVKMtAr-b5p5wlXxhyrDTZTye9KzDHzbpN1nXif3fE5yJy3AQZaHoMoSM8OkgG8c_ENBinp-H_YbJ6eZ2Dd7mYOP_uvR3b0m6HGAkCvbYPHlCAuq60tU8__nawPxwqNDYVk"
                  />
                  <button
                    aria-label="Remove from favorites"
                    className="absolute top-1.5 left-1.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#ba1a1a]"
                    onClick={(e) => e.stopPropagation()}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      favorite
                    </span>
                  </button>
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0 pr-1">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-3.5 h-3.5 rounded-sm bg-rose-700/10 flex items-center justify-center p-0.5">
                        <span className="w-2 h-2 rounded-none bg-rose-700 rotate-45" />
                      </span>
                      <span className="font-label-sm text-label-sm text-[#45464c] truncate">
                        Cactus Club Cafe • Bandra W
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-[#191c1d] truncate">
                      Crispy Prawn Tempura Roll
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-[#fea619]/20 text-[#855300] font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                        <span>4.7</span>
                      </div>
                      <span className="text-[#45464c] font-body-sm text-body-sm">• 28 mins</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-1">
                    <span className="font-currency-display text-currency-display text-[#191c1d] font-bold">₹560</span>
                    <button
                      className="px-3.5 py-1.5 rounded-full bg-[#000000] text-white font-label-md text-label-md flex items-center gap-1 shadow-sm active:scale-95 transition-all cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddDish('Prawn Roll');
                      }}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {addedItems['Prawn Roll'] ? 'check' : 'add'}
                      </span>
                      <span>{addedItems['Prawn Roll'] ? 'ADDED' : 'ADD'}</span>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ) : (
            <div className="flex flex-col gap-3 px-4" id="content-restaurants">
              {/* Restaurant 1 */}
              <article className="p-3.5 rounded-2xl bg-white shadow-sm flex flex-col gap-3 border border-[#e1e3e4]">
                <div className="relative w-full h-36 rounded-xl overflow-hidden bg-[#edeeef]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Cactus Club Cafe & Kitchen"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNqKq86U3gKWFaf7cpskr-uAbAZ3ZdOazJQhsELCBOVVlgARxIgZWY0Xu29tqKTbU4U4XzXCCOl3jewH7D5CzWaBulcRGPDrusMDhoViMT55OiC8rR5hj_CeaYqSRg9d2Btk9rb7KqH_wBo84lbsH0mL8oS3B0TBVIFUPNEgScgcDjXrIaHxjkDP4FUeP2nfmna3z5MvZXzJmykbT7kXT021C-ZxDF60W7AjChNyY7Nb8JzH4ukyVa"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3">
                    <span className="px-2 py-0.5 rounded-md bg-[#fea619] text-[#684000] font-label-sm text-label-sm font-bold tracking-wide">
                      CRAVEE SIGNATURE
                    </span>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h4 className="font-headline-sm text-headline-sm text-[#191c1d] truncate font-bold">
                      Cactus Club Cafe & Kitchen
                    </h4>
                    <p className="font-body-sm text-body-sm text-[#45464c] truncate mt-0.5">
                      Continental & Asian Fusion • Bandra West
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-label-md text-label-md font-bold text-[#191c1d]">⭐ 4.8</span>
                      <span className="text-[#45464c]">• 25-30 mins</span>
                    </div>
                  </div>
                  <button
                    className="shrink-0 px-3.5 py-2 rounded-xl bg-[#edeeef] text-[#191c1d] font-label-md text-label-md font-semibold hover:bg-[#e7e8e9] active:scale-95 transition-all cursor-pointer"
                    onClick={() => onNavigate('10. Restaurant Menu', 'push')}
                    type="button"
                  >
                    Open Menu
                  </button>
                </div>
              </article>

              {/* Restaurant 2 */}
              <article className="p-3.5 rounded-2xl bg-white shadow-sm flex flex-col gap-3 border border-[#e1e3e4]">
                <div className="relative w-full h-36 rounded-xl overflow-hidden bg-[#edeeef]">
                  <img
                    className="w-full h-full object-cover"
                    alt="The Bombay Canteen"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDzWqN8ZopEW9KRhU6QsZdnalRL2eak0alBqENkQq9rIYMf2oDEoDiw8cN-ZanPT0maqvNn7LHAj_JkAYTjm9irjJpnURPjtTienJoHgXhZrhi4-LfTExFZ2LxevmnMTbCUXk8F8l-xSuPB885EwN2P28z9RGpiLGY0iW20d2CgVm4J0A36-WcxNhN9uA9oWQkvQLtmPJdbPs3iRKmZ7L52PXix0Y-QQGi7hz3UEhLgwgaiH0ogi1I"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h4 className="font-headline-sm text-headline-sm text-[#191c1d] truncate font-bold">
                      The Bombay Canteen
                    </h4>
                    <p className="font-body-sm text-body-sm text-[#45464c] truncate mt-0.5">
                      Contemporary Regional Indian • Lower Parel
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-label-md text-label-md font-bold text-[#191c1d]">⭐ 4.9</span>
                      <span className="text-[#45464c]">• 35 mins</span>
                    </div>
                  </div>
                  <button
                    className="shrink-0 px-3.5 py-2 rounded-xl bg-[#edeeef] text-[#191c1d] font-label-md text-label-md font-semibold hover:bg-[#e7e8e9] active:scale-95 transition-all cursor-pointer"
                    onClick={() => onNavigate('10. Restaurant Menu', 'push')}
                    type="button"
                  >
                    Open Menu
                  </button>
                </div>
              </article>
            </div>
          )}

          {/* Frequently Ordered Pair Shortcut */}
          <section className="mt-5 px-4">
            <div className="p-4 rounded-2xl bg-[#fea619]/15 flex items-center justify-between gap-3 shadow-sm border border-[#fea619]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fea619]/30 flex items-center justify-center text-[#684000] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">autorenew</span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-[#191c1d] font-semibold">Frequently Ordered Pair</h4>
                  <p className="font-body-sm text-body-sm text-[#45464c] line-clamp-1">
                    Awadhi Biryani & Truffle Dim Sums
                  </p>
                </div>
              </div>
              <button
                className="shrink-0 px-3 py-1.5 rounded-full bg-[#000000] text-white font-label-md text-label-md shadow-sm active:scale-95 transition-all cursor-pointer"
                onClick={() => onNavigate('11. Restaurant Menu with Cart', 'push')}
                type="button"
              >
                Quick Re-order
              </button>
            </div>
          </section>
        </div>
      </main>

      <BottomNav currentScreen="Favorites" onNavigate={onNavigate} />
    </div>
  );
};
