//import styles from './Navbar.module.css'
import TemporaryDrawer from '../menu-desplegable/menu-desplegable.js'
import { Box, AppBar, IconButton, Typography, Toolbar } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar(){
const router = useRouter()
const [openIcon, setOpenIcon] = useState(false);
const handleLogout = () => {
console.log('hola')
localStorage.removeItem("auth")
router.push('/login')

}
  
return(

    <Box sx={{ flexGrow: 1, justifyContent: 'space-between'  }}>
      <AppBar position="static" >
        <Toolbar sx={{ justifyContent: 'space-between'  }}>
         
          <TemporaryDrawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Traductor de Archivos
          </Typography>

          <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <NotificationsOutlinedIcon />
            </IconButton>

          <Typography variant="h6" component="div" sx={{pl:'20px',}}>
            Fiorella Pérez
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