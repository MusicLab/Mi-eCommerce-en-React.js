import React from 'react'
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget.js"
import {Link} from "react-router-dom"


const NavBar = ({brand}) => {
    return (
        <nav className= "NavBar">
            <h1>{brand}</h1>
            <ul>
                <Link className= "Link" to= "/">Home</Link>
                <Link className= "Link" to= "/contact">Contact</Link>
            </ul>
            <div><CartWidget /></div>        
        </nav>
        

    )
}

export default NavBar
