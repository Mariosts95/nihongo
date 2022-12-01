import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import VocabularyProvider from '@/store/VocabularyProvider';

import Loader from '@/components/UI/Loader';

const VocabularyContextWrapper = () => {
  return (
    <VocabularyProvider>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </VocabularyProvider>
  );
};

export default VocabularyContextWrapper;
