import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { UseHiragana } from '../store/HiraganaProvider';

import HiraganaOptions from '../components/HiraganaOptions';
import Loader from '../components/Loader';
import PageWrapper from '../components/PageWrapper';
import KanaCard from '../components/SingleKanaCard';

const Learn = () => {
  const { hiragana } = UseHiragana();

  if (!hiragana) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <Typography variant='h5' textAlign='center' gutterBottom>
        Learn Hiragana (ひらがな) {hiragana.length ? `- ${hiragana.length} characters` : ''}
      </Typography>
      {!hiragana.length ? (
        <Typography variant='body2' textAlign='center' gutterBottom>
          Open the filters to choose which characters to learn.
        </Typography>
      ) : null}
      <HiraganaOptions />
      <Grid spacing={2} container p={2}>
        {hiragana.map((kana, i) => (
          <Grid key={i} item xs={6} sm={4} md={3} lg={2}>
            <KanaCard kana={kana.kana} romaji={kana.romaji} />
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default Learn;
