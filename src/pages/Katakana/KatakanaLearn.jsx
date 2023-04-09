import Grid from '@mui/material/Grid';

import { UseKatakana } from '@/store/KatakanaProvider';

import SingleKanaCard from '@/components/Cards/SingleKanaCard';
import KanaFilters from '@/components/UI/KanaFilters';
import Loader from '@/components/UI/Loader';
import PageHeader from '@/components/UI/PageHeader';
import CardListWrapper from '@/components/Wrappers/CardListWrapper';
import PageWrapper from '@/components/Wrappers/PageWrapper';

const KatakanaLearn = () => {
  const { katakana, katakanaOptions, updateKatakanaOptions } = UseKatakana();

  if (!katakana) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <PageHeader
        title='Learn Katakana (カタカナ)'
        description='Open the filters to choose which characters to learn.'
        kana={katakana}
      />

      <KanaFilters kanaOptions={katakanaOptions} updateKanaOptions={updateKatakanaOptions} />

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
