import React, {useContext, useState, useEffect} from 'react'
import axios from "axios"
import ItemCount from "../../components/ItemCount/ItemCount"
import { CartContext } from '../../CartContext'




const ItemDetail = ({match}) => {
    const [item, setItem] = useState([])
    const {addItemCart, cartItems, count, setCount} = useContext(CartContext)
    const onAdd = (countAux) => {
        setCount(countAux)
        addItemCart({
            ...item, count
        })   
    }
    //const [isInCart, setIsInCart] = useState(false)
    //const busquedaCart = (item) => {
      //  cartItems.filter(item => item2.id == item.id )

    //}
    //busquedaCart()
    
    useEffect( () => {
        axios(`https://fakestoreapi.com/products/${match.params.id}`)
        .then((res) => setItem(res.data))
        
    }, [match.params.id])
    return (
        <div className= "ItemDetail">
            { <ItemCount onAdd= {onAdd} initial= {3} stock= {11} />}
            <div className= "Item">
                <h1 className="h1-Item">{item.title}</h1>
                <img className= "img-Item" src={item.image} alt={item.title}></img>
                <h2>{item.price}</h2>
                <h2>{item.description}</h2>
                <h2>{item.category}</h2>
            </div>
        </div>
    )
}

export default ItemDetail
