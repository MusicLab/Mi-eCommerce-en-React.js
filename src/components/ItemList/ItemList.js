import React, {useState, useEffect} from 'react'
import "./ItemList.css"
import Item from "../Item/Item"


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
                    <div>
                        <Item data={item}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList
