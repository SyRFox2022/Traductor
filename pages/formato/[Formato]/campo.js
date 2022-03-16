import Bannerhero from '../../../components/banner-hero';
import Style from '../../../styles/formato.module.css';
import {Typography, Button} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useState } from 'react';
import ListDesplegable2 from '../../../components/list-desplegable-2';
import Link from 'next/link';


export default function Campo(){

  const [open, setOpen] = useState(false);
  const handleClick = () => {
      setOpen(!open);
      };
  
  const listFormat = [
      {
          title: 'Cabecera',
      },
      {
          title:'Detalles',
      },
      {
          title:'Pie',
      }
  ]

  const datosTabla = [
      {
          nombre: 'Tipo_reg',
          tipo: 'Number',
          longitud: '200',
          tipo:'Varchar',
          desde: '2',
          hasta: '8'},
      {
          nombre: 'Fecha',
          longitud: '200',
          tipo: 'Number',
          desde: '2',
          hasta: '8'},
      {
          nombre: 'codigo',
          longitud: '200',
          tipo: 'Varchar',
          desde: '2',
          hasta: '8'},
  ];

  return(<>
  
  <Bannerhero title='Formato de Campos (...)'/>

  <div className={Style.containerBody}>        
  
      <div className={Style.containerDatos}>
          
          <div className={Style.containerTitle}>
          <Link href='../formato' passHref>
                <ArrowBackIcon sx={{'&:hover':{cursor:'pointer'}}} /> 
          </Link>
         
          <AddOutlinedIcon sx={{color:"white"}}/>
          </div>

          {listFormat.map((datos) =>{
          return(
              <ListDesplegable2 key={datos.title} datos={datos} datoTablas={datosTabla} />
          )})}

              <Button sx={{mt:'1%'}}>
                  Guardar
                  <SaveOutlinedIcon />
              </Button>

      </div>
  </div>

  </>)
}