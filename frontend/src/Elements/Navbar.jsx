// import React, { useState } from 'react';
// import {
//   AppBar,
//   Box,
//   Button,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   Toolbar,
//   Typography,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import './Navbar.css'
// import { styled, alpha } from '@mui/material/styles';
// import { Link } from 'react-router-dom';
// import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     // color: 'inherit',
//     width: '100%',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//   }));

// const Navbar = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);


//   const handleDrawerOpen = () => {
//     setIsDrawerOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setIsDrawerOpen(false);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar sx={{ background: 'transparent', position: 'fixed' }} position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="black"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//             onClick={handleDrawerOpen}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h5" component="div" className='nav_logo' sx={{ flexGrow: 1, color: 'black' }}>
//     {/* <img src={logo} alt="" /> */}
//     <p>Weather.com</p>
// </Typography>

// <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search by city..."
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>


//           {/* Drawer for small screens */}
//           <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
//     <List>
  
//     <ListItem button onClick={handleDrawerClose}>
//       <Link to='/auth' style={{ textDecoration: 'none', color: 'black' }}>
//         Login
//       </Link>
//     </ListItem>
//   </List>
// </Drawer>

//           {/* Buttons for larger screens */}
//           <Box className='navbar'
//             sx={{
//               display: { xs: 'none', md: 'flex' },
//               gap: '20px',
//               alignItems: 'center',
//             }}
//           >
            
//             <Button className='btn-login' sx={{ color: 'black' }}><Link to={'/auth'} style={{textDecoration:'none'}}>Login</Link></Button>
         
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default Navbar;


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
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

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
    {/* <img src={logo} alt="" />  */}
    <p>Weather</p>
</Typography>

<Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>


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


