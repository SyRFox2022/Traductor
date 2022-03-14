import React from 'react'
import { useState } from 'react'
import { List, ListItemButton, ListItemText, Collapse, FormControlLabel, Switch, Button, Typography, Select, MenuItem, TextField } from '@mui/material';

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
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
            <div className={Style.containerListCollapse}> 
            <ListItemButton onClick={handleClick}>
            <ListItemText primary={datos.title} />
            </ListItemButton>
            <div className={Style.containerRight}> 
            <FormControlLabel 
            sx={{mr:"1%"}}
            value="start"
            control={ <Switch defaultChecked size="small" />}
            label={datos.tipo}
            labelPlacement="start"
             />
            <ListItemButton onClick={handleClick}>
            {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            </div>
            </div>
            
            <Collapse in={open} timeout="auto" unmountOnExit>

                            
                                
                            {datoTablas.map((datos)=>{
                          return( 
                            <div className={Style.conteinerList} key={datos.id}>

                                <div className={Style.conteinerCamp}>
                                <Typography variant="h6" sx={{pr:'2%'}}>
                                   Nombre
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    label={datos.nombre}
                                    variant="outlined"
                                    size="small"
                                    sx={{width:"100%"}}
                                />
                                </div>

                                <div className={Style.conteinerCamp}>
                                <Typography variant="h6" sx={{pr:'2%'}} >
                                   Tipo
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    label={datos.tipo}
                                    variant="outlined"
                                    size="small"
                                    sx={{width:"100%"}}
                                />
                                </div>

                                <div className={Style.conteinerCamp}>
                                <Typography variant="h6" sx={{pr:'2%'}} >
                                    Longitud
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    label={datos.longitud}
                                    variant="outlined"
                                    size="small"
                                    sx={{width:"100%"}}
                                />
                                </div>

                                <div className={Style.conteinerCamp}>
                                <Typography variant="h6" sx={{pr:'2%'}} >
                                   Valor
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    label={datos.valor}
                                    variant="outlined"
                                    size="small"
                                    sx={{width:"100%"}}
                                />
                                </div>

                                <div className={Style.containerBtn}>
                                <ListItemButton>
                                <AddIcon />
                                </ListItemButton>
                                <ListItemButton>
                                <RemoveIcon />
                                </ListItemButton>
                                </div>
                            </div>
                            )})} 
                        
             

                    <div className={Style.containerIdk}>

                    <Typography sx={{mr:"2%"}}>
                        Tipo:
                        <Select >
                            <MenuItem value={10}>Entrada</MenuItem>
                            <MenuItem value={20}>Salida</MenuItem>
                        </Select>
                    </Typography>

                    <div className={Style.containerButtons}>
                        <Button sx={{backgroundColor:'black'}}>
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
