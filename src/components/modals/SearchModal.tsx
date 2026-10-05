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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white border border-amber-300 rounded-2xl p-6 shadow-2xl space-y-4 text-slate-900">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 bg-slate-50 border border-slate-300 px-4 py-3 rounded-xl focus-within:border-amber-400 focus-within:ring-1 focus-within:ring-amber-400">
          <span className="material-symbols-outlined text-amber-500 text-[22px]">search</span>
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search players (Mbappé, Jude), news, tickets, Bernabéu tour..."
            className="flex-1 bg-transparent text-slate-900 text-sm focus:outline-none placeholder-slate-400"
          />
          <button
            onClick={onClose}
            className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-600 hover:text-slate-900 cursor-pointer"
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
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 border border-slate-200 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[14px] text-amber-600">confirmation_number</span>
            <span>UCL Dortmund Tickets</span>
          </button>
          <button
            onClick={() => {
              onOpenMatchRecap();
              onClose();
            }}
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 border border-slate-200 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[14px] text-amber-600">sports_soccer</span>
            <span>El Clásico 3-1 Recap</span>
          </button>
          <button
            onClick={() => {
              onOpenStadiumTour();
              onClose();
            }}
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 border border-slate-200 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[14px] text-amber-600">stadium</span>
            <span>Bernabéu 360° Tour</span>
          </button>
        </div>

        {/* Player Results */}
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-2">
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
                  className="p-2.5 rounded-xl hover:bg-amber-50 flex items-center justify-between cursor-pointer transition-colors border border-transparent hover:border-amber-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center border border-amber-200">
                      {p.number}
                    </div>
                    <div>
                      <span className="font-display font-bold text-sm text-slate-900">{p.name}</span>
                      <span className="text-xs text-slate-500 ml-2">{p.role}</span>
                    </div>
                  </div>
                  <span className="text-xs text-amber-700 font-bold">Inspect →</span>
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
