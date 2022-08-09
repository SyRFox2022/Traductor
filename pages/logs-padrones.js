
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
    const [datosPadrones, setDatosPadrones] = useState([{}]);
    const [open, setOpen] = useState(false);
    const [cod , setCod] = useState('');
    const [actualizapadron, setActualizaPadron] = useState(false);
    const [loading , setLoading] = useState(false);
    const padrones = ['Padrón ARCIBA','Padrón Exentos','Padrón IIBB','Padrón Jujuy'];
    const [dataa, setData] = useState({});
    const APIURL = process.env.NEXT_PUBLIC_REACT_URL_API;
    const [actualizarecaudador, setActualizaRecaudador] = useState(false);

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
    

    const handleChange = (e,cod) => {
        setLoading(true);
        e.target.checked ? setPadron(cod) : setPadron("");
        //cod="hola";
        fetch( process.env.NEXT_PUBLIC_REACT_URL_API +'/padron/'+ cod, {
        method: 'GET',
    })
        .then(res => res.text()) // or res.json()
        .then(res => {
            setDatosPadrones(res);
            setLoading(false);            
            mostrarContenido(res);
            console.log(res);
        })    
        .catch(error => console.log(error));

    };

    useEffect(() => {

    fetch( URLAPI +'/Logs-padrones')
         .then(response => response.json())
         .then(data => setPadrones(data))
         .catch(error => console.log(error));
    }, [actualizapadron]);


    return(
    <>
    <Bannerhero title="Logs - Padrones" />
   

<div className={Style.containerBody}>

 <div className={Style.containerLeft}>        
    <List>
        <ListItem>
            <Typography variant="h4"  >Procesados</Typography > 
                       
            <IconButton edge="end" onClick={HandleClick}>
            {open ? <ExpandLess onClick={HandleClick} /> : <ExpandMore onClick={HandleClick} />}
            </IconButton>
        </ListItem>
        <ListItem>
        <br></br>
        <div>
            {open  ? <ul >
            {padrones.map(item => {  
              return(<li key={item} sx={{color:"var(--color-other-grey)", fontWeight: "900"}}>&nbsp;&nbsp;&nbsp;&nbsp; {item}</li>)
             })}  
                 </ul>
            :null}
            </div>
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
         <Collapse in={open} timeout="auto" unmountOnExit>            
         { Array.isArray(dataa) ?   dataa.map((title) => {
            return (
            <span key={title}>
             <ListItem >  
                <Checkbox
                checked={padron === title ? true : false}
                onChange={(e) => handleChange(e,title)}
                inputProps={{ 'aria-label': 'controlled' }}
                />
              <ListItemText primary={title} />
             </ListItem > 
             <Divider/>  
            </span>
             )}) : [] }  

        </Collapse>
           

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





