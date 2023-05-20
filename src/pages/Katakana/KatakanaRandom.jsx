import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { updateKatakanaOptions } from '@/store/slices/katakanaSlice';

import FlipSingleKanaCard from '@/components/Cards/FlipSingleKanaCard';
import KanaFilters from '@/components/UI/KanaFilters';
import LanguageSwitch from '@/components/UI/LanguageSwitch';
import Loader from '@/components/UI/Loader';
import PageHeader from '@/components/UI/PageHeader';
import PageWrapper from '@/components/Wrappers/PageWrapper';

import { randomInt } from '@/utils/helpers';

const KatakanaRandom = () => {
  const katakana = useSelector((state) => state.katakana.katakana);
  const katakanaOptions = useSelector((state) => state.katakana.katakanaOptions);

  const [randomKana, setRandomKana] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (katakana.length === 0) {
      setRandomKana(null);
    }
  }, [katakana]);

  const handleRandomKana = () => {
    const index = randomInt(0, katakana.length - 1);
    setRandomKana(katakana[index]);
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

      <KanaFilters
        kanaOptions={katakanaOptions}
        updateKanaOptions={(e) => {
          dispatch(
            updateKatakanaOptions({
              optionName: e.target.name,
              optionValue: e.target.checked,
            })
          );
        }}
      />

      <LanguageSwitch />

      {katakana.length ? (
        <Button
          onClick={handleRandomKana}
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
