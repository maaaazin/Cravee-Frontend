import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const ScreenSavedPaymentMethods: React.FC<Props> = ({ onNavigate }) => {
  const [selectedUpi, setSelectedUpi] = useState('gpay');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 1800);
  };

  const handleSelectUpi = (name: string, label: string) => {
    setSelectedUpi(name);
    showToast(`${label} set as primary`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        title="Saved Payment Methods"
        onBack={() => onNavigate('17. My Account', 'push_back')}
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full pt-28 bg-[#f8f9fa] pb-safe">
        <div className="flex flex-col w-full px-4 pb-12 gap-5">
          {/* Spend Smarter Perk Pill */}
          <div className="w-full bg-[#f3f4f5] rounded-2xl p-4 flex items-center justify-between shadow-sm border border-[#e1e3e4]">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#ffddb8] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#855300] text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  bolt
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-lg text-label-lg text-[#191c1d] truncate font-bold">
                  Instant 1-Click Ordering
                </span>
                <span className="font-body-sm text-body-sm text-[#45464c]">
                  Default method used for zero-wait checkout
                </span>
              </div>
            </div>
            <span className="font-label-sm text-label-sm bg-[#fea619]/20 text-[#855300] px-2.5 py-1 rounded-full font-bold shrink-0">
              ACTIVE
            </span>
          </div>

          {/* 1. UPI & Quick Pay */}
          <section className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#855300] text-[20px]">account_balance_wallet</span>
                <h2 className="font-headline-sm text-headline-sm text-[#191c1d] font-bold">UPI & Quick Pay</h2>
              </div>
              <span className="font-label-sm text-label-sm text-[#45464c] uppercase tracking-wider">3 Saved</span>
            </div>

            <div className="flex flex-col gap-2.5">
              {/* Google Pay Card */}
              <div
                className={`payment-card relative bg-white rounded-2xl p-4 shadow-sm transition-all duration-200 cursor-pointer border ${
                  selectedUpi === 'gpay' ? 'border-[#000000] ring-1 ring-[#000000]' : 'border-[#e1e3e4]'
                }`}
                onClick={() => handleSelectUpi('gpay', 'Google Pay')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-[#f3f4f5] flex items-center justify-center shrink-0 border border-[#e1e3e4]">
                      <span className="material-symbols-outlined text-[#191c1d] text-[24px]">contactless</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-label-lg text-label-lg text-[#191c1d] font-bold">Google Pay UPI</span>
                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-[#ffddb8] text-[#2a1700] font-label-sm text-[10px] font-bold">
                          <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                            verified
                          </span>{' '}
                          Verified
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-[#45464c] truncate">arjun.sharma@okaxis</span>
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      selectedUpi === 'gpay' ? 'bg-[#000000] text-white' : 'bg-[#e1e3e4]'
                    }`}
                  >
                    {selectedUpi === 'gpay' && <span className="material-symbols-outlined text-[14px] font-bold">check</span>}
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-[#f3f4f5] flex items-center justify-between text-[#45464c]">
                  <span className="font-label-sm text-label-sm text-[#855300] flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#855300]" /> Primary payment option
                  </span>
                  <span className="material-symbols-outlined text-[18px]">more_horiz</span>
                </div>
              </div>

              {/* PhonePe Card */}
              <div
                className={`payment-card relative bg-white rounded-2xl p-4 shadow-sm transition-all duration-200 cursor-pointer border ${
                  selectedUpi === 'phonepe' ? 'border-[#000000] ring-1 ring-[#000000]' : 'border-[#e1e3e4]'
                }`}
                onClick={() => handleSelectUpi('phonepe', 'PhonePe')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-[#5f259f] flex items-center justify-center shrink-0 text-white">
                      <span className="material-symbols-outlined text-[24px]">electric_bolt</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-label-lg text-label-lg text-[#191c1d] font-bold">PhonePe UPI</span>
                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-[#e7e8e9] text-[#45464c] font-label-sm text-[10px]">
                          Verified
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-[#45464c] truncate">9876543210@ybl</span>
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      selectedUpi === 'phonepe' ? 'bg-[#000000] text-white' : 'bg-[#e1e3e4]'
                    }`}
                  >
                    {selectedUpi === 'phonepe' && <span className="material-symbols-outlined text-[14px] font-bold">check</span>}
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-[#f3f4f5] flex items-center justify-between text-[#45464c]">
                  <span className="font-label-sm text-label-sm text-[#45464c]">Tap to set as primary</span>
                  <span className="material-symbols-outlined text-[18px]">more_horiz</span>
                </div>
              </div>

              {/* Link New UPI */}
              <button
                className="w-full bg-[#f3f4f5] hover:bg-[#edeeef] transition-colors py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-[#191c1d] border border-[#e1e3e4] cursor-pointer"
                onClick={() => onNavigate('14. Select Payment Method', 'push')}
                type="button"
              >
                <span className="material-symbols-outlined text-[#855300] text-[20px]">add_circle</span>
                <span className="font-label-lg text-label-lg font-semibold">Link New UPI ID</span>
              </button>
            </div>
          </section>

          {/* 2. Saved Cards */}
          <section className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#855300] text-[20px]">credit_card</span>
                <h2 className="font-headline-sm text-headline-sm text-[#191c1d] font-bold">Saved Cards</h2>
              </div>
              <span className="font-label-sm text-label-sm text-[#45464c] uppercase tracking-wider">2 Cards</span>
            </div>

            <div className="flex flex-col gap-3">
              {/* Card 1: HDFC Regalia */}
              <div className="relative w-full rounded-2xl bg-gradient-to-br from-[#141b2b] via-[#2e3132] to-[#000000] p-5 text-white shadow-md overflow-hidden">
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg tracking-wider text-[#ffddb8] font-bold">HDFC BANK</span>
                    <span className="font-label-sm text-label-sm text-[#7d8497]">Regalia Gold • Visa Credit</span>
                  </div>
                  <span className="font-label-sm text-label-sm bg-[#fea619] text-[#684000] px-2 py-0.5 rounded-full font-bold">
                    DEFAULT
                  </span>
                </div>

                <div className="relative z-10 my-4 flex items-center justify-between">
                  <div className="w-8 h-6 rounded bg-[#d1c79d]/60 shadow-inner flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#201c02] text-[16px]">memory</span>
                  </div>
                  <span className="material-symbols-outlined text-[#7d8497] text-[20px]">wifi</span>
                </div>

                <div className="relative z-10 flex items-center gap-3 font-currency-display text-currency-display tracking-widest text-white">
                  <span>••••</span>
                  <span>••••</span>
                  <span>••••</span>
                  <span>4829</span>
                </div>

                <div className="relative z-10 mt-3 flex items-end justify-between pt-1">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-[#7d8497] uppercase text-[10px]">Cardholder</span>
                    <span className="font-label-md text-label-md tracking-wider">ARJUN SHARMA</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="font-label-sm text-label-sm text-[#7d8497] uppercase text-[10px]">Expires</span>
                    <span className="font-label-md text-label-md tracking-wider">08/28</span>
                  </div>
                </div>
              </div>

              {/* Add New Card */}
              <button
                className="w-full bg-white hover:bg-[#f3f4f5] transition-colors py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-[#191c1d] shadow-sm border border-[#e1e3e4] cursor-pointer"
                onClick={() => onNavigate('14. Select Payment Method', 'push')}
                type="button"
              >
                <span className="material-symbols-outlined text-[#855300] text-[20px]">add_card</span>
                <span className="font-label-lg text-label-lg font-semibold">Add New Debit / Credit Card</span>
              </button>
            </div>
          </section>

          {/* 3. Digital Wallets */}
          <section className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#855300] text-[20px]">account_balance</span>
                <h2 className="font-headline-sm text-headline-sm text-[#191c1d] font-bold">Digital Wallets</h2>
              </div>
              <span className="font-label-sm text-label-sm text-[#45464c]">Instant refund eligible</span>
            </div>

            <div className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm border border-[#e1e3e4]">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-[#f3f4f5] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#855300] text-[24px]">shopping_bag</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-label-lg text-label-lg text-[#191c1d] truncate font-bold">Amazon Pay</span>
                    <span className="font-label-sm text-label-sm bg-[#edeeef] px-2 py-0.5 rounded-full text-[#45464c] font-medium">
                      Linked
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-[#45464c]">
                    Available: <strong className="text-[#191c1d]">₹450</strong>
                  </span>
                </div>
              </div>
              <button
                className="px-3 py-1.5 rounded-lg bg-[#e7e8e9] text-[#191c1d] font-label-sm text-label-sm font-semibold active:scale-95 cursor-pointer"
                onClick={() => showToast('Wallet topped up with ₹500')}
                type="button"
              >
                Top Up
              </button>
            </div>
          </section>

          {/* 4. Bottom Security Banner */}
          <div className="w-full bg-[#f3f4f5] rounded-xl p-4 flex items-center gap-3 shadow-sm border border-[#e1e3e4]">
            <div className="w-10 h-10 rounded-full bg-[#e1e3e4] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#45464c] text-[22px]">verified_user</span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1">
                <span className="font-label-md text-label-md text-[#191c1d] font-semibold">
                  100% RBI Compliant & Tokenized
                </span>
                <span className="material-symbols-outlined text-[#855300] text-[16px]">lock</span>
              </div>
              <p className="font-body-sm text-body-sm text-[#45464c]">
                Your card credentials are encrypted with bank-grade AES-256 tokens. Cravee never stores actual card numbers.
              </p>
            </div>
          </div>

          {/* 5. Main Action */}
          <div className="pt-2">
            <button
              className="w-full h-[52px] bg-[#000000] text-white rounded-full font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all cursor-pointer font-bold"
              onClick={() => onNavigate('14. Select Payment Method', 'push')}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span>Add New Payment Option</span>
            </button>
          </div>
        </div>

        {/* Toast Notification */}
        {toastMsg && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#000000] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all">
            <span className="material-symbols-outlined text-[#fea619] text-[18px]">check_circle</span>
            <span className="font-label-md text-label-md">{toastMsg}</span>
          </div>
        )}
      </main>
    </div>
  );
};
