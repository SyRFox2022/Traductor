import Style from '../../styles/procesos.module.css';
import Bannerhero from '../../components/banner-hero';
import { Typography, Button } from '@mui/material';
import Link from 'next/link';


export default function Procesos(){
    const pruebaBotones = [
        {
            name: 'Padrones',
            url: '/admin/procesos/padrones',
        },
        {
            name: 'Configuración',
            url: '/admin/procesos/config-copia',
        },
        {
            name: 'Proceso3',
            url: ' ',
        },
        {
            name: 'Proceso4',
            url: '',
        },
        
    ]


    return( <>
        <Bannerhero title="Procesos"/>
        <div className={Style.containerBody}>
            
            <div className={Style.containerProcesos}>

                {pruebaBotones.map((dato) =>{
                return(
                    <div className={Style.containerMap} key={dato.name}>
                    <div className={Style.containerBox}></div>
                        <Link href={dato.url} passHref>
                            <Button variant="contained" color="primary" sx={{m:'1%'}}>
                                {dato.name}
                            </Button>
                        </Link>
                    </div>
                )})}

            </div>
        </div>
     </>)
}
