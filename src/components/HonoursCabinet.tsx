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
      colors: ['#f2ca50', '#d4af37', '#ffffff', '#3b82f6'],
    });
    onSelectTrophy(trophy);
  };

  return (
    <section
      id="honours"
      style={{ scrollMarginTop: '80px' }}
      className="relative z-10 w-full bg-[#050812]/95 backdrop-blur-md py-20 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2ca50]/10 border border-[#f2ca50]/20 text-xs font-bold text-[#f2ca50] uppercase tracking-widest mb-3">
            <span className="material-symbols-outlined text-[16px]">stars</span>
            <span>THE WORLD’S GREATEST PALMARÈS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
            ROYAL LEGACY &amp; HONOURS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
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
                className={`glass-card rounded-2xl p-6 text-center group cursor-pointer relative overflow-hidden flex flex-col justify-between transition-all ${
                  isUcl
                    ? 'border-[#f2ca50]/30 shadow-[0_0_24px_rgba(242,202,80,0.12)] hover:border-[#f2ca50]/60'
                    : 'border-white/10 hover:border-[#f2ca50]/40'
                }`}
              >
                {/* Media Container */}
                {trophy.image ? (
                  <div className="relative w-full h-44 mb-3 overflow-hidden rounded-xl bg-black/40 flex items-center justify-center">
                    <img
                      alt={trophy.name}
                      className="w-full h-full object-contain trophy-image-mask transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(242,202,80,0.3)]"
                      src={trophy.image}
                    />
                    <div
                      className={`absolute top-2 right-2 px-2 py-0.5 rounded font-bold text-[10px] tracking-wider uppercase shadow-md ${trophy.tagColor}`}
                    >
                      {trophy.tag}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`w-full h-44 mb-3 rounded-xl bg-gradient-to-b from-[#182246]/60 to-[#111832]/60 flex flex-col items-center justify-center border ${
                      isUcl ? 'border-[#f2ca50]/20' : 'border-white/10'
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-[#f2ca50]/15 text-[#f2ca50] flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(242,202,80,0.3)]">
                      <span className="material-symbols-outlined text-[36px]">{trophy.icon}</span>
                    </div>
                    <span className="text-[10px] tracking-widest uppercase font-bold text-[#f2ca50] mt-2">
                      {trophy.tag}
                    </span>
                  </div>
                )}

                {/* Counts & Names */}
                <div>
                  <span
                    className={`font-stat text-5xl font-black block group-hover:text-[#f2ca50] transition-colors ${
                      isUcl ? 'text-[#f2ca50]' : 'text-white'
                    }`}
                  >
                    {trophy.count}
                  </span>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white mt-1 group-hover:text-[#f2ca50] transition-colors">
                    {trophy.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-widest text-slate-400 mt-1 font-bold">
                    {trophy.subtitle}
                  </p>
                </div>

                {/* Footer link */}
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-[#f2ca50]/80 font-semibold flex items-center justify-center gap-1 group-hover:text-[#f2ca50] transition-colors">
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
