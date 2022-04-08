import {ListItemButton, ListItemText, ListItemIcon, Divider, ListItem} from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Checkbox from '@mui/material/Checkbox';
import { useState} from 'react';

export default function listRecaudador({title, checked}) {
    const [checkedList, setCheckedList] = useState(checked);
    const handleChange = () => {
        setCheckedList(!checkedList);
        localStorage.setItem('recaudadores', title);
    };

    return (
    <>
    <ListItemButton>

       
        <Checkbox
            checked={checkedList}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />

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