import {Stack, Typography, Button, InputAdornment, IconButton, FilledInput} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material';
import Style from '../styles/login.module.css'
import {useState} from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import * as yup from 'yup';
import Alerta from '../components/alert'


export default function Login(){
  const validationSchema = yup.object({
    email: yup
      .string('Ingrese un email')
      .email('El email no es valido')
      .required('El email es requerido'),
    password: yup
      .string('Ingrese una contraseña')
      .required('La contraseña es requerida'),
  });

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [err , setErr] = useState(false);
  

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  
    return(      
        <>
        
        {err ? <Alerta tipo='error' mensaje="Datos invalidos"/>:null}

        <Stack
          alignItems="center"
          sx={{
              p:'30px',
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

            fetch(process.env.NEXT_PUBLIC_REACT_URL_API+'/usuarios/'+ values.email)
              .then(res => res.json())
              .catch(err => {setErr(true)
                setTimeout(() => {
                  console.log(err);
                  setErr(false)
                }, 4000);
              })
              .then(data => {
                
                if(data?.length > 0){
                  
                  if(data[0].Password === values.password){
                  console.log('entre')
                  localStorage.setItem("auth","true")
                  localStorage.setItem("nombre",data[0].FirstName + ' ' + data[0].LastName)
                   if(data[0].Role === "admin"){
                    localStorage.setItem("role","admin")
                    }
                    else if(data[0].Role === "userfull"){
                    localStorage.setItem("role","userfull")
                    }
                    else if(data[0].Role === "userconsulta"){
                    localStorage.setItem("role","user")
                    }

                  router.push('/')

                   }
                    else{
                      setErr(true)
                      setTimeout(() => {
                        setErr(false)
                      }, 4000);
                    }
                  }
                  else{
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
         handleSubmit,
         isSubmitting,
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

            <Button variant="contained" type="submit" sx={{mt:'10%'}} >
              Iniciar sesion
            </Button>

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