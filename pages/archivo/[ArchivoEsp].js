import Bannerhero from '../../components/banner-hero/banner-hero.js';
import Style from '../../styles/datos.module.css';
import { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography, Button,  List, ListItemButton, ListItemText, Collapse, ListItem } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router'
import PrintIcon from '@mui/icons-material/Print';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function ArchivoEsp(){
    const router = useRouter();
    const nombreArchivo = router.query.ArchivoEsp;
    const [open, setOpen] = useState([true,true,true])
    const handleClickDatos = (i) => {
        if(i=='0'){
        setOpen([!open[i],open[1],open[2]])
        }
        else if (i=='1')
        {
            setOpen([open[0],!open[i],open[2]])
            }
        else{
            setOpen([open[0],open[1],!open[i]])
            }
    };
   
    let Activo = [
        {
            open:false
        },
        {
            open:true
        },
        {
            open:true
        },
        
    ]
   // const [openDatos, setOpenDatos] = useState(Activo);
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
    
    <Bannerhero title={nombreArchivo} />

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
        {tipoDatos.map((tipo,i)=>{
            return(
                <List key={tipo.nombre}>
                <ListItemButton sx={{backgroundColor:'var(--color-info-table)'}} onClick={()=> handleClickDatos(i)}>
                        <ListItemText primary={tipo.nombre} />
                        {open[i] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                    <Collapse  in={open[i]} timeout="auto" unmountOnExit>

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
