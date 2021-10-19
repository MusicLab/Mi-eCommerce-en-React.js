import React, {useState, useEffect} from 'react'
import axios from "axios"
import ItemDetail2 from "../../components/ItemDetail2/ItemDetail2"
import ItemCount from "../../components/ItemCount/ItemCount"

const ItemDetail = ({match}) => {
    const [item, setItem] = useState([])
    useEffect( () => {
        axios(`https://fakestoreapi.com/products/${match.params.id}`)
        .then((res) => setItem(res.data))
    }, [match.params.id])
    return (
        <div className= "ItemDetail">
            <ItemCount initial= "1" stock= "10" />
            <ItemDetail2 data={item}/>
        </div>
    )
}

export default ItemDetail
