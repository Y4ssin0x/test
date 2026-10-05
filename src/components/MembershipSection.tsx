import React from 'react';

interface MembershipSectionProps {
  onOpenMembership: () => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onOpenMembership }) => {
  return (
    <section
      id="shop-membership"
      style={{ scrollMarginTop: '80px' }}
      className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden bg-gradient-to-r from-white via-amber-50/70 to-white border-2 border-amber-300 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-4 max-w-2xl relative z-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300">
            <span className="material-symbols-outlined text-[16px] animate-pulse text-amber-600">
              workspace_premium
            </span>
            <span>MADRIDISTA PREMIUM PASS 2025</span>
          </div>

          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight">
            BE PART OF OUR HISTORIC ODYSSEY
          </h3>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Gain exclusive access to the heart of the club. Enjoy 48-hour priority ticket windows for
            UEFA Champions League fixtures at the Santiago Bernabéu, a 15% discount on official
            adidas club kits, and direct streaming of Valdebebas academy matchdays.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
              <span className="material-symbols-outlined text-amber-600 text-[18px]">
                confirmation_number
              </span>
              <span>Priority Tickets</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
              <span className="material-symbols-outlined text-amber-600 text-[18px]">verified</span>
              <span>Welcome Pack Kit</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
              <span className="material-symbols-outlined text-amber-600 text-[18px]">videocam</span>
              <span>RM Play Unlimited</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 shrink-0 flex flex-col items-center gap-2 w-full lg:w-auto">
          <button
            onClick={onOpenMembership}
            type="button"
            className="btn-gold-glow w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-display font-bold text-sm uppercase tracking-widest text-center cursor-pointer shadow-lg hover:from-amber-600 hover:to-yellow-500"
          >
            Join Madridista Premium
          </button>
          <span className="text-xs text-slate-500 font-medium">€35 / year • Cancel anytime</span>
        </div>
      </div>
    </section>
  );
};
