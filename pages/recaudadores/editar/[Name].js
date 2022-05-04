import { Stack, Typography, Button, FilledInput, Select, MenuItem } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import Style from '../../../styles/crear.module.css';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Alerta from '../../../components/alert'
import Loading from '../../../components/loading';

const URLAPI = process.env.NEXT_PUBLIC_REACT_URL_API;

async function Obtener(cod) {
    try{
      const response = await fetch(URLAPI +'/recaudadores/'+cod);
      const data = await response.json();
    return data;
        }
    catch(error){
        console.log(error);
    }
}
    

export default function Crear() {
    const [errorMsg, setErrorMsg] = useState();
    const [success, setSuccess] = useState(false);
    const [error , setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [datos,setDatos] = useState([{}]);
    const [codigoRec, setCodigoRec] = useState('');
    const router = useRouter();
   
    useEffect(() => {
      if (router.asPath !== router.route) {
        const codRecaudadores = router.query.Name;
        Obtener(codRecaudadores).then(data =>{
          setCodigoRec(codRecaudadores);
          setDatos(data);
          setLoading(false);
        }
          );
      }
      
        

    }, [router]);
   
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
    {loading ? <Loading />  : 
    <>
    
        <Stack 
            sx={{
                p:'3%',
                borderRadius:'5px',
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

        {error ? <Alerta tipo='error' mensaje={errorMsg}/>:null}

        {success ? <> <Alerta tipo='success' mensaje='Editada con Exito ' /></>:null} 

        <Typography variant="h3">Editar entidad</Typography>
        <Formik
       initialValues={{ 
          nombre: datos[0]?.nombre, 
          codRecaudadores: datos[0]?.codRecaudadores, 
          tipoArchivo: datos[0]?.tipoArchivo, 
          estado: datos[0]?.estado, 
          idPrograma: datos[0]?.idPrograma ,}}

       validationSchema={validationSchema}
       
       onSubmit={(values, { setSubmitting }) => {
        fetch(URLAPI+'/recaudadores/'+ codigoRec, {
          method: 'PUT', // or 'PUT'
          body: JSON.stringify(values), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .catch(error =>{
          setError(true);
          setErrorMsg(error)
          setTimeout(() => {
            setError(false)
          }, 4000);
        })
        .then(response => {
          if(response.message || response.sqlMessage){
            setError(true);
            setErrorMsg(response.message || response.sqlMessage);
            setTimeout(() => {
              setError(false)
            }, 4000);
              return;
          }
          else{
          setSuccess(true)
          setTimeout(() => {
            setSuccess(false)
          }, 4000);
          console.log(response);
          }
        
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
            <MenuItem value="ES">Entrada y Salida</MenuItem>
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

           
           <div className={Style.containerButton}>
            <Button sx={{width:"30%",  backgroundColor: 'var(--bg-color-other-blue)','&:hover':{backgroundColor: 'var(--bg-color-old-blue)'}}} variant="contained" type="submit"  >Aceptar</Button>


           </div>
         </Form>
       )}
     </Formik>

       

        

        </Stack>



    </> }</>)
}