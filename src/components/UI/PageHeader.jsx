import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PageHeader = ({ title, description, kana }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant='h5' textAlign='center' gutterBottom>
        {title} <br />
        {kana?.length ? `${kana.length} characters` : ''}
      </Typography>

      {!kana?.length ? (
        <Typography variant='body2' textAlign='center' gutterBottom>
          {description}
        </Typography>
      ) : null}
    </Box>
  );
};

export default PageHeader;
