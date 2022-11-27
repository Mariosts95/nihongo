import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { UseHiragana } from '@/store/HiraganaProvider';

import SingleKanaCard from '@/components/Cards/SingleKanaCard';
import HiraganaOptions from '@/components/UI/HiraganaOptions';
import Loader from '@/components/UI/Loader';
import CardListWrapper from '@/components/Wrappers/CardListWrapper';
import PageWrapper from '@/components/Wrappers/PageWrapper';

const HiraganaLearn = () => {
  const { hiragana } = UseHiragana();

  if (!hiragana) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <Typography variant='h5' textAlign='center' gutterBottom>
        Learn Hiragana (ひらがな) <br />
        {hiragana.length ? `${hiragana.length} characters` : ''}
      </Typography>

      {!hiragana.length ? (
        <Typography variant='body2' textAlign='center' gutterBottom>
          Open the filters to choose which characters to learn.
        </Typography>
      ) : null}

      <HiraganaOptions />

      <CardListWrapper>
        {hiragana.map((hiragana) => (
          <Grid key={hiragana.kana} item xs={6} sm={4} md={3} lg={2.4}>
            <SingleKanaCard kana={hiragana.kana} romaji={hiragana.romaji} />
          </Grid>
        ))}
      </CardListWrapper>
    </PageWrapper>
  );
};

export default HiraganaLearn;
