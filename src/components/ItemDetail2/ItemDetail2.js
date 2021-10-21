import React from 'react'
import "./ItemDetail2.css"

const ItemDetail2 = ({data}) => {
    return (
        <div className = "Item">
            <h1 className="h1-Item">{data.title}</h1>
            <img className= "img-Item" src={data.image} alt={data.title}></img>
            <h2>{data.price}</h2>
            <h2>{data.description}</h2>
            <h2>{data.category}</h2>
        </div>
    )
}

export default ItemDetail2