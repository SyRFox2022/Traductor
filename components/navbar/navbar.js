//import styles from './Navbar.module.css'
import TemporaryDrawer from '../menu-desplegable/menu-desplegable.js'
import { Box, AppBar, IconButton, Typography, Toolbar } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar(){
const [name, setName] = useState('');
const router = useRouter();
const [openIcon, setOpenIcon] = useState(false);
const handleLogout = () => {
localStorage.removeItem("auth")
localStorage.removeItem("nombre")
localStorage.removeItem("rol")
router.push('/login')
}

useEffect(() => {
  setName(localStorage.getItem('nombre'))
  
}, [])
  
return(

    <Box sx={{ flexGrow: 1, justifyContent: 'space-between'  }}>
      <AppBar position="static" >
        <Toolbar sx={{ justifyContent: 'space-between'  }}>
         
          <TemporaryDrawer />
          <Link href="/" passHref>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, '&:hover':{cursor:'pointer', color:'var(--color-light-gray)'}}}>
            Traductor de Archivos
          </Typography>
          </Link>

          { localStorage.getItem('A_DoubleVer') == '1' ?
          <Link href='/admin/notificacion' passHref>
          <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <NotificationsOutlinedIcon />
            </IconButton>
            </Link>
            : null}

          <Typography variant="h6" component="div" sx={{pl:'20px',}}>
            {name}
          </Typography>

            
              {openIcon ?
             
              <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={handleLogout}
            >
              <LogoutOutlinedIcon color="error" />
              </IconButton>
             
              : ""}
            

          <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={()=>setOpenIcon(!openIcon)}
            >
              <AccountCircle />
            </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
)


}