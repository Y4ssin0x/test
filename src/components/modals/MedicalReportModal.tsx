import React from 'react';

interface MedicalReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MedicalReportModal: React.FC<MedicalReportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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

        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-xs uppercase tracking-wider border border-emerald-500/30">
            SANITAS MEDICAL COMMUNIQUÉ
          </span>
          <span className="text-xs text-slate-400">CIUDAD REAL MADRID · VALDEBEBAS</span>
        </div>
        <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
          Full Squad Clearance: Peak Physical Conditioning Ahead of Matchday
        </h3>
        <p className="text-xs text-slate-300 mt-2">
          Published: Today, 11:30 CET • Real Madrid Medical Services &amp; Sanitas Athletic Performance Department
        </p>

        {/* Squad Status Banner */}
        <div className="my-6 p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl shrink-0">
            <span className="material-symbols-outlined text-[28px]">verified</span>
          </div>
          <div>
            <div className="text-xs uppercase font-extrabold tracking-wider text-emerald-400">
              SQUAD READINESS: 100% AVAILABLE
            </div>
            <p className="text-xs text-slate-200 mt-0.5">
              Zero injury reports. Entire 23-man first-team roster declared fully fit for the upcoming Champions League and La Liga fixtures.
            </p>
          </div>
        </div>

        {/* Report Content */}
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            Following exhaustive tests administered by the Real Madrid Sanitas Medical Services, the first-team squad completed high-intensity anaerobic interval assessments under Head of Fitness Antonio Pintus.
          </p>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <h4 className="font-display font-bold text-white uppercase text-xs text-[#f2ca50]">
              Pintus Aerobic &amp; Kinetic Highlights:
            </h4>
            <ul className="space-y-1.5 list-disc list-inside text-slate-300">
              <li>VO2 Max averages across midfielders exceeded 68 ml/kg/min.</li>
              <li>Fede Valverde recorded the highest aerobic recovery rate within 45 seconds of peak exertion.</li>
              <li>Goalkeeping unit under Luis Llopis demonstrated sub-210ms reaction latencies on point-blank ballistic reflex drills.</li>
              <li>Cryotherapy and hyperbaric recovery chamber routines completed with zero muscular fatigue markers.</li>
            </ul>
          </div>

          <p className="text-[11px] text-slate-400 italic">
            "The physical parameters observed in Valdebebas represent the highest conditioning indices recorded at this stage of the campaign over the last five seasons." — Sanitas Athletic Directorate.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-[#f2ca50] text-[#241a00] font-bold text-xs uppercase tracking-wider hover:bg-[#d4af37] transition-all cursor-pointer"
          >
            Close Bulletin
          </button>
        </div>
      </div>
    </div>
  );
};
