import Typography from '@mui/material/Typography';

import PageWrapper from '../components/PageWrapper';
import QuoteCard from '../components/QuoteCard';

const Home = () => {
  return (
    <PageWrapper>
      <Typography variant='h4' textAlign='center' gutterBottom>
        Welcome to, <br /> Nihongo Learner!
      </Typography>
      <Typography variant='body2' textAlign='center' gutterBottom>
        Please use the menu on the top-left <br />
        to navigate to different pages.
      </Typography>
      <QuoteCard />
    </PageWrapper>
  );
};

export default Home;
