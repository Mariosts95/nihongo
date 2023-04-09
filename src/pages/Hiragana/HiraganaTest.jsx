import { useState } from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { UseHiragana } from '@/store/HiraganaProvider';

import TestCard from '@/components/Cards/TestCard';
import KanaFilters from '@/components/UI/KanaFilters';
import Loader from '@/components/UI/Loader';
import PageHeader from '@/components/UI/PageHeader';
import CardListWrapper from '@/components/Wrappers/CardListWrapper';
import PageWrapper from '@/components/Wrappers/PageWrapper';

import { shuffleArray } from '@/utils/helpers';

const HiraganaTest = () => {
  const [testData, setTestData] = useState([]);
  const [testMode, setTestMode] = useState(false);

  const { hiragana, resetHiragana, hiraganaOptions, updateHiraganaOptions } = UseHiragana();

  const handleStartTestMode = () => {
    setTestMode(true);
    setTestData(shuffleArray(hiragana));
  };

  const handleStopTestMode = () => {
    setTestMode(false);
    resetHiragana();
  };

  if (!hiragana) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <PageHeader
        title='Test over Hiragana (ひらがな)'
        description='Open the filters to choose which characters to test.'
        kana={hiragana}
      />

      {!testMode && (
        <KanaFilters kanaOptions={hiraganaOptions} updateKanaOptions={updateHiraganaOptions} />
      )}

      {testMode && (
        <CardListWrapper>
          {testData.map((hiragana) => (
            <Grid key={hiragana.kana} item xs={6} sm={4} md={3} lg={2.4}>
              <TestCard kana={hiragana.kana} romaji={hiragana.romaji} />
            </Grid>
          ))}
        </CardListWrapper>
      )}

      {!testMode && hiragana.length ? (
        <Button
          onClick={handleStartTestMode}
          variant='contained'
          sx={{ display: 'block', mx: 'auto', my: 1 }}
        >
          Start Test
        </Button>
      ) : (
        testMode && (
          <Button
            onClick={handleStopTestMode}
            variant='contained'
            sx={{ display: 'block', mx: 'auto', my: 1 }}
          >
            Stop test
          </Button>
        )
      )}
    </PageWrapper>
  );
};

export default HiraganaTest;
