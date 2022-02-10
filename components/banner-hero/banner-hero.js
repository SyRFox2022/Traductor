import {Typography} from '@mui/material';
import Style from './banner-hero.module.css';


export default function Bannerhero({title}){
return(<>
<div className={Style.container}>

    <Typography variant="h3" sx={{
        color:'white',
        p:'1rem',
        fontFamily: 'inherit',
        }} >
            {title}
    </Typography>

</div>
</>
)
}