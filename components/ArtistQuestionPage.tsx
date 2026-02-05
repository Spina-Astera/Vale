
import React, { useState } from 'react';

interface ArtistQuestionPageProps {
  onCorrect: () => void;
}

const ArtistQuestionPage: React.FC<ArtistQuestionPageProps> = ({ onCorrect }) => {
  const [error, setError] = useState('');
  const [selected, setSelected] = useState<string | null>(null);

  const options = ["Asake", "Daniel Ceaser", "Eill", "Summer Walker"];
  const correctArtist = "Daniel Ceaser";

  const handleSelect = (artist: string) => {
    setSelected(artist);
    if (artist === correctArtist) {
      setError('');
      setTimeout(() => onCorrect(), 1000);
    } else {
      setError("I SAID I'D KILL U!!! 🔪 Try again before I get the weapon! 😤");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative">
      <div className="bg-white/90 backdrop-blur-md p-10 rounded-[2.5rem] shadow-2xl border-4 border-red-200 max-w-lg w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">One more test...</h2>
        <p className="text-xl font-bold text-red-600 mb-8 italic">
          Who's my favourite R&B artist?<br/>
          <span className="text-sm">(Ps I'll kill u if u get any of these wrong)</span>
        </p>

        <div className="grid grid-cols-1 gap-4 mb-6">
          {options.map((artist) => (
            <button
              key={artist}
              onClick={() => handleSelect(artist)}
              className={`p-4 rounded-2xl border-2 font-bold transition-all duration-300 transform ${
                selected === artist
                  ? artist === correctArtist
                    ? 'bg-green-500 border-green-600 text-white scale-105'
                    : 'bg-red-500 border-red-700 text-white animate-shake'
                  : 'bg-white border-pink-100 text-gray-700 hover:border-red-400 hover:bg-red-50'
              }`}
            >
              {artist}
            </button>
          ))}
        </div>

        {error && (
          <p className="text-red-600 font-black text-lg animate-bounce uppercase">
            {error}
          </p>
        )}

        {selected === correctArtist && !error && (
          <p className="text-green-600 font-bold text-xl animate-pulse">
            Correct! You live to see another minute... 😌
          </p>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.2s linear infinite;
        }
      `}} />
    </div>
  );
};

export default ArtistQuestionPage;
