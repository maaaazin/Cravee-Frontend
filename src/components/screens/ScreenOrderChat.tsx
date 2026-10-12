import React, { useState } from 'react';
import { ScreenId } from '../../types/navigation';
import { AppHeader } from '../common/AppHeader';

interface Props {
  onNavigate: (screen: ScreenId, transition?: 'push' | 'push_back' | 'slide_up' | 'none') => void;
}

interface Message {
  id: string;
  sender: 'rider' | 'user';
  text: string;
  time: string;
}

export const ScreenOrderChat: React.FC<Props> = ({ onNavigate }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'rider',
      text: 'Namaste! I have picked up your warm order from Cactus Club Cafe. Navigating your way now. 🛵',
      time: '7:42 PM',
    },
    {
      id: '2',
      sender: 'user',
      text: "Great, thank you! Please hand it over to security desk if I'm not answering.",
      time: '7:43 PM',
    },
    {
      id: '3',
      sender: 'rider',
      text: 'Understood sir! I will reach your building in about 6-8 minutes. Traffic is clear on 100ft road.',
      time: '7:44 PM',
    },
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'rider',
          text: 'Noted! Reaching your main gate momentarily. 👍',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1800);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#191c1d]">
      <AppHeader
        title="Order Chat"
        onBack={() => onNavigate('Track Order', 'push_back')}
        onProfileClick={() => onNavigate('17. My Account', 'none')}
      />

      <main className="flex-1 flex flex-col relative w-full pt-28 bg-[#f8f9fa] pb-24">
        {/* Top Rider Context Strip */}
        <section className="sticky top-28 z-20 px-4 py-2 bg-[#f8f9fa]/95 backdrop-blur-md shadow-sm border-b border-[#e1e3e4]">
          <div className="bg-white p-3 rounded-xl shadow-sm flex items-center justify-between gap-3 border border-[#e1e3e4]">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0">
                <img
                  className="w-11 h-11 rounded-full object-cover shadow-sm"
                  alt="Ramesh Kumar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIEnCZwMWNHlntGK7ORDGFosXwSzUccsSMTGi2ZuWL6Ymczq54g0TldVH2CReHOfO6nAqBb--YPPCxYs0_F_CSZHKrfYyhIoNwoyiI9maYSUtRasufiCmPu3he0AEv13418B4_ooc6Xcd6bJnlofczA9ER5deQhP9SBkUZS7QD_-hD3ai72eZK96-Q2_c97MngrJpB35LMoQailC_j4uDDSs5BUclepljboXhZjdripC3YOHID0omY"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#fea619] rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-[10px] text-[#684000]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    electric_scooter
                  </span>
                </span>
              </div>
              <div className="min-w-0 flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-headline-sm text-headline-sm text-[#191c1d] truncate">Ramesh Kumar</span>
                  <span className="inline-flex items-center text-[10px] bg-[#ffddb8] text-[#2a1700] px-1.5 py-0.5 rounded-full font-semibold shrink-0">
                    <span className="material-symbols-outlined text-[11px] mr-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                      verified
                    </span>
                    Verified
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#45464c] font-label-md text-label-md">
                  <span className="flex items-center text-[#855300] font-semibold">
                    <span className="material-symbols-outlined text-[13px] mr-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    4.9
                  </span>
                  <span className="text-[#c6c6cd]">•</span>
                  <span className="text-[#855300] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fea619] animate-ping" />
                    8 mins away
                  </span>
                  <span className="text-[#c6c6cd]">•</span>
                  <span className="truncate text-[#45464c] font-body-sm text-body-sm">Cactus Club Cafe</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                aria-label="Call Rider"
                className="w-10 h-10 rounded-full bg-[#edeeef] flex items-center justify-center text-[#191c1d] active:scale-95 transition-transform cursor-pointer"
                onClick={() => alert('Masked toll-free call connecting to Captain Ramesh...')}
                type="button"
              >
                <span className="material-symbols-outlined text-[19px]">call</span>
              </button>
              <button
                aria-label="Safety support"
                className="w-10 h-10 rounded-full bg-[#e7e8e9] flex items-center justify-center text-[#fea619] active:scale-95 transition-transform cursor-pointer"
                onClick={() => alert('Cravee 24/7 Safety Shield Active')}
                type="button"
              >
                <span className="material-symbols-outlined text-[19px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  shield
                </span>
              </button>
            </div>
          </div>

          {/* Quick Prompt Chips Rail */}
          <div className="overflow-x-auto no-scrollbar pt-2 pb-1 flex items-center gap-2">
            <button
              className="quick-chip shrink-0 px-3 py-1.5 bg-white text-[#191c1d] rounded-full shadow-sm font-label-md text-label-md hover:bg-[#edeeef] transition-colors active:scale-95 border border-[#e1e3e4] cursor-pointer"
              onClick={() => sendMessage('Please ring doorbell 🔔')}
              type="button"
            >
              Please ring doorbell 🔔
            </button>
            <button
              className="quick-chip shrink-0 px-3 py-1.5 bg-white text-[#191c1d] rounded-full shadow-sm font-label-md text-label-md hover:bg-[#edeeef] transition-colors active:scale-95 border border-[#e1e3e4] cursor-pointer"
              onClick={() => sendMessage('Leave at the door 🚪')}
              type="button"
            >
              Leave at the door 🚪
            </button>
            <button
              className="quick-chip shrink-0 px-3 py-1.5 bg-white text-[#191c1d] rounded-full shadow-sm font-label-md text-label-md hover:bg-[#edeeef] transition-colors active:scale-95 border border-[#e1e3e4] cursor-pointer"
              onClick={() => sendMessage('Call upon arrival 📞')}
              type="button"
            >
              Call upon arrival 📞
            </button>
            <button
              className="quick-chip shrink-0 px-3 py-1.5 bg-white text-[#191c1d] rounded-full shadow-sm font-label-md text-label-md hover:bg-[#edeeef] transition-colors active:scale-95 border border-[#e1e3e4] cursor-pointer"
              onClick={() => sendMessage('Gate code is 4021 🔑')}
              type="button"
            >
              Gate code is 4021 🔑
            </button>
          </div>
        </section>

        {/* Message Stream */}
        <section className="flex-1 px-4 py-3 flex flex-col gap-3" id="chatFeed">
          <div className="self-center px-3.5 py-1.5 bg-[#edeeef] text-[#45464c] rounded-full text-center font-label-sm text-label-sm flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-[#855300]">lunch_dining</span>
            <span>
              Cravee Order <strong className="text-[#191c1d] font-semibold">#CRV-8942</strong> • 2 items
            </span>
          </div>

          <div className="flex items-center justify-center my-0.5">
            <span className="font-label-sm text-label-sm text-[#76777d] px-2.5 py-0.5 bg-[#f3f4f5] rounded-full">
              Today 7:42 PM
            </span>
          </div>

          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-end gap-2 max-w-[85%] ${
                m.sender === 'user' ? 'self-end' : 'self-start'
              }`}
            >
              {m.sender === 'rider' && (
                <img
                  className="w-7 h-7 rounded-full object-cover shrink-0 mb-1"
                  alt="Ramesh avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRyADD8joapsRRmN60gpjCoOQiqmVUzWO-pz4som7IHLMjOieesOM8LZL7N8L6c-ITTLAt2jsM8Je3Ui6qNZS9qOL41tskINeepkMVr83yNQ1cYK1HwM2_BRcD84L0QWvVi7TilkfiWJlcfe8SwyTMIz5FNwWLKCvDQRAvPeQV6mSqgzxfzYMYR2BJKiFALSzF6yd5tAss4vOe7CSNZLfQ1MEZI4lLi_uWq2qgLub2txsMVKwERMOB"
                />
              )}
              <div className={`flex flex-col gap-1 ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`p-3.5 rounded-2xl shadow-sm font-body-md text-body-md ${
                    m.sender === 'user'
                      ? 'bg-[#fea619] text-[#684000] rounded-br-xs font-medium'
                      : 'bg-white text-[#191c1d] rounded-bl-xs border border-[#e1e3e4]'
                  }`}
                >
                  {m.text}
                </div>
                <span className="font-label-sm text-label-sm text-[#76777d] px-1">{m.time}</span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-end gap-2 max-w-[80%] self-start opacity-90">
              <div className="w-7 h-7 rounded-full bg-[#edeeef] flex items-center justify-center shrink-0 mb-1">
                <span className="material-symbols-outlined text-[14px] text-[#855300]">sports_motorsports</span>
              </div>
              <div className="bg-white px-3 py-2.5 rounded-2xl rounded-bl-xs shadow-sm flex items-center gap-1.5 border border-[#e1e3e4]">
                <span className="w-2 h-2 rounded-full bg-[#76777d] animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-[#76777d] animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-[#76777d] animate-bounce [animation-delay:0.4s]" />
                <span className="font-label-sm text-label-sm text-[#76777d] ml-1">Ramesh is typing...</span>
              </div>
            </div>
          )}
        </section>

        {/* Sticky Bottom Interactive Input Dock */}
        <footer className="fixed bottom-0 inset-x-0 z-30 bg-[#f8f9fa]/95 backdrop-blur-xl p-2 pb-safe shadow-[0_-4px_20px_-2px_rgba(17,24,39,0.06)] border-t border-[#e1e3e4]">
          <form
            className="flex items-center gap-2 max-w-lg mx-auto"
            id="chatForm"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <button
              aria-label="Add photo"
              className="w-10 h-10 rounded-full bg-[#edeeef] flex items-center justify-center text-[#45464c] hover:text-[#191c1d] active:scale-95 transition-transform shrink-0 cursor-pointer"
              type="button"
              onClick={() => alert('Attach location photo or invoice')}
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
            </button>

            <div className="flex-1 min-w-0 bg-white rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-sm border border-[#e1e3e4]">
              <input
                autoComplete="off"
                className="flex-1 bg-transparent border-0 outline-none font-body-md text-body-md text-[#191c1d] placeholder:text-[#76777d] py-1"
                id="messageInput"
                placeholder="Type a message to Ramesh..."
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <button
                aria-label="Send voice memo"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#76777d] hover:text-[#191c1d] transition-colors cursor-pointer"
                id="micBtn"
                onClick={() => setInputVal('Audio note sent: "Gate code is 4021"')}
                type="button"
              >
                <span className="material-symbols-outlined text-[19px]">mic</span>
              </button>
            </div>

            <button
              aria-label="Send message"
              className="w-11 h-11 rounded-full bg-[#fea619] text-[#684000] flex items-center justify-center shadow-md active:scale-90 transition-transform shrink-0 font-bold cursor-pointer"
              id="sendBtn"
              type="submit"
            >
              <span className="material-symbols-outlined text-[20px] font-bold">arrow_upward</span>
            </button>
          </form>
        </footer>
      </main>
    </div>
  );
};
