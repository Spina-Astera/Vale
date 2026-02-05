
import React, { useState } from 'react';

interface PasswordPageProps {
  onSuccess: () => void;
}

const PasswordPage: React.FC<PasswordPageProps> = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Password is Oct 5th 2005. Let's accept 05102005, 5thoctober2005, etc.
  const validate = () => {
    const clean = password.toLowerCase().replace(/[\s\/\-]/g, '');
    if (clean === '05102005' || clean === '5thoctober2005' || clean === 'october5th2005') {
      onSuccess();
    } else {
      setError('Wait... that\'s not my birthday! 😤 Try again!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border-4 border-pink-200 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-6">Halt! Who goes there? ✋</h1>
        <p className="text-gray-600 mb-8 font-medium">
          Only someone who knows my birthday (DD-MM-YYYY) can enter this sacred space for Akiriti.
        </p>
        
        <input
          type="text"
          placeholder="Enter the magic date..."
          className="w-full p-4 border-2 border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-center text-lg mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && validate()}
        />
        
        {error && <p className="text-red-500 mb-4 animate-bounce">{error}</p>}
        
        <button
          onClick={validate}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          Enter Heart Sanctuary
        </button>

        <p className="mt-4 text-xs text-gray-400">Hint: 5th October 2005</p>
      </div>
    </div>
  );
};

export default PasswordPage;
