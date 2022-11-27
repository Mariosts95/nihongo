import { createContext, useContext, useEffect, useState } from 'react';

import useLocalStorageState from '../hooks/useLocalStorageState';

const ThemeSelectionContext = createContext();

const useGeneral = () => useContext(ThemeSelectionContext);

const GeneralProvider = ({ children }) => {
  // App theme
  const [themeSelection, setThemeSelection] = useState('light');
  const [themeSelectionLS, setThemeSelectionLS] = useLocalStorageState(
    'themeSelection',
    themeSelection
  );

  // Random kana display language, Japanese or English (default) true = Japanese
  const [kanaDisplayLanguage, setKanaDisplayLanguage] = useState(true);

  // if there is a theme in local storage, set it to the themeSelection state
  useEffect(() => {
    if (themeSelectionLS) {
      setThemeSelection(themeSelectionLS);
    }
  }, []);

  // update theme in local storage every time the theme changes
  useEffect(() => {
    setThemeSelectionLS(themeSelection);
  }, [themeSelection]);

  const updateThemeSelection = () => {
    setThemeSelection((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };

  const updateKanaDisplayLang = () => {
    setKanaDisplayLanguage((prev) => !prev);
  };

  return (
    <ThemeSelectionContext.Provider
      value={{
        themeSelection,
        updateThemeSelection,
        kanaDisplayLanguage,
        updateKanaDisplayLang,
      }}
    >
      {children}
    </ThemeSelectionContext.Provider>
  );
};

export { useGeneral };

export default GeneralProvider;
