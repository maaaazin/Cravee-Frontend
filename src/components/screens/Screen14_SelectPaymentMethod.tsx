import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const Screen14_SelectPaymentMethod: React.FC<Props> = ({ onNavigate }) => {
  const [selectedMethod, setSelectedMethod] = useState<'gpay' | 'phonepe' | 'paytm' | 'card_hdfc' | 'netbanking' | 'cod'>('gpay');
  const [useWallet, setUseWallet] = useState(false);
  const baseAmount = 1724;
  const walletAmount = 450;
  const payable = useWallet ? baseAmount - walletAmount : baseAmount;

  const handlePay = () => {
    onNavigate('15. Payment Confirmed', 'push');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        title="Checkout"
        onBack={() => onNavigate('13. Checkout', 'push_back')}
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full pt-28 bg-[#f8f9fa] pb-safe">
        <div className="flex flex-col w-full pb-32">
          {/* Order Payable Header Box */}
          <div className="px-4 pt-1 pb-3">
            <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between border border-[#e1e3e4]">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-label-sm text-label-sm text-[#45464c] uppercase tracking-wider font-semibold">
                    Amount to Pay
                  </span>
                  <span className="bg-[#fea619]/20 text-[#855300] font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">
                    Secured
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-currency-display text-currency-display text-[#191c1d] font-bold">
                    ₹{payable}
                  </span>
                  <span className="font-body-sm text-body-sm text-[#45464c]">incl. all taxes</span>
                </div>
                <span className="font-label-sm text-label-sm text-[#45464c] mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px] text-[#76777d]">receipt_long</span>
                  Order #CRV-8942
                </span>
              </div>
              <div className="w-14 h-14 rounded-full bg-[#f3f4f5] flex flex-col items-center justify-center text-center p-1 border border-[#e1e3e4]">
                <span className="material-symbols-outlined text-[20px] text-[#855300]">timer</span>
                <span className="font-label-sm text-label-sm text-[#191c1d] font-bold">13:03</span>
              </div>
            </div>
          </div>

          {/* Wallet Deduction Banner */}
          <div className="px-4 mb-3">
            <div className="bg-[#ffddb8]/40 rounded-xl p-4 flex items-center justify-between shadow-sm border border-[#ffddb8]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fea619] flex items-center justify-center text-[#684000] shadow-xs">
                  <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    account_balance_wallet
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-lg text-label-lg text-[#191c1d] font-semibold">Cravee Cash</span>
                    <span className="bg-[#855300] text-white font-label-sm text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                      Fast
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-[#45464c]">
                    Available balance: <strong className="text-[#191c1d] font-semibold">₹450</strong>
                  </span>
                </div>
              </div>
              <label className="relative flex items-center cursor-pointer select-none">
                <input
                  checked={useWallet}
                  className="sr-only peer"
                  id="wallet-checkbox"
                  onChange={(e) => setUseWallet(e.target.checked)}
                  type="checkbox"
                />
                <div className="w-12 h-7 bg-[#e1e3e4] rounded-full peer peer-checked:bg-[#fea619] transition-colors duration-200" />
                <div className="w-5 h-5 bg-white rounded-full absolute left-1 top-1 transition-transform duration-200 peer-checked:translate-x-5 shadow-sm flex items-center justify-center">
                  {useWallet && <span className="material-symbols-outlined text-[14px] text-[#684000] font-bold">check</span>}
                </div>
              </label>
            </div>
          </div>

          {/* SECTION 1: Instant UPI & Wallets */}
          <div className="px-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <span className="font-label-lg text-label-lg text-[#191c1d] font-semibold">Instant UPI & Wallets</span>
                <span className="bg-[#ffddb8] text-[#2a1700] font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold">
                  Fastest
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-[#855300] font-medium">Zero Surcharge</span>
            </div>

            <div className="space-y-2">
              {/* Google Pay UPI */}
              <label
                className={`payment-card relative flex items-center justify-between p-4 rounded-xl bg-white shadow-sm cursor-pointer active:scale-[0.99] transition-all border ${
                  selectedMethod === 'gpay' ? 'border-[#000000] ring-1 ring-[#000000]' : 'border-[#e1e3e4]'
                }`}
              >
                <input
                  checked={selectedMethod === 'gpay'}
                  className="sr-only"
                  name="payment_method"
                  onChange={() => setSelectedMethod('gpay')}
                  type="radio"
                  value="gpay"
                />
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#f3f4f5] flex items-center justify-center p-2 border border-[#e1e3e4]">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 48 48">
                      <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" fill="#4285F4" />
                      <path d="M6.3 14.7l7 5.1C15.1 16.2 19.2 13.5 24 13.5c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.7 7.3 6.3 14.7z" fill="#34A853" />
                      <path d="M24 46c5.9 0 11.2-2.2 15.1-5.9l-7-5.8c-2.2 1.5-5 2.5-8.1 2.5-6 0-10.7-3.9-12.4-9.3l-7 5.4C8 40.5 15.4 46 24 46z" fill="#FBBC05" />
                      <path d="M44.5 20H24v8.5h11.8c-.8 2.3-2.1 4.3-3.9 5.8l7 5.8C42.8 36.4 45 30.8 45 24c0-1.3-.2-2.7-.5-4z" fill="#EA4335" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-headline-sm text-headline-sm text-[#191c1d]">Google Pay UPI</span>
                      <span className="bg-[#edeeef] text-[#45464c] font-label-sm text-[10px] px-1.5 py-0.5 rounded font-bold">
                        Default
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-[#45464c]">maazin@okhdfcbank</span>
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    selectedMethod === 'gpay' ? 'bg-[#000000] text-white' : 'bg-[#e1e3e4]'
                  }`}
                >
                  {selectedMethod === 'gpay' && <span className="material-symbols-outlined text-[16px] font-bold">check</span>}
                </div>
              </label>

              {/* PhonePe UPI */}
              <label
                className={`payment-card relative flex items-center justify-between p-4 rounded-xl bg-white shadow-sm cursor-pointer active:scale-[0.99] transition-all border ${
                  selectedMethod === 'phonepe' ? 'border-[#000000] ring-1 ring-[#000000]' : 'border-[#e1e3e4]'
                }`}
              >
                <input
                  checked={selectedMethod === 'phonepe'}
                  className="sr-only"
                  name="payment_method"
                  onChange={() => setSelectedMethod('phonepe')}
                  type="radio"
                  value="phonepe"
                />
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#5f259f] flex items-center justify-center text-white shadow-xs">
                    <span className="material-symbols-outlined text-[24px]">electric_bolt</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-[#191c1d]">PhonePe UPI</span>
                    <span className="font-body-sm text-body-sm text-[#45464c]">Link with 98765 43210</span>
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    selectedMethod === 'phonepe' ? 'bg-[#000000] text-white' : 'bg-[#e1e3e4]'
                  }`}
                >
                  {selectedMethod === 'phonepe' && <span className="material-symbols-outlined text-[16px] font-bold">check</span>}
                </div>
              </label>

              {/* Paytm Payments */}
              <label
                className={`payment-card relative flex items-center justify-between p-4 rounded-xl bg-white shadow-sm cursor-pointer active:scale-[0.99] transition-all border ${
                  selectedMethod === 'paytm' ? 'border-[#000000] ring-1 ring-[#000000]' : 'border-[#e1e3e4]'
                }`}
              >
                <input
                  checked={selectedMethod === 'paytm'}
                  className="sr-only"
                  name="payment_method"
                  onChange={() => setSelectedMethod('paytm')}
                  type="radio"
                  value="paytm"
                />
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#f3f4f5] flex items-center justify-center p-1.5 border border-[#e1e3e4] text-[#002970]">
                    <span className="material-symbols-outlined text-[24px]">payments</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-[#191c1d]">Paytm Payments</span>
                    <span className="font-body-sm text-body-sm text-[#45464c]">UPI ID / Paytm Wallet</span>
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    selectedMethod === 'paytm' ? 'bg-[#000000] text-white' : 'bg-[#e1e3e4]'
                  }`}
                >
                  {selectedMethod === 'paytm' && <span className="material-symbols-outlined text-[16px] font-bold">check</span>}
                </div>
              </label>
            </div>
          </div>

          {/* SECTION 2: Credit & Debit Cards */}
          <div className="px-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-lg text-label-lg text-[#191c1d] font-semibold">Credit & Debit Cards</span>
              <span className="font-label-sm text-label-sm text-[#45464c]">CVV required</span>
            </div>

            <div className="space-y-2">
              <label
                className={`payment-card relative flex items-center justify-between p-4 rounded-xl bg-white shadow-sm cursor-pointer active:scale-[0.99] transition-all border ${
                  selectedMethod === 'card_hdfc' ? 'border-[#000000] ring-1 ring-[#000000]' : 'border-[#e1e3e4]'
                }`}
              >
                <input
                  checked={selectedMethod === 'card_hdfc'}
                  className="sr-only"
                  name="payment_method"
                  onChange={() => setSelectedMethod('card_hdfc')}
                  type="radio"
                  value="card_hdfc"
                />
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#004c8f]/10 flex items-center justify-center text-[#004c8f] border border-[#004c8f]/20">
                    <span className="material-symbols-outlined text-[24px]">credit_card</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-sm text-headline-sm text-[#191c1d]">HDFC Bank Visa Platinum</span>
                      <span className="bg-[#edeeef] text-[#191c1d] font-label-sm text-[10px] px-1.5 py-0.2 rounded font-bold">
                        VISA
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-[#45464c]">
                      Ending in •••• 8842 &nbsp;|&nbsp; Exp 08/28
                    </span>
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    selectedMethod === 'card_hdfc' ? 'bg-[#000000] text-white' : 'bg-[#e1e3e4]'
                  }`}
                >
                  {selectedMethod === 'card_hdfc' && (
                    <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                  )}
                </div>
              </label>

              <button
                className="w-full flex items-center justify-between p-4 rounded-xl bg-white shadow-sm active:scale-[0.99] transition-all border border-[#e1e3e4] cursor-pointer"
                onClick={() => onNavigate('Saved Payment Methods', 'push')}
                type="button"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#edeeef] flex items-center justify-center text-[#191c1d]">
                    <span className="material-symbols-outlined text-[24px]">add_card</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-headline-sm text-headline-sm text-[#191c1d]">
                      Add New Credit or Debit Card
                    </span>
                    <span className="font-body-sm text-body-sm text-[#45464c]">
                      Save card securely as per RBI guidelines
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[20px] text-[#76777d]">chevron_right</span>
              </button>
            </div>
          </div>

          {/* SECTION 3: More Payment Modes */}
          <div className="px-4 mb-4">
            <span className="font-label-lg text-label-lg text-[#191c1d] font-semibold block mb-2">
              More Payment Modes
            </span>
            <div className="space-y-2">
              <label
                className={`payment-card relative flex items-center justify-between p-4 rounded-xl bg-white shadow-sm cursor-pointer active:scale-[0.99] transition-all border ${
                  selectedMethod === 'netbanking' ? 'border-[#000000] ring-1 ring-[#000000]' : 'border-[#e1e3e4]'
                }`}
              >
                <input
                  checked={selectedMethod === 'netbanking'}
                  className="sr-only"
                  name="payment_method"
                  onChange={() => setSelectedMethod('netbanking')}
                  type="radio"
                  value="netbanking"
                />
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#e7e8e9] flex items-center justify-center text-[#191c1d]">
                    <span className="material-symbols-outlined text-[22px]">account_balance</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-[#191c1d]">Net Banking</span>
                    <span className="font-body-sm text-body-sm text-[#45464c]">SBI, HDFC, ICICI, Axis & 40+ others</span>
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    selectedMethod === 'netbanking' ? 'bg-[#000000] text-white' : 'bg-[#e1e3e4]'
                  }`}
                >
                  {selectedMethod === 'netbanking' && (
                    <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                  )}
                </div>
              </label>

              <label
                className={`payment-card relative flex items-center justify-between p-4 rounded-xl bg-white shadow-sm cursor-pointer active:scale-[0.99] transition-all border ${
                  selectedMethod === 'cod' ? 'border-[#000000] ring-1 ring-[#000000]' : 'border-[#e1e3e4]'
                }`}
              >
                <input
                  checked={selectedMethod === 'cod'}
                  className="sr-only"
                  name="payment_method"
                  onChange={() => setSelectedMethod('cod')}
                  type="radio"
                  value="cod"
                />
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#e7e8e9] flex items-center justify-center text-[#191c1d]">
                    <span className="material-symbols-outlined text-[22px]">payments</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-headline-sm text-headline-sm text-[#191c1d]">Cash on Delivery</span>
                      <span className="bg-[#e1e3e4] text-[#45464c] font-label-sm text-[10px] px-1.5 py-0.2 rounded font-bold">
                        Convenience
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-[#45464c]">Pay cash or scan QR at delivery</span>
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    selectedMethod === 'cod' ? 'bg-[#000000] text-white' : 'bg-[#e1e3e4]'
                  }`}
                >
                  {selectedMethod === 'cod' && (
                    <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                  )}
                </div>
              </label>
            </div>
          </div>

          {/* Security Assurance Pill */}
          <div className="px-4 mb-2">
            <div className="bg-[#f3f4f5] rounded-full px-4 py-2.5 flex items-center justify-center gap-2 border border-[#e1e3e4]">
              <span className="material-symbols-outlined text-[18px] text-[#855300]">verified_user</span>
              <span className="font-label-sm text-label-sm text-[#45464c] text-center">
                100% RBI-compliant 256-bit encrypted checkout
              </span>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Drawer / CTA Container */}
        {/* Exactly matches button id: pay-button */}
        <div className="fixed bottom-0 left-0 right-0 w-full z-40 bg-white/95 backdrop-blur-xl px-4 pt-2.5 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.06)] border-t border-[#e1e3e4]">
          <div className="max-w-md mx-auto w-full flex flex-col gap-2">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#855300] animate-pulse" />
                <span className="font-label-sm text-label-sm text-[#45464c]">
                  Pay via Google Pay UPI {useWallet ? '(₹450 via Wallet)' : ''}
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-[#855300] font-semibold">
                Free Express Delivery applied
              </span>
            </div>

            <button
              className="w-full h-14 rounded-2xl bg-[#000000] text-white flex items-center justify-between px-5 active:scale-[0.98] transition-transform duration-150 shadow-xl cursor-pointer"
              id="pay-button"
              onClick={handlePay}
              type="button"
            >
              <div className="flex flex-col items-start">
                <span className="font-label-sm text-label-sm text-white/70 uppercase tracking-wider">
                  Final Payable
                </span>
                <span className="font-currency-body text-currency-body text-white font-bold">₹{payable}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label-lg text-label-lg text-white font-bold">Confirm & Pay</span>
                <span className="material-symbols-outlined text-[20px] text-white">arrow_forward</span>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
