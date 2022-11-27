import { Outlet } from 'react-router-dom';

import KatakanaProvider from '@/store/KatakanaProvider';

const KatakanaContextWrapper = () => {
  return (
    <KatakanaProvider>
      <Outlet />
    </KatakanaProvider>
  );
};

export default KatakanaContextWrapper;
