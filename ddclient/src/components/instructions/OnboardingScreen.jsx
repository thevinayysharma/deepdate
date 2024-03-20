// OnBoardingScreen.js
import React, { useState } from 'react';
import './OnBoardingScreen.css'; // Import CSS for styling

const OnBoardingScreen = ({ instructions }) => {
  const [stepIndex, setStepIndex] = useState(0);

  const handleNextStep = () => {
    if (stepIndex < instructions.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const handlePrevStep = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  return (
    <div className="instruction-screen">
      <div className="instruction-content">
        <h2>{instructions[stepIndex].title}</h2>
        <p>{instructions[stepIndex].description}</p>
      </div>
      <div className="instruction-actions">
        <button onClick={handlePrevStep} disabled={stepIndex === 0}>Previous</button>
        <button onClick={handleNextStep} disabled={stepIndex === instructions.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default OnBoardingScreen;
