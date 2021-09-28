import React from 'react'
import img from "../../assets/cart.jpg"
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div className= "CartWidget">
            <img src= {img} width= "60px" alt= "Cart"></img>
        </div>
    )
}

export default CartWidget