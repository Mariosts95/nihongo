import { useState } from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { UseKatakana } from '@/store/KatakanaProvider';

import TestCard from '@/components/Cards/TestCard';
import KanaOptions from '@/components/UI/KanaOptions';
import Loader from '@/components/UI/Loader';
import CardListWrapper from '@/components/Wrappers/CardListWrapper';
import PageWrapper from '@/components/Wrappers/PageWrapper';

import { shuffleArray } from '@/utils/helpers';

const Katakana = () => {
  const [testData, setTestData] = useState([]);

  const [testMode, setTestMode] = useState(false);

  const { katakana, resetKatakana, katakanaOptions, updateKatakanaOptions } = UseKatakana();

  if (!katakana) {
    return <Loader />;
  }

  const handleStartTestMode = () => {
    setTestMode(true);
    setTestData(shuffleArray(katakana));
  };

  const handleStopTestMode = () => {
    setTestMode(false);
    resetKatakana();
  };

  return (
    <PageWrapper>
      <Typography variant='h5' textAlign='center' gutterBottom>
        Test over Katakana (ひらがな) <br />
        {katakana.length ? `${katakana.length} characters` : ''}
      </Typography>

      {!katakana.length ? (
        <Typography variant='body2' textAlign='center' gutterBottom>
          Open the filters to choose which characters to test.
        </Typography>
      ) : null}

      {!testMode && (
        <KanaOptions kanaOptions={katakanaOptions} updateKanaOptions={updateKatakanaOptions} />
      )}

      {testMode && (
        <CardListWrapper>
          {testData.map((katakana) => (
            <Grid key={katakana.kana} item xs={6} sm={4} md={3} lg={2.4}>
              <TestCard kana={katakana.kana} romaji={katakana.romaji} />
            </Grid>
          ))}
        </CardListWrapper>
      )}

      {!testMode && katakana.length ? (
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

export default Katakana;
