import { Stack, Typography, Button, Select, FilledInput, MenuItem } from '@mui/material'
import Style from '../../styles/crear.module.css'
import { Formik } from 'formik'
import * as yup from 'yup';


export default function CrearUsuarios(){
  
  const validationSchema = yup.object({
    nombre: yup
      .string('Ingrese un nombre')
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .max(50, 'El nombre debe tener como maximo 50 caracteres')
      .required('El nombre es requerido') ,

    apellido: yup
      .string('Ingrese un apellido')
      .min(3, 'El apellido debe tener al menos 3 caracteres')
      .max(60, 'El apellido debe tener como maximo 60 caracteres')
      .required('El apellido es requerido'),

    email: yup
      .string('Ingrese un email')
      .email('Ingrese un mail valido')
      .required('El mail es requerido'),

    tipo: yup
      .string('Ingrese un tipo')
      .required('El tipo es requerido') ,

    pass1: yup
      .string('Ingrese una contraseña')
      .min(8, 'La contraseña debe tener al menos 3 caracteres')
      .max(60, 'La contraseña debe tener como maximo 60 caracteres')
      .required('La contraseña es requerida') ,
      
    pass2: yup
      .string('Ingrese una contraseña')
      .required('La contraseña es requerida')
      .min(8, 'La contraseña debe tener al menos 3 caracteres')
      .max(60, 'La contraseña debe tener como maximo 60 caracteres')
      .matches('pass1', 'Las contraseñas deben coincidir'),

    
  });

    return(
        <>
        <Stack
          component="form"
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
          initialValues={{ nombre: '', apellido: '', email: '', tipo: '', pass1: '', pass2:'',}}
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

            <Typography variant="h3"sx={{color:'var(--bg-color-dark-blue)'}} >
                Registrar Usuario
            </Typography>

            <Typography variant="h6" sx={{mt:'20px'}}>
             Nombre/s
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

            <Typography variant="h6" sx={{mt:'20px'}}>
             Apellido/s
           </Typography>
           <FilledInput
             type="text"
             name="apellido"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.apellido}
             error={touched.apellido && Boolean(errors.apellido)}
           />
            {touched.apellido && Boolean(errors.apellido) && <p className={Style.errorMsg}>{errors.apellido}</p>}

            <Typography variant="h6" sx={{mt:'20px'}}>
             Correo
           </Typography>
           <FilledInput
             type="text"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             error={touched.email && Boolean(errors.email)}
           />
            {touched.email && Boolean(errors.email) && <p className={Style.errorMsg}>{errors.email}</p>}

            <Typography variant="h6" sx={{mt:'20px'}}>
             Tipo de usuario
           </Typography>
           <Select
              defaultValue="Admin"
             type="text"
             name="tipo"
             onChange={handleChange}
             onBlur={handleBlur}
             error={touched.tipo && Boolean(errors.tipo)}
             value={values.tipo}
             sx={{width:'100%',}}
             >
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="UserFull">User Full</MenuItem>
            <MenuItem value="User Consulta">User Consulta</MenuItem>
           </Select>
           {touched.tipo && Boolean(errors.tipo) && <p className={Style.errorMsg}>{errors.tipo}</p>}

           
           <Typography variant="h6" sx={{mt:'20px'}}>
             Contraseña
           </Typography>
           <FilledInput
             type="password"
             name="pass1"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.pass1}
             error={touched.pass1 && Boolean(errors.pass1)}
           />
            {touched.pass1 && Boolean(errors.pass1) && <p className={Style.errorMsg}>{errors.pass1}</p>}

            <Typography variant="h6" sx={{mt:'20px'}}>
             Repetir contraseña
           </Typography>
           <FilledInput
             type="password"
             name="pass2"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.pass2}
             error={touched.pass2 && Boolean(errors.pass2)}
           />
            {touched.pass2 && Boolean(errors.pass2) && <p className={Style.errorMsg}>{errors.pass2}</p>}

          
          </form>
           )}
            </Formik>

           
            <Button variant="contained"  >
              Registrar
            </Button>
        </Stack>
        
        </>
    )
}