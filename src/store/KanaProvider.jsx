import { randomInt } from '../utils/helpers';

import { createContext, useContext, useState } from 'react';

import hiraganaData from '../assets/hiragana.json';
import katakanaData from '../assets/katakana.json';

const KanaContext = createContext();

const UseKana = () => useContext(KanaContext);

// Hiragana and Katakana types "gojuuon", "dakuon", "handakuon", "youon"
const initialState = {
  hiragana: {
    kana: [],
    options: { gojuuon: false, dakuon: false, handakuon: false, youon: false },
  },
  katakana: {
    kana: [],
    options: { gojuuon: false, dakuon: false, handakuon: false, youon: false },
  },
};

const KanaProvider = ({ children }) => {
  const [kanaData, setKanaData] = useState(initialState);

  // Update hiragana state on checkbox change
  const updateHiragana = (e) => {
    if (e.target.checked) {
      setKanaData((prev) => ({
        ...prev,
        hiragana: {
          ...prev.hiragana,
          kana: [
            ...prev.hiragana.kana,
            ...hiraganaData.filter((kana) => kana.type === e.target.name),
          ],
        },
      }));
    } else {
      setKanaData((prev) => ({
        ...prev,
        hiragana: {
          ...prev.hiragana,
          kana: prev.hiragana.kana.filter((kana) => kana.type !== e.target.name),
        },
      }));
    }
  };

  const updateKatakana = (e) => {
    if (e.target.checked) {
      setKanaData((prev) => ({
        ...prev,
        katakana: {
          ...prev.katakana,
          kana: [
            ...prev.katakana.kana,
            ...katakanaData.filter((kana) => kana.type === e.target.name),
          ],
        },
      }));
    } else {
      setKanaData((prev) => ({
        ...prev,
        katakana: {
          ...prev.katakana,

          kana: prev.katakana.kana.filter((kana) => kana.type !== e.target.name),
        },
      }));
    }
  };

  // update hiragana options state on checkbox change
  const updateHiraganaOptions = (e) => {
    setKanaData((prev) => ({
      ...prev,
      hiragana: {
        ...prev.hiragana,
        options: {
          ...prev.hiragana.options,
          [e.target.name]: e.target.checked,
        },
      },
    }));
  };

  const updateKatakanaOptions = (e) => {
    setKanaData((prev) => ({
      ...prev,
      katakana: {
        ...prev.katakana,
        options: {
          ...prev.katakana.options,
          [e.target.name]: e.target.checked,
        },
      },
    }));
  };

  const resetHiragana = () => {
    setKanaData((prev) => ({
      ...prev,
      hiragana: {
        kana: [],
        options: {
          gojuuon: false,
          dakuon: false,
          handakuon: false,
          youon: false,
        },
      },
    }));
  };

  const resetKatakana = () => {
    setKanaData((prev) => ({
      katakana: {
        kana: [],
        options: {
          gojuuon: false,
          dakuon: false,
          handakuon: false,
          youon: false,
        },
      },
    }));
  };

  // Get random kana from hiragana state
  const getRandomHiragana = () =>
    kanaData.hiragana.kana[randomInt(0, kanaData.hiragana.kana.length - 1)];

  const filterHiragana = (type) => kanaData.hiragana.kana.filter((kana) => kana.type === type);

  return (
    <KanaContext.Provider
      value={{
        kanaData,
        updateHiragana,
        updateKatakana,
        updateHiraganaOptions,
        updateKatakanaOptions,
        resetHiragana,
        resetKatakana,
        getRandomHiragana,
        filterHiragana,
      }}
    >
      {children}
    </KanaContext.Provider>
  );
};

export { UseKana };

export default KanaProvider;
