import "./Cart.css"
import React, {useContext} from 'react'
import { CartContext } from '../../CartContext'
import Item from "../../components/Item/Item"
import FormCompra from "../../components/FormCompra/FormCompra"
import {Button} from "react-bootstrap"
import {NavLink} from "react-router-dom"




const Cart = () => {
    const {borrarTodo, cartItems, removeItemCart, sumarCart} = useContext(CartContext)
    

    return (
        <>
            <div className = "Cart">
                {cartItems.length === 0 ? <NavLink className= "link-cart" to= "/">No hay Items, volver a Home</NavLink> 
                : <>{cartItems.map( (item) => {   
                    return(
                        <div className= "cart-div" key={item.id}>
                            <Item data={item}/>
                            <div className= "cart-control">
                                <h3>Cantidad:{item.count}</h3>
                                <Button className="btn btn-warning btn-sm" onClick= {()=> removeItemCart(item.id)}>Remover Items</Button>
                            </div>
                        </div>
                        )  
                })}</>}
                
                {cartItems.length > 1 ? <Button className="btn btn-danger" onClick= {() => borrarTodo()}>Vaciar el carrito</Button> : <></>}
                {cartItems.length >= 1 ? <h1>$ Total : {sumarCart(cartItems)} </h1> : <></> }
            </div>
        { cartItems.length >= 1 && <FormCompra/> }
        </>
    )
}

export default Cart
