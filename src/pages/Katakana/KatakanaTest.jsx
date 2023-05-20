import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { resetKatakana, updateKatakanaOptions } from '@/store/slices/katakanaSlice';

import TestCard from '@/components/Cards/TestCard';
import KanaFilters from '@/components/UI/KanaFilters';
import Loader from '@/components/UI/Loader';
import PageHeader from '@/components/UI/PageHeader';
import CardListWrapper from '@/components/Wrappers/CardListWrapper';
import PageWrapper from '@/components/Wrappers/PageWrapper';

import { shuffleArray } from '@/utils/helpers';

const Katakana = () => {
  const katakana = useSelector((state) => state.katakana.katakana);
  const katakanaOptions = useSelector((state) => state.katakana.katakanaOptions);

  const [testingKana, setTestingKana] = useState([]);
  const [isTesting, setIsTesting] = useState(false);

  const dispatch = useDispatch();

  const handleStartTestMode = () => {
    setIsTesting(true);
    setTestingKana(shuffleArray(katakana));
  };

  const handleStopTestMode = () => {
    setIsTesting(false);
    dispatch(resetKatakana());
  };

  if (!katakana) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <PageHeader
        title='Test over Katakana (カタカナ)'
        description='Open the filters to choose which characters to test.'
        kana={katakana}
      />

      {katakana.length > 0 && (
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
          {testingKana.map((katakana) => (
            <Grid key={katakana.kana} item xs={6} sm={4} md={3} lg={2.4}>
              <TestCard kana={katakana.kana} romaji={katakana.romaji} />
            </Grid>
          ))}
        </CardListWrapper>
      ) : (
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
      )}
    </PageWrapper>
  );
};

export default Katakana;
