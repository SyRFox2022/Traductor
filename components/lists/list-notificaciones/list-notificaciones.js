import React from 'react'
import { useState } from 'react'
import { Typography, Button, List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import Link from 'next/link';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Style from '../../../styles/list-notificacion.module.css';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';


export default function Index({subtitulo, descripcion}) {
const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

    
  return (
    
    <List key={subtitulo.titulo}
        sx={{backgroundColor:'var(--color-white)', 
        width: '100%'}}>
        <div className={Style.containerMap}>
           
           
           <ListItemButton onClick={handleClick}
            sx={{backgroundColor:'var(--bg-color-lb-table)',}}>
           <div className={Style.containerTitle}>
              <Typography variant="h5"> {subtitulo.titulo} </Typography>
           </div>
          

           <div className={Style.containerDatos}>
              <Typography variant="h5" sx={{pr:'5%'}}> {subtitulo.nombre} </Typography>
              <Typography variant="h5" sx={{pr:'5%'}}> {subtitulo.fecha} </Typography>
              <Typography variant="h5" sx={{pr:'5%'}}> {subtitulo.hora} </Typography>
           </div>
           
              {open ? <ExpandLess /> : <ExpandMore />}
           </ListItemButton>
           
          </div>
           
           <Collapse  in={open} timeout="auto" unmountOnExit 
            sx={{width:'100%'}}>
           
               {descripcion.map((datos)=>{
                return( 
                <div key={datos.accion} className={Style.containerDescripcion}>
                  <Typography variant="h6">Acción: {datos.accion}</Typography>
                  <Typography variant="h6"></Typography>
                  <Typography variant="h6">A: {datos.a}</Typography>
                  <Typography variant="h6">Descripción: {datos.desc}</Typography>
                  <Typography variant="h6">De: {datos.de}</Typography>
                  <Typography variant="h6"></Typography>

                  
                  <Link href='#' passHref 
                  sx={{justifySelf: 'end', mt:'2%'}}>
                     <Typography variant="h6">Ver Cambios</Typography>
                    </Link>


                  <div className={Style.containerButtons}>
                  <Button sx={{color:'var(--color-greenB)'}}> <CheckCircleOutlineOutlinedIcon/> </Button>
                  <Button sx={{color:'var(--color-redB)'}}> <CancelOutlinedIcon/> </Button> 
                  </div>            
                </div>  
                )})}
                     
           </Collapse> 
        </List>
       
        
)
}

