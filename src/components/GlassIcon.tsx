import React from 'react';

interface GlassIconProps {
  type: 'Coupe' | 'Rocks' | 'Highball' | 'Martini' | 'Flute' | 'Mug';
  className?: string;
  liquidColor?: string; // e.g., 'bg-amber-500'
}

export default function GlassIcon({ type, className = "w-12 h-12", liquidColor }: GlassIconProps) {
  // Map cocktail bases to approximate drink colors if no custom color is passed
  const colorClass = liquidColor || "stroke-amber-500 fill-amber-500/20";

  switch (type) {
    case 'Martini':
      return (
        <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" id={`glass-martini`}>
          {/* Liquid */}
          <path d="M16 20 L48 20 L32 36 Z" className="fill-emerald-500/10 stroke-none" />
          <path d="M22 26 L42 26 L32 36 Z" className="fill-amber-400/40 stroke-none" />
          {/* Glass Contour */}
          <path d="M12 16 L32 36 L32 52 M20 52 L44 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Olive on skewer */}
          <line x1="26" y1="20" x2="36" y2="30" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="31" cy="25" r="3.5" className="fill-emerald-600 stroke-emerald-800" strokeWidth="1" />
        </svg>
      );
    case 'Coupe':
      return (
        <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" id={`glass-coupe`}>
          {/* Liquid */}
          <path d="M16 22 C16 34 48 34 48 22 Z" className="fill-rose-500/20 stroke-none" />
          {/* Glass Contour */}
          <path d="M14 20 C14 36 50 36 50 20 M32 35 L32 52 M22 52 L42 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          {/* Lemon wheel edge garnish */}
          <path d="M13 16 C11 18 15 22 17 20 Z" className="fill-yellow-400 stroke-yellow-600" strokeWidth="1" />
        </svg>
      );
    case 'Rocks':
      return (
        <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" id={`glass-rocks`}>
          {/* Liquid */}
          <path d="M18 30 L46 30 L44 51 L20 51 Z" className="fill-amber-600/30 stroke-none" />
          {/* Ice Cubes */}
          <rect x="25" y="34" width="12" height="12" rx="1.5" transform="rotate(15 25 34)" className="fill-sky-100/40 stroke-sky-300" strokeWidth="1.5" />
          <rect x="30" y="40" width="11" height="11" rx="1.5" transform="rotate(-10 30 40)" className="fill-sky-100/40 stroke-sky-300" strokeWidth="1.5" />
          {/* Glass Contour */}
          <path d="M16 22 L18 52 C18 53.5 19.5 54 21 54 L43 54 C44.5 54 46 53.5 46 52 L48 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Orange Slice wedge */}
          <path d="M44 14 L49 24 M46 17 L41 22" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'Highball':
      return (
        <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" id={`glass-highball`}>
          {/* Liquid */}
          <path d="M21 26 L43 26 L41 51 L23 51 Z" className="fill-yellow-500/10 stroke-none" />
          {/* Straw */}
          <line x1="36" y1="12" x2="26" y2="48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Bubbles */}
          <circle cx="26" cy="35" r="1.5" className="fill-sky-400" />
          <circle cx="36" cy="42" r="1.5" className="fill-sky-400" />
          <circle cx="28" cy="46" r="1" className="fill-sky-400" />
          <circle cx="34" cy="29" r="1" className="fill-sky-400" />
          {/* Glass Contour */}
          <path d="M19 18 L22 52 C22.2 53.5 23.5 54 25 54 L39 54 C40.5 54 41.8 53.5 42 52 L45 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'Flute':
      return (
        <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" id={`glass-flute`}>
          {/* Liquid */}
          <path d="M23 18 C23 38 41 38 41 18 Z" className="fill-yellow-300/30 stroke-none" />
          <circle cx="30" cy="24" r="1" className="fill-yellow-400" />
          <circle cx="33" cy="28" r="1" className="fill-yellow-400" />
          <circle cx="29" cy="32" r="1" className="fill-yellow-400" />
          {/* Glass Contour */}
          <path d="M21 14 C21 40 43 40 43 14 M32 38 L32 54 M24 54 L40 54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'Mug':
      return (
        <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" id={`glass-mug`}>
          {/* Liquid & Ice head */}
          <path d="M20 26 L44 26 L42 52 L22 52 Z" className="fill-amber-700/25 stroke-none" />
          {/* Glass Contour */}
          <path d="M18 20 L20 52 C20 53.5 21.5 54 23 54 L41 54 C42.5 54 44 53.5 44 52 L46 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Mug Handle */}
          <path d="M45 26 C50 26 51 34 51 37 C51 40 50 44 43 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          {/* Lime on rim */}
          <circle cx="18" cy="20" r="4.5" className="fill-lime-500 stroke-lime-700" strokeWidth="1" />
        </svg>
      );
  }
}
