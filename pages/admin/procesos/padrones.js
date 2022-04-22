import Style from '../../../styles/padrones.module.css';
import Bannerhero from '../../../components/banner-hero';
import ListPadrones from '../../../components/lists/list-Padrones';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Padrones(){
    const APIURL = process.env.NEXT_PUBLIC_REACT_URL_API;

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const ejemploPadron = [
        {
            name: 'Padron 1',
        },
        {
            name: 'Padron 2',
        },
    ]

    return( <>
        <Bannerhero title="Padrones"/>        

         <div className={Style.containerBody}>

        <div className={Style.containerArrow}>
         <Link href='/admin/procesos/procesos' passHref>
                <ArrowBackIcon sx={{'&:hover':{cursor:'pointer'}, color:'var(--color-black)'}} /> 
        </Link>
        </div>

            {ejemploPadron.map((dato) =>{
                return(
                  <ListPadrones key={dato.name} dato={dato}/>
                        
            )})}

        </div>
        </>)
}