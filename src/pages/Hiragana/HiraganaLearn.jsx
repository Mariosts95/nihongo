import Grid from '@mui/material/Grid';

import { UseHiragana } from '@/store/HiraganaProvider';

import SingleKanaCard from '@/components/Cards/SingleKanaCard';
import KanaFilters from '@/components/UI/KanaFilters';
import Loader from '@/components/UI/Loader';
import PageHeader from '@/components/UI/PageHeader';
import CardListWrapper from '@/components/Wrappers/CardListWrapper';
import PageWrapper from '@/components/Wrappers/PageWrapper';

const HiraganaLearn = () => {
  const { hiragana, hiraganaOptions, updateHiraganaOptions } = UseHiragana();

  if (!hiragana) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <PageHeader
        title='Hiragana (ひらがな)'
        description='Open the filters to choose which characters to learn.'
        kana={hiragana}
      />

      <KanaFilters kanaOptions={hiraganaOptions} updateKanaOptions={updateHiraganaOptions} />

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
