import Paper from '@mui/material/Paper';

import ScrollToTop from '@/components/UI/ScrollToTop';

const PageWrapper = ({ children }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        minHeight: { xs: 'calc(100vh - 56px)', md: 'calc(100vh - 68px)' },
        height: '100%',
      }}
    >
      {children}
      <ScrollToTop />
    </Paper>
  );
};

export default PageWrapper;
