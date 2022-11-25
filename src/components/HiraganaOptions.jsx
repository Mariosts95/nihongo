import { useState } from 'react';

import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { UseHiragana } from '../store/HiraganaProvider';

const HiraganaOptions = () => {
  const [openFilters, setOpenFilters] = useState(false);

  const { hiraganaOptions, updateHiraganaOptions } = UseHiragana();

  const handleOpenFilters = () => {
    setOpenFilters(true);
  };

  const HandleCloseFilters = () => {
    setOpenFilters(false);
  };

  return (
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
                    onChange={updateHiraganaOptions}
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
                    onChange={updateHiraganaOptions}
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
                    onChange={updateHiraganaOptions}
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
                    onChange={updateHiraganaOptions}
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
  );
};

export default HiraganaOptions;
