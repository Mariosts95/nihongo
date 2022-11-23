import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import QuoteCard from '../components/QuoteCard';

const Home = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, minHeight: '100%' }}>
      <Typography variant='h4' textAlign='center'>
        Hello there, <br /> please choose an option from the menu.
      </Typography>
      <QuoteCard />
    </Paper>
  );
};

export default Home;
