// App.jsx
import React, { useState } from 'react';
import CardList from './CardList';
import './App.css';

const App = () => {
  const cardPairs = [
    { question: 'ア', answer: 'a' },
    { question: 'イ', answer: 'i' },
    { question: 'ウ', answer: 'u' },
    { question: 'エ', answer: 'e' },
    { question: 'オ', answer: 'o' },
    { question: 'カ', answer: 'ka'},
    { question: 'キ', answer: 'ki'},
    { question: 'ク', answer: 'ku'},
    { question: 'ケ', answer: 'ke'},
    { question: 'コ', answer: 'ko'},
    { question: 'サ', answer: 'sa'},
    { question: 'シ', answer: 'shi'},
    { question: 'ス', answer: 'su'},
    { question: 'セ', answer: 'se'},
    { question: 'ソ', answer: 'so'},
    { question: 'タ', answer: 'ta'},
    { question: 'チ', answer: 'chi'},
    { question: 'ツ', answer: 'tsu'},
    { question: 'テ', answer: 'te'},
    { question: 'ト', answer: 'to'},
    { question: 'ナ', answer: 'na'},
    { question: 'ニ', answer: 'ni'},
    { question: 'ヌ', answer: 'nu'},
    { question: 'ネ', answer: 'ne'},
    { question: 'ノ', answer: 'no'},
    { question: 'ハ', answer: 'ha'},
    { question: 'ヒ', answer: 'hi'},
    { question: 'フ', answer: 'fu'},
    { question: 'ヘ', answer: 'he'},
    { question: 'ホ', answer: 'ho'},
    { question: 'マ', answer: 'ma'},
    { question: 'ミ', answer: 'mi'},
    { question: 'ム', answer: 'mu'},
    { question: 'メ', answer: 'me'},
    { question: 'モ', answer: 'mo'},
    { question: 'ヤ', answer: 'ya'},
    { question: 'ユ', answer: 'yu'},
    { question: 'ヨ', answer: 'yo'},
    { question: 'ラ', answer: 'ra'},
    { question: 'リ', answer: 'ri'},
    { question: 'ル', answer: 'ru'},
    { question: 'レ', answer: 're'},
    { question: 'ロ', answer: 'ro'},
    { question: 'ワ', answer: 'wa'},
    { question: 'ヲ', answer: 'wo'},
    { question: 'ガ', answer: 'ga'},
    { question: 'ギ', answer: 'gi'},
    { question: 'グ', answer: 'gu'},
    { question: 'ゲ', answer: 'ge'},
    { question: 'ゴ', answer: 'go'},
    { question: 'ザ', answer: 'za'},
    { question: 'ジ', answer: 'ji'},
    { question: 'ズ', answer: 'zu'},
    { question: 'ゼ', answer: 'ze'},
    { question: 'ゾ', answer: 'zo'},
    { question: 'ダ', answer: 'da'},
    { question: 'ヂ', answer: 'dji'},
    { question: 'ヅ', answer: 'dzu'},
    { question: 'デ', answer: 'de'},
    { question: 'ド', answer: 'do'},
    { question: 'バ', answer: 'ba'},
    { question: 'ビ', answer: 'bi'},
    { question: 'ブ', answer: 'bu'},
    { question: 'ベ', answer: 'be'},
    { question: 'ボ', answer: 'bo'},
    { question: 'パ', answer: 'pa'},
    { question: 'ピ', answer: 'pi'},
    { question: 'プ', answer: 'pu'},
    { question: 'ペ', answer: 'pe'},
    { question: 'ポ', answer: 'po'},
    { question: 'ヴ', answer: 'v'},
    { question: 'ン', answer: 'n'},
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setShowAnswer(false); // Set showAnswer to false before moving to the next card
    setCurrentCardIndex(Math.floor(Math.random() * cardPairs.length));
  };

  return (
    <div className="App">
      <div>
        <h1>Katakana flashcards</h1>
        <h2>Katakana is one of the 3 kinds of characters you can encounter when reading Japanese.
          it is used as loanwords from other languages or to put emphasis on a type of word.
          There are 46 basic characters, 71 if you include the "muddy" versions of some characters (i.e. カ (ka) and ガ (ga)).
          This set of cards does NOT include conjogate characters like キョ(kyo), or カッタ (katta)
          since these flashcards would be too long.
        </h2>
      </div>
      <CardList cards={[cardPairs[currentCardIndex]]} showAnswer={showAnswer} setShowAnswer={setShowAnswer} />
      <button onClick={nextCard}>Next Card</button>
    </div>
  );
};

export default App;
