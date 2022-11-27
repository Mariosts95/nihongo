import { Outlet } from 'react-router-dom';

import HiraganaProvider from '@/store/HiraganaProvider';

const HiraganaContextWrapper = () => {
  return (
    <HiraganaProvider>
      <Outlet />
    </HiraganaProvider>
  );
};

export default HiraganaContextWrapper;
