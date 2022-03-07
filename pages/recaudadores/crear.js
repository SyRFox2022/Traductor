import { Stack, Typography, Button, FilledInput, Select, MenuItem } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import Style from '../../styles/crear.module.css';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

export default function Crear() {
   
  const validationSchema = yup.object({
    nombre: yup
      .string('Ingrese un nombre')
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .max(50, 'El nombre debe tener como maximo 50 caracteres')
      .required('El nombre es requerido') ,

    codRecaudadores: yup
      .number('Ingrese un codigo')
      .required('El codigo es requerido')
      .min(1, 'El codigo debe tener al menos 1 caracter'),

    idPrograma: yup
      .number('Ingrese un id')
      .required('El id es requerido')
      .min(1, 'El id debe tener al menos 1 caracter'),

    tipoArchivo: yup
      .string('Ingrese un tipo')
      .required('El tipo es requerido'),

    estado: yup
      .string('Ingrese un estado')
      .required('El estado es requerido'),

  });

    return (<>

        <Stack 
            sx={{
                p:'30px',
                borderRadius:'5px',
                border: '1px solid',
                mt:'3%',
                ml:'30%',
                mr:'30%',
                mb:'1%',
                widht:'auto',
                height:'auto',
                backgroundColor:'white',
            }}
            spacing={3}>
                
        <Link href='/recaudadores' passHref>
                <ArrowBackIcon sx={{'&:hover':{cursor:'pointer'}}} /> 
        </Link>

        <Typography variant="h3">Nueva entidad</Typography>

        <Formik
       initialValues={{ nombre: '', codRecaudadores: '', tipoArchivo: '', estado: '', idPrograma: '',foto:'hola.jpg'}}
       validationSchema={validationSchema}
       onSubmit={(values, { setSubmitting }) => {
        fetch('http://localhost:5000/recaudadores', {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(values), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
        setSubmitting(false);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         isSubmitting,
       }) => (
         <Form >
           
           <Typography variant="h6" >
             Nombre
           </Typography>
           <FilledInput
             type="text"
             name="nombre"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.nombre}
             error={touched.nombre && Boolean(errors.nombre)}
           />
            {touched.nombre && Boolean(errors.nombre) && <p className={Style.errorMsg}>{errors.nombre}</p>}
            
           <Typography variant="h6" sx={{mt:'20px'}} >
             Código entidad
           </Typography>
           <FilledInput
             type="text"
             name="codRecaudadores"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.codRecaudadores}
             error={touched.codRecaudadores && Boolean(errors.codRecaudadores)}
           />
            {touched.codRecaudadores && Boolean(errors.codRecaudadores) && <p className={Style.errorMsg}>{errors.codRecaudadores}</p>}
  
            <Typography variant="h6" sx={{mt:'20px'}}>
             Tipo de archivo
           </Typography>
           <Select
            defaultValue="Entrada"
             type="text"
             name="tipoArchivo"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.tipoArchivo}
             error={touched.tipoArchivo && Boolean(errors.tipoArchivo)}
             sx={{width:'100%',}}
             >
            <MenuItem value="E">Entrada</MenuItem>
            <MenuItem value="S">Salida</MenuItem>
           </Select>
            {touched.tipoArchivo && Boolean(errors.tipoArchivo) && <p className={Style.errorMsg}>{errors.tipoArchivo}</p>}

           <Typography variant="h6" sx={{mt:'20px'}}>
             Estado
           </Typography>
           <Select
            defaultValue="Activo"
             type="text"
             name="estado"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.estado}
             error={touched.estado && Boolean(errors.estado)}
             sx={{width:'100%',}}
             >
            <MenuItem value="A">Activo</MenuItem>
            <MenuItem value="I">Inactivo</MenuItem>
           </Select>
            {touched.estado && Boolean(errors.estado) && <p className={Style.errorMsg}>{errors.estado}</p>}
           
           <Typography variant="h6" sx={{mt:'20px'}}>
             ID del programa
           </Typography>
           <FilledInput
             type="text"
             name="idPrograma"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.idPrograma}
             error={touched.idPrograma && Boolean(errors.idPrograma)}
           />
            {touched.idPrograma && Boolean(errors.idPrograma) && <p className={Style.errorMsg}>{errors.idPrograma}</p>}

           
           <div className={Style.containerBoton}>
            <Button sx={{width:"30%"}} variant="contained" type="submit"  >Crear entidad</Button>
           </div>
         </Form>
       )}
     </Formik>

       

        

        </Stack>



    </> )
}