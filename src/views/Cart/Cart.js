import "./Cart.css"
import React, {useContext} from 'react'
import { CartContext } from '../../CartContext'
import Item from "../../components/Item/Item"




const Cart = () => {
    const {cartItems, removeItemCart} = useContext(CartContext)
    const sumarCart = (cartItems) => {
        let sumaTotal = 0
        cartItems.forEach((i) => sumaTotal += i.count*i.price )
        return sumaTotal
    }

    return (
        <div className = "Cart">
            {cartItems.map( (item) => {   
            return(
                <div className= "cart-div" key={item.id}>
                    <Item data={item}/>
                    <button onClick= {()=> removeItemCart(item.id)}>Remover Items</button>
                    <h2>{item.count}</h2>
                </div>
            )  
            })}
            <h1>$ Total : {sumarCart(cartItems)} </h1>
        </div>
    )
}

export default Cart
