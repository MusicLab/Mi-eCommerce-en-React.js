import React from 'react'
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList.js"


const ItemListContainer = ({greetings}) => {
    return (
        <div className= "ItemListContainer">
            <h1 className="h1-ItemListContainer">Items</h1>
            <ItemList categoria="electronics"/>        
        </div>
    )
}

export default ItemListContainer
