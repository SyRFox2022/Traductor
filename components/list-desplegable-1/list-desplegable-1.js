import React from 'react'
import { useState } from 'react'
import { List, ListItemButton, ListItemText, Collapse, FormControlLabel, Switch, Button, Typography, Select, MenuItem } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Style from '../../styles/datos1.module.css';

export default function Index({datos,tipo,datoTablas}) {
    const [open,setOpen] = useState(false)
    const handleClick = () =>{
        setOpen(!open)
    } 
    return (
        <List key={datos.title}
            sx={{
                backgroundColor:"var(--color-info-table)",
                borderRadius:"5px",
                padding:"0%",
                mt:"1%",
                color:"black",}}>
            <ListItemButton onClick={handleClick}>
            <ListItemText primary={datos.title} />

            <FormControlLabel 
            sx={{mr:"1%"}}
            value="start"
            control={ <Switch defaultChecked size="small" />}
            label={datos.tipo}
            labelPlacement="start"
             />

            {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            
            <Collapse in={open} timeout="auto" unmountOnExit>

                            <table className={Style.tableDatos}>
                                
                            {datoTablas.map((datos)=>{
                          return( 
                            <tr key={datos.nombre}> 
                                <td className={Style.tableT}>Nombre:     <div className={Style.tableD}>{datos.nombre}</div></td> 
                                <td className={Style.tableT}>Longitud:   <div className={Style.tableD}>{datos.longitud}</div></td>  
                                <td className={Style.tableT}>Tipo:       <div className={Style.tableD}>{datos.tipo}</div></td>  
                                <td className={Style.tableT}>Valor:      <div className={Style.tableD}>{datos.valor}</div></td>  
                            </tr>
                          )})} 
                        
                          </table>

                    <div className={Style.containerIdk}>

                    <Typography sx={{mr:"2%"}}>
                        Tipo:
                        <Select >
                            <MenuItem value={10}>Entrada</MenuItem>
                            <MenuItem value={20}>Salida</MenuItem>
                        </Select>
                    </Typography>

                    <div className={Style.containerButtons}>
                        <Button sx={{backgroundColor:'var(--color-light-gray)'}}>
                            Editar Formato de Campos
                        </Button>

                        <Button sx={{ml:'1%'}}>
                            Guardar
                            <SaveOutlinedIcon />
                        </Button>
                    </div>
                    </div>

                    </Collapse>
                        
            </List>
            
    )
}
