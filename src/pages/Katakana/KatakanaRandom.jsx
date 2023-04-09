import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { UseKatakana } from '@/store/KatakanaProvider';

import FlipSingleKanaCard from '@/components/Cards/FlipSingleKanaCard';
import KanaFilters from '@/components/UI/KanaFilters';
import LanguageSwitch from '@/components/UI/LanguageSwitch';
import Loader from '@/components/UI/Loader';
import PageHeader from '@/components/UI/PageHeader';
import PageWrapper from '@/components/Wrappers/PageWrapper';

const KatakanaRandom = () => {
  const [randomKana, setRandomKana] = useState(null);

  const { katakana, getRandomKatakana, katakanaOptions, updateKatakanaOptions } = UseKatakana();

  useEffect(() => {
    if (katakana.length === 0) {
      setRandomKana(null);
    }
  }, [katakana]);

  const getRandomKana = () => {
    setRandomKana(getRandomKatakana);
  };

  if (!katakana) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <PageHeader
        title='Generate a random Katakana (カタカナ) character'
        description='Open the filters to choose which characters to learn.'
        kana={katakana}
      />

      <KanaFilters kanaOptions={katakanaOptions} updateKanaOptions={updateKatakanaOptions} />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '550px',
          mx: 'auto',
        }}
      >
        <Typography variant='body1' sx={{ mr: 1 }}>
          Display:
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
