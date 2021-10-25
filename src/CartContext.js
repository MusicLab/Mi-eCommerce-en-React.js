import React, {useState, createContext} from "react"


export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [count, setCount] = useState(1)
    const addItemCart = (item) => {
        if (!isInCart(item.id)) {setCartItems([...cartItems, item]); alert(`agregaste ${count} ${item.title} al carrito`)}
        else alert("Este Item ya esta en el Carrito")

    }
    const removeItemCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id ))
    }
    const isInCart = (id) => {
        return cartItems.find(i => {

            return i.id === id

        })
        
    }



    return (
        <CartContext.Provider value={{count, setCount, removeItemCart, cartItems, addItemCart}}>
            {children}
        </CartContext.Provider>
    )
    
}