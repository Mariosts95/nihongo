import { createContext, useContext, useEffect, useState } from 'react';

import useLocalStorageState from '../hooks/useLocalStorageState';

const ThemeSelectionContext = createContext();

const useThemeSelection = () => useContext(ThemeSelectionContext);

const ThemeSelectionProvider = ({ children }) => {
  const [themeSelection, setThemeSelection] = useState('light');
  const [themeSelectionLS, setThemeSelectionLS] = useLocalStorageState(
    'themeSelection',
    themeSelection
  );

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

  return (
    <ThemeSelectionContext.Provider
      value={{
        themeSelection,
        updateThemeSelection,
      }}
    >
      {children}
    </ThemeSelectionContext.Provider>
  );
};

export { useThemeSelection };

export default ThemeSelectionProvider;
