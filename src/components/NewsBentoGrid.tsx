import React from 'react';

interface NewsBentoGridProps {
  onOpenTacticalBlueprint: () => void;
  onOpenSynergyModal: () => void;
  onOpenStadiumTour: () => void;
  onOpenMedicalReport: () => void;
}

export const NewsBentoGrid: React.FC<NewsBentoGridProps> = ({
  onOpenTacticalBlueprint,
  onOpenSynergyModal,
  onOpenStadiumTour,
  onOpenMedicalReport,
}) => {
  return (
    <section
      id="news"
      style={{ scrollMarginTop: '80px' }}
      className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-amber-700 font-stat">
              DISPATCHES &amp; REPORTING
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight uppercase">
            LATEST FROM VALDEBEBAS
          </h2>
        </div>
        <button
          onClick={onOpenTacticalBlueprint}
          type="button"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:text-amber-900 uppercase tracking-wider transition-colors group cursor-pointer"
        >
          <span>View All News</span>
          <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
            trending_flat
          </span>
        </button>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Tactical Blueprint (Large Card - 8 Cols) */}
        <article
          onClick={onOpenTacticalBlueprint}
          className="glass-card md:col-span-8 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-300/15 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          
          <div className="relative z-20 flex items-center justify-between mb-8">
            <span className="px-3 py-1 rounded-md bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider border border-amber-300">
              MATCH REPORT
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">schedule</span> 2 HOURS AGO
            </span>
          </div>

          <div className="relative z-20 space-y-3">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
              Tactical Blueprint for the UCL Quarter-Final Clash: Valdebebas Preparation
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-2">
              An in-depth tactical breakdown of Carlo Ancelotti’s high-tempo counter-press, transition
              recovery, and the dedicated setup perfected behind closed doors in the Ciudad Real
              Madrid facilities.
            </p>
            <div className="pt-4 flex items-center justify-between border-t border-slate-200">
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-[10px] border border-amber-200">
                  RM
                </span>
                Senior Club Analyst
              </span>
              <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-amber-400 group-hover:text-slate-950 flex items-center justify-center text-slate-700 transition-all shadow-sm">
                <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
              </span>
            </div>
          </div>
        </article>

        {/* Card 2: Lethal Attacking Synergy (4 Cols) */}
        <article
          onClick={onOpenSynergyModal}
          className="glass-card md:col-span-4 rounded-2xl p-6 flex flex-col justify-between group cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider border border-amber-300">
                TACTICAL SYNERGY
              </span>
              <span className="text-xs text-slate-500 font-medium">ANALYSIS</span>
            </div>
            <h4 className="font-display font-bold text-xl text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
              Vinícius Jr. &amp; Mbappé: Lethal Counter-Attack Evolution
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
              Unlocking telepathic movement across the final third: dissecting dynamic interchanges
              dismantling opposing defenses across the continent.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200 grid grid-cols-2 text-center bg-amber-50/60 rounded-xl py-3 border border-amber-200/50">
            <div>
              <span className="font-stat text-2xl font-extrabold text-amber-600">49</span>
              <p className="text-[10px] uppercase font-bold text-slate-500">COMBINED GOALS</p>
            </div>
            <div className="border-l border-amber-200">
              <span className="font-stat text-2xl font-extrabold text-slate-800">18</span>
              <p className="text-[10px] uppercase font-bold text-slate-500">ASSISTS</p>
            </div>
          </div>
        </article>

        {/* Card 3: Bernabéu 360 (4 Cols) */}
        <article
          onClick={onOpenStadiumTour}
          className="glass-card md:col-span-4 rounded-2xl p-6 flex flex-col justify-between group cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider border border-amber-300">
                BERNABÉU 360
              </span>
              <span className="text-xs text-amber-700 font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">view_in_ar</span> 360° TOUR
              </span>
            </div>
            <h4 className="font-display font-bold text-xl text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
              Under the Retractable Roof: Inside the World’s Modern Cathedral
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
              Experience the automated underground greenhouse pitch, kinetic roof panels, and the
              immersive 360-degree LED halo screen in ultra-resolution.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200">
            <button
              className="w-full py-2.5 rounded-lg bg-slate-100 hover:bg-amber-400 hover:text-slate-950 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:border-amber-300 cursor-pointer text-slate-800"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">explore</span>
              <span>Launch Virtual Tour</span>
            </button>
          </div>
        </article>

        {/* Card 4: Medical Report (8 Cols) */}
        <article
          onClick={onOpenMedicalReport}
          className="glass-card md:col-span-8 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 group cursor-pointer"
        >
          <div className="w-full sm:w-1/3 h-44 rounded-xl bg-amber-50 border border-amber-200/80 flex flex-col items-center justify-center text-center p-4 shrink-0 group-hover:border-amber-400 transition-colors">
            <span className="material-symbols-outlined text-4xl text-amber-600 mb-2 animate-pulse">
              medical_services
            </span>
            <span className="text-xs uppercase font-bold text-slate-800">SANITAS MEDICAL</span>
            <span className="text-[11px] text-amber-700 font-semibold mt-1">SQUAD READINESS 100%</span>
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px] uppercase tracking-wider border border-emerald-300">
                FITNESS REPORT
              </span>
              <span className="text-xs text-slate-500">OFFICIAL COMMUNIQUÉ</span>
            </div>
            <h4 className="font-display font-bold text-xl text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
              Full Squad Clearance: Peak Physical Conditioning Ahead of Matchday
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              The club's medical staff confirmed that all first-team players completed high-intensity
              fitness drills under Antonio Pintus and Luis Llopis at optimal kinetic metrics.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-amber-700 group-hover:translate-x-1 transition-transform">
              <span>Read Full Medical Bulletin</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
