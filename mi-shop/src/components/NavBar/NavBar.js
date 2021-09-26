import React from 'react'
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget.js"


const NavBar = ({brand}) => {
    return (
        <div>
            <div><h1 className= "NavBar">{brand}</h1>
            <ul>
                <li><a href="https://google.com">Google</a></li>
                <li><a href="https://hotmail.com">Hotmail</a></li>
                <li><a href="https://saracatunga.com">Saracatunga</a></li>
            </ul>
            </div>
            <div><CartWidget /></div>        
        </div>

    )
}

export default NavBar
