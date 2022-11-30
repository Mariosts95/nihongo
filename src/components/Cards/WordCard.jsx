import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const WordCard = ({ word }) => {
  return (
    <Box sx={{ maxWidth: 350, width: '100%', mx: 'auto', my: 0, p: 1 }}>
      <Card>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant='h2' gutterBottom>
            {word.hiragana}
          </Typography>
          <Typography variant='body2' gutterBottom>
            {word.romaji}
          </Typography>
          <Typography variant='body1' gutterBottom>
            Meaning: {word.english}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WordCard;
