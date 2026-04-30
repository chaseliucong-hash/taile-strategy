import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { HEAT_TRANSFER_ECOSYSTEM } from '../constants';
import { HEAT_TRANSFER_ECOSYSTEM_EN } from '../constants.en';
import { useLanguage } from '../i18n';

export default function HeatTransferEcosystem() {
  const { language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const scrollValueRef = useRef(0);
  
  const ecosystemData = language === 'zh' ? HEAT_TRANSFER_ECOSYSTEM : HEAT_TRANSFER_ECOSYSTEM_EN;

  useEffect(() => {
    let lastTime = 0;
    const throttleMs = 50;
    
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastTime < throttleMs) return;
      lastTime = now;
      
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const sectionCenter = sectionTop + sectionHeight / 2;
      const viewportCenter = windowHeight / 2;
      
      let progress = 0;
      
      if (sectionCenter > viewportCenter) {
        progress = Math.max(0, 1 - (sectionCenter - viewportCenter) / (windowHeight * 0.6));
      } else {
        progress = Math.max(0, 1 - (viewportCenter - sectionCenter) / (windowHeight * 0.6));
      }
      
      progress = Math.max(0, Math.min(1, progress));
      scrollValueRef.current = progress;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allItems = useMemo(() => {
    const coreItems = [
      ...ecosystemData.firstLayer.processMatrix,
      ...ecosystemData.firstLayer.equipmentMatrix,
    ];
    const outerItems = [
      ...ecosystemData.fourthLayer.categories.map(c => c.name),
      ...ecosystemData.secondLayer.flatMap(s => s.tracks).filter(t => !t.includes('全赛道') && !t.includes('素材库') && !t.includes('系统') && !t.includes('Full-track') && !t.includes('Material Library') && !t.includes('System')),
      ...ecosystemData.thirdLayer.flatMap(t => t.scenes),
      ...ecosystemData.thirdLayer.flatMap(t => t.products),
    ];
    return [...new Set([...coreItems, ...outerItems])];
  }, [ecosystemData]);

  const expansionFactor = 0.3 + scrollProgress * 0.7;
  const phi = Math.PI * (3 - Math.sqrt(5));

  const getItemStyle = useCallback((index) => {
    const theta = index * phi;
    const minRadius = 100 * expansionFactor;
    const maxRadius = 420 * expansionFactor;
    const radius = minRadius + (maxRadius - minRadius) * (index / allItems.length);
    const x = radius * Math.cos(theta);
    const y = radius * Math.sin(theta);
    const hue = (index / allItems.length) * 360;
    
    return { x, y, radius, hue };
  }, [expansionFactor, allItems.length, phi]);

  const handleMouseEnter = useCallback((index) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  return (
    <section ref={sectionRef} id="ecosystem" className="relative bg-slate-950 pt-8 pb-16 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="text-center mb-10 relative z-30">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-3">
          {language === 'zh' ? '热转印生态' : 'Heat Transfer Ecosystem'}
        </h2>
        <p className="text-gray-400 text-lg">
          {language === 'zh' ? '泰乐热转印为中心，辐射全产业链生态' : 'Taile Heat Transfer as core, radiating entire industrial chain ecosystem'}
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-[1000px] h-[900px]">
        <div className="absolute inset-0 z-10 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full" viewBox="-500 -500 1000 1000">
            {allItems.map((_, index) => {
              const { x, y, hue } = getItemStyle(index);
              const isHovered = hoveredIndex === index;
              return (
                <line
                  key={index}
                  x1={0}
                  y1={0}
                  x2={x}
                  y2={y}
                  stroke={`hsla(${hue}, 70%, 60%, ${isHovered ? 0.8 : 0.2})`}
                  strokeWidth={isHovered ? 2 : 1}
                />
              );
            })}
          </svg>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="relative">
            <div className="absolute -inset-16 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-500/15 to-cyan-500/10 blur-3xl" />
            <div className="absolute -inset-12 rounded-full bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-purple-500/8 blur-2xl" />
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-blue-400/10 via-purple-500/8 to-cyan-500/5 blur-xl" />
            
            <svg className="absolute -inset-20 w-[calc(100%+160px)] h-[calc(100%+160px)]" viewBox="0 0 200 200">
              {[...Array(24)].map((_, i) => {
                const angle = (i / 24) * 360;
                const length = i % 2 === 0 ? 35 : 25;
                const x1 = 100 + 55 * Math.cos((angle * Math.PI) / 180);
                const y1 = 100 + 55 * Math.sin((angle * Math.PI) / 180);
                const x2 = 100 + (55 + length) * Math.cos((angle * Math.PI) / 180);
                const y2 = 100 + (55 + length) * Math.sin((angle * Math.PI) / 180);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#sunGradient)"
                    strokeWidth={i % 2 === 0 ? 2 : 1.5}
                    strokeLinecap="round"
                    opacity={0.4}
                  />
                );
              })}
              <defs>
                <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
            
            <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-500/60 via-purple-500/60 to-cyan-500/60 shadow-2xl shadow-purple-500/30 flex items-center justify-center">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-400/40 via-purple-400/40 to-cyan-400/40" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center border border-purple-400/30">
                <span className="text-blue-300 text-lg md:text-2xl font-bold tracking-wider">{ecosystemData.center.title}</span>
                <span className="text-purple-200 text-sm md:text-base mt-2 font-medium">{ecosystemData.center.subtitle}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 z-20">
          {allItems.map((item, index) => {
            const { x, y, radius, hue } = getItemStyle(index);
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2 cursor-pointer"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${isHovered ? 1.25 : 1})`,
                  zIndex: isHovered ? 50 : 15,
                  willChange: 'transform',
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  className="rounded-full border transition-colors duration-150"
                  style={{
                    padding: radius < 200 ? '4px 8px' : radius < 300 ? '6px 10px' : '8px 12px',
                    background: `linear-gradient(135deg, hsla(${hue}, 70%, 50%, 0.2), hsla(${(hue + 30) % 360}, 70%, 50%, 0.1))`,
                    borderColor: `hsla(${hue}, 70%, 60%, ${isHovered ? 0.6 : 0.35})`,
                    boxShadow: isHovered ? `0 0 15px hsla(${hue}, 70%, 50%, 0.4)` : 'none',
                  }}
                >
                  <span 
                    className="whitespace-nowrap font-medium"
                    style={{ 
                      fontSize: radius < 200 ? '12px' : radius < 300 ? '14px' : '16px',
                      color: `hsl(${hue}, 70%, 80%)` 
                    }}
                  >
                    {item}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
