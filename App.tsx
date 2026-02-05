
import React, { useState } from 'react';
import { Step } from './types';
import FloatingHearts from './components/FloatingHearts';
import PasswordPage from './components/PasswordPage';
import ArtistQuestionPage from './components/ArtistQuestionPage';
import TrollQuestionPage from './components/TrollQuestionPage';
import LoveSliderPage from './components/LoveSliderPage';
import FinalAskPage from './components/FinalAskPage';
import CelebrationPage from './components/CelebrationPage';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>(Step.PASSWORD);
  const name = "Akiriti";

  const renderContent = () => {
    switch (step) {
      case Step.PASSWORD:
        return <PasswordPage onSuccess={() => setStep(Step.FAVORITE_ARTIST)} />;
      case Step.FAVORITE_ARTIST:
        return <ArtistQuestionPage onCorrect={() => setStep(Step.TROLL_QUESTIONS)} />;
      case Step.TROLL_QUESTIONS:
        return <TrollQuestionPage onComplete={() => setStep(Step.LOVE_SLIDER)} />;
      case Step.LOVE_SLIDER:
        return <LoveSliderPage onNext={() => setStep(Step.FINAL_ASK)} name={name} />;
      case Step.FINAL_ASK:
        return <FinalAskPage onYes={() => setStep(Step.CELEBRATION)} name={name} />;
      case Step.CELEBRATION:
        return <CelebrationPage name={name} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#fce4ec] selection:bg-pink-200">
      <FloatingHearts />
      <div className="relative z-10">
        {renderContent()}
      </div>
      
      {/* Footer Branding */}
      <footer className="fixed bottom-4 right-4 text-pink-400 text-xs font-semibold uppercase tracking-widest opacity-60">
        Made for {name} with ❤️
      </footer>
    </div>
  );
};

export default App;
