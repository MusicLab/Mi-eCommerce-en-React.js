import React, {useState, useEffect} from 'react'

const CategoryList = () => {
    const [categoriass, setCategorias] = useState([])
    
    useEffect ( ()=> {
        fetch("https://fakestoreapi.com/products/")
        .then(response => response.json())
        .then((data) => setCategorias(data))
    
    }, [])
    let listaCategorias = []
    return (
        <div>
           {categoriass.filter( (categoria1) => {
               if (!(categoria1.category in listaCategorias)) {
                console.log("no esta")
                listaCategorias += categoria1.category

               }
           })} 
        </div>
    )
}

export default CategoryList
