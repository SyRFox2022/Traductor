import { List, ListItemButton, ListItemIcon, Collapse, FormControlLabel, Switch, Button, Typography, Select, MenuItem, TextField } from '@mui/material';
import Link from 'next/link';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Style from '../../../styles/datos1.module.css';
import { useState } from 'react'



export default function Index({titulo}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
return( <>
    <List>
            <ListItemButton onClick={handleClick} 
            sx={{backgroundColor:'var(--bg-color-lb-table)',}}>

            <div className={Style.containerTitle}>
                <Typography variant='h5'>{titulo.name}</Typography>

              <div className={Style.containerButtonsP}>

              <ListItemButton >
                <Link href='/admin/procesos/config-padrones' passHref>
                      <SettingsOutlinedIcon sx={{color:'var(--color-other-grey)',}}/> 
                </Link>
                </ListItemButton>

              <Button variant="contained" color="primary" sx={{m:'1%'}}>
                Exportar
              </Button>

              </div>
            </div>

              </ListItemButton>
              
           
            

    </List>

    </> )}
