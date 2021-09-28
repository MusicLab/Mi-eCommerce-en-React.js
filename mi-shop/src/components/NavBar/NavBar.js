import React from 'react'
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget.js"


const NavBar = ({brand}) => {
    return (
        <div className= "NavBar">
            <h1>{brand}</h1>
            <ul>
                <li><a href="https://google.com">Google</a></li>
                <li><a href="https://hotmail.com">Hotmail</a></li>
            </ul>
            <div><CartWidget /></div>        
        </div>
        

    )
}

export default NavBar
