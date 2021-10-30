import React from 'react'
import "./Item.css"

const Item = ({data}) => {
    return (
        <div className = "Item">
            <h1 className="h1-Item">{data.title}</h1>
            <img className= "img-Item" src={data.img} alt={data.id}></img>
            <h2>{data.price}</h2>
        </div>
    )
}

export default Item
