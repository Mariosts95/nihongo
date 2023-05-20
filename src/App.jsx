import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import LazyRouteWrapper from './components/Wrappers/LazyRouteWrapper';
import HeaderMenu from '@/components/UI/HeaderMenu';
import Loader from '@/components/UI/Loader';

import { darkTheme, lightTheme } from '@/theme';

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
  const theme = useSelector((state) => state.global.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
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

        <Route path='/hiragana' element={<LazyRouteWrapper />}>
          <Route index element={<Hiragana />} />
          <Route path='learn' element={<HiraganaLearn />} />
          <Route path='random' element={<HiraganaRandom />} />
          <Route path='test' element={<HiraganaTest />} />
        </Route>

        <Route path='/katakana' element={<LazyRouteWrapper />}>
          <Route index element={<Katakana />} />
          <Route path='learn' element={<KatakanaLearn />} />
          <Route path='random' element={<KatakanaRandom />} />
          <Route path='test' element={<KatakanaTest />} />
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
    </ThemeProvider>
  );
};

export default App;
