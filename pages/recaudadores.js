import Bannerhero from '../components/banner-hero/banner-hero.js';
import Style from '../styles/recaudadores.module.css';
import {Typography, Stack,List,ListItemButton, ListItemIcon, ListItemText, Divider, Checkbox,ListItem} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState, useEffect } from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// parentNode nextSibling
export default function Recaudadores (){
    const [recaudador, setRecaudador] = useState("");
    const recaudadores = ['PagoFacil','IBM', 'MasterCard'];
    const handleChange = (e,title) => {
        e.target.checked ? setRecaudador(title) : setRecaudador("");
    };

    return(
    <>
    <Bannerhero title="Recaudadores" />
   

<div className={Style.containerBody} id="div2">
<div className={Style.containerLeft}>
        
    <List>
        <ListItem>
            <Typography variant="h5"  >Entes Recaudores</Typography >
            <ListItemIcon>
                <AddOutlinedIcon sx={{color:"green"}}/>
            </ListItemIcon>
        </ListItem>
        <Divider/>
       {recaudadores.map((title) => {
         return (
            <span key={title}>
        <ListItem>  
        <Checkbox
            checked={recaudador === title ? true : false}
            onChange={(e) => handleChange(e,title)}
            inputProps={{ 'aria-label': 'controlled' }}
        />

        <ListItemText primary={title} />

        <ListItemIcon >
            <CreateOutlinedIcon sx={{color:"blue"}}/>
            <DeleteOutlineOutlinedIcon sx={{color:"red"}}/>
        </ListItemIcon>

        </ListItem>
            <Divider/>  
            </span>
       )})}
        </List>
       
</div>
       

<div className={Style.datosrec}>
{recaudador === "" ? 

    <div>
        <Typography variant="h4" sx={{color:"var(--color-other-grey)", fontWeight: "bold"}} >Seleccione una Entidad</Typography >  
    </div> 
: 
<>
    <table>
    <td>
        <Typography variant="h4" sx={{color:"var(--bg-color-light-blue)", pb:"0.5%", fontWeight: "bold"}} >{recaudador}</Typography >
    </td><td>
        <Typography variant="h5" sx={{textAlign:"right", pr:"30%", fontWeight: "bold"}} > Estado: Aburrida =) </Typography >
    </td>
    </table>

    <Typography variant="h6" sx={{pb:"1%"}} > Ultima fecha de procesado: </Typography >

    <table>
    <td>
        <Typography variant="h6" > Formato archivo de entrada: </Typography >
        <Typography variant="h6" > Formato archivo de salida: </Typography >
    </td><td>
        <Typography variant="h6" > Archivos totales de entrada: </Typography >
        <Typography variant="h6" sx={{pb:"1%"}} > Archivos totales de salida: </Typography >
    </td>
    </table>

    <Typography variant="h6" > Cantidad de registros: </Typography >
    <Typography variant="h6" > Cantidad de rechazos: </Typography >

    <Typography variant="h4" sx={{ pt:"2%", pb:"1%", fontWeight: "bold"}} > Acciones</Typography >

    <Typography variant="h6"  > Ver archivos de Entrada </Typography >
    <Typography variant="h6" > Ver archivos de Salida </Typography >
    </>
}
    </div>

</div>
</>
    );
}