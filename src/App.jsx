import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { useGlobal } from '@/store/GlobalProvider';

import HiraganaContextWrapper from './components/Wrappers/HiraganaContextWrapper';
import KatakanaContextWrapper from './components/Wrappers/KatakanaContextWrapper';
import VocabularyContextWrapper from './components/Wrappers/VocabularyContextWrapper';
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

const Vocabulary = lazy(() => import('./pages/Vocabulary/Vocabulary'));
const VocabularyLearn = lazy(() => import('./pages/Vocabulary/VocabularyLearn'));
const VocabularyRandom = lazy(() => import('./pages/Vocabulary/VocabularyRandom'));

const App = () => {
  const { themeSelection } = useGlobal();

  return (
    <ThemeProvider theme={themeSelection === 'light' ? lightTheme : darkTheme}>
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

        <Route path='/hiragana' element={<HiraganaContextWrapper />}>
          <Route index element={<Hiragana />} />
          <Route path='learn' element={<HiraganaLearn />} />
          <Route path='random' element={<HiraganaRandom />} />
          <Route path='test' element={<HiraganaTest />} />
        </Route>

        <Route path='/katakana' element={<KatakanaContextWrapper />}>
          <Route index element={<Katakana />} />
          <Route path='learn' element={<KatakanaLearn />} />
          <Route path='random' element={<KatakanaRandom />} />
          <Route path='test' element={<KatakanaTest />} />
        </Route>

        <Route path='/vocabulary' element={<VocabularyContextWrapper />}>
          <Route index element={<Vocabulary />} />
          <Route path='learn' element={<VocabularyLearn />} />
          <Route path='random' element={<VocabularyRandom />} />
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
