import {ListItemButton, ListItemText, ListItemIcon, Divider, ListItem} from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Checkbox from '@mui/material/Checkbox';
import { useState} from 'react';

export default function listRecaudador({title}) {
    const [checked, setChecked] = useState(false);
    
    const [openDiv, setOpenDiv] = useState(false);
    
    const handleChange = (event) => {
        setChecked(event.target.checked);
        localStorage.setItem('recaudadores', title);
        console.log(localStorage.getItem('recaudadores'));
    };

    return (
    <>
    <ListItemButton>

       
        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}/>

        
        
        <ListItemText primary={title} />

        <ListItemIcon >
            <CreateOutlinedIcon sx={{color:"blue"}}/>
            <DeleteOutlineOutlinedIcon sx={{color:"red"}}/>
        </ListItemIcon>

    </ListItemButton>
    <Divider/>
    </>
    )
}