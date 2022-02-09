import '../styles/globals.css'
import Layout from '../components/layout/layout'
import Login from './login.js'


function MyApp({ Component, pageProps }) {
  const isLogged = true
  
  if (isLogged === true ) {
    return(
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )}
 else {
   return(
  <Login/>
  )}
}

export default MyApp
