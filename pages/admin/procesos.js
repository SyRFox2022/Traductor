import Style from '../../styles/procesos.module.css';
import Bannerhero from '../../components/banner-hero';
import { Typography, Button, Link } from '@mui/material';

export default function Procesos(){
    const pruebaBotones = [
        {
            name: 'Proceso 1',
        },
        {
            name: 'Proceso 2',
        },
        {
            name: 'Proceso 3',
        },
    ]


    return( <>
        <Bannerhero title="Procesos"/>
        <div className={Style.containerBody}>
            
            <div className={Style.containerProcesos}>

            <div className={Style.containerMap}>
                <div className={Style.containerBox}></div>
                <Link href='/admin/procesos/padrones' passHref>
                <Button variant="contained" color="primary" sx={{m:'1%'}}>
                    Padrones
                </Button>
                </Link>
                </div>

                {pruebaBotones.map((dato) =>{
                return(
                    <div className={Style.containerMap} key={dato.name}>
                    <div className={Style.containerBox}></div>
                    <Button variant="contained" color="primary" disabled sx={{m:'1%'}}>
                        {dato.name}
                    </Button>
                    </div>
                )})}

            </div>
        </div>
        </>)
}
