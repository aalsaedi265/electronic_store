import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'


const FooterBanner = ({FooterBanner}) => {
  return (
    <div className='footer'>
            <div className='footer-desc'>
                <div className='left'>
                    <p>{FooterBanner.discount} OFF</p>
                    <h3>{FooterBanner.largeText1}</h3>
                    <h3>{FooterBanner.largeText2}</h3>
                    <p>{FooterBanner.saleTime}</p>
                </div>
                <div className='right'>
                    <p>{FooterBanner.smallText }</p>
                    <h3>{FooterBanner.midText}</h3>
                    <p>{FooterBanner.desc}</p>
                    <Link href={`/produc/${FooterBanner.product}`}>
                        <button type='button'>{FooterBanner.buttonText}</button>
                    </Link>
                    <img
                    className='footer-img'
                    src={urlFor(FooterBanner.image)}
                    />
                </div>
        </div>    
    </div>
  )
}

export default FooterBanner