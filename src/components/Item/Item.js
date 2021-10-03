import React, {useState} from 'react'
import "./Item.css"


fetch("https://jsonplaceholder.typicode.com/users/")
.then(response => response.json())
.then(json => console.log(json))

const Item = () => {
    return (
        <div className= "Item">
            <h1></h1>
        </div>
    )
}

export default Item


