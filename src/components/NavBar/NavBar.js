import React from 'react'
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget.js"
import {Link} from "react-router-dom"
import imgHandShake from "../../assets/favicon.jpg"


const NavBar = ({brand}) => {
    return (
        <nav className= "NavBar">
            <Link className= "Link" to= "/"><img className= "img-NavBar" src={imgHandShake} alt="futuro gif"></img></Link>
            <ul>
                <Link className= "Link" to= "/">Home</Link>
                <Link className= "Link" to= "/contact">Contact</Link>
            </ul>
            <div>
                <ul>
                    <Link className= "Link" to= "/category/men's clothing"><strong>Ropa Hombre</strong></Link>
                    <Link className= "Link" to= "/category/women's clothing"><strong>Ropa Mujer</strong></Link>
                    <Link className= "Link" to= "/category/jewelery"><strong>Joyas</strong></Link>
                    <Link className= "Link" to= "/category/electronics"><strong>Electronica</strong></Link>
                </ul>
            </div>
            <div><CartWidget /></div>        
        </nav>
        

    )
}

export default NavBar
