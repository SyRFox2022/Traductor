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
  {server == true ? <Login/> : localStorage.getItem('auth') ?  
      <Layout>
       <Component {...pageProps} />
      </Layout>
      : 
     <Login/>
     }
  
  </>
   
   )}


export default MyApp
