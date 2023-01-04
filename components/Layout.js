import React, {useState} from 'react';
import Image from 'next/image'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import InputBase from '@mui/material/InputBase';
import {List, ListItem, ListItemButton, ListItemIcon, Grid} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Logo from '../public/images/logo.png';
import Image2 from '../public/images/image2.png';
import Image3 from '../public/images/image3.png';
import { useEffect } from 'react';

const drawerWidth = 122;

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const draws = [<BorderAllOutlinedIcon fontSize = 'large'/>,<SyncAltOutlinedIcon fontSize = 'large'/>, <TextSnippetOutlinedIcon fontSize = 'large'/>, <SettingsOutlinedIcon fontSize = 'large'/>, <StickyNote2OutlinedIcon fontSize = 'large'/> ];
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='drawer'>
      <Toolbar >
        <Image src={Logo} alt = 'logo'style={{width:'100%'}} />
      </Toolbar>

      <Divider />
      <List>
          {draws.map((item,idx) =>(
          <ListItem key={idx} disablePadding>
                <div className = 'draws'>
            <ListItemButton>
                <ListItemIcon >
                <div className = 'draws-title'>
                  {item}
                </div>
                </ListItemIcon>
            </ListItemButton>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
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
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));  
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

  // const [state, setState] = useState(0);
  const [themes, setThemes] = useState(
    'dark'
    // localStorage.getItem("light") || "light"
  )

  const toggleTheme = () => {
    themes === 'light' ? setThemes('dark') : setThemes('light');
  }
  
  useEffect(() => {
    document.body.className = themes;
    localStorage.setItem('themes', themes);
  }, [themes]);

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className = 'toolbar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container columnSpacing={2} columns={16} style={{alignItems:"center", display:"flex"}}>
            <Grid item sm={8} className='searchInput'>
              <Search >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Grid>
            <Grid item sm = {3} className='toolbar-image2-group'>
              <Grid item className='toolbar-image2'>
                <Image  src = {Image2} alt = 'image2' />
                <h4>2.6 SOL</h4> 
              </Grid>
            </Grid>
                <Grid item >
                  <Box className = 'toolbar-chat'><MessageOutlinedIcon style={{marginLeft:'7px'}} /></Box>
                </Grid>
                <Grid item>
                  <Box  className = 'toolbar-alarm'><NotificationsOutlinedIcon style={{marginLeft:'7px'}} /></Box>
                </Grid>
                <Grid item>
                  <Box  className = 'toolbar-profile'>
                  <Image  src = {Image3} alt = 'image3' />
                  <Typography className = 'toolbar-profile-text'>1krty....werds</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <div className="mSwitch">
                    <MaterialUISwitch 
                      sx={{ m: 1 }}  
                      onChange={() => toggleTheme()}
                      checked={themes === "light"}
                    />
                  </div>
                </Grid>
          </Grid>  
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderWidth: 0 },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;