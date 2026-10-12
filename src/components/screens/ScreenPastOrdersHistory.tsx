import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';
import { BottomNav } from '../common/BottomNav';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const ScreenPastOrdersHistory: React.FC<Props> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'delivered' | 'cancelled'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const orders = [
    {
      id: 'CRV-8942',
      restaurant: 'Cactus Club Cafe & Kitchen',
      locality: 'Indiranagar • 8:12 PM Today',
      status: 'delivered',
      statusText: 'Delivered',
      items: ['1× Truffle Tagliolini with Wild Mushrooms', '1× Crisp Garlic Focaccia (2 pcs)'],
      payment: 'PhonePe',
      total: '1,724',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK-TX7SNDZ-FNHpcGUkDqLznyB_mSWX87Ol4V6Lm47HCikpbIJQuQzh1n059OdrEt7kZQ10GK1X60H9gqI8_bz_yf_Hja3WCPq2PaDjyOmxSkPsO92lqRVxAD6hgf0CdCZPwQYNHfJMHaX9m8in0uC-vFACHoDGMk3ONsjlsI93xWDMSXrm9cVjAIxF8e3n9Kxk99vPxiFy9qmzTuT5L0vlNX9pwVVhRYvQX1SvzzMrMPFp3LbDzKn',
      rating: 5,
    },
    {
      id: 'CRV-8610',
      restaurant: 'Osteria Del Sole',
      locality: 'Koramangala • 14 Oct, 1:45 PM',
      status: 'delivered',
      statusText: 'Delivered',
      items: ['1× Black Truffle & Burrata Ravioli', '1× Tiramisu Classico'],
      payment: 'Google Pay',
      total: '1,120',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2-oiVgctAOf4pVkhspTy1td1UzgzHws4lEttQJVga69g00qk2GXpaeAzeAVW1CYJ5J2yjYHDlkZWbypb-kWh_Vr1LQjWb8jOjeFk7gK6d_5QlfuYItRxZi4kl3EdaQLox2JB8I4Xi86eRxv5jyvIWhHf4Pg85Jl0o2damvHLVLy4--XLwjDXFwv048WaxWvfPWHh_6ZO4aELcsiCi2Xf4Z6JsfwJJb2mNjgSCrNFjatFGfV7jGGCB',
    },
    {
      id: 'CRV-8204',
      restaurant: 'Bella Italia Trattoria',
      locality: 'Indiranagar • 8 Oct, 9:20 PM',
      status: 'delivered',
      statusText: 'Delivered',
      items: ['2× Creamy White Truffle Penne'],
      payment: 'UPI',
      total: '980',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtFhybuSoYvmxf2xjv7fPdvlzFjXd-GmbCnnZNpCVlUA9dTbGq01FV0oa-EE7YEKIx2e1aYpMuwDrnzNGgvAEeu6WsqNw2Mz3Quxibj_LWLo7eeKA32Qw6UgNvz0oyLy-e-qjLh-vgRl6ksldDuzJjShBlLfiIW9oSj4lHy732z8fZOW0QQ4qICPDa6o2epQ3NgB8vHDs2bX2TxgFbBlD5N7sPLeRV4hoRzzGVHcxPUY455wEJF0UC',
    },
    {
      id: 'CRV-7911',
      restaurant: 'The Artisan Bistro',
      locality: 'Lavelle Road • 28 Sep',
      status: 'cancelled',
      statusText: 'Cancelled',
      items: ['1× Truffle Mac & Aged Cheddar Gratin'],
      payment: 'Refund of ₹650 completed',
      total: '650',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVLJQthYYuSFTg0JJwW6oGClkZ0QnntYxGXImnd01fqvGsruOSxh4Ja5OaoAvo8kJmxXFGWDv4EYavCYRoYRi3wQ_bt0jPEy5ybw86mr4CjfvZO8VmCu33Gu7U3EOwx1au-STSbNOh29y3g7I0euxkERnEthseqOk4REKYf-weWP_HJ7BopEhxGvoZoAwXrgjX5KYyQEo0Zk4JjCQ1_NTw2Ee1R6H6jheQkXDqmhQ_EKLy4Uf4sPZ7',
    },
  ];

  const filteredOrders = orders.filter((o) => {
    const matchesTab = activeTab === 'all' || o.status === activeTab;
    const matchesQuery =
      !searchQuery ||
      o.restaurant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesQuery;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        title="Past Orders History"
        onBack={() => onNavigate('8. Home', 'push_back')}
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full pt-28 bg-[#f8f9fa] pb-28">
        <div className="flex flex-col w-full px-4 pb-8">
          {/* Search & Filter Ribbon */}
          <div className="flex items-center gap-2.5 pt-1 pb-2">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#76777d] text-[20px]">
                search
              </span>
              <input
                className="w-full h-11 pl-10 pr-4 bg-[#f3f4f5] rounded-xl font-body-sm text-body-sm text-[#191c1d] placeholder:text-[#76777d] outline-none transition-all shadow-sm focus:bg-white border border-[#e1e3e4]"
                id="orderSearch"
                placeholder="Search dish, restaurant or ID..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              aria-label="Filter Orders"
              className="h-11 w-11 flex items-center justify-center bg-[#f3f4f5] active:bg-[#edeeef] rounded-xl text-[#191c1d] shrink-0 shadow-sm border border-[#e1e3e4] cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
          </div>

          {/* Interactive Segmented Tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#edeeef] rounded-full my-1 shadow-inner" id="statusTabs">
            <button
              className={`tab-btn flex-1 py-2 px-3 rounded-full font-label-md text-label-md text-center transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-[#191c1d] shadow-sm font-semibold'
                  : 'text-[#45464c] hover:text-[#191c1d]'
              }`}
              onClick={() => setActiveTab('all')}
              type="button"
            >
              All Orders <span className="ml-1 opacity-70 font-normal">(4)</span>
            </button>
            <button
              className={`tab-btn flex-1 py-2 px-3 rounded-full font-label-md text-label-md text-center transition-all cursor-pointer ${
                activeTab === 'delivered'
                  ? 'bg-white text-[#191c1d] shadow-sm font-semibold'
                  : 'text-[#45464c] hover:text-[#191c1d]'
              }`}
              onClick={() => setActiveTab('delivered')}
              type="button"
            >
              Delivered
            </button>
            <button
              className={`tab-btn flex-1 py-2 px-3 rounded-full font-label-md text-label-md text-center transition-all cursor-pointer ${
                activeTab === 'cancelled'
                  ? 'bg-white text-[#191c1d] shadow-sm font-semibold'
                  : 'text-[#45464c] hover:text-[#191c1d]'
              }`}
              onClick={() => setActiveTab('cancelled')}
              type="button"
            >
              Cancelled
            </button>
          </div>

          {/* Orders Timeline Stream */}
          <div className="flex flex-col gap-3 mt-2" id="ordersContainer">
            {filteredOrders.map((o) => (
              <article
                key={o.id}
                className="order-card bg-white rounded-2xl p-4 shadow-sm transition-all flex flex-col gap-2.5 border border-[#e1e3e4]"
                data-status={o.status}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-[#edeeef] overflow-hidden shrink-0">
                      <img className="w-full h-full object-cover" alt={o.restaurant} src={o.image} />
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-headline-sm text-headline-sm text-[#191c1d] truncate font-bold">
                        {o.restaurant}
                      </h2>
                      <p className="font-body-sm text-body-sm text-[#45464c] truncate">{o.locality}</p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold shrink-0 ${
                      o.status === 'delivered'
                        ? 'bg-[#f3f4f5] text-[#855300]'
                        : 'bg-[#ffdad6] text-[#ba1a1a]'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        o.status === 'delivered' ? 'bg-[#fea619]' : 'bg-[#ba1a1a]'
                      }`}
                    />
                    {o.statusText}
                  </span>
                </div>

                {/* Itemized summary */}
                <div className="bg-[#f3f4f5] rounded-xl p-3 flex flex-col gap-1 border border-[#e1e3e4]">
                  {o.items.map((item, idx) => (
                    <div key={idx} className="flex items-baseline justify-between font-body-sm text-body-sm text-[#191c1d]">
                      <div className="flex items-center gap-2 truncate pr-2">
                        <span className="w-2 h-2 rounded-full bg-[#855300] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Payment row */}
                <div className="flex items-center justify-between pt-1 font-body-sm text-body-sm">
                  <div className="flex items-center gap-1.5 text-[#45464c]">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#76777d]">#{o.id}</span>
                    <span>•</span>
                    <span className="text-[#191c1d] font-medium">{o.payment}</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#45464c] font-label-sm text-label-sm">Total:</span>
                    <span
                      className={`font-currency-body text-currency-body ${
                        o.status === 'cancelled' ? 'line-through text-[#76777d]' : 'text-[#191c1d]'
                      }`}
                    >
                      ₹{o.total}
                    </span>
                  </div>
                </div>

                {/* Rating banner if present */}
                {o.rating && (
                  <div className="flex items-center justify-between bg-[#f3f4f5] px-3 py-2 rounded-xl border border-[#e1e3e4]">
                    <span className="font-label-sm text-label-sm text-[#45464c]">Your rating:</span>
                    <div className="flex items-center gap-0.5 text-[#fea619]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex items-center gap-2 pt-1">
                  {o.status === 'delivered' ? (
                    <>
                      <button
                        className="flex-1 h-11 bg-[#fea619] text-[#684000] rounded-full font-label-md text-label-md font-bold flex items-center justify-center gap-1 shadow-sm transition-transform active:scale-[0.98] cursor-pointer"
                        onClick={() => onNavigate('11. Restaurant Menu with Cart', 'push')}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">replay</span>
                        <span>Reorder</span>
                      </button>
                      <button
                        className="h-11 px-5 bg-[#f3f4f5] hover:bg-[#edeeef] text-[#191c1d] rounded-full font-label-md text-label-md font-semibold flex items-center justify-center transition-transform active:scale-[0.98] border border-[#e1e3e4] cursor-pointer"
                        onClick={() => onNavigate('Order Receipt', 'push')}
                        type="button"
                      >
                        Receipt
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="flex-1 h-11 bg-[#f3f4f5] text-[#191c1d] rounded-full font-label-md text-label-md font-semibold transition-transform active:scale-[0.98] border border-[#e1e3e4] cursor-pointer"
                        onClick={() => onNavigate('Order Receipt', 'push')}
                        type="button"
                      >
                        Order Details
                      </button>
                      <button
                        className="h-11 px-4 bg-[#f3f4f5] text-[#ba1a1a] rounded-full font-label-md text-label-md font-semibold flex items-center justify-center gap-1 transition-transform active:scale-[0.98] border border-[#e1e3e4] cursor-pointer"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">info</span>
                        <span>Help on Refund</span>
                      </button>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Statement footer */}
          <div className="flex flex-col items-center justify-center text-center mt-6 mb-2 gap-1">
            <div className="w-8 h-8 rounded-full bg-[#f3f4f5] flex items-center justify-center text-[#76777d] mb-1">
              <span className="material-symbols-outlined text-[18px]">receipt_long</span>
            </div>
            <p className="font-label-md text-label-md text-[#45464c]">Looking for older transactions?</p>
            <button className="font-label-sm text-label-sm text-[#855300] font-semibold hover:underline cursor-pointer" type="button">
              Download Annual Statement (PDF)
            </button>
          </div>
        </div>
      </main>

      <BottomNav currentScreen="Past Orders History" onNavigate={onNavigate} />
    </div>
  );
};
