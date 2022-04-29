import Style from '../../../styles/config-padrones.module.css';
import Bannerhero from '../../../components/banner-hero';
import Loading from '../../../components/loading';
import * as yup from 'yup';
import Alerta from '../../../components/alert';
import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import { Stack, Typography, Button, Select, MenuItem, IconButton, FilledInput } from "@mui/material";

export default function Procesos(){
    const APIURL = process.env.NEXT_PUBLIC_REACT_URL_API;

    const [success, setSuccess] = useState(false);

    const validationSchema = yup.object({
        dfinal: yup
          .string('Ingrese el nombre del archivo')
          .required('El nombre del archivo es requerido'),
        dbackup: yup
          .string('Ingrese el nombre del backup')
          .required('El nombre del backup es requerido'),
      });


   return(<>
        <Bannerhero title="Configuración de Procesos"/>

        <div className={Style.containerBody}>
        
        {success ? <> <Alerta tipo='success' mensaje='Usuario editado con éxito' /></>:null}

            <Formik
            initialValues={{ 
            dfinal: '',
            dbackup: '',
            corigen: '/home/caranguren/Escritorio/Origen/',
            cdestino: '/home/caranguren/Escritorio/Destino/' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                fetch(APIURL + '/padron', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({values}),
                })
            }}
            >
            {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         }) => (<Form>

            <div className={Style.containerForm}>

            <div className={Style.containerArrow}>
                <Link href='/admin/procesos' passHref>
                        <ArrowBackIcon sx={{'&:hover':{cursor:'pointer'}, color:'var(--color-black)'}} /> 
                </Link>
            </div>

            <div className={Style.containerRow}>

            <div className={Style.containerInput}>
            <Typography variant="h6"sx={{color:'var(--bg-color-dark-blue)'}} >
              Nombre del archivo final:
            </Typography>

            <FilledInput
            sx={{m:'1% 1%'}}
            name="dfinal"
            type="text"
            value={values.dfinal}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.dfinal && Boolean(errors.dfinal)}
            />

             {touched.dfinal && Boolean(errors.dfinal) && <p className={Style.errorMsg}>{errors.dfinal}</p>}
             </div>

             <div className={Style.containerInput}>           
             <Typography variant="h6"sx={{color:'var(--bg-color-dark-blue)'}} >
             Carpeta de origen:
            </Typography>

            <FilledInput
            sx={{m:'1% 1%'}}
            name="corigen"
            type="text"
            value={values.corigen}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.corigen && Boolean(errors.corigen)}
            />

             {touched.corigen && Boolean(errors.corigen) && <p className={Style.errorMsg}>{errors.corigen}</p>}
             </div>
             </div>

             <div className={Style.containerRow}> 
             <div className={Style.containerInput}>            
             <Typography variant="h6"sx={{color:'var(--bg-color-dark-blue)'}} >
              Nombre del backup:
            </Typography>

            <FilledInput
            sx={{m:'1% 1%'}}
            name="dbackup"
            type="text"
            value={values.dbackup}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.dbackup && Boolean(errors.dbackup)}
            />

             {touched.dbackup && Boolean(errors.dbackup) && <p className={Style.errorMsg}>{errors.dbackup}</p>}
             </div>

             <div className={Style.containerInput}>
             <Typography variant="h6"sx={{color:'var(--bg-color-dark-blue)'}} >
             Carpeta de destino
            </Typography>

            <FilledInput
            sx={{m:'1% 1%'}}
            name="cdestino"
            type="text"
            value={values.cdestino}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.cdestino && Boolean(errors.cdestino)}
            />

             {touched.cdestino && Boolean(errors.cdestino) && <p className={Style.errorMsg}>{errors.cdestino}</p>}
             </div>
             </div>


            <div className={Style.containerBS}>
            <Button type='submit' variant="contained" color="error" sx={{m:'1%'}}>
                Exportar
            </Button>

            <Select
            defaultValue='salta'
            size="small">
                <MenuItem value="salta">Padron jujuy</MenuItem>
                <MenuItem value="san juan" >Padron C.A.B.A</MenuItem>
            </Select>
            </div>

            </div>

            </Form>
            )}

            </Formik>

        </div>
        
 </>)
}
