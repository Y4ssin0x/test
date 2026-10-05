import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface AwayBallotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AwayBallotModal: React.FC<AwayBallotModalProps> = ({ isOpen, onClose }) => {
  const [memberId, setMemberId] = useState('RM-88421');
  const [ballotSubmitted, setBallotSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBallotSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#f2ca50', '#ffffff'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg overflow-y-auto bg-[#0b1124] border border-[#f2ca50]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#f2ca50] hover:text-black flex items-center justify-center text-slate-300 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {!ballotSubmitted ? (
          <>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
                MEMBER BALLOT PORTAL
              </span>
            </div>
            <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
              ATLÉTICO MADRID vs REAL MADRID
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              El Derbi Madrileño · Metropolitano Stadium • Away Allocation Ballot (1,850 tickets)
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Match Date:</span>
                  <span className="font-bold text-white">Sunday · 21:00 CET</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Ticket Price:</span>
                  <span className="font-bold text-[#f2ca50]">€70 (Away Sector Cap)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Ballot Deadline:</span>
                  <span className="font-bold text-white">Friday 14:00 CET</span>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                  Madridista Member ID
                </label>
                <input
                  type="text"
                  value={memberId}
                  onChange={(e) => setMemberId(e.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#f2ca50]"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-gold-glow w-full py-3 rounded-xl bg-gradient-to-r from-[#f2ca50] to-[#d4af37] text-[#241a00] font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md"
                >
                  Enter Away Ticket Ballot
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <h3 className="font-display font-extrabold text-xl text-white">Ballot Entry Confirmed!</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Your application for Derbi away allocation has been registered under ID <span className="text-[#f2ca50] font-bold">{memberId}</span>. The draw will take place on Friday.
            </p>
            <div className="pt-3">
              <button
                onClick={() => {
                  setBallotSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2 rounded-xl bg-[#f2ca50] text-[#241a00] font-bold text-xs uppercase tracking-wider cursor-pointer hover:bg-[#d4af37]"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
