import Bannerhero from '../../components/banner-hero';
import Style from '../../styles/datos.module.css';
import ListDesplegable from '../../components/list-desplegable';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router'
import PrintIcon from '@mui/icons-material/Print';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';


export default function ArchivoEsp(){
    const styles = {
        link: {
          '&:hover': {
            cursor: "pointer",
          }
        }
      };
    const router = useRouter();
    const nombreArchivo = router.query.ArchivoEsp;
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
        <ArrowBackIcon sx={{'&:hover':{cursor:'pointer'}}} />
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
                <ListDesplegable key={tipo.nombre} tipo={tipo} datoTablas={datosTabla} />
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
