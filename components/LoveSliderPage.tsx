
import React, { useState } from 'react';

interface LoveSliderPageProps {
  onNext: () => void;
  name: string;
}

const LoveSliderPage: React.FC<LoveSliderPageProps> = ({ onNext, name }) => {
  const [value, setValue] = useState(0);

  const isHigh = value > 5000;
  const isMedium = value > 1000;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative overflow-hidden">
      {/* Decorative Floating Emojis */}
      <div className="absolute top-1/4 left-10 animate-bounce text-4xl opacity-50">🧸</div>
      <div className="absolute bottom-1/4 right-10 animate-pulse text-4xl opacity-50">💖</div>
      <div className="absolute top-1/2 right-20 animate-bounce delay-75 text-3xl opacity-50">🧸</div>
      
      <div className={`bg-white/95 p-12 rounded-[3rem] shadow-2xl text-center max-w-2xl border-b-8 border-pink-400 transition-all duration-500 transform ${isHigh ? 'scale-110' : 'scale-100'}`}>
        <h1 className="text-3xl md:text-5xl font-bold text-pink-500 mb-2">
          {name}, my love...
        </h1>
        <div className="flex items-center justify-center gap-2 mb-8">
            <p className="text-xl md:text-2xl text-pink-400 font-bold">
              How much do you love me?
            </p>
            <span className="text-3xl">🧸</span>
        </div>

        <div className="relative mb-12 flex flex-col items-center">
            <input
                type="range"
                min="0"
                max="10000"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
                className="w-full h-8 bg-pink-100 rounded-full appearance-none cursor-pointer accent-pink-500 slider-thumb-large"
            />
            
            <div className="mt-6 flex flex-col items-center gap-2">
                <span className="text-pink-400 font-bold text-xl">
                    This much! ( <span className="text-red-500 text-3xl">{value}</span> % )
                </span>
                
                {/* Dynamic Message Box */}
                <div className={`mt-4 px-8 py-3 rounded-2xl transition-all duration-300 ${
                    isHigh ? 'bg-red-50 text-red-600 scale-125' : 
                    isMedium ? 'bg-pink-50 text-pink-600' : 
                    'bg-pink-50 text-pink-400 animate-pulse'
                } font-bold text-lg shadow-sm border border-pink-100`}>
                    {isHigh ? (
                        <span className="flex items-center gap-2">
                            WOOOOW You love me that much?? 🥰 🚀 💝
                        </span>
                    ) : isMedium ? (
                        <span className="flex items-center gap-2">
                            To infinity and beyond! 🚀 💝
                        </span>
                    ) : (
                        <span className="flex items-center gap-2">
                            And beyond! 🥰
                        </span>
                    )}
                </div>
            </div>
            
            {/* Random decorations as seen in screenshot */}
            <div className="absolute -bottom-10 left-1/4 text-2xl">💝</div>
            <div className="absolute -top-10 right-1/4 text-2xl">❤️</div>
        </div>

        <button
          onClick={onNext}
          className="bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto"
        >
          Next <span className="text-xl">💖</span>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 48px;
          width: 48px;
          border-radius: 50%;
          background: #ff5e78;
          cursor: pointer;
          border: 4px solid white;
          box-shadow: 0 4px 10px rgba(255, 94, 120, 0.4);
        }
        input[type=range]::-moz-range-thumb {
          height: 48px;
          width: 48px;
          border-radius: 50%;
          background: #ff5e78;
          cursor: pointer;
          border: 4px solid white;
          box-shadow: 0 4px 10px rgba(255, 94, 120, 0.4);
        }
      `}} />
    </div>
  );
};

export default LoveSliderPage;
