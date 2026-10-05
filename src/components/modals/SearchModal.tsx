import React, { useState, useEffect } from 'react';
import { PLAYERS_DATA, Player } from '../../data/clubData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlayer: (p: Player) => void;
  onOpenMatchRecap: () => void;
  onOpenTickets: () => void;
  onOpenStadiumTour: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPlayer,
  onOpenMatchRecap,
  onOpenTickets,
  onOpenStadiumTour,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const players = Object.values(PLAYERS_DATA).filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.role.toLowerCase().includes(query.toLowerCase()) ||
    p.number.includes(query)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#0b1124] border border-[#f2ca50]/30 rounded-2xl p-6 shadow-2xl space-y-4">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl focus-within:border-[#f2ca50]">
          <span className="material-symbols-outlined text-[#f2ca50] text-[22px]">search</span>
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search players (Mbappé, Jude), news, tickets, Bernabéu tour..."
            className="flex-1 bg-transparent text-white text-sm focus:outline-none placeholder-slate-400"
          />
          <button
            onClick={onClose}
            className="text-xs bg-white/10 px-2 py-1 rounded text-slate-400 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            onClick={() => {
              onOpenTickets();
              onClose();
            }}
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#f2ca50]/20 text-slate-300 hover:text-[#f2ca50] border border-white/10 flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[14px]">confirmation_number</span>
            <span>UCL Dortmund Tickets</span>
          </button>
          <button
            onClick={() => {
              onOpenMatchRecap();
              onClose();
            }}
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#f2ca50]/20 text-slate-300 hover:text-[#f2ca50] border border-white/10 flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[14px]">sports_soccer</span>
            <span>El Clásico 3-1 Recap</span>
          </button>
          <button
            onClick={() => {
              onOpenStadiumTour();
              onClose();
            }}
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#f2ca50]/20 text-slate-300 hover:text-[#f2ca50] border border-white/10 flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[14px]">stadium</span>
            <span>Bernabéu 360° Tour</span>
          </button>
        </div>

        {/* Player Results */}
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-2">
            PLAYERS &amp; SQUAD ROSTER
          </span>
          <div className="space-y-1.5 max-h-60 overflow-y-auto">
            {players.length > 0 ? (
              players.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectPlayer(p);
                    onClose();
                  }}
                  className="p-2.5 rounded-xl hover:bg-white/10 flex items-center justify-between cursor-pointer transition-colors border border-transparent hover:border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f2ca50]/20 text-[#f2ca50] font-bold text-xs flex items-center justify-center">
                      {p.number}
                    </div>
                    <div>
                      <span className="font-display font-bold text-sm text-white">{p.name}</span>
                      <span className="text-xs text-slate-400 ml-2">{p.role}</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#f2ca50] font-bold">Inspect →</span>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-400 py-3 text-center">No matching players found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
