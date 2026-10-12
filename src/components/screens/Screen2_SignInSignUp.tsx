import React from 'react';
import { ScreenId } from '../../types/navigation';
import { StatusBar } from '../common/StatusBar';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const Screen2_SignInSignUp: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d] relative">
      <StatusBar />
      <main className="flex-1 flex flex-col relative w-full pt-12 pb-safe bg-[#f8f9fa]">
        <div className="flex flex-col w-full px-4 pb-safe">
          {/* Top Navigation Bar */}
          <header className="flex items-center justify-between py-2 w-full">
            <button
              aria-label="Go back"
              className="w-10 h-10 rounded-full bg-[#f3f4f5] flex items-center justify-center text-[#191c1d] active:scale-95 transition-transform duration-150 cursor-pointer"
              onClick={() => onNavigate('8. Home', 'push_back')}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#ffddb8] text-[#2a1700]">
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                restaurant_menu
              </span>
              <span className="font-label-sm text-label-sm font-semibold tracking-wide uppercase">Gourmet Edition</span>
            </div>
          </header>

          {/* Title & Greeting Section */}
          <section className="mt-4 flex flex-col">
            <div className="flex items-center gap-1">
              <h1 className="font-display text-display text-[#191c1d] tracking-tight">Hello!</h1>
              <span className="inline-block animate-bounce origin-bottom text-2xl select-none">✨</span>
            </div>
            <p className="font-body-md text-body-md text-[#45464c] mt-1 leading-relaxed max-w-[320px]">
              Craving something extraordinary today? Join Cravee or sign in to continue your curated culinary journey.
            </p>
          </section>

          {/* Engaging Central Visual Showcase Card */}
          <section className="mt-5 w-full">
            <div className="relative w-full rounded-2xl bg-[#f3f4f5] p-4 overflow-hidden shadow-sm flex flex-col items-center">
              {/* Ambient Decorative Backdrop Glows */}
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#ffb95f]/20 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-[#dce2f7]/20 blur-xl pointer-events-none" />

              {/* App Cloche Icon Badge Micro-Delight */}
              <div className="relative z-10 flex items-center justify-between w-full mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 rounded-lg bg-[#141b2b] text-[#fea619] flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      room_service
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-[#45464c] font-medium">Cravee Specials</span>
                </div>
                <div className="flex items-center gap-1 bg-[#ffffff] px-2 py-0.5 rounded-full shadow-sm text-[#855300]">
                  <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="font-label-sm text-label-sm font-semibold">4.92</span>
                </div>
              </div>

              {/* Hero Culinary Illustration / Image Card */}
              <div className="relative z-10 w-full h-52 rounded-xl overflow-hidden shadow-sm bg-[#edeeef]">
                <img
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  alt="Awadhi & Mughlai Crafts"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLok_qEI5zE6pXoJmxXTwihvyTfYrbroEUnHZgxDuT8E0Twt6BFlBED-IgxiWmE9zz2s3v7hJYEYJJo_ZzdOSIBiNAFciaYucML7qYYAKATcgdWupEoZ2GNNLDhMaoZXsEzY5mzF4AOe6pjL8reMM_GNDAt9QJ2_uRuJjthuwwYTs7Rouc8VmCVoqHnBieMMfTvzt3ajcjmuUwbYlivuZi1WG9Re4NnNxs0hKRPeBD2ZmHkXMmB4Bn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* Live Chef Recommendation Floating Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-full shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#fea619] animate-pulse" />
                    <span className="font-label-sm text-label-sm text-[#191c1d] font-semibold">Awadhi & Mughlai Crafts</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-white bg-[#141b2b]/80 backdrop-blur-md px-2.5 py-1.5 rounded-full">
                    Freshly Prepared
                  </span>
                </div>
              </div>

              {/* Micro Badges of Regional Delicacies */}
              <div className="relative z-10 grid grid-cols-4 gap-2 w-full mt-4">
                <div className="flex flex-col items-center p-2 rounded-xl bg-white shadow-sm">
                  <span className="text-base select-none">🥘</span>
                  <span className="font-label-sm text-label-sm text-[#191c1d] mt-1 truncate">Biryani</span>
                </div>
                <div className="flex flex-col items-center p-2 rounded-xl bg-white shadow-sm">
                  <span className="text-base select-none">🥟</span>
                  <span className="font-label-sm text-label-sm text-[#191c1d] mt-1 truncate">Samosa</span>
                </div>
                <div className="flex flex-col items-center p-2 rounded-xl bg-white shadow-sm">
                  <span className="text-base select-none">🍢</span>
                  <span className="font-label-sm text-label-sm text-[#191c1d] mt-1 truncate">Tikka</span>
                </div>
                <div className="flex flex-col items-center p-2 rounded-xl bg-white shadow-sm">
                  <span className="text-base select-none">🫓</span>
                  <span className="font-label-sm text-label-sm text-[#191c1d] mt-1 truncate">Naan</span>
                </div>
              </div>
            </div>
          </section>

          {/* Action CTAs Stack */}
          <section className="mt-8 flex flex-col gap-3 w-full">
            {/* Primary Sign In Button */}
            <button
              className="w-full h-[52px] rounded-full bg-[#141b2b] text-white font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all duration-150 cursor-pointer"
              id="signInBtn"
              onClick={() => onNavigate('3. Sign In', 'push')}
              type="button"
            >
              <span>Sign In</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>

            {/* Secondary Sign Up Button */}
            <button
              className="w-full h-[52px] rounded-full bg-white text-[#191c1d] font-label-lg text-label-lg flex items-center justify-center shadow-sm active:scale-[0.98] active:bg-[#f3f4f5] transition-all duration-150 border border-[#e1e3e4] cursor-pointer"
              id="signUpBtn"
              onClick={() => onNavigate('4. Sign Up', 'push')}
              type="button"
            >
              <span>Create an Account</span>
            </button>

            {/* Guest Entry */}
            <div className="flex justify-center items-center mt-1 py-1">
              <button
                className="group flex items-center gap-1.5 text-[#45464c] hover:text-[#191c1d] transition-colors py-2 px-4 rounded-full active:bg-[#e7e8e9] cursor-pointer"
                id="guestBtn"
                onClick={() => onNavigate('8. Home', 'push')}
                type="button"
              >
                <span className="font-body-md text-body-md font-medium">Continue as a guest</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform duration-150">
                  arrow_forward_ios
                </span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
