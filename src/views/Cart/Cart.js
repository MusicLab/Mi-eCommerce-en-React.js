import "./Cart.css"
import React, {useContext} from 'react'
import { CartContext } from '../../CartContext'
import Item from "../../components/Item/Item"
import FormCompra from "../../components/FormCompra/FormCompra"
import {Button} from "react-bootstrap"





const Cart = () => {
    const {borrarTodo, cartItems, removeItemCart, sumarCart} = useContext(CartContext)
    

    return (
        <>
            <div className = "Cart">
                {cartItems.length === 0 ? <Button className= "btn btn-danger">No hay items en el carrito</Button> 
                : <>{cartItems.map( (item) => {   
                    return(
                        <div className= "cart-div" key={item.id}>
                            <Item data={item}/>
                            <div className= "cart-control">
                                <h2>{item.count}</h2>
                                <Button className="btn btn-warning btn-sm" onClick= {()=> removeItemCart(item.id)}>Remover Items</Button>
                            </div>
                        </div>
                        )  
                })}</>}
                
                {cartItems.length > 1 ? <Button class="btn btn-danger" onClick= {() => borrarTodo()}>Vaciar el carrito</Button> : <></>}
                <h1>$ Total : {sumarCart(cartItems)} </h1>
            </div>
        { cartItems.length >= 1 && <FormCompra/> }
        </>
    )
}

export default Cart
