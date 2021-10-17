import React from 'react'

const CategoryList = () => {
    const [items, setItems] = useState([])
    let categoria_elegida = categoria
    console.log(categoria_elegida)
    useEffect ( ()=> {
        fetch("https://fakestoreapi.com/products/")
        .then(response => response.json())
        .then((data) => setItems(data))
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default CategoryList
