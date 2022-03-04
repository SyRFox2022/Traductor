import Bannerhero from '../components/banner-hero';
import LogoCustom from '../components/logo';
import Style from '../styles/index.module.css';
import {Typography, Stack } from '@mui/material';

export default function Home() {
 


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
      <Typography variant="h4" sx={{pt:"0.5rem"}}>Accesos rapidos</Typography>
      
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
