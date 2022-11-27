import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import HiraganaProvider from './store/HiraganaProvider';
import { useThemeSelection } from './store/ThemeSelectionProvider';

import Test from './pages/Test';

import HeaderMenu from './components/HeaderMenu';
import Loader from './components/Loader';

import { darkTheme, lightTheme } from './theme/theme';

const Home = lazy(() => import('./pages/Home'));
const Learn = lazy(() => import('./pages/Learn'));
const RandomKana = lazy(() => import('./pages/RandomKana'));

const App = () => {
  const { themeSelection } = useThemeSelection();

  return (
    <ThemeProvider theme={themeSelection === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <HiraganaProvider>
        <HeaderMenu />
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path='/learn-hiragana'
            element={
              <Suspense fallback={<Loader />}>
                <Learn />
              </Suspense>
            }
          />
          <Route
            path='/random-hiragana'
            element={
              <Suspense fallback={<Loader />}>
                <RandomKana />
              </Suspense>
            }
          />
          <Route
            path='/test-hiragana'
            element={
              <Suspense fallback={<Loader />}>
                <Test />
              </Suspense>
            }
          />
        </Routes>
      </HiraganaProvider>
    </ThemeProvider>
  );
};

export default App;
