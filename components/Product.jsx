import React from 'react'
// rfce
import Link from 'next/link'
import { urlFor } from '../lib/client'
 

const Product = ({product:{image, name, slug, price, details}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='card'>
          <img
          className='tech-image'
          src={urlFor(image && image[0])}

          />
          <p className='tech-name'>{name}</p>
          <p className='tech-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product