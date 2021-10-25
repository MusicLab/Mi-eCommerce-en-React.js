import React, {useContext} from 'react'
import "./ItemCount.css"
import { CartContext } from '../../CartContext'

const ItemCount = ({onAdd, initial, stock}) => {
    const {count, setCount} = useContext(CartContext)
    
    function decrementCount() {
        if (count > 0)
        {setCount(prevCount => prevCount -1)}
    }
    function incrementCount() {
        if (count < stock)
        {setCount(prevCount => prevCount +1)}
    }

    function clearState () {
        setCount(parseInt(initial))
    }
    function todos() { 

        onAdd(count)
        clearState()

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