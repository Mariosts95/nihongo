import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { updateHiraganaOptions } from '@/store/slices/hiraganaSlice';

import FlipSingleKanaCard from '@/components/Cards/FlipSingleKanaCard';
import KanaFilters from '@/components/UI/KanaFilters';
import LanguageSwitch from '@/components/UI/LanguageSwitch';
import Loader from '@/components/UI/Loader';
import PageHeader from '@/components/UI/PageHeader';
import PageWrapper from '@/components/Wrappers/PageWrapper';

import { randomInt } from '@/utils/helpers';

const HiraganaRandom = () => {
  const hiragana = useSelector((state) => state.hiragana.hiragana);
  const hiraganaOptions = useSelector((state) => state.hiragana.hiraganaOptions);

  const [randomKana, setRandomKana] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (hiragana.length === 0) {
      setRandomKana(null);
    }
  }, [hiragana]);

  const handleRandomKana = () => {
    const index = randomInt(0, hiragana.length - 1);
    setRandomKana(hiragana[index]);
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

      <KanaFilters
        kanaOptions={hiraganaOptions}
        updateKanaOptions={(e) => {
          dispatch(
            updateHiraganaOptions({
              optionName: e.target.name,
              optionValue: e.target.checked,
            })
          );
        }}
      />

      <LanguageSwitch />

      {hiragana.length ? (
        <Button
          onClick={handleRandomKana}
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
