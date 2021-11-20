import "./Cart.css"
import React, {useContext} from 'react'
import { CartContext } from '../../CartContext'
import Item from "../../components/Item/Item"
import FormCompra from "../../components/FormCompra/FormCompra"
import {Form, Button} from "react-bootstrap"





const Cart = () => {
    const {borrarTodo, cartItems, removeItemCart, sumarCart} = useContext(CartContext)
    

    return (
        <div className = "Cart">
            {cartItems.length === 0 ? <button>no hay items</button> : <>{cartItems.map( (item) => {   
            return(
                <div className= "cart-div" key={item.id}>
                    <Item data={item}/>
                    <Button class="btn btn-warning" onClick= {()=> removeItemCart(item.id)}>Remover Items</Button>
                    <div className= "cart-control">
                        <h2>{item.count}</h2>
                    </div>
                </div>
            )  
            }  ) }</>
            }
            
            
            {cartItems.length > 1 ? <Button class="btn btn-danger" onClick= {() => borrarTodo()}>Vaciar el carrito</Button> : <></>}
            <h1>$ Total : {sumarCart(cartItems)} </h1>
            { cartItems.length >= 1 && <FormCompra/>}
        </div>
    )
}

export default Cart
