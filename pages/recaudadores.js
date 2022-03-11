import Bannerhero from '../components/banner-hero';
import Style from '../styles/recaudadores.module.css';
import {Typography, Box, Modal, List, Button, ListItemIcon, ListItemText, Divider, Checkbox,  ListItem , ListItemButton } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState, useEffect } from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Link from 'next/link';



export default function Recaudadores (){
    const [open, setOpen] = useState(false);
    const [cod , setCod] = useState('');
    const [actualizarecaudador, setActualizaRecaudador] = useState(false);
    const handleOpen = (codEnte) => {
        setCod(codEnte);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const boxModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'var(--color-light-gray)',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const HandleClickDelete = (id) => {
       
     fetch('http://localhost:5000/recaudadores/'+ id, {
        method: 'DELETE',
    })
        .then(res => res.text()) // or res.json()
        .then(res => {
            setActualizaRecaudador(!actualizarecaudador);
            setOpen(false);
            console.log(res);
        })    
        .catch(error => console.log(error));
        };

    const [recaudador, setRecaudador] = useState("");
    const [recaudadores,setRecaudadores] = useState([]);
    const handleChange = (e,title) => {
        e.target.checked ? setRecaudador(title) : setRecaudador("");
    };

    useEffect(() => {
    fetch('http://localhost:5000/recaudadores')
         .then(response => response.json())
         .then(data => setRecaudadores(data))
         .catch(error => console.log(error));

         
    }, [actualizarecaudador]);

    return(
    <>
    <Bannerhero title="Recaudadores" />
   

<div className={Style.containerBody} id="div2">
<div className={Style.containerLeft}>
        
    <List>
        <ListItem>
            <Typography variant="h4"  >Entes Recaudores</Typography >
            <Link href='/recaudadores/crear'>
                <a>
                    <ListItemIcon>
                        <AddOutlinedIcon sx={{color:"green"}}/>
                    </ListItemIcon>
                </a>
            </Link>
        </ListItem>
        <Divider/>
       {recaudadores.map((title) => {
         return (
            <span key={title.codRecaudadores.toString()}>
        <ListItem>  
        <Checkbox
            checked={recaudador === title.nombre.toString() ? true : false}
            onChange={(e) => handleChange(e,title.nombre.toString())}
            inputProps={{ 'aria-label': 'controlled' }}
        />

        <ListItemText primary={title.nombre.toString()} />

        <ListItemIcon >
            <Link href={`/recaudadores/editar/${title.codRecaudadores.toString()}`}>
            <ListItemButton>
                <CreateOutlinedIcon sx={{color:"blue"}}/>
            </ListItemButton>
            </Link>
            

            <ListItemButton onClick={()=> handleOpen(parseInt(title.codRecaudadores))}>
                <DeleteOutlineOutlinedIcon sx={{color:"red"}}/>
            </ListItemButton>
                
            
        </ListItemIcon>

        </ListItem>
            <Divider/>  
            </span>
       )})}
        </List>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={boxModal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            ¿Está seguro de eliminar la entidad?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Una vez eliminada no podrá recuperar los datos.
            </Typography>

            <div className={Style.modalButton}>
            <Button  onClick={()=>HandleClickDelete(cod) }>
            Eliminar
            </Button>
            </div>
                        
            </Box>
      </Modal>

       
</div>
       

<div className={Style.datosrec}>
{recaudador === "" ? 

    <div>
        <Typography variant="h4" sx={{color:"var(--color-other-grey)", fontWeight: "bold", textAlign:"center" }} >Seleccione una Entidad</Typography >  
    </div> 
: 
<>
    <table>
    <td>
        <Typography variant="h3" sx={{color:"var(--bg-color-light-blue)", pb:"0.5%", fontWeight: "bold"}} >{recaudador}</Typography >
    </td><td>
        <Typography variant="h5" sx={{textAlign:"right", pr:"30%", fontWeight: "bold"}} > Estado: Aburrida =) </Typography >
    </td>
    </table>

    <Typography variant="h6" sx={{pb:"1%"}} > Ultima fecha de procesado: </Typography >

    <table>
    <td>
        <Typography variant="h6" > Formato archivo de entrada: </Typography >
        <Typography variant="h6" > Formato archivo de salida: </Typography >
    </td><td>
        <Typography variant="h6" > Archivos totales de entrada: </Typography >
        <Typography variant="h6" sx={{pb:"1%"}} > Archivos totales de salida: </Typography >
    </td>
    </table>

    <Typography variant="h6" > Cantidad de registros: </Typography >
    <Typography variant="h6" > Cantidad de rechazos: </Typography >

    <Typography variant="h4" sx={{ pt:"2%", pb:"1%", fontWeight: "bold"}} > Acciones</Typography >

    <Typography variant="h6"  > Ver archivos de Entrada </Typography >
    <Typography variant="h6" > Ver archivos de Salida </Typography >
    </>
}
    </div>

</div>
</>
    );
}