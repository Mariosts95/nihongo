import Typography from '@mui/material/Typography';

import QuoteCard from '@/components/Cards/QuoteCard';
import PageWrapper from '@/components/Wrappers/PageWrapper';

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
