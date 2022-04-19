import '../styles/globals.css'
import Layout from '../layouts/layout-basic'
import Login from './login.js'
import {useEffect, useState} from 'react'

function MyApp({ Component, pageProps }) {
  const [server,setServer] = useState(true)
  useEffect(() => {
    setServer(false)
  }, [])
  
return(<>
  {// mientras se carga el servidor se muestra el login y
  // cuando se carga el servidor se muestra el y
  // si no esta logueado se muestra el login y si esta logueado se muestra el componente correspondiente
  server == true ? <Login/> : localStorage.getItem('auth') ?  
      <Layout>
       <Component {...pageProps} />
      </Layout>
      : 
     <Login/>
     }
  
  </>
   
   )}


export default MyApp
