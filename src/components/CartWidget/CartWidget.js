import React from 'react'
import img from "../../assets/cart.PNG"
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div className= "CartWidget">
            <img src= {img} width= "90px" alt= "Cart"></img>
        </div>
    )
}

export default CartWidget
