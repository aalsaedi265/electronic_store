import React,{useRef} from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';

import {TiDeleteOutline} from 'react-icons/ti'
import toast from 'react-hot-toast'
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';



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
      </div>
    </div>
  )
}

export default Cart