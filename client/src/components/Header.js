import React from 'react';
import PropTypes from "prop-types";
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
import logo from '../images/logo192.png';
import SwipeableEdgeDrawer from './Header/SwipeableEdgeDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import './Header/Header.css';

const pages = ['Products', 'Pricing', 'Login/Signup'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Nav(props) {
  const [isClose, setClose] = React.useState(true);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


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
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar className='logo' style={{ }}disableGutters>
          <Box style={{display: 'flex', flexWrap: 'nowrap', alignItems: 'center'}}>
          <Box sx={{alignItems: 'center', display: {xs: 'none', sm: 'none', md: 'flex' }}}>
          <Box sx={{display: {xs: 'none', sm: 'none', md: 'flex' }}}>
        <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
        <img height = '80px' width = '80px' src={logo} />
        </Link>
        </Box>
        <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
          <Typography
            variant="h6"
            noWrap
            component="p"
            sx={{
              mr: 2,
              display: {xs: 'none', sm: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              float: 'left',
              marginLeft: '12px',
            }}
          >
            US Postal & Printing
          </Typography>
          </Link>
          </Box>

            <Box sx={{ flexWrap: 'nowrap', display: {xs: 'flex', sm: 'flex', md: 'none', alignItems: 'center' }}}>

            <Box sx={{display: {sm: 'flex', md: 'none' }}}>
          <Link to='/' style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
        <img height = '80px' width = '80px' src={logo} />
        </Link>
        </Box>

          <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: {sm: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '18px',
              marginLeft: '12px',
            }}
          >
            US Postal <br></br> & Printing
          </Typography>
          </Link>
        </Box>

          </Box>
          {/* <Box sx={{justifyContent: 'flex-end', display: { xs: 'flex', md: 'flex', lg: 'none' }, width: '50px', zIndex: 0,}} >
          <Hamburger onToggle={toggleDrawer(true)} />
          </Box> */}

          <Box sx={{ justifyContent: 'flex-end', alignItems: 'center', flexGrow: 1, display: { xs: 'none', md: 'none', lg: 'flex'} }}>
            <Link to='/login' style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ my: 2, backgroundColor: '#ff6659', color: 'white', display: 'block', marginRight: '20px' }}>Login/Signup</Button>
            </Link>
            <Link to='/products&services' style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ my: 2, backgroundColor: '#ff6659', color: 'white', display: 'block', marginRight: '20px' }}>Products & <br></br> Services </Button>
            </Link>
            <Link to='/make-an-order' style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ my: 2, backgroundColor: '#ff6659', color: 'white', display: 'block', marginRight: '20px' }}>Make an<br></br> Order </Button>
            </Link>
            <Link to='/tracking' style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ my: 2, backgroundColor: '#ff6659', color: 'white', display: 'block', marginRight: '20px' }}>Tracking </Button>
            </Link>
            <Link to='/dashboard/:userId' style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ my: 2, backgroundColor: '#ff6659', color: 'white', display: 'block', marginRight: '20px' }}>Dashboard</Button>
            </Link>
            <Link to='/contact-us' style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ my: 2, backgroundColor: '#ff6659', color: 'white', display: 'block', marginRight: '20px' }}>Contact Us</Button>
            </Link>
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
      <SwipeableEdgeDrawer onToggle={toggleDrawer(true)} />
    </AppBar>
  );
}

export default Nav;
