import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from '@/components/UI/Loader';

const LazyRouteWrapper = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};

export default LazyRouteWrapper;
