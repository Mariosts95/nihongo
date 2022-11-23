import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import HiraganaProvider from './store/hiraganaProvider';

import HeaderMenu from './components/HeaderMenu';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const Learn = lazy(() => import('./pages/Learn'));
const RandomKana = lazy(() => import('./pages/RandomKana'));

const App = () => {
  return (
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
          path='/learn'
          element={
            <Suspense fallback={<Loader />}>
              <Learn />
            </Suspense>
          }
        />
        <Route
          path='/random-kana'
          element={
            <Suspense fallback={<Loader />}>
              <RandomKana />
            </Suspense>
          }
        />
      </Routes>
    </HiraganaProvider>
  );
};

export default App;
