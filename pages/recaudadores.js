import Bannerhero from '../components/banner-hero/banner-hero.js';
import Style from '../styles/recaudadores.module.css';
import {Typography, Stack,List,ListItemButton, ListItemIcon, ListItemText, Divider} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState } from 'react';
import ListRecaudador from '../components/list-recaudador/list-recaudador.js';

export default function Recaudadores (){
    const [recaudadores, setRecaudadores] = useState("");
    return(
    <>
    <Bannerhero title="Recaudadores" />
    <h1>Recaudadores</h1>
   

<div className={Style.containerBody} id="div2">
<div className={Style.containerLeft}>
        
    <List>
        <ListItemButton>
            <Typography variant="h5"  >Entes Recaudoras</Typography >
            <ListItemIcon>
                <AddOutlinedIcon sx={{color:"green"}}/>
            </ListItemIcon>
        </ListItemButton>
        <Divider/>
        
        <ListRecaudador title="Ente 1" />
        <ListRecaudador title="Ente 2" />
        <ListRecaudador title="Ente 3" />
        
    </List>
       
</div>
       
    

<div className={Style.containerRight}>

</div>
</div>
</>
    );
}