import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { StatusBar } from '../common/StatusBar';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const Screen3_SignIn: React.FC<Props> = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('maazin.shah@example.com');
  const [password, setPassword] = useState('gastronome123');

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
          <header className="flex items-center justify-between py-2">
            <button
              aria-label="Go back"
              className="w-10 h-10 rounded-full bg-[#f3f4f5] flex items-center justify-center text-[#191c1d] active:scale-95 transition-transform duration-150 cursor-pointer"
              onClick={() => onNavigate('2. Sign In / Sign Up — Initial Screen', 'push_back')}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <h1 className="font-headline-sm text-headline-sm text-[#191c1d]">Sign In</h1>
            <div className="w-10 h-10" />
          </header>

          {/* Welcoming Editorial Hero Banner */}
          <div className="relative w-full rounded-2xl overflow-hidden mt-3 mb-4 shadow-sm">
            <img
              className="w-full h-28 object-cover"
              alt="Steaming gourmet culinary dishes"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlv9566F7w1GNvG_IIgVI3YatyGHk4RtFoh3Z_PIUZTKoAsWEU2IDnQo3NEk7LX1YyVgP1HV-O0BvpOBcjR-1gL5fmMqM_UD4DFFNfU4QaUHauO0yXk6M8iBTZZjbO9s28nU7OPWYUprfavVc98iaNswj88r9BtyTcaUYiUqEjM5ZiMDQoRPqv4w1wi0M6ZaAlPc-Q-wZu1pbSxwqMZZZ28Mvfa1ukC8fejpLi0yQHW1w8lQX5U72G"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-3">
              <div className="flex items-center gap-1.5 text-white">
                <span className="material-symbols-outlined text-[16px] text-[#ffddb8]">restaurant</span>
                <span className="font-label-sm text-label-sm tracking-wider uppercase text-[#ffddb8]">
                  Epicurean Access
                </span>
              </div>
            </div>
          </div>

          {/* Header Greeting & Subcopy */}
          <div className="flex flex-col gap-1 mb-4">
            <h2 className="font-headline-lg text-headline-lg text-[#191c1d]">Welcome Back</h2>
            <p className="font-body-md text-body-md text-[#45464c]">
              Sign in to access your saved addresses, past orders, and exclusive culinary offers.
            </p>
          </div>

          {/* Sign In Form */}
          <form className="flex flex-col gap-3" id="signin-form" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-[#191c1d]" htmlFor="identity-input">
                Email or Phone
              </label>
              <div className="flex items-center bg-[#f3f4f5] rounded-xl px-4 h-12 shadow-sm transition-all focus-within:bg-white focus-within:shadow-md border border-transparent focus-within:border-[#e1e3e4]">
                <span className="material-symbols-outlined text-[#76777d] text-[20px] mr-3 select-none">mail</span>
                <input
                  autoComplete="username"
                  className="w-full bg-transparent font-body-md text-body-md text-[#191c1d] placeholder:text-[#76777d] outline-none"
                  id="identity-input"
                  placeholder="maazin.shah@example.com"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-[#191c1d]" htmlFor="password-input">
                Password
              </label>
              <div className="flex items-center bg-[#f3f4f5] rounded-xl px-4 h-12 shadow-sm transition-all focus-within:bg-white focus-within:shadow-md border border-transparent focus-within:border-[#e1e3e4]">
                <span className="material-symbols-outlined text-[#76777d] text-[20px] mr-3 select-none">lock</span>
                <input
                  autoComplete="current-password"
                  className={`w-full bg-transparent font-body-md text-body-md text-[#191c1d] placeholder:text-[#76777d] outline-none ${
                    showPassword ? '' : 'tracking-widest'
                  }`}
                  id="password-input"
                  placeholder="••••••••••••"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  aria-label="Toggle password visibility"
                  className="text-[#76777d] hover:text-[#191c1d] focus:outline-none p-1 transition-colors cursor-pointer"
                  id="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px] select-none" id="password-icon">
                    {showPassword ? 'visibility' : 'visibility_off'}
                  </span>
                </button>
              </div>
              <div className="flex justify-end mt-1">
                <button
                  className="font-label-md text-label-md text-[#855300] active:opacity-75 transition-opacity cursor-pointer"
                  type="button"
                >
                  Forgot your password?
                </button>
              </div>
            </div>

            <button
              className="mt-2 w-full h-12 bg-[#000000] text-white font-label-lg text-label-lg rounded-full shadow-md flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-150 cursor-pointer"
              type="submit"
            >
              <span>Sign In</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex py-4 items-center">
            <div className="flex-grow h-px bg-[#e1e3e4]" />
            <span className="flex-shrink mx-4 font-label-sm text-label-sm text-[#76777d] uppercase tracking-wider">
              Or sign in with
            </span>
            <div className="flex-grow h-px bg-[#e1e3e4]" />
          </div>

          {/* Social Sign In Row */}
          <div className="grid grid-cols-3 gap-3">
            <button
              aria-label="Sign in with Apple"
              className="h-12 bg-white rounded-xl shadow-sm flex items-center justify-center active:scale-95 active:bg-[#f3f4f5] transition-all border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('6. Add Address', 'push')}
              type="button"
            >
              <svg className="w-5 h-5 fill-current text-[#191c1d]" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.47c.65-.79 1.09-1.89.97-2.99-.95.04-2.1.63-2.78 1.42-.59.68-1.11 1.79-.97 2.86 1.06.08 2.14-.52 2.78-1.29z" />
              </svg>
            </button>
            <button
              aria-label="Sign in with Google"
              className="h-12 bg-white rounded-xl shadow-sm flex items-center justify-center active:scale-95 active:bg-[#f3f4f5] transition-all border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('6. Add Address', 'push')}
              type="button"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
              </svg>
            </button>
            <button
              aria-label="Sign in with Facebook"
              className="h-12 bg-white rounded-xl shadow-sm flex items-center justify-center active:scale-95 active:bg-[#f3f4f5] transition-all border border-[#e1e3e4] cursor-pointer"
              onClick={() => onNavigate('6. Add Address', 'push')}
              type="button"
            >
              <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="font-body-md text-body-md text-[#45464c]">
              Don't have an account?{' '}
              <button
                className="font-label-md text-label-md text-[#855300] ml-1 inline-flex items-center active:opacity-75 transition-opacity font-semibold cursor-pointer"
                onClick={() => onNavigate('4. Sign Up', 'push')}
                type="button"
              >
                Create an account
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
