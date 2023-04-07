import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SingleKanaCard = ({ kana, romaji }) => (
  <Card
    sx={{
      position: 'relative',
      pt: 2,
    }}
  >
    <CardContent sx={{ textAlign: 'center' }}>
      <Typography variant='h1' color='text.primary' gutterBottom>
        {kana}
      </Typography>

      <Typography variant='h2' color='text.secondary' gutterBottom>
        {romaji}
      </Typography>
    </CardContent>
  </Card>
);

export default SingleKanaCard;
