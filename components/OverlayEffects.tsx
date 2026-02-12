import React from 'react';

interface OverlayEffectsProps {
  themeId: string;
}

const OverlayEffects: React.FC<OverlayEffectsProps> = ({ themeId }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      
      {/* 1. Subtle Scanlines (TV / Monitor Effect) */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1))',
          backgroundSize: '100% 4px'
        }}
      />

      {/* 2. Moving Scanline Bar */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--re-primary)] to-transparent opacity-[0.03] h-[20%] w-full animate-scanline pointer-events-none" />

      {/* 3. Vignette (Dark Corners) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,#000000_100%)] opacity-80" />

      {/* 4. Chromatic Aberration / Glitch Overlay (Very subtle) */}
      <div className="absolute inset-0 mix-blend-screen opacity-[0.02] translate-x-[1px]" style={{background: 'red'}}></div>
      <div className="absolute inset-0 mix-blend-screen opacity-[0.02] -translate-x-[1px]" style={{background: 'blue'}}></div>

      {/* 5. Theme Tint */}
      <div className="absolute inset-0 bg-[var(--re-primary)] mix-blend-overlay opacity-[0.05]" />

    </div>
  );
};

export default OverlayEffects;