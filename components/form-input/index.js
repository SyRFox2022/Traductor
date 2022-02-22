import React from 'react'
import {Typography, FilledInput} from '@mui/material'

export default function FormInput({Label , id}) {
    return (
        <>
            <Typography variant="h6" >
              {Label}
            </Typography>

            <FilledInput
              variant="outlined" 
              required
              id={id}
              size='lg'
            />
        </>
    )
}
