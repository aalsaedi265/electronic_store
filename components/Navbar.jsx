import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className='navbar'>
        <p className='logo'>
            <Link href='/' >JSM headPhones</Link>
        </p>
        <button
        type='button'
        className='cart-icon'
        onclick=""
        >
            <AiOutlineShopping/>
            <span className='cart-item-qty'>
                7
            </span>
        </button>
    </div>
  )
}

export default Navbar