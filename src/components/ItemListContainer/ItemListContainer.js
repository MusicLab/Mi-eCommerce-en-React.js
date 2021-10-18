import React from 'react'
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList.js"
import {useParams} from "react-router-dom"


const ItemListContainer = () => {
    const {categoryId} = useParams()
    return (
        <div className= "ItemListContainer">
            <h1 className="h1-ItemListContainer">Items</h1>
            <ItemList categoria={categoryId}/>        
        </div>
    )
}

export default ItemListContainer
