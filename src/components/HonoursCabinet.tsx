import React from 'react';
import confetti from 'canvas-confetti';
import { TROPHIES_DATA, Trophy } from '../data/clubData';

interface HonoursCabinetProps {
  onSelectTrophy: (trophy: Trophy) => void;
}

export const HonoursCabinet: React.FC<HonoursCabinetProps> = ({ onSelectTrophy }) => {
  const handleTrophyClick = (trophy: Trophy) => {
    // Fire festive golden embers confetti
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f2ca50', '#d4af37', '#ffffff', '#eab308'],
    });
    onSelectTrophy(trophy);
  };

  return (
    <section
      id="honours"
      style={{ scrollMarginTop: '80px' }}
      className="relative z-10 w-full bg-slate-50/70 backdrop-blur-md py-20 border-t border-amber-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-bold text-amber-900 uppercase tracking-widest mb-3 shadow-2xs">
            <span className="material-symbols-outlined text-[16px] text-amber-600">stars</span>
            <span>THE WORLD’S GREATEST PALMARÈS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight uppercase">
            ROYAL LEGACY &amp; HONOURS
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            More than a century of unparalleled dominance across Spain, Europe, and the world.
          </p>
        </div>

        {/* 4 Trophy Showcase Cards with Real Trophy Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TROPHIES_DATA.map((trophy) => {
            const isUcl = trophy.id === 'ucl';
            return (
              <div
                key={trophy.id}
                onClick={() => handleTrophyClick(trophy)}
                className={`glass-card rounded-2xl p-6 text-center group cursor-pointer relative overflow-hidden flex flex-col justify-between transition-all bg-white/95 border ${
                  isUcl
                    ? 'border-amber-300 shadow-[0_4px_24px_rgba(212,175,55,0.18)] hover:border-amber-500 hover:shadow-xl'
                    : 'border-slate-200 shadow-md hover:border-amber-400 hover:shadow-xl'
                }`}
              >
                {/* Media Container */}
                {trophy.image ? (
                  <div className="relative w-full h-44 mb-3 overflow-hidden rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <img
                      alt={trophy.name}
                      className="w-full h-full object-contain trophy-image-mask transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_4px_12px_rgba(212,175,55,0.35)]"
                      src={trophy.image}
                    />
                    <div
                      className={`absolute top-2 right-2 px-2 py-0.5 rounded font-bold text-[10px] tracking-wider uppercase shadow-sm ${
                        isUcl ? 'bg-amber-400 text-slate-950 font-extrabold' : 'bg-slate-100 text-slate-800 border border-slate-200'
                      }`}
                    >
                      {trophy.tag}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-44 mb-3 rounded-xl bg-amber-50/70 flex flex-col items-center justify-center border border-amber-200/80">
                    <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                      <span className="material-symbols-outlined text-[36px]">{trophy.icon}</span>
                    </div>
                    <span className="text-[10px] tracking-widest uppercase font-bold text-amber-700 mt-2">
                      {trophy.tag}
                    </span>
                  </div>
                )}

                {/* Counts & Names */}
                <div>
                  <span
                    className={`font-stat text-5xl font-black block group-hover:text-amber-600 transition-colors ${
                      isUcl ? 'text-amber-500' : 'text-slate-900'
                    }`}
                  >
                    {trophy.count}
                  </span>
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mt-1 group-hover:text-amber-700 transition-colors">
                    {trophy.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-widest text-slate-500 mt-1 font-bold">
                    {trophy.subtitle}
                  </p>
                </div>

                {/* Footer link */}
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-amber-700 font-semibold flex items-center justify-center gap-1 group-hover:text-amber-900 transition-colors">
                  <span>
                    {isUcl
                      ? 'Record Holders'
                      : trophy.id === 'laliga'
                      ? 'Dominant Legacy'
                      : trophy.id === 'copadelrey'
                      ? 'Domestic Triumph'
                      : 'World Champions'}
                  </span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
