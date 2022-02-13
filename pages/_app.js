import '../styles/globals.css'
import Layout from '../components/layout/layout'
import Login from './login.js'


function MyApp({ Component, pageProps }) {
  const isLogged = true
  
  if (isLogged === true && Component.name != 'Login') {
    return(
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )}
  else if (isLogged === true && Component.name === 'Login') {
    return(
      <Component {...pageProps} />
    )
  }
 else {
   return(
  <Login/>
  )}
}

export default MyApp
