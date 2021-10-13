import React from 'react'
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget.js"


const NavBar = ({brand}) => {
    return (
        <nav className= "NavBar">
            <h1>{brand}</h1>
            <ul>
                <li>Google</li>
                <li>Hotmail</li>
            </ul>
            <div><CartWidget /></div>        
        </nav>
        

    )
}

export default NavBar
