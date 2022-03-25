import Style from '../../styles/roles.module.css'
import Bannerhero from '../../components/banner-hero';
import React from 'react'
import { Typography, Button, Checkbox, Select, MenuItem, IconButton, FilledInput } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


export default function Rol() {
  return (<>
    <Bannerhero title="Control de Roles" />

    <div className={Style.containerBody}>
        <div className={Style.containerForm}>

            <div className={Style.containerRol}>

            <div className={Style.containerSelect}>
               <Typography variant='h6' sx={{justifyContent:'center'}}>Tipo de Rol</Typography>
                <Select
                defaultValue="A"
                type="text"
                name="tipoRol"
                sx={{width:'100%'}}>
                    <MenuItem value="A">Admin</MenuItem>
                    <MenuItem value="UF">Usser Full</MenuItem>
                    <MenuItem value="U">Usuario</MenuItem>
                </Select>
            </div>
                
            <div className={Style.containerInput}>
                <Typography variant='h6'>Nombre del Rol</Typography>
                <FilledInput  />
            </div>

            </div>
            
            <div className={Style.containerPermisos}>
                <Typography variant='h6'>Permisos Comunes </Typography>
                <Typography variant='h6'>Permisos Admin</Typography>
                
            <div className={Style.containerCheckBox}>
                <Checkbox>Hola1</Checkbox>
                <Checkbox>Hola2</Checkbox>
                <Checkbox>Hola3</Checkbox>
                <Checkbox>Hola4</Checkbox>
            </div>
            <div className={Style.containerCheckBox}>
                <Checkbox>Hola1</Checkbox>
                <Checkbox>Hola2</Checkbox>
                <Checkbox>Hola3</Checkbox>
                <Checkbox>Hola4</Checkbox>
            </div>
            </div>

            <div className={Style.containerButton}>
                <Button variant="contained" color="primary" sx={{width:'20%'}}>Eliminar rol</Button>
                <Button variant="contained" color="primary" sx={{width:'20%'}}>Guardar cambios</Button>
            </div>

        </div>    
    </div>

        </>)
}
