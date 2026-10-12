import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const ScreenSearchResults: React.FC<Props> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('Truffle Pasta');
  const [activeFilters, setActiveFilters] = useState<string[]>(['Under 30 mins', '4.0+']);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleFilter = (name: string) => {
    setActiveFilters((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name]
    );
  };

  const handleAdd = (dishName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const current = quantities[dishName] || 0;
    const next = current + 1;
    setQuantities({ ...quantities, [dishName]: next });
    showToast(`Added ${dishName} to bag!`);
  };

  const handleMinus = (dishName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const current = quantities[dishName] || 0;
    if (current > 1) {
      setQuantities({ ...quantities, [dishName]: current - 1 });
    } else {
      const copy = { ...quantities };
      delete copy[dishName];
      setQuantities(copy);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 1800);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        title="Search Results"
        onBack={() => onNavigate('9. Search', 'push_back')}
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full pt-28 bg-[#f8f9fa] pb-24">
        <div className="flex flex-col w-full">
          {/* Search Header & Stats Bar */}
          <div className="px-4 pt-1 pb-3 flex flex-col gap-2.5 bg-[#f8f9fa]">
            {/* Active Search Bar */}
            <div className="relative flex items-center w-full h-12 bg-[#f3f4f5] rounded-xl px-4 shadow-sm border border-[#e1e3e4]">
              <span className="material-symbols-outlined text-[#76777d] text-[20px] shrink-0 mr-3">search</span>
              <input
                className="flex-1 bg-transparent border-none outline-none font-body-md text-body-md text-[#191c1d] placeholder:text-[#76777d] font-medium tracking-tight"
                id="search-input"
                placeholder="Dishes, cuisines, or places..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  aria-label="Clear search"
                  className="w-7 h-7 rounded-full bg-[#edeeef] flex items-center justify-center text-[#45464c] active:scale-90 transition-transform shrink-0 ml-1 cursor-pointer"
                  id="clear-search-btn"
                  onClick={() => setSearchTerm('')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              )}
            </div>

            {/* Meta summary info */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                <span className="font-label-md text-label-md text-[#45464c]">Showing</span>
                <span className="font-label-md text-label-md text-[#191c1d] font-semibold bg-[#edeeef] px-2 py-0.5 rounded-full">
                  18 results
                </span>
              </div>
              <div className="flex items-center gap-1 text-[#45464c] text-label-sm font-label-sm">
                <span className="material-symbols-outlined text-[15px] text-[#855300]">location_on</span>
                <span className="truncate max-w-[140px]">Indiranagar, BLR</span>
              </div>
            </div>
          </div>

          {/* Horizontal Filter Pills Carousel */}
          <div className="w-full overflow-x-auto no-scrollbar py-1 px-4 flex items-center gap-2 shrink-0">
            {/* Under 30 mins */}
            <button
              className={`filter-pill shrink-0 flex items-center gap-1.5 px-3.5 h-9 rounded-full font-label-md text-label-md shadow-sm active:scale-95 transition-all cursor-pointer ${
                activeFilters.includes('Under 30 mins')
                  ? 'bg-[#000000] text-white'
                  : 'bg-white text-[#191c1d] border border-[#e1e3e4]'
              }`}
              onClick={() => toggleFilter('Under 30 mins')}
              type="button"
            >
              <span className="material-symbols-outlined text-[16px] text-[#fea619]">schedule</span>
              <span>Under 30 mins</span>
              {activeFilters.includes('Under 30 mins') && (
                <span className="material-symbols-outlined text-[14px]">check</span>
              )}
            </button>

            {/* Rating 4.0+ */}
            <button
              className={`filter-pill shrink-0 flex items-center gap-1 px-3.5 h-9 rounded-full font-label-md text-label-md shadow-sm active:scale-95 transition-all cursor-pointer ${
                activeFilters.includes('4.0+')
                  ? 'bg-[#000000] text-white'
                  : 'bg-white text-[#191c1d] border border-[#e1e3e4]'
              }`}
              onClick={() => toggleFilter('4.0+')}
              type="button"
            >
              <span className="material-symbols-outlined text-[15px] text-[#fea619]" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span>4.0+</span>
              {activeFilters.includes('4.0+') && (
                <span className="material-symbols-outlined text-[14px]">check</span>
              )}
            </button>

            {/* Pure Veg */}
            <button
              className={`filter-pill shrink-0 flex items-center gap-1.5 px-3.5 h-9 rounded-full font-label-md text-label-md shadow-sm active:scale-95 transition-all cursor-pointer ${
                activeFilters.includes('Pure Veg')
                  ? 'bg-[#000000] text-white'
                  : 'bg-white text-[#191c1d] border border-[#e1e3e4]'
              }`}
              onClick={() => toggleFilter('Pure Veg')}
              type="button"
            >
              <span className="w-3.5 h-3.5 rounded-sm bg-[#15803D]/10 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
              </span>
              <span>Pure Veg</span>
            </button>

            {/* Offers */}
            <button
              className="filter-pill shrink-0 flex items-center gap-1 px-3.5 h-9 rounded-full bg-white text-[#191c1d] border border-[#e1e3e4] font-label-md text-label-md shadow-sm active:scale-95 transition-all cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px] text-[#855300]">local_offer</span>
              <span>Offers</span>
            </button>

            {/* Price */}
            <button
              className="filter-pill shrink-0 flex items-center gap-1 px-3.5 h-9 rounded-full bg-white text-[#191c1d] border border-[#e1e3e4] font-label-md text-label-md shadow-sm active:scale-95 transition-all cursor-pointer"
              type="button"
            >
              <span>Price: ₹₹</span>
              <span className="material-symbols-outlined text-[16px] text-[#76777d]">expand_more</span>
            </button>
          </div>

          {/* Dish & Restaurant Results List */}
          <div className="px-4 flex flex-col gap-3 mt-3">
            {/* Card 1: Truffle Tagliolini (Cactus Club Cafe) */}
            <div
              className="dish-card relative bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-2 active:shadow-md transition-shadow border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('10. Restaurant Menu', 'push')}
            >
              <div className="flex items-center justify-between pb-1">
                <div className="flex items-center gap-1 min-w-0">
                  <span className="material-symbols-outlined text-[17px] text-[#fea619] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                  <span className="font-headline-sm text-headline-sm text-[#191c1d] font-bold truncate">
                    Cactus Club Cafe
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-[#f3f4f5] px-2 py-0.5 rounded-full shrink-0">
                  <span className="material-symbols-outlined text-[13px] text-[#855300]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="font-label-md text-label-md text-[#191c1d] font-bold">4.8</span>
                  <span className="text-label-sm font-label-sm text-[#45464c]">(340+)</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="w-3.5 h-3.5 rounded-[3px] bg-[#15803D]/10 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                    </span>
                    <span className="bg-[#fea619]/20 text-[#684000] font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">
                      Bestseller
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-[#191c1d] font-semibold line-clamp-2 leading-tight">
                    Truffle Tagliolini with Wild Mushrooms
                  </h2>
                  <div className="flex items-baseline gap-1 mt-1.5 mb-1">
                    <span className="font-currency-display text-currency-display text-[#191c1d] font-bold">₹620</span>
                    <span className="font-body-sm text-body-sm text-[#76777d] line-through">₹700</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-[#45464c] line-clamp-2 leading-relaxed">
                    Fresh ribbon pasta tossed in cold-pressed Umbriano white truffle butter, sautéed porcini, finished with 24-month Grana Padano.
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-[#45464c] font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px] text-[#855300]">timer</span>
                    <span className="font-medium text-[#191c1d]">25 mins</span>
                    <span>•</span>
                    <span>Free delivery above ₹499</span>
                  </div>
                </div>

                <div className="relative shrink-0 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-[#edeeef] shadow-inner">
                    <img
                      alt="Truffle Tagliolini with Wild Mushrooms"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp6W9IFShhNGjExkgSm9W5mDiXSr437mQjv9ZhB-0wYZpxoZ6-Xmm5oAmNYHNF32GSphXROl2NZ1k7kIvqq1w7yHEuDU1HZM1lvuXKzQZPSRnqZYfEjRdR6LVmWGgALjK4U2r3Qmw00UhLMH-CkXoZNvwvktdIreqElAkJctJgmxNZctYnh6ejZZdkm06T-GDtFv2f025YDtKt3qlzmMvDiU4rDynOEzOcVrzhvYbnkqIMrk9WfJcC"
                    />
                  </div>
                  {quantities['Truffle Tagliolini'] ? (
                    <div className="add-dish-btn -mt-4 bg-[#ffddb8] text-[#2a1700] font-label-lg text-label-lg font-bold px-3 h-8 rounded-full shadow-md flex items-center justify-between gap-2 border border-[#e1e3e4]">
                      <button onClick={(e) => handleMinus('Truffle Tagliolini', e)} className="px-1 text-base">
                        −
                      </button>
                      <span>{quantities['Truffle Tagliolini']}</span>
                      <button onClick={(e) => handleAdd('Truffle Tagliolini', e)} className="px-1 text-base">
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="add-dish-btn -mt-4 bg-white text-[#855300] font-label-lg text-label-lg font-bold px-5 h-8 rounded-full shadow-md hover:bg-[#ffddb8] active:scale-95 transition-all flex items-center justify-center gap-1 border border-[#e1e3e4] cursor-pointer"
                      onClick={(e) => handleAdd('Truffle Tagliolini', e)}
                      type="button"
                    >
                      <span>ADD</span>
                      <span className="material-symbols-outlined text-[14px]">add</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Card 2: Black Truffle & Burrata Ravioli (Osteria Del Sole) */}
            <div
              className="dish-card relative bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-2 active:shadow-md transition-shadow border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('10. Restaurant Menu', 'push')}
            >
              <div className="flex items-center justify-between pb-1">
                <div className="flex items-center gap-1 min-w-0">
                  <span className="material-symbols-outlined text-[17px] text-[#fea619] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                    restaurant
                  </span>
                  <span className="font-headline-sm text-headline-sm text-[#191c1d] font-bold truncate">
                    Osteria Del Sole
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-[#f3f4f5] px-2 py-0.5 rounded-full shrink-0">
                  <span className="material-symbols-outlined text-[13px] text-[#855300]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="font-label-md text-label-md text-[#191c1d] font-bold">4.9</span>
                  <span className="text-label-sm font-label-sm text-[#45464c]">(520+)</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="w-3.5 h-3.5 rounded-[3px] bg-[#15803D]/10 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                    </span>
                    <span className="bg-[#000000] text-white font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[11px] text-[#ffb95f]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        award_star
                      </span>
                      Gourmet Pick
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-[#191c1d] font-semibold line-clamp-2 leading-tight">
                    Black Truffle & Burrata Ravioli
                  </h2>
                  <div className="flex items-baseline gap-1 mt-1.5 mb-1">
                    <span className="font-currency-display text-currency-display text-[#191c1d] font-bold">₹780</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-[#45464c] line-clamp-2 leading-relaxed">
                    Hand-pinched pasta parcels packed with creamy Puglia burrata, infused with fragrant Norcia black truffle emulsion and sage crisp.
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-[#45464c] font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px] text-[#855300]">timer</span>
                    <span className="font-medium text-[#191c1d]">30 mins</span>
                    <span>•</span>
                    <span>Chef's Signature</span>
                  </div>
                </div>

                <div className="relative shrink-0 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-[#edeeef] shadow-inner">
                    <img
                      alt="Black Truffle & Burrata Ravioli"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdWSdG3WgosmxgkO1QTblVQP87sxUXTAA280JoZlXfX7I0FGKgWDUHb8gdHXUg_z_ob-pHuxaX8NapNQetQ_KQ8eFnvXX2NlIgS1gQdQpafBSRFdjVkBlhVu7QlpC4DhJ6Wcgmw-aZeuq3XMsu3lNoddxiP-gSisBpUNY379_YQc9cFwvB4lu4PuHx73hf-Qa-WWtaajWpkQzRXrxnDecc54r7Xj-NJSNxsArnrK5zgFo-VlTLu1oh"
                    />
                  </div>
                  {quantities['Black Truffle Ravioli'] ? (
                    <div className="add-dish-btn -mt-4 bg-[#ffddb8] text-[#2a1700] font-label-lg text-label-lg font-bold px-3 h-8 rounded-full shadow-md flex items-center justify-between gap-2 border border-[#e1e3e4]">
                      <button onClick={(e) => handleMinus('Black Truffle Ravioli', e)} className="px-1 text-base">
                        −
                      </button>
                      <span>{quantities['Black Truffle Ravioli']}</span>
                      <button onClick={(e) => handleAdd('Black Truffle Ravioli', e)} className="px-1 text-base">
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="add-dish-btn -mt-4 bg-white text-[#855300] font-label-lg text-label-lg font-bold px-5 h-8 rounded-full shadow-md hover:bg-[#ffddb8] active:scale-95 transition-all flex items-center justify-center gap-1 border border-[#e1e3e4] cursor-pointer"
                      onClick={(e) => handleAdd('Black Truffle Ravioli', e)}
                      type="button"
                    >
                      <span>ADD</span>
                      <span className="material-symbols-outlined text-[14px]">add</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Card 3: Creamy White Truffle Penne */}
            <div
              className="dish-card relative bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-2 active:shadow-md transition-shadow border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('10. Restaurant Menu', 'push')}
            >
              <div className="flex items-center justify-between pb-1">
                <div className="flex items-center gap-1 min-w-0">
                  <span className="material-symbols-outlined text-[17px] text-[#fea619] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                    restaurant_menu
                  </span>
                  <span className="font-headline-sm text-headline-sm text-[#191c1d] font-bold truncate">
                    Bella Italia Trattoria
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-[#f3f4f5] px-2 py-0.5 rounded-full shrink-0">
                  <span className="material-symbols-outlined text-[13px] text-[#855300]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="font-label-md text-label-md text-[#191c1d] font-bold">4.6</span>
                  <span className="text-label-sm font-label-sm text-[#45464c]">(180+)</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="w-3.5 h-3.5 rounded-[3px] bg-[#15803D]/10 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                    </span>
                    <span className="bg-[#ba1a1a]/10 text-[#ba1a1a] font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[11px]">percent</span>
                      20% OFF
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-[#191c1d] font-semibold line-clamp-2 leading-tight">
                    Creamy White Truffle Penne
                  </h2>
                  <div className="flex items-baseline gap-1 mt-1.5 mb-1">
                    <span className="font-currency-display text-currency-display text-[#191c1d] font-bold">₹540</span>
                    <span className="font-body-sm text-body-sm text-[#76777d] line-through">₹675</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-[#45464c] line-clamp-2 leading-relaxed">
                    Al dente penne rigate coated in silky mascarpone cream, fragrant Alba white truffle oil, toasted pine nuts, and cracked black pepper.
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-[#45464c] font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px] text-[#855300]">bolt</span>
                    <span className="font-semibold text-[#855300]">20 mins fast delivery</span>
                  </div>
                </div>

                <div className="relative shrink-0 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-[#edeeef] shadow-inner">
                    <img
                      alt="Creamy White Truffle Penne"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuANKqTAJGgpSAOqfeUJtwRxNwHoTxImtD74Se5JgYYUN4R4fVC_t_endlKU4Yg2WtuqZ9NuiovjyMRPwRv4C3TRQiaAJWZIXGVeDJYysyLJg2B-5WU926chJzBvQUiQ6URFaufByQdBrQz-h6exNjX8lRw1pTv_rjnoYVpoEWJ_SPSfFSQ06mO3yVIcJsX3anoA9dRn1q507-4ZCKybzSjMdyRJh5aeutsSIsxUPkCHrwV3mdnyCcQa"
                    />
                  </div>
                  <button
                    className="add-dish-btn -mt-4 bg-white text-[#855300] font-label-lg text-label-lg font-bold px-5 h-8 rounded-full shadow-md hover:bg-[#ffddb8] active:scale-95 transition-all flex items-center justify-center gap-1 border border-[#e1e3e4] cursor-pointer"
                    onClick={(e) => handleAdd('White Truffle Penne', e)}
                    type="button"
                  >
                    <span>ADD</span>
                    <span className="material-symbols-outlined text-[14px]">add</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4: Truffle Mac & Aged Cheddar Gratin */}
            <div
              className="dish-card relative bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-2 active:shadow-md transition-shadow border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('10. Restaurant Menu', 'push')}
            >
              <div className="flex items-center justify-between pb-1">
                <div className="flex items-center gap-1 min-w-0">
                  <span className="material-symbols-outlined text-[17px] text-[#fea619] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                    bakery_dining
                  </span>
                  <span className="font-headline-sm text-headline-sm text-[#191c1d] font-bold truncate">
                    The Artisan Bistro
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-[#f3f4f5] px-2 py-0.5 rounded-full shrink-0">
                  <span className="material-symbols-outlined text-[13px] text-[#855300]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="font-label-md text-label-md text-[#191c1d] font-bold">4.7</span>
                  <span className="text-label-sm font-label-sm text-[#45464c]">(210+)</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="w-3.5 h-3.5 rounded-[3px] bg-[#15803D]/10 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                    </span>
                    <span className="bg-[#edeeef] text-[#45464c] font-label-sm text-label-sm px-2 py-0.5 rounded-full font-medium">
                      Comfort Food
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-[#191c1d] font-semibold line-clamp-2 leading-tight">
                    Truffle Mac & Aged Cheddar Gratin
                  </h2>
                  <div className="flex items-baseline gap-1 mt-1.5 mb-1">
                    <span className="font-currency-display text-currency-display text-[#191c1d] font-bold">₹490</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-[#45464c] line-clamp-2 leading-relaxed">
                    Elbow macaroni baked in a bubbling three-cheese roux infused with black truffle oil, crowned with golden panko herb crust.
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-[#45464c] font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px] text-[#855300]">timer</span>
                    <span className="font-medium text-[#191c1d]">35 mins</span>
                    <span>•</span>
                    <span>Live Kitchen</span>
                  </div>
                </div>

                <div className="relative shrink-0 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-[#edeeef] shadow-inner">
                    <img
                      alt="Truffle Mac & Aged Cheddar Gratin"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFrznGj_DncXy-kgETqXDHA1-E_vxsGUbUsoxyhOtGmc6YN53f2KLTW66x9iKIduARomNDgZ01PcE1L3UqxmInOCBQLBH6BMejbCvKA3jgoOh30ebX-ZVarVUtsS-13B_ZhF8u4v3g097PcVcNi0ZJfXmOxYzNr7Dktsa0y7rZOwb57hAYI5PttGYfsup0gRV-0t89Cgj3rCAP_F6L5XNcHVpVKisJ7qdF0qq3kjZX2ecRbiShUfR4"
                    />
                  </div>
                  <button
                    className="add-dish-btn -mt-4 bg-white text-[#855300] font-label-lg text-label-lg font-bold px-5 h-8 rounded-full shadow-md hover:bg-[#ffddb8] active:scale-95 transition-all flex items-center justify-center gap-1 border border-[#e1e3e4] cursor-pointer"
                    onClick={(e) => handleAdd('Truffle Mac', e)}
                    type="button"
                  >
                    <span>ADD</span>
                    <span className="material-symbols-outlined text-[14px]">add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Ambient Gastronomic Curated Note */}
          <div className="mx-4 mt-5 mb-2 p-4 rounded-2xl bg-[#ffddb8]/30 flex items-center gap-3.5 border border-[#ffddb8]/60">
            <div className="w-10 h-10 rounded-full bg-[#fea619] flex items-center justify-center text-black shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[20px]">room_service</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-label-lg text-label-lg text-[#2a1700] font-semibold">Cravee Chef's Guarantee</h3>
              <p className="font-body-sm text-body-sm text-[#653e00] leading-snug mt-0.5">
                Each pasta is prepared fresh upon order and delivered in thermal insulation canisters to preserve aroma.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Sticky Bottom Actions Bar */}
        <div className="fixed bottom-6 left-0 right-0 z-40 px-4 flex items-center justify-end pointer-events-none">
          <button
            className="pointer-events-auto flex items-center gap-2 bg-[#000000] text-white px-5 py-3.5 rounded-full shadow-xl active:scale-95 transition-transform font-label-lg text-label-lg font-bold cursor-pointer"
            id="filters-modal-trigger"
            type="button"
            onClick={() => onNavigate('11. Restaurant Menu with Cart', 'push')}
          >
            <span className="material-symbols-outlined text-[20px] text-[#fea619]">tune</span>
            <span>Filters</span>
            <span className="w-5 h-5 rounded-full bg-[#fea619] text-black text-label-sm font-label-sm font-extrabold flex items-center justify-center">
              2
            </span>
          </button>
        </div>

        {/* Toast Feedback */}
        {toastMessage && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#000000] text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 transition-all duration-300">
            <span className="material-symbols-outlined text-[18px] text-[#fea619]">check_circle</span>
            <span className="font-label-md text-label-md font-semibold">{toastMessage}</span>
          </div>
        )}
      </main>
    </div>
  );
};
