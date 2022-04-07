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
    
    const [actualizarDatos, setActualizarDatos] = useState(false);
    const [actualizar, setActualizar] = useState(false);
    const [rolselect, setRolSelect] = useState('');
    const [rolData, setRolData] = useState({});
    const [loading, setLoading] = useState(true);
    const [roles, setRoles] = useState([]);
    const [rolesSelected, setRolesSelected] = useState([]);
    const APIURL = process.env.NEXT_PUBLIC_REACT_URL_API;
    const [open, setOpen] = useState(false);
    const handleClose = () =>{
        fetch(APIURL + '/roles/'+rolselect, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }})
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(data => {
                console.log(data);
                setOpen(false);
                setTimeout(() => {
                    setActualizar(!actualizar); 
                }, 1000);
            })

    } 
    const handleOpen = () => setOpen(true);

    
    const CrearRol = () => {
        console.log("Creado");
        fetch(APIURL+'/roles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Nombre: 'Nuevo rol',
                EDitEntidades: 0,
                EditArchivos: 0,
                DeleteEntidades: 0,
                CreateEntidades: 0,
                CreateArchivos: 0,
                A_EditUsuarios: 0,
                A_DeleteUsuarios: 0,
                A_CreateRoles: 0,
                A_EditRoles: 0,
                A_DeleteRoles: 0,
                A_MakeAdmin: 0,
                A_DoubleVer: 0,
                DeleteArchivos: 0,
                A_CreateUsuarios: 0, 
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setActualizar(!actualizar);
        })
        .catch(error => console.error('Error:', error));
        }

    const HandleChange = (e) => {
        setActualizarDatos(true);
        setRolSelect(e.target.value);
        fetch(`${APIURL}/roles/${rolselect}`)
            .then(res => res.json())
            .then(data => {
                setRolData(data);
                setActualizarDatos(false);
            })
    }
    
    useEffect(() => {
    setLoading(true)
        fetch(`${APIURL}/roles`)
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(data => {
            setRoles(data);
            setRolSelect(data[0].id);
        })
        .then(dataso => {
            fetch(`${APIURL}/roles/${rolselect}`)
            .then(res => res.json())
            .then(data => {
                setRolData(data);
                setLoading(false);
            })
            
        })
        
    }, [actualizar])
        

  return (<>
  {loading ? <Loading/> :<>
    <Bannerhero title="Control de Roles" />

    <div className={Style.containerBody}>
        <div className={Style.containerForm}>
<Formik
initialValues={{ 
Nombre: rolData[0]?.Nombre,
EDitEntidades: rolData[0]?.EDitEntidades,
EditArchivos: rolData[0]?.EditArchivos,
DeleteEntidades: rolData[0]?.DeleteEntidades,
CreateEntidades: rolData[0]?.CreateEntidades,
CreateArchivos: rolData[0]?.CreateArchivos,
A_EditUsuarios: rolData[0]?.A_EditUsuarios,
A_DeleteUsuarios: rolData[0]?.A_DeleteUsuarios,
A_CreateRoles: rolData[0]?.A_CreateRoles,
A_EditRoles: rolData[0]?.A_EditRoles,
A_DeleteRoles: rolData[0]?.A_DeleteRoles,
A_MakeAdmin: rolData[0]?.A_MakeAdmin,
A_DoubleVer: rolData[0]?.A_DoubleVer,
DeleteArchivos: rolData[0]?.DeleteArchivos,
A_CreateUsuarios: rolData[0]?.A_CreateUsuarios, 
}}
onSubmit={(values, { setSubmitting }) => {
   fetch(`${APIURL}/roles/${rolselect}`, {
       method: 'PUT',
       body: JSON.stringify(values), // data can be `string` or {object}!
       headers:{
         'Content-Type': 'application/json'
       }})
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setActualizar(!actualizar);}
        )
    
    .catch(error => console.error('Error:', error))
}}
>
    {({ values, handleChange, errors ,handleBlur, handleSubmit, setFieldValue, ...rest }) => (
        <Form>
            
             {console.log(rest)}
            <div className={Style.containerRol}>

            <div className={Style.containerSA}>
                <div className={Style.containerAdd}>
                <Button onClick={CrearRol} sx={{backgroundColor:'var(--color-greenB)','&:hover':{backgroundColor: 'var(--color-greenC)'}}} variant="contained">
                    <AddOutlinedIcon/>
                </Button>
                </div>
                <div className={Style.containerSelect}>
               <Typography variant='h6' sx={{justifyContent:'center'}}>Roles</Typography>
                <Select
                onChange={(e) => {HandleChange(e)
                        roles.map(rol => {
                            if(rol.id === e.target.value){
                                setFieldValue('Nombre', rol.Nombre)
                                setFieldValue('EDitEntidades', rol.EDitEntidades)
                                setFieldValue('EditArchivos', rol.EditArchivos)
                                setFieldValue('DeleteEntidades', rol.DeleteEntidades)
                                setFieldValue('CreateEntidades', rol.CreateEntidades)
                                setFieldValue('CreateArchivos', rol.CreateArchivos)
                                setFieldValue('A_EditUsuarios', rol.A_EditUsuarios)
                                setFieldValue('A_DeleteUsuarios', rol.A_DeleteUsuarios)
                                setFieldValue('A_CreateRoles', rol.A_CreateRoles)
                                setFieldValue('A_EditRoles', rol.A_EditRoles)
                                setFieldValue('A_DeleteRoles', rol.A_DeleteRoles)
                                setFieldValue('A_MakeAdmin', rol.A_MakeAdmin)
                                setFieldValue('A_DoubleVer', rol.A_DoubleVer)
                                setFieldValue('DeleteArchivos', rol.DeleteArchivos)
                                setFieldValue('A_CreateUsuarios', rol.A_CreateUsuarios)

                            }
                        })
                            
                       
                }}
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
            </div>
            
           
                   {actualizarDatos ? null :
            <div className={Style.containerInput}>
                
                <Typography variant='h6'>Nombre del Rol</Typography>
                <FilledInput
                name="Nombre"
                type="text"
                value={values.Nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                
                />
            
            </div>
            }

            </div>

            {actualizarDatos ? <Loading/>:<>
            
            <div className={Style.containerPermisos}>
                <Typography variant='h6'>Permisos Comunes </Typography>
                <Typography variant='h6'>Permisos Admin</Typography>
                
            <div className={Style.containerCheckBox}> 
                <span>
                    <Checkbox
                    name="CreateEntidades"
                    type="checkbox"
                    value={values.CreateEntidades}
                    checked={values.CreateEntidades}
                    onChange={(e) => {
                        e.target.checked ? setFieldValue(e.target.name, 1) : setFieldValue(e.target.name, 0)
                    }}
                    />
                    <Typography  variant='h7'>Crear Entidades</Typography>
                </span>

                <span>
                    <Checkbox
                    name="CreateArchivos"
                    type="checkbox"
                    values={values.CreateArchivos}
                    checked={values.CreateArchivos}
                    onChange={(e) => {
                        e.target.checked ? setFieldValue(e.target.name, 1) : setFieldValue(e.target.name, 0)
                    }}
                    onBlur={handleBlur}
                    />
                    <Typography  variant='h7'>Crear Archivo</Typography>
                </span> 
               
                <span>
                    <Checkbox
                    name='EDitEntidades'
                    type="checkbox"
                    checked={values.EDitEntidades}
                    onChange={(e) => {
                        e.target.checked ? setFieldValue(e.target.name, 1) : setFieldValue(e.target.name, 0)
                    }}
                    onBlur={handleBlur}

                    />

                    <Typography  variant='h7'>Editar Entidades</Typography>
                </span>
                
                <span>
                    <Checkbox
                    name='EditArchivos'
                    type="checkbox"
                    checked={values.EditArchivos}
                    onChange={(e) => {
                        e.target.checked ? setFieldValue(e.target.name, 1) : setFieldValue(e.target.name, 0)
                    }}
                    onBlur={handleBlur}
                    />
                    <Typography  variant='h7'>Editar Archivos</Typography>
                </span>

                <span>
                    <Checkbox
                    name='DeleteEntidades'
                    type="checkbox"
                    checked={values.DeleteEntidades}
                    onChange={(e) => {
                        e.target.checked ? setFieldValue(e.target.name, 1) : setFieldValue(e.target.name, 0)
                    }}
                    onBlur={handleBlur}
                    />
                    <Typography  variant='h7'>Eliminar Entidades</Typography>
                </span>
                
                <span>
                    <Checkbox
                    name='DeleteArchivos'
                    type="checkbox"
                    checked={values.DeleteArchivos}
                    onChange={(e) => {
                        e.target.checked ? setFieldValue(e.target.name, 1) : setFieldValue(e.target.name, 0)
                    }}
                    onBlur={handleBlur}
                    />
                    <Typography  variant='h7'>Eliminar Archivos</Typography>
                </span>    
            </div>

            <div className={Style.containerCheckBox}>   
                <span>
                    <Checkbox 
                    name='A_CreateUsuarios'
                    type="checkbox"
                    checked={values.A_CreateUsuarios}
                    onChange={(e) => {
                        e.target.checked ? setFieldValue(e.target.name, 1) : setFieldValue(e.target.name, 0)
                    }}
                    onBlur={handleBlur}
                    />
                    <Typography  variant='h7'>Crear Usuarios</Typography>
                </span>

                <span>
                    <Checkbox
                    name='A_CreateRoles'
                    type="checkbox"
                    checked={values.A_CreateRoles}
                    onChange={(e) => {
                        e.target.checked ? setFieldValue(e.target.name, 1) : setFieldValue(e.target.name, 0)
                    }}
                    onBlur={handleBlur}
                    />
                    <Typography  variant='h7'>Crear Roles</Typography>
                </span>

                <span>
                    <Checkbox
                    name='A_EditUsuarios'
                    type="checkbox"
                    checked={values.A_EditUsuarios}
                    onChange={(e) => {
                        e.target.checked ? setFieldValue(e.target.name, 1) : setFieldValue(e.target.name, 0)
                    }}
                    onBlur={handleBlur}
                    />
                    <Typography  variant='h7'>Editar Usuarios</Typography>
                </span>

                <span>
                    <Checkbox
                    name='A_EditRoles'
                    type="checkbox"
                    checked={values.A_EditRoles}
                    onChange={(e) => {
                        e.target.checked ? setFieldValue(e.target.name, 1) : setFieldValue(e.target.name, 0)
                    }}
                    onBlur={handleBlur}
                    />
                    <Typography  variant='h7'>Editar Roles</Typography>
                </span>

                <span>
                    <Checkbox
                    name='A_DeleteUsuarios'
                    type="checkbox"
                    checked={values.A_DeleteUsuarios}
                    onChange={(e) => {
                        e.target.checked ? setFieldValue(e.target.name, 1) : setFieldValue(e.target.name, 0)
                    }}
                    onBlur={handleBlur}
                    />
                    <Typography  variant='h7'>Eliminar Usuarios</Typography>
                </span>                

                <span>
                    <Checkbox 
                    name='A_DeleteRoles'
                    type="checkbox"
                    checked={values.A_DeleteRoles}
                    onChange={(e) => {
                        e.target.checked ? setFieldValue(e.target.name, 1) : setFieldValue(e.target.name, 0)
                    }}
                    onBlur={handleBlur}
                    />
                    <Typography  variant='h7'>Eliminar Roles</Typography>
                </span>
                
                <span>
                    <Checkbox 
                    name='A_MakeAdmin'
                    type="checkbox"
                    checked={values.A_MakeAdmin}
                    onChange={(e) => {
                        e.target.checked ? setFieldValue(e.target.name, 1) : setFieldValue(e.target.name, 0)
                    }}
                    onBlur={handleBlur}
                    />
                    <Typography  variant='h7'>Hacer Admin</Typography>
                </span>

                <span>
                <Checkbox
                name='A_DoubleVer'
                type="checkbox"
                checked={values.A_DoubleVer}
                onChange={(e) => {
                        e.target.checked ? setFieldValue(e.target.name, 1) : setFieldValue(e.target.name, 0)
                    }}
                onBlur={handleBlur}
                />
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

                <Button type="submit" variant="contained" sx={{width:'20%', backgroundColor: 'var(--bg-color-other-blue)','&:hover':{backgroundColor: 'var(--bg-color-old-blue)'}}}>Guardar cambios</Button>
            </div>
            
            </>}
            

            </Form>
)}
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
