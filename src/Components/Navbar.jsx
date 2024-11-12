
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MovieIcon from '@mui/icons-material/Movie';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import logo from '../assets/logo.png';
import { Button } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import InputBase from '@mui/material/InputBase'; // Line 44:32: 'InputBase' is not defined
import { alpha } from '@mui/material/styles'; // Line 63:18 and 65:20: 'alpha' is not defined
import SearchIcon from '@mui/icons-material/Search'; // Line 221:14: 'SearchIcon' is not defined
import Dialog from '@mui/material/Dialog'; // Line 223:2: 'Dialog' is not defined
import DialogTitle from '@mui/material/DialogTitle'; // Line 235:4: 'DialogTitle' is not defined
import DialogContent from '@mui/material/DialogContent'; // Line 236:4: 'DialogContent' is not defined
import TextField from '@mui/material/TextField'; // Line 238:6: 'TextField' is not defined
import DialogActions from '@mui/material/DialogActions'; // Line 251:4: 'DialogActions' is not defined\
import ExploreIcon from '@mui/icons-material/Explore';
import useMediaQuery from '@mui/material/useMediaQuery';


const drawerWidth = 240;
const SearchBox = styled('div')(({ theme, isOpen }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[100],
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
  },
  marginLeft: theme.spacing(),
  // paddingLeft: theme.spacing(1),
  // paddingRight: theme.spacing(1),
  transition: theme.transitions.create('width'),
  width: isOpen ? '200px' : 0, // Expand only if isOpen is true
  // overflow: 'hidden',
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});


const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Movies', path: '/Pages/Movies' },
  { name: 'Top_Rated', path: '/Pages/Top_rated' },
  { name: 'Favourits', path: '/Pages/Favourits' },
];

const morePages = [
  { name: 'Profile', path: '/More_pages/Profile' },
  { name: 'Settings', path: '/More_pages/Settings' },
];

