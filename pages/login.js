import {Stack, TextField, Typography, Button, InputAdornment, IconButton, FilledInput} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material';
import Style from '../styles/login.module.css'
import {useState} from 'react'

export default function Login(){
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
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
              mt:'2.5%',
              ml:'30%',
              mr:'30%',
              widht:'auto',
              height:'auto',
              backgroundColor:'white',
              mb:'2.5%'
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
            />

            <Typography variant="h6" align="left" >
                Contraseña
            </Typography>

            <FilledInput
                required
                id="contraseña"
                type={showPassword ? 'text' : 'password'}
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

            <Button variant="contained">
              Iniciar sesion
            </Button>

            <Typography variant="subtitle1" >
            ¿No tienes cuenta? Consulta a tu administrador.
            </Typography>
        </Stack>
        
        </>
    )
}