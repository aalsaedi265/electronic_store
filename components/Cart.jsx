import React,{useRef} from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';

import {TiDeleteOutline} from 'react-icons/ti'
import toast from 'react-hot-toast'
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import { getItemDescriptor } from '@babel/core/lib/config/item';



function Cart() {

  const cartRef= useRef()
  const {totalPrice, totalQuantities, cartItem, setShowCart}= useStateContext()


  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button type='button'
         className='cart-heading'
         onClick={()=> setShowCart(false)}>
          <AiOutlineLeft/>
          <span className='heading' >My Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
         </button>

         {cartItem.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150}/>
            <h3>Bag is Empty</h3>
            <Link href="/">
              <button
              type="button"
              className='btn'
              onClick={()=> setShowCart(false)}
              >
                Keep on Shopping
              </button>
            </Link>
          </div>
         )}
         <div className='product-container'>
          {cartItem.length >=1 && cartItem.map((stuff,idx)=>(
            
            <div className='product' key={stuff._id}>
              <img 
              className='cart-product-image'
              src={urlFor(stuff?.image[0])}/>

                <div className='item-desc'>
                  <div className='flex top'>
                    <h5>{stuff.name}</h5>
                    <h4>
                      ${stuff.price}</h4>
                  </div>
                  <div className='flex bottom'>
                      <div>
                        <p className='quantity-desc'>
                          <span className="minus" onClick=""><AiOutlineMinus /></span>
                          <span className="num">0</span>
                          <span className="plus" onClick=""><AiOutlinePlus /></span>
                        </p>
                      </div>

                      <button type="button"
                      className='remove-item'
                      onClick=""
                      >
                        <TiDeleteOutline/>
                      </button>

                  </div>
                </div>
              </div>
          ))}
         </div>
         {cartItem.length >=1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='btn-container'>
              <button
              type='button'
              className='btn'
              onClick=""
              >
                Stripe Payment
              </button>

            </div>
          </div>
         )}
      </div>
    </div>
  )
}

export default Cart