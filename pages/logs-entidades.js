import Bannerhero from '../components/banner-hero';
import Style from '../styles/padrones.module.css';
import { useState, useEffect } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import
 {  Typography,
    IconButton,
    List,
    Button,
    ListItemText,
    Divider,
    Checkbox,
    ListItem,
    Collapse,
    Pagination,
    PaginationItem
}from '@mui/material';
import { Visibility } from '@mui/icons-material';
    
    function mostrarContenido(contenido){
        var elemento= document.getElementById('contenido-archivo');
        elemento.innerHTML =contenido;
        
       }  

       
       function download() {
        var text = document.getElementById("contenido-archivo").textContent;
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', "contenido.txt");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();    
        document.body.removeChild(element);
    }
    
    
export default function Padrones (){
    const URLAPI = process.env.NEXT_PUBLIC_REACT_URL_API;
    const [nombre, setNombre] = useState('');
    const [padron, setPadron] = useState("");

    const [recaudador, setRecaudador] = useState("");
    const [recaudadores,setRecaudadores] = useState([]);
    const [datosRecaudador, setDatosRecaudadores] = useState([{}]);
    const [actualizarecaudador, setActualizaRecaudador] = useState(false);
    const [datosPadrones, setDatosPadrones] = useState([{}]);
    const [open, setOpen] = useState(false);
    const [cod , setCod] = useState('');
    const [actualizapadron, setActualizaPadron] = useState(false);
    const [loading , setLoading] = useState(false);
    const padrones = ['Padrón ARCIBA','Padrón Exentos','Padrón IIBB','Padrón Jujuy'];
    const [dataa, setData] = useState({});
    const APIURL = process.env.NEXT_PUBLIC_REACT_URL_API;

    const handleOpen = (codEnte,nombre) => {
        setCod(codEnte);
        setNombre(nombre);
        setOpen(true);
    }

    const HandleClick = () => {
        fetch(APIURL+'/padron')
        .then(res => res.json())
        .then(data => {
            setData(data)
            dataa==data;
            console.log(data)
            setOpen(!open);
        })
    }
    

    
    const handleChange = (e,title,cod) => {
        setLoading(true);

        e.target.checked ? setRecaudador(cod) : setRecaudador("");
        fetch( process.env.NEXT_PUBLIC_REACT_URL_API +'/recaudadores/'+ cod, {
        method: 'GET',
    })
        .then(res => res.json()) // or res.json()
        .then(res => {
            setDatosRecaudadores(res);
            setLoading(false);
            console.log(res);
        })    
        .catch(error => console.log(error));

    };



    useEffect(() => {

        fetch( URLAPI +'/recaudadores')
             .then(response => response.json())
             .then(data => setRecaudadores(data))
             .catch(error => console.log(error));
        }, [actualizarecaudador]);
    

    return(
    <>
    <Bannerhero title="Logs - Entidades" />
   

<div className={Style.containerBody}>

 <div className={Style.containerLeft}>        
    <List>
        <ListItem>
            <Typography variant="h4"  >Entidades</Typography > 
                       
            <IconButton edge="end" onClick={HandleClick}>
            {open ? <ExpandLess onClick={HandleClick} /> : <ExpandMore onClick={HandleClick} />}
            </IconButton>
        </ListItem>
        <ListItem>
        <br></br>
        
        <Collapse in={open} timeout="auto" unmountOnExit>            
         {recaudadores.map((title) => {
         return (
            <span key={title.codRecaudadores.toString()}>
        <ListItem>  
        <Checkbox
            checked={recaudador === title.codRecaudadores.toString() ? true : false}
            onChange={(e) => handleChange(e,title.nombre.toString(),title.codRecaudadores.toString())}
            inputProps={{ 'aria-label': 'controlled' }}
        />

        <ListItemText primary={title.nombre.toString()} />                       
        </ListItem>
            <Divider/>  
            </span>
       )})}

        </Collapse>


        </ListItem>
        <br></br>
        <Divider/>  

        <ListItem>
            <Typography variant="h4"  >Historial de Logs</Typography >
            <IconButton id="uno" edge="end" onClick={HandleClick}>
            {open ? <ExpandLess onClick={HandleClick} /> : <ExpandMore onClick={HandleClick} />}
            </IconButton>            
        </ListItem>
        <Divider/>  
         
           

        <Pagination
  count={10}
  renderItem={(item) => (
    <PaginationItem
      components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
      {...item}
    />
  )}
/>


    </List>        
 </div>
 <div className={Style.bodyRight}>   
        <Typography variant="h4" sx={{color:"var(--color-other-grey)", fontWeight: "300", textAlign:"center", verticalAlign:"top" }} >Contenido del archivo:</Typography >       
        <Button sx={{width:"12%", position:"absolute",right:20 , backgroundColor: 'var(--bg-color-other-blue)', Visibility:"hidedn"}} variant="contained" type="submit" onClick={download}  >Descargar</Button>
        
    <pre id="contenido-archivo" sx={{textAlign:"left"}} ></pre>
 </div>

</div>

</>)}





