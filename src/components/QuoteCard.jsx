import useFetch from '../hooks/useFetch';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

const QuoteCard = () => {
  // Get a random anime quote
  let { data, loading } = useFetch('https://animechan.vercel.app/api/random');

  if (loading || !data) {
    return (
      <Card sx={{ maxWidth: 350, mx: 'auto', my: 2 }}>
        <Skeleton width={350} height={250} variant='rounded' />
      </Card>
    );
  }

  return (
    <Card sx={{ maxWidth: 350, mx: 'auto', my: 3 }}>
      <CardContent>
        <Typography variant='h4' color='text.secondary' gutterBottom>
          {data.anime}
        </Typography>
        <Typography variant='body1'>{data.quote}</Typography>
        <Typography sx={{ my: 1.5, fontStyle: 'italic' }} textAlign='right' color='text.secondary'>
          ~{data.character}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;
