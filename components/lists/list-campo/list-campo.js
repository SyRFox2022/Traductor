import React from 'react'
import { useState } from 'react'
import { List, ListItemButton, ListItemText, Collapse, FormControlLabel, Button, Typography, Select, MenuItem, TextField } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import Style from '../../../styles/datos1.module.css';

export default function Index({datos,datoTablas}) {
    
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
            <Typography variant="h5"> {datos.title} </Typography>
            </ListItemButton>

            <div className={Style.containerRight}> 
            <ListItemButton>
                <RemoveIcon sx={{color:'red'}}/>
            </ListItemButton>

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
                                   Desde
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    label={datos.desde}
                                    variant="outlined"
                                    size="small"
                                    sx={{width:"100%"}}
                                />
                                </div>

                                <div className={Style.conteinerCamp}>
                                <Typography variant="h6" sx={{pr:'2%'}} >
                                   Hasta
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    label={datos.hasta}
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

                    </Collapse>
                        
            </List>
            
    )
}
