import Bannerhero from '../components/banner-hero';
import LogoCustom from '../components/logo';
import Style from '../styles/index.module.css';
import {Typography, Stack } from '@mui/material';
import {useEffect} from 'react';


export default function Home() {
 
useEffect(() => {
  const IDrol = localStorage.getItem('idRol');
  console.log(localStorage.getItem('role'));
  console.log("idrol",IDrol);
  console.log("localstorage",localStorage.getItem('idRol'));
  fetch(process.env.NEXT_PUBLIC_REACT_URL_API+'/roles/'+ IDrol)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    localStorage.setItem('A_CreateRoles', data[0]?.A_CreateRoles);
    localStorage.setItem('A_CreateUsuarios', data[0]?.A_CreateUsuarios);
    localStorage.setItem('A_DeleteRoles', data[0]?.A_DeleteRoles);
    localStorage.setItem('A_DeleteUsuarios', data[0]?.A_DeleteUsuarios);
    localStorage.setItem('A_DoubleVer', data[0]?.A_DoubleVer);
    localStorage.setItem('A_EditRoles', data[0]?.A_EditRoles);
    localStorage.setItem('A_EditUsuarios', data[0]?.A_EditUsuarios);
    localStorage.setItem('A_MakeAdmin', data[0]?.A_MakeAdmin);
    localStorage.setItem('CreateArchivos', data[0]?.CreateArchivos);
    localStorage.setItem('CreateEntidades', data[0]?.CreateEntidades);
    localStorage.setItem('DeleteArchivos', data[0]?.DeleteArchivos);
    localStorage.setItem('DeleteEntidades', data[0]?.DeleteEntidades);
    localStorage.setItem('EDitEntidades', data[0]?.EDitEntidades);
    localStorage.setItem('EditArchivos', data[0]?.EditArchivos);

  }
  )
}, []);

  return (<>
    <Bannerhero title="Manejo de Archivos" />
      
    <div className={Style.containerBody} id="div2">
      <Stack spacing={2} >

        <Stack spacing={0} sx={{
          borderBottom:"1px solid var(--color-grey)",
          p:'2rem',
          }}>
          <Typography variant="h5" sx={{pb:"0.4rem"}} >Recientes</Typography>
          <Typography variant="h6" sx={{pb:"0.2rem", color: "var(--color-other-grey)"}} >Rapipago</Typography>
          <Typography variant="h6" sx={{color: "var(--color-other-grey)"}}>Pago Facil</Typography>
        </Stack>
        
        <Stack spacing={0} sx={{
          pt:'1rem',
          pl:'2rem',
          pr:'2rem'
          }}>
          <Typography variant="h5" sx={{pb:"0.4rem"}} >Archivos recientes</Typography>
          <Typography variant="overline" sx={{color: "var(--color-other-grey)"}}>D2021101501_30683032227.txt</Typography>
          <Typography variant="overline" sx={{color: "var(--color-other-grey)"}}>PP211019.815</Typography>
          <Typography variant="overline" sx={{color: "var(--color-other-grey)"}}>cob0594.191021</Typography>
        </Stack>

      </Stack>

      <div className={Style.containerRight}>
      <Typography variant="h4" sx={{pt:"2rem"}}>Accesos rapidos</Typography>
      
      <div className={Style.containerLogos}>
          <LogoCustom Nombre="PagoFacil" Logo="https://iconape.com/wp-content/files/xd/209289/svg/209289.svg" />  
          <LogoCustom Nombre="MasterCard" Logo="https://iconape.com/wp-content/files/gt/371249/svg/371249.svg" />
          <LogoCustom Nombre="Visa" Logo="https://iconape.com/wp-content/files/vr/371614/svg/371614.svg" />
          <LogoCustom Nombre="Pago Mis Cuentas" Logo="https://iconape.com/wp-content/files/il/371130/svg/371130.svg" />
         

      </div>
      </div>

    </div>
    
   

    
    </>
  )
  }
