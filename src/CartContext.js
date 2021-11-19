import React, {useState, createContext} from "react"
// firestore
import {db} from "./firebaseconfig"
import {doc, updateDoc} from "firebase/firestore"


export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [count, setCount] = useState(1)
    const [cartCount] = useState(count)
    const addItemCart = (item) => {
        if (!isInCart(item.id)) {setCartItems([...cartItems, item]); alert(`agregaste ${count} ${item.title} al carrito`)}
        else alert("Este Item ya esta en el Carrito")

    }
    const removeItemCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id ))
    }
    const sumarCart = (cartItems) => {
        let sumaTotal = 0
        cartItems.forEach((i) => sumaTotal += i.count*i.price )
        return sumaTotal
    }
    const borrarTodo = () => {
        setCartItems(([]))
    }
    const modificarStock = () => {
        cartItems.forEach(product => {
            const refUpdate = doc(db, "products", product.id)
            const difStock = product.stock - product.count
            updateDoc(refUpdate, {
                stock: difStock
            })
        })

    }

    const isInCart = (id) => {
        return cartItems.find(i => {

            return i.id === id

        })
        
    }

    const itemQuantity = () => {
        return cartItems.length
    }
    return (
        <CartContext.Provider value={{modificarStock, borrarTodo, itemQuantity, cartCount, count, setCount, sumarCart, removeItemCart, cartItems, addItemCart}}>
            {children}
        </CartContext.Provider>
    )
    
}