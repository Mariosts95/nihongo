import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import HiraganaProvider from '@/store/HiraganaProvider';

import Loader from '@/components/UI/Loader';

const HiraganaContextWrapper = () => {
  return (
    <HiraganaProvider>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </HiraganaProvider>
  );
};

export default HiraganaContextWrapper;
