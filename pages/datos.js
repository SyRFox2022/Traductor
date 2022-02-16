import Bannerhero from '../components/banner-hero/banner-hero.js';
import Style from '../styles/datos.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography, Button  } from '@mui/material';
import Link from 'next/link';
import PrintIcon from '@mui/icons-material/Print';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export default function Datos(){
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
            mensaje: 'ERROR DE SISTEMA',
            dato: '30',
            tipo: 'rechazado'},

    ];
    return(<>
    
    <Bannerhero title=" UPN21J21.ONL " />

    <div className={Style.containerBody}>
        <Link href="/archivo">
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
                        <tr>
                            <td>{dato.dato}</td>
                            <td>{dato.mensaje}</td>
                        </tr>
                    )}})}
                    
                </table>
            </div>
                  
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
