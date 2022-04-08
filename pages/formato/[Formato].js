import Bannerhero from '../../components/banner-hero';
import Style from '../../styles/formato.module.css';
import {Typography, Link, Button} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState, useEffect } from 'react';
import ListDesplegable1 from '../../components/lists/list-formato';
import { useRouter } from 'next/router'
import Loading from '../../components/loading';


export default function Formato (){
    const [loading, setLoading] = useState(true);
    const [datos,setDatos] = useState([{}]);
    const router = useRouter();

    async function Obtener(cod) {
        try{
        const response = await fetch(process.env.NEXT_PUBLIC_REACT_URL_API+'/recaudadores/'+cod);
        const data = await response.json();
        return data;
            }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if (router.asPath !== router.route) {
          const codRecaudadores = router.query.Formato;
          Obtener(codRecaudadores).then(data =>{
            setDatos(data);
            setLoading(false);
          });
        }
      }, [router]);

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
            id:1,
            nombre: '',
            tipo: '',
            longitud: '',
            valor: '',
            desde: '',
            
        },
        {
            id:2,
            nombre: '',
            longitud: '',
            tipo: '',
            valor: '',
            desde: '',},
        {
            id:3,
            nombre: '',
            longitud: '',
            tipo: '',
            valor: '',
            desde: '',},
    ];


     return (<>
    {loading ? <Loading/> : <>
    <Bannerhero title={`Formato de Archivos de ${datos[0].nombre}`}/>

    <div className={Style.containerBody}>        
    
        <div className={Style.containerDatos}>
            
            <div className={Style.containerTitle}>

            <Link href='../recaudadores' passHref>
                <ArrowBackIcon sx={{'&:hover':{cursor:'pointer'}, color:'white'}} /> 
          </Link>

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

    
    </>} 
    </>
    )
      
}