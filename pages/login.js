import {Stack, TextField, Typography, Button} from '@mui/material'
import Style from '../styles/login.module.css'

export default function Login(){
    return(
        <>
        <Stack
          component="form"
          alignItems="center"
          sx={{
              p:'30px',
              borderRadius:'5px',
              border: '1px solid',
              mt:'100px',
              ml:'30%',
              mr:'30%',
              widht:'auto',
              height:'auto',
              backgroundColor:'white'
            }}
          spacing={3}
        >
            <Typography variant="h3" >
                Ingresa tu cuenta
            </Typography>
            <div class={Style.form}>
            <Typography variant="h5" >
                Email
            </Typography>
            <TextField
              variant="outlined" 
              required
              id="email"
              size='lg'
            />
            <Typography variant="h5" align="left" >
                Contraseña
            </Typography>
            <TextField
                required
                id="contraseña"
            />
            </div>
            <Button variant="contained" size="large">
              Iniciar sesion
            </Button>
            <Typography variant="subtitle1" >
            ¿No tienes cuenta? , consulta a tu administrador.
            </Typography>
        </Stack>
        
        </>
    )
}