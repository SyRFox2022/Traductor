import Bannerhero from '../components/banner-hero/banner-hero.js';
import Style from '../styles/datos.module.css';
import { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography, Button,  List, ListItemButton, ListItemText, Collapse, ListItem } from '@mui/material';
import Link from 'next/link';
import PrintIcon from '@mui/icons-material/Print';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function Datos(){
    const [openDatos, setOpenDatos] = useState(false);
    const handleClickDatos = (id) => {
        setOpenDatos(!openDatos)
        if (typeof window === 'object') {
        console.log(document.getElementById(id))
    }
    };
   

    const datosArchivo = [
        {
            mensaje: 'Cantidad Total registros',
            dato: '1.000.000',
            tipo: 'aceptado'},
        {
            mensaje: 'Cantidad Total de registros aceptados',
            dato: '1.000',
            tipo: 'aceptado'},
        {
            mensaje: 'Cantidad Total de registros rechazados',
            dato: '1.000',
            tipo: 'aceptado'},
        {
            mensaje: 'Cantidad Total de registros pendientes',
            dato: '1.000',
            tipo: 'aceptado'},
        {
            mensaje: 'Monto total',
            dato: '1.000.000',
            tipo: 'aceptado'},
        {
            mensaje: 'AUTORIZACION INEXISTENTE O RECHAZADA',
            dato: '16',
            tipo: 'rechazado'},
        {
            mensaje: 'ERROR DE SISTEMA',
            dato: '30',
            tipo: 'rechazado'},
        {
            mensaje: 'ERROR DE SISTEMAs',
            dato: '30',
            tipo: 'rechazado'},

    ];

    const tipoDatos = [
        {
            nombre: 'Cabecera'},
        {
            nombre: 'Detalles'},
        {
            nombre: 'Pie'}

    ];

    const datosTabla = [
        {
            nombre: 'Tipo_reg',
            tipo: 'Number',
            valor: '53453'},
        {
            nombre: 'Fecha',
            tipo: 'Varchar',
            valor: '53453'},
        {
            nombre: 'codigo',
            tipo: 'Varchar',
            valor: '53453'},
    ];

    return(<>
    
    <Bannerhero title=" UPN21J21.ONL " />

    <div className={Style.containerBody}>
        <Link href="/archivo" passHref> 
        <ArrowBackIcon />
        </Link>

        <div className={Style.containerTitle}>
            <Typography variant="h5">PagoFacil</Typography>
            <Typography variant="h5">20-02-2022</Typography>
        </div>

        <div className={Style.containerInfo}>

            <div className={Style.containerInfoLeft}>
                {datosArchivo.map((dato)=>{
                    if (dato.tipo === 'aceptado'){
                return(
                <Typography sx={{pb:"3%"}}> {dato.mensaje} <strong> {dato.dato} </strong></Typography>
                )}})}
            </div>

            <div className={Style.containerInfoRight}>
                <Typography>Tipos de Rechazos</Typography>
                <table className={Style.tableDenied}>
                    
                    {datosArchivo.map((dato)=>{
                        if (dato.tipo === 'rechazado'){
                    return(
                        
                        <tr key={dato.mensaje}>
                            <td>{dato.dato}</td>
                            <td>{dato.mensaje}</td>
                        </tr>
                    )}})}
                   
                </table>
            </div>
                  
        </div>

        <div className={Style.containerDatos}>
        {tipoDatos.map((tipo)=>{
            return(
                <List key={tipo.nombre}>
                <ListItemButton sx={{backgroundColor:'var(--color-info-table)'}} onClick={()=> handleClickDatos(tipo.nombre)}>
                        <ListItemText primary={tipo.nombre} />
                        {openDatos ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                    <Collapse  in={openDatos} timeout="auto" unmountOnExit>

                            <table className={Style.tableDatos}>
                                
                            {datosTabla.map((dato)=>{
                          return( 
                            <tr key={dato.nombre}> 
                                <td className={Style.tableT}>Nombre:   <div className={Style.tableD}>{dato.nombre}</div></td>  
                                <td className={Style.tableT}>Tipo:     <div className={Style.tableD}>{dato.tipo}</div></td>  
                                <td className={Style.tableT}>Valor:    <div className={Style.tableD}>{dato.valor}</div></td>  
                            </tr>
                          )})} 
                        
                          </table>

                    </Collapse> 
            </List>
            )})}

        </div>

        <div className={Style.downloadButton}>
        <PrintIcon sx={{fontSize:"2rem"}}/>
        <Button sx={{ml:"5%"}}
        variant="contained"> Exportar
        <FileDownloadOutlinedIcon/>
        </Button></div>
           
    </div>
    
    </>)
}
