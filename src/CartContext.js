import React, {useState, createContext} from "react"


export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [count, setCount] = useState(1)
    const [cartCount, setCartCount] = useState(count)
    const addItemCart = (item) => {
        if (!isInCart(item.id)) {setCartItems([...cartItems, item]); alert(`agregaste ${count} ${item.title} al carrito`)}
        else alert("Este Item ya esta en el Carrito")

    }
    const removeItemCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id ))
    }
    const borrarTodo = () => {
        setCartItems(([]))
    }
    // const incrementCartCount = (id) => {
    //     cartItems.forEach(item => {
    //         if (item.id === id) {
    //             item.count = 999
    //         }    })

    // }

    const isInCart = (id) => {
        return cartItems.find(i => {

            return i.id === id

        })
        
    }

    const itemQuantity = () => {
        return cartItems.length
    }
    return (
        <CartContext.Provider value={{borrarTodo, itemQuantity, cartCount, count, setCount, removeItemCart, cartItems, addItemCart}}>
            {children}
        </CartContext.Provider>
    )
    
}