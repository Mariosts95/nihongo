import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { UseHiragana } from '@/store/HiraganaProvider';

import FlipSingleKanaCard from '@/components/Cards/FlipSingleKanaCard';
import KanaFilters from '@/components/UI/KanaFilters';
import LanguageSwitch from '@/components/UI/LanguageSwitch';
import Loader from '@/components/UI/Loader';
import PageHeader from '@/components/UI/PageHeader';
import PageWrapper from '@/components/Wrappers/PageWrapper';

const HiraganaRandom = () => {
  const [randomKana, setRandomKana] = useState(null);

  const { hiragana, getRandomHiragana, hiraganaOptions, updateHiraganaOptions } = UseHiragana();

  useEffect(() => {
    if (hiragana.length === 0) {
      setRandomKana(null);
    }
  }, [hiragana]);

  const getRandomKana = () => {
    setRandomKana(getRandomHiragana);
  };

  if (!hiragana) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <PageHeader
        title='Generate a random Hiragana (ひらがな) character'
        description='Open the filters to choose which characters to learn.'
        kana={hiragana}
      />

      <KanaFilters kanaOptions={hiraganaOptions} updateKanaOptions={updateHiraganaOptions} />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '550px',
          mx: 'auto',
        }}
      >
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
