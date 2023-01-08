import React from "react"
import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client';
import { GetServerSideProps } from "next";

const Home =()=> (
  
    <>
     <HeroBanner/>

     <div className="products-heading">
      <h2>Beset Selling Products</h2>
      <p>Speakers of many varation</p>
     </div>
     <div className="products-container">
      {['product 1', "proudc2"].map(el => el)}
     </div>
     <FooterBanner/>
    </>
)
export const GetServerSideProps= async ()=>{
  const query = '*[_type == "product "]'
  const products = await client.fetch(query)
  const bannerQuery= '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {products, bannerData}
  }
}

export default Home