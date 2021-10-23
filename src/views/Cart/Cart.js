import React, {useContext} from 'react'
import { CartContext } from '../../CartContext'
import Item from "../../components/Item/Item"




const Cart = () => {
    const {cartItems, removeItemCart} = useContext(CartContext)
    console.log(cartItems)

    return (
        <div className = "Cart">
            {cartItems.map( (item) => {   
            return(
                <div key={item.id}>
                    <Item data={item}/>
                    <button onClick= {()=> removeItemCart(item.id)}>Remover Items</button>
                    <h2>{item.count}</h2>
                </div>
            )  
            })}
        </div>
    )
}

export default Cart
