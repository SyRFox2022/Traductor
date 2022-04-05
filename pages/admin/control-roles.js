import Style from '../../styles/c-roles.module.css'
import Bannerhero from '../../components/banner-hero';
import Loading from '../../components/loading';
import React from 'react'
import { useState, useEffect } from 'react';
import { Typography, Button, Checkbox, Select, MenuItem, IconButton, Box, Modal, FilledInput } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Check, DataObjectSharp } from '@mui/icons-material';
import { Formik, Form } from 'formik';


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

    
    const [rolselect, setRolSelect] = useState('');
    const [rolData, setRolData] = useState({});
    const [loading, setLoading] = useState(true);
    const [roles, setRoles] = useState([]);
    const [rolesSelected, setRolesSelected] = useState([]);
    const APIURL = process.env.NEXT_PUBLIC_REACT_URL_API;
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const HandleChange = (e) => {
      
        setRolSelect(e.target.value);
        fetch(`${APIURL}/roles/${rolselect}`)
            .then(res => res.json())
            .then(data => {
                setRolData(data);
            })
    }
    
    useEffect(() => {
        fetch(`${APIURL}/roles`)
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(data => {
            setRoles(data);
            setRolSelect(data[0].id);
        })
        fetch(`${APIURL}/roles/${rolselect}`)
            .then(res => res.json())
            .then(data => {
                setRolData(data);
                setLoading(false);
            })
        
    }, [])
        

  return (<>
  {loading ? <Loading/> :<>
    <Bannerhero title="Control de Roles" />

    <div className={Style.containerBody}>
        <div className={Style.containerForm}>
<Formik
initialValues={{ email: '', password: '' }}
>
        <Form>

            <div className={Style.containerRol}>

            <div className={Style.containerSelect}>
               <Typography variant='h6' sx={{justifyContent:'center'}}>Roles</Typography>
                <Select
                onChange={(e) => HandleChange(e)}
                defaultValue={roles[0]?.id}
                type="text"
                name="tipoRol"
                sx={{width:'100%'}}>
                    {
                    roles.map(rol => (
                        <MenuItem key={rol.id} value={rol.id}>{rol.Nombre}</MenuItem>
                    ))


                   }
                   
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
                <span>
                    <Checkbox></Checkbox>
                    <Typography  variant='h7'>Crear Entidades</Typography>
                </span>

                <span>
                    <Checkbox></Checkbox>
                    <Typography  variant='h7'>Crear Archivo</Typography>
                </span> 
               
                <span>
                    <Checkbox></Checkbox>
                    <Typography  variant='h7'>Editar Entidades</Typography>
                </span>
                
                <span>
                    <Checkbox></Checkbox>
                    <Typography  variant='h7'>Editar Archivos</Typography>
                </span>

                <span>
                    <Checkbox></Checkbox>
                    <Typography  variant='h7'>Eliminar Entidades</Typography>
                </span>
                
                <span>
                    <Checkbox></Checkbox>
                    <Typography  variant='h7'>Eliminar Archivos</Typography>
                </span>    
            </div>

            <div className={Style.containerCheckBox}>   
                <span>
                    <Checkbox ></Checkbox>
                    <Typography  variant='h7'>Crear Usuarios</Typography>
                </span>

                <span>
                    <Checkbox ></Checkbox>
                    <Typography  variant='h7'>Crear Roles</Typography>
                </span>

                <span>
                    <Checkbox ></Checkbox>
                    <Typography  variant='h7'>Editar Usuarios</Typography>
                </span>

                <span>
                    <Checkbox ></Checkbox>
                    <Typography  variant='h7'>Editar Roles</Typography>
                </span>

                <span>
                    <Checkbox ></Checkbox>
                    <Typography  variant='h7'>Eliminar Usuarios</Typography>
                </span>                

                <span>
                    <Checkbox ></Checkbox>
                    <Typography  variant='h7'>Eliminar Roles</Typography>
                </span>
                
                <span>
                    <Checkbox ></Checkbox>
                    <Typography  variant='h7'>Hacer Admin</Typography>
                </span>

                <span>
                    <Checkbox ></Checkbox>
                    <Typography  variant='h7'>Doble Verificacion</Typography>
                </span>                      
                         
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


            </Form>
            </Formik>

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

    </>}   </>)
}
