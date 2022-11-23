import Box from '@mui/material/Box';
import { DotLoader } from 'react-spinners';

const Loader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <DotLoader color='#bc002d' size={100} />
  </Box>
);

export default Loader;
