import { Stack, Typography, InputAdornment, IconButton, Button, Select, FilledInput, MenuItem, Link } from '@mui/material';
import Style from '../../../../styles/editar-usuarios.module.css';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Alerta from '../../../../components/alert';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import Loading from '../../../../components/loading';


async function Obtener(id) {
  try{
    const response = await fetch(process.env.NEXT_PUBLIC_REACT_URL_API +'/usuarios/buscar/'+id);
    const data = await response.json();
  return data;
      }
  catch(error){
      console.log(error);
  }
}

export default function CrearUsuarios(){
  const [roles, setRoles] = useState([]);
  const [datos,setDatos] = useState([{}]);
  const [idUser, setIdUser] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [error , setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);


  useEffect(() => {
    if (router.asPath !== router.route) {
      const idUsuario = router.query.Usuario;
      Obtener(idUsuario).then(data =>{
        setIdUser(idUsuario);
        setDatos(data);
        setLoading(false);
        console.log(datos)
      }
        );
    }
    fetch(process.env.NEXT_PUBLIC_REACT_URL_API+'/roles')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setRoles(data)
      setLoading(false)
    })
  }, [router]);

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
      .email('Ingrese un mail valido')
      .required('El mail es requerido'),

    Role: yup
      .string('Ingrese un tipo')
      .required('El tipo es requerido') ,

    Status: yup
      .string('Ingrese un estado')
      .required('El estado es requerido'),
    
    Password: yup
     .string('Ingrese una contraseña')
     .min(8, 'La contraseña debe tener al menos 8 caracteres')
     .max(60, 'La contraseña debe tener como maximo 60 caracteres')
     .required('La contraseña es requerida') 
     .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.-])(?=.{8,})/,
       "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un caracter especial"
     ),
            
  });

    return(<>
    {loading ? <Loading />  : 
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
                <ArrowBackIcon sx={{'&:hover':{cursor:'pointer'}, color:'black',}} /> 
        </Link>

        {error ? <Alerta tipo='error' mensaje={errorMsg}/>:null}

        {success ? <> <Alerta tipo='success' mensaje='Usuario editado con éxito' /></>:null}

        <Formik
          initialValues={{ 
          FirstName: datos[0]?.FirstName, 
          LastName: datos[0]?.LastName,
          Mail: datos[0]?.Mail, 
          Role: datos[0]?.Role, 
          Password: datos[0]?.Password, 
          Company: datos[0]?.Company ,
          Status: datos[0]?.Status ,
          IdRol: datos[0]?.IdRol,
        }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {

          fetch(process.env.NEXT_PUBLIC_REACT_URL_API +'/usuarios/'+ idUser, {
          method: 'PUT', // or 'PUT'
          body: JSON.stringify(values), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
          }).then(res => res.json())
          .catch(error =>{ 
            console.error('Error:', error);
            setError(true);
            setTimeout(() => {
              setError(false)
            }, 4000);
          })
          .then(response => { 
            if(response?.message){
              setError(true);
              setErrorMsg(response.message);
              setTimeout(() => {
                setError(false)
              }, 4000);
              return
            }
            console.log('Success:', response);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false)
            }, 4000);
            setTimeout(() => {
              router.push('/admin/control-usuarios')
            }, 1000);

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
         setFieldValue,
       }) => (
         <Form >
           

            <Typography variant="h3"sx={{color:'var(--bg-color-dark-blue)'}} >
                Editar Usuario
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
             Compañía
           </Typography>
           <FilledInput
             type="text"
             name="Company"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.Company}
             error={touched.Company && Boolean(errors.Company)}
           />
            {touched.Company && Boolean(errors.Company) && <p className={Style.errorMsg}>{errors.Company}</p>}

            <Typography variant="h6" sx={{mt:'20px'}}>
             Tipo de usuario
           </Typography>
           <Select
            defaultValue={datos[0]?.IdRol}
             type="text"
             name="IdRol"
             onChange={(event)=>{
              setFieldValue('IdRol', event.target.value)
              roles.map(role => {
                if(role.id === event.target.value){
                  console.log(role)
                setFieldValue('Role', role.Nombre)
                }})}}
             onBlur={handleBlur}
             error={touched.IdRol && Boolean(errors.IdRol)}
             value={values.IdRol}
             sx={{width:'100%',}}
             >
          {roles.map(role => (
              <MenuItem key={role.id} value={role.id}> {role.Nombre} </MenuItem>
            ))}
           </Select>
           {touched.IdRol && Boolean(errors.IdRol) && <p className={Style.errorMsg}>{errors.IdRol}</p>}

           
           <Typography variant="h6" sx={{mt:'20px'}}>
             Estado
           </Typography>
           <Select
            defaultValue={datos[0]?.Status}
             type="text"
             name="Status"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.Status}
             error={touched.Status && Boolean(errors.Status)}
             sx={{width:'100%',}}
             >
            <MenuItem value="A">Activo</MenuItem>
            <MenuItem value="I">Inactivo</MenuItem>
           </Select>
            {touched.Status && Boolean(errors.Status) && <p className={Style.errorMsg}>{errors.Status}</p>}

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
            <Button variant="contained" type="submit" sx={{backgroundColor: 'var(--bg-color-other-blue)','&:hover':{backgroundColor: 'var(--bg-color-old-blue)'}}}>
              Aceptar
            </Button>
            </div>
          </Form>
           )}
            </Formik>

          
        </Stack>
        
        </>}
        
      </>)
}