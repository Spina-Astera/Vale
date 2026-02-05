
import React from 'react';

interface CelebrationPageProps {
  name: string;
}

const CelebrationPage: React.FC<CelebrationPageProps> = ({ name }) => {
  // Reverting to Pixelated character styles with adjusted skin tones
  // Girl: Deep dark skin
  const girlPixel = "https://api.dicebear.com/7.x/pixel-art/svg?seed=Amara&skinColor=3d1e06&backgroundColor=fce4ec";
  // Boy: Adjusted to be lighter brown
  const boyPixel = "https://api.dicebear.com/7.x/pixel-art/svg?seed=Kaleb&skinColor=ae5d29&backgroundColor=e3f2fd";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative text-center py-20">
      <div className="animate-bounce mb-8">
        <svg width="140" height="140" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
            <defs>
                <radialGradient id="headerGrad" cx="35%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ff1744" />
                </radialGradient>
            </defs>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#headerGrad)" />
        </svg>
      </div>
      
      <div className="bg-white/95 backdrop-blur-lg p-12 rounded-[4rem] shadow-[0_30px_60px_rgba(255,100,150,0.4)] border-4 border-white max-w-3xl transform hover:rotate-0 transition-transform duration-700 -rotate-1">
        <h1 className="text-6xl font-bold text-pink-600 mb-8 dancing-script">
          YAAAY! I Knew It! 💖
        </h1>

        {/* Gift Message and Confirmation at the Top */}
        <div className="mb-12 space-y-6">
          <p className="text-3xl font-bold text-pink-500 italic">
            Best decision of your life, {name}! <br/>
            <span className="text-xl opacity-80">(Like you even had a choice ☆*: .｡. o(≧▽≦)o .｡.:*☆ 🥰)</span>
          </p>
          <div className="pt-8 border-t-2 border-pink-100 flex flex-col items-center animate-pulse-grow">
            <p className="text-4xl md:text-5xl font-black text-red-600 mb-6 leading-tight drop-shadow-sm">
              Now come get your gift, a big warm hug and a huge kiss!
            </p>
            <div className="text-6xl tracking-[0.6em] filter drop-shadow-md">
              🎁💖🤗💝💋❤️💕
            </div>
          </div>
        </div>

        {/* Profiles of the couple in Pixel Art */}
        <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-pink-100 rounded-3xl shadow-inner group">
                <img 
                  src={girlPixel} 
                  className="rounded-2xl border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300 w-full aspect-square object-cover bg-white pixelated" 
                  alt="Beautiful Dark-Skinned Queen Pixel Art" 
                />
              </div>
              <p className="mt-4 text-pink-500 font-bold italic text-xl">My Beautiful Queen 👑</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-pink-100 rounded-3xl shadow-inner group">
                <img 
                  src={boyPixel} 
                  className="rounded-2xl border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300 w-full aspect-square object-cover bg-white pixelated" 
                  alt="Attractive Medium-Skinned Man Pixel Art" 
                />
              </div>
              <p className="mt-4 text-pink-500 font-bold italic text-xl">Your Man 🧸</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CelebrationPage;
