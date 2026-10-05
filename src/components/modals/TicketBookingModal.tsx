import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface TicketBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenMembership: () => void;
}

interface Sector {
  id: string;
  name: string;
  price: number;
  available: number;
  view: string;
}

const SECTORS: Sector[] = [
  { id: 'tribuna', name: 'Tribuna Lateral Oeste', price: 145, available: 18, view: 'Benchline & Tunnel View' },
  { id: 'grada', name: 'Grada Fans Animación (Fondo Sur)', price: 85, available: 6, view: 'Core Chanting Atmosphere' },
  { id: 'lateral', name: 'Lateral Este · Nivel 1', price: 110, available: 24, view: 'Optimal Tactical Perspective' },
  { id: 'skybar', name: 'SkyBar 980 VIP Hospitality', price: 450, available: 4, view: 'Michelin Dining & Terrace Pass' }
];

export const TicketBookingModal: React.FC<TicketBookingModalProps> = ({
  isOpen,
  onClose,
  onOpenMembership,
}) => {
  const [selectedSector, setSelectedSector] = useState<Sector>(SECTORS[0]);
  const [ticketCount, setTicketCount] = useState<number>(1);
  const [isMadridista, setIsMadridista] = useState<boolean>(true);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  if (!isOpen) return null;

  const discountMultiplier = isMadridista ? 0.85 : 1.0;
  const unitPrice = Math.round(selectedSector.price * discountMultiplier);
  const totalPrice = unitPrice * ticketCount;

  const handleConfirm = () => {
    setBookingConfirmed(true);
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#f2ca50', '#ffffff', '#3b82f6'],
    });
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0b1124] border border-[#f2ca50]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#f2ca50] hover:text-black flex items-center justify-center text-slate-300 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {!bookingConfirmed ? (
          <>
            {/* Header */}
            <div className="mb-6 border-b border-white/10 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-500/30">
                <span className="material-symbols-outlined text-[14px]">confirmation_number</span>
                <span>UEFA CHAMPIONS LEAGUE · ROUND OF 16</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                REAL MADRID <span className="text-slate-400 font-sans text-xl">vs</span> BORUSSIA DORTMUND
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Tuesday, 21:00 CET • Santiago Bernabéu Stadium • 48h Priority Access Window
              </p>
            </div>

            {/* Step 1: Choose Sector */}
            <div className="space-y-4 mb-6">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-300 block">
                1. Select Stadium Sector
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SECTORS.map((sec) => {
                  const isSelected = sec.id === selectedSector.id;
                  return (
                    <div
                      key={sec.id}
                      onClick={() => setSelectedSector(sec)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[#182246] border-[#f2ca50] ring-1 ring-[#f2ca50]/40'
                          : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-white">{sec.name}</span>
                        <span className="font-stat text-sm font-extrabold text-[#f2ca50]">
                          €{sec.price}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">{sec.view}</p>
                      <span className="text-[10px] text-emerald-400 font-semibold mt-1 block">
                        ● {sec.available} seats remaining
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Quantity & Member Discount */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-black/40 border border-white/10 mb-6">
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-300 block mb-2">
                  2. Number of Tickets
                </label>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setTicketCount(num)}
                      className={`w-9 h-9 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                        ticketCount === num
                          ? 'bg-[#f2ca50] text-[#241a00]'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-300 block mb-2">
                  Madridista Member Perk
                </label>
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isMadridista}
                    onChange={(e) => setIsMadridista(e.target.checked)}
                    className="rounded text-[#f2ca50] focus:ring-[#f2ca50]"
                  />
                  <span>Apply 15% Madridista Pass Discount</span>
                </label>
                {!isMadridista && (
                  <button
                    onClick={onOpenMembership}
                    className="text-[11px] text-[#f2ca50] hover:underline mt-1 block cursor-pointer"
                  >
                    Get Madridista Pass to unlock priority discounts →
                  </button>
                )}
              </div>
            </div>

            {/* Total Bar & Confirm */}
            <div className="p-4 rounded-xl bg-[#111832] border border-[#f2ca50]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block">Total Due ({ticketCount} {ticketCount > 1 ? 'tickets' : 'ticket'})</span>
                <span className="font-stat text-3xl font-extrabold text-[#f2ca50]">
                  €{totalPrice}
                </span>
                {isMadridista && (
                  <span className="text-[11px] text-emerald-400 ml-2 font-semibold">
                    (Saved €{(selectedSector.price - unitPrice) * ticketCount} with Madridista Pass)
                  </span>
                )}
              </div>

              <button
                onClick={handleConfirm}
                className="btn-gold-glow w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#f2ca50] to-[#d4af37] text-[#241a00] font-bold text-xs uppercase tracking-wider cursor-pointer shadow-lg"
              >
                Instant Priority Reservation
              </button>
            </div>
          </>
        ) : (
          /* Confirmation Pass Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl border border-emerald-500/40">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-white uppercase tracking-tight">
              Tickets Reserved Successfully!
            </h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Your matchday passes have been generated and synced with your Madridista Wallet. A confirmation has also been dispatched to your email.
            </p>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#111832] via-[#182246] to-[#111832] border border-[#f2ca50]/40 max-w-md mx-auto text-left shadow-xl space-y-2">
              <div className="flex justify-between items-center text-xs text-[#f2ca50] font-bold">
                <span>ESTADIO SANTIAGO BERNABÉU</span>
                <span>ENTRY GATE: 42-B</span>
              </div>
              <div className="font-display font-black text-lg text-white">
                REAL MADRID vs BORUSSIA DORTMUND
              </div>
              <div className="text-xs text-slate-300">
                Sector: {selectedSector.name} • {ticketCount} {ticketCount > 1 ? 'Seats' : 'Seat'}
              </div>
              <div className="flex justify-between text-xs text-slate-400 pt-2 border-t border-white/10 font-mono">
                <span>ORDER: #RM-UCL-2025-8842</span>
                <span className="text-white font-bold">PAID: €{totalPrice}</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#f2ca50] text-[#241a00] font-bold text-xs uppercase tracking-wider cursor-pointer hover:bg-[#d4af37]"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
