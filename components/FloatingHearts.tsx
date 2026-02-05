
import React, { useMemo } from 'react';

const PuffyHeart: React.FC<{ size: string; color: string; id: string }> = ({ size, color, id }) => {
  const gradientId = `grad-${id}`;
  const highlightId = `shine-${id}`;
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(4px 8px 12px rgba(0,0,0,0.1))' }}
    >
      <defs>
        <radialGradient id={gradientId} cx="40%" cy="35%" r="60%" fx="35%" fy="35%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.9" />
        </radialGradient>
        <filter id={highlightId}>
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" />
            <feOffset dx="1" dy="1" result="offsetblur" />
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
            <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
      </defs>
      <path 
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
        fill={`url(#${gradientId})`}
      />
      {/* Soft Shine Highlight */}
      <path 
        d="M7.5 5c-1.5 0-2.5 1-2.5 2.5 0 0.5 0.2 1 0.5 1.5.5-1 1.5-1.5 2.5-1.5 1 0 1.5.5 1.5 1s-0.5 1-1.5 1c-1 0-2 1-2 2" 
        stroke="white" 
        strokeWidth="0.5" 
        strokeLinecap="round" 
        opacity="0.3" 
      />
    </svg>
  );
};

const FloatingHearts: React.FC = () => {
  const hearts = useMemo(() => {
    const count = 120; // Even denser for that lush look
    const result = [];
    
    for (let i = 0; i < count; i++) {
      const isGrouped = Math.random() > 0.65;
      const baseLeft = Math.random() * 100;
      const clusterSize = isGrouped ? Math.floor(Math.random() * 3) + 2 : 1;
      
      for (let j = 0; j < clusterSize; j++) {
        const offset = isGrouped ? (Math.random() - 0.5) * 12 : 0;
        const sizeVal = 15 + Math.random() * 95;
        
        result.push({
          id: `${i}-${j}`,
          left: `${baseLeft + offset}%`,
          duration: `${12 + Math.random() * 25}s`,
          delay: `${Math.random() * -20}s`, // Negative delay so they start everywhere
          size: `${sizeVal}px`,
          opacity: 0.2 + Math.random() * 0.5,
          color: ['#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#ff80ab'][Math.floor(Math.random() * 5)],
          blur: sizeVal < 35 ? '2px' : '0px',
          zIndex: Math.floor(sizeVal),
        });
      }
    }
    return result;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {hearts.map((h) => (
        <div
          key={h.id}
          className="heart-particle absolute"
          style={{
            left: h.left,
            animationDuration: h.duration,
            animationDelay: h.delay,
            zIndex: h.zIndex,
            // @ts-ignore
            '--max-opacity': h.opacity,
          } as React.CSSProperties}
        >
          <div style={{ filter: h.blur !== '0px' ? `blur(${h.blur})` : 'none' }}>
            <PuffyHeart 
              size={h.size} 
              color={h.color} 
              id={h.id} 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
