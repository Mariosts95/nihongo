import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';

import { UseHiragana } from '@/store/HiraganaProvider';
import {
  getRandomHiragana,
  resetHiragana,
  updateHiragana,
  updateHiraganaOptions,
} from '@/store/slices/hiraganaSlice';

import TestCard from '@/components/Cards/TestCard';
import Loader from '@/components/UI/Loader';
import CardListWrapper from '@/components/Wrappers/CardListWrapper';
import PageWrapper from '@/components/Wrappers/PageWrapper';

const HiraganaTest = () => {
  const hiragana = useSelector((state) => state.hiragana.hiragana);
  const hiraganaOptions = useSelector((state) => state.hiragana.hiraganaOptions);

  const [testMode, setTestMode] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);

  const handleOpenFilters = () => {
    setOpenFilters(true);
  };

  const HandleCloseFilters = () => {
    setOpenFilters(false);
  };

  const dispatch = useDispatch();
  if (!hiragana) {
    return <Loader />;
  }

  const handleStartTestMode = () => {
    setTestMode(true);
  };

  const handleStopTestMode = () => {
    setTestMode(false);
    dispatch(resetHiragana());
  };

  return (
    <PageWrapper>
      <Typography variant='h5' textAlign='center' gutterBottom>
        Test over Hiragana (ひらがな) <br />
        {hiragana.length ? `${hiragana.length} characters` : ''}
      </Typography>

      {!hiragana.length ? (
        <Typography variant='body2' textAlign='center' gutterBottom>
          Open the filters to choose which characters to test.
        </Typography>
      ) : null}

      {!testMode && (
        <>
          <Button
            variant='outlined'
            startIcon={<FilterListIcon />}
            onClick={handleOpenFilters}
            fullWidth
            size='large'
            sx={{ mx: 'auto', my: 2 }}
          >
            Open Filters
          </Button>

          <SwipeableDrawer
            anchor='bottom'
            open={openFilters}
            onClose={HandleCloseFilters}
            onOpen={handleOpenFilters}
          >
            <FormGroup sx={{ p: 2 }}>
              <Grid
                spacing={1}
                container
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
              >
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name='gojuuon'
                        onChange={(e) => {
                          dispatch(
                            updateHiraganaOptions({
                              optionName: e.target.name,
                              optionValue: e.target.checked,
                            })
                          );
                        }}
                        checked={hiraganaOptions.gojuuon}
                      />
                    }
                    label='Main Kana'
                    labelPlacement='top'
                  />
                </Grid>

                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name='dakuon'
                        onChange={(e) => {
                          dispatch(
                            updateHiraganaOptions({
                              optionName: e.target.name,
                              optionValue: e.target.checked,
                            })
                          );
                        }}
                        checked={hiraganaOptions.dakuon}
                      />
                    }
                    label='Dakuten Kana (tenten)'
                    labelPlacement='top'
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name='handakuon'
                        onChange={(e) => {
                          dispatch(
                            updateHiraganaOptions({
                              optionName: e.target.name,
                              optionValue: e.target.checked,
                            })
                          );
                        }}
                        checked={hiraganaOptions.handakuon}
                      />
                    }
                    label='Handakuon Kana (maru)'
                    labelPlacement='top'
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name='youon'
                        onChange={(e) => {
                          dispatch(
                            updateHiraganaOptions({
                              optionName: e.target.name,
                              optionValue: e.target.checked,
                            })
                          );
                        }}
                        checked={hiraganaOptions.youon}
                      />
                    }
                    label='Combination Kana'
                    labelPlacement='top'
                  />
                </Grid>
              </Grid>
            </FormGroup>
          </SwipeableDrawer>
        </>
      )}

      {testMode && (
        <CardListWrapper>
          {hiragana.map((hiragana) => (
            <Grid key={hiragana.kana} item xs={6} sm={4} md={3} lg={2.4}>
              <TestCard kana={hiragana.kana} romaji={hiragana.romaji} />
            </Grid>
          ))}
        </CardListWrapper>
      )}

      {!testMode && hiragana.length ? (
        <Button
          onClick={handleStartTestMode}
          variant='contained'
          sx={{ display: 'block', mx: 'auto', my: 1 }}
        >
          Start Test
        </Button>
      ) : (
        testMode && (
          <Button
            onClick={handleStopTestMode}
            variant='contained'
            sx={{ display: 'block', mx: 'auto', my: 1 }}
          >
            Stop test
          </Button>
        )
      )}
    </PageWrapper>
  );
};

export default HiraganaTest;
