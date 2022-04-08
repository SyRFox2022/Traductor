import Style from '../../styles/notificacion.module.css';
import Bannerhero from '../../components/banner-hero';
import Loading from '../../components/loading';
import React from 'react'
import { useState, useEffect } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { IconButton, ListItemText,  Divider, Drawer, Box, List, ListItemButton, Collapse } from '@mui/material';
import ListNotificacion from '../../components/lists/list-notificaciones';


export default function Aviso(){
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

    const ejemploNoti = [
        {
            titulo:'Creacion de la entidad Pagos Rapidos',
            nombre:'Carlos',
            fecha:'05/04/2022',
            hora:'12:00',
        },
        {
            titulo:'Creacion de nuevo formato de Archivo',
            nombre:'Matu',
            fecha:'05/04/2022',
            hora:'12:00',
        },
        {
            titulo:'Alteracion a un  Formato de Entrada',
            nombre:'Fio',
            fecha:'05/04/2022',
            hora:'12:00',
        }
    ]

    const ejemploDesc = [
        {
            accion:'Editar',
            a:'Formato de Entrada',
            de:'RapiPago',
            desc:'Realice el cambio del Formato de Archivo a pedido de la empresa',
        }
    ]
    

    return(<>
        {/*{loading ? <Loading/> :<>   </>}*/}
          <Bannerhero title="Notificaciones" />
      
        <div className={Style.containerBody}>

        {ejemploNoti.map((datos) =>{
            return(
                <ListNotificacion key={datos.titulo} subtitulo={datos} descripcion={ejemploDesc}/>
                
            )})}

        </div>

        
        </>)
}