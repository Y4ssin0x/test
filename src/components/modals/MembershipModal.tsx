import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({ isOpen, onClose }) => {
  const [selectedTier, setSelectedTier] = useState<'premium' | 'vip'>('premium');
  const [memberName, setMemberName] = useState<string>('Yassine Lahnin');
  const [favNumber, setFavNumber] = useState<string>('5');
  const [isEnrolled, setIsEnrolled] = useState<boolean>(false);

  if (!isOpen) return null;

  const crestUrl =
    'https://lh3.googleusercontent.com/aida/AEtjO1X4Iu8gO_WVzCHehc6aal2-MuX6THdPbOGHYpzYtqPrxcz5xb89R04qO4LJbQqXpBXC5PiCCep0kuDkyFZzLr7NlbJns81Dk6GQP419FtdMU2YEBXgkVTqLboWv5NB0DQ-lp2A7JlJQa2q5erLbyC4wdk95C50lMYqDpxSOWe-GwhqQP8wkxxg2z-rZOHj7tVdooRFcDPbi8915oClREGJVW_vmbM2P7t9Us9iucFpAATZMmSdsAQO07Fpn';

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEnrolled(true);
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#f2ca50', '#d4af37', '#ffffff', '#eab308'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-amber-300 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {!isEnrolled ? (
          <>
            {/* Header */}
            <div className="mb-6 border-b border-slate-200 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
                <span className="material-symbols-outlined text-[14px] text-amber-600">workspace_premium</span>
                <span>OFFICIAL MADRIDISTA COMMUNITY</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight">
                JOIN MADRIDISTA PREMIUM PASS
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Customize your personalized digital member pass and gain priority match access at the Santiago Bernabéu.
              </p>
            </div>

            {/* Interactive Live Card Preview (Royal Gold & Pure White) */}
            <div className="relative w-full max-w-sm mx-auto h-52 rounded-2xl p-5 mb-6 overflow-hidden bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 border-2 border-yellow-200/80 shadow-xl flex flex-col justify-between group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none" />
              
              {/* Card Top */}
              <div className="flex justify-between items-start relative z-10">
                <div className="flex items-center gap-2.5">
                  <img src={crestUrl} alt="Crest" className="w-8 h-8 object-contain drop-shadow-sm" />
                  <div>
                    <span className="font-display font-black text-xs text-slate-950 tracking-widest block uppercase">
                      REAL MADRID
                    </span>
                    <span className="text-[9px] text-amber-900 font-extrabold tracking-wider uppercase">
                      {selectedTier === 'vip' ? 'MADRIDISTA VIP GOLD' : 'MADRIDISTA PREMIUM'}
                    </span>
                  </div>
                </div>
                <div className="w-9 h-7 rounded bg-gradient-to-br from-yellow-100 to-amber-200 border border-amber-300/80 flex items-center justify-center shadow-2xs">
                  <span className="material-symbols-outlined text-amber-950 text-[16px]">contactless</span>
                </div>
              </div>

              {/* Card Center Watermark */}
              <div className="absolute right-4 bottom-10 font-display font-black text-7xl text-white/25 pointer-events-none">
                #{favNumber}
              </div>

              {/* Card Bottom */}
              <div className="relative z-10 pt-4 border-t border-amber-950/15 flex justify-between items-end">
                <div>
                  <span className="text-[9px] text-amber-950/70 uppercase tracking-widest block font-mono font-bold">MEMBER NAME</span>
                  <span className="font-display font-black text-sm text-slate-950 uppercase tracking-wider block truncate max-w-[200px]">
                    {memberName || 'VALUED MADRIDISTA'}
                  </span>
                  <span className="text-[9px] text-amber-950/75 font-mono">EXP: 10/26 • ID: RM-2025-{favNumber}94</span>
                </div>
                <div className="text-right">
                  <span className="font-stat font-black text-2xl text-slate-950">#{favNumber}</span>
                </div>
              </div>
            </div>

            {/* Customization Form */}
            <form onSubmit={handleEnroll} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  onClick={() => setSelectedTier('premium')}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedTier === 'premium'
                      ? 'bg-amber-50 border-amber-400 ring-1 ring-amber-400 shadow-sm'
                      : 'bg-slate-50 border-slate-200 hover:border-amber-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-900">Madridista Premium</span>
                    <span className="text-xs font-extrabold text-amber-600 font-stat">€35 / yr</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">48h priority tickets + 15% store discount</p>
                </div>

                <div
                  onClick={() => setSelectedTier('vip')}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedTier === 'vip'
                      ? 'bg-amber-50 border-amber-400 ring-1 ring-amber-400 shadow-sm'
                      : 'bg-slate-50 border-slate-200 hover:border-amber-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-900">Madridista VIP Gold</span>
                    <span className="text-xs font-extrabold text-amber-600 font-stat">€120 / yr</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">Includes SkyBar 980 lounge pass &amp; scarf</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Your Name on Card
                  </label>
                  <input
                    type="text"
                    value={memberName}
                    onChange={(e) => setMemberName(e.target.value.toUpperCase())}
                    placeholder="ENTER YOUR NAME"
                    maxLength={24}
                    required
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Favorite Squad Number
                  </label>
                  <select
                    value={favNumber}
                    onChange={(e) => setFavNumber(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-amber-400"
                  >
                    <option value="5">#5 Jude Bellingham</option>
                    <option value="7">#7 Vinícius Jr.</option>
                    <option value="9">#9 Kylian Mbappé</option>
                    <option value="8">#8 Fede Valverde</option>
                    <option value="10">#10 Luka Modrić</option>
                    <option value="11">#11 Rodrygo Goes</option>
                    <option value="1">#1 Thibaut Courtois</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                <span className="text-xs text-slate-600 font-medium">Total: {selectedTier === 'vip' ? '€120' : '€35'} / year</span>
                <button
                  type="submit"
                  className="btn-gold-glow px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md"
                >
                  Activate Official Pass
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-3xl border border-emerald-300 shadow-sm">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-slate-900 uppercase tracking-tight">
              ¡Bienvenido a la Familia Madridista!
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Your digital pass for <span className="text-amber-700 font-bold">{memberName}</span> (#{favNumber}) is now active. Your 48h priority UCL window is unlocked!
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => {
                  setIsEnrolled(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer shadow-sm"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
