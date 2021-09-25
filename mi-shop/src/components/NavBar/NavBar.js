import React from 'react'
import "./NavBar.css"
import img from "../../assets/cart.jpg"


const NavBar = ({brand}) => {
    return (
        <div>
            <h1 className= "NavBar">{brand}</h1>
            <img src= {img} width= "60px"></img>
            <ul>
                <li><a href="https://google.com">Google</a></li>
                <li><a href="https://hotmail.com">Hotmail</a></li>
                <li><a href="https://saracatunga.com">Saracatunga</a></li>
            </ul>        
        </div>
    )
}

export default NavBar
