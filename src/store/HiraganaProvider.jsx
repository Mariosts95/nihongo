import { createContext, useContext, useState } from 'react';

import hiraganaData from '@/assets/hiragana.json';

import { randomInt } from '@/utils/helpers';

const HiraganaContext = createContext();

const UseHiragana = () => useContext(HiraganaContext);

const HiraganaProvider = ({ children }) => {
  const [hiragana, setHiragana] = useState([]);
  const [hiraganaOptions, setHiraganaOptions] = useState({
    gojuuon: false,
    dakuon: false,
    handakuon: false,
    youon: false,
  });

  // Update hiragana state on checkbox change
  // Hiragana types "gojuuon", "dakuon", "handakuon", "youon"
  const updateHiragana = (e) => {
    if (e.target.checked) {
      setHiragana((prev) => [
        ...prev,
        ...hiraganaData.filter((kana) => kana.type === e.target.name),
      ]);
    } else {
      setHiragana(hiragana.filter((kana) => kana.type !== e.target.name));
    }
  };

  // update hiragana options state on checkbox change
  const updateHiraganaOptions = (e) => {
    setHiraganaOptions((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
    if (e.target.checked) {
      setHiragana((prev) => [
        ...prev,
        ...hiraganaData.filter((kana) => kana.type === e.target.name),
      ]);
    } else {
      setHiragana(hiragana.filter((kana) => kana.type !== e.target.name));
    }
  };

  const resetHiragana = () => {
    setHiragana([]);
    setHiraganaOptions({
      gojuuon: false,
      dakuon: false,
      handakuon: false,
      youon: false,
    });
  };

  // Get random kana from hiragana state
  const getRandomHiragana = () => hiragana[randomInt(0, hiragana.length - 1)];

  const filterHiragana = (type) => hiragana.filter((kana) => kana.type === type);

  return (
    <HiraganaContext.Provider
      value={{
        hiragana,
        updateHiragana,
        getRandomHiragana,
        filterHiragana,
        hiraganaOptions,
        updateHiraganaOptions,
        resetHiragana,
      }}
    >
      {children}
    </HiraganaContext.Provider>
  );
};

export { UseHiragana };

export default HiraganaProvider;
