// MUI
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';

// Data
import { UseHiragana } from '../store/hiraganaProvider';

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