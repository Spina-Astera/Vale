
import React, { useState, useEffect } from 'react';

interface FinalAskPageProps {
  onYes: () => void;
  name: string;
}

const FinalAskPage: React.FC<FinalAskPageProps> = ({ onYes, name }) => {
  const [noCount, setNoCount] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const moveNoButton = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e && 'preventDefault' in e) e.preventDefault();

    setVisible(false);
    
    setTimeout(() => {
      const padding = 100;
      const newX = Math.random() * (window.innerWidth - padding * 2) + padding;
      const newY = Math.random() * (window.innerHeight - padding * 2) + padding;
      
      setNoPos({ x: newX, y: newY });
      setNoCount(prev => prev + 1);
      setVisible(true);
    }, 50);
  };

  const getNoText = () => {
    const texts = [
      "No", 
      "Are you sure?", 
      "Are you really sure?", 
      "Are you really, really sure?", 
      "Please, boo-kee."
    ];
    if (noCount >= texts.length) return texts[texts.length - 1];
    return texts[noCount];
  };

  const getYesStyle = () => {
    let scale = 1;
    if (noCount >= 4) {
      scale = 1 + (noCount - 3) * 0.8; 
    }
    
    return {
      transform: `scale(${scale})`,
      transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      zIndex: 40
    } as React.CSSProperties;
  };

  // Pixelated character styles
  // Girl: Deep dark skin
  const girlPixel = "https://api.dicebear.com/7.x/pixel-art/svg?seed=Amara&skinColor=3d1e06&backgroundColor=fce4ec";
  // Boy: Adjusted to be lighter brown
  const boyPixel = "https://api.dicebear.com/7.x/pixel-art/svg?seed=Kaleb&skinColor=ae5d29&backgroundColor=e3f2fd";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative overflow-hidden">
      {/* Main Question Card */}
      <div className="bg-white/95 p-12 rounded-[3rem] shadow-2xl text-center max-w-2xl border-b-8 border-pink-400 relative z-20">
        <div className="mb-10 flex justify-center items-center space-x-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-pink-300 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <img 
                src={girlPixel} 
                className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white bg-pink-50 shadow-lg animate-bounce object-cover pixelated" 
                alt="Pixel Art Dark Skinned Girl" 
              />
              <span className="absolute -bottom-2 -right-2 text-2xl animate-pulse">👑</span>
            </div>

            <div className="text-pink-400 text-4xl animate-pulse mx-2">❤️</div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-pink-300 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <img 
                src={boyPixel} 
                className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white bg-blue-50 shadow-lg animate-bounce delay-150 object-cover pixelated" 
                alt="Pixel Art Lighter Brown Boy" 
              />
              <span className="absolute -bottom-2 -right-2 text-2xl animate-pulse">🧸</span>
            </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4 dancing-script">
          {name}...
        </h1>
        <p className="text-2xl text-gray-700 mb-12 font-medium">
          Will you be my Valentine? ❤️
        </p>

        <div className="flex flex-row items-center justify-center gap-8 min-h-[120px]">
          <button
            onClick={onYes}
            style={getYesStyle()}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-full shadow-2xl transition-all active:scale-95 text-2xl"
          >
            YES!
          </button>

          {/* Initial state of No button */}
          {noCount === 0 && isMounted && (
            <button
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-full shadow-xl text-2xl border-2 border-white transition-all active:scale-95"
            >
              {getNoText()}
            </button>
          )}
        </div>
      </div>

      {/* Trolling "No" Button */}
      {isMounted && noCount > 0 && (
        <button
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          style={{ 
              position: 'fixed',
              left: `${noPos.x}px`,
              top: `${noPos.y}px`,
              transform: 'translate(-50%, -50%)',
              opacity: visible ? 1 : 0,
              transition: 'left 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.1s',
              zIndex: 100,
              pointerEvents: visible ? 'auto' : 'none'
          }}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-xl whitespace-nowrap border-2 border-white text-xl"
        >
          {getNoText()}
        </button>
      )}

      {/* Background hint */}
      {noCount > 10 && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 text-pink-300 font-bold animate-pulse text-xl bg-white/50 px-6 py-2 rounded-full shadow-sm">
          You literally have no other choice! 😂
        </div>
      )}
    </div>
  );
};

export default FinalAskPage;
