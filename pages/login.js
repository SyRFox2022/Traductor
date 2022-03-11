import {Stack, Typography, Button, InputAdornment, IconButton, FilledInput} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material';
import Style from '../styles/login.module.css'
import {useState} from 'react'
import { useRouter } from 'next/router'

export default function Login(){
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
    fetch('http://localhost:5000/usuarios/'+ email)
    .then(res => res.json())
    .catch(err => console.log(err))
    .then(data => {
      if(data.length > 0){
        router.push('/')
      }})
    
  }
 

    return(
        <>
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

            <div className={Style.form}>
            <Typography variant="h6" >
                Email
            </Typography>

            <FilledInput
              variant="outlined" 
              required
              id="email"
              size='lg'
              onChange={(e)=>{setEmail(e.target.value)}}
            />

            <Typography variant="h6" align="left" >
                Contraseña
            </Typography>

            <FilledInput
                required
                id="contraseña"
                type={showPassword ? 'text' : 'password'}
                onChange={(e)=>{setPassword(e.target.value)}}
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

            </div>

            <Button variant="contained" onClick={handleSubmit} >
              Iniciar sesion
            </Button>

            <Typography variant="subtitle1" >
            ¿No tienes cuenta? Consulta a tu administrador.
            </Typography>
        </Stack>
        
        </>
    )
}