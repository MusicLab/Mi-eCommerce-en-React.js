import React, {useState, createContext} from "react"


export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const addItemCart = (item) => {
        setCartItems([...cartItems, item])

    }
    const removeItemCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id ))
    }


    return (
        <CartContext.Provider value={{removeItemCart, cartItems, addItemCart}}>
            {children}
        </CartContext.Provider>
    )
    
}