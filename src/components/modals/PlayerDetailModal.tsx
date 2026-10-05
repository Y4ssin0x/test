import React from 'react';
import { Player } from '../../data/clubData';

interface PlayerDetailModalProps {
  player: Player | null;
  onClose: () => void;
}

export const PlayerDetailModal: React.FC<PlayerDetailModalProps> = ({ player, onClose }) => {
  if (!player) return null;

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

        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-6 items-center border-b border-slate-200 pb-6">
          <div className="w-28 h-28 rounded-xl overflow-hidden border-2 border-amber-300 shrink-0 bg-slate-100 shadow-md">
            <img src={player.photo} alt={player.name} className="w-full h-full object-cover object-top" />
          </div>
          <div className="text-center sm:text-left space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-display font-extrabold text-2xl text-amber-600">{player.number}</span>
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200">{player.badge}</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 uppercase">{player.name}</h3>
            <p className="text-xs text-slate-500 font-semibold">{player.role} • {player.nationality}</p>
          </div>
        </div>

        {/* Bio & Tactical Role */}
        <div className="my-6 space-y-4">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-amber-700">
            TACTICAL DOSSIER &amp; PROFILE
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
            {player.bio}
          </p>

          <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-700 pt-2">
            CORE TACTICAL STRENGTHS
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {player.strengths.map((str, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-50/70 text-xs text-slate-800 border border-amber-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>{str}</span>
              </div>
            ))}
          </div>

          <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-700 pt-2">
            ATTRIBUTES OVERVIEW
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
            {Object.entries(player.stats).map(([k, v]) => (
              <div key={k} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 shadow-2xs">
                <span className="font-stat text-xl font-black text-amber-600 block">{v}</span>
                <span className="text-[10px] uppercase font-bold text-slate-500">{k}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
