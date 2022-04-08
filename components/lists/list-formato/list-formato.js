import React from 'react'
import { useState } from 'react'
import { List, ListItemButton, Collapse, FormControlLabel, Switch, Button, Typography, Select, MenuItem, TextField } from '@mui/material';
import Link from 'next/link';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Style from '../../../styles/datos1.module.css';
import { Formik, Form } from 'formik'
import * as yup from 'yup';

export default function Index({datos,tipo,datoTablas}) {

    const handleClickSubmit = () => {
        datos1.map(dato => {
            document.getElementById(dato.id).click();
        })}


    const validationSchema = yup.object({
        nombre: yup
        .string('El nombre debe ser un texto')
        .required('El nombre es requerido'),
        tipo: yup
        .string('El tipo debe ser un texto')
        .required('El tipo es requerido'),
        longitud: yup
        .string('La longitud debe ser un texto')
        .required('La longitud es requerida'),
    });


    const [datos1, setDatos1] = useState(datoTablas);
    let idAut = 1 + Math.max(...datos1.map(dato => dato.id));
    const handleAdd = () => {
        setDatos1([...datos1, {
            id: idAut,
            longitud: '',
            nombre: '',
            tipo: '',
            desde: '',
        }]);
   
    }

    const handleRemove = (id) => {
        if (datos1.length > 1) {
            setDatos1(datos1.filter(dato => dato.id !== id));
        }
    }


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

            <FormControlLabel 
            sx={{mr:"1%"}}
            value="start"
            control={ <Switch defaultChecked />}
            label={datos.tipo}
            labelPlacement="start"
             />

            <ListItemButton onClick={handleClick}>
            {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            </div>
            </div>
            
            <Collapse in={open} timeout="auto" unmountOnExit>

                            
                                
                {datos1.map((datos)=>{
                    return( 
                        <Formik
                        key={datos.id}
                        initialValues={{ nombre:'', desde:'' ,longitud:'', tipo:'', id:datos.id }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            console.log(values);
                         }}
                        >
                         {({
                           values,
                           errors,
                           touched,
                           handleChange,
                           handleBlur,
                         }) => (

                            <Form >
                            <div className={Style.conteinerList} key={datos.id}>

                                <div className={Style.conteinerCamp}>
                                <Typography variant="h6" sx={{pr:'2%'}}>
                                   Nombre
                                </Typography>
                                <TextField
                                    type="text"
                                    name="nombre"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nombre}
                                    error={touched.nombre && Boolean(errors.nombre)}
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
                                    type="text"
                                    name="tipo"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.tipo}
                                    error={touched.tipo && Boolean(errors.tipo)}
                                    id="outlined-basic"
                                    label={datos.tipo}
                                    variant="outlined"
                                    size="small"
                                    sx={{width:"100%"}}
                                />
                                </div>

                                <div className={Style.conteinerCamp}>
                                <Typography variant="h6" sx={{pr:'2%'}}>
                                   Desde
                                </Typography>
                                <TextField
                                    type="text"
                                    name="desde"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.desde}
                                    error={touched.desde && Boolean(errors.desde)}
                                    id="outlined-basic"
                                    label={datos.desde}
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
                                    type="text"
                                    name="longitud"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.longitud}
                                    error={touched.longitud && Boolean(errors.longitud)}
                                    id="outlined-basic"
                                    label={datos.longitud}
                                    variant="outlined"
                                    size="small"
                                    sx={{width:"100%"}}
                                />
                                </div>

                                <div className={Style.containerBtn}>
                                <ListItemButton onClick={()=>handleRemove(datos.id) }>
                                <RemoveIcon sx={{color:'var(--color-redB)'}}/>
                                </ListItemButton>
                                </div>
                            </div>
                            <Button sx={{display:'none',}} id={datos.id} type="submit"  />
                            </Form>
                         )}
                            </Formik>
                         
                            )})} 
                        
                    <div className={Style.containerBottom}>

                    <div className={Style.containerSelect}>
                    <Typography variant="h6" sx={{mr:"2%"}}>
                        Tipo:
                    </Typography>

                    <Select
                        size="small"
                        sx={{ml:'1%'}}
                        defaultValue="entrada"
                        type="text"
                        name="role" >
                            <MenuItem value={'entrada'}>Entrada</MenuItem>
                            <MenuItem value={'salida'}>Salida</MenuItem>
                    </Select>
                    </div>
                   

                    <div className={Style.containerButtons}>

                    <Button variant="contained" onClick={handleAdd}
                    sx={{backgroundColor:'var(--color-greenB)',
                    '&:hover':{backgroundColor: 'var(--color-greenC)'}}}>
                        <AddIcon />
                    </Button>

                    
                    <Link href='../../formato/hola/campo' passHref>
                        <Button variant="contained" sx={{backgroundColor: 'var(--bg-color-other-blue)',
                        '&:hover':{backgroundColor: 'var(--bg-color-old-blue)'}}}>
                            Editar Formato de Campos
                        </Button>
                    </Link>
                    
                        <Button variant="contained" onClick={handleClickSubmit}
                        sx={{ml:'1%', backgroundColor: 'var(--bg-color-other-blue)',
                        '&:hover':{backgroundColor: 'var(--bg-color-old-blue)'}}}>
                            Guardar
                            <SaveOutlinedIcon />
                        </Button>
                    </div>
                    </div>

                    </Collapse>
                        
            </List>
            
    )
}
