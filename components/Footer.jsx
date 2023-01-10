import React from 'react'
import { AiFillInstagram,AiOutlineTwitter } from 'react-icons/ai'


function Footer() {
  return (
    <div className='the-footer'>
        <p>2023 STUD Electronics All Rights Reserved</p>
        <p className='icon'>
            <AiFillInstagram/>
            <AiOutlineTwitter/>
        </p>
    </div>
  )
}

export default Footer