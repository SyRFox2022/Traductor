import Bannerhero from '../components/banner-hero/banner-hero.js';
import Style from '../styles/recaudadores.module.css';
import {Typography, Stack,List,ListItemButton, ListItemIcon, ListItemText, Divider} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState, useEffect } from 'react';
import ListRecaudador from '../components/list-recaudador/list-recaudador.js';

export default function Recaudadores (){
    const [recaudadores, setRecaudadores] = useState("");
    
    useEffect(() => {
        setRecaudadores(localStorage.getItem("recaudadores"));
    }, []);
     

    return(
    <>
    <Bannerhero title="Recaudadores" />
    <h1>Recaudadores</h1>
   

<div className={Style.containerBody} id="div2">
<div className={Style.containerLeft}>
        
    <List>
        <ListItemButton>
            <Typography variant="h5"  >Entes Recaudores</Typography >
            <ListItemIcon>
                <AddOutlinedIcon sx={{color:"green"}}/>
            </ListItemIcon>
        </ListItemButton>
        <Divider/>
        
        <ListRecaudador title="PagoFacil" />
        <ListRecaudador title="RapiPago" />
        <ListRecaudador title="IBM" />
        
    </List>
       
</div>
       
    

<div className={Style.containerRight}>
<Typography variant="h2" sx={{color:"var(--color-grey)"}} >{recaudadores}</Typography >
</div>



</div>
</>
    );
}