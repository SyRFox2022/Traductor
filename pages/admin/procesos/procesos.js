import Style from '../../../styles/procesos.module.css';
import Bannerhero from '../../../components/banner-hero';
import { Typography, Button, Link } from '@mui/material';

export default function Procesos(){
    return( <>
        <Bannerhero title="Procesos"/>
        <div className={Style.containerBody}>
            
            <div className={Style.containerPadrones}>
                <Typography>Hola</Typography>

                <Link href='/admin/procesos/padrones' passHref>
                <Button variant="contained" color="primary">
                    Padrones
                </Button>
                </Link>

            </div>
        </div>
        </>)
}
