
import { useState, useEffect} from 'react';
import { IconButton, ListItemText,  Divider, Drawer, Box, List, ListItemButton, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import Link from 'next/link';

export default function TemporaryDrawer() {
  const [role, setRole] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAdmin, setOpenAdmin] = useState(false);
  useEffect(() => {
    setRole(localStorage.getItem('role'));
  }, []);
  const listMenuu = [
    {
      name: 'Inicio',
      url: '/',
    },
    {
      name: 'Recaudadores',
      url: '/recaudadores',
    },
    {
      name: 'Archivos',
      url: '/archivo',
    },
  ];
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickAdmin = () => {
    setOpenAdmin(!openAdmin);
    };

  const listMenuAdmin = [
    {
      name: 'Control de Usuarios',
      url:'/admin/control-usuarios',
    },
    {
      name: 'Control de Roles',
      url:'/admin/control-roles',
    },

  ]

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShowMenu(!showMenu);
  };

  const list = () => (
    <Box
      sx={{ 
          height: '100%',
          width: '300px',
          backgroundColor: 'black', 
          color: 'white',
        }}
      role="presentation"
     
      onKeyDown={toggleDrawer()}
    >   
     
   <List sx={{
     textAlign:'right',
     pr:'7%',
     pt:'3%',
     pb: '0%'
  }}>
        <IconButton
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        color="inherit"
        >
            <CloseIcon sx={{fontSize:"20px",}} onClick={toggleDrawer()} />
        </IconButton>
    </List>

        <List sx={{pt:'0%'}}> 

        {listMenuu.map((lista) =>{
          return ( 
          <Link key={lista.name} href={lista.url} passHref>      
            <ListItemButton >
                <ListItemText primary={lista.name} />
            </ListItemButton>
          </Link>
        )})} 
          
        </List>
        {role === 'admin' ? <>
      <Divider sx={{bgcolor:'white'}}/>

      <List >
      <ListItemButton onClick={handleClickAdmin}>
                <ListItemText primary="Administrador" />
                {openAdmin ? <ExpandLess /> : <ExpandMore />}
             </ListItemButton>

            <Collapse in={openAdmin} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

              { 
              listMenuAdmin.map((value)=>{
              return(
              <Link key={value.name} href={value.url} passHref>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={value.name} />
              </ListItemButton>
              </Link> 
            )})
            }
                </List>
            </Collapse> 
      </List>
     </> : null}

      <List sx={{
          position:'absolute',
          bottom:'2%',
          right:'2%',
          pr:'3%',}}>
      <IconButton>
        <HelpOutlineRoundedIcon sx={{
          color:'white',}}/>
      </IconButton>
      </List>
      
    </Box>
  );

  return (
         <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={toggleDrawer()}  />
               <Drawer
            anchor="left"
            open={showMenu}
            onClose={toggleDrawer()}
          >
            {list()}
            </Drawer>
          </IconButton>
         
          
   
  );
}