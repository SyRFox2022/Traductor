import { List, ListItemButton, Collapse, FormControlLabel, Switch, Button, Typography, Select, MenuItem, TextField } from '@mui/material';
import Link from 'next/link';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
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
              {open ? <ExpandLess /> : <ExpandMore />}
            </div>

            </ListItemButton>

            <div className={Style.containerButtons}>
            <Collapse  in={open} timeout="auto" unmountOnExit sx={{width:'100%'}}>

              <Link href='/admin/procesos/config-padrones' passHref>
                <Button variant="contained" color="primary" sx={{m:'1%'}}>
                  Configurar
                </Button>
              </Link>

            <Button variant="contained" color="primary" sx={{m:'1%'}}>
               Exportar
            </Button>
            
            </Collapse>
            </div>
            

    </List>

    </> )}
