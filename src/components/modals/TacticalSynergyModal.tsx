import React from 'react';

interface TacticalSynergyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TacticalSynergyModal: React.FC<TacticalSynergyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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

        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider border border-amber-300">
            TACTICAL SYNERGY REPORT
          </span>
          <span className="text-xs text-slate-500 font-medium">ANALYSIS ROOM · VALDEBEBAS</span>
        </div>
        <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight">
          Vinícius Jr. &amp; Mbappé: Lethal Counter-Attack Evolution
        </h3>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Dissecting the telepathic spatial rotation, blind-side vertical runs, and supersonic transitions that have made the Real Madrid front line the most feared attacking duo in Europe.
        </p>

        {/* Synergy Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center shadow-2xs">
            <span className="font-stat text-3xl font-black text-amber-600">49</span>
            <p className="text-[10px] uppercase font-bold text-slate-500 mt-1">COMBINED GOALS</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center shadow-2xs">
            <span className="font-stat text-3xl font-black text-slate-800">18</span>
            <p className="text-[10px] uppercase font-bold text-slate-500 mt-1">COMBINED ASSISTS</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center shadow-2xs">
            <span className="font-stat text-3xl font-black text-slate-800">36.2</span>
            <p className="text-[10px] uppercase font-bold text-slate-500 mt-1">PEAK KM/H SPRINT</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center shadow-2xs">
            <span className="font-stat text-3xl font-black text-amber-600">4.1s</span>
            <p className="text-[10px] uppercase font-bold text-slate-500 mt-1">BOX-TO-BOX BREAK</p>
          </div>
        </div>

        {/* Tactical Breakdown Points */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <h4 className="font-display font-bold text-slate-900 text-sm">
                1. The Inverted Asymmetry Pattern
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              When Vinícius Jr pins the opposing right-back out wide on the touchline, Kylian Mbappé systematically targets the gap between the opposing center-back and fullback. This dragging movement creates instantaneous 2v1 overloads that collapse deep low blocks.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <h4 className="font-display font-bold text-slate-900 text-sm">
                2. Direct Transition Verticality
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Upon second-ball turnovers engineered by Fede Valverde and Aurélien Tchouaméni, Real Madrid average only 3.2 passes before generating a shot on target. The synchronization between Vinícius’s diagonal ball-carrying and Mbappé’s curved off-shoulder runs is operating at an unprecedented 94% timing precision.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <h4 className="font-display font-bold text-slate-900 text-sm">
                3. Jude Bellingham High Connection Point
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Jude Bellingham acts as the gravitational fulcrum. By absorbing the opposing defensive midfielder into central midfield, he opens a 30-meter vacuum into which Vinícius and Mbappé cross-swap at breakneck velocity.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
          >
            Close Analysis
          </button>
        </div>
      </div>
    </div>
  );
};
