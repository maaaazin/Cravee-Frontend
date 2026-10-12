import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const Screen10_RestaurantMenu: React.FC<Props> = ({ onNavigate }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Special Sushi & Asian');
  const [cartItemsCount, setCartItemsCount] = useState(2);
  const [cartTotal, setCartTotal] = useState(980);

  const categories = [
    'Special Sushi & Asian',
    'Appetizers & Tandoor',
    'Greens & Bowls',
    'Artisan Breads',
    'Beverages',
  ];

  const handleAddDish = (price: number) => {
    setCartItemsCount((prev) => prev + 1);
    setCartTotal((prev) => prev + price);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        title="Cactus Club Cafe"
        onBack={() => onNavigate('8. Home', 'push_back')}
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full pt-28 bg-[#f8f9fa] pb-28">
        <div className="flex flex-col w-full">
          {/* Restaurant Hero Showcase */}
          <div className="relative w-full h-64 overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2EPUjoHw3BRCjK9NQBf2E8HdcBzYlliIx-zsxk31bx97IR9qeYsnlmhlAOgWggg0uOheilbuQ2bPawMqg9y7j9UFYA-1I5_3oHC2IeArzlUz0yvaN72YQm_xF7QVoZBmTc1F1LS3PyIZUKtUPNbEv1zSqjnBAsAoJ2S2DNYRF8oQlUh8DXOyypj1pIDxcCE1TCznK7rHWrMJbLlxdKc8Du5Hp7ciBuDtCJpdJSQ6ho4APBOv_WGiU')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Quick Floating Action Overlay Buttons */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
              <button
                aria-label="Share"
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#191c1d] shadow-sm active:scale-90 transition-transform cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[19px]">share</span>
              </button>
              <button
                aria-label="Favorite"
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#191c1d] shadow-sm active:scale-90 transition-transform cursor-pointer"
                id="favorite-btn"
                onClick={() => setIsFavorite(!isFavorite)}
                type="button"
              >
                <span
                  className={`material-symbols-outlined text-[20px] ${isFavorite ? 'text-[#ba1a1a]' : ''}`}
                  style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {isFavorite ? 'favorite' : 'favorite_border'}
                </span>
              </button>
            </div>

            {/* Live Status Chip in Hero */}
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#fea619] animate-pulse" />
              <span className="font-label-sm text-label-sm text-[#191c1d] font-semibold uppercase tracking-wider">
                Kitchen Live
              </span>
            </div>
          </div>

          {/* Restaurant Details & Story Card */}
          <div className="px-4 pt-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-headline-lg text-headline-lg text-[#191c1d]">Cactus Club Cafe & Kitchen</h2>
                <div className="flex items-center gap-1 bg-[#fea619]/20 px-2 py-1 rounded-lg shrink-0">
                  <span className="material-symbols-outlined text-[15px] text-[#855300] font-semibold" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="font-label-sm text-label-sm text-[#855300] font-bold">4.8</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-[#45464c]">Continental • Awadhi • Asian Fusion</p>
              <div className="flex items-center gap-3 font-body-sm text-body-sm text-[#76777d] mt-1">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#fea619]">schedule</span>
                  <span className="text-[#191c1d]">25-30 mins</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#76777d]">near_me</span>
                  <span>2.4 km</span>
                </div>
                <span>•</span>
                <span className="truncate">Bandra West</span>
              </div>
              <div className="flex items-center gap-1 font-label-sm text-label-sm text-[#76777d]">
                <span>Based on 1,240+ verified gastronomic reviews</span>
              </div>
            </div>

            {/* Exclusive Promo Capsule */}
            <div className="mt-4 bg-[#ffddb8]/50 rounded-2xl p-3 flex items-center gap-3 shadow-sm border border-[#ffddb8]">
              <div className="w-9 h-9 rounded-xl bg-[#fea619] flex items-center justify-center shrink-0 text-white">
                <span className="material-symbols-outlined text-[20px]">local_offer</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-label-sm text-label-sm text-[#2a1700] font-bold truncate">Flat ₹100 OFF above ₹499</p>
                  <span className="font-label-sm text-label-sm bg-white text-[#855300] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    CRAVEE100
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-[#653e00] truncate">Auto-applied at checkout step</p>
              </div>
            </div>
          </div>

          {/* Category Nav Tabs */}
          <div className="sticky top-28 z-30 bg-[#f8f9fa]/95 backdrop-blur-md pt-3 pb-2 mt-2 px-4 border-b border-[#e1e3e4]/60">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-pill shrink-0 px-4 py-2 rounded-full font-label-md text-label-md transition-all shadow-sm cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#000000] text-white'
                      : 'bg-white text-[#45464c] hover:text-[#191c1d] border border-[#e1e3e4]'
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Section */}
          <div className="px-4 flex flex-col gap-3 mt-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-headline-sm text-headline-sm text-[#191c1d]">Special Sushi & Asian</h3>
                <span className="font-label-sm text-label-sm text-[#76777d]">(4 items)</span>
              </div>
              <button className="text-[#855300] font-label-sm text-label-sm flex items-center gap-1 font-semibold" type="button">
                <span>Dietary Filters</span>
                <span className="material-symbols-outlined text-[16px]">tune</span>
              </button>
            </div>

            {/* Dish 1: Truffle Edamame Dumplings */}
            <div className="bg-white rounded-2xl p-4 shadow-sm flex items-start justify-between gap-3 border border-[#e1e3e4]">
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="w-3.5 h-3.5 rounded-sm bg-white flex items-center justify-center shadow-[inset_0_0_0_1.5px_#15803D] mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                </div>
                <h4 className="font-headline-sm text-headline-sm text-[#191c1d]">Truffle Edamame Dumplings</h4>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-currency-body text-currency-body text-[#191c1d]">₹420</span>
                  <span className="font-label-sm text-label-sm text-[#76777d]">Bestseller</span>
                </div>
                <p className="font-body-sm text-body-sm text-[#45464c] mt-1.5 line-clamp-2">
                  Silky wrappers stuffed with crushed edamame, white truffle oil drizzle, served with chili crisps.
                </p>
              </div>

              <div className="relative flex flex-col items-center shrink-0 w-24">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-sm bg-[#edeeef]">
                  <img
                    alt="Truffle Edamame Dumplings"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVMuSIaLu_oau2ALMoU11wJoweyXxATmCmItca9cmN-jysGz593GyVUO8bQiO02iKU-GoDldD-MjMrhicOwEE5lAT58Rwn-WNzwm51Lotp8O3F7BU5arq16FhWJoaW57dLduadnXgXLn9t7HsBokFOohHK3_3eVT5lym6W659au6wXI23D9Ol8SIJonJ_mgHzbmojLlJ3VhYCRBKRFhpRxeXXvraFOOmylVUpDsWXYFtGt8VmDOKaL"
                  />
                </div>
                <button
                  className="add-button w-20 h-8 -mt-2 bg-white text-[#191c1d] font-label-md text-label-md rounded-full shadow-md flex items-center justify-center gap-1 active:scale-95 transition-transform border border-[#e1e3e4] cursor-pointer"
                  onClick={() => handleAddDish(420)}
                  type="button"
                >
                  <span className="text-[#fea619] font-bold">+</span>
                  <span>ADD</span>
                </button>
              </div>
            </div>

            {/* Dish 2: Crispy Prawn Tempura Roll */}
            <div className="bg-white rounded-2xl p-4 shadow-sm flex items-start justify-between gap-3 border border-[#e1e3e4]">
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="w-3.5 h-3.5 rounded-sm bg-white flex items-center justify-center shadow-[inset_0_0_0_1.5px_#B91C1C] mb-1.5">
                  <div className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[5px] border-b-[#B91C1C]" />
                </div>
                <h4 className="font-headline-sm text-headline-sm text-[#191c1d]">Crispy Prawn Tempura Roll</h4>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-currency-body text-currency-body text-[#191c1d]">₹560</span>
                  <span className="font-label-sm text-label-sm text-[#855300] font-semibold">Chef's Choice</span>
                </div>
                <p className="font-body-sm text-body-sm text-[#45464c] mt-1.5 line-clamp-2">
                  8 pcs roll with avocado, spicy sriracha mayo, tobiko topping.
                </p>
              </div>

              <div className="relative flex flex-col items-center shrink-0 w-24">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-sm bg-[#edeeef]">
                  <img
                    alt="Crispy Prawn Tempura Roll"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJLApBRMwx10YDIcuFUDvOpw2KRfg1CHYAlJTXe6pZnY0vLlPdNh9M5JaFO3V8LaR5q6-_fTWU89K9HbCGyve1iUkl6DfBiEWVNAia9zaogSAgZXDJpgvT2epO-BHgYM74Aa3sblZ8W2_76Idf_H7OS7bGTsUURQNJ54Cw76a9lTBkEto5iHdM6dPdcQDu_ALfiuYkrjfFrTE2wFX9AtqR87s4uSl0c9JBBJ4T7Zp4wPQmwHrKwDHq"
                  />
                </div>
                <button
                  className="add-button w-20 h-8 -mt-2 bg-white text-[#191c1d] font-label-md text-label-md rounded-full shadow-md flex items-center justify-center gap-1 active:scale-95 transition-transform border border-[#e1e3e4] cursor-pointer"
                  onClick={() => handleAddDish(560)}
                  type="button"
                >
                  <span className="text-[#fea619] font-bold">+</span>
                  <span>ADD</span>
                </button>
              </div>
            </div>

            {/* Appetizers Section Heading */}
            <div className="pt-2 flex items-center gap-2">
              <h3 className="font-headline-sm text-headline-sm text-[#191c1d]">Appetizers & Tandoor</h3>
              <span className="font-label-sm text-label-sm text-[#76777d]">(2 items)</span>
            </div>

            {/* Dish 3: Slow-Cooked Awadhi Galouti */}
            <div className="bg-white rounded-2xl p-4 shadow-sm flex items-start justify-between gap-3 border border-[#e1e3e4]">
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="w-3.5 h-3.5 rounded-sm bg-white flex items-center justify-center shadow-[inset_0_0_0_1.5px_#B91C1C] mb-1.5">
                  <div className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[5px] border-b-[#B91C1C]" />
                </div>
                <h4 className="font-headline-sm text-headline-sm text-[#191c1d]">Slow-Cooked Awadhi Galouti</h4>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-currency-body text-currency-body text-[#191c1d]">₹480</span>
                </div>
                <p className="font-body-sm text-body-sm text-[#45464c] mt-1.5 line-clamp-2">
                  Melt-in-mouth smoked lamb patties, sheermal crisps, mint chutney.
                </p>
              </div>

              <div className="relative flex flex-col items-center shrink-0 w-24">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-sm bg-[#edeeef]">
                  <img
                    alt="Slow-Cooked Awadhi Galouti"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDkwNgBoV3YK1xxiz4fIWo1rKJjWoBolq0ntr7zbC-W0wzdts8rTqNlRNLYdRcq9owU2hmGk-bmpi42YgEW4mjvSIy6R541raEjrTFaw1RjRA8gFN5sk3rmj3_dMU05mUWnJl4Zl1Va58q7kLlaSsGw9Ge1YQqFaq1p8YSVQJvNCyrlqJyP3HrnhjFioS3kWANXY3gIq1GL4lwxgzvRsw_gnBmZYJv9tcthyGUZOMgJJDOEG0tY1_o"
                  />
                </div>
                <button
                  className="add-button w-20 h-8 -mt-2 bg-white text-[#191c1d] font-label-md text-label-md rounded-full shadow-md flex items-center justify-center gap-1 active:scale-95 transition-transform border border-[#e1e3e4] cursor-pointer"
                  onClick={() => handleAddDish(480)}
                  type="button"
                >
                  <span className="text-[#fea619] font-bold">+</span>
                  <span>ADD</span>
                </button>
              </div>
            </div>

            {/* Dish 4: Kaffir Lime Chicken Tikka */}
            <div className="bg-white rounded-2xl p-4 shadow-sm flex items-start justify-between gap-3 border border-[#e1e3e4]">
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="w-3.5 h-3.5 rounded-sm bg-white flex items-center justify-center shadow-[inset_0_0_0_1.5px_#B91C1C] mb-1.5">
                  <div className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[5px] border-b-[#B91C1C]" />
                </div>
                <h4 className="font-headline-sm text-headline-sm text-[#191c1d]">Kaffir Lime Chicken Tikka</h4>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-currency-body text-currency-body text-[#191c1d]">₹390</span>
                </div>
                <p className="font-body-sm text-body-sm text-[#45464c] mt-1.5 line-clamp-2">
                  Char-grilled chicken morsels with zest of fresh kaffir lime.
                </p>
              </div>

              <div className="relative flex flex-col items-center shrink-0 w-24">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-sm bg-[#edeeef]">
                  <img
                    alt="Kaffir Lime Chicken Tikka"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3M8UVVGruCV9zc5gtesMiu_AIzIGYugwi4anIMuhzsN7vq7paWmy4yftb0o6EFZuAAQuvPMSENJ-h1QLCSdl7CMba8n6TL1OkZ-CCXINjOKdYMM3U2mEkTO9blSFmp8tOHr3oVkbDWgAEmp_gsQATpHXleOz6F5Jt0m1aLJSHq8qae9JeYAMVDQxsVIxSWG61YbxLOqM1OmvkiMlO99Jn9TtuuMq3Yp30EiDpoAmfGsks7mCk-hQ3"
                  />
                </div>
                <button
                  className="add-button w-20 h-8 -mt-2 bg-white text-[#191c1d] font-label-md text-label-md rounded-full shadow-md flex items-center justify-center gap-1 active:scale-95 transition-transform border border-[#e1e3e4] cursor-pointer"
                  onClick={() => handleAddDish(390)}
                  type="button"
                >
                  <span className="text-[#fea619] font-bold">+</span>
                  <span>ADD</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sleek Floating Cart Bar (matches element id and button text in navigation spec) */}
        <div className="fixed bottom-6 left-4 right-4 z-40" id="cart-bar">
          <div className="w-full h-14 bg-[#000000] text-white rounded-full px-4 flex items-center justify-between shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#fea619] text-[#684000] flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0">
                <span id="cart-count">{cartItemsCount}</span>
              </div>
              <div className="flex flex-col truncate">
                <span className="font-label-md text-label-md tracking-tight truncate">View Cart</span>
                <span className="font-currency-body text-currency-body text-[#ffddb8]" id="cart-total">
                  ₹{cartTotal}
                </span>
              </div>
            </div>
            <button
              className="flex items-center gap-1 bg-white text-[#191c1d] px-4 py-2 rounded-full font-label-md text-label-md font-semibold active:scale-95 transition-transform shrink-0 shadow-sm cursor-pointer"
              onClick={() => onNavigate('11. Restaurant Menu with Cart', 'push')}
              type="button"
            >
              <span>Proceed</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
