import Bannerhero from '../components/banner-hero';
import Style from '../styles/archivo.module.css';
import {Typography,List, Select, Switch, MenuItem, ListItemIcon, ListItemText, Divider, Checkbox, Table, TableBody, TableCell, TableRow, OutlinedInput, InputAdornment, IconButton, ListItem, Collapse} from '@mui/material';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function Archivos(){
    const [open, setOpen] = useState(true);
    const [recaudador, setRecaudador] = useState("");
    const recaudadores = ['PagoFacil','IBM', 'MasterCard'];
    const [order, setOrder] = useState('');

    const listaArchivos = [
        {
            id: 1,
            nombre: 'archivo1',
            descripcion: 'descripcion1',
            fecha: 'fecha1',
            tipo: 'entrada',
        },
        {
            id: 2,
            nombre: 'archivo2',
            descripcion: 'descripcion2',
            fecha: 'fecha2',
            tipo: 'salida',
        },
    ]

   

    const handleClick = () => {
        setOpen(!open);
      };
      
    const handleChange = (e,title) => {
        e.target.checked ? setRecaudador(title) : setRecaudador("");
        setOrder(e.target.value);
    };

return( <>
  
   <Bannerhero title="Archivo de Entrada / Salida" />

<div className={Style.containerBody}>


<div className={Style.containerLeft}>
        
    <List>
          <OutlinedInput
            sx={{mb: "5%",
            backgroundColor:"var(--color-light-gray)",
            border:"0",
            height: "35px"}}
            endAdornment={
              <InputAdornment>
                <IconButton edge="end">
                    <SearchIcon sx={{color:"black"}} />
                </IconButton>
              </InputAdornment>
            }
          />

        <ListItem>
            <Typography variant="h5"  >Entes Recaudores</Typography >
            <IconButton edge="end" onClick={handleClick}>
            {open ? <ExpandLess onClick={handleClick} /> : <ExpandMore onClick={handleClick} />}
            </IconButton>
        </ListItem>

        <Divider/>
        <Collapse in={open} timeout="auto" unmountOnExit>
                
           
       {recaudadores.map((title) => {
         return (
            <span key={title}>
        <ListItem >  
        <Checkbox
            checked={recaudador === title ? true : false}
            onChange={(e) => handleChange(e,title)}
            inputProps={{ 'aria-label': 'controlled' }}
        />
        
        <ListItemText primary={title} />
           
        </ListItem > 
       
            <Divider/>  
            </span>
       )})}
        </Collapse>
        </List>
       
</div>
       

<div className={Style.bodyRight}>



{recaudador === "" ? 

    <div className={Style.containerVoid}>
        <Typography variant="h4" sx={{color:"var(--color-other-grey)", fontWeight: "bold", textAlign:"center" }} >Seleccione una Entidad</Typography >  
    </div> 
: 
<>

    <Typography variant="h5" 
    sx={{
        textAlign:"right",
        pb:"2%",
        pr:"3%",}}> 
        Ordenar por:

        <Select
            sx={{ml:'1%'}}
            size="small"
           defaultValue="desc"
           type="text"
           name="order" >
                <MenuItem value={'desc'}>Entidad Desc</MenuItem>
                <MenuItem value={'asc'}>Entidad Asc</MenuItem>
        </Select>
    </Typography>

    <Table sx={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
          <TableRow>
            <TableCell sx={{fontWeight:"bold"}}>Entidad</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Formato</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Fecha</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Tipo de Archivo</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Estado</TableCell>
            <TableCell> <SettingsIcon/> </TableCell>
          </TableRow>
    
        {listaArchivos.map((archivo) => {
        return (
        <TableBody key={archivo.id}>
            <TableRow>
            <Link href={`/archivo/${archivo.nombre}`} passHref>
            <TableCell sx={{'&:hover':{cursor:'pointer'}}} >{archivo.nombre}</TableCell>
            </Link>
                <TableCell>{archivo.descripcion}</TableCell>
                <TableCell>{archivo.fecha}</TableCell>
                <TableCell>{archivo.tipo} </TableCell>
                <TableCell>
                    <Switch defaultChecked />
                </TableCell>
                <TableCell>
                {localStorage.getItem('EditArchivos') == 1 ?
                    <IconButton edge="end">
                        <CreateOutlinedIcon sx={{color:"blue"}}/>
                    </IconButton>
                :null}
                {localStorage.getItem('DeleteArchivos') == 1 ?
                    <IconButton edge="end">
                        <DeleteOutlineOutlinedIcon sx={{color:"red"}}/>
                    </IconButton>
                :null}
                </TableCell>
            </TableRow>
        </TableBody>
            )
        })}
      </Table>



       
      

    </>
}
    </div>

</div>

    
</>)}



