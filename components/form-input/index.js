import React from 'react'
import { Typography, FilledInput, InputAdornment, IconButton, Select, MenuItem } from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { useState } from 'react'

export default function FormInput({text , id, type, estado, setEstado}) {
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () =>{
        setShowPassword(!showPassword)
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault()
      }
    if (type == 'input'){
    return (
        <>
            <Typography variant="h6" >
              {text}
            </Typography>

            <FilledInput
              variant="outlined" 
              value={estado}
              onChange={(e)=>setEstado(e.target.value)}
              required
              id={id}
              size='lg'
            />
        </>
    )
    } 
    else if (type == 'password'){
        return(
            <>
        <Typography variant="h6" align="left" >
                {text}
            </Typography>

            <FilledInput
                value={estado}
                onChange={(e)=>setEstado(e.target.value)}
                required
                id={id}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
            />
            </>
            )
          }
          else if (type == 'select'){
            return(
              <>
              <Typography variant="h6" align="left" >
                {text}
              </Typography>
              <Select
                  value={estado}
                  onChange={(e)=>setEstado(e.target.value)}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label={text}
                 
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              
              </>
            )
          }

    
}
