
import { Alert, AlertTitle, Collapse } from "@mui/material";
import {useState} from 'react'
import Style from '../../styles/alert.module.css'

export default function Alerta({tipo,mensaje}){
const [open, setOpen] = useState(true);

const handleClose = () => {
        setOpen(false);
};

    if (tipo === "error"){
        return(
            <div className={Style.containerAlert}>
            <Alert 
            severity="error"
            sx={{ 
                backgroundColor: '#F08182',
                width: '100%',
                mr: '2%',
                textAlign: 'left',
                color: 'black' }}>
                      
                <AlertTitle>Error</AlertTitle>
                {mensaje}
            </Alert>
            </div>
        )
    }

    if (tipo === "success"){
        return(

            <div className={Style.containerAlert}>
            <Alert 
            severity="success"
            sx={{ 
                backgroundColor: '#97F18E',
                width: '100%',
                mr: '2%',
                textAlign: 'left' }}>

                <AlertTitle>Success</AlertTitle>
                {mensaje}
                
            </Alert>
            </div>
        )
    }
    
}