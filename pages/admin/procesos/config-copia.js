import Style from '../../../styles/config-padrones.module.css';
import Bannerhero from '../../../components/banner-hero';
import { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import { Button } from "@mui/material";

export default function Procesos(){
    const [open, setOpen] = useState(false);
    const [dataa, setData] = useState({});
    const APIURL = process.env.NEXT_PUBLIC_REACT_URL_API;

    const HandleClick = () => {
        fetch(APIURL+'/padron')
        .then(res => res.json())
        .then(data => {
            setData(data)
            console.log(data)
            setOpen(!open);
        })
    }

   return(<>
        <Bannerhero title="Mostrar archivos"/>

        <div className={Style.containerBody}>
        
        <Button variant="contained" color="primary" onClick={HandleClick} >
            Mostrar
        </Button>

       {open  ? <div>
       {dataa.map(item => {
           return(<p key={item}>{item}</p>)
         })}
       </div>
       :null}
        </div>
        
 </>)
}
