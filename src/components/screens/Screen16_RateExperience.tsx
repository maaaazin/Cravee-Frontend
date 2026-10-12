import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

export const Screen16_RateExperience: React.FC<Props> = ({ onNavigate }) => {
  const [rating, setRating] = useState<number>(5);
  const [selectedAspects, setSelectedAspects] = useState<string[]>(['Piping Hot Food', 'Great Packaging']);
  const [notes, setNotes] = useState('');
  const [recommend, setRecommend] = useState<'yes' | 'no'>('yes');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const moods = [
    { score: 1, emoji: '😠', label: 'Terrible', text: '1 of 5 • Needs Major Work' },
    { score: 2, emoji: '🙁', label: 'Bad', text: '2 of 5 • Below Expectation' },
    { score: 3, emoji: '😐', label: 'Okay', text: '3 of 5 • Just Okay' },
    { score: 4, emoji: '🙂', label: 'Good', text: '4 of 5 • Pretty Good' },
    { score: 5, emoji: '😍', label: 'Loved it!', text: '5 of 5 • Extraordinary' },
  ];

  const aspects = [
    { name: 'Piping Hot Food', icon: 'local_fire_department' },
    { name: 'Great Packaging', icon: 'inventory_2' },
    { name: 'Fast Delivery', icon: 'bolt' },
    { name: 'Authentic Flavors', icon: 'skillet' },
    { name: 'Polite Courier', icon: 'sentiment_satisfied' },
    { name: 'Eco Cutlery', icon: 'eco' },
  ];

  const toggleAspect = (name: string) => {
    setSelectedAspects((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      onNavigate('8. Home', 'push');
    }, 900);
  };

  const currentMood = moods.find((m) => m.score === rating) || moods[4];

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        title="Rate Order"
        hideTitleText
        onBack={() => onNavigate('Track Order', 'push_back')}
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full pt-28 bg-[#f8f9fa] pb-safe">
        <div className="flex flex-col w-full px-4 pb-8">
          {/* Culinary Header & Delivery Recap Card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center text-center relative overflow-hidden border border-[#e1e3e4]">
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#fea619]/10 pointer-events-none blur-2xl" />

            <div className="w-14 h-14 rounded-full bg-[#fea619]/15 flex items-center justify-center text-[#855300] mb-2 shadow-sm relative">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                dinner_dining
              </span>
              <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#855300] ring-2 ring-white animate-pulse" />
            </div>

            <div className="flex items-center gap-1.5 mb-1">
              <img
                className="w-7 h-7 rounded-full object-cover shadow-sm"
                alt="Cactus Club Cafe"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi9LbdLv_SiMdLFNKmdyAXLEQpRoftmeu8VmGGccPm3ny3Igbaob_Zu8X5m__rxCi1sDrM3RJlHZVN4bNyr0NNmbwaMwV-qQ1Y03R1xVXSu1PIobfoiv_3FKRJmeqqJDuR6jxW-Qu37SvsfWojMFDvx0fhB6_pHv2jwdpQSRPKTYw54oN2VnD3QwMe843dvrjwI5TrXzQDxop6SlWDlrVLLu_2kR3oLQzOVbIJsrkKtTKHvFlu1mPv"
              />
              <span className="font-label-md text-label-md text-[#45464c] font-medium">
                Cactus Club Cafe & Kitchen
              </span>
            </div>

            <h2 className="font-headline-md text-headline-md text-[#191c1d] tracking-tight mb-1">
              Rate your experience
            </h2>
            <p className="font-body-md text-body-md text-[#45464c] max-w-[290px] mx-auto">
              How was your meal delivered to <span className="font-medium text-[#191c1d]">Bandra West</span>?
            </p>

            <div className="mt-3 inline-flex items-center gap-1.5 bg-[#f3f4f5] px-3 py-1.5 rounded-full border border-[#e1e3e4]">
              <span className="material-symbols-outlined text-[#855300] text-[16px]">check_circle</span>
              <span className="font-label-sm text-label-sm text-[#45464c]">Order #CRV-8942 • 28 mins</span>
            </div>
          </div>

          {/* Expressive Face Rating Selector */}
          <div className="mt-4 flex flex-col">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="font-label-sm text-label-sm text-[#45464c] uppercase tracking-wider">Your Rating</span>
              <span className="font-label-md text-label-md text-[#855300] font-semibold" id="rating-score-text">
                {currentMood.text}
              </span>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#e1e3e4]">
              <div className="grid grid-cols-5 gap-1" id="mood-selector">
                {moods.map((m) => {
                  const isSelected = rating === m.score;
                  return (
                    <button
                      key={m.score}
                      className="mood-btn group flex flex-col items-center gap-1 py-1 rounded-lg transition-all active:scale-90 cursor-pointer"
                      onClick={() => setRating(m.score)}
                      type="button"
                    >
                      <div
                        className={`mood-icon-box w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-[#fea619]/20 shadow-[0_0_16px_rgba(254,166,25,0.45)] scale-110'
                            : 'bg-[#f3f4f5]'
                        }`}
                      >
                        <span className={`text-[26px] leading-none ${isSelected ? 'animate-bounce' : ''}`}>
                          {m.emoji}
                        </span>
                      </div>
                      <span
                        className={`mood-label font-label-sm text-label-sm transition-colors ${
                          isSelected ? 'text-[#855300] font-semibold' : 'text-[#45464c]'
                        }`}
                      >
                        {m.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Aspect Tags Section */}
          <div className="mt-4 flex flex-col">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="font-label-sm text-label-sm text-[#45464c] uppercase tracking-wider">
                What stood out?
              </span>
              <span className="font-label-sm text-label-sm text-[#855300]">Tap to choose</span>
            </div>

            <div className="flex flex-wrap gap-2" id="aspect-tags">
              {aspects.map((a) => {
                const isSelected = selectedAspects.includes(a.name);
                return (
                  <button
                    key={a.name}
                    className={`aspect-chip flex items-center gap-1.5 px-3.5 py-2 rounded-full font-label-md text-label-md transition-all active:scale-95 cursor-pointer ${
                      isSelected
                        ? 'bg-[#000000] text-white shadow-sm'
                        : 'bg-white text-[#45464c] border border-[#e1e3e4]'
                    }`}
                    onClick={() => toggleAspect(a.name)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[15px]">{a.icon}</span>
                    <span>{a.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback Text Box & Recommendation */}
          <div className="mt-4 flex flex-col gap-3">
            <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col border border-[#e1e3e4]">
              <div className="flex items-center justify-between mb-1.5">
                <label className="font-label-md text-label-md text-[#191c1d] font-semibold flex items-center gap-1" htmlFor="feedback-input">
                  <span className="material-symbols-outlined text-[18px] text-[#855300]">rate_review</span>
                  <span>Chef & Rider Notes</span>
                </label>
                <span className="font-label-sm text-label-sm text-[#76777d]">Optional</span>
              </div>
              <textarea
                className="w-full bg-[#f3f4f5] rounded-lg p-2.5 font-body-md text-body-md text-[#191c1d] placeholder:text-[#76777d] focus:outline-none focus:bg-white resize-none transition-colors border border-transparent focus:border-[#e1e3e4]"
                id="feedback-input"
                placeholder="Tell us more about the food taste, delivery, or packaging (optional)..."
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <div className="mt-2 pt-1 flex items-center justify-between">
                <button
                  className="flex items-center gap-1.5 text-[#45464c] hover:text-[#191c1d] font-label-sm text-label-sm py-1 px-2 rounded-md bg-[#f3f4f5] transition-colors active:scale-95 cursor-pointer"
                  onClick={() => alert('Photo upload dialog opened')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                  <span>Add Dish Photo</span>
                </button>
                <span className="font-label-sm text-label-sm text-[#45464c]">Earn +50 Cravee Coins</span>
              </div>
            </div>

            {/* Recommendation Toggle */}
            <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between border border-[#e1e3e4]">
              <div className="flex flex-col pr-2">
                <span className="font-label-md text-label-md text-[#191c1d] font-semibold">
                  Recommend to friends?
                </span>
                <span className="font-body-sm text-body-sm text-[#45464c]">
                  Helps neighborhood foodies discover gems
                </span>
              </div>
              <div className="flex items-center gap-1 bg-[#f3f4f5] p-1 rounded-full shrink-0">
                <button
                  className={`recommend-btn flex items-center gap-1 px-3 py-1.5 rounded-full font-label-md text-label-md transition-all active:scale-95 cursor-pointer ${
                    recommend === 'yes'
                      ? 'bg-white text-[#191c1d] shadow-sm font-semibold'
                      : 'text-[#45464c] hover:text-[#191c1d]'
                  }`}
                  onClick={() => setRecommend('yes')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#855300]">thumb_up</span>
                  <span>Yes</span>
                </button>
                <button
                  className={`recommend-btn flex items-center gap-1 px-3 py-1.5 rounded-full font-label-md text-label-md transition-all active:scale-95 cursor-pointer ${
                    recommend === 'no'
                      ? 'bg-white text-[#191c1d] shadow-sm font-semibold'
                      : 'text-[#45464c] hover:text-[#191c1d]'
                  }`}
                  onClick={() => setRecommend('no')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">thumb_down</span>
                  <span>No</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom CTA & Skip Option */}
          <div className="mt-6 flex flex-col items-center gap-2">
            <button
              className="w-full h-[52px] bg-[#000000] text-white rounded-full font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-all cursor-pointer"
              id="submit-btn"
              onClick={handleSubmit}
              type="button"
            >
              {isSubmitted ? (
                <>
                  <span className="material-symbols-outlined text-[20px] text-white">check_circle</span>
                  <span>Thank you! +50 Coins</span>
                </>
              ) : (
                <>
                  <span>Submit Feedback</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </>
              )}
            </button>

            <button
              className="py-1 px-4 text-[#45464c] hover:text-[#191c1d] font-label-md text-label-md transition-colors active:scale-95 cursor-pointer"
              onClick={() => onNavigate('8. Home', 'push_back')}
              type="button"
            >
              Skip for now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
