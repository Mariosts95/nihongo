// MUI
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

// Data
import { UseHiragana } from '../store/HiraganaProvider';

const HiraganaLanguageSwitch = () => {
  const { hiraganaDisplayJap, updateHiraganaDisplayJap } = UseHiragana();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
      <Typography variant='body1'>English</Typography>
      <Switch checked={hiraganaDisplayJap} onChange={updateHiraganaDisplayJap} />
      <Typography variant='body1'>Japanese</Typography>
    </Box>
  );
};

export default HiraganaLanguageSwitch;
