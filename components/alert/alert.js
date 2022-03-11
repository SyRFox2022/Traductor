import React from 'react'
import { useState } from 'react';
import { Alert, AlertTitle } from "@mui/material";

export default function Alerta({tipo,mensaje}){
    
    return(<>

    <Alert variant="outlined" severity={tipo}>
    <AlertTitle>{tipo}</AlertTitle>
    {mensaje}
    </Alert>

    
    </>)


    
}