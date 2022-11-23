import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// Data
import { UseHiragana } from '../store/HiraganaProvider';

import FlipSingleKanaCard from '../components/FlipSingleKanaCard';
import HiraganaLanguageSwitch from '../components/HiraganaLanguageSwitch';
import HiraganaOptions from '../components/HiraganaOptions';

const RandomKana = () => {
  const [randomKana, setRandomKana] = useState(null);

  const { hiragana, getRandomHiragana } = UseHiragana();

  if (!hiragana) {
    return <div>Loading...</div>;
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
      <Typography variant='h4'>Random Kana:</Typography>
      <HiraganaOptions />

      <Typography variant='h5'>Please show me:</Typography>
      <HiraganaLanguageSwitch />

      {hiragana.length ? (
        <Button
          onClick={getRandomKana}
          variant='contained'
          sx={{ my: 2, mx: 'auto', display: 'block' }}
        >
          Get Random Kana
        </Button>
      ) : (
        <Typography variant='h4' textAlign='center'>
          Please select kana group and then click the button to get a random kana
        </Typography>
      )}
      {randomKana && <FlipSingleKanaCard kana={randomKana.kana} romaji={randomKana.romaji} />}
    </Paper>
  );
};

export default RandomKana;
