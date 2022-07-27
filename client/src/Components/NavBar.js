import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';



// const pages = ['Swipe', 'Likes', 'Map', 'About']
const settings = ['Profile', 'Logout']

function NavBar({user, setUser}) {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  //LOG OUT 

  // const navigate = useNavigate()

  const handleLogOut = () => {
    fetch('/logout', {
    method: "DELETE",
    })
      setUser(null)
        // navigate('/')
    }

  return (
    <AppBar 
    style={{ background: '#ffffff' }}
    position="static">
      <Container maxWidth="xl">
      
        <Toolbar disableGutters>
{/* Logo */}
        <Link href="http://localhost:4000">
          <img 
          className="navbar-logo"
          src="https://cdn-images-1.medium.com/max/800/0*NGplrv1NqneaATAz.png" />
      </Link>

 {/* Rumble */}
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
              color: '#000000',
              textDecoration: 'none',
            }}>
          <Link href="http://localhost:4000" >
            <img 
            className="navbar-rumble"
            src="https://cdn-images-1.medium.com/max/800/1*_WVswRJwL6SMiDEXJuPKsQ.png" />
          </Link>
          </Typography>

          <Link href= "http://localhost:4000/swipe"
          underline="none">
                <Button
                style={{color: 'black' }}>Swipe</Button>
          </Link>

          <Link href= "http://localhost:4000/likes"
          underline="none">
                <Button
                style={{color: 'black' }}>Likes</Button>
          </Link>

          <Link href= "http://localhost:4000/map"
          underline="none">
                <Button
                style={{color: 'black' }}>Map</Button>
          </Link>

          <Link href= "http://localhost:4000/about"
          underline="none">
                <Button
                style={{color: 'black' }}>About</Button>
          </Link>
         
{/* SPACE BETWEEN LINKS AND LOGIN */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>

{/* Login Button */}
        <Box>
        <Link href="http://localhost:4000/login">
            <Button
            variant="contained"
            sx={{color: '#ffffff', backgroundColor: '#fb526b', paddingBottom: '2px', paddingTop: '2px', marginRight: '10px'}}
            className='homepage-second'>Log In</Button>
        </Link>
        </Box>

{/* Log out Button */}

{user ?
  <Tooltip title="Log Out">
    <LogoutIcon sx={{color: '#fb526b', marginRight: '5px'}} onClick={handleLogOut}/>
  </Tooltip>: null
}

{/* Avatar  */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Leah Chen" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
{/* Avatar Menu */}
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
                  <Typography textAlign="center">{setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

