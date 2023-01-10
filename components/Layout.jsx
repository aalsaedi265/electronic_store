import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>Stud Electronics</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className='main'>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
      
    </div>
  )
}

export default layout