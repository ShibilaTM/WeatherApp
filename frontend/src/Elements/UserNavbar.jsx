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
import { Link } from 'react-router-dom';
import logo from '../assets/weather1.png'

const UserNavbar = () => {
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
  
  
           
            <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
      <List>
    
      <ListItem button onClick={handleDrawerClose}>
        <Link to='/notification' style={{ textDecoration: 'none', color: 'black' }}>
          Services
        </Link>
      </ListItem>
    </List>
    <List>
    
    <ListItem button onClick={handleDrawerClose}>
      <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
        Logout
      </Link>
    </ListItem>
  </List>
  </Drawer>
  
          
            <Box className='navbar'
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: '20px',
                alignItems: 'center',
              }}
            >
               <Button className='btn-login' sx={{ color: 'black' }}><Link to={'/notification'} style={{textDecoration:'none'}}>Services</Link></Button>
              <Button className='btn-login' sx={{ color: 'black' }}><Link to={'/'} style={{textDecoration:'none'}}>Logout</Link></Button>
           
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };

export default UserNavbar
