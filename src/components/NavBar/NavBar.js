import React, {useContext} from 'react'
import {CartContext} from "../../CartContext"
import "./NavBar.css"
import {Link} from "react-router-dom"
import imgHandShake from "../../assets/favicon.jpg"
import imgCart from "../../assets/cart.PNG"



const NavBar = () => {
    const {cartItems} = useContext(CartContext)
    return (
        <nav className= "NavBar">
            <Link className= "Link" to= "/"><img className= "img-NavBar" src={imgHandShake} alt="futuro gif"></img></Link>
            <ul>
                <Link className= "Link" to= "/">Home</Link>
                <Link className= "Link" to= "/contact">Contact</Link>
            </ul>
            <div>
                <ul>
                    <Link className= "Link" to= "/category/consolas"><strong>Consolas</strong></Link>
                    <Link className= "Link" to= "/category/juegos"><strong>Juegos</strong></Link>
                    <Link className= "Link" to= "/category/portatiles"><strong>Portatiles</strong></Link>
                    <Link className= "Link" to= "/category/accesorios"><strong>Accesorios</strong></Link>
                </ul>
            </div>
            <div className= "CartWidget">
                {cartItems.length > 0 && <p className= "p-navbar">{cartItems.length}</p>}
                <Link className= "Link" to= "/cart"><img className= "img-NavBar-cart" src={imgCart} alt="cart"/></Link>
            </div>
                  
        </nav>
        

    )
}

export default NavBar
