import React from "react";

export function ProjectIllustration({ type }: { type: string }) {
  switch (type) {
    case "app":
      return (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/70 p-4 flex items-center justify-center relative overflow-hidden border border-blue-100/60">
          <div className="w-48 bg-white rounded-xl shadow-md border border-slate-200/80 p-3 relative">
            <div className="flex items-center gap-1.5 pb-2 border-b border-slate-100">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-mono text-slate-400 ms-auto">task_master.py</span>
            </div>
            <div className="mt-2.5 space-y-2">
              <div className="flex items-center justify-between bg-blue-50/70 p-1.5 rounded-lg border border-blue-100">
                <span className="text-[11px] font-medium text-blue-900">✓ Morning Coding Task</span>
                <span className="text-[9px] bg-blue-200/80 text-blue-800 px-1.5 py-0.5 rounded">Done</span>
              </div>
              <div className="flex items-center justify-between bg-slate-50 p-1.5 rounded-lg">
                <span className="text-[11px] text-slate-700">○ Robot Calibration</span>
                <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">Pending</span>
              </div>
              <div className="flex items-center justify-between bg-slate-50 p-1.5 rounded-lg">
                <span className="text-[11px] text-slate-700">○ AI Model Training</span>
                <span className="text-[9px] bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded">Queue</span>
              </div>
            </div>
          </div>
        </div>
      );

    case "web":
      return (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-cyan-50 to-sky-100/60 p-4 flex items-center justify-center relative overflow-hidden border border-cyan-100/60">
          <div className="w-52 bg-slate-900 rounded-xl shadow-md border border-slate-800 p-3 text-white">
            <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-cyan-400 font-mono ms-auto">space-explorer.org</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-xs shadow-inner">
                🪐
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-100">Solar Explorer</div>
                <div className="text-[9px] text-slate-400">Built with HTML, CSS, JS</div>
              </div>
            </div>
            <div className="mt-2.5 flex gap-1">
              <span className="text-[8px] bg-cyan-950 text-cyan-300 border border-cyan-800 px-1.5 py-0.5 rounded">Orbit Mode</span>
              <span className="text-[8px] bg-blue-950 text-blue-300 border border-blue-800 px-1.5 py-0.5 rounded">3D View</span>
            </div>
          </div>
        </div>
      );

    case "game":
      return (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-purple-50 to-fuchsia-50/70 p-4 flex items-center justify-center relative overflow-hidden border border-purple-100/60">
          <div className="w-52 bg-indigo-950 rounded-xl shadow-md border border-purple-800/60 p-3 text-white relative">
            <div className="flex justify-between items-center text-[10px] text-purple-200 mb-1">
              <span>SCORE: 1,420</span>
              <span>LIVES: ❤️❤️❤️</span>
            </div>
            {/* Mini Game Stage */}
            <div className="h-16 bg-gradient-to-b from-indigo-900 to-slate-900 rounded-lg p-2 relative flex items-end justify-between overflow-hidden border border-indigo-800">
              {/* Stars */}
              <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full opacity-80" />
              <div className="absolute top-3 right-6 w-1 h-1 bg-yellow-200 rounded-full" />
              {/* Game Character */}
              <div className="w-5 h-6 bg-emerald-400 rounded-sm flex items-center justify-center text-[9px] shadow">
                👾
              </div>
              {/* Platform */}
              <div className="w-16 h-2 bg-purple-500 rounded-full mb-1" />
              {/* Collectible Star */}
              <div className="text-yellow-300 text-xs animate-bounce mb-2">⭐</div>
            </div>
            <div className="mt-1.5 text-center text-[9px] text-purple-300 font-mono">Scratch Engine v3.0</div>
          </div>
        </div>
      );

    case "ai":
      return (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50/70 p-4 flex items-center justify-center relative overflow-hidden border border-indigo-100/60">
          <div className="w-52 bg-white rounded-xl shadow-md border border-indigo-100 p-3">
            <div className="flex items-center justify-between text-[10px] font-semibold text-indigo-900 border-b border-indigo-50 pb-1.5">
              <span>Vision Recognition</span>
              <span className="text-emerald-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                98.4% Match
              </span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <div className="w-14 h-14 bg-indigo-900 rounded-lg flex items-center justify-center relative border border-indigo-700">
                <span className="text-xl">✌️</span>
                <div className="absolute inset-1 border border-dashed border-cyan-400 rounded" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-slate-800">Gesture: Peace</div>
                <div className="text-[9px] text-slate-500">Action: Run Drone</div>
                <div className="w-16 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-indigo-600 h-full w-[95%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "robot":
      return (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/70 p-4 flex items-center justify-center relative overflow-hidden border border-emerald-100/60">
          <div className="w-52 bg-slate-900 rounded-xl shadow-md border border-emerald-500/30 p-3 text-white">
            <div className="flex justify-between items-center text-[10px] border-b border-slate-800 pb-1.5 text-emerald-400 font-mono">
              <span>ROBOT_ROVER_v2</span>
              <span>ONLINE</span>
            </div>
            <div className="mt-2.5 flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-950 border border-emerald-500/50 rounded-lg flex items-center justify-center text-xl">
                🤖
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-bold text-slate-200">Ultrasonic Avoidance</div>
                <div className="text-[9px] text-slate-400 font-mono">Distance: 42 cm [CLEAR]</div>
                <div className="text-[9px] text-emerald-400 font-mono">Arduino Uno Rev4</div>
              </div>
            </div>
          </div>
        </div>
      );

    case "design":
    default:
      return (
        <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-amber-50 to-rose-50/70 p-4 flex items-center justify-center relative overflow-hidden border border-amber-100/60">
          <div className="w-48 bg-white rounded-xl shadow-md border border-slate-200/80 p-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
              <span className="text-[10px] font-bold text-slate-800">PocketSaver App UI</span>
              <span className="text-[8px] bg-amber-100 text-amber-800 px-1 rounded font-medium">Design</span>
            </div>
            <div className="mt-2 space-y-2">
              <div className="h-7 bg-gradient-to-r from-amber-400 to-rose-400 rounded-lg p-1.5 flex items-center justify-between text-white text-[9px] font-bold">
                <span>My Piggy Bank</span>
                <span>$48.50</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="h-6 bg-amber-50 rounded border border-amber-100 flex items-center justify-center text-[9px]">
                  🎯 Goals
                </div>
                <div className="h-6 bg-rose-50 rounded border border-rose-100 flex items-center justify-center text-[9px]">
                  🎁 Wish
                </div>
                <div className="h-6 bg-emerald-50 rounded border border-emerald-100 flex items-center justify-center text-[9px]">
                  ⭐ Star
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
