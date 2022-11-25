import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// Data
import { UseHiragana } from '../store/HiraganaProvider';

import FlipSingleKanaCard from '../components/FlipSingleKanaCard';
import HiraganaLanguageSwitch from '../components/HiraganaLanguageSwitch';
import HiraganaOptions from '../components/HiraganaOptions';
import Loader from '../components/Loader';

const RandomKana = () => {
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
    <Paper elevation={3} sx={{ p: 2 }}>
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
        <HiraganaLanguageSwitch />
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
    </Paper>
  );
};

export default RandomKana;
