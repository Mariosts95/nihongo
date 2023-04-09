import useElementHeight from '@/hooks/useElementHeight';

import Paper from '@mui/material/Paper';

import ScrollToTop from '@/components/UI/ScrollToTop';

const PageWrapper = ({ children }) => {
  const headerHeight = useElementHeight('header');

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        minHeight: `calc(100vh - ${headerHeight}px)`,
        height: '100%',
      }}
    >
      {children}
      <ScrollToTop />
    </Paper>
  );
};

export default PageWrapper;
