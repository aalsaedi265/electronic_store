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
          <h2>TOP Seller</h2>
          <p>Techno Gadget for you, me, and ALL </p>
        </div>
        <div className="products-container">
          {products?.map(el => <Product key={el.id} product={el}/>)}
        </div>
     <FooterBanner FooterBanner={bannerData && bannerData[0]}/>
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