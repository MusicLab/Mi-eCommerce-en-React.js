import React from 'react'
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget.js"
import {Link} from "react-router-dom"
import imgHandShake from "../../assets/favicon.jpg"


const NavBar = ({brand}) => {
    return (
        <nav className= "NavBar">
            <div><img className= "img-NavBar" src={imgHandShake}></img></div>
            <ul>
                <Link className= "Link" to= "/">Home</Link>
                <Link className= "Link" to= "/contact">Contact</Link>
            </ul>
            <div><CartWidget /></div>        
        </nav>
        

    )
}

export default NavBar
