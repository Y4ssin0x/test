import React, { useState } from 'react';

interface NavbarProps {
  onOpenNotifications: () => void;
  onOpenSearch: () => void;
  onOpenMembership: () => void;
  onOpenTickets: () => void;
  unreadNotificationsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenNotifications,
  onOpenSearch,
  onOpenMembership,
  onOpenTickets,
  unreadNotificationsCount,
}) => {
  const [lang, setLang] = useState<'EN' | 'ES' | 'FR'>('EN');
  const [showLangMenu, setShowLangMenu] = useState(false);

  const crestUrl =
    'https://lh3.googleusercontent.com/aida/AEtjO1X4Iu8gO_WVzCHehc6aal2-MuX6THdPbOGHYpzYtqPrxcz5xb89R04qO4LJbQqXpBXC5PiCCep0kuDkyFZzLr7NlbJns81Dk6GQP419FtdMU2YEBXgkVTqLboWv5NB0DQ-lp2A7JlJQa2q5erLbyC4wdk95C50lMYqDpxSOWe-GwhqQP8wkxxg2z-rZOHj7tVdooRFcDPbi8915oClREGJVW_vmbM2P7t9Us9iucFpAATZMmSdsAQO07Fpn';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#070B19]/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Crest & Brand */}
        <a href="#hero" className="flex items-center gap-3.5 group shrink-0">
          <div className="relative w-11 h-11 flex items-center justify-center">
            <img
              alt="Real Madrid 3D Crest"
              className="w-11 h-11 object-contain crest-pulse transition-transform duration-300 group-hover:scale-110"
              src={crestUrl}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-[0.2em] text-white uppercase group-hover:text-primary transition-colors">
              REAL MADRID
            </span>
            <span className="text-[10px] tracking-widest text-[#f2ca50] font-semibold">
              EST. 1902
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <a
            href="#news"
            className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            News
          </a>
          <a
            href="#squad"
            className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Squad
          </a>
          <a
            href="#matches"
            className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Matches
          </a>
          <a
            href="#shop-membership"
            className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Shop
          </a>
          <a
            href="#honours"
            className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Honours
          </a>
        </nav>

        {/* Next Match Countdown Pill & Right Utility */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenTickets}
            type="button"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 hover:border-primary/50 text-xs font-semibold text-blue-200 hover:text-white transition-all shadow-sm group cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#f2ca50] animate-ping" />
            <span className="truncate group-hover:text-primary transition-colors">
              NEXT: Real Madrid vs Dortmund · UCL
            </span>
          </button>

          {/* Search Trigger */}
          <div
            onClick={onOpenSearch}
            className="hidden md:flex items-center relative cursor-pointer group"
          >
            <span className="material-symbols-outlined absolute left-2.5 text-slate-400 text-[18px] group-hover:text-primary transition-colors">
              search
            </span>
            <div className="pl-8 pr-3 py-1.5 text-xs bg-white/5 border border-white/10 group-hover:border-primary/50 rounded-full text-slate-300 w-32 xl:w-44 transition-all flex items-center justify-between">
              <span>Search...</span>
              <kbd className="text-[10px] text-slate-500 bg-white/10 px-1.5 py-0.5 rounded">⌘K</kbd>
            </div>
          </div>

          {/* Search Icon on mobile */}
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="md:hidden p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-primary transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px] block">search</span>
          </button>

          {/* Notification Button */}
          <button
            onClick={onOpenNotifications}
            aria-label="Notifications"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-primary transition-all relative cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px] block">notifications</span>
            {unreadNotificationsCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#f2ca50]" />
            )}
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              aria-label="Language selector"
              className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold uppercase transition-all cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">language</span> {lang}
            </button>
            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-28 bg-[#111832] border border-white/10 rounded-xl shadow-2xl py-1 z-50">
                {(['EN', 'ES', 'FR'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setShowLangMenu(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-semibold hover:bg-white/10 flex items-center justify-between ${
                      lang === l ? 'text-primary' : 'text-slate-300'
                    }`}
                  >
                    <span>{l === 'EN' ? 'English' : l === 'ES' ? 'Español' : 'Français'}</span>
                    {lang === l && <span className="text-[10px]">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* User Profile Avatar / Membership Access */}
          <button
            onClick={onOpenMembership}
            className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f2ca50] flex items-center justify-center text-[#241a00] font-bold shadow-md hover:scale-105 transition-transform cursor-pointer"
            title="My Madridista Profile"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
