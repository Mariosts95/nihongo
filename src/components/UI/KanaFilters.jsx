import { useState } from 'react';

import useScrollHide from '@/hooks/useScrollHide';

import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Fab from '@mui/material/Fab';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Zoom from '@mui/material/Zoom';

const KanaFilters = ({ kanaOptions, updateKanaOptions }) => {
  const [openFilters, setOpenFilters] = useState(false);

  const { showElement } = useScrollHide(200, true);

  const handleOpenFilters = () => {
    setOpenFilters(true);
  };

  const handleCloseFilters = () => {
    setOpenFilters(false);
  };

  return (
    <>
      <Zoom
        in={showElement}
        timeout={{
          enter: 250,
          exit: 250,
        }}
      >
        <Fab
          color='primary'
          variant='extended'
          size='medium'
          aria-label='filters'
          onClick={handleOpenFilters}
          sx={{ position: 'fixed', bottom: '16px', left: '16px' }}
        >
          <FilterListIcon />
          Filters
        </Fab>
      </Zoom>

      <SwipeableDrawer
        anchor='bottom'
        open={openFilters}
        onClose={handleCloseFilters}
        onOpen={handleOpenFilters}
      >
        <FormGroup sx={{ p: 1, mx: 'auto', maxWidth: '550px' }}>
          <Grid spacing={1} container flexDirection='column' justifyContent='center' sx={{ mb: 1 }}>
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    name='gojuuon'
                    onChange={updateKanaOptions}
                    checked={kanaOptions.gojuuon}
                  />
                }
                label='Main Kana'
              />
            </Grid>

            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    name='dakuon'
                    onChange={updateKanaOptions}
                    checked={kanaOptions.dakuon}
                  />
                }
                label='Dakuten Kana (tenten)'
              />
            </Grid>

            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    name='handakuon'
                    onChange={updateKanaOptions}
                    checked={kanaOptions.handakuon}
                  />
                }
                label='Handakuon Kana (maru)'
              />
            </Grid>

            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox name='youon' onChange={updateKanaOptions} checked={kanaOptions.youon} />
                }
                label='Combination Kana'
              />
            </Grid>
          </Grid>
          <Button variant='contained' onClick={handleCloseFilters} sx={{ mb: 2 }}>
            Apply Filters
          </Button>
        </FormGroup>
      </SwipeableDrawer>
    </>
  );
};

export default KanaFilters;
