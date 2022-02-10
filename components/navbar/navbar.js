//import styles from './Navbar.module.css'
import TemporaryDrawer from '../menu-desplegable/menu-desplegable.js'
import { Box, AppBar, IconButton, Button, Typography, Toolbar } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {useState} from 'react';
import Link from 'next/link';


export default function Navbar(){
  
const [openIcon, setOpenIcon] = useState(false);
  
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

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              {openIcon ?
              
              <LogoutOutlinedIcon color="error" />
             
              : ""}
            </IconButton>

          <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle onClick={()=>setOpenIcon(!openIcon)}/>
            </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
)


}