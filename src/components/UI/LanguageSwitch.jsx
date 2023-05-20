import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import { updateKanaDisplayLang } from '@/store/slices/globalSlice';

const LanguageSwitch = () => {
  const kanaDisplayLanguage = useSelector((state) => state.global.kanaDisplayLanguage);

  const dispatch = useDispatch();

  const handleSwitch = () => {
    dispatch(updateKanaDisplayLang());
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '550px',
        mx: 'auto',
      }}
    >
      <Typography variant='body1' sx={{ mr: 1 }}>
        Display:
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
        <Typography variant='body1'>Romaji</Typography>
        <Switch checked={kanaDisplayLanguage} onChange={handleSwitch} />
        <Typography variant='body1'>Kana</Typography>
      </Box>
    </Box>
  );
};

export default LanguageSwitch;
