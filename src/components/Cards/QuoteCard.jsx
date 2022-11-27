import useFetch from '@/hooks/useFetch';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

const QuoteCard = () => {
  // Get a random anime quote
  const { data, loading, error } = useFetch('https://animechan.vercel.app/api/random');

  if (loading || !data) {
    return (
      <Card sx={{ maxWidth: 350, mx: 'auto', my: 2 }}>
        <Skeleton width={350} height={250} variant='rounded' />
      </Card>
    );
  }

  if (error) {
    return (
      <Card sx={{ maxWidth: 220, mx: 'auto', my: 3 }}>
        <CardMedia
          component='img'
          height='220'
          image='/images/tobi-funny.gif'
          alt='akatsuki-tobi'
        />
        <CardContent>
          <Typography variant='body1' color='text.primary' textAlign='center'>
            Oops something went wrong!
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ maxWidth: 350, mx: 'auto', my: 3 }}>
      <CardContent>
        <Typography variant='h3' color='text.primary' gutterBottom>
          {data.anime}
        </Typography>
        <Typography variant='body1' color='text.primary'>
          {data.quote}
        </Typography>
        <Typography sx={{ my: 1.5, fontStyle: 'italic' }} textAlign='right' color='text.secondary'>
          ~ {data.character}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;
