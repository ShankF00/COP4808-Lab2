// CardList.jsx
import React from 'react';
import Card from './Card';

const CardList = ({ cards, showAnswer, setShowAnswer }) => {
  return (
    <div style={{ alignItems: 'center', alignContent: 'center' }}>
      {cards.map((card, index) => (
        <Card key={index} card={card} showAnswer={showAnswer} setShowAnswer={setShowAnswer} />
      ))}
    </div>
  );
};

export default CardList;
