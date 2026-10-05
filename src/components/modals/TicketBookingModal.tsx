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
      colors: ['#f2ca50', '#ffffff', '#eab308', '#d4af37'],
    });
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-amber-300 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {!bookingConfirmed ? (
          <>
            {/* Header */}
            <div className="mb-6 border-b border-slate-200 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
                <span className="material-symbols-outlined text-[14px] text-amber-600">confirmation_number</span>
                <span>UEFA CHAMPIONS LEAGUE · ROUND OF 16</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight">
                REAL MADRID <span className="text-slate-400 font-sans text-xl">vs</span> AS ROMA
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Tuesday, 21:00 CET • Santiago Bernabéu Stadium • 48h Priority Access Window
              </p>
            </div>

            {/* Step 1: Choose Sector */}
            <div className="space-y-4 mb-6">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block">
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
                          ? 'bg-amber-50 border-amber-400 ring-1 ring-amber-400 shadow-sm'
                          : 'bg-slate-50 border-slate-200 hover:border-amber-300'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-slate-900">{sec.name}</span>
                        <span className="font-stat text-sm font-extrabold text-amber-600">
                          €{sec.price}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1">{sec.view}</p>
                      <span className="text-[10px] text-emerald-700 font-semibold mt-1 block">
                        ● {sec.available} seats remaining
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Quantity & Member Discount */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                  2. Number of Tickets
                </label>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setTicketCount(num)}
                      className={`w-9 h-9 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                        ticketCount === num
                          ? 'bg-amber-400 text-slate-950 font-extrabold shadow-sm'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                  Madridista Member Perk
                </label>
                <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isMadridista}
                    onChange={(e) => setIsMadridista(e.target.checked)}
                    className="rounded text-amber-500 focus:ring-amber-400"
                  />
                  <span>Apply 15% Madridista Pass Discount</span>
                </label>
                {!isMadridista && (
                  <button
                    onClick={onOpenMembership}
                    className="text-[11px] text-amber-700 hover:underline mt-1 block cursor-pointer font-medium"
                  >
                    Get Madridista Pass to unlock priority discounts →
                  </button>
                )}
              </div>
            </div>

            {/* Total Bar & Confirm */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 via-white to-amber-50/60 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div>
                <span className="text-xs text-slate-500 block">Total Due ({ticketCount} {ticketCount > 1 ? 'tickets' : 'ticket'})</span>
                <span className="font-stat text-3xl font-extrabold text-amber-600">
                  €{totalPrice}
                </span>
                {isMadridista && (
                  <span className="text-[11px] text-emerald-700 ml-2 font-semibold">
                    (Saved €{(selectedSector.price - unitPrice) * ticketCount} with Madridista Pass)
                  </span>
                )}
              </div>

              <button
                onClick={handleConfirm}
                className="btn-gold-glow w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md"
              >
                Instant Priority Reservation
              </button>
            </div>
          </>
        ) : (
          /* Confirmation Pass Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-3xl border border-emerald-300 shadow-sm">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-slate-900 uppercase tracking-tight">
              Tickets Reserved Successfully!
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Your matchday passes have been generated and synced with your Madridista Wallet. A confirmation has also been dispatched to your email.
            </p>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-amber-50 border border-amber-300 max-w-md mx-auto text-left shadow-md space-y-2">
              <div className="flex justify-between items-center text-xs text-amber-800 font-bold">
                <span>ESTADIO SANTIAGO BERNABÉU</span>
                <span>ENTRY GATE: 42-B</span>
              </div>
              <div className="font-display font-black text-lg text-slate-900">
                REAL MADRID vs AS ROMA
              </div>
              <div className="text-xs text-slate-600">
                Sector: {selectedSector.name} • {ticketCount} {ticketCount > 1 ? 'Seats' : 'Seat'}
              </div>
              <div className="flex justify-between text-xs text-slate-500 pt-2 border-t border-slate-200 font-mono">
                <span>ORDER: #RM-UCL-2025-8842</span>
                <span className="text-slate-900 font-bold">PAID: €{totalPrice}</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer shadow-sm"
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
