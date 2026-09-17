import React from "react";

export function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-square max-w-[520px] mx-auto flex items-center justify-center select-none ${className}`}>
      {/* Background Soft Glow Circles */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/60 via-cyan-50/70 to-indigo-100/50 rounded-full blur-2xl -z-10" />
      <div className="absolute w-4/5 h-4/5 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-xl -z-10" />

      {/* Main SVG Composition (Desk, Monitor, Cute Robot) */}
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
        dir="ltr"
        style={{ direction: "ltr" }}
      >
        <defs>
          <linearGradient id="heroBlueGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="heroCyanGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
          <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Central Stage / Desk */}
        <ellipse cx="250" cy="420" rx="190" ry="24" fill="#E2E8F0" />
        <ellipse cx="250" cy="415" rx="160" ry="18" fill="#F1F5F9" />

        {/* Main Coding Monitor */}
        <g filter="url(#cardShadow)">
          {/* Stand */}
          <rect x="235" y="310" width="30" height="70" rx="6" fill="#94A3B8" />
          <ellipse cx="250" cy="380" rx="65" ry="12" fill="#CBD5E1" />
          
          {/* Screen Bezel */}
          <rect x="110" y="140" width="280" height="180" rx="16" fill="#1E293B" stroke="#334155" strokeWidth="4" />
          {/* Inner Display */}
          <rect x="122" y="152" width="256" height="156" rx="10" fill="url(#screenGrad)" />
          
          {/* Window Header */}
          <circle cx="138" cy="166" r="4.5" fill="#EF4444" />
          <circle cx="152" cy="166" r="4.5" fill="#F59E0B" />
          <circle cx="166" cy="166" r="4.5" fill="#10B981" />
          <rect x="190" y="162" width="120" height="8" rx="4" fill="#334155" />

          {/* Code Lines on Screen */}
          <rect x="136" y="184" width="75" height="7" rx="3.5" fill="#38BDF8" />
          <rect x="217" y="184" width="45" height="7" rx="3.5" fill="#F43F5E" />
          <rect x="146" y="200" width="90" height="7" rx="3.5" fill="#34D399" />
          <rect x="242" y="200" width="50" height="7" rx="3.5" fill="#FBBF24" />
          <rect x="146" y="216" width="120" height="7" rx="3.5" fill="#93C5FD" />
          <rect x="156" y="232" width="60" height="7" rx="3.5" fill="#A78BFA" />
          <rect x="136" y="248" width="40" height="7" rx="3.5" fill="#38BDF8" />

          {/* Interactive Run Button & Badge */}
          <rect x="300" y="260" width="66" height="26" rx="8" fill="url(#heroCyanGrad)" />
          <polygon points="318,268 318,278 326,273" fill="#FFFFFF" />
          <rect x="330" y="270" width="24" height="6" rx="3" fill="#FFFFFF" opacity="0.9" />
        </g>

        {/* Friendly Kid-Friendly Robot Assistant */}
        <g className="animate-float" filter="url(#cardShadow)">
          {/* Robot Antenna */}
          <line x1="390" y1="120" x2="390" y2="140" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
          <circle cx="390" cy="115" r="7" fill="#F59E0B" />
          <circle cx="390" cy="115" r="3" fill="#FFFFFF" />

          {/* Robot Head */}
          <rect x="345" y="140" width="90" height="75" rx="20" fill="#FFFFFF" stroke="#0284C7" strokeWidth="3.5" />
          {/* Visor */}
          <rect x="355" y="152" width="70" height="36" rx="12" fill="#0F172A" />
          {/* Robot Eyes (Smiling / Happy) */}
          <ellipse cx="373" cy="170" rx="7" ry="8" fill="#38BDF8" />
          <circle cx="375" cy="167" r="2.5" fill="#FFFFFF" />
          <ellipse cx="407" cy="170" rx="7" ry="8" fill="#38BDF8" />
          <circle cx="409" cy="167" r="2.5" fill="#FFFFFF" />
          {/* Robot Smile */}
          <path d="M383 198 Q390 204 397 198" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />

          {/* Robot Body */}
          <rect x="355" y="222" width="70" height="60" rx="16" fill="url(#heroBlueGrad)" />
          {/* Chest Light / Energy Node */}
          <circle cx="390" cy="248" r="14" fill="#FFFFFF" opacity="0.25" />
          <circle cx="390" cy="248" r="8" fill="#38BDF8" />

          {/* Robot Arms */}
          <path d="M345 235 C330 240 325 255 335 265" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
          <path d="M425 235 C440 240 448 220 440 210" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* Decorative Sparkles */}
        <g fill="#F59E0B" className="animate-pulse-subtle">
          <path d="M210 70 L213 78 L221 81 L213 84 L210 92 L207 84 L199 81 L207 78 Z" />
          <path d="M440 280 L442 285 L447 287 L442 289 L440 294 L438 289 L433 287 L438 285 Z" />
          <path d="M80 230 L82 234 L86 236 L82 238 L80 242 L78 238 L74 236 L78 234 Z" fill="#06B6D4" />
        </g>
      </svg>

      {/* Floating Card 1: Scratch Block (Top Left) */}
      <div className="absolute top-10 left-3 sm:left-6 animate-float pointer-events-none z-20">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#FFAB19] text-white shadow-lg border border-amber-600/30 text-xs font-bold">
          <span className="w-4 h-4 rounded-full bg-white/30 flex items-center justify-center text-[9px]">▶</span>
          <span>when green flag clicked</span>
        </div>
      </div>

      {/* Floating Card 2: AI Model Badge (Top Right) */}
      <div className="absolute top-6 right-3 sm:right-6 animate-float-delayed pointer-events-none z-20">
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white text-slate-800 shadow-lg shadow-purple-500/10 border border-purple-200 text-xs font-bold" dir="ltr">
          <span className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
          </span>
          <div className="flex flex-col text-left">
            <span className="text-purple-950 text-xs font-bold">AI Model</span>
            <span className="text-[9px] text-purple-600 font-medium">Neural Vision</span>
          </div>
        </div>
      </div>

      {/* Floating Card 3: 100% Practical (Bottom Left) */}
      <div className="absolute bottom-16 left-2 sm:left-4 animate-float-delayed pointer-events-none z-20">
        <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white text-slate-800 shadow-lg shadow-emerald-500/10 border border-emerald-200 text-xs font-bold" dir="ltr">
          <div className="w-7 h-7 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm font-bold">
            ✓
          </div>
          <div className="flex flex-col text-left">
            <span className="text-emerald-900 font-bold text-xs">100% Practical</span>
            <span className="text-[10px] text-slate-500 font-normal">Real Projects</span>
          </div>
        </div>
      </div>

      {/* Floating Card 4: Code & Build (Bottom Right) */}
      <div className="absolute bottom-14 right-2 sm:right-6 animate-float pointer-events-none z-20">
        <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white text-slate-800 shadow-lg shadow-blue-500/10 border border-blue-200 text-xs font-bold" dir="ltr">
          <div className="w-7 h-7 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-mono text-xs font-black">
            &lt;/&gt;
          </div>
          <div className="flex flex-col text-left">
            <span className="text-slate-900 font-bold text-xs">Code &amp; Build</span>
            <span className="text-[10px] text-slate-500 font-normal">Python • Web</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TrackIllustration({
  type,
  className = "w-16 h-16",
}: {
  type: string;
  className?: string;
}) {
  switch (type) {
    case "programming":
    case "code":
      return (
        <div className={`rounded-2xl p-3 flex items-center justify-center bg-blue-50 text-blue-600 border border-blue-100 ${className}`}>
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
            <rect x="4" y="6" width="40" height="32" rx="8" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2.5" />
            <circle cx="10" cy="12" r="2" fill="#EF4444" />
            <circle cx="16" cy="12" r="2" fill="#F59E0B" />
            <circle cx="22" cy="12" r="2" fill="#10B981" />
            <path d="M14 26 L20 20 L14 14" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="22" y1="26" x2="30" y2="26" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
            <rect x="22" y="32" width="16" height="2" rx="1" fill="#93C5FD" />
          </svg>
        </div>
      );

    case "web-dev":
    case "globe":
    case "web":
      return (
        <div className={`rounded-2xl p-3 flex items-center justify-center bg-cyan-50 text-cyan-600 border border-cyan-100 ${className}`}>
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
            <rect x="4" y="8" width="40" height="30" rx="8" fill="#CFFAFE" stroke="#0891B2" strokeWidth="2.5" />
            <line x1="4" y1="16" x2="44" y2="16" stroke="#0891B2" strokeWidth="2" />
            <circle cx="9" cy="12" r="1.75" fill="#0891B2" />
            <circle cx="14" cy="12" r="1.75" fill="#0891B2" />
            <circle cx="19" cy="12" r="1.75" fill="#0891B2" />
            <rect x="8" y="20" width="14" height="13" rx="3" fill="#06B6D4" opacity="0.3" />
            <rect x="25" y="20" width="15" height="5" rx="2" fill="#0891B2" />
            <rect x="25" y="28" width="11" height="5" rx="2" fill="#67E8F9" />
          </svg>
        </div>
      );

    case "game-dev":
    case "gamepad":
    case "game":
      return (
        <div className={`rounded-2xl p-3 flex items-center justify-center bg-purple-50 text-purple-600 border border-purple-100 ${className}`}>
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
            <rect x="6" y="12" width="36" height="24" rx="12" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2.5" />
            {/* D-Pad */}
            <path d="M14 21 V27 M11 24 H17" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" />
            {/* Action Buttons */}
            <circle cx="31" cy="21" r="2.5" fill="#F43F5E" />
            <circle cx="36" cy="25" r="2.5" fill="#10B981" />
            <circle cx="27" cy="26" r="2" fill="#F59E0B" />
          </svg>
        </div>
      );

    case "ai":
    case "bot":
      return (
        <div className={`rounded-2xl p-3 flex items-center justify-center bg-indigo-50 text-indigo-600 border border-indigo-100 ${className}`}>
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
            <rect x="10" y="14" width="28" height="24" rx="8" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="2.5" />
            <line x1="24" y1="8" x2="24" y2="14" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="24" cy="7" r="2.5" fill="#F59E0B" />
            {/* Eyes */}
            <rect x="15" y="20" width="6" height="6" rx="3" fill="#4F46E5" />
            <rect x="27" y="20" width="6" height="6" rx="3" fill="#4F46E5" />
            {/* Mouth */}
            <line x1="18" y1="31" x2="30" y2="31" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "robotics":
    case "cpu":
    case "robot":
      return (
        <div className={`rounded-2xl p-3 flex items-center justify-center bg-emerald-50 text-emerald-600 border border-emerald-100 ${className}`}>
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
            <rect x="12" y="12" width="24" height="24" rx="6" fill="#D1FAE5" stroke="#059669" strokeWidth="2.5" />
            <rect x="18" y="18" width="12" height="12" rx="3" fill="#10B981" />
            {/* Pins */}
            <line x1="18" y1="7" x2="18" y2="12" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="24" y1="7" x2="24" y2="12" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="30" y1="7" x2="30" y2="12" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="18" y1="36" x2="18" y2="41" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="24" y1="36" x2="24" y2="41" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="30" y1="36" x2="30" y2="41" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "digital-design":
    case "palette":
    case "design":
    default:
      return (
        <div className={`rounded-2xl p-3 flex items-center justify-center bg-amber-50 text-amber-600 border border-amber-100 ${className}`}>
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
            <path
              d="M24 6C13.5 6 6 13.5 6 24C6 31 11 36 17 36C18.5 36 19.5 35 19.5 33.5C19.5 32.8 19.2 32.2 18.8 31.6C18.4 31 18 30.2 18 29.2C18 27.5 19.5 26 21.2 26H25C33.3 26 40 19.3 40 11C40 8.2 37.8 6 24 6Z"
              fill="#FEF3C7"
              stroke="#D97706"
              strokeWidth="2.5"
            />
            <circle cx="15" cy="16" r="2.5" fill="#EF4444" />
            <circle cx="23" cy="13" r="2.5" fill="#3B82F6" />
            <circle cx="31" cy="16" r="2.5" fill="#10B981" />
            <circle cx="34" cy="22" r="2.5" fill="#8B5CF6" />
          </svg>
        </div>
      );
  }
}
