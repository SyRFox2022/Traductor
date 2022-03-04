import Bannerhero from '../components/banner-hero';
import Style from '../styles/recaudadores.module.css';
import {Typography, List, ListItemIcon, ListItemText, Divider, Checkbox,  ListItem , ListItemButton } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState, useEffect } from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Link from 'next/link';


export default function Recaudadores (){
    const [recaudador, setRecaudador] = useState("");
    const [recaudadores,setRecaudadores] = useState([]);
    let recaudadoresw = ['PagoFacil','IBM', 'MasterCard'];
    const handleChange = (e,title) => {
        e.target.checked ? setRecaudador(title) : setRecaudador("");
    };
    useEffect(() => {
        
    fetch('http://localhost:5000/recaudadores')
         .then(response => response.json())
         .then(data => setRecaudadores(data))
         .catch(error => console.log(error));

         
    }, [])
    return(
    <>
    <Bannerhero title="Recaudadores" />
   

<div className={Style.containerBody} id="div2">
<div className={Style.containerLeft}>
        
    <List>
        <ListItem>
            <Typography variant="h4"  >Entes Recaudores</Typography >
            <Link href='/recaudadores/crear'>
                <a>
                    <ListItemIcon>
                        <AddOutlinedIcon sx={{color:"green"}}/>
                    </ListItemIcon>
                </a>
            </Link>
        </ListItem>
        <Divider/>
       {recaudadores.map((title) => {
         return (
            <span key={title.nombre.toString()}>
        <ListItem>  
        <Checkbox
            checked={recaudador === title.nombre.toString() ? true : false}
            onChange={(e) => handleChange(e,title.nombre.toString())}
            inputProps={{ 'aria-label': 'controlled' }}
        />

        <ListItemText primary={title.nombre.toString()} />

        <ListItemIcon >
            <Link href={`/recaudadores/editar/${title.nombre.toString()}`}>
            <ListItemButton>
                <CreateOutlinedIcon sx={{color:"blue"}}/>
            </ListItemButton>
            </Link>
            <Link href=''>
            <ListItemButton>
                <DeleteOutlineOutlinedIcon sx={{color:"red"}}/>
            </ListItemButton>
            </Link>
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
        <Typography variant="h4" sx={{color:"var(--color-other-grey)", fontWeight: "bold", textAlign:"center" }} >Seleccione una Entidad</Typography >  
    </div> 
: 
<>
    <table>
    <td>
        <Typography variant="h3" sx={{color:"var(--bg-color-light-blue)", pb:"0.5%", fontWeight: "bold"}} >{recaudador}</Typography >
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