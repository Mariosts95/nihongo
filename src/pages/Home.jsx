// MUI
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

// Data

const Home = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, height: '50vh' }}>
      <Typography variant='h4' textAlign='center'>
        Hello there, <br /> please choose an option from the menu{' '}
      </Typography>
    </Paper>
  );
};

export default Home;
