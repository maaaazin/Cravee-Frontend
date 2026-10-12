import React, { useEffect, useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { StatusBar } from '../common/StatusBar';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const Screen15_PaymentConfirmed: React.FC<Props> = ({ onNavigate }) => {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; top: number; color: string; size: number }>>([]);

  useEffect(() => {
    const colors = ['#fea619', '#855300', '#d1c79d', '#141b2b'];
    const pieces = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: Math.random() * 80 + 10,
      top: Math.random() * 60 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.floor(Math.random() * 6) + 4,
    }));
    setConfetti(pieces);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <StatusBar />

      <main className="flex-1 flex flex-col relative w-full pt-12 pb-safe bg-[#f8f9fa]">
        <div className="flex flex-col w-full px-4 pb-8">
          {/* Confetti Container */}
          <div className="relative w-full flex flex-col items-center pt-2 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-0">
              {confetti.map((c) => (
                <span
                  key={c.id}
                  className="absolute rounded-full animate-pulse"
                  style={{
                    left: `${c.left}%`,
                    top: `${c.top}%`,
                    backgroundColor: c.color,
                    width: `${c.size}px`,
                    height: `${c.size}px`,
                  }}
                />
              ))}
            </div>

            {/* Center Success Graphic */}
            <div className="relative z-10 flex flex-col items-center text-center mt-2 mb-4">
              <div className="relative flex items-center justify-center mb-3">
                <div className="absolute w-24 h-24 rounded-full bg-[#fea619]/20 blur-xl" />
                <div className="relative w-20 h-20 rounded-full bg-[#fea619] flex items-center justify-center shadow-lg transition-transform active:scale-95 duration-200">
                  <svg
                    className="w-10 h-10 text-[#684000]"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>

              {/* Typography Badges & Headers */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e7e8e9] text-[#45464c] font-label-sm text-label-sm uppercase tracking-wider mb-1">
                <span className="w-2 h-2 rounded-full bg-[#855300]" />
                <span>Payment Done!</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-[#191c1d] tracking-tight font-extrabold">
                Order Confirmed!
              </h1>
              <p className="font-body-sm text-body-sm text-[#45464c] max-w-xs mt-1">
                Your culinary order has reached the kitchen. Chef has started prepping your dishes with the finest ingredients.
              </p>
            </div>

            {/* Order Status Bento Card */}
            <div className="w-full relative z-10 bg-white rounded-2xl p-4 shadow-sm mb-3 border border-[#e1e3e4]">
              {/* Restaurant Header Info */}
              <div className="flex items-start gap-3 pb-2">
                <div className="w-12 h-12 rounded-xl bg-[#edeeef] overflow-hidden flex-shrink-0 relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="Cactus Club Cafe Kitchen"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmHfrgO7kO9KKTInTU6QQMX3hg6gcoM_HaFKdl0mCcOj0JWwTPHsXqP2A_l-r4FsqIeCcp0So5DgdWtPdI0ZhszqOidvobZ9FxWashGGOaWLcc-hEH2ZfW65BVhx5qaubZ8WyUXBNwP2_LWLpG9rIHuss0yT6XIcUQPtfhY4dkxlpwjln0WncbNocRuLky6BNT3E1RmyFtXAhuCm4e5V2_-Zyq2dCLC8BWy-jfUnttamsDNTSB8fn7"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h2 className="font-headline-sm text-headline-sm text-[#191c1d] truncate">
                      Cactus Club Cafe & Kitchen
                    </h2>
                    <span className="font-label-md text-label-md text-[#855300] bg-[#ffddb8]/50 px-2 py-0.5 rounded-full flex-shrink-0 font-bold">
                      #CRV-8942
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-[#45464c] truncate">
                    Fine Regional & Contemporary Continental
                  </p>
                </div>
              </div>

              {/* Live ETA Highlight Module */}
              <div className="mt-2 bg-[#f3f4f5] rounded-xl p-3 flex items-center justify-between border border-[#e1e3e4]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#fea619]/20 flex items-center justify-center text-[#855300]">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      schedule
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-[#45464c]">Estimated Delivery</span>
                    <span className="font-label-lg text-label-lg text-[#191c1d]">
                      25-30 mins <span className="font-body-sm text-body-sm text-[#45464c] font-normal">(By 8:45 PM)</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fea619] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#855300]" />
                  </span>
                </div>
              </div>

              {/* Detailed Breakdown List */}
              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-2.5 bg-[#f8f9fa] rounded-xl p-2.5 border border-[#e1e3e4]">
                  <div className="w-8 h-8 rounded-full bg-[#e7e8e9] flex items-center justify-center text-[#191c1d] flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-label-sm text-label-sm text-[#45464c]">Delivering to</div>
                    <div className="font-label-lg text-label-lg text-[#191c1d] truncate">402 Sea Pearl, Bandra West</div>
                    <div className="font-body-sm text-body-sm text-[#45464c] truncate">Mumbai, Maharashtra • Home</div>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-[#f8f9fa] rounded-xl px-3 py-2 border border-[#e1e3e4]">
                  <div className="flex items-center gap-1.5 text-[#45464c]">
                    <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
                    <span className="font-body-sm text-body-sm">Total Paid</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-lg text-label-lg text-[#191c1d] font-bold">₹1,724</span>
                    <span className="font-label-sm text-label-sm text-[#45464c] bg-[#e7e8e9] px-2 py-0.5 rounded-full font-medium">
                      Google Pay
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chef / Kitchen Prep Visual Snip */}
            <div className="w-full relative z-10 bg-[#f3f4f5] rounded-2xl p-3 flex items-center gap-3 mb-5 border border-[#e1e3e4]">
              <div className="w-10 h-10 rounded-xl bg-[#edeeef] overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  alt="Executive Chef"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPiofWKsXN-Y4Zg86whH4IUZSEs4IUY0Sy4YSzzEahkaeMlD5mhv3UT0HWOZtom8ZQzHUE8Sa5hvXYnJKV4K4cV5Fa6jazteBooX051l8mbDsZ4zTyLLVYDjW6ztN-EUrm5FXcIb-8dBvNAz0I0eJZKZmMFh4eUv6ULZXHvs9nyYn2GYOZTnrgKQMM5t6kUfWEJ0wa_ABBEAwBE1PqdB3MsG6Gy00Eb_FhAOGNoWc8UAJH8eDtJQpP"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-label-sm text-label-sm text-[#855300] font-semibold">Kitchen Alert</span>
                  <span className="material-symbols-outlined text-[14px] text-[#855300]">skillet</span>
                </div>
                <p className="font-body-sm text-body-sm text-[#45464c] truncate">
                  Executive Chef Arjun is firing your order now.
                </p>
              </div>
              <div className="text-right flex-shrink-0 pr-1">
                <span className="font-label-sm text-label-sm text-[#191c1d] bg-[#e1e3e4] px-2 py-1 rounded-lg font-bold">
                  Step 1/3
                </span>
              </div>
            </div>

            {/* Action Buttons Block */}
            <div className="w-full relative z-10 flex flex-col gap-2.5 mt-auto">
              <button
                className="w-full h-[52px] bg-[#000000] text-white rounded-full flex items-center justify-center gap-2 font-label-lg text-label-lg shadow-md transition-all active:scale-[0.98] cursor-pointer"
                onClick={() => onNavigate('Track Order', 'push')}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  near_me
                </span>
                <span>Track Order</span>
              </button>

              <button
                className="w-full h-[48px] bg-[#f3f4f5] hover:bg-[#edeeef] text-[#191c1d] rounded-full flex items-center justify-center font-label-lg text-label-lg transition-all active:scale-[0.98] border border-[#e1e3e4] cursor-pointer"
                onClick={() => onNavigate('8. Home', 'push')}
                type="button"
              >
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
