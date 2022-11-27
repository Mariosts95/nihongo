import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';

import ThemeSwitch from '@/components/UI/ThemeSwitch';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Hiragana', path: '/hiragana' },
  { name: 'Katakana', path: '/katakana' },
];

const HeaderMenu = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const handleOpenNavMenu = () => {
    setIsNavMenuOpen(true);
  };

  const handleCloseNavMenu = () => {
    setIsNavMenuOpen(false);
  };

  return (
    <AppBar position='static'>
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        <Box>
          <IconButton
            size='large'
            aria-label='menu-icon'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
            color='inherit'
            sx={{
              position: 'relative',
              zIndex: 1200,
            }}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor='left'
            open={isNavMenuOpen}
            onClose={handleCloseNavMenu}
            onOpen={handleOpenNavMenu}
          >
            <Box
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={NavLink}
                  to={page.path}
                  sx={{
                    my: 1,
                    color: 'primary.main',
                    display: 'block',
                  }}
                  type='link'
                  fullWidth
                >
                  {page.name}
                </Button>
              ))}
              <ThemeSwitch sx={{ marginTop: 'auto' }} />
            </Box>
          </SwipeableDrawer>
        </Box>

        <Button size='small' aria-label='menu' sx={{ mr: 1 }}>
          <NavLink to='/'>
            <img style={{ display: 'block' }} src='favicon/favicon-32x32.png' alt='japanese flag' />
          </NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default HeaderMenu;
