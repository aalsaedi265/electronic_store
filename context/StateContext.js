
import React, {createContext, useContext,
                useState, useEffect} from 'react'

import { toast } from 'react-hot-toast'

const Context =createContext()

export const StateContext = ({children})=>{
    
    const [showCart,setShowCart] = useState(false)
    const [cartItem, setCartItem] = useState([])
    const [totalPrice, setTotalPrice] =useState()
    const [ totalQuantities, setTotalQuantities]= useState(0)
    const [qty, setQty] = useState(1)
    
  
    const onAdd = (product, quantity)=>{
          //checks if item is already inteh cart
        const checkInCart= cartItem.find(el => el._id === product._id)

        setTotalPrice((prevTotal) => prevTotal + product.price *quantity)
        setTotalQuantities(prevQuantities => prevQuantities + quantity )

        if(checkInCart){
        
            const cartUpdateItem= cartItem.map(el => {
                if(el._id== product._id) return{
                    ...el, quantity: el.quantity + quantity
                }
            })
            setCartItem(cartUpdateItem)
           
        }else{
            product.quantity = quantity
            setCartItem([...cartItem,{...product}])
        }
         //makes cute success messagge
         toast.success(`${qty} ${product.name} another one`)
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
            qty, totalQuantities, decQty, incQty,
            onAdd, setShowCart
        }}>

            {children}
        </Context.Provider>
    )
}

export const useStateContext= ()=> useContext(Context)