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
      <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden bg-gradient-to-r from-[#111832] via-[#182246] to-[#111832] border border-[#f2ca50]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#f2ca50]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-4 max-w-2xl relative z-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#f2ca50]/20 text-[#f2ca50] text-xs font-bold uppercase tracking-wider border border-[#f2ca50]/30">
            <span className="material-symbols-outlined text-[16px] animate-pulse">
              workspace_premium
            </span>
            <span>MADRIDISTA PREMIUM PASS 2025</span>
          </div>

          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
            BE PART OF OUR HISTORIC ODYSSEY
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Gain exclusive access to the heart of the club. Enjoy 48-hour priority ticket windows for
            UEFA Champions League fixtures at the Santiago Bernabéu, a 15% discount on official
            adidas club kits, and direct streaming of Valdebebas academy matchdays.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
              <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">
                confirmation_number
              </span>
              <span>Priority Tickets</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
              <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">verified</span>
              <span>Welcome Pack Kit</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
              <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">videocam</span>
              <span>RM Play Unlimited</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 shrink-0 flex flex-col items-center gap-2 w-full lg:w-auto">
          <button
            onClick={onOpenMembership}
            type="button"
            className="btn-gold-glow w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#f2ca50] to-[#d4af37] text-[#241a00] font-display font-bold text-sm uppercase tracking-widest text-center cursor-pointer shadow-lg"
          >
            Join Madridista Premium
          </button>
          <span className="text-xs text-slate-400 font-medium">€35 / year • Cancel anytime</span>
        </div>
      </div>
    </section>
  );
};
