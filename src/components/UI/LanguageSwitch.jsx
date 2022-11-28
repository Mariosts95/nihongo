import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import { useGlobal } from '@/store/GlobalProvider';

const LanguageSwitch = () => {
  const { kanaDisplayLanguage, updateKanaDisplayLang } = useGlobal();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
      <Typography variant='body1'>English</Typography>
      <Switch checked={kanaDisplayLanguage} onChange={updateKanaDisplayLang} />
      <Typography variant='body1'>Japanese</Typography>
    </Box>
  );
};

export default LanguageSwitch;
