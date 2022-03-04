import { Stack, Typography, Button, FilledInput, Select, MenuItem } from "@mui/material"
import FormInput from "../../components/form-input"
import { useState } from "react"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import Style from '../../styles/crear.module.css';
import { Formik } from 'formik';
import * as yup from 'yup';



export default function Crear() {
   
  const validationSchema = yup.object({
    nombre: yup
      .string('Ingrese un nombre')
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .max(50, 'El nombre debe tener como maximo 50 caracteres')
      .required('El nombre es requerido') ,

    codigo: yup
      .number('Ingrese un codigo')
      .required('El codigo es requerido')
      .min(1, 'El codigo debe tener al menos 1 caracter')
      .max(10, 'El codigo debe tener maximo 10 caracteres'),

    id: yup
      .number('Ingrese un id')
      .required('El id es requerido')
      .min(1, 'El id debe tener al menos 1 caracter')
      .max(10, 'El id debe tener maximo 10 caracteres'),

    tipo: yup
      .string('Ingrese un tipo')
      .required('El tipo es requerido'),

    state: yup
      .string('Ingrese un estado')
      .required('El estado es requerido'),

  });

    return (<>

        <Stack 
            component="form"
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
       initialValues={{ nombre: '', codigo: '', tipo: '', state: '', id: '',}}
       validationSchema={validationSchema}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
           
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
             name="codigo"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.codigo}
             error={touched.codigo && Boolean(errors.codigo)}
           />
            {touched.codigo && Boolean(errors.codigo) && <p className={Style.errorMsg}>{errors.codigo}</p>}
  
            <Typography variant="h6" sx={{mt:'20px'}}>
             Tipo de archivo
           </Typography>
           <Select
            defaultValue="Entrada"
             type="text"
             name="tipo"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.tipo}
             error={touched.tipo && Boolean(errors.tipo)}
             sx={{width:'100%',}}
             >
            <MenuItem value="Entrada">Entrada</MenuItem>
            <MenuItem value="Salida">Salida</MenuItem>
           </Select>
            {touched.tipo && Boolean(errors.tipo) && <p className={Style.errorMsg}>{errors.tipo}</p>}

           <Typography variant="h6" sx={{mt:'20px'}}>
             Estado
           </Typography>
           <Select
            defaultValue="Activo"
             type="text"
             name="state"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.state}
             error={touched.state && Boolean(errors.state)}
             sx={{width:'100%',}}
             >
            <MenuItem value="Activo">Activo</MenuItem>
            <MenuItem value="Inactivo">Inactivo</MenuItem>
           </Select>
            {touched.state && Boolean(errors.state) && <p className={Style.errorMsg}>{errors.state}</p>}
           
           <Typography variant="h6" sx={{mt:'20px'}}>
             ID del programa
           </Typography>
           <FilledInput
             type="text"
             name="id"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.id}
             error={touched.id && Boolean(errors.id)}
           />
            {touched.id && Boolean(errors.id) && <p className={Style.errorMsg}>{errors.id}</p>}

           
           <div className={Style.containerBoton}>
            <Button sx={{width:"30%"}} variant="contained" type="submit" disabled={isSubmitting} >Crear entidad</Button>
           </div>
         </form>
       )}
     </Formik>

       

        

        </Stack>



    </> )
}