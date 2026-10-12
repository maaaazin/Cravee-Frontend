import React from 'react';

interface AppHeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  showLogo?: boolean;
  showProfile?: boolean;
  onProfileClick?: () => void;
  rightElement?: React.ReactNode;
  hideTitleText?: boolean;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  showBack = true,
  onBack,
  showLogo = true,
  showProfile = true,
  onProfileClick,
  rightElement,
  hideTitleText = false,
}) => {
  return (
    <header className="fixed top-0 w-full z-40 bg-[#f8f9fa]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
      <div className="px-4 h-11 flex items-center justify-between text-[#191c1d] pointer-events-none">
        <span className="font-label-md text-label-md font-semibold select-none">9:41</span>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">signal_cellular_alt</span>
          <span className="material-symbols-outlined text-[16px]">wifi</span>
          <span className="material-symbols-outlined text-[18px]">battery_full</span>
        </div>
      </div>
      <div className="h-16 px-4 flex items-center justify-between">
        <div className="flex items-center gap-1 min-w-0">
          {showBack && (
            <button
              aria-label="Go back"
              className="min-w-[44px] min-h-[44px] -ml-2 flex items-center justify-center text-[#191c1d] active:scale-95 transition-transform duration-150 shrink-0"
              onClick={(e) => {
                e.preventDefault();
                if (onBack) onBack();
              }}
              type="button"
              data-action="back"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
            </button>
          )}

          {showLogo && (
            <img
              alt="Cravee"
              className="h-7 w-auto object-contain shrink-0"
              src="https://lh3.googleusercontent.com/aida/AEtjO1VQHIriyN1A1TIWSI1MWfR2VqM556QfOPKi0Ppjjbxugz9bXofs40PVHT-kQITnNbNbhSMBz65YJOwK0L4K22HM8TzVNk6n4QpM7cwhHzzS3dlgXjuuLbdqi3xebepcFEfqqKJCoHsoNyayCLiRrkR1tN3aYyeI8XVohTvqSIeD1WBbvLLnuCu3BGKC3L5ANdH4R-6koD7rBnqezDOqcyR-6SvLTA2TNTd9QCvqf7ewjankDrrl0i-slw0"
            />
          )}

          {title && (
            <h1
              className={`font-headline-sm text-headline-sm text-[#191c1d] truncate ml-1 ${
                hideTitleText ? 'opacity-0' : ''
              }`}
            >
              {title}
            </h1>
          )}
        </div>

        {rightElement ? (
          rightElement
        ) : showProfile ? (
          <button
            aria-label="Profile"
            className="min-w-[44px] min-h-[44px] flex items-center justify-end active:scale-95 transition-transform duration-150 shrink-0 cursor-pointer"
            onClick={onProfileClick}
            type="button"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD51EmdIaKp0cDQ0XFDoQR-23XvBWWI0E0yvKKBNgVurDX_r2hOxN9fvl4ZNlcsSKoSUWhkPfoWI7h7KvnW5dAbHQQulcHfAG5vggaDGgn3mwYhsK6YUPnJkwpHpeFO48tlY_hhJjUvwNMD2HMgFOBViYrApLpqWcjHJQhIzlwmh2bPQ3VTSc21WHpV1C1FWmKw-QQJLBTjEHgfuQwr4U4hQBAomNcU7cXgfjWnmiBE-Iw_ZPDy113j"
            />
          </button>
        ) : (
          <div className="w-10 h-10" />
        )}
      </div>
    </header>
  );
};
