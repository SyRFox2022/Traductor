import Style from '../../styles/control.module.css'
import Bannerhero from '../../components/banner-hero';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Table, TableBody, TableCell, TableRow, IconButton } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';
import Loading from '../../components/loading';


export default function Control(){
const [data, setData] = useState([]);
const APIURL = process.env.NEXT_PUBLIC_REACT_URL_API
const FetchData = async () => {
  fetch(`${APIURL}/usuarios`)
  .then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(res => {
    setData(res)
    console.log(data)
  })

}

    useEffect(() => {
      
        FetchData();

    }, []);


    const [loading, setLoading] = useState(true);

    
      const listaUsers = [
          {
              nombre:'',
              apellido:'',
              mail:'',
              tipo:'',
              estado:'',
          },
          {
            nombre:'',
            apellido:'',
            mail:'',
            tipo:'',
            estado:'',
        },
      ]


    return(<>
   {/* {loading ? <Loading/> : <> */} 
    <Bannerhero title="Control de Usuarios" />

    <div className={Style.containerBody}>
    
    <div className={Style.bodyRight}>

    <Table>
          <TableRow>
            <TableCell sx={{fontWeight:"bold"}}>Nombre</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Apellido/s</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Correo</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Tipo de Usuario</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Estado</TableCell>
            <TableCell> <SettingsIcon/> </TableCell>
          </TableRow>
    
        {listaUsers.map((archivo) => {
        return (
        <TableBody key={archivo.id}>
            <TableRow>
                <TableCell> {archivo.nombre} </TableCell>
                <TableCell> {archivo.apellido} </TableCell>
                <TableCell> {archivo.mail} </TableCell>
                <TableCell> {archivo.tipo} </TableCell>
                <TableCell> {archivo.estado} </TableCell>
                <TableCell>
                    <IconButton edge="end">
                        <CreateOutlinedIcon sx={{color:"blue"}}/>
                    </IconButton>
                    <IconButton edge="end">
                        <DeleteOutlineOutlinedIcon sx={{color:"red"}}/>
                    </IconButton>
                </TableCell>
            </TableRow>
        </TableBody>
            )
        })}
      </Table>

      </div>
        
    </div>

    
    </>)
}