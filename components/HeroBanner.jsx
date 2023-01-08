import Link from 'next/link'
import React from 'react'
 import { urlFor } from '../lib/client'

function HeroBanner({heroBanner}) {
  return (
    <div className='banner-container'>

        <p className='beats'>{heroBanner.smallText}</p>
        
        <h3>{heroBanner.midText}</h3>
        
        <h1>{heroBanner.largeText1}</h1>
        
       

        <img 
        src={urlFor(heroBanner.image)} 
        alt="watches" 
        className="banner-image" />
          
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
