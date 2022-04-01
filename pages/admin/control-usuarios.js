import Style from '../../styles/control.module.css'
import Bannerhero from '../../components/banner-hero';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Table, TableBody, TableCell, TableRow, IconButton, Modal, Box, Button, Typography } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';
import Loading from '../../components/loading';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



export default function Control(){

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

const [data, setData] = useState([]);
const [open, setOpen] = useState(false);
const [id , setId] = useState('');
const [actualizarecaudador, setActualizaRecaudador] = useState(false);
const APIURL = process.env.NEXT_PUBLIC_REACT_URL_API;

const handleOpen = (IdUser) => {
  setId(IdUser);
  setOpen(true);
}
const handleClose = () => setOpen(false);

const FetchData = async () => {
  fetch(`${APIURL}/usuarios`)
  .then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(res => {
    setData(res)
  })

}
const HandleClickDelete = (idUser) => {
       
  fetch(process.env.NEXT_PUBLIC_REACT_URL_API +'/usuarios/'+ idUser, {
     method: 'DELETE',
 })
     .then(res => res.text()) // or res.json()
     .then(res => {
        setOpen(false);
        setActualizaRecaudador(!actualizarecaudador);
     })    
     .catch(error => console.log(error));
     };

    useEffect(() => {
      
        FetchData();

    }, [actualizarecaudador]);

    const [loading, setLoading] = useState(true);



    return(<>
   {/* {loading ? <Loading/> : <> */}

    <Bannerhero title="Control de Usuarios" />

    <div className={Style.containerBody}>
    
    <div className={Style.bodyRight}>

    <div className={Style.containerTitle}>

            <Link href='../' passHref>
                <ArrowBackIcon sx={{'&:hover':{cursor:'pointer'}, color:'var(--color-black)'}} /> 
            </Link>

            <Link href='usuario/crear-usuarios' passHref>
                <AddOutlinedIcon sx={{'&:hover':{cursor:'pointer'},color:"var(--color-black)"}}/>
            </Link>
            </div>

    <Table>
          <TableRow>
            <TableCell sx={{fontWeight:"bold"}}>Nombre</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Apellido/s</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Correo</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Tipo de Usuario</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Estado</TableCell>
            <TableCell> <SettingsIcon/> </TableCell>
          </TableRow>
    
        {data.map((archivo) => {
        return (
        <TableBody key={archivo.Id}>
            <TableRow>
                <TableCell> {archivo.FirstName} </TableCell>
                <TableCell> {archivo.LastName} </TableCell>
                <TableCell> {archivo.Mail} </TableCell>
                <TableCell> {archivo.Role} </TableCell>
                <TableCell> {archivo.Status} </TableCell>
                <TableCell>
                  <Link  href={`/admin/usuario/editar/${archivo.Id}`} passHref>
                    <IconButton edge="end">
                        <CreateOutlinedIcon sx={{color:"blue"}}/>
                    </IconButton>
                    </Link>
                    <IconButton edge="end">
                        <DeleteOutlineOutlinedIcon sx={{color:"red"}} onClick={()=>handleOpen(archivo.Id) }/>
                    </IconButton>
                </TableCell>
            </TableRow>
        </TableBody>
            )
        })}
      </Table>
      <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={boxModal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            ¿Está seguro de eliminar ?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Una vez eliminado no podrá recuperar los datos.
            </Typography>

            <div className={Style.modalButton}>
            <Button  color="error" variant="contained" onClick={()=>HandleClickDelete(id)}>
            Eliminar
            </Button>
            </div>
                        
            </Box>
      </Modal>

      </div>
        
    </div>

   {/*  </>} */}
    </>)
}