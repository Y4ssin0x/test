import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({ isOpen, onClose }) => {
  const [selectedTier, setSelectedTier] = useState<'premium' | 'vip'>('premium');
  const [memberName, setMemberName] = useState<string>('CARLOS MADRIDISTA');
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
      colors: ['#f2ca50', '#d4af37', '#ffffff', '#2a68ff'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0b1124] border border-[#f2ca50]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#f2ca50] hover:text-black flex items-center justify-center text-slate-300 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {!isEnrolled ? (
          <>
            {/* Header */}
            <div className="mb-6 border-b border-white/10 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#f2ca50]/20 text-[#f2ca50] text-xs font-bold uppercase tracking-wider mb-2 border border-[#f2ca50]/30">
                <span className="material-symbols-outlined text-[14px]">workspace_premium</span>
                <span>OFFICIAL MADRIDISTA COMMUNITY</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                JOIN MADRIDISTA PREMIUM PASS
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Customize your personalized digital member pass and gain priority match access at the Santiago Bernabéu.
              </p>
            </div>

            {/* Interactive Live Card Preview */}
            <div className="relative w-full max-w-sm mx-auto h-52 rounded-2xl p-5 mb-6 overflow-hidden bg-gradient-to-tr from-[#1b1f2e] via-[#182246] to-[#252939] border border-[#f2ca50]/50 shadow-2xl flex flex-col justify-between group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f2ca50]/15 rounded-full blur-2xl pointer-events-none" />
              
              {/* Card Top */}
              <div className="flex justify-between items-start relative z-10">
                <div className="flex items-center gap-2.5">
                  <img src={crestUrl} alt="Crest" className="w-8 h-8 object-contain" />
                  <div>
                    <span className="font-display font-bold text-xs text-white tracking-widest block uppercase">
                      REAL MADRID
                    </span>
                    <span className="text-[9px] text-[#f2ca50] font-bold tracking-wider uppercase">
                      {selectedTier === 'vip' ? 'MADRIDISTA VIP GOLD' : 'MADRIDISTA PREMIUM'}
                    </span>
                  </div>
                </div>
                <div className="w-9 h-7 rounded bg-gradient-to-br from-yellow-300 to-amber-600 border border-yellow-200/50 flex items-center justify-center opacity-85">
                  <span className="material-symbols-outlined text-black/60 text-[16px]">contactless</span>
                </div>
              </div>

              {/* Card Center Watermark */}
              <div className="absolute right-4 bottom-10 font-display font-black text-7xl text-white/5 pointer-events-none">
                #{favNumber}
              </div>

              {/* Card Bottom */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex justify-between items-end">
                <div>
                  <span className="text-[9px] text-slate-400 uppercase tracking-widest block font-mono">MEMBER NAME</span>
                  <span className="font-display font-bold text-sm text-white uppercase tracking-wider block truncate max-w-[200px]">
                    {memberName || 'VALUED MADRIDISTA'}
                  </span>
                  <span className="text-[9px] text-slate-400 font-mono">EXP: 10/26 • ID: RM-2025-{favNumber}94</span>
                </div>
                <div className="text-right">
                  <span className="font-stat font-black text-2xl text-[#f2ca50]">#{favNumber}</span>
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
                      ? 'bg-[#182246] border-[#f2ca50] ring-1 ring-[#f2ca50]/40'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white">Madridista Premium</span>
                    <span className="text-xs font-extrabold text-[#f2ca50] font-stat">€35 / yr</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">48h priority tickets + 15% store discount</p>
                </div>

                <div
                  onClick={() => setSelectedTier('vip')}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedTier === 'vip'
                      ? 'bg-[#182246] border-[#f2ca50] ring-1 ring-[#f2ca50]/40'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white">Madridista VIP Gold</span>
                    <span className="text-xs font-extrabold text-[#f2ca50] font-stat">€120 / yr</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Includes SkyBar 980 lounge pass &amp; scarf</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                    Your Name on Card
                  </label>
                  <input
                    type="text"
                    value={memberName}
                    onChange={(e) => setMemberName(e.target.value.toUpperCase())}
                    placeholder="ENTER YOUR NAME"
                    maxLength={24}
                    required
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f2ca50]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                    Favorite Squad Number
                  </label>
                  <select
                    value={favNumber}
                    onChange={(e) => setFavNumber(e.target.value)}
                    className="w-full px-3 py-2 bg-[#111832] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#f2ca50]"
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

              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <span className="text-xs text-slate-400">Total: {selectedTier === 'vip' ? '€120' : '€35'} / year</span>
                <button
                  type="submit"
                  className="btn-gold-glow px-8 py-3 rounded-xl bg-gradient-to-r from-[#f2ca50] to-[#d4af37] text-[#241a00] font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md"
                >
                  Activate Official Pass
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl border border-emerald-500/40">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-white uppercase tracking-tight">
              ¡Bienvenido a la Familia Madridista!
            </h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Your digital pass for <span className="text-[#f2ca50] font-bold">{memberName}</span> (#{favNumber}) is now active. Your 48h priority UCL window is unlocked!
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => {
                  setIsEnrolled(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-[#f2ca50] text-[#241a00] font-bold text-xs uppercase tracking-wider cursor-pointer hover:bg-[#d4af37]"
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
