import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SingleKanaCard = ({ kana, romaji }) => {
  return (
    <Card>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant='h2' component='p' color='text.secondary' gutterBottom>
          {kana}
        </Typography>
        <Typography variant='h2' component='p' color='text.secondary' gutterBottom>
          {romaji}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleKanaCard;
