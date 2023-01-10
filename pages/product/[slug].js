//inside [] means this file will be dynaimc 

import React from 'react'
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import {
    AiOutlineMenus,
     AiOutlinePlus,
      AiFillStar,
       AiOutlineStar} from 'react-icons/ai'


function productDetails({product, products}) {

    const { image, name, details, price } = product;

  return (
    <div className='product-detail'>
        <div>
            <div className='detail-image'>
                <img
                src={urlFor(product.image && product.image[0])}
                />
            </div>
        </div>
        </div>
  )
}
// is isn only 8in the middle sectoin on the featured header and footer, other will get null
export const getStaticPaths= async()=>{
    const query =`*[_type =="product"]{
        slug{
            current
        }
    }`;
    const products = await client.fetch(query)
    const paths = products.map((el) => ({
        params:{
            slug: el.slug.current
        }
    }));
    return{
        paths,
        fallback: 'blocking'
    }
}


//used to indefity which speific item was lcick to get that data
export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

 
  return {
    props: { products, product }
  }
}

export default productDetails