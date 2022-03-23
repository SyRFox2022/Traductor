import { Stack, Typography, InputAdornment, Button, IconButton, Select, FilledInput, MenuItem, Link  } from '@mui/material'
import Style from '../../../styles/crear.module.css'
import { Formik, Form } from 'formik'
import * as yup from 'yup';
import Alerta from '../../../components/alert'
import { useState } from 'react';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



export default function CrearUsuarios(){
  const [errorMsg, setErrorMsg] = useState();
  const [success, setSuccess] = useState(false);
  const [error , setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)}
    
    const handleMouseDownPassword = (event) => {
      event.preventDefault()
    }

  const validationSchema = yup.object({
    FirstName: yup
      .string('Ingrese un nombre')
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .max(30, 'El nombre debe tener como maximo 50 caracteres')
      .required('El nombre es requerido') ,

    LastName: yup
      .string('Ingrese un apellido')
      .min(3, 'El apellido debe tener al menos 3 caracteres')
      .max(30, 'El apellido debe tener como maximo 60 caracteres')
      .required('El apellido es requerido'),

    Mail: yup
      .string('Ingrese un email')
      .email('Ingrese un email valido')
      .required('El email es requerido'),

    Role: yup
      .string('Ingrese un tipo')
      .required('El tipo es requerido') ,

    Password: yup
      .string('Ingrese una contraseña')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(60, 'La contraseña debe tener como maximo 60 caracteres')
      .required('La contraseña es requerida') 
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un caracter especial"
      ),
      
      
  });

    return(
        <>
        <Stack
          sx={{
              p:'3%',
              borderRadius:'5px',
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
        
        <Link href='/admin/control-usuarios' passHref>
          <ArrowBackIcon sx={{'&:hover':{cursor:'pointer'}, color:'var(--color-black)',}} /> 
        </Link>
        
        {error ? <Alerta tipo='error' mensaje={errorMsg}/>:null}

        {success ? <> <Alerta tipo='success' mensaje='Usuario creado con éxito' /></>:null}

        <Formik
          initialValues={{ FirstName: '', LastName: '', Mail: '', Role: '', Password: '', Company: 'default', Status: 'A' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {

          fetch(process.env.NEXT_PUBLIC_REACT_URL_API +'/usuarios', {
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
            setTimeout(() => {
              setError(false)
            }, 4000);
          })
          .then(response => { 
            if(response.message){
              setError(true);
              setErrorMsg(response.message);
              setTimeout(() => {
                setError(false)
              }, 4000);
              return
            }
            console.log('Success:', response);
            setSuccess(true);
            resetForm();
            setTimeout(() => {
              setSuccess(false)
            }, 4000);

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
              defaultValue="admin"
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
            <MenuItem value="userconsulta">User Consulta</MenuItem>
           </Select>
           {touched.Role && Boolean(errors.Role) && <p className={Style.errorMsg}>{errors.Role}</p>}

           
           <Typography variant="h6" sx={{mt:'20px'}}>
             Contraseña
           </Typography>
           <FilledInput
                required
                id="contraseña"
                type={showPassword ? 'text' : 'password'}
                name="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Password}
                error={touched.Password && Boolean(errors.Password)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
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