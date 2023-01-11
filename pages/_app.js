import '../styles/globals.css'
import React from 'react'
import Layout from '../components/Layout'
import { StateContext } from '../context/StateContext'

export default function App({ Component, pageProps }) {
  return (
    //data just got passed to very compoent inside of it
    <StateContext>
    <Layout>
      <Component {...pageProps}/>
    </Layout>
    </StateContext>
  )
}
