import { Stack, Typography, Button } from "@mui/material"
import FormInput from "../../../components/form-input"
import { useState, useEffect } from "react"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Style from '../../../styles/editar.module.css';

export default function Editar() {
    const [nombre, setNombre] = useState('')
    const [codigo, setCodigo] = useState('')
    const [tipo, setTipo] = useState('')
    const [estado, setState] = useState('')
    const [id, setId] = useState('')
    const [formato, setFormato] = useState('')
    const router = useRouter();
    const nombreEntidad = router.query.NAME;
    
    
    useEffect(() => {
       setNombre(nombreEntidad)
        }
    , [])
    
    return (
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
            
    <Link href='/recaudadores'>
        <a>
            <ArrowBackIcon />
        </a>
    </Link>

    <Typography variant="h2"> Editar entidad </Typography>
    
    <FormInput estado={nombre} setEstado={setNombre} text='Nombre/s' id='name' type='input' />

    <FormInput estado={codigo} setEstado={setCodigo} text='Código entidad' id='cod' type='input' />

    <FormInput estado={tipo} setEstado={setTipo} text='Tipo de archivo' id='type' type='select' datos={['Entrada y salida','Entrada']}/>

    <FormInput estado={estado} setEstado={setState} text='Estado' id='state' type='select' datos={['hola','hola2']} />

    <FormInput estado={id} setEstado={setId} text='Id del progama' id='idp' type='input' />


    <div className={Style.containerBoton}>
    <Button sx={{width:"30%"}} variant="contained" > Editar entidad</Button>
    </div>

    

    </Stack>
    )
}
