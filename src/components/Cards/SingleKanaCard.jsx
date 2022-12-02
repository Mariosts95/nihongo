import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { textToSpeech } from '@/utils/helpers';

const SingleKanaCard = ({ kana, romaji }) => (
  <Card
    sx={{
      position: 'relative',
      pt: 2,
    }}
  >
    <IconButton
      onClick={() => {
        textToSpeech(kana, 'ja-JP');
      }}
      color='primary'
      size='small'
      sx={{ position: 'absolute', top: 0, right: 0, m: 1 }}
    >
      <VolumeUpIcon />
    </IconButton>

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
