import React from 'react';

interface TacticalSynergyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TacticalSynergyModal: React.FC<TacticalSynergyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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

        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-wider border border-blue-500/30">
            TACTICAL SYNERGY REPORT
          </span>
          <span className="text-xs text-slate-400">ANALYSIS ROOM · VALDEBEBAS</span>
        </div>
        <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
          Vinícius Jr. &amp; Mbappé: Lethal Counter-Attack Evolution
        </h3>
        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
          dissecting the telepathic spatial rotation, blind-side vertical runs, and supersonic transitions that have made the Real Madrid front line the most feared attacking duo in Europe.
        </p>

        {/* Synergy Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-center">
            <span className="font-stat text-3xl font-black text-[#f2ca50]">49</span>
            <p className="text-[10px] uppercase font-bold text-slate-400 mt-1">COMBINED GOALS</p>
          </div>
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-center">
            <span className="font-stat text-3xl font-black text-blue-400">18</span>
            <p className="text-[10px] uppercase font-bold text-slate-400 mt-1">COMBINED ASSISTS</p>
          </div>
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-center">
            <span className="font-stat text-3xl font-black text-white">36.2</span>
            <p className="text-[10px] uppercase font-bold text-slate-400 mt-1">PEAK KM/H SPRINT</p>
          </div>
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-center">
            <span className="font-stat text-3xl font-black text-emerald-400">4.1s</span>
            <p className="text-[10px] uppercase font-bold text-slate-400 mt-1">BOX-TO-BOX BREAK</p>
          </div>
        </div>

        {/* Tactical Breakdown Points */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f2ca50]" />
              <h4 className="font-display font-bold text-white text-sm">
                1. The Inverted Asymmetry Pattern
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              When Vinícius Jr pins the opposing right-back out wide on the touchline, Kylian Mbappé systematically targets the gap between the opposing center-back and fullback. This dragging movement creates instantaneous 2v1 overloads that collapse deep low blocks.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <h4 className="font-display font-bold text-white text-sm">
                2. Direct Transition Verticality
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Upon second-ball turnovers engineered by Fede Valverde and Aurélien Tchouaméni, Real Madrid average only 3.2 passes before generating a shot on target. The synchronization between Vinícius’s diagonal ball-carrying and Mbappé’s curved off-shoulder runs is operating at an unprecedented 94% timing precision.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <h4 className="font-display font-bold text-white text-sm">
                3. Jude Bellingham High Connection Point
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Jude Bellingham acts as the gravitational fulcrum. By absorbing the opposing defensive midfielder into central midfield, he opens a 30-meter vacuum into which Vinícius and Mbappé cross-swap at breakneck velocity.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-[#f2ca50] text-[#241a00] font-bold text-xs uppercase tracking-wider hover:bg-[#d4af37] transition-all cursor-pointer"
          >
            Close Analysis
          </button>
        </div>
      </div>
    </div>
  );
};
