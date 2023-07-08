import React from 'react'
import { BsHandbag } from "react-icons/bs"
 
const CartWidget = () => {

    const cartArray = [1,2,3,5]
    //const cartArray = [1,2,3,5,5,5,5,5,5,6,9]

    const cartLength = cartArray.length

  return (
    <button className='relative'>
        <span className='absolute -bottom-2 bg-red-600 rounded-full px-1 text-xs -left-1'>{cartLength <= 9 ? cartLength : '+9'}</span>
       <BsHandbag className='text-2xl'/> 
    </button>
  )
}

export default CartWidget