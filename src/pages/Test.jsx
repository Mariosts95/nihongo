import { useState } from 'react';

import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { UseHiragana } from '../store/HiraganaProvider';

import HiraganaOptions from '../components/HiraganaOptions';
import Loader from '../components/Loader';
import PageWrapper from '../components/PageWrapper';
import TestCard from '../components/TestCard';

const Test = () => {
  const [testMode, setTestMode] = useState(false);

  const { hiragana, resetHiragana } = UseHiragana();

  if (!hiragana) {
    return <Loader />;
  }

  const handleStartTestMode = () => {
    setTestMode(true);
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

      {!testMode && <HiraganaOptions />}

      {testMode && (
        <Grid spacing={2} container sx={{ p: { xs: 0, md: 2 } }}>
          {hiragana.map((kana, i) => (
            <Grid key={i} item xs={6} sm={4} md={3} lg={2}>
              <TestCard kana={kana.kana} romaji={kana.romaji} />
            </Grid>
          ))}
        </Grid>
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

export default Test;
