import {ListItemButton, ListItemText, ListItemIcon,Divider} from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Checkbox from '@mui/material/Checkbox';
import { useState} from 'react';

export default function listRecaudador({title}) {
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
    <>
    <ListItemButton>

        <ListItemText primary={title} />

        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}/>

        <ListItemIcon sx={{}}>
            <CreateOutlinedIcon sx={{color:"blue"}}/>
        </ListItemIcon>

        <ListItemIcon>
            <DeleteOutlineOutlinedIcon sx={{color:"red"}}/>
        </ListItemIcon>

    </ListItemButton>
    <Divider/>
    </>
    )
}