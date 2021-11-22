import React, {useContext} from 'react'
import {CartContext} from "../../CartContext"
import "./NavBar.css"
import {NavLink} from "react-router-dom"
import imgHandShake from "../../assets/favicon.jpg"
import imgCart from "../../assets/cart.PNG"



const NavBar = () => {
    const {cartItems} = useContext(CartContext)
    return (
        <nav className= "NavBar">
            <NavLink activeClassName="active" className= "Link" to= "/"><img className= "img-NavBar" src={imgHandShake} alt="futuro gif"></img></NavLink>
            <ul>
                <NavLink activeClassName="active" className= "Link" exact to= "/">Home</NavLink>
                <NavLink className= "Link" to= "/contact">Contacto</NavLink>
            </ul>
            <div>
                <ul>
                    <NavLink className= "Link" to= "/category/consolas"><strong>Consolas</strong></NavLink>
                    <NavLink className= "Link" to= "/category/juegos"><strong>Juegos</strong></NavLink>
                    <NavLink className= "Link" to= "/category/portatiles"><strong>Portatiles</strong></NavLink>
                    <NavLink className= "Link" to= "/category/accesorios"><strong>Accesorios</strong></NavLink>
                </ul>
            </div>
            <div className= "CartWidget-NavBar">
                
                <NavLink className= "Link" to= "/cart">{cartItems.length > 0 && <p className= "p-navbar">{cartItems.length}</p>}<img className= "img-NavBar-cart" src={imgCart} alt="cart"/></NavLink>
            </div>
                  
        </nav>
        

    )
}

export default NavBar
