import React from 'react'
import "./Item.css"

const Item = ({data}) => {
    return (
        <div className = "Item">
            <h1 className="h1-Item">{data.title}</h1>
            <img className= "img-Item" src={data.img} alt={data.id}></img>
            <h3>{`$ ${data.price}`}</h3>
        </div>
    )
}

export default Item
