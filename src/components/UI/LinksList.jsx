import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const LinksList = ({ links }) => {
  return (
    <Grid
      container
      flexDirection='column'
      alignItems='center'
      sx={{ mx: 'auto', mt: 2, p: 2, maxWidth: '300px' }}
    >
      {links.map((path) => (
        <Grid item key={path.path} sx={{ width: '100%', my: 1 }}>
          <Button component={Link} to={`${path.path}`} variant='outlined' fullWidth>
            {path.name}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default LinksList;
