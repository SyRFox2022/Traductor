import React from 'react'
import { useState } from 'react'
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Style from '../../styles/datos.module.css';

export default function Index({tipo,datoTablas}) {
    const [open,setOpen] = useState(false)
    const handleClickDatos = () =>{
        setOpen(!open)
    } 
    return (
        <List key={tipo.nombre}>
                <ListItemButton sx={{backgroundColor:'var(--color-info-table)'}} onClick={handleClickDatos}>
                        <ListItemText primary={tipo.nombre} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                    <Collapse  in={open} timeout="auto" unmountOnExit>

                            <table className={Style.tableDatos}>
                                
                            {datoTablas.map((datos)=>{
                          return( 
                            <tr key={datos.nombre}> 
                                <td className={Style.tableT}>Nombre:   <div className={Style.tableD}>{datos.nombre}</div></td>  
                                <td className={Style.tableT}>Tipo:     <div className={Style.tableD}>{datos.tipo}</div></td>  
                                <td className={Style.tableT}>Valor:    <div className={Style.tableD}>{datos.valor}</div></td>  
                            </tr>
                          )})} 
                        
                          </table>

                    </Collapse> 
            </List>
            
    )
}
