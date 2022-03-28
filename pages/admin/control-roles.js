import Style from '../../styles/roles.module.css'
import Bannerhero from '../../components/banner-hero';
import React from 'react'
import { useState, useEffect } from 'react';
import { Typography, Button, Checkbox, Select, MenuItem, IconButton, Box, Modal, FilledInput } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


export default function Rol() {
    const boxModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'var(--color-light-gray)',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
      
        

  return (<>
    <Bannerhero title="Control de Roles" />

    <div className={Style.containerBody}>
        <div className={Style.containerForm}>

            <div className={Style.containerRol}>

            <div className={Style.containerSelect}>
               <Typography variant='h6' sx={{justifyContent:'center'}}>Roles</Typography>
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
                <Button 
                onClick={()=>handleOpen()}
                variant="contained" 
                color="error" 
                sx={{width:'20%'}}>Eliminar rol</Button>

                <Button variant="contained" sx={{width:'20%', backgroundColor: 'var(--bg-color-other-blue)','&:hover':{backgroundColor: 'var(--bg-color-old-blue)'}}}>Guardar cambios</Button>
            </div>

            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={boxModal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    ¿Está seguro de eliminar este rol?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
                    Una vez eliminado no podrá recuperar los datos.
                    </Typography>

                    <div className={Style.modalButton}>
                    <Button 
                    onClick={()=>handleClose()}
                    variant="contained"
                    color="error">
                    Eliminar
                    </Button>
                    </div>
                            
                </Box>
            </Modal>

        </div>    
    </div>

        </>)
}
