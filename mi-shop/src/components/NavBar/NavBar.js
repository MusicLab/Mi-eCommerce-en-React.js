import React from 'react'
import img from "../../assets/cart.jpg"


const NavBar = ({brand}) => {
    return (
        <div>
            <h1>{brand}</h1>
            <img src= {img}></img>        
        </div>
    )
}

export default NavBar
