import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import { useEffect } from 'react'
import Document from './_document'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';




export default function App({ Component, pageProps }) {

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap.bundle.min");
    import('bootstrap/dist/css/bootstrap.min.css');
},[])

  return <>

  <Head />
  <Component {...pageProps} />
  </>
}
