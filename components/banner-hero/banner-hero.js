import {Typography, Box} from '@mui/material';
import Style from './banner-hero.module.css';


export default function Bannerhero({title}){
return(<>
<div className={Style.container}>

    <Typography variant="h2" sx={{
        color:'white',
        p:'1rem'
        }} >
            {title}
    </Typography>

</div>
</>
)
}