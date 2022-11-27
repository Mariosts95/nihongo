import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { UseHiragana } from '@/store/HiraganaProvider';

import FlipSingleKanaCard from '@/components/Cards/FlipSingleKanaCard';
import HiraganaOptions from '@/components/UI/HiraganaOptions';
import LanguageSwitch from '@/components/UI/LanguageSwitch';
import Loader from '@/components/UI/Loader';
import PageWrapper from '@/components/Wrappers/PageWrapper';

const HiraganaRandom = () => {
  const [randomKana, setRandomKana] = useState(null);

  const { hiragana, getRandomHiragana } = UseHiragana();

  if (!hiragana) {
    return <Loader />;
  }

  useEffect(() => {
    if (hiragana.length === 0) {
      setRandomKana(null);
    }
  }, [hiragana]);

  const getRandomKana = () => {
    setRandomKana(getRandomHiragana);
  };

  return (
    <PageWrapper>
      <Typography variant='h5' textAlign='center' gutterBottom>
        Generate a random Hiragana (ひらがな) character
      </Typography>

      {!hiragana.length ? (
        <Typography variant='body2' textAlign='center' gutterBottom>
          Open the filters to choose from which characters to learn.
        </Typography>
      ) : null}
      <HiraganaOptions />

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant='body1' sx={{ mr: 1 }}>
          Display language:
        </Typography>
        <LanguageSwitch />
      </Box>

      {hiragana.length ? (
        <Button
          onClick={getRandomKana}
          variant='contained'
          sx={{ my: 2, mx: 'auto', display: 'block' }}
        >
          New Hiragana
        </Button>
      ) : (
        <Typography variant='body2' textAlign='center'>
          Please select which kana you want to display and then click the button to display a random
          hiragana.
        </Typography>
      )}
      {randomKana && <FlipSingleKanaCard kana={randomKana.kana} romaji={randomKana.romaji} />}
    </PageWrapper>
  );
};

export default HiraganaRandom;
