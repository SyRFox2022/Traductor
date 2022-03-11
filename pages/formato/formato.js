import Bannerhero from '../../components/banner-hero';
import Style from '../../styles/formato.module.css';
import {Typography, Collapse, List, FormControlLabel, ListItemButton, ListItemText, ListItemIcon, Switch} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';



export default function Formato (){
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
        };
    
    const listFormat = [
        {
            title:'dato1',
            tipo:'Entrada'
        },
        {
            title:'dato2',
            tipo:'Salida'
        }
    ]

    const datosTabla = [
        {
            nombre: 'Tipo_reg',
            tipo: 'Number',
            longitud: '200',
            valor: '53453'},
        {
            nombre: 'Fecha',
            longitud: '200',
            tipo: 'Varchar',
            valor: '53453'},
        {
            nombre: 'codigo',
            longitud: '200',
            tipo: 'Varchar',
            valor: '53453'},
    ];

    return(<>
    
    <Bannerhero title='Formato de Archivos (...)'/>

    <div className={Style.containerBody}>        
        <div className={Style.containerDatos}>

            <Typography variant="h4">
             Formatos
            
            <AddOutlinedIcon sx={{color:"white", position:"absolute", right:"5%", top:"11%"}}/>
            </Typography>

            {listFormat.map((datos) =>{
          return ( 
            <List key={datos.title}
            sx={{
                backgroundColor:"var(--color-light-gray)",
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
                <List component="div" disablePadding>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="hola" />
              </ListItemButton>

                </List>
            </Collapse>

            </List>
            )})}


        </div>
    </div>

    </>)
}