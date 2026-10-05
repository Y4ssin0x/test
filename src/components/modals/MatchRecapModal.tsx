import React, { useState } from 'react';

interface MatchRecapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MatchRecapModal: React.FC<MatchRecapModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'stats' | 'lineups'>('timeline');

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

        {/* Modal Header */}
        <div className="text-center pb-6 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-300">
            <span className="material-symbols-outlined text-[14px]">check_circle</span>
            <span>EL CLÁSICO · LA LIGA MATCHDAY 11 · FULL TIME</span>
          </div>
          <div className="flex items-center justify-center gap-6 my-3">
            <div className="text-right">
              <h3
                style={{ fontFamily: 'Arial' }}
                className="font-extrabold text-2xl sm:text-3xl text-slate-900"
              >
                REAL MADRID
              </h3>
              <p className="text-xs text-amber-700 font-bold">Santiago Bernabéu</p>
            </div>
            <div
              style={{ fontSize: '34px', fontFamily: 'Arial' }}
              className="px-5 py-2 rounded-xl bg-amber-50 border border-amber-400 font-black text-amber-600 shadow-2xs"
            >
              3 – 2
            </div>
            <div className="text-left">
              <h3
                style={{ fontFamily: 'Arial' }}
                className="font-extrabold text-2xl sm:text-3xl text-slate-700"
              >
                Elche
              </h3>
              <p className="text-xs text-slate-500 font-bold">Away</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 font-medium">Attendance: 81,044 (Capacity Maximum) • Referee: Sánchez Martínez</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 my-6">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'timeline'
                ? 'text-amber-700 border-b-2 border-amber-500'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Match Timeline
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'stats'
                ? 'text-amber-700 border-b-2 border-amber-500'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Match Telemetry (xG)
          </button>
          <button
            onClick={() => setActiveTab('lineups')}
            className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'lineups'
                ? 'text-amber-700 border-b-2 border-amber-500'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Lineups &amp; Ratings
          </button>
        </div>

        {/* Tab 1: Timeline */}
        {activeTab === 'timeline' && (
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-3.5 rounded-xl bg-amber-50/60 border border-amber-200">
              <span className="font-display font-black text-base text-amber-600 w-10">18'</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-sm">⚽ GOAL! Real Madrid 1 - 0</span>
                  <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-900 text-[10px] font-bold">J. Bellingham</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  High turnover forced by Valverde. Vinícius Jr drives down the left byline and squares a precision ground cross for Bellingham's sliding finish into the bottom corner.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3.5 rounded-xl bg-amber-50/60 border border-amber-200">
              <span className="font-display font-black text-base text-amber-600 w-10">54'</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-sm">⚽ GOAL! Real Madrid 2 - 0</span>
                  <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-900 text-[10px] font-bold">Vinícius Jr.</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Sensational solo magic: Vinícius receives on the halfway line, executes a rapid stepover sequence past Koundé, and curls an unstoppable strike into the top right stanchion.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-display font-black text-base text-slate-400 w-10">68'</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-700 text-sm">⚽ Goal Barcelona 2 - 1</span>
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 text-[10px] font-bold">R. Lewandowski</span>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Header from an indirect free kick deflected off the far upright into the net.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3.5 rounded-xl bg-gradient-to-r from-amber-100/60 to-yellow-50 border border-amber-300">
              <span className="font-display font-black text-base text-amber-700 w-10">82'</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-sm">⚽ GOAL! Real Madrid 3 - 1</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-extrabold">K. Mbappé</span>
                </div>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
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
                  <span className="text-amber-600 font-stat">{stat.rm}</span>
                  <span className="text-slate-700 uppercase tracking-wider">{stat.label}</span>
                  <span className="text-slate-400 font-stat">{stat.fcb}</span>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden flex border border-slate-200">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-400" style={{ width: `${stat.rmPct}%` }} />
                  <div className="h-full bg-slate-300 flex-1" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Lineups */}
        {activeTab === 'lineups' && (
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-display font-bold text-sm text-amber-800 mb-3 uppercase">Real Madrid (4-3-1-2 Diamond)</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between items-center shadow-2xs">
                  <span>1. Courtois (GK)</span>
                  <span className="font-bold text-amber-600">8.4</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between items-center shadow-2xs">
                  <span>2. Carvajal</span>
                  <span className="font-bold text-slate-800">8.1</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between items-center shadow-2xs">
                  <span>22. Rüdiger</span>
                  <span className="font-bold text-slate-800">8.5</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between items-center shadow-2xs">
                  <span>3. Militão</span>
                  <span className="font-bold text-slate-800">8.2</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between items-center shadow-2xs">
                  <span>23. Mendy</span>
                  <span className="font-bold text-slate-800">7.9</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between items-center shadow-2xs">
                  <span>8. Valverde</span>
                  <span className="font-bold text-amber-600">8.8</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between items-center shadow-2xs">
                  <span>14. Tchouaméni</span>
                  <span className="font-bold text-slate-800">8.3</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between items-center shadow-2xs">
                  <span>6. Camavinga</span>
                  <span className="font-bold text-slate-800">8.4</span>
                </div>
                <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-300 flex justify-between items-center shadow-2xs">
                  <span className="font-bold text-amber-900">5. Bellingham ⭐</span>
                  <span className="font-bold text-amber-700">9.2</span>
                </div>
                <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-300 flex justify-between items-center shadow-2xs">
                  <span className="font-bold text-amber-900">7. Vinícius Jr.</span>
                  <span className="font-bold text-amber-700">9.3</span>
                </div>
                <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-300 flex justify-between items-center shadow-2xs">
                  <span className="font-bold text-amber-900">9. Mbappé</span>
                  <span className="font-bold text-amber-700">9.1</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
          >
            Close Recap
          </button>
        </div>
      </div>
    </div>
  );
};
