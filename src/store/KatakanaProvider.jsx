import { createContext, useContext, useState } from 'react';

import katakanaData from '@/assets/katakana.json';

import { randomInt } from '@/utils/helpers';

const KatakanaContext = createContext();

const UseKatakana = () => useContext(KatakanaContext);

const KatakanaProvider = ({ children }) => {
  const [katakana, setKatakana] = useState([]);
  const [katakanaOptions, setKatakanaOptions] = useState({
    gojuuon: false,
    dakuon: false,
    handakuon: false,
    youon: false,
  });

  // Update Katakana state on checkbox change
  // Katakana types "gojuuon", "dakuon", "handakuon", "youon"
  const updateKatakana = (e) => {
    if (e.target.checked) {
      setKatakana((prev) => [
        ...prev,
        ...katakanaData.filter((kana) => kana.type === e.target.name),
      ]);
    } else {
      setKatakana(katakana.filter((kana) => kana.type !== e.target.name));
    }
  };

  // update Katakana options state on checkbox change
  const updateKatakanaOptions = (e) => {
    setKatakanaOptions((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
    if (e.target.checked) {
      setKatakana((prev) => [
        ...prev,
        ...katakanaData.filter((kana) => kana.type === e.target.name),
      ]);
    } else {
      setKatakana(katakana.filter((kana) => kana.type !== e.target.name));
    }
  };

  const resetKatakana = () => {
    setKatakana([]);
    setKatakanaOptions({
      gojuuon: false,
      dakuon: false,
      handakuon: false,
      youon: false,
    });
  };

  // Get random kana from Katakana state
  const getRandomKatakana = () => katakana[randomInt(0, katakana.length - 1)];

  const filterKatakana = (type) => katakana.filter((kana) => kana.type === type);

  return (
    <KatakanaContext.Provider
      value={{
        katakana,
        updateKatakana,
        getRandomKatakana,
        filterKatakana,
        katakanaOptions,
        updateKatakanaOptions,
        resetKatakana,
      }}
    >
      {children}
    </KatakanaContext.Provider>
  );
};

export { UseKatakana };

export default KatakanaProvider;
