import Link from 'next/link'
import React from 'react'


function HeroBanner() {
  return (
    <div className='banner-container'>
        <p className='beats'>small text</p>
        <h3>mid text</h3>
        <image src="" alt="headphones"
            className='hero-banner-image'/>
            {/* link is an h ref but in next js */}
            <div>
                <Link
                href="/Product/ID">
                    <button type="button"> button text</button>                
                </Link>
                <div className='descriptoin'> 
                    <h5>decride</h5>
                    <p>description</p>
                </div>
            </div>
    </div>
  )
}

export default HeroBanner
