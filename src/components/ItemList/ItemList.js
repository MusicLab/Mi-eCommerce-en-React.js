import React, {useState, useEffect} from 'react'
import "./ItemList.css"
import Item from "../Item/Item"
import { Link } from "react-router-dom"


const ItemList = ({categoria}) => {
    const [items, setItems] = useState([])
    let categoria_elegida = categoria
    console.log(categoria_elegida)
    useEffect ( ()=> {
        fetch("https://fakestoreapi.com/products/")
        .then(response => response.json())
        .then((data) => setItems(data))
    }, [])
    return (
        <div className= "ItemList">
            {items.map( (item) => {
                if (item.category == categoria_elegida) {
                    return(
                        <div key={item.id}>
                            <Link to={`/detail/${item.id}`}><Item data={item}/></Link>
                        </div>
                    )
                }
                if (categoria_elegida == null) {
                    return(
                        <div key={item.id}>
                            <Link to={`/detail/${item.id}`}><Item data={item}/></Link>
                        </div>
                    )
                }
                else {
                    console.log("carajo")
                }
                
            })}
        </div>
    )
}

export default ItemList
