import Grid from '@mui/material/Grid';

const CardListWrapper = ({ children }) => {
  return (
    <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: { xs: 0, sm: 1, md: 2 } }}>
      {children}
    </Grid>
  );
};

export default CardListWrapper;
