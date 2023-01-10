//inside [] means this file will be dynaimc 

import React from 'react'
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import {
    AiOutlineMinus,
     AiOutlinePlus,
      AiFillStar,
       AiOutlineStar} from 'react-icons/ai'


function productDetails({product, products}) {

    const { image, name, details, price } = product;

  return (
    <div >
        <div className="product-detail-container">
            <div>

            <div className='image-container'>
                <img
                className='product-detail-image'
                src={urlFor(product.image && product.image[0])}
                />
            </div>

            {/* <div className='small-detail-image'>
                {image?.map((item,i) =>(
                    <img
                    src={urlFor(item )}
                    className=""
                    onMouseEnter=""
                    />
                ))}
            </div> */}
            
            <div className='product-detail-desc'>
                <h1>{name}</h1>
                <div className='reviews'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>

                </div>
                <p>20</p>
                <h4>Details:</h4>
                <p>{details}</p>
                <p className='price'>${price}</p>
                
                <div className='quantity'>
                    <h3>Quantity</h3>
                    <p className='quantity-desc'>
                        <span className='minus'
                        onClick=""
                        >
                         <AiOutlineMinus/>
                        </span>
                        <span className='num'
                        onClick=""
                        >
                         0
                        </span>
                        <span className='plus'
                        onClick=""
                        >
                         <AiOutlinePlus/>
                        </span>
                    </p>
                </div>
            </div>
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