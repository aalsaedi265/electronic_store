
import React, {createContext, useContext,
                useState, useEffect} from 'react'

import { toast } from 'react-hot-toast'

const Context =createContext()

export const StateContext = ({children})=>{
    
    const [showCart,setShowCart] = useState(false)
    const [cartItem, setCartItem] = useState()
    const [totalPrice, setTotalPrice] =useState()
    const [ totalQuantities, setTotalQuantities]= useState()
    const [qty, setQty] = useState(1)
    
    //checks if item is already inteh cart
    const onAdd = (product, quantity)=>{
        const checkInCart= cartItem.find(el => el._id === product._id)
    }

    const incQty =()=>{
        setQty((prev) => prev+1)
    }
    const decQty =()=>{
        setQty((prev) => {
            if(prev -1 <1) return 1
            return prev-1})
    }

    return (
        <Context.Provider
        value={{
            showCart, cartItem, totalPrice,
            qty, totalQuantities, decQty, incQty
        }}>

            {children}
        </Context.Provider>
    )
}

export const useStateContext= ()=> useContext(Context)