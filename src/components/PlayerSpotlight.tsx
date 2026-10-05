import React, { useState } from 'react';
import { PLAYERS_DATA, Player } from '../data/clubData';

interface PlayerSpotlightProps {
  onOpenPlayerDetails: (player: Player) => void;
}

export const PlayerSpotlight: React.FC<PlayerSpotlightProps> = ({ onOpenPlayerDetails }) => {
  const [selectedPlayerId, setSelectedPlayerId] = useState<string>('bellingham');
  const [filter, setFilter] = useState<'all' | 'mid' | 'att'>('all');

  const player = PLAYERS_DATA[selectedPlayerId] || PLAYERS_DATA['bellingham'];

  const playerList = Object.values(PLAYERS_DATA).filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  // Radar chart mathematical conversion
  // Center: (110, 105), Max Radius: 85
  const cx = 110;
  const cy = 105;
  const angles = [
    -Math.PI / 2, // Pace (Top)
    -Math.PI / 6, // Shooting (Top Right)
    Math.PI / 6, // Passing (Bottom Right)
    Math.PI / 2, // Dribbling (Bottom)
    (5 * Math.PI) / 6, // Defending (Bottom Left)
    (-5 * Math.PI) / 6, // Physical (Top Left)
  ];

  const computePoint = (angle: number, val: number) => {
    const r = (val / 100) * 85;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return { x: Math.round(x), y: Math.round(y) };
  };

  const s = player.stats;
  const points = [
    computePoint(angles[0], s.pace),
    computePoint(angles[1], s.shooting),
    computePoint(angles[2], s.passing),
    computePoint(angles[3], s.dribble),
    computePoint(angles[4], s.defending),
    computePoint(angles[5], s.physical),
  ];

  const pointsString = points.map((p) => `${p.x},${p.y}`).join(' ');

  return (
    <section
      id="squad"
      style={{ scrollMarginTop: '80px' }}
      className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Section Header & Tactical Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-amber-700 font-stat">
              DATA INSIGHTS &amp; TELEMETRY
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight uppercase">
            PLAYER SPOTLIGHT · KEY PERFORMER
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 self-start lg:self-auto shadow-2xs">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            type="button"
          >
            All Stars
          </button>
          <button
            onClick={() => setFilter('mid')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
              filter === 'mid'
                ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            type="button"
          >
            Midfielders
          </button>
          <button
            onClick={() => setFilter('att')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
              filter === 'att'
                ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            type="button"
          >
            Attackers
          </button>
        </div>
      </div>

      {/* Spotlight Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Main Featured Player Showcase Card (7 Cols) */}
        <div className="glass-card lg:col-span-7 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden bg-white/95 border border-amber-200/80 shadow-xl">
          {/* Giant Translucent Jersey Watermark */}
          <span className="absolute -right-6 -top-10 font-display text-[200px] text-slate-200/50 font-black select-none pointer-events-none leading-none transition-all duration-500">
            {player.number}
          </span>

          <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center">
            {/* Player Portrait Image */}
            <div className="w-full sm:w-1/2 rounded-xl overflow-hidden shadow-md relative border border-amber-300 shrink-0 bg-slate-100 group">
              <img
                alt={player.name}
                className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                src={player.photo}
              />
              <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-white/95 backdrop-blur-sm text-amber-800 font-bold text-[11px] border border-amber-300 shadow-sm">
                {player.award}
              </div>
            </div>

            {/* Metadata & SVG Radar Performance Chart */}
            <div className="w-full sm:w-1/2 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-1.5 text-amber-700 text-xs uppercase font-bold tracking-wider mb-1">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>{player.role}</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight">
                  {player.name}
                </h3>
                <div className="flex items-center gap-2 text-slate-500 text-xs mt-1 font-medium">
                  <span>{player.nationality}</span>
                  <span>•</span>
                  <span>{player.age} YEARS OLD</span>
                  <span>•</span>
                  <span>{player.appearances} APPS</span>
                </div>
              </div>

              {/* SVG Hexagon Radar Performance Chart */}
              <div className="relative flex flex-col items-center py-2">
                <svg
                  className="w-52 h-44 filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.25)]"
                  viewBox="0 0 220 210"
                >
                  {/* Concentric Background Polygons */}
                  <polygon
                    fill="none"
                    points="110,20 188,65 188,155 110,195 32,155 32,65"
                    stroke="#E2E8F0"
                    strokeWidth="1.5"
                  />
                  <polygon
                    fill="none"
                    points="110,45 162,75 162,135 110,165 58,135 58,75"
                    stroke="#CBD5E1"
                    strokeDasharray="3,3"
                    strokeWidth="1"
                  />
                  <polygon
                    fill="none"
                    points="110,70 136,85 136,115 110,135 84,115 84,85"
                    stroke="#CBD5E1"
                    strokeWidth="1"
                  />

                  {/* Spokes */}
                  <line stroke="#CBD5E1" strokeWidth="1" x1="110" x2="110" y1="105" y2="20" />
                  <line stroke="#CBD5E1" strokeWidth="1" x1="110" x2="188" y1="105" y2="65" />
                  <line stroke="#CBD5E1" strokeWidth="1" x1="110" x2="188" y1="105" y2="155" />
                  <line stroke="#CBD5E1" strokeWidth="1" x1="110" x2="110" y1="105" y2="195" />
                  <line stroke="#CBD5E1" strokeWidth="1" x1="110" x2="32" y1="105" y2="155" />
                  <line stroke="#CBD5E1" strokeWidth="1" x1="110" x2="32" y1="105" y2="65" />

                  {/* Glowing Dynamic Performance Area Polygon */}
                  <g className="radar-pulse">
                    <polygon
                      fill="#F59E0B"
                      fillOpacity="0.25"
                      points={pointsString}
                      stroke="#D97706"
                      strokeWidth="2.5"
                    />
                    {points.map((pt, idx) => (
                      <circle
                        key={idx}
                        cx={pt.x}
                        cy={pt.y}
                        fill="#D97706"
                        r="3.5"
                      />
                    ))}
                  </g>

                  {/* Dynamic Labels */}
                  <text
                    className="fill-slate-600 text-[9px] font-bold"
                    textAnchor="middle"
                    x="110"
                    y="14"
                  >
                    PACE ({s.pace})
                  </text>
                  <text
                    className="fill-slate-600 text-[9px] font-bold"
                    textAnchor="start"
                    x="194"
                    y="66"
                  >
                    SHOOT ({s.shooting})
                  </text>
                  <text
                    className="fill-slate-600 text-[9px] font-bold"
                    textAnchor="start"
                    x="194"
                    y="160"
                  >
                    PASS ({s.passing})
                  </text>
                  <text
                    className="fill-slate-600 text-[9px] font-bold"
                    textAnchor="middle"
                    x="110"
                    y="204"
                  >
                    DRIBBLE ({s.dribble})
                  </text>
                  <text
                    className="fill-slate-600 text-[9px] font-bold"
                    textAnchor="end"
                    x="24"
                    y="160"
                  >
                    DEFEND ({s.defending})
                  </text>
                  <text
                    className="fill-slate-600 text-[9px] font-bold"
                    textAnchor="end"
                    x="24"
                    y="66"
                  >
                    PHYSICAL ({s.physical})
                  </text>
                </svg>
              </div>

              <button
                onClick={() => onOpenPlayerDetails(player)}
                type="button"
                className="w-full py-2 px-3 rounded-lg bg-slate-100 hover:bg-amber-100 border border-slate-200 hover:border-amber-300 text-xs font-bold text-slate-800 hover:text-amber-900 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <span className="material-symbols-outlined text-[16px]">analytics</span>
                <span>Tactical Dossier &amp; Strengths</span>
              </button>
            </div>
          </div>

          {/* Metric KPI Strip */}
          <div className="relative z-10 mt-6 pt-6 border-t border-slate-200 grid grid-cols-4 gap-2 text-center bg-slate-50 rounded-xl p-3 border border-slate-100">
            <div>
              <span className="font-stat text-2xl sm:text-3xl font-extrabold text-amber-600">
                {player.goals}
              </span>
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">GOALS</p>
            </div>
            <div>
              <span className="font-stat text-2xl sm:text-3xl font-extrabold text-slate-800">
                {player.assists}
              </span>
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">ASSISTS</p>
            </div>
            <div>
              <span className="font-stat text-2xl sm:text-3xl font-extrabold text-slate-800">
                {player.passAcc}
              </span>
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">PASS ACC</p>
            </div>
            <div>
              <span className="font-stat text-2xl sm:text-3xl font-extrabold text-amber-600">
                {player.motm}
              </span>
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">UCL MOTM</p>
            </div>
          </div>
        </div>

        {/* Interactive Squad Roster List (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs uppercase font-extrabold tracking-wider text-slate-700">
              SQUAD SELECTION · MATCHDAY
            </span>
            <span className="text-xs text-amber-700 font-bold">CLICK TO INSPECT</span>
          </div>

          {playerList.map((p) => {
            const isSelected = p.id === selectedPlayerId;
            return (
              <div
                key={p.id}
                onClick={() => setSelectedPlayerId(p.id)}
                className={`p-3.5 rounded-xl glass-card flex items-center justify-between cursor-pointer transition-all duration-300 hover:translate-x-1 ${
                  isSelected
                    ? 'border-amber-400 bg-amber-50/80 ring-1 ring-amber-400 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-amber-300 shadow-2xs'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-lg font-display font-extrabold flex items-center justify-center text-lg ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 border border-amber-500'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {p.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-base text-slate-900">{p.name}</span>
                      <span
                        className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          p.category === 'mid'
                            ? 'bg-amber-100 text-amber-900 border border-amber-200'
                            : 'bg-slate-100 text-slate-800 border border-slate-200'
                        }`}
                      >
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      {p.goals} Goals • {p.assists} Assists • {p.stats.physical} Physical
                    </p>
                  </div>
                </div>
                <span
                  className={`material-symbols-outlined text-[20px] transition-colors ${
                    isSelected ? 'text-amber-600' : 'text-slate-400'
                  }`}
                >
                  chevron_right
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