export default function Navbar() {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);
  // const [darkMode, setDarkMode] = React.useState(false);
  const [open, setOpen] = React.useState(false); // State for the drawer
  const [isDialogOpen, setIsDialogOpen] = React.useState(false); // State for the search dialog
  const [darkMode, setDarkMode] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Search bar visibility state
  const isMdUp = useMediaQuery('(min-width:960px)'); // Matches md and up screens


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const lightTheme = createTheme({
    palette: {
      mode: 'light',

      background: {
        default: '#f0f2f5',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}
          sx={{ background: darkMode ? 'default' : 'darkblue' }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ marginRight: { xs: 2, sm: 3, md: 4, lg: 5 }, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <img src={logo} alt="Movie App Logo" style={{ height: '70px', marginRight: '8px' }} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "cursive",
                  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                  display: { xs: "none", sm: "block" } 
                }}
              >
                Blockbustter
                <br />
                Entertainment
              </Typography>
            </Box>
            {/* <---============================searchbar======================================----> */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* Search Icon and Expandable Search Bar */}
              <IconButton sx={{color:"#fff",fontSize:"200px"}} onClick={() => setIsSearchOpen((prev) => !prev)}>
                <SearchIcon />
              </IconButton>
              <SearchBox isOpen={isSearchOpen} sx={{
                // mr: {   md: "10px" },
                color: "black"
              }} >
                <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}
                />
              </SearchBox>
            </Box>

            {/*<========================================== go to premium===========================================> */}
            <Button
              component={Link}
              to="/Go-to-premium"
              variant="outlined"
              sx={{
                borderColor: 'gold',
                color: 'gold',
                borderWidth: '2px',
                borderRadius: '20px',
                px: { xs: 1, sm: 2, md: 3 },
                py: { xs: 0.5, sm: 1 },
                fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' },
                fontWeight: 'bold',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                // position: "absolute",
                // right: { xs: 85, sm: 100, md: 100 },
                mr: { xs: '5px', sm: '7px', md: "10px" },


                // Glowing effect
                boxShadow: '0px 0px 10px rgba(255, 215, 0, 0.5)',

                // Text shadow for glow
                textShadow: '0 0 5px gold, 0 0 10px goldenrod, 0 0 15px orange',

                '&:hover': {
                  color: 'goldenrod',
                  boxShadow: '0px 0px 20px rgba(255, 215, 0, 1)',
                  borderColor: 'goldenrod',
                  textShadow: '0 0 5px goldenrod, 0 0 10px gold, 0 0 20px orange',
                },
                '& .MuiSvgIcon-root': {
                  filter: 'drop-shadow(0 0 5px gold)', // Adds glow to icon
                },
                display: { xs: "none", sm: 'flex' } 

              }}
            >
              <WorkspacePremiumIcon sx={{ mr: {md:1,lg:1} }}  />
              {isMdUp && 'Go to premium'}
            </Button>
            {/*<==========================================Explore more button===========================================> */}

            <Button
              component={Link}
              to="/explore-more"
              variant="outlined"
              sx={{
                borderColor: 'white',
                color: 'white',
                borderWidth: '2px',
                borderRadius: '20px',
                px: { xs: 1, sm: 2, md: 3 },
                py: { xs: 0.5, sm: 1 },
                fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' },
                fontWeight: 'bold',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                mr: { xs: '5px', sm: '7px', md: '10px' },
                textShadow: '0 0 5px white, 0 0 10px white, 0 0 15px white',
                boxShadow: '0px 0px 10px 2px rgba(155, 155, 155, 0.6)', // Adds glow to border
                display: 'flex',
                alignItems: 'center',

                '& .MuiSvgIcon-root': {
                  filter: 'drop-shadow(0 0 5px white)', // Adds glow to icon
                },

                '&:hover': {
                  color: 'white',
                  borderColor: 'white',
                  boxShadow: '0px 0px 15px 3px rgba(255, 255, 255, 1)', // Stronger glow on hover
                  textShadow: '0 0 5px white, 0 0 10px white, 0 0 10px white',
                },
              }}
            >
              <ExploreIcon sx={{ mr: {md:1,lg:1} }}  />
              {isMdUp && 'Explore more→'}
            </Button>
            <IconButton
              sx={{ ml: 'auto' }}
              color="inherit"
              onClick={handleThemeToggle}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />


          <List>
            {pages.map((page) =>
              page.name === 'Home' ? (
                <ListItem key={page.name} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    key={page.name}
                    component={Link}
                    to="/"
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: darkMode ? '#fff' : 'darkblue',
                      }}
                    >
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={page.name} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              ) : page.name === 'Movies' ? (
                <ListItem key={page.name} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    key={page.name}
                    component={Link}
                    to="/Pages/Movies"
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: darkMode ? '#fff' : 'darkblue',
                      }}
                    >
                      <MovieIcon />
                    </ListItemIcon>
                    <ListItemText primary={page.name} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              ) : page.name === 'Favourits' ? (
                <ListItem key={page.name} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    key={page.name}
                    component={Link}
                    to="/Pages/Favourits"
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: darkMode ? '#fff' : 'darkblue',
                      }}
                    >
                      <FavoriteIcon /> {/* Make sure you import this icon */}
                    </ListItemIcon>
                    <ListItemText primary={page.name} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              ) : page.name === 'Top_Rated' ? (
                <ListItem key={page.name} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    key={page.name}
                    component={Link}
                    to="/Pages/Top_rated"
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,

                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: darkMode ? '#fff' : 'darkblue',
                      }}
                    >
                      <StarIcon /> {/* Ensure this icon is imported as well */}
                    </ListItemIcon>
                    <ListItemText primary={page.name} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              ) : null
            )}
          </List>


          <Divider />
          <List>
            {morePages.map((page, index) => (
              <ListItem key={page.name} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  component={Link}
                  to={page.path}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: darkMode ? '#fff' : 'darkblue',
                    }}
                  >
                    {index === 0 ? <AccountCircleIcon /> : <SettingsIcon />}
                  </ListItemIcon>
                  <ListItemText primary={page.name} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <DrawerHeader />
      </Box>
    </ThemeProvider >
  );
}
