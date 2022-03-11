import { Stack, Typography, Button, Select, FilledInput, MenuItem } from '@mui/material'
import Style from '../../styles/crear.module.css'
import { Formik, Form } from 'formik'
import * as yup from 'yup';


export default function CrearUsuarios(){
  let datos = {	}
  const validationSchema = yup.object({
    FirstName: yup
      .string('Ingrese un nombre')
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .max(50, 'El nombre debe tener como maximo 50 caracteres')
      .required('El nombre es requerido') ,

    FirstName: yup
      .string('Ingrese un apellido')
      .min(3, 'El apellido debe tener al menos 3 caracteres')
      .max(60, 'El apellido debe tener como maximo 60 caracteres')
      .required('El apellido es requerido'),

    Mail: yup
      .string('Ingrese un email')
      .email('Ingrese un mail valido')
      .required('El mail es requerido'),

    Role: yup
      .string('Ingrese un tipo')
      .required('El tipo es requerido') ,

    Password: yup
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
            

        <Formik
          initialValues={{ FirstName: '', LastName: '', Mail: '', Role: '', Password: '',}}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting,resetForm }) => {
            console.log(values)
            fetch('http://localhost:5000/usuarios', {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(values), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
          }).then(res => res.json())
          .catch(error =>{ console.error('Error:', error)})
          .then(response => { console.log('Success:', response)});
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
             name="FirstName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.FirstName}
             error={touched.FirstName && Boolean(errors.FirstName)}
           />
            {touched.FirstName && Boolean(errors.FirstName) && <p className={Style.errorMsg}>{errors.FirstName}</p>}

            <Typography variant="h6" sx={{mt:'20px'}}>
             Apellido/s
           </Typography>
           <FilledInput
             type="text"
             name="LastName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.LastName}
             error={touched.LastName && Boolean(errors.LastName)}
           />
            {touched.LastName && Boolean(errors.LastName) && <p className={Style.errorMsg}>{errors.LastName}</p>}

            <Typography variant="h6" sx={{mt:'20px'}}>
             Correo
           </Typography>
           <FilledInput
             type="text"
             name="Mail"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.Mail}
             error={touched.Mail && Boolean(errors.Mail)}
           />
            {touched.Mail && Boolean(errors.Mail) && <p className={Style.errorMsg}>{errors.Mail}</p>}

            <Typography variant="h6" sx={{mt:'20px'}}>
             Tipo de usuario
           </Typography>
           <Select
              defaultValue="Admin"
             type="text"
             name="Role"
             onChange={handleChange}
             onBlur={handleBlur}
             error={touched.Role && Boolean(errors.Role)}
             value={values.Role}
             sx={{width:'100%',}}
             >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="userfull">User Full</MenuItem>
            <MenuItem value="user consulta">User Consulta</MenuItem>
           </Select>
           {touched.Role && Boolean(errors.Role) && <p className={Style.errorMsg}>{errors.Role}</p>}

           
           <Typography variant="h6" sx={{mt:'20px'}}>
             Contraseña
           </Typography>
           <FilledInput
             type="password"
             name="Password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.Password}
             error={touched.Password && Boolean(errors.Password)}
           />
            {touched.Password && Boolean(errors.Password) && <p className={Style.errorMsg}>{errors.Password}</p>}

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