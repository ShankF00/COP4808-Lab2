// Card.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

const Card = ({ card, showAnswer, setShowAnswer }) => {
  const [localShowAnswer, setLocalShowAnswer] = useState(false);

  useEffect(() => {
    setLocalShowAnswer(showAnswer);
  }, [showAnswer]);

  const toggleAnswer = () => {
    setLocalShowAnswer(!localShowAnswer);
    setShowAnswer(!localShowAnswer); // Toggle the answer in the parent component
  };

  const cardStyle = {
    border: '1px solid #ffffff',
    height: '75px',
    width: '200px',
    marginLeft: '430px',
    fontSize: '50px',
  };

  return (
    <div className="card" style={cardStyle} onClick={toggleAnswer}>
      <div className={localShowAnswer ? 'card-back' : 'card-front'} style={{ justifyContent: 'center', verticalAlign: 'middle' }}>
        <h3 style={{ marginTop: '1px' }}>{localShowAnswer ? card.answer : card.question}</h3>
      </div>
    </div>
  );
};

export default Card;
