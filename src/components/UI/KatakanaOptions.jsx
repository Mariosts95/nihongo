import { useState } from 'react';

import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { UseKatakana } from '../../store/KatakanaProvider';

const KatakanaOptions = () => {
  const [openFilters, setOpenFilters] = useState(false);

  const { katakanaOptions, updateKatakanaOptions } = UseKatakana();

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
                    onChange={updateKatakanaOptions}
                    checked={katakanaOptions.gojuuon}
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
                    onChange={updateKatakanaOptions}
                    checked={katakanaOptions.dakuon}
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
                    onChange={updateKatakanaOptions}
                    checked={katakanaOptions.handakuon}
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
                    onChange={updateKatakanaOptions}
                    checked={katakanaOptions.youon}
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

export default KatakanaOptions;
