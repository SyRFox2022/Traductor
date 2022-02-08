import Bannerhero from '../components/banner-hero/banner-hero.js';
import LogoCustom from '../components/logo/logo.js';
import Style from '../styles/index.module.css';
import {Typography, Stack } from '@mui/material';

export default function Home() {
  return (<>
    <Bannerhero title="Manejo de Archivos" />
    <Stack sx={{mb:"0px"}}>
      
    <div className={Style.containerBody}>
      <Stack spacing={2} >

        <Stack spacing={0} sx={{
          borderBottom:"1px solid grey",
          p:'2rem',
          }}>
          <Typography variant="h5" sx={{pb:"0.4rem"}} >Recientes</Typography>
          <Typography variant="body2" sx={{pb:"0.2rem"}} >Rapipago</Typography>
          <Typography variant="body2" >Pago Facil</Typography>
        </Stack>
        
        <Stack spacing={0} sx={{
          pt:'1rem',
          pl:'2rem',
          pr:'2rem'
          }}>
          <Typography variant="h5" sx={{pb:"0.4rem"}} >Archivos recientes</Typography>
          <Typography variant="overline" >D2021101501_30683032227.txt</Typography>
          <Typography variant="overline" >PP211019.815</Typography>
          <Typography variant="overline" >cob0594.191021</Typography>
        </Stack>

      </Stack>
      <div className={Style.containerLogos}>
          
          <LogoCustom Nombre="PagoFacil" Logo="https://iconape.com/wp-content/files/xd/209289/svg/209289.svg" />  
          <LogoCustom Nombre="PagoFacil" Logo="https://iconape.com/wp-content/files/xd/209289/svg/209289.svg" />
          <LogoCustom Nombre="PagoFacil" Logo="https://iconape.com/wp-content/files/xd/209289/svg/209289.svg" />
          <LogoCustom Nombre="PagoFacil" Logo="https://iconape.com/wp-content/files/xd/209289/svg/209289.svg" />
         

      </div>

    </div>
    </Stack>
   

    
    </>
  )
  }
