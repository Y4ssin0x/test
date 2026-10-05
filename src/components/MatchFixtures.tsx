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
      className="relative z-10 w-full bg-[#050812]/90 backdrop-blur-md py-20 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-blue-400 font-stat">
                SCHEDULE &amp; RESULTS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
              MATCH TELEMETRY &amp; FIXTURES
            </h2>
          </div>
          <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
            SEASON 2024/25 • ALL COMPETITIONS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Last Match */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded bg-white/10 text-xs font-bold uppercase tracking-wider text-slate-300">
                LA LIGA · FT
              </span>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">check_circle</span> VICTORY
              </span>
            </div>
            <div className="py-4 text-center">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                EL CLÁSICO · SANTIAGO BERNABÉU
              </div>
              <div className="text-3xl font-display font-black text-white tracking-wider my-2">
                REAL MADRID <span className="text-[#f2ca50] mx-1">3 – 1</span> FCB
              </div>
              <p className="text-xs text-slate-400 mt-2">Bellingham 18', Vinícius Jr. 54', Mbappé 82'</p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-semibold">Possession: 58%</span>
              <button
                onClick={onOpenMatchRecap}
                type="button"
                className="text-xs font-bold text-[#f2ca50] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Match Recap</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Next Fixture (Highlighted) */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden ring-2 ring-[#f2ca50]/40 bg-gradient-to-b from-[#182246] to-[#111832] shadow-[0_0_30px_rgba(242,202,80,0.15)]">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#f2ca50] text-[#241a00] text-[10px] font-extrabold uppercase tracking-wider rounded-bl-lg shadow-md">
              PRIMARY FIXTURE
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded bg-blue-500/20 text-secondary text-xs font-bold uppercase tracking-wider border border-blue-500/30">
                UCL ROUND OF 16
              </span>
            </div>
            <div className="py-4 text-center">
              <div className="text-xs uppercase tracking-wider text-[#f2ca50] font-bold mb-2">
                TUE · 21:00 CET · SANTIAGO BERNABÉU
              </div>
              <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-wide my-2">
                REAL MADRID <span className="text-slate-500 font-sans text-xl">vs</span> DORTMUND
              </div>
              <p className="text-xs text-slate-300 mt-2">UEFA Champions League Knockout Phase</p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={onOpenTickets}
                type="button"
                className="w-full text-center py-2.5 rounded-lg bg-[#f2ca50] hover:bg-[#d4af37] text-[#241a00] font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                Priority Tickets Available
              </button>
            </div>
          </div>

          {/* Upcoming Fixture */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded bg-white/10 text-xs font-bold uppercase tracking-wider text-slate-300">
                LA LIGA · DERBI
              </span>
              <span className="text-xs font-semibold text-slate-400">MATCHDAY 27</span>
            </div>
            <div className="py-4 text-center">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                SUN · 21:00 CET · METROPOLITANO
              </div>
              <div className="text-2xl font-display font-black text-white tracking-wide my-2">
                ATLÉTICO <span className="text-slate-500 font-sans text-xl">vs</span> REAL MADRID
              </div>
              <p className="text-xs text-slate-400 mt-2">El Derbi Madrileño</p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-semibold">Away Allocation</span>
              <button
                onClick={onOpenAwayBallot}
                type="button"
                className="text-xs font-bold text-[#f2ca50] hover:underline flex items-center gap-1 cursor-pointer"
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
