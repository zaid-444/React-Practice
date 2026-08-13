import { useEffect, useState } from "react"


export function DataBinding(){


    const [price, setPrice] = useState(65);
    const [name, setName] = useState('please set name')
    var username = "John"
    
    const [products,setProducts] = useState(['TV','Mobile']);
    const [categories,setCategories] = useState(new Array('Electronics','Fashion'))


    useEffect(()=>{
        setPrice(5655);
        setName('Zaid');
    },[])

    return(
        <div>
            <h1>Data Binding</h1>
            <p>Hello! {username}</p>
            <input type="text" value={username} />
            <p>Price = {price}</p>
            <p>{name}</p>
            <hr />

            <ul>
                {
                    products.map((product)=> <li>{product}</li>)
                }
            </ul>
            <select name="" id="">
                {
                    categories.map((categorie)=> <option>{categorie}</option>)
                }
            </select>
        </div>
    )
}