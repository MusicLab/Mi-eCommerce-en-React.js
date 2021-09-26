import React from 'react'
import "./NavBar.css"


const NavBar = ({brand}) => {
    return (
        <div>
            <h1 className= "NavBar">{brand}</h1>
            <ul>
                <li><a href="https://google.com">Google</a></li>
                <li><a href="https://hotmail.com">Hotmail</a></li>
                <li><a href="https://saracatunga.com">Saracatunga</a></li>
            </ul>        
        </div>
    )
}

export default NavBar
