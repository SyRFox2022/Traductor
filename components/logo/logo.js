import {Typography, Stack } from '@mui/material';
import Style from './logo.module.css'

export default function LogoCustom({Nombre, Logo}) {

  return (

    <Stack spacing={0} sx={{ textAlign: 'center', pb:"1rem" }} >
    <img className={Style.imgLogo} src={Logo}/>
    <Typography>
      {Nombre}
    </Typography>
  </Stack>

  )
}