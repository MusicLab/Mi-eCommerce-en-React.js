import React, {useState, useEffect} from 'react'
import "./ItemList.css"
import Item from "../Item/Item"
import { Link } from "react-router-dom"
//firestore
import {db} from "../../firebaseconfig"
import {collection, getDocs, query, where} from "firebase/firestore"



const ItemList = ({categoria}) => {
    const [items, setItems] = useState([]) 
    useEffect (()=> {
        const requestData = async() => {
          const products = await getDocs(collection(db, "products"))
          const docs = []
          products.forEach((document)=> {docs.push({...document.data(), id: document.id})
        })
            setItems(docs)
        }
        const requestDataWhere = async() => {
            const q = query(collection(db, "products"), where("category", "==", categoria))
            const querySnap = await getDocs(q)
            const docs = []
            querySnap.forEach((document)=> {docs.push({...document.data(), id: document.id})
          })  
          setItems(docs)
          }
        categoria ? requestDataWhere() : requestData()
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
