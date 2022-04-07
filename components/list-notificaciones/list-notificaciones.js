import React from 'react'
import { useState } from 'react'
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Style from '../../styles/list-notificacion.module.css';

export default function Index({subtitulo, descripcion}) {
const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

    
  return (
    <div className={Style.containerMap}>
    <List key={subtitulo.titulo}>
            <ListItemButton sx={{backgroundColor:'var(--color-info-table)'}} onClick={handleClick}>
                    <ListItemText variant="h5" primary={subtitulo.titulo} />
                    <div className={Style.containerDatos}>
                    <ListItemText primary={subtitulo.nombre} />
                    <ListItemText primary={subtitulo.fecha} />
                    <ListItemText primary={subtitulo.hora} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                    </div>
            </ListItemButton>
                <Collapse  in={open} timeout="auto" unmountOnExit>

                        {descripcion.map((datos)=>{
                      return( 
                          <h1>{datos.texto}</h1>
                        )})}
                        
                </Collapse> 
        </List>
        </div>
        
)
}

