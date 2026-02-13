import React, { useState, useEffect, useRef } from 'react';
import Background from './components/Background';
import Document from './components/Document';
import OverlayEffects from './components/OverlayEffects';
import { Settings, Activity, X } from 'lucide-react';

// Paletas de Color RE6 - Traducidas y Temáticas
const THEMES = [
  {
    id: 'leon',
    name: 'FRANXITO (AZUL)',
    colors: {
      '--re-bg': '#0a0e14',
      '--re-primary': '#3498db', // Azul Leon
      '--re-text': '#ecf0f1',
      '--re-secondary': '#7f8c8d',
      '--re-accent': '#e74c3c',
      '--re-panel': 'rgba(20, 30, 40, 0.90)',
    }
  },
  {
    id: 'chris',
    name: 'TACTICO (VERDE)',
    colors: {
      '--re-bg': '#0a0f05',
      '--re-primary': '#6ab04c', // Verde Militar Vivo
      '--re-text': '#e0e0e0',
      '--re-secondary': '#555',
      '--re-accent': '#f1c40f',
      '--re-panel': 'rgba(20, 30, 20, 0.90)',
    }
  },
  {
    id: 'ada',
    name: 'PASIÓN (ROJO)',
    colors: {
      '--re-bg': '#120505',
      '--re-primary': '#c0392b', // Rojo Ada
      '--re-text': '#ecf0f1',
      '--re-secondary': '#8e44ad',
      '--re-accent': '#e74c3c',
      '--re-panel': 'rgba(40, 10, 10, 0.90)',
    }
  }
];

const LOADING_STEPS = [
  "INICIANDO SISTEMA...",
  "CONECTANDO CON ARANXITA...",
  "SINCRONIZANDO CORAZONES...",
  "DESENCRIPTANDO CARTA DE AMOR..."
];

const App: React.FC = () => {
  const [loadingState, setLoadingState] = useState<'init' | 'loading' | 'complete'>('init');
  const [loadingText, setLoadingText] = useState(LOADING_STEPS[0]);
  const [activeTheme, setActiveTheme] = useState(THEMES[0]);
  const [showThemeMenu, setShowThemeMenu] = useState(false);


  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < LOADING_STEPS.length) {
        setLoadingText(LOADING_STEPS[step]);
      } else {
        clearInterval(interval);
        setLoadingState('complete');
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);


  return (
    <div
      className="relative w-full min-h-screen font-body overflow-x-hidden selection:bg-[var(--re-primary)] selection:text-white"
      style={activeTheme.colors as React.CSSProperties}
    >
      <div className="fixed inset-0 bg-[var(--re-bg)] transition-colors duration-1000 -z-20"></div>
      <Background themeId={activeTheme.id} />



      {/* --- MENU SUPERIOR --- */}
      {loadingState === 'complete' && (
        <header className="fixed top-0 left-0 w-full z-50 p-2 md:p-4 flex justify-between items-start pointer-events-none">
          {/* Logo / Versión */}
          <div className="opacity-80 transform skew-x-[-12deg] bg-black/60 border-l-4 border-[var(--re-primary)] px-3 py-1 backdrop-blur-sm pointer-events-auto mt-2 ml-1">
            <span className="font-header font-bold text-[var(--re-primary)] tracking-[0.2em] transform skew-x-[12deg] block text-xs md:text-base">
              LOVE SYSTEM v6.0
            </span>
          </div>

          {/* Controles de Sistema (Derecha) */}
          <div className="flex flex-col items-end gap-2 pointer-events-auto mt-2 mr-1">
            <div className="flex gap-1">
              {/* Botón Filtros */}
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className={`group relative h-8 md:h-10 px-4 border-t border-b transform skew-x-[-12deg] transition-all flex items-center justify-center overflow-hidden
                    ${showThemeMenu ? 'bg-[var(--re-primary)] text-black border-white' : 'bg-black/60 text-[var(--re-text)] border-[var(--re-primary)] hover:bg-[var(--re-primary)] hover:text-black'}
                  `}
              >
                <div className="transform skew-x-[12deg] flex items-center gap-2">
                  {showThemeMenu ? <X size={16} /> : <Settings size={16} />}
                </div>
              </button>
            </div>

            {/* Menú Desplegable */}
            {showThemeMenu && (
              <div className="animate-fade-in-up flex flex-col items-end gap-1 mt-2 mr-2">
                {THEMES.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setActiveTheme(theme)}
                    className={`
                       relative w-40 py-2 px-4 text-right transform skew-x-[-12deg] border-r-4 transition-all uppercase
                       ${activeTheme.id === theme.id
                        ? 'bg-[var(--re-primary)] text-black border-white shadow-[0_0_15px_var(--re-primary)]'
                        : 'bg-black/80 text-gray-400 border-[var(--re-secondary)] hover:bg-gray-800 hover:text-white hover:border-[var(--re-primary)]'}
                     `}
                  >
                    <span className="block transform skew-x-[12deg] font-header text-xs font-bold tracking-widest">
                      {theme.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>
      )}

      {/* --- CONTENIDO PRINCIPAL --- */}
      {/* Ajustado padding para móviles (py-16 en lugar de py-20) */}
      <main className={`relative z-20 w-full flex flex-col items-center justify-start md:justify-center min-h-screen py-20 px-2 md:px-4 transition-all duration-700 ${loadingState === 'complete' ? 'opacity-100' : 'opacity-0'}`}>
        <Document themeColor="var(--re-primary)" />
      </main>

      <OverlayEffects themeId={activeTheme.id} />

      {/* --- PANTALLA DE CARGA --- */}
      {loadingState !== 'complete' && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center select-none p-4 text-center">
          <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8">
            <div className="absolute inset-0 border-4 border-transparent border-t-[var(--re-primary)] border-r-[var(--re-primary)] rounded-full animate-spin"></div>
            <div className="absolute inset-4 border-4 border-transparent border-b-[var(--re-secondary)] border-l-[var(--re-secondary)] rounded-full animate-spin reverse" style={{ animationDuration: '2.5s' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Activity size={32} className="text-[var(--re-primary)] animate-pulse" />
            </div>
          </div>

          <h2 className="text-white font-header text-3xl md:text-4xl font-bold tracking-[0.2em] mb-2 glitch-text">
            CARGANDO
          </h2>
          <p className="text-[var(--re-primary)] font-mono text-xs md:text-sm tracking-widest uppercase animate-pulse">
            {loadingText}
          </p>

          <div className="absolute bottom-10 w-full px-10 max-w-md">
            <div className="w-full h-0.5 bg-gray-900 overflow-hidden">
              <div className="h-full bg-[var(--re-primary)] animate-loading-bar w-1/2"></div>
            </div>
            <div className="flex justify-between text-[10px] text-gray-600 font-mono mt-1 uppercase">
              <span>Virus-Amor: Activo</span>
              <span>Conectando...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;