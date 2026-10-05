import React, { useState } from 'react';

interface PartnersAndFooterProps {
  onOpenStadiumTour: () => void;
  onOpenMembership: () => void;
  onOpenTickets: () => void;
}

export const PartnersAndFooter: React.FC<PartnersAndFooterProps> = ({
  onOpenStadiumTour,
  onOpenMembership,
  onOpenTickets,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="relative z-10 w-full bg-[#050812] border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Official Club Partners Strip */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-10 mb-12 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">stars</span>
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-300">
              OFFICIAL MAIN PARTNERS
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-8 text-xs font-bold tracking-widest text-slate-400 uppercase">
            <span className="hover:text-[#f2ca50] transition-colors cursor-pointer">ADIDAS</span>
            <span className="hover:text-[#f2ca50] transition-colors cursor-pointer">EMIRATES</span>
            <span className="hover:text-[#f2ca50] transition-colors cursor-pointer">HP</span>
            <span className="hover:text-[#f2ca50] transition-colors cursor-pointer">BMW</span>
            <span className="hover:text-[#f2ca50] transition-colors cursor-pointer">MAHOU</span>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          {/* Newsletter Signup (6 Cols) */}
          <div className="md:col-span-6 space-y-4">
            <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider">
              MADRIDISTA NEWSLETTER
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Receive official team announcements, matchday access passes, exclusive interviews, and
              priority Bernabéu ticketing directly to your inbox.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-lg text-emerald-300 text-xs font-semibold flex items-center gap-2 max-w-md">
                <span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span>
                <span>¡Bienvenido! Subscribed to official Madridista dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-md">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f2ca50] focus:ring-1 focus:ring-[#f2ca50]"
                  placeholder="Enter Madridista email"
                  required
                  type="email"
                />
                <button
                  className="px-5 py-2.5 rounded-lg bg-[#f2ca50] hover:bg-[#d4af37] text-[#241a00] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md shrink-0"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Links Col 1 (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs uppercase font-extrabold tracking-widest text-[#f2ca50]">
              CLUB &amp; STADIUM
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={onOpenStadiumTour}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Bernabéu Tour &amp; Experience
                </button>
              </li>
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Real Madrid Foundation
                </a>
              </li>
              <li>
                <a href="#squad" className="hover:text-white transition-colors">
                  La Fábrica Academy
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenMembership}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Corporate Hospitality
                </button>
              </li>
            </ul>
          </div>

          {/* Links Col 2 (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs uppercase font-extrabold tracking-widest text-[#f2ca50]">
              MEMBERSHIP
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={onOpenMembership}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Madridista Premium Pass
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTickets}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Season Ticket Portal
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenMembership}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Member Community
                </button>
              </li>
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Support &amp; FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2025 Real Madrid C.F. All rights reserved.{' '}
            <span className="text-[#f2ca50] font-bold">¡Hala Madrid y nada más!</span>
          </p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-slate-300 transition-colors">
              Legal Notice
            </a>
            <a href="#hero" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#hero" className="hover:text-slate-300 transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
