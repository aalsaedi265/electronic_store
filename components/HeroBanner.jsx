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
                href={`/product/${heroBanner.product}`}>
                    <button type="button"> {heroBanner.buttonText}</button>                
                </Link>
                <div className='descriptoin'> 
                    <h5>You Want </h5>
                    <p>{heroBanner.desc}</p> 
                </div>
            
            </div>
    </div>
  )
}

export default HeroBanner
