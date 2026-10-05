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
      colors: ['#f2ca50', '#ffffff', '#eab308', '#d4af37'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-amber-300 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-200">
          {trophy.image ? (
            <div className="w-36 h-36 rounded-xl bg-slate-50 p-2 flex items-center justify-center shrink-0 border border-amber-200 shadow-sm">
              <img
                src={trophy.image}
                alt={trophy.name}
                className="w-full h-full object-contain trophy-image-mask"
              />
            </div>
          ) : (
            <div className="w-32 h-32 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 text-amber-600 border border-amber-200 shadow-sm">
              <span className="material-symbols-outlined text-[56px]">{trophy.icon}</span>
            </div>
          )}

          <div className="text-center sm:text-left space-y-2">
            <span className="px-3 py-1 rounded bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider border border-amber-300">
              {trophy.subtitle}
            </span>
            <h3 className="font-display font-extrabold text-3xl text-slate-900">
              {trophy.count} × {trophy.name}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-lg">
              {trophy.description}
            </p>
          </div>
        </div>

        {/* Notable Historic Finals */}
        <div className="my-6">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-amber-700 mb-3 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">military_tech</span>
            <span>MEMORABLE TRIUMPHS &amp; FINALS</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {trophy.notableFinals.map((fin, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-colors shadow-2xs"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="font-stat font-extrabold text-amber-600 text-sm">
                    {fin.year}
                  </span>
                  <span className="font-bold text-slate-900 px-2 py-0.5 rounded bg-white border border-slate-200">
                    {fin.score}
                  </span>
                </div>
                <div className="text-sm font-display font-bold text-slate-800 mt-1">
                  vs {fin.opponent}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[13px] text-amber-600">location_on</span>
                  <span>{fin.venue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Championship Years Badges */}
        <div className="my-6">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-700 mb-3">
            COMPLETE PALMARÈS RECORD ({trophy.count} TITLES)
          </h4>
          <div className="flex flex-wrap gap-2">
            {trophy.years.map((yr) => (
              <span
                key={yr}
                className="px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 hover:scale-105 transition-transform shadow-2xs"
              >
                {yr}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={triggerVictoryBlast}
            className="px-4 py-2 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer border border-amber-200 shadow-2xs"
          >
            <span className="material-symbols-outlined text-[16px] text-amber-600">celebration</span>
            <span>Celebrate Royal Glory</span>
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
