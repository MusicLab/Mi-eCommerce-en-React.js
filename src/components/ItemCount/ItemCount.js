import React, {useContext, useState} from 'react'
import "./ItemCount.css"
import { CartContext } from '../../CartContext'

const ItemCount = ({onAdd, initial, stock}) => {
    const {count, setCount} = useContext(CartContext)
    const [initial2] = useState(1)
    function decrementCount() {
        if (count > 0)
        {setCount(prevCount => prevCount -1)}
    }
    function incrementCount() {
        if (count < stock)
        {setCount(prevCount => prevCount +1)}
    }

    function clearState () {
        setCount(parseInt(initial2))
    }
    function todos() {
        // si no hay stock del producto en la BD no ejecuta las funciones de agregar al carro
        if (stock <= 0) {
            alert("No hay mas stock de este producto")
        } 
        else {
            onAdd(count)
            clearState()
        }
        

    }

    return (
        <div className= "ItemCount">
            <button onClick= {decrementCount}>-</button>
            <span>{count}</span>
            <button onClick= {incrementCount}>+</button>
            <div>
                <p>En Stock: <strong>{stock}</strong> items</p>
            </div>
            <button onClick= {()=> todos()}>Agregar al carrito</button>
            
        </div>
    )
}

export default ItemCount