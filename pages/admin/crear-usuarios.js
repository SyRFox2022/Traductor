import { Stack, Typography, Button } from '@mui/material'
import Style from '../../styles/login.module.css'
import {useState} from 'react'
import FormInput from '../../components/form-input'

export default function CrearUsuarios(){
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo]=useState('')
  const [rol, setRol] = useState('')
  const [apellido, setApellido]=useState('')
  const [contraseña1, setContraseña1] = useState('')
  const [contraseña2, setContraseña2]=useState('')
  const handleSubmit = () => {
  console.log(nombre)
  }
 

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
              widht:'auto',
              height:'auto',
              backgroundColor:'white',
            }}
          spacing={3}
        >
            <Typography variant="h3"sx={{color:'var(--bg-color-dark-blue)'}} >
                Registrar Usuario
            </Typography>

            <div className={Style.form}>

            <FormInput estado={nombre} setEstado={setNombre} text='Nombre/s' id='name' type='input' Type='input'/>

            <FormInput estado={apellido} setEstado={setApellido}  text='Apellido/s' id='lastname' type='input'/>

            <FormInput estado={correo} setEstado={setCorreo} text='Correo' id='email' type='input'/>

            <FormInput estado={rol} setEstado={setRol} text='Nombre/s' id='rol' type='select'/>

            <FormInput estado={contraseña1} setEstado={setContraseña1} text='Contraseña' id='contraseña1' type='password'/>

            <FormInput estado={contraseña2} setEstado={setContraseña2} text='Confirme la contraseña' id='contraseña2' type='password'/>

             
            </div>

            <Button variant="contained" onClick={handleSubmit} >
              Registrar
            </Button>
        </Stack>
        
        </>
    )
}