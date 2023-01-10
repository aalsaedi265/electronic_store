import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className='navbar'>
        <p className='logo'>
            <Link href='/' >STUD Electronics</Link>
        </p>
        <button
        type='button'
        className='cart-icon'
        // onClick=""
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