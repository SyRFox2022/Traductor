import Style from '../../styles/c-roles.module.css'
import Bannerhero from '../../components/banner-hero';
import Loading from '../../components/loading';
import React from 'react'
import { useState, useEffect } from 'react';
import { Typography, Button, Checkbox, Select, MenuItem, IconButton, Box, Modal, FilledInput } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Alerta from '../../components/alert';



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
    const [actualizar, setActualizar] = useState(false);
    const [rolselect, setRolSelect] = useState('');
    const [rolData, setRolData] = useState({});
    const [loading, setLoading] = useState(true);
    const [roles, setRoles] = useState([]);
    const [open, setOpen] = useState(false);
    const [existe, setExiste] = useState(false);

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [error , setError] = useState(false);

    const APIURL = process.env.NEXT_PUBLIC_REACT_URL_API;

    // validation schema del formulario 
    const validationSchema = yup.object({
       Nombre: yup
          .string('Ingrese un nombre de rol')
          .required('Se requiere un nombre de rol'),
      });

    const handleClose = () => setOpen(false);
    const handleOpen = () =>  setOpen(true);


    const handleDelete = () =>{
        fetch(`${APIURL}/usuarios`)
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(res => {
            //comprobar si existe un usuario con la idrol de rolselect
            let existe = false;
            res.map(item => {
                if(item.IdRol === rolselect){
                    existe = true;
                }
            })
            // si existe no se puede eliminar el rol
            if(existe){
                setErrorMsg('No se puede eliminar el rol porque existen usuarios con este rol');
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 3000);
            }
            // si no existe se puede eliminar el rol
            else{
                
                fetch(`${APIURL}/roles/${rolselect}`, {
                    method: 'DELETE',
                })
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                    setOpen(false);
                    obtenerTodosRoles();
                    // se notifica que se elimino el rol
                    setSuccess(true);
                    setSuccessMsg('Rol eliminado con éxito')
                    setTimeout(() => {
                        setSuccess(false)
                        console.log('llegue aca time out')
                      }, 4000);
                    })
                    .then(dato => {
                        //resetea el estado de la pagina
                        setRolSelect(roles[0].id)
                        document.getElementById("Resetear").click()})
                    .catch(error => console.log(error,'error'));
            }
        })
    } 

    const CrearRol = () => {
        console.log("Creado");
        fetch(APIURL+'/roles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //asigna los valores del formulario
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
                SoloVisualizar: 0, 
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            obtenerTodosRoles();
            // se notifica de que se creo el rol
            setSuccess(true);
            setSuccessMsg('Rol creado con éxito, seleccionalo para cambiar su nombre y darle permisos.')
            setTimeout(() => {
              setSuccess(false)
            }, 4000);})
        .catch(error => console.error('Error:', error));
        }


    const HandleChange = (e) => {
        //asigna el valor del input a una variable
        setRolSelect(e.target.value);
        fetch(`${APIURL}/roles/${e.target.value}`)
            .then(res => res.json())
            .then(data => {
                setRolData(data);
                obtenerTodosRoles();
            })
    }

    useEffect(() => {
        //obtiene todos los roles de la base de datos y los asigna a una variable para mostrarlos en el select de la pagina 
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

    const obtenerTodosRoles = () => {
        fetch(`${APIURL}/roles`)
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(data => {
            setRoles(data);
        })
    }

        

  return (<>
  {loading ? <Loading/> :<>
    <Bannerhero title="Control de Roles" />

    <div className={Style.containerBody}>
        <div className={Style.containerForm}>

        {error ? <Alerta tipo='error' mensaje={errorMsg}/>:null}

        {success ? <Alerta tipo='success' mensaje={successMsg} /> :null}

<Formik
initialValues={{ 
    //asigna los valores de la base de datos a los inputs
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
SoloVisualizar: rolData[0]?.SoloVisualizar,  
}}
validationSchema={validationSchema}
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
        obtenerTodosRoles();
        setSuccess(true);
        setSuccessMsg('Cambios realizados con éxito')
        setTimeout(() => {
            setSuccess(false)
          }, 4000);}
        )
    
    .catch(error => console.error('Error:', error))
}}
>
    {({ 

    values,
    handleChange,
    touched,
    errors,
    handleBlur,
    setFieldValue

}) => (
        <Form>
            
            <div className={Style.containerRol}>

            <div className={Style.containerSA}>
                {localStorage.getItem('A_CreateRoles') == 1 ? 
                <div className={Style.containerAdd}>

                <Button onClick={CrearRol} variant="contained" 
                sx={{backgroundColor:'var(--color-greenB)',
                '&:hover':{backgroundColor: 'var(--color-greenC)'}}}>
                    <AddOutlinedIcon/>
                </Button>
                </div>
                    : null}
                <div className={Style.containerSelect}>
               <Typography variant='h6' sx={{justifyContent:'center'}}>Roles</Typography>
                <Select
                onChange={(e) => {HandleChange(e)
                        roles.map(rol => {
                            //setea los valores de los roles en el select
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
                                setFieldValue('SoloVisualizar', rol.SoloVisualizar)
                            }
                        })      
                }}
                value={rolselect}
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
            
            <div className={Style.containerInput}>
                
                <Typography variant='h6'>Nombre del Rol</Typography>
                <FilledInput
                name="Nombre"
                type="text"
                value={values.Nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.Nombre && Boolean(errors.Nombre)}
                />
                {touched.Nombre && Boolean(errors.Nombre) && <p className={Style.errorMsg}>{errors.Nombre}</p>}
            
            </div>
          
            </div>

            <div className={Style.containerPermisos}>

                <Typography variant='h6'>Permisos Comunes </Typography>
                <Typography variant='h6'>Permisos Admin</Typography>
                
            <div className={Style.containerCheckBox}> 

                <span>
                    <Checkbox
                   name="SoloVisualizar"
                   type="checkbox"
                   value={values.SoloVisualizar}
                   checked={values.SoloVisualizar}
                   onChange={(e) => {
                       e.target.checked ? setFieldValue(e.target.name, 1) : setFieldValue(e.target.name, 0)
                       //si esta checkeado, se setea el valor de todos los campos en 0
                       if(e.target.checked){
                            setFieldValue('A_EditUsuarios', 0)
                            setFieldValue('A_DeleteUsuarios', 0)
                            setFieldValue('A_CreateRoles', 0)
                            setFieldValue('A_EditRoles', 0)
                            setFieldValue('A_DeleteRoles', 0)
                            setFieldValue('A_MakeAdmin', 0)
                            setFieldValue('A_DoubleVer', 0)
                            setFieldValue('DeleteArchivos', 0)
                            setFieldValue('A_CreateUsuarios', 0)
                            setFieldValue('EDitEntidades', 0)
                            setFieldValue('EditArchivos', 0)
                            setFieldValue('DeleteEntidades', 0)
                            setFieldValue('CreateEntidades', 0)
                            setFieldValue('CreateArchivos', 0)
                          }
                   }}
                  
                    />
                    <Typography  variant='h7'>Solo Visualizar</Typography>
                </span>

                <span></span>

                <span>
                    <Checkbox
                    disabled={values.SoloVisualizar === 1 ? true : false}
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
                    disabled={values.SoloVisualizar === 1 ? true : false}
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
                    disabled={values.SoloVisualizar === 1 ? true : false}
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
                    disabled={values.SoloVisualizar === 1 ? true : false}
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
                    disabled={values.SoloVisualizar === 1 ? true : false}
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
                    disabled={values.SoloVisualizar === 1 ? true : false}
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

            {localStorage.getItem('A_MakeAdmin') == 1 ?<div className={Style.containerCheckBox}>   
                <span>
                    <Checkbox 
                    disabled={values.SoloVisualizar === 1 ? true : false}
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
                    disabled={values.SoloVisualizar === 1 ? true : false}
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
                    disabled={values.SoloVisualizar === 1 ? true : false}
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
                    disabled={values.SoloVisualizar === 1 ? true : false}
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
                    disabled={values.SoloVisualizar === 1 ? true : false}
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
                    disabled={values.SoloVisualizar === 1 ? true : false} 
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
                    disabled={values.SoloVisualizar === 1 ? true : false}
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
                disabled={values.SoloVisualizar === 1 ? true : false}
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
                         
            </div> : 

            <div className={Style.containerMsg}>
              <Typography variant='h6'>No tienes permisos para modificar los roles de admin</Typography>
            </div>}

            </div>

            <div className={Style.containerButton}>
                <Button sx={{display:'none'}} id="Resetear" onClick={() =>{
                     setFieldValue('Nombre', roles[0].Nombre)
                     setFieldValue('EDitEntidades', roles[0].EDitEntidades)
                     setFieldValue('EditArchivos', roles[0].EditArchivos)
                     setFieldValue('DeleteEntidades', roles[0].DeleteEntidades)
                     setFieldValue('CreateEntidades', roles[0].CreateEntidades)
                     setFieldValue('CreateArchivos', roles[0].CreateArchivos)
                     setFieldValue('A_EditUsuarios', roles[0].A_EditUsuarios)
                     setFieldValue('A_DeleteUsuarios', roles[0].A_DeleteUsuarios)
                     setFieldValue('A_CreateRoles', roles[0].A_CreateRoles)
                     setFieldValue('A_EditRoles', roles[0].A_EditRoles)
                     setFieldValue('A_DeleteRoles', roles[0].A_DeleteRoles)
                     setFieldValue('A_MakeAdmin', roles[0].A_MakeAdmin)
                     setFieldValue('A_DoubleVer', roles[0].A_DoubleVer)
                     setFieldValue('DeleteArchivos', roles[0].DeleteArchivos)
                     setFieldValue('A_CreateUsuarios', roles[0].A_CreateUsuarios)
                     setFieldValue('SoloVisualizar', roles[0].SoloVisualizar)

                }}  />
                
                {localStorage.getItem('A_DeleteRoles') == 1 && rolselect != localStorage.getItem('idRol') ?
                <Button 
                onClick={()=>handleOpen()}
                variant="contained" 
                color="error" 
                sx={{width:'20%'}}>
                Eliminar rol
                </Button>
                :
                <Button 
                variant="contained" 
                disabled={true} 
                sx={{width:'20%'}}>
                Eliminar rol
                </Button>
                }

                {localStorage.getItem('A_EditRoles') == 1 && rolselect != localStorage.getItem('idRol') ?
                <Button 
                type="submit" 
                variant="contained" 
                sx={{width:'20%', 
                backgroundColor: 'var(--bg-color-other-blue)','&:hover':{backgroundColor: 'var(--bg-color-old-blue)'}
                }}>Guardar cambios</Button>
                : 
                <Button 
                variant="contained" 
                disabled={true} 
                sx={{width:'20%'}}>
                Guardar cambios
                </Button>
                }
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
                    onClick={()=>{
                        handleDelete()
                    }}
                    variant="contained"
                    color="error">
                    Eliminar
                    </Button>
                    </div>
                            
                </Box>
            </Modal>
            </Form>
)}
            </Formik>
        </div>    
   
    </div>

    </>}   </>)
}
