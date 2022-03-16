import { Stack, Typography, Button, Select, FilledInput, MenuItem } from '@mui/material'
import Style from '../../styles/crear.module.css'
import { Formik, Form } from 'formik'
import * as yup from 'yup';
import Alerta from '../../components/alert'
import { useState } from 'react';



export default function CrearUsuarios(){
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [error , setError] = useState(false);
  const validationSchema = yup.object({
    firstName: yup
      .string('Ingrese un nombre')
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .max(30, 'El nombre debe tener como maximo 50 caracteres')
      .required('El nombre es requerido') ,

    lastName: yup
      .string('Ingrese un apellido')
      .min(3, 'El apellido debe tener al menos 3 caracteres')
      .max(30, 'El apellido debe tener como maximo 60 caracteres')
      .required('El apellido es requerido'),

    mail: yup
      .string('Ingrese un email')
      .email('Ingrese un mail valido')
      .required('El mail es requerido'),

    role: yup
      .string('Ingrese un tipo')
      .required('El tipo es requerido') ,

    password: yup
      .string('Ingrese una contraseña')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(60, 'La contraseña debe tener como maximo 60 caracteres')
      .required('La contraseña es requerida') ,
      
  });

    return(
        <>
        <Stack
          alignItems="center"
          sx={{
              p:'30px',
              borderRadius:'5px',
              border: '1px solid',
              mt:'3%',
              ml:'30%',
              mr:'30%',
              mb: '1%',
              widht:'auto',
              height:'auto',
              backgroundColor:'white',
            }}
          spacing={3}
        >
        
        {error ? <Alerta tipo='error' mensaje={errorMsg}/>:null}

        {success ? <> <Alerta tipo='success' mensaje='Creada con éxito' /></>:null}

        <Formik
          initialValues={{ firstName: '', lastName: '', mail: '', role: '', password: '', company: 'default', status: 'A' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {

          fetch('http://localhost:5000/usuarios', {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(values), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
          }).then(res => res.json())
          .catch(error =>{ 
            console.error('Error:', error);
            setError(true);
            setErrorMsg(error);
          })
          .then(response => { 
            console.log('Success:', response);
            setSuccess(true);
            resetForm();

          });
            setSubmitting(false);
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
         handleReset,
       }) => (
         <Form >
           

            <Typography variant="h3"sx={{color:'var(--bg-color-dark-blue)'}} >
                Registrar Usuario
            </Typography>

            <Typography variant="h6" sx={{mt:'20px'}}>
             Nombre/s
           </Typography>
           <FilledInput
             type="text"
             name="firstName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.firstName}
             error={touched.firstName && Boolean(errors.firstName)}
           />
            {touched.firstName && Boolean(errors.firstName) && <p className={Style.errorMsg}>{errors.firstName}</p>}

            <Typography variant="h6" sx={{mt:'20px'}}>
             Apellido/s
           </Typography>
           <FilledInput
             type="text"
             name="lastName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.lastName}
             error={touched.lastName && Boolean(errors.lastName)}
           />
            {touched.lastName && Boolean(errors.lastName) && <p className={Style.errorMsg}>{errors.lastName}</p>}

            <Typography variant="h6" sx={{mt:'20px'}}>
             Correo
           </Typography>
           <FilledInput
             type="text"
             name="mail"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.mail}
             error={touched.mail && Boolean(errors.mail)}
           />
            {touched.mail && Boolean(errors.mail) && <p className={Style.errorMsg}>{errors.mail}</p>}

            <Typography variant="h6" sx={{mt:'20px'}}>
             Tipo de usuario
           </Typography>
           <Select
              defaultValue="Admin"
             type="text"
             name="role"
             onChange={handleChange}
             onBlur={handleBlur}
             error={touched.role && Boolean(errors.role)}
             value={values.role}
             sx={{width:'100%',}}
             >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="userfull">User Full</MenuItem>
            <MenuItem value="userconsulta">User Consulta</MenuItem>
           </Select>
           {touched.role && Boolean(errors.role) && <p className={Style.errorMsg}>{errors.role}</p>}

           
           <Typography variant="h6" sx={{mt:'20px'}}>
             Contraseña
           </Typography>
           <FilledInput
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             error={touched.password && Boolean(errors.password)}
           />
            {touched.password && Boolean(errors.password) && <p className={Style.errorMsg}>{errors.password}</p>}

           <div className={Style.containerButton}>
            <Button variant="contained" type="submit"  >
              Registrar
            </Button>
            </div>
          </Form>
           )}
            </Formik>

          
        </Stack>
        
        </>
    )
}