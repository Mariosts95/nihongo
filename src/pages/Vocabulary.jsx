import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import PageWrapper from '@/components/Wrappers/PageWrapper';

const Vocabulary = () => {
  return (
    <PageWrapper>
      <Card sx={{ maxWidth: 320, mx: 'auto', my: 3 }}>
        <CardMedia
          component='img'
          height='320'
          image='/images/cat-keyboard.gif'
          alt='cat-keyboard'
        />
        <CardContent>
          <Typography variant='body1' color='text.primary' textAlign='center'>
            Coming Soon!
          </Typography>
        </CardContent>
      </Card>

      <Button
        component={Link}
        to='/'
        variant='contained'
        sx={{
          maxWidth: 220,
          display: 'block',
          mx: 'auto',
          my: 2,
          textAlign: 'center',
        }}
        size='large'
      >
        Return to home
      </Button>
    </PageWrapper>
  );
};

export default Vocabulary;
