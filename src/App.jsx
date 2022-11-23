import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import HiraganaProvider from './store/hiraganaProvider';

import HeaderMenu from './components/HeaderMenu';

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
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/learn'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Learn />
            </Suspense>
          }
        />
        <Route
          path='/random-kana'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <RandomKana />
            </Suspense>
          }
        />
      </Routes>
    </HiraganaProvider>
  );
};

export default App;
