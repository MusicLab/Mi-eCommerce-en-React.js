import React, {useState, useEffect} from 'react'
import "./ItemList.css"
import Item from "../Item/Item"
import { Link } from "react-router-dom"


const ItemList = ({categoria}) => {
    const [items, setItems] = useState([])
    useEffect ( ()=> {
        const category = categoria ? `category/${categoria}` : ''
        fetch(`https://fakestoreapi.com/products/${category}`)
        .then(response => response.json())
        .then((data) => setItems(data))
    }, [categoria])
    return (
        <div className= "ItemList">
            {items.map( (item) => {   
            return(
                <div key={item.id}>
                    <Link className= "Link"to={`/detail/${item.id}`}><Item data={item}/></Link>
                </div>
            )  
            })}
        </div>
    )
}

export default ItemList
