import React, {useState, createContext} from "react"


export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [count, setCount] = useState(0)
    const addItemCart = (item) => {
        setCartItems([...cartItems, item])

    }
    const removeItemCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id ))
    }


    return (
        <CartContext.Provider value={{cartItems, count, setCount, removeItemCart, cartItems, addItemCart}}>
            {children}
        </CartContext.Provider>
    )
    
}