
import React, { useState } from 'react';
import { Question } from '../types';

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Who is the most annoying person you've ever met?",
    options: ["Akiriti", "The girl who steals my hoodies", "My favorite headache", "The one reading this right now"],
    correctIndex: 0, // In this case, any is fine, but we'll just handle it specially
    trollResponse: "Exactly. It's you, and it's always been you! 😂"
  },
  {
    id: 2,
    text: "What's the best thing about us?",
    options: ["Your smile", "My humor", "The fact that I'm always right", "Food dates"],
    correctIndex: 2,
    trollResponse: "Aha! I knew you'd agree I'm always right."
  },
  {
    id: 3,
    text: "How much do you love me, honestly?",
    options: ["A little bit", "Quite a lot", "Infinite + 1", "I'm just here for the hearts"],
    correctIndex: 2, // Infinite + 1 is the only "correct" one
    trollResponse: "Infinite + 1 is the minimum requirement. Good choice."
  }
];

interface TrollQuestionPageProps {
  onComplete: () => void;
}

const TrollQuestionPage: React.FC<TrollQuestionPageProps> = ({ onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);

  const question = QUESTIONS[currentIdx];
  const isLastQuestion = currentIdx === QUESTIONS.length - 1;

  const handleSelect = (idx: number) => {
    if (isLastQuestion) {
      if (idx !== question.correctIndex) {
        setHiddenOptions(prev => [...prev, idx]);
        return;
      }
    }
    
    setSelectedOption(idx);
    setShowResponse(true);
  };

  const handleNext = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setShowResponse(false);
      setSelectedOption(null);
      setHiddenOptions([]);
    } else {
      onComplete();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative">
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border-2 border-pink-100 max-w-lg w-full">
        <div className="mb-6">
          <span className="bg-pink-100 text-pink-600 py-1 px-4 rounded-full text-sm font-bold">
            Question {currentIdx + 1} of {QUESTIONS.length}
          </span>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-8">{question.text}</h2>

        <div className="space-y-4">
          {question.options.map((opt, idx) => {
            if (hiddenOptions.includes(idx)) return null;
            
            return (
              <button
                key={idx}
                disabled={showResponse}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedOption === idx 
                    ? 'bg-pink-500 text-white border-pink-600 scale-102' 
                    : 'bg-white border-pink-50 hover:border-pink-300 hover:bg-pink-50 text-gray-700'
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {showResponse && (
          <div className="mt-8 animate-fade-in">
            <p className="text-pink-600 font-bold text-lg mb-6 italic">
              "{question.trollResponse}"
            </p>
            <button
              onClick={handleNext}
              className="w-full bg-pink-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-pink-700 transition-colors"
            >
              {isLastQuestion ? "Wait, I have one more thing..." : "Next Question"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrollQuestionPage;
