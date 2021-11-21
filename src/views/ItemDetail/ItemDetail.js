import React, {useContext, useState, useEffect} from 'react'
import ItemCount from "../../components/ItemCount/ItemCount"
import { CartContext } from '../../CartContext'
import  "./ItemDetail.css"
// firestore
import {db} from "../../firebaseconfig"
import {collection, getDocs, query, where} from "firebase/firestore"




const ItemDetail = ({match}) => {
    const [item, setItem] = useState([])
    const {addItemCart, count, setCount} = useContext(CartContext)
    const onAdd = (countAux) => {
        
        setCount(countAux)
        addItemCart({
            ...item, count
        })   
    }

    useEffect( () => {
        const requestDataWhere = async() => {
            const q = query(collection(db, "products"), where("__name__", "==", match.params.id))
            const querySnap = await getDocs(q)
            querySnap.forEach((document)=> {setItem({...document.data(), id: document.id})
          })  
          }
        requestDataWhere()
        setCount(1)
    }, [match.params.id, setCount])
    return (
        <div className= "ItemDetail">
            <div className= "ItemCount-div">{ <ItemCount onAdd= {onAdd} initial= {1} stock= {item.stock} />}</div>
            <div className= "Item">
                <h2>{item.title}</h2>
                <img className= "img-Item" src={item.img} alt={item.title}></img>
                <h2>{item.price}</h2>
                <h4>{item.description}</h4>
            </div>
        </div>
    )
}

export default ItemDetail
