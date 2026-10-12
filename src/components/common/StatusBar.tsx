import React from 'react';

export const StatusBar: React.FC = () => {
  return (
    <div className="fixed top-0 w-full z-50 px-4 h-11 flex items-center justify-between text-[#191c1d] pointer-events-none select-none">
      <span className="font-label-md text-label-md font-semibold">9:41</span>
      <div className="flex items-center gap-1">
        <span className="material-symbols-outlined text-[16px]">signal_cellular_alt</span>
        <span className="material-symbols-outlined text-[16px]">wifi</span>
        <span className="material-symbols-outlined text-[18px]">battery_full</span>
      </div>
    </div>
  );
};
