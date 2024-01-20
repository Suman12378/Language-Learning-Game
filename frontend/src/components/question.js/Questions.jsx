import React, { useState } from 'react';
import './questions.scss';
import { useLocation } from 'react-router-dom';
import toast, {} from 'react-hot-toast';

const Questions = () => {
  const location = useLocation();
  const { state } = location;
  const arr = state?.arr || [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const handleOptionSelect = (selected) => {
    setSelectedOption(selected);
    // Check if the selected option is correct
    const correctAnswer = arr[currentQuestionIndex].ans;
    const isCorrect = selected === correctAnswer;

    if(isCorrect){
      toast.success('Your answer is Correct');
    }
    else{
      toast.error('Your Answer is Wrong');
    }
    setIsAnswerCorrect(isCorrect);
  };

  const handleNextQuestion = () => {
    // Move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    // Reset selected option and answer correctness for the next question
    setSelectedOption(null);
    setIsAnswerCorrect(null);
  };

  return (
    <div className="question">
      {currentQuestionIndex < arr.length ? (
        <div>
          <h3>{arr[currentQuestionIndex].question}</h3>
          <form>
            {arr[currentQuestionIndex].options.map((option, index) => (
              <label key={index} className="option-label">
                <input
                  type="radio"
                  name="options"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />
                {option}
              </label>
            ))}
          </form>

          {selectedOption !== null && (
            <div className={`result-popup ${isAnswerCorrect ? 'correct' : 'wrong'}`}>
              {isAnswerCorrect ? 'Correct!' : 'Wrong!'} The correct answer is {arr[currentQuestionIndex].ans}.
            </div>
          )}

          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          {/* Display any summary or completion message here */}
        </div>
      )}
    </div>
  );
};

export default Questions;
