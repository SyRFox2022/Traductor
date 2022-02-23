import {Stack, TextField, Typography, Button, InputAdornment, IconButton, FilledInput} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material';
import Style from '../../styles/login.module.css'
import {useState} from 'react'
import { useRouter } from 'next/router'
import FormInput from '../../components/form-input'

export default function CrearUsuarios(){
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const handleSubmit = () => {
   router.push('/')
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

            <FormInput text='Nombre/s' id='name' type='input' Type='input'/>

            <FormInput text='Apellido/s' id='lastname' type='input'/>

            <FormInput text='Correo' id='email' type='input'/>

            <FormInput text='Nombre/s' id='name' type='select'/>

            <FormInput text='Contraseña' id='name' type='password'/>

            <FormInput text='Confirme la contraseña' id='name' type='password'/>

             
           

            </div>

            <Button variant="contained" onClick={handleSubmit} >
              Registrar
            </Button>
        </Stack>
        
        </>
    )
}