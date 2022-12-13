import React from 'react';
import AuthService from '../utils/auth';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Login/Signup'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Nav() {
  const [isOpen, setOpen] = React.useState(false);
  const [isClose, setClose] = React.useState(true);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const closeandSet = () => {
  //   setAnchorElUser(null);
  //   set;
  // };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const handleOpenMenu = () => {
  //   setOpen(true);
  // };
  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              float: 'left',
            }}
          >
            US Postal & Printing
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}
            {/* <Menu
              id="menu-appbar"
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
              
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
             *
            </MenuItem>
            </Menu> */}
             
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ alignItems: 'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            <Link to='/login' style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ my: 2, backgroundColor: '#ff6659', color: 'white', display: 'block', marginRight: '20px' }}>Login/Signup</Button>
            </Link>
            <Button variant="contained" sx={{ my: 2, backgroundColor: '#ff6659', color: 'white', display: 'block', marginRight: '20px' }}>Products & <br></br> Services </Button>
            <Button variant="contained" sx={{ my: 2, backgroundColor: '#ff6659', color: 'white', display: 'block', marginRight: '20px' }}>Make an<br></br> Order </Button>
            <Link to='/dashboard/:userId' style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ my: 2, backgroundColor: '#ff6659', color: 'white', display: 'block', marginRight: '20px' }}>Dashboard</Button>
            </Link>
            <Button variant="contained" sx={{ my: 2, backgroundColor: '#ff6659', color: 'white', display: 'block', marginRight: '20px' }}>Contact Us</Button>
            {/* <Link to='/signup' style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ my: 2, color: 'white', display: 'block' }}>Signup</Button>
            </Link> */}

            
            
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
             
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
