import React from "react"
import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client';


const Home =({ products, bannerData})=> (
  
    <>
    {/* banner is an array, so will fill the data in sanity then fetch in the front end
    the addtion it can be seen in sanity's ecomerece folder
    in schemas  in file banner */}
<HeroBanner 
heroBanner={bannerData.length && bannerData[0]}  
/>

       <div className="products-heading">
      <h2>Beset Selling Products</h2>
      <p>Speakers of many varation</p>
     </div>
     <div className="products-container">
      {products?.map(el => el.name)}
     </div>
     <FooterBanner/>
    </>
)
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home