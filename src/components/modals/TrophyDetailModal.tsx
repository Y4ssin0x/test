import React from 'react';
import confetti from 'canvas-confetti';
import { Trophy } from '../../data/clubData';

interface TrophyDetailModalProps {
  trophy: Trophy | null;
  onClose: () => void;
}

export const TrophyDetailModal: React.FC<TrophyDetailModalProps> = ({ trophy, onClose }) => {
  if (!trophy) return null;

  const triggerVictoryBlast = () => {
    confetti({
      particleCount: 70,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#f2ca50', '#ffffff', '#2a68ff'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0b1124] border border-[#f2ca50]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#f2ca50] hover:text-black flex items-center justify-center text-slate-300 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-white/10">
          {trophy.image ? (
            <div className="w-36 h-36 rounded-xl bg-black/50 p-2 flex items-center justify-center shrink-0 border border-[#f2ca50]/30">
              <img
                src={trophy.image}
                alt={trophy.name}
                className="w-full h-full object-contain trophy-image-mask"
              />
            </div>
          ) : (
            <div className="w-32 h-32 rounded-xl bg-[#182246] flex items-center justify-center shrink-0 text-[#f2ca50] border border-[#f2ca50]/20">
              <span className="material-symbols-outlined text-[56px]">{trophy.icon}</span>
            </div>
          )}

          <div className="text-center sm:text-left space-y-2">
            <span className="px-3 py-1 rounded bg-[#f2ca50]/20 text-[#f2ca50] font-bold text-xs uppercase tracking-wider border border-[#f2ca50]/30">
              {trophy.subtitle}
            </span>
            <h3 className="font-display font-extrabold text-3xl text-white">
              {trophy.count} × {trophy.name}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-lg">
              {trophy.description}
            </p>
          </div>
        </div>

        {/* Notable Historic Finals */}
        <div className="my-6">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#f2ca50] mb-3 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">military_tech</span>
            <span>MEMORABLE TRIUMPHS &amp; FINALS</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {trophy.notableFinals.map((fin, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#f2ca50]/40 transition-colors"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="font-stat font-extrabold text-[#f2ca50] text-sm">
                    {fin.year}
                  </span>
                  <span className="font-bold text-white px-2 py-0.5 rounded bg-black/40">
                    {fin.score}
                  </span>
                </div>
                <div className="text-sm font-display font-bold text-slate-200 mt-1">
                  vs {fin.opponent}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">location_on</span>
                  <span>{fin.venue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Championship Years Badges */}
        <div className="my-6">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-300 mb-3">
            COMPLETE PALMARÈS RECORD ({trophy.count} TITLES)
          </h4>
          <div className="flex flex-wrap gap-2">
            {trophy.years.map((yr) => (
              <span
                key={yr}
                className="px-2.5 py-1 rounded bg-[#182246] border border-[#f2ca50]/20 text-xs font-bold text-[#f2ca50] hover:scale-105 transition-transform"
              >
                {yr}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={triggerVictoryBlast}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#f2ca50] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">celebration</span>
            <span>Celebrate Royal Glory</span>
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-[#f2ca50] text-[#241a00] font-bold text-xs uppercase tracking-wider hover:bg-[#d4af37] transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
