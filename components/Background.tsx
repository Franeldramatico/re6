import React from 'react';

interface BackgroundProps {
  themeId: string;
}

const Background: React.FC<BackgroundProps> = ({ themeId }) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      
      {/* 1. Base: Dark Abstract Noise (Urban decay) */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#050505]"
      />
      
      {/* 2. Hex Mesh / Tech Grid (Neo-Umbrella aesthetic) */}
      <div 
        className="absolute inset-0 opacity-10 bg-hex-mesh"
        style={{ backgroundSize: '40px 40px' }}
      />

      {/* 3. Moving Smoke/Fog (The Chaos) */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-screen"
        style={{
          background: `radial-gradient(circle at 50% 50%, var(--re-primary) 0%, transparent 60%)`,
          filter: 'blur(80px)',
          transform: 'translateZ(0)',
        }}
      />

      {/* 4. Digital Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)]" />

      {/* 5. Theme specific accents */}
      {themeId === 'leon' && (
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent" />
      )}
      {themeId === 'chris' && (
         <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-green-900/10 to-transparent" />
      )}
      {themeId === 'ada' && (
         <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-900/10 to-transparent" />
      )}

    </div>
  );
};

export default Background;