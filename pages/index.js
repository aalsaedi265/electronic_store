import React from "react"
import { Product, FooterBanner, HeroBanner } from '../components';

export default function Home() {
  return (
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
}
