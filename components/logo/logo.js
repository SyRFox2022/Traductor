import {Typography, Stack } from '@mui/material';
import Style from './logo.module.css'

export default function LogoCustom({Nombre, Logo}) {

  return (

    <Stack spacing={0} sx={{
       textAlign: 'center',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pb: '2rem',

       }} >
    <img className={Style.imgLogo} src={Logo}/>
    
    <Typography sx={{fontSize:'20px'}}>
      {Nombre}
    </Typography>
  </Stack>

  )
}