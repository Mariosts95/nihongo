import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { useGeneral } from '@/store/GeneralProvider';
import HiraganaProvider from '@/store/HiraganaProvider';
import KatakanaProvider from '@/store/KatakanaProvider';

import HeaderMenu from '@/components/UI/HeaderMenu';
import Loader from '@/components/UI/Loader';

import { darkTheme, lightTheme } from './theme';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Hiragana = lazy(() => import('./pages/Hiragana/Hiragana'));
const HiraganaLearn = lazy(() => import('./pages/Hiragana/HiraganaLearn'));
const HiraganaRandom = lazy(() => import('./pages/Hiragana/HiraganaRandom'));
const HiraganaTest = lazy(() => import('./pages/Hiragana/HiraganaTest'));

const Katakana = lazy(() => import('./pages/Katakana/Katakana'));
const KatakanaLearn = lazy(() => import('./pages/Katakana/KatakanaLearn'));
const KatakanaRandom = lazy(() => import('./pages/Katakana/KatakanaRandom'));
const KatakanaTest = lazy(() => import('./pages/Katakana/KatakanaTest'));

const App = () => {
  const { themeSelection } = useGeneral();

  return (
    <ThemeProvider theme={themeSelection === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <HeaderMenu />
      <HiraganaProvider>
        <KatakanaProvider>
          <Routes>
            <Route
              path='/'
              element={
                <Suspense fallback={<Loader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route path='/hiragana'>
              <Route
                index
                element={
                  <Suspense fallback={<Loader />}>
                    <Hiragana />
                  </Suspense>
                }
              />
              <Route
                path='learn'
                element={
                  <Suspense fallback={<Loader />}>
                    <HiraganaLearn />
                  </Suspense>
                }
              />
              <Route
                path='random'
                element={
                  <Suspense fallback={<Loader />}>
                    <HiraganaRandom />
                  </Suspense>
                }
              />
              <Route
                path='test'
                element={
                  <Suspense fallback={<Loader />}>
                    <HiraganaTest />
                  </Suspense>
                }
              />
            </Route>

            <Route path='/katakana'>
              <Route
                index
                element={
                  <Suspense fallback={<Loader />}>
                    <Katakana />
                  </Suspense>
                }
              />
              <Route
                path='learn'
                element={
                  <Suspense fallback={<Loader />}>
                    <KatakanaLearn />
                  </Suspense>
                }
              />
              <Route
                path='random'
                element={
                  <Suspense fallback={<Loader />}>
                    <KatakanaRandom />
                  </Suspense>
                }
              />
              <Route
                path='test'
                element={
                  <Suspense fallback={<Loader />}>
                    <KatakanaTest />
                  </Suspense>
                }
              />
            </Route>

            <Route
              path='*'
              element={
                <Suspense fallback={<Loader />}>
                  <NotFound />
                </Suspense>
              }
            />
          </Routes>
        </KatakanaProvider>
      </HiraganaProvider>
    </ThemeProvider>
  );
};

export default App;
