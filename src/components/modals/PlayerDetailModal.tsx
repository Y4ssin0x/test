import React from 'react';
import { Player } from '../../data/clubData';

interface PlayerDetailModalProps {
  player: Player | null;
  onClose: () => void;
}

export const PlayerDetailModal: React.FC<PlayerDetailModalProps> = ({ player, onClose }) => {
  if (!player) return null;

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

        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-6 items-center border-b border-white/10 pb-6">
          <div className="w-28 h-28 rounded-xl overflow-hidden border-2 border-[#f2ca50]/40 shrink-0 bg-black/50">
            <img src={player.photo} alt={player.name} className="w-full h-full object-cover object-top" />
          </div>
          <div className="text-center sm:text-left space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-display font-extrabold text-2xl text-[#f2ca50]">{player.number}</span>
              <span className="px-2 py-0.5 rounded bg-[#f2ca50]/20 text-[#f2ca50] text-xs font-bold">{player.badge}</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase">{player.name}</h3>
            <p className="text-xs text-slate-400 font-semibold">{player.role} • {player.nationality}</p>
          </div>
        </div>

        {/* Bio & Tactical Role */}
        <div className="my-6 space-y-4">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#f2ca50]">
            TACTICAL DOSSIER &amp; PROFILE
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
            {player.bio}
          </p>

          <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-300 pt-2">
            CORE TACTICAL STRENGTHS
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {player.strengths.map((str, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-black/40 text-xs text-slate-200 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50]" />
                <span>{str}</span>
              </div>
            ))}
          </div>

          <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-300 pt-2">
            ATTRIBUTES OVERVIEW
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
            {Object.entries(player.stats).map(([k, v]) => (
              <div key={k} className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                <span className="font-stat text-xl font-black text-[#f2ca50] block">{v}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">{k}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-[#f2ca50] text-[#241a00] font-bold text-xs uppercase tracking-wider hover:bg-[#d4af37] transition-all cursor-pointer"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
