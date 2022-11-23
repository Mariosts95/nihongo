import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Learn', path: '/learn' },
  { name: 'Random Kana', path: '/random-kana' },
];

const HeaderMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Button
            size='small'
            aria-label='menu'
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          >
            <NavLink to='/'>
              <img src='favicon/favicon-32x32.png' alt='japanese flag' />
            </NavLink>
          </Button>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <NavLink key={page.name} to={page.path} style={{ textDecoration: 'none' }}>
                  {({ isActive }) => (
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 1, color: isActive ? 'primary' : 'black', display: 'block' }}
                      fullWidth
                    >
                      {page.name}
                    </Button>
                  )}
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Button size='small' aria-label='menu' sx={{ display: { xs: 'flex', md: 'none' } }}>
            <NavLink to='/'>
              <img src='favicon/favicon-32x32.png' alt='japanese flag' />
            </NavLink>
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink key={page.name} to={page.path} style={{ textDecoration: 'none' }}>
                {({ isActive }) => (
                  <Button sx={{ my: 2, color: isActive ? '#BC002D' : 'white', display: 'block' }}>
                    {page.name}
                  </Button>
                )}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderMenu;
