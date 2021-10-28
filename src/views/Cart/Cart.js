import "./Cart.css"
import React, {useContext} from 'react'
import { CartContext } from '../../CartContext'
import Item from "../../components/Item/Item"





const Cart = () => {
    const {borrarTodo, cartCount, cartItems, removeItemCart} = useContext(CartContext)
    const sumarCart = (cartItems) => {
        let sumaTotal = 0
        cartItems.forEach((i) => sumaTotal += i.count*i.price )
        return sumaTotal
    }
    

    return (
        <div className = "Cart">
            {cartItems.length === 0 ? <button>no hay items</button> : <>{cartItems.map( (item) => {   
            return(
                <div className= "cart-div" key={item.id}>
                    <Item data={item}/>
                    <button onClick= {()=> removeItemCart(item.id)}>Remover Items</button>
                    <div className= "cart-control">
                        <h2>{item.count}</h2>
                    </div>
                </div>
            )  
            }  ) }</>
            }
            
            <h1>$ Total : {sumarCart(cartItems)} </h1>
            {cartItems.length > 1 ? <button onClick= {() => borrarTodo()}>Remover todos los items</button> : <></>}
            <button>Terminar Compra</button>
        </div>
    )
}

export default Cart
