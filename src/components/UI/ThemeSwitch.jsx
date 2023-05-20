import { useDispatch, useSelector } from 'react-redux';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { updateThemeSelection } from '@/store/slices/globalSlice';

const ThemeSwitch = () => {
  const theme = useSelector((state) => state.global.theme);

  const dispatch = useDispatch();

  const handleOnChange = () => {
    dispatch(updateThemeSelection());
  };

  return (
    <ToggleButtonGroup
      value={theme}
      exclusive
      onChange={handleOnChange}
      aria-label='dark or light theme'
    >
      <ToggleButton value='light' aria-label='light mode'>
        <LightModeIcon />
      </ToggleButton>
      <ToggleButton value='dark' aria-label='dark mode'>
        <DarkModeIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ThemeSwitch;
