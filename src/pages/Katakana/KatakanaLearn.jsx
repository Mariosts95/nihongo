import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { UseKatakana } from '@/store/KatakanaProvider';

import SingleKanaCard from '@/components/Cards/SingleKanaCard';
import KanaOptions from '@/components/UI/KanaOptions';
import Loader from '@/components/UI/Loader';
import CardListWrapper from '@/components/Wrappers/CardListWrapper';
import PageWrapper from '@/components/Wrappers/PageWrapper';

const KatakanaLearn = () => {
  const { katakana, katakanaOptions, updateKatakanaOptions } = UseKatakana();

  if (!katakana) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <Typography variant='h5' textAlign='center' gutterBottom>
        Learn Katakana (カタカナ) <br />
        {katakana.length ? `${katakana.length} characters` : ''}
      </Typography>

      {!katakana.length ? (
        <Typography variant='body2' textAlign='center' gutterBottom>
          Open the filters to choose which characters to learn.
        </Typography>
      ) : null}

      <KanaOptions kanaOptions={katakanaOptions} updateKanaOptions={updateKatakanaOptions} />

      <CardListWrapper>
        {katakana.map((katakana) => (
          <Grid key={katakana.kana} item xs={6} sm={4} md={3} lg={2.4}>
            <SingleKanaCard kana={katakana.kana} romaji={katakana.romaji} />
          </Grid>
        ))}
      </CardListWrapper>
    </PageWrapper>
  );
};

export default KatakanaLearn;
