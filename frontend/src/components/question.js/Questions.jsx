import React, { useState } from 'react';
import './questions.scss';
import { useLocation } from 'react-router-dom';

const Questions = () => {

     const location = useLocation();

    const { state } = location;
   
    const arr = state?.arr || []; 

    // console.log( arr.length );

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const handleOptionSelect = (selected) => {
      setSelectedOption(selected);
  
      // Check if the selected option is correct
      const correctAnswer = arr[currentQuestionIndex].correctAnswer;
      const isCorrect = selected === correctAnswer;
  
      setIsAnswerCorrect(isCorrect);
    };

    const handleNextQuestion = () => {
      // Move to the next question
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      // Reset selected option and answer correctness for the next question
      setSelectedOption(null);
      setIsAnswerCorrect(null);
    };

    // console.log(arr);


  return (
    <div className="question">
      {currentQuestionIndex < arr.length ? (
        <div>
          <h3>{arr[currentQuestionIndex].question}</h3>
          <ul>
            {arr[currentQuestionIndex].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={selectedOption === option ? 'selected' : ''}
              >
                {option}
              </li>
            ))}
          </ul>

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
  )
}

export default Questions