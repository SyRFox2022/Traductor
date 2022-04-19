import {Stack, Typography, Button, InputAdornment, IconButton, FilledInput} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material';
import Style from '../styles/login.module.css'
import {useState} from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import * as yup from 'yup';
import Alerta from '../components/alert'

export default function Login(){
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [err , setErr] = useState(false);
  const [errInac , setErrInac] = useState('');
  const [loading, setLoading] = useState(false);

  // validation schema del formulario 
  const validationSchema = yup.object({
    email: yup
      .string('Ingrese un email')
      .email('El email no es valido')
      .required('El email es requerido'),
    password: yup
      .string('Ingrese una contraseña')
      .required('La contraseña es requerida'),
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  
    return(      
        <>
        
        {err ? <Alerta tipo='error' mensaje="Datos invalidos."/>:null}
        {errInac ? <Alerta tipo='error' mensaje="Cuenta inactiva, consulte con un administrador."/>:null}

        <Stack
          alignItems="center"
          sx={{
              p:'3%',
              borderRadius:'5px',
              border: '1px solid',
              mt:'3%',
              ml:'30%',
              mr:'30%',
              widht:'auto',
              height:'auto',
              backgroundColor:'white',
            }}
          spacing={3}
        >

            <Typography variant="h3"sx={{color:'var(--bg-color-dark-blue)'}} >
                Iniciar Sesion
            </Typography>
            <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setLoading(true)
            fetch(process.env.NEXT_PUBLIC_REACT_URL_API+'/usuarios/'+ values.email)
              .then(res => res.json())
              .catch(err => {setErr(true)
                setTimeout(() => {
                  console.log(err);
                  setErr(false)
                }, 4000);
              })
              .then(data => {

          //comprueba si hay un usuario con ese email
                if(data?.length > 0){
                  //comprueba si el usuario esta activo 
                  if(data?.[0]?.Status == 'I'){
                    setErrInac(true)
                    setTimeout(() => {
                      setErrInac(false)
                    }, 4000);
                    setLoading(false)
                    return
                  }
                  //comprueba si la contraseña es correcta
                  if(data[0].Password === values.password){
                  setLoading(false)
                  //setear permisos y nombre de usuario en localstorage y redireccionar a home 

                  localStorage.setItem("auth","true")
                  localStorage.setItem("nombre",data[0].FirstName + ' ' + data[0].LastName)
                  localStorage.setItem("role",data[0].Role)
                  localStorage.setItem("idRol",data[0].IdRol)
                  localStorage.setItem("idUser",data[0].Id)
                  fetch(process.env.NEXT_PUBLIC_REACT_URL_API+'/roles/'+ data[0].IdRol)
                    .then(res => res.json())
                    .then(data => {
                      console.log(data);
                      //setear permisos en localstorage
                      localStorage.setItem('A_CreateRoles', data[0]?.A_CreateRoles);
                      localStorage.setItem('A_CreateUsuarios', data[0]?.A_CreateUsuarios);
                      localStorage.setItem('A_DeleteRoles', data[0]?.A_DeleteRoles);
                      localStorage.setItem('A_DeleteUsuarios', data[0]?.A_DeleteUsuarios);
                      localStorage.setItem('A_DoubleVer', data[0]?.A_DoubleVer);
                      localStorage.setItem('A_EditRoles', data[0]?.A_EditRoles);
                      localStorage.setItem('A_EditUsuarios', data[0]?.A_EditUsuarios);
                      localStorage.setItem('A_MakeAdmin', data[0]?.A_MakeAdmin);
                      localStorage.setItem('CreateArchivos', data[0]?.CreateArchivos);
                      localStorage.setItem('CreateEntidades', data[0]?.CreateEntidades);
                      localStorage.setItem('DeleteArchivos', data[0]?.DeleteArchivos);
                      localStorage.setItem('DeleteEntidades', data[0]?.DeleteEntidades);
                      localStorage.setItem('EDitEntidades', data[0]?.EDitEntidades);
                      localStorage.setItem('EditArchivos', data[0]?.EditArchivos);
                    })
                    .then(data=>router.push('/'))
                  
                  }
                  //si la contraseña no es correcta
                    else{
                      setLoading(false)
                      console.log('no entre')
                      setErr(true)
                      setTimeout(() => {
                        setErr(false)
                      }, 4000);
                    }
                  }
                  //si no hay un usuario con ese email
                  else{
                    setLoading(false)
                    setErr(true);
                    setTimeout(() => {
                      setErr(false)
                    }, 4000);
                  }})

            setSubmitting(false);
            
        }
       }
    >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
       }) => (<Form>

            <div className={Style.form}>
            <Typography variant="h6" >
                Email
            </Typography>

            <FilledInput
              sx={{mb:'10%'}}
              variant="outlined" 
              required
              type="email"
              name="email"
              id="email"
              size='lg'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && Boolean(errors.email)}
            />

             {touched.email && Boolean(errors.email) && <p className={Style.errorMsg}>{errors.email}</p>}

            <Typography variant="h6" align="left" >
                Contraseña
            </Typography>

            <FilledInput
                required
                id="contraseña"
                type={showPassword ? 'text' : 'password'}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={touched.password && Boolean(errors.password)}
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

            {touched.password && Boolean(errors.password) && <p className={Style.errorMsg}>{errors.password}</p>}
            
            </div>
            {loading ?
            <Button variant="contained" disabled sx={{mt:'10%'}} >
                Loading...
            </Button>
            : 
            <Button variant="contained"  type="submit" sx={{mt:'10%', backgroundColor: 'var(--bg-color-other-blue)'}} >
               Aceptar  
            </Button> }

            </Form>
            
            )}
            </Formik>
            <Typography variant="subtitle1" >
            ¿No tienes cuenta? Consulta a tu administrador.
            </Typography>

        </Stack>
        
        </>
    )
}