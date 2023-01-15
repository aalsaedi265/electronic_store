import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import  {BsBagCheckFill}  from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useStateContext } from '../context/StateContext';

import { runWirlPool } from '../lib/utils';


 function success(){

    const { setTotalPrice, setTotalQuantities, setCartItem } = useStateContext();
    const [order, setOrder] =useState(null)

    useEffect(()=>{
        localStorage.clear()
        setCartItem([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runWirlPool()
    },[])

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'><BsBagCheckFill/></p>
            <h2>We Got It</h2>
            <p className='email-msg'>Receipt sent to Email</p>
            <p className='description'>
                Questions? Email:
                <a className='email' href='mailto:order@example.com'> 
                order@example.com
                </a>
            </p>
            <Link href= "/">
                <button
                type='button'
                className='btn'
                width='330px'
                >
                    Home
                </button>
            </Link>
        </div>
    </div>
  )
}

export default success
