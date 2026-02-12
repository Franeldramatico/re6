import React from 'react';
import { Shield, Tablet, Smartphone, Heart, Skull, Zap, MapPin, FileText, Gift, AlertTriangle, Radio, Pill, Activity, Biohazard, Cross, Fingerprint, FlaskConical } from 'lucide-react';

interface DocumentProps {
  themeColor: string;
}

const Document: React.FC<DocumentProps> = ({ themeColor }) => {
  return (
    <div className="w-full max-w-7xl relative flex flex-col gap-6 md:gap-10 pb-20 mt-10 md:mt-0">
      
      {/* --- HUD DE JUGADOR (ESTILO RE6) --- */}
      {/* MOVIL: Relativo y arriba. DESKTOP: Absoluto y flotante. */}
      <div className="w-full relative lg:absolute lg:-top-24 lg:left-0 lg:w-auto z-40 flex flex-col gap-2 select-none mb-6 lg:mb-0">
         <div className="flex items-end gap-4 md:gap-6">
             {/* Cubo de Habilidad / Icono Personaje */}
             <div className="relative group">
                 <div className="w-14 h-14 md:w-16 md:h-16 bg-black/80 border-2 border-[var(--re-primary)] flex items-center justify-center transform skew-x-[-15deg] shadow-[0_0_20px_var(--re-primary)] backdrop-blur-md overflow-hidden">
                    <div className="transform skew-x-[15deg]">
                      {/* Icono de Científico (Matraz) */}
                      <FlaskConical size={28} className="text-white fill-[var(--re-primary)] md:w-8 md:h-8" />
                    </div>
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-white/10 animate-pulse-fast"></div>
                 </div>
                 <div className="absolute -bottom-2 -right-2 bg-black border border-white px-1 transform skew-x-[-15deg]">
                    <span className="text-[9px] md:text-[10px] font-mono text-white font-bold transform skew-x-[15deg]">DR. FRAN</span>
                 </div>
             </div>
             
             <div className="flex flex-col mb-1">
                {/* Nombre y Clase */}
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3 mb-1">
                    <span className="text-white font-header font-bold text-2xl md:text-3xl tracking-tighter uppercase drop-shadow-[0_2px_0_#000] leading-none">
                      FRANXITO
                    </span>
                    <span className="text-[var(--re-primary)] font-mono text-[10px] md:text-xs tracking-widest uppercase bg-black/50 px-1 w-fit">
                      UMBRELLA SCIENTIST
                    </span>
                </div>
                
                {/* SISTEMA DE SALUD (BLOQUES RE6) */}
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="flex gap-1">
                         {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`
                                h-4 md:h-5 w-8 md:w-12 transform skew-x-[-15deg] border border-black/80 transition-all duration-500
                                ${i < 4 
                                    ? 'bg-gradient-to-b from-[#85c441] to-[#4e7a21] shadow-[0_0_8px_#85c441]' 
                                    : 'bg-[#8a1c1c]/20 border-[#8a1c1c] animate-pulse'}
                              `}
                            ></div>
                         ))}
                         <div className="h-4 md:h-5 w-3 md:w-4 transform skew-x-[-15deg] bg-black/80 border border-red-900 flex items-center justify-center">
                            <Activity size={10} className="text-red-600 animate-pulse" />
                         </div>
                    </div>

                    {/* CONTADOR DE MUESTRAS/CORAZONES */}
                    <div className="flex items-center gap-1 transform skew-x-[-15deg] bg-black/60 border border-[var(--re-accent)] px-2 h-4 md:h-5">
                        <Heart size={10} className="text-[var(--re-accent)] fill-[var(--re-accent)]" />
                        <span className="text-white font-header font-bold text-xs md:text-sm leading-none pt-0.5">∞</span>
                    </div>
                </div>

                {/* BARRA DE RESISTENCIA */}
                <div className="mt-1 md:mt-2 w-48 md:w-64 h-1.5 md:h-2 bg-black/80 transform skew-x-[-15deg] overflow-hidden border border-gray-600">
                    <div className="w-full h-full bg-white opacity-90 shadow-[0_0_10px_white]"></div>
                </div>
             </div>
         </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-12 items-start pt-2 md:pt-4 lg:pt-16">
        
        {/* --- COLUMNA IZQUIERDA: PDA / HABILIDADES --- */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4 md:gap-8 order-2 lg:order-1 z-30">
           
           {/* OBJETIVO ACTUAL */}
           <div className="transform skew-x-[-8deg] bg-black/70 border-l-4 border-[var(--re-accent)] p-4 md:p-5 backdrop-blur-md shadow-[0_5px_15px_rgba(0,0,0,0.5)] group hover:bg-black/90 transition-all duration-300">
              <div className="transform skew-x-[8deg]">
                <h3 className="text-[var(--re-accent)] font-header text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2 flex items-center gap-2">
                  <Radio size={14} className="animate-pulse" /> Notificación Prioritaria
                </h3>
                <p className="text-white font-header text-xl md:text-2xl leading-none uppercase font-bold drop-shadow-md">
                  Proteger la muestra: <br/><span className="text-[var(--re-primary)]">Corazón de Aranxita</span>.
                </p>
                <div className="mt-3 h-0.5 w-full bg-gray-800 overflow-hidden">
                    <div className="h-full bg-[var(--re-accent)] w-3/4 animate-loading-bar"></div>
                </div>
              </div>
           </div>

           {/* LISTA DE HABILIDADES (ROMÁNTICAS) */}
           <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end px-2 mb-1 border-b border-gray-700 pb-1">
                  <div className="text-[var(--re-secondary)] font-header text-xs md:text-sm uppercase tracking-widest font-bold">Research Settings</div>
                  <div className="text-[var(--re-primary)] font-mono text-[10px] md:text-xs font-bold">SET LAB-01</div>
              </div>
              
              <SkillButton icon={<Heart size={18}/>} label="AMOR LV.99" pts="MAXED" />
              <SkillButton icon={<FlaskConical size={18}/>} label="QUÍMICA PURA" pts="STABLE" />
              <SkillButton icon={<Gift size={18}/>} label="BESITOS & MIMOS" pts="INFINITE" />
              
              <div className="mt-2 md:mt-4 border-t border-gray-800 pt-2 flex justify-between items-center opacity-80">
                  <span className="text-[10px] font-mono text-gray-500 tracking-widest">NEXT DISCOVERY:</span>
                  <span className="text-[var(--re-primary)] font-mono font-bold tracking-widest text-xs md:text-sm drop-shadow-[0_0_5px_var(--re-primary)]">
                    LOADING...
                  </span>
              </div>
           </div>
        </div>

        {/* --- COLUMNA DERECHA: EL DOCUMENTO EXTENDIDO --- */}
        <div className="flex-1 w-full order-1 lg:order-2 relative group perspective-1000">
           
           {/* Contenedor Principal (Tablet de Cristal) */}
           <div className="relative bg-[#080808]/95 border border-[#333] backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden min-h-[600px] md:min-h-[800px] clip-corner-lg transition-transform duration-500">
              
              {/* Reflejo */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 via-transparent to-transparent pointer-events-none z-10"></div>
              
              {/* --- CABECERA --- */}
              <div className="bg-gradient-to-r from-[#1a1a1a] to-black border-b-2 border-[var(--re-primary)] p-4 md:p-8 flex justify-between items-end relative overflow-hidden">
                 <div className="absolute inset-0 bg-hex-mesh opacity-20"></div>
                 
                 <div className="relative z-10 flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-[var(--re-primary)] mb-1">
                        <Biohazard size={16} />
                        <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase">Neo-Umbrella Research File</span>
                    </div>
                    <h1 className="font-header font-bold text-white tracking-[0.1em] text-2xl md:text-4xl uppercase shadow-black drop-shadow-lg">
                       EXPEDIENTE <span className="text-[var(--re-primary)]">#L0V3</span>
                    </h1>
                 </div>
                 
                 <div className="relative z-10 flex flex-col items-end">
                    <div className="w-10 h-10 md:w-12 md:h-12 mb-2">
                        {/* UMBRELLA LOGO */}
                        <div className="w-full h-full rounded-full shadow-[0_0_10px_rgba(255,0,0,0.3)] border border-white/10 overflow-hidden relative">
                             <div className="absolute inset-0" style={{
                                background: `conic-gradient(
                                    #8a1c1c 0% 12.5%,
                                    #e0e0e0 12.5% 25%,
                                    #8a1c1c 25% 37.5%,
                                    #e0e0e0 37.5% 50%,
                                    #8a1c1c 50% 62.5%,
                                    #e0e0e0 62.5% 75%,
                                    #8a1c1c 75% 87.5%,
                                    #e0e0e0 87.5% 100%
                                )`
                             }}></div>
                             <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
                        </div>
                    </div>
                    <span className="text-[var(--re-accent)] font-mono text-[8px] md:text-[9px] tracking-widest uppercase font-bold bg-black/60 px-2 py-0.5 border border-[var(--re-accent)] transform skew-x-[-10deg]">
                       TOP SECRET // DR. FRAN ONLY
                    </span>
                 </div>
              </div>

              {/* --- CUERPO DEL DOCUMENTO --- */}
              <div className="p-5 md:p-12 relative text-gray-300">
                 
                 {/* Datos Tácticos */}
                 <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-6 md:mb-10 border-b border-gray-800 pb-6">
                    <div className="flex-1 bg-white/5 p-2 md:p-3 border-l-2 border-[var(--re-primary)]">
                       <span className="block text-[9px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest">Sujeto de Estudio</span>
                       <span className="block text-white font-header text-base md:text-lg font-bold uppercase">Mi Aranxita</span>
                    </div>
                    <div className="flex-1 bg-white/5 p-2 md:p-3 border-l-2 border-[var(--re-primary)]">
                       <span className="block text-[9px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest">Variable X</span>
                       <span className="block text-white font-header text-base md:text-lg font-bold uppercase">La Distancia</span>
                    </div>
                    <div className="flex-1 bg-white/5 p-2 md:p-3 border-l-2 border-[var(--re-accent)]">
                       <span className="block text-[9px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest">Resultado Análisis</span>
                       <span className="block text-[var(--re-accent)] font-header text-base md:text-lg font-bold uppercase animate-pulse">Amor Incurable</span>
                    </div>
                 </div>

                 {/* Contenido Texto */}
                 <div className="font-body text-base md:text-xl leading-relaxed space-y-6 md:space-y-8 relative z-20">
                    <p>
                       <strong className="text-[var(--re-primary)]">[DIARIO DE INVESTIGACIÓN]</strong> Mis cálculos eran correctos. El mundo exterior es inestable, lleno de variables caóticas. Pero en mi laboratorio personal, tú eres la única constante que da sentido a la ecuación.
                    </p>
                    
                    <p>
                       He analizado millones de datos, explorado cada rincón de la red como si fuera un laboratorio subterráneo de Umbrella. La mayoría de los sujetos están infectados por la indiferencia. Yo no. Yo he desarrollado una simbiosis perfecta contigo. Eres mi descubrimiento más valioso.
                    </p>

                    {/* Cita Destacada Romántica */}
                    <div className="relative my-6 md:my-8 transform skew-x-[-2deg]">
                       <div className="absolute inset-0 bg-gradient-to-r from-[var(--re-primary)]/20 to-transparent border-l-4 border-[var(--re-primary)] blur-sm"></div>
                       <div className="relative p-4 md:p-6 transform skew-x-[2deg]">
                          <p className="text-white italic text-lg md:text-2xl font-header font-bold tracking-wide">
                             "Científicamente hablando, mi corazón late a un ritmo acelerado solo por ti. No necesito el Virus-C para sentirme invencible, solo necesito un mensaje tuyo."
                          </p>
                       </div>
                    </div>

                    <p>
                       Esto no es una teoría. Es una ley universal. Quererte es el único experimento que quiero repetir todos los días. Eres el avance científico más bonito de mi vida.
                    </p>

                    <div className="bg-black/40 p-3 md:p-4 border border-gray-700 flex items-start gap-3 mt-6">
                       <AlertTriangle className="text-[var(--re-accent)] shrink-0 mt-1" size={20} />
                       <div>
                          <div className="text-[var(--re-accent)] font-bold uppercase tracking-widest text-xs mb-1">
                             Protocolo de Seguridad:
                          </div>
                          <p className="text-white font-bold text-lg md:text-xl uppercase tracking-tight">
                             Quédate conmigo. Seamos el mejor equipo. Te quiero mucho.
                          </p>
                       </div>
                    </div>
                 </div>

                 {/* --- PIE DE PÁGINA --- */}
                 <div className="mt-12 md:mt-20 border-t border-gray-700 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-end gap-6 relative">
                    <Fingerprint className="absolute top-10 right-1/2 opacity-5 text-white w-24 h-24 md:w-32 md:h-32" />

                    <div className="flex flex-col gap-1 md:gap-2">
                       <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[var(--re-primary)] rounded-full animate-pulse"></div>
                          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">ESTADO: ARCHIVADO</span>
                       </div>
                       <div>
                          <div className="text-white font-header text-2xl md:text-3xl uppercase tracking-widest font-bold">DR. FRANXITO</div>
                          <div className="text-[var(--re-secondary)] font-mono text-[10px] md:text-xs uppercase tracking-[0.2em]">Jefe de Investigación</div>
                       </div>
                    </div>
                    
                    <div className="flex flex-col items-end opacity-60 hover:opacity-100 transition-opacity duration-500">
                       <div className="text-right mb-2">
                          <div className="font-header font-bold text-lg md:text-xl tracking-[0.2em] text-gray-400">NEO-UMBRELLA</div>
                          <div className="text-[8px] md:text-[9px] font-mono tracking-[0.4em] uppercase text-[#8a1c1c]">CLASIFICADO NIVEL S+</div>
                       </div>
                       <div className="flex gap-1">
                          {[...Array(4)].map((_, i) => (
                             <div key={i} className="w-1 h-1 bg-gray-500 rounded-full"></div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>

              {/* Barra de Scroll */}
              <div className="absolute right-1 top-20 bottom-20 w-1 bg-gray-900/50 rounded-full overflow-hidden">
                  <div className="w-full h-1/3 bg-[var(--re-primary)] shadow-[0_0_15px_var(--re-primary)] rounded-full"></div>
              </div>
           </div>
           
        </div>
      </div>
    </div>
  );
};

// Componente Botón de Habilidad
const SkillButton = ({ icon, label, pts }: { icon: React.ReactNode, label: string, pts: string }) => (
  <button className={`
    group relative flex items-center justify-between p-2 md:p-3 w-full text-left transition-all duration-300 transform skew-x-[-12deg] border-l-4 overflow-hidden bg-black/40 border-transparent hover:bg-gray-800 hover:border-[var(--re-primary)]
  `}>
    <div className="transform skew-x-[12deg] flex items-center gap-2 md:gap-3 z-10 pl-2">
       <div className="text-[var(--re-secondary)] group-hover:text-white transition-colors">
         {icon}
       </div>
       <span className="font-header text-xs md:text-md tracking-widest uppercase font-bold text-gray-300 group-hover:text-white">{label}</span>
    </div>
    
    <div className="transform skew-x-[12deg] z-10 pr-2">
       <span className="text-[8px] md:text-[9px] font-mono font-bold px-1.5 py-0.5 bg-gray-700 text-gray-300 group-hover:bg-[var(--re-primary)] group-hover:text-black transition-colors">
         {pts}
       </span>
    </div>
  </button>
);

export default Document;