
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/weather1.png'


const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: '#686868', position: 'static' }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            // sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" className='nav_logo' sx={{ flexGrow: 1, color: 'black' }}>
     <img src={logo} alt="" />  
    <p>Weather</p>
</Typography>


          {/* Drawer for small screens */}
          <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
    <List>
  
    <ListItem button onClick={handleDrawerClose}>
      <Link to='/auth' style={{ textDecoration: 'none', color: 'black' }}>
        Login
      </Link>
    </ListItem>
  </List>
</Drawer>

          {/* Buttons for larger screens */}
          <Box className='navbar'
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: '20px',
              alignItems: 'center',
            }}
          >
            
            <Button className='btn-login' sx={{ color: 'black' }}><Link to={'/auth'} style={{textDecoration:'none'}}>Login</Link></Button>
         
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;


