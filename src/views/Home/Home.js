import React from 'react'
import ItemList from "../../components/ItemList/ItemList"
import {useParams} from "react-router-dom"

const Home = () => {
    const {categoryId} = useParams()
    return (
        <div>
            <ItemList categoria= {categoryId}/>        
        </div>
    )
}

export default Home
