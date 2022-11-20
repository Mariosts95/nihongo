import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const KanaCard = ({ kana }) => {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h2' color='text.secondary' gutterBottom>
          {kana}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default KanaCard;
