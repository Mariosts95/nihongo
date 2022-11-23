import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { UseHiragana } from '../store/HiraganaProvider';

import HiraganaOptions from '../components/HiraganaOptions';
import KanaCard from '../components/SingleKanaCard';

const Learn = () => {
  const { hiragana } = UseHiragana();

  if (!hiragana) {
    return <div>Loading...</div>;
  }

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant='h5' gutterBottom>
        Hello I want to learn hiragana...
      </Typography>
      <HiraganaOptions />
      <Grid spacing={2} container p={2}>
        {hiragana.map((kana, i) => (
          <Grid key={i} item xs={6} sm={4} md={3} lg={2}>
            <KanaCard kana={kana.kana} romaji={kana.romaji} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Learn;
