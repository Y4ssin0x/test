import React, { useState } from 'react';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TourFeature {
  id: string;
  name: string;
  tag: string;
  depth: string;
  desc: string;
  specs: string[];
}

const TOUR_FEATURES: TourFeature[] = [
  {
    id: 'hypogeum',
    name: 'Automated Hypogeum Underground Pitch',
    tag: 'WORLD-FIRST ENGINEERING',
    depth: 'Depth: -30 meters',
    desc: 'The pitch splits into 6 kinetic trays and retracts into an underground cavern equipped with horticultural LED systems, automated irrigation, climate moderation, and root oxygenation cameras.',
    specs: [
      '6 Retractable Grass Trays (1,500 tonnes each)',
      'Underground Depth: 30 meters beneath the pitch level',
      'Continuous UV & LED lighting matrix',
      'Transforms the stadium into a concert/NBA venue within 6 hours'
    ]
  },
  {
    id: 'roof',
    name: 'Kinetic Retractable Roof',
    tag: 'ARCHITECTURAL MARVEL',
    depth: 'Elevation: +65 meters',
    desc: 'Two massive motorized membrane panels slide silently across the stadium bowl in just 15 minutes, guaranteeing total acoustic enclosure and weather insulation.',
    specs: [
      'Deployment Time: 15 minutes flat',
      'Dual PTFE high-tensile lightweight acoustic membranes',
      'Wind & precipitation automated sensors'
    ]
  },
  {
    id: 'halo',
    name: '360° Panoramic LED Halo Screen',
    tag: 'IMMERSIVE TELEMETRY',
    depth: 'Perimeter: Full Bowl Ring',
    desc: 'The world’s first full-circumference 360-degree high-density LED ring suspended directly under the inner roof rim, broadcasting instant match telemetry and live player statistics.',
    specs: [
      'Over 3,700 m² of curved ultra-bright LED surface',
      'Zero blind spots from all 81,044 stadium seats',
      'Synchronized matchday light show integrations'
    ]
  },
  {
    id: 'skybar',
    name: 'SkyBar 980 Panoramic Terrace',
    tag: 'EXCLUSIVE HOSPITALITY',
    depth: 'Level: 10th Floor',
    desc: 'A spectacular 700 m² VIP lounge perched over the Castellana and the pitch, seamlessly blending Michelin-caliber dining with nightclub entertainment and panoramic Madrid skyline vistas.',
    specs: [
      'Direct panoramic views into the Bernabéu bowl & Paseo de la Castellana',
      'Private elevator access from Calle Padre Damián',
      'Exclusive to Madridista VIP Hospitality pass holders'
    ]
  }
];

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({ isOpen, onClose }) => {
  const [selectedFeature, setSelectedFeature] = useState<TourFeature>(TOUR_FEATURES[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-amber-300 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider border border-amber-300">
            BERNABÉU 360° SPATIAL EXPLORER
          </span>
          <span className="text-xs text-slate-500 font-medium">ARCHITECTURAL BLUEPRINT</span>
        </div>
        <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight">
          Under the Retractable Roof: Inside the World’s Modern Cathedral
        </h3>
        <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
          Select an engineering node below to inspect how the Santiago Bernabéu was re-engineered into the world’s most advanced multi-functional entertainment colosseum.
        </p>

        {/* Interactive Feature Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          {TOUR_FEATURES.map((feat) => {
            const isSelected = feat.id === selectedFeature.id;
            return (
              <button
                key={feat.id}
                onClick={() => setSelectedFeature(feat)}
                className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-amber-50 border-amber-400 ring-1 ring-amber-400 shadow-sm'
                    : 'bg-slate-50 border-slate-200 hover:border-amber-300'
                }`}
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                  {feat.tag}
                </div>
                <div className="text-xs font-bold text-slate-900 mt-1 line-clamp-2">
                  {feat.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Node Detail Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50/60 via-white to-amber-50/30 border border-amber-200 relative overflow-hidden shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200/80 pb-4 mb-4">
            <div>
              <span className="text-xs text-amber-700 font-bold uppercase tracking-widest block">
                {selectedFeature.depth}
              </span>
              <h4 className="font-display font-extrabold text-xl text-slate-900">
                {selectedFeature.name}
              </h4>
            </div>
            <span className="px-3 py-1 rounded bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider self-start sm:self-auto border border-amber-300">
              OPERATIONAL STATUS: ACTIVE
            </span>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {selectedFeature.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {selectedFeature.specs.map((spec, i) => (
              <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white text-xs text-slate-800 border border-amber-200/60 shadow-2xs">
                <span className="material-symbols-outlined text-amber-600 text-[18px]">verified</span>
                <span>{spec}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => alert('Launching immersive 3D Bernabéu Walkthrough!')}
              className="btn-gold-glow px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">view_in_ar</span>
              <span>Launch 360° Interactive Viewport</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close Explorer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
