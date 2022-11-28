import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { UseKatakana } from '@/store/KatakanaProvider';

import FlipSingleKanaCard from '@/components/Cards/FlipSingleKanaCard';
import KanaOptions from '@/components/UI/KanaOptions';
import LanguageSwitch from '@/components/UI/LanguageSwitch';
import Loader from '@/components/UI/Loader';
import PageWrapper from '@/components/Wrappers/PageWrapper';

const KatakanaRandom = () => {
  const [randomKana, setRandomKana] = useState(null);

  const { katakana, getRandomKatakana, katakanaOptions, updateKatakanaOptions } = UseKatakana();

  if (!katakana) {
    return <Loader />;
  }

  useEffect(() => {
    if (katakana.length === 0) {
      setRandomKana(null);
    }
  }, [katakana]);

  const getRandomKana = () => {
    setRandomKana(getRandomKatakana);
  };

  return (
    <PageWrapper>
      <Typography variant='h5' textAlign='center' gutterBottom>
        Generate a random Katakana (カタカナ) character
      </Typography>

      {!katakana.length ? (
        <Typography variant='body2' textAlign='center' gutterBottom>
          Open the filters to choose from which characters to learn.
        </Typography>
      ) : null}

      <KanaOptions kanaOptions={katakanaOptions} updateKanaOptions={updateKatakanaOptions} />

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant='body1' sx={{ mr: 1 }}>
          Display language:
        </Typography>
        <LanguageSwitch />
      </Box>

      {katakana.length ? (
        <Button
          onClick={getRandomKana}
          variant='contained'
          sx={{ my: 2, mx: 'auto', display: 'block' }}
        >
          New Katakana
        </Button>
      ) : (
        <Typography variant='body2' textAlign='center'>
          Please select which kana you want to display and then click the button to display a random
          katakana.
        </Typography>
      )}
      {randomKana && <FlipSingleKanaCard kana={randomKana.kana} romaji={randomKana.romaji} />}
    </PageWrapper>
  );
};

export default KatakanaRandom;
