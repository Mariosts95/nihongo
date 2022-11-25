import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import QuoteCard from '../components/QuoteCard';

const Home = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        minHeight: '100%',
        height: { xs: 'calc(100vh - 56px)', md: 'calc(100vh - 68px)' },
      }}
    >
      <Typography variant='h4' textAlign='center' gutterBottom>
        Welcome to, <br /> Nihongo Learner!
      </Typography>
      <Typography variant='body2' textAlign='center' gutterBottom>
        Please use the menu on the top-left <br />
        to navigate to different pages.
      </Typography>
      <QuoteCard />
    </Paper>
  );
};

export default Home;
