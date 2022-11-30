import { createContext, useContext, useEffect, useState } from 'react';

import words from '@/assets/genki-1-vocabulary.json';

import { randomInt } from '@/utils/helpers';

const VocabularyContext = createContext();

const UseVocabulary = () => useContext(VocabularyContext);

const VocabularyProvider = ({ children }) => {
  const [vocabulary, setVocabulary] = useState([]);
  const [lessons, setLessons] = useState(0);

  useEffect(() => {
    const set = new Set(words.map((word) => word.lesson));

    setLessons([...set]);
    updateVocabulary(0);
  }, []);

  const updateVocabulary = (lesson) => {
    setVocabulary(words.filter((word) => word.lesson === lesson));
  };

  const resetVocabulary = () => {
    setVocabulary([]);
  };

  // Get random kana from Katakana state
  const getRandomWord = () => vocabulary[randomInt(0, words.length - 1)];

  return (
    <VocabularyContext.Provider
      value={{ vocabulary, updateVocabulary, resetVocabulary, getRandomWord, lessons }}
    >
      {children}
    </VocabularyContext.Provider>
  );
};

export { UseVocabulary };

export default VocabularyProvider;
