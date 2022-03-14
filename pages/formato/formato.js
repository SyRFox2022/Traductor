import Bannerhero from '../../components/banner-hero';
import Style from '../../styles/formato.module.css';
import {Typography, Button} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState } from 'react';
import ListDesplegable1 from '../../components/list-desplegable-1';




export default function Formato (){
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
        };
    
    const listFormat = [
        {
            title:'dato1',
            tipo:'Entrada'
        },
        {
            title:'dato2',
            tipo:'Salida'
        },
        {
            title:'dato3',
            tipo:'Entrada'
        }
    ]

    const datosTabla = [
        {
            nombre: 'Tipo_reg',
            tipo: 'Number',
            longitud: '200',
            valor: '53453'},
        {
            nombre: 'Fecha',
            longitud: '200',
            tipo: 'Varchar',
            valor: '53453'},
        {
            nombre: 'codigo',
            longitud: '200',
            tipo: 'Varchar',
            valor: '53453'},
    ];

    return(<>
    
    <Bannerhero title='Formato de Archivos (...)'/>

    <div className={Style.containerBody}>        
    
        <div className={Style.containerDatos}>
            
            <div className={Style.containerTitle}>
            <Typography variant="h4">
             Formatos
            </Typography>
           
            <AddOutlinedIcon sx={{color:"white"}}/>
            </div>

            {listFormat.map((datos) =>{
            return(
                <ListDesplegable1 key={datos.title} datos={datos} tipo={datos.tipo} datoTablas={datosTabla} />
            )})}

        </div>
    </div>

    </>)
}