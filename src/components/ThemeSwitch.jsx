import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useThemeSelection } from '../store/ThemeSelectionProvider';

const ThemeSwitch = ({ sx }) => {
  const { themeSelection, updateThemeSelection } = useThemeSelection();

  return (
    <ToggleButtonGroup
      value={themeSelection}
      exclusive
      onChange={updateThemeSelection}
      aria-label='dark or light theme'
      sx={sx}
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
