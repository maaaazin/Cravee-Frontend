import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { StatusBar } from '../common/StatusBar';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const Screen4_SignUp: React.FC<Props> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('Aarav Mehta');
  const [email, setEmail] = useState('aarav.mehta@example.com');
  const [phone, setPhone] = useState('98201 23456');
  const [password, setPassword] = useState('secretpass');
  const [confirmPassword, setConfirmPassword] = useState('secretpass');
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('6. Add Address', 'push');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <StatusBar />
      <main className="flex-1 flex flex-col relative w-full pt-12 pb-safe bg-[#f8f9fa]">
        <div className="flex flex-col w-full px-4 pb-8">
          {/* Top Navigation Header */}
          <div className="flex items-center justify-between w-full h-14 mb-2">
            <button
              aria-label="Go back"
              className="w-10 h-10 rounded-full bg-[#f3f4f5] flex items-center justify-center text-[#191c1d] active:scale-95 transition-transform cursor-pointer"
              onClick={() => onNavigate('2. Sign In / Sign Up — Initial Screen', 'push_back')}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <span className="font-headline-sm text-headline-sm text-[#191c1d]">Create Account</span>
            <div className="w-10 h-10 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#fea619]" />
            </div>
          </div>

          {/* Editorial Headline Section */}
          <div className="flex flex-col mb-5">
            <div className="flex items-center gap-1 mb-1">
              <span className="font-label-sm text-label-sm text-[#855300] uppercase tracking-wider font-semibold">
                Welcome Gastronome
              </span>
              <span className="material-symbols-outlined text-[#855300] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                restaurant_menu
              </span>
            </div>
            <h1 className="font-display text-display text-[#191c1d] tracking-tight mb-1">Join Cravee</h1>
            <p className="font-body-md text-body-md text-[#45464c] leading-relaxed">
              Enter your details to start ordering your favorite meals across India.
            </p>
          </div>

          {/* Registration Form */}
          <form className="flex flex-col gap-3" id="signupForm" onSubmit={handleSubmit}>
            {/* 1. Full Name */}
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-[#45464c]" htmlFor="fullName">
                Full Name
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-[#76777d] text-[20px] pointer-events-none">
                  person
                </span>
                <input
                  className="w-full h-12 bg-[#f3f4f5] text-[#191c1d] font-body-md text-body-md rounded-xl pl-12 pr-4 outline-none placeholder:text-[#76777d] focus:bg-white border border-transparent focus:border-[#e1e3e4] transition-colors"
                  id="fullName"
                  placeholder="Aarav Mehta"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            {/* 2. Email or Username */}
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-[#45464c]" htmlFor="userEmail">
                Email or Username
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-[#76777d] text-[20px] pointer-events-none">
                  mail
                </span>
                <input
                  className="w-full h-12 bg-[#f3f4f5] text-[#191c1d] font-body-md text-body-md rounded-xl pl-12 pr-4 outline-none placeholder:text-[#76777d] focus:bg-white border border-transparent focus:border-[#e1e3e4] transition-colors"
                  id="userEmail"
                  placeholder="aarav.mehta@example.com"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* 3. Phone Number */}
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-[#45464c]" htmlFor="phoneNumber">
                Phone Number
              </label>
              <div className="flex items-center gap-2">
                <div className="h-12 px-3 bg-[#f3f4f5] rounded-xl flex items-center gap-1 shrink-0 text-[#191c1d] select-none border border-transparent">
                  <span className="text-sm">🇮🇳</span>
                  <span className="font-label-md text-label-md text-[#191c1d]">+91</span>
                  <span className="material-symbols-outlined text-[#76777d] text-[16px]">expand_more</span>
                </div>
                <div className="relative flex-1 flex items-center">
                  <input
                    className="w-full h-12 bg-[#f3f4f5] text-[#191c1d] font-body-md text-body-md rounded-xl px-4 outline-none placeholder:text-[#76777d] focus:bg-white border border-transparent focus:border-[#e1e3e4] transition-colors"
                    id="phoneNumber"
                    placeholder="98201 23456"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* 4. Password */}
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-[#45464c]" htmlFor="password">
                Password
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-[#76777d] text-[20px] pointer-events-none">
                  lock
                </span>
                <input
                  className="w-full h-12 bg-[#f3f4f5] text-[#191c1d] font-body-md text-body-md rounded-xl pl-12 pr-12 outline-none placeholder:text-[#76777d] focus:bg-white border border-transparent focus:border-[#e1e3e4] transition-colors"
                  id="password"
                  placeholder="Create a secure password"
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  aria-label="Toggle password view"
                  className="absolute right-3 p-1 text-[#76777d] active:text-[#191c1d] cursor-pointer"
                  onClick={() => setShowPass(!showPass)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPass ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* 5. Confirm Password */}
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-[#45464c]" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-[#76777d] text-[20px] pointer-events-none">
                  lock_reset
                </span>
                <input
                  className="w-full h-12 bg-[#f3f4f5] text-[#191c1d] font-body-md text-body-md rounded-xl pl-12 pr-12 outline-none placeholder:text-[#76777d] focus:bg-white border border-transparent focus:border-[#e1e3e4] transition-colors"
                  id="confirmPassword"
                  placeholder="Re-enter password"
                  type={showConfirmPass ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  aria-label="Toggle confirm password view"
                  className="absolute right-3 p-1 text-[#76777d] active:text-[#191c1d] cursor-pointer"
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showConfirmPass ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Custom Terms Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer select-none group">
                <div className="relative mt-0.5">
                  <input
                    className="sr-only peer"
                    id="termsCheck"
                    type="checkbox"
                    checked={termsAgreed}
                    onChange={(e) => setTermsAgreed(e.target.checked)}
                  />
                  <div className="w-5 h-5 rounded-md bg-[#edeeef] flex items-center justify-center text-transparent peer-checked:bg-[#fea619] peer-checked:text-[#684000] transition-colors">
                    <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                  </div>
                </div>
                <span className="font-body-sm text-body-sm text-[#45464c] flex-1 leading-tight">
                  I agree to the{' '}
                  <span className="font-label-sm text-label-sm text-[#191c1d] font-semibold underline underline-offset-2">
                    Cravee Terms of Service
                  </span>{' '}
                  and{' '}
                  <span className="font-label-sm text-label-sm text-[#191c1d] font-semibold underline underline-offset-2">
                    Privacy Policy
                  </span>
                  .
                </span>
              </label>
            </div>

            {/* Primary Dark Button */}
            <div className="pt-2">
              <button
                className="w-full h-[52px] bg-[#000000] text-white font-label-lg text-label-lg rounded-2xl flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all cursor-pointer"
                id="submitBtn"
                type="submit"
              >
                <span>Create Account</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-[1px] bg-[#e1e3e4]" />
            <span className="font-label-sm text-label-sm text-[#76777d] uppercase tracking-wider">
              Or continue with
            </span>
            <div className="flex-1 h-[1px] bg-[#e1e3e4]" />
          </div>

          {/* Social Login Pills */}
          <div className="grid grid-cols-3 gap-3 w-full mb-6">
            <button
              className="h-12 rounded-xl bg-[#f3f4f5] text-[#191c1d] flex items-center justify-center gap-1.5 active:bg-[#edeeef] active:scale-95 transition-all border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('6. Add Address', 'push')}
              type="button"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.63-.78 1.06-1.85.94-2.89-.91.04-2.03.61-2.68 1.39-.58.68-1.09 1.77-.95 2.82 1.02.08 2.06-.54 2.69-1.32z" />
              </svg>
              <span className="font-label-md text-label-md">Apple</span>
            </button>
            <button
              className="h-12 rounded-xl bg-[#f3f4f5] text-[#191c1d] flex items-center justify-center gap-1.5 active:bg-[#edeeef] active:scale-95 transition-all border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('6. Add Address', 'push')}
              type="button"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" fill="#4285F4" />
                <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" fill="#34A853" />
                <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z" fill="#FBBC05" />
                <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335" />
              </svg>
              <span className="font-label-md text-label-md">Google</span>
            </button>
            <button
              className="h-12 rounded-xl bg-[#f3f4f5] text-[#191c1d] flex items-center justify-center gap-1.5 active:bg-[#edeeef] active:scale-95 transition-all border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('6. Add Address', 'push')}
              type="button"
            >
              <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="font-label-md text-label-md">Facebook</span>
            </button>
          </div>

          {/* Footer Link */}
          <div className="flex items-center justify-center gap-1.5 mt-auto">
            <span className="font-body-md text-body-md text-[#45464c]">Already have an account?</span>
            <button
              className="font-label-lg text-label-lg text-[#855300] font-semibold active:opacity-75 transition-opacity cursor-pointer"
              onClick={() => onNavigate('3. Sign In', 'push')}
              type="button"
            >
              Sign In
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
