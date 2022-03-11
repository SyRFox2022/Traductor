import Bannerhero from '../../components/banner-hero';
import Style from '../../styles/formato.module.css';
import {Typography} from '@mui/material';

export default function Formato (){

    return(<>
    
    <Bannerhero title='Formato de Archivos (...)'/>

    <div className={Style.containerBody}>        
        <div className={Style.containerDatos}>

            <Typography variant="h3">Formatos</Typography>

        </div>
    </div>

    </>)
}