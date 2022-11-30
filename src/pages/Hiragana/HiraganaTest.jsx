import { useState } from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { UseHiragana } from '@/store/HiraganaProvider';

import TestCard from '@/components/Cards/TestCard';
import KanaOptions from '@/components/UI/KanaOptions';
import Loader from '@/components/UI/Loader';
import CardListWrapper from '@/components/Wrappers/CardListWrapper';
import PageWrapper from '@/components/Wrappers/PageWrapper';

import { shuffleArray } from '@/utils/helpers';

const HiraganaTest = () => {
  const [testData, setTestData] = useState([]);
  const [testMode, setTestMode] = useState(false);

  const { hiragana, resetHiragana, hiraganaOptions, updateHiraganaOptions } = UseHiragana();

  if (!hiragana) {
    return <Loader />;
  }

  const handleStartTestMode = () => {
    setTestMode(true);
    setTestData(shuffleArray(hiragana));
  };

  const handleStopTestMode = () => {
    setTestMode(false);
    resetHiragana();
  };

  return (
    <PageWrapper>
      <Typography variant='h5' textAlign='center' gutterBottom>
        Test over Hiragana (ひらがな) <br />
        {hiragana.length ? `${hiragana.length} characters` : ''}
      </Typography>

      {!hiragana.length ? (
        <Typography variant='body2' textAlign='center' gutterBottom>
          Open the filters to choose which characters to test.
        </Typography>
      ) : null}

      {!testMode && (
        <KanaOptions kanaOptions={hiraganaOptions} updateKanaOptions={updateHiraganaOptions} />
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
