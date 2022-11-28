import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import KatakanaProvider from '@/store/KatakanaProvider';

import Loader from '@/components/UI/Loader';

const KatakanaContextWrapper = () => {
  return (
    <KatakanaProvider>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </KatakanaProvider>
  );
};

export default KatakanaContextWrapper;
