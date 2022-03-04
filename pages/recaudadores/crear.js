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
      .required('El nombre es requerido') ,
    codigo: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
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

        <Formik
       initialValues={{ nombre: '', password: '' }}
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
         /* and other goodies */
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
             error={touched.email && Boolean(errors.email)}
           />
           {errors.nombre && touched.nombre && errors.nombre}

           <Typography variant="h6" >
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
           {errors.codigo && touched.codigo && errors.codigo}

            <Typography variant="h6" >
             Tipo de archivo
           </Typography>
           <Select
             type="text"
             name="tipo"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.tipo}
             error={touched.tipo && Boolean(errors.tipo)}
             >
           <MenuItem value={10}>Entrada</MenuItem>
          <MenuItem value={20}>Salida</MenuItem>
           </Select>
           {errors.tipo && touched.tipo && errors.tipo}

           <Typography variant="h6" >
             Estado
           </Typography>
           <Select
             type="text"
             name="state"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.state}
             error={touched.state && Boolean(errors.state)}
             >
            <MenuItem value={10}>Activo</MenuItem>
            <MenuItem value={20}>Inactivo</MenuItem>
           </Select>
           {errors.state && touched.state && errors.state}

           <Typography variant="h6" >
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
           {errors.id && touched.id && errors.id}
           
           <div className={Style.containerBoton}>
            <Button sx={{width:"30%"}} variant="contained" type="submit" disabled={isSubmitting} >Crear entidad</Button>
           </div>
         </form>
       )}
     </Formik>

       

        

        </Stack>



    </> )
}