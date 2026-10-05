import React from 'react';

interface MatchFixturesProps {
  onOpenMatchRecap: () => void;
  onOpenTickets: () => void;
  onOpenAwayBallot: () => void;
}

export const MatchFixtures: React.FC<MatchFixturesProps> = ({
  onOpenMatchRecap,
  onOpenTickets,
  onOpenAwayBallot,
}) => {
  return (
    <section
      id="matches"
      style={{ scrollMarginTop: '80px' }}
      className="relative z-10 w-full bg-slate-50/70 backdrop-blur-md py-20 border-y border-amber-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-amber-700 font-stat">
                SCHEDULE &amp; RESULTS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight uppercase">
              MATCH TELEMETRY &amp; FIXTURES
            </h2>
          </div>
          <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
            SEASON 2024/25 • ALL COMPETITIONS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Last Match */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden bg-white/95 border border-slate-200 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700 border border-slate-200">
                LA LIGA · FT
              </span>
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">check_circle</span> VICTORY
              </span>
            </div>
            <div className="py-4 text-center">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
                LA LIGA · SANTIAGO BERNABÉU
              </div>
              <div
                style={{ fontSize: '21px', textAlign: 'center', lineHeight: '34px', fontFamily: 'Arial' }}
                className="font-black text-slate-900 tracking-wider my-2"
              >
                REAL MADRID <span className="text-amber-500 mx-1">3 – 2</span> ELCHE
              </div>
              <p className="text-xs text-slate-500 mt-2 font-medium">Bellingham 18', Vinícius Jr. 54', Mbappé 82'</p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold">Possession: 58%</span>
              <button
                onClick={onOpenMatchRecap}
                type="button"
                className="text-xs font-bold text-amber-700 hover:text-amber-900 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Match Recap</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Next Fixture (Highlighted) */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden border-2 border-amber-400 bg-gradient-to-b from-amber-50/90 via-white to-white shadow-lg ring-2 ring-amber-300/30">
            <div className="absolute top-0 right-0 px-3 py-1 bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider rounded-bl-lg shadow-sm">
              PRIMARY FIXTURE
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300">
                UCL ROUND OF 16
              </span>
            </div>
            <div className="py-4 text-center">
              <div className="text-xs uppercase tracking-wider text-amber-700 font-bold mb-2">
                TUE · 21:00 CET · SANTIAGO BERNABÉU
              </div>
              <div
                style={{ fontFamily: 'Arial', fontSize: '25px' }}
                className="font-black text-slate-900 tracking-wide my-2"
              >
                REAL MADRID <span className="text-slate-400 font-sans text-xl">vs</span> ROMA
              </div>
              <p className="text-xs text-slate-600 mt-2">UEFA Champions League Knockout Phase</p>
            </div>
            <div className="pt-4 border-t border-amber-200/60 flex items-center justify-between">
              <button
                onClick={onOpenTickets}
                type="button"
                className="btn-gold-glow w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                Priority Tickets Available
              </button>
            </div>
          </div>

          {/* Upcoming Fixture */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden bg-white/95 border border-slate-200 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700 border border-slate-200">
                LA LIGA · DERBI
              </span>
              <span className="text-xs font-semibold text-slate-500">MATCHDAY 27</span>
            </div>
            <div className="py-4 text-center">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
                SUN · 21:00 CET · METROPOLITANO
              </div>
              <div
                style={{ fontFamily: 'Arial', fontSize: '21px' }}
                className="font-black text-slate-900 tracking-wide my-2"
              >
                ATLÉTICO <span className="text-slate-400 font-sans text-xl">vs</span> REAL MADRID
              </div>
              <p className="text-xs text-slate-500 mt-2 font-medium">El Derbi Madrileño</p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold">Away Allocation</span>
              <button
                onClick={onOpenAwayBallot}
                type="button"
                className="text-xs font-bold text-amber-700 hover:text-amber-900 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Member Ballot</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
