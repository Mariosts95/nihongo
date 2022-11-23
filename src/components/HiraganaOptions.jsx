import { useState } from 'react';

// MUI
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FilterListIcon from '@mui/icons-material/FilterList';

import { UseHiragana } from '../store/hiraganaProvider';

const HiraganaOptions = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const { hiragana, hiraganaOptions, updateHiraganaOptions } = UseHiragana();

  const openFilterDrawer = () => {
    setOpenFilter(true);
  };

  const closeFilterDrawer = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Button
        variant='outlined'
        startIcon={<FilterListIcon />}
        onClick={openFilterDrawer}
        fullWidth
        sx={{ mx: 'auto', my: 2 }}
      >
        Open Filters
      </Button>

      <Drawer anchor='bottom' open={openFilter} onClose={closeFilterDrawer}>
        <FormGroup sx={{ p: 2 }}>
          <Grid spacing={1} container flexDirection='column' justifyContent='center' alignItems='center'>
            <Grid item>
              <FormControlLabel
                control={<Checkbox name='gojuuon' onChange={updateHiraganaOptions} checked={hiraganaOptions.gojuuon} />}
                label='Kana'
                labelPlacement='top'
              />
            </Grid>

            <Grid item>
              <FormControlLabel
                control={<Checkbox name='dakuon' onChange={updateHiraganaOptions} checked={hiraganaOptions.dakuon} />}
                label='Dakuten Kana (tenten)'
                labelPlacement='top'
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox name='handakuon' onChange={updateHiraganaOptions} checked={hiraganaOptions.handakuon} />
                }
                label='Handakuon Kana (maru)'
                labelPlacement='top'
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                control={<Checkbox name='youon' onChange={updateHiraganaOptions} checked={hiraganaOptions.youon} />}
                label='Combinations Kana'
                labelPlacement='top'
              />
            </Grid>
          </Grid>
        </FormGroup>
      </Drawer>
    </>
  );
};

export default HiraganaOptions;
