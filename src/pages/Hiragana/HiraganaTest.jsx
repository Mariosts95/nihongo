import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { resetHiragana, updateHiraganaOptions } from '@/store/slices/hiraganaSlice';

import TestCard from '@/components/Cards/TestCard';
import KanaFilters from '@/components/UI/KanaFilters';
import Loader from '@/components/UI/Loader';
import PageHeader from '@/components/UI/PageHeader';
import CardListWrapper from '@/components/Wrappers/CardListWrapper';
import PageWrapper from '@/components/Wrappers/PageWrapper';

import { shuffleArray } from '@/utils/helpers';

const HiraganaTest = () => {
  const hiragana = useSelector((state) => state.hiragana.hiragana);
  const hiraganaOptions = useSelector((state) => state.hiragana.hiraganaOptions);

  const [testingKana, setTestingKana] = useState([]);
  const [isTesting, setIsTesting] = useState(false);

  const dispatch = useDispatch();

  const handleStartTestMode = () => {
    setIsTesting(true);
    setTestingKana(shuffleArray(hiragana));
  };

  const handleStopTestMode = () => {
    setIsTesting(false);
    dispatch(resetHiragana());
  };

  if (!hiragana) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <PageHeader
        title='Test over Hiragana (ひらがな)'
        description='Open the filters to choose which characters to test.'
        kana={hiragana}
      />

      {hiragana.length > 0 && (
        <Button
          onClick={!isTesting ? handleStartTestMode : handleStopTestMode}
          variant='contained'
          sx={{ display: 'block', mx: 'auto', my: 1 }}
        >
          {!isTesting ? 'Start' : 'Stop'} Test
        </Button>
      )}

      {isTesting ? (
        <CardListWrapper>
          {testingKana.map((hiragana) => (
            <Grid key={hiragana.kana} item xs={6} sm={4} md={3} lg={2.4}>
              <TestCard kana={hiragana.kana} romaji={hiragana.romaji} />
            </Grid>
          ))}
        </CardListWrapper>
      ) : (
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
      )}
    </PageWrapper>
  );
};

export default HiraganaTest;
