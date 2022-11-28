import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import PageWrapper from '@/components/Wrappers/PageWrapper';

const paths = [
  { name: 'Learn Katakana', path: 'learn' },
  { name: 'Test Katakana', path: 'test' },
  { name: 'Random Katakana', path: 'random' },
];

const Katakana = () => {
  return (
    <PageWrapper>
      <Typography variant='h5' textAlign='center' gutterBottom>
        Katakana (カタカナ)
      </Typography>

      <Grid
        container
        flexDirection='column'
        alignItems='center'
        maxWidth={300}
        sx={{ mx: 'auto', mt: 2, p: 2 }}
      >
        {paths.map((path) => (
          <Grid item key={path.path} sx={{ width: '100%', my: 1 }}>
            <Button component={Link} to={`${path.path}`} variant='outlined' fullWidth>
              {path.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default Katakana;
