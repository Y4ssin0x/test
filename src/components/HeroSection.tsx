import React from 'react';

interface HeroSectionProps {
  onOpenMembership: () => void;
  onOpenMatchRecap: () => void;
  onOpenTickets: () => void;
  onOpenStadiumTour: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenMembership,
  onOpenMatchRecap,
  onOpenTickets,
  onOpenStadiumTour,
}) => {
  const heroBg =
    'https://lh3.googleusercontent.com/aida/AEtjO1UFo_-fxRhx31wB1Qw1TXIaFWhXR7Tk2NJlC5NoXoa6oxeUUYO_wc95hfmwnWrUXR6ZuC7Fo89bJwmdlXGFGCqI_uDmDLEBz9BpcQmHDDvVhJ79oDCMC3OoFoQ9bgBXigmRrs2LvL2BDe32KhkQYfwi0h9A8x3QIn-yxQ8xocEQ9xay5qg5NBBRIbgLQ-85uyOrST-BmZ_jfEsFstms-LzTEUzF3E5i7xWDKfoSBey89dJlT2gTwUvDTd8';

  return (
    <section
      id="hero"
      style={{ scrollMarginTop: '80px' }}
      className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Luminous White Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Real Madrid victory celebration at Santiago Bernabéu"
          className="w-full h-full object-cover object-center filter brightness-[1.0] contrast-[1.05] opacity-55"
          src={heroBg}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#FAFAFA]/30 to-[#FAFAFA]/80" />
      </div>

      {/* Floating Stadium Golden Embers */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="ember w-2 h-2 top-[80%] left-[15%]" style={{ animationDuration: '4.8s', animationDelay: '0.2s' }} />
        <div className="ember w-3 h-3 top-[85%] left-[30%]" style={{ animationDuration: '5.5s', animationDelay: '1.1s' }} />
        <div className="ember w-1.5 h-1.5 top-[75%] left-[48%]" style={{ animationDuration: '4.2s', animationDelay: '0.5s' }} />
        <div className="ember w-2.5 h-2.5 top-[82%] left-[68%]" style={{ animationDuration: '5.1s', animationDelay: '1.8s' }} />
        <div className="ember w-2 h-2 top-[78%] left-[84%]" style={{ animationDuration: '6.0s', animationDelay: '0.8s' }} />
        <div className="ember w-1.5 h-1.5 top-[90%] left-[22%]" style={{ animationDuration: '4.6s', animationDelay: '2.2s' }} />
        <div className="ember w-2 h-2 top-[88%] left-[60%]" style={{ animationDuration: '5.8s', animationDelay: '2.7s' }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
        {/* Bernabéu Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-amber-300 mb-6 shadow-sm hover:border-amber-400 transition-colors cursor-pointer"
          onClick={onOpenStadiumTour}
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-amber-900 font-stat">
            OFFICIAL FAN EXPERIENCE · SANTIAGO BERNABÉU
          </span>
        </div>

        {/* Main Headline with Shimmer Gradient */}
        <h1
          style={{ fontSize: '90px' }}
          className="font-display font-extrabold text-[90px] tracking-tight uppercase gold-gradient-text drop-shadow-sm max-w-5xl leading-tight"
        >
          MADRIDISTAS
        </h1>
        <p className="font-display font-bold text-lg sm:text-2xl tracking-widest text-slate-800 mt-2 uppercase">
        </p>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
          Witness the relentless quest for European glory. Exceptional generational talent, unrivaled
          tactical mastery, and the eternal legacy of the world’s greatest football club inside the
          reborn Santiago Bernabéu.
        </p>

        {/* Dual Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenMembership}
            type="button"
            className="btn-gold-glow inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-sm uppercase tracking-wider group cursor-pointer shadow-md hover:from-amber-600 hover:to-yellow-500"
          >
            <span>Explore Membership</span>
            <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
          <button
            onClick={onOpenMatchRecap}
            type="button"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white/95 hover:bg-white border border-slate-200 text-slate-800 font-bold text-sm uppercase tracking-wider transition-all hover:border-amber-400 hover:shadow-md cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-[20px] text-amber-500"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              play_arrow
            </span>
            <span>Watch Match Recap</span>
          </button>
        </div>

        {/* Quick Telemetry Ticker Ribbon */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl text-left">
          <div
            onClick={onOpenMatchRecap}
            className="p-4 rounded-xl bg-white/90 backdrop-blur-md border border-amber-200/80 shadow-sm flex items-center gap-3.5 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[24px]">sports_soccer</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                LAST RESULT
              </span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                Real Madrid 3 – 2 Elche
              </span>
            </div>
          </div>

          <div
            onClick={onOpenTickets}
            className="p-4 rounded-xl bg-white/90 backdrop-blur-md border border-amber-200/80 shadow-sm flex items-center gap-3.5 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[24px]">military_tech</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-amber-700 font-bold block">
                UCL CLASH
              </span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                vs AS Roma · Tue 21:00
              </span>
            </div>
          </div>

          <div
            onClick={onOpenStadiumTour}
            className="p-4 rounded-xl bg-white/90 backdrop-blur-md border border-amber-200/80 shadow-sm flex items-center gap-3.5 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[24px]">stadium</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                BERNABÉU STATUS
              </span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                81,044 Sold Out
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
