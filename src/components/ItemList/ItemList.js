import React, {useState, useEffect} from 'react'
import "./ItemList.css"
import Item from "../Item/Item"
import { Link } from "react-router-dom"


const ItemList = () => {
    const [items, setItems] = useState([])
    console.log(items)
    useEffect ( ()=> {
        fetch("https://fakestoreapi.com/products/")
        .then(response => response.json())
        .then((data) => setItems(data))
    }, [])
    return (
        <div className= "ItemList">
            <h1>Item List</h1>
            {items.map( (item) => {
                return(
                    <div key={item.id}>
                        <Link to={`/detail/${item.id}`}><Item data={item}/></Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList
