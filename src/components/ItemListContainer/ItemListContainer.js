import React from 'react'
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList.js"


const ItemListContainer = ({greetings}) => {
    return (
        <div className= "ItemListContainer">
            <h1>{greetings}</h1>
            <ItemList/>        
        </div>
    )
}

export default ItemListContainer
