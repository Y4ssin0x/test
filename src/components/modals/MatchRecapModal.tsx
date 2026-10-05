import React, { useState } from 'react';

interface MatchRecapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MatchRecapModal: React.FC<MatchRecapModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'stats' | 'lineups'>('timeline');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0b1124] border border-[#f2ca50]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#f2ca50] hover:text-black flex items-center justify-center text-slate-300 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="text-center pb-6 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-500/30">
            <span className="material-symbols-outlined text-[14px]">check_circle</span>
            <span>EL CLÁSICO · LA LIGA MATCHDAY 11 · FULL TIME</span>
          </div>
          <div className="flex items-center justify-center gap-6 my-3">
            <div className="text-right">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">REAL MADRID</h3>
              <p className="text-xs text-[#f2ca50] font-bold">Santiago Bernabéu</p>
            </div>
            <div className="px-5 py-2 rounded-xl bg-black/60 border border-[#f2ca50]/40 font-display font-black text-3xl sm:text-4xl text-[#f2ca50]">
              3 – 1
            </div>
            <div className="text-left">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-300">FC BARCELONA</h3>
              <p className="text-xs text-slate-400 font-bold">Away</p>
            </div>
          </div>
          <p className="text-xs text-slate-400">Attendance: 81,044 (Capacity Maximum) • Referee: Sánchez Martínez</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/10 my-6">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'timeline'
                ? 'text-[#f2ca50] border-b-2 border-[#f2ca50]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Match Timeline
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'stats'
                ? 'text-[#f2ca50] border-b-2 border-[#f2ca50]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Match Telemetry (xG)
          </button>
          <button
            onClick={() => setActiveTab('lineups')}
            className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'lineups'
                ? 'text-[#f2ca50] border-b-2 border-[#f2ca50]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Lineups &amp; Ratings
          </button>
        </div>

        {/* Tab 1: Timeline */}
        {activeTab === 'timeline' && (
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
              <span className="font-display font-black text-base text-[#f2ca50] w-10">18'</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">⚽ GOAL! Real Madrid 1 - 0</span>
                  <span className="px-2 py-0.5 rounded bg-[#f2ca50]/20 text-[#f2ca50] text-[10px] font-bold">J. Bellingham</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  High turnover forced by Valverde. Vinícius Jr drives down the left byline and squares a precision ground cross for Bellingham's sliding finish into the bottom corner.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
              <span className="font-display font-black text-base text-[#f2ca50] w-10">54'</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">⚽ GOAL! Real Madrid 2 - 0</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold">Vinícius Jr.</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Sensational solo magic: Vinícius receives on the halfway line, executes a rapid stepover sequence past Koundé, and curls an unstoppable strike into the top right stanchion.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5 opacity-80">
              <span className="font-display font-black text-base text-slate-400 w-10">68'</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-300 text-sm">⚽ Goal Barcelona 2 - 1</span>
                  <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 text-[10px] font-bold">R. Lewandowski</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Header from an indirect free kick deflected off the far upright into the net.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-[#f2ca50]/30 bg-[#f2ca50]/5">
              <span className="font-display font-black text-base text-[#f2ca50] w-10">82'</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#f2ca50] text-sm">⚽ GOAL! Real Madrid 3 - 1</span>
                  <span className="px-2 py-0.5 rounded bg-[#f2ca50] text-[#241a00] text-[10px] font-extrabold">K. Mbappé</span>
                </div>
                <p className="text-xs text-slate-200 mt-1">
                  Lethal counter-attack: Luka Modrić delivers a 40-meter laser pass over the top. Mbappé hits top sprint speed of 36.2 km/h and dinks an exquisite chip over the onrushing goalkeeper.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Stats */}
        {activeTab === 'stats' && (
          <div className="space-y-4">
            {[
              { label: 'Expected Goals (xG)', rm: '2.84', fcb: '1.12', rmPct: 72 },
              { label: 'Possession', rm: '58%', fcb: '42%', rmPct: 58 },
              { label: 'Total Shots', rm: '16', fcb: '9', rmPct: 64 },
              { label: 'Shots on Target', rm: '9', fcb: '3', rmPct: 75 },
              { label: 'Big Chances Created', rm: '5', fcb: '2', rmPct: 71 },
              { label: 'Pass Accuracy', rm: '89%', fcb: '84%', rmPct: 52 },
              { label: 'Corners', rm: '7', fcb: '4', rmPct: 63 },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-[#f2ca50] font-stat">{stat.rm}</span>
                  <span className="text-slate-300 uppercase tracking-wider">{stat.label}</span>
                  <span className="text-slate-400 font-stat">{stat.fcb}</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
                  <div className="h-full bg-gradient-to-r from-[#d4af37] to-[#f2ca50]" style={{ width: `${stat.rmPct}%` }} />
                  <div className="h-full bg-slate-600 flex-1" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Lineups */}
        {activeTab === 'lineups' && (
          <div className="space-y-4">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-display font-bold text-sm text-[#f2ca50] mb-2 uppercase">Real Madrid (4-3-1-2 Diamond)</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                <div className="p-2 rounded bg-black/40 flex justify-between items-center">
                  <span>1. Courtois (GK)</span>
                  <span className="font-bold text-[#f2ca50]">8.4</span>
                </div>
                <div className="p-2 rounded bg-black/40 flex justify-between items-center">
                  <span>2. Carvajal</span>
                  <span className="font-bold text-white">8.1</span>
                </div>
                <div className="p-2 rounded bg-black/40 flex justify-between items-center">
                  <span>22. Rüdiger</span>
                  <span className="font-bold text-white">8.5</span>
                </div>
                <div className="p-2 rounded bg-black/40 flex justify-between items-center">
                  <span>3. Militão</span>
                  <span className="font-bold text-white">8.2</span>
                </div>
                <div className="p-2 rounded bg-black/40 flex justify-between items-center">
                  <span>23. Mendy</span>
                  <span className="font-bold text-white">7.9</span>
                </div>
                <div className="p-2 rounded bg-black/40 flex justify-between items-center">
                  <span>8. Valverde</span>
                  <span className="font-bold text-[#f2ca50]">8.8</span>
                </div>
                <div className="p-2 rounded bg-black/40 flex justify-between items-center">
                  <span>14. Tchouaméni</span>
                  <span className="font-bold text-white">8.3</span>
                </div>
                <div className="p-2 rounded bg-black/40 flex justify-between items-center">
                  <span>6. Camavinga</span>
                  <span className="font-bold text-white">8.4</span>
                </div>
                <div className="p-2 rounded bg-black/40 flex justify-between items-center border border-[#f2ca50]/40">
                  <span className="font-bold text-[#f2ca50]">5. Bellingham ⭐</span>
                  <span className="font-bold text-[#f2ca50]">9.2</span>
                </div>
                <div className="p-2 rounded bg-black/40 flex justify-between items-center border border-blue-500/40">
                  <span className="font-bold text-blue-300">7. Vinícius Jr.</span>
                  <span className="font-bold text-blue-300">9.3</span>
                </div>
                <div className="p-2 rounded bg-black/40 flex justify-between items-center border border-[#f2ca50]/40">
                  <span className="font-bold text-white">9. Mbappé</span>
                  <span className="font-bold text-[#f2ca50]">9.1</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-[#f2ca50] text-[#241a00] font-bold text-xs uppercase tracking-wider hover:bg-[#d4af37] transition-all cursor-pointer"
          >
            Close Recap
          </button>
        </div>
      </div>
    </div>
  );
};
