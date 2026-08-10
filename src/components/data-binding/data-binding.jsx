import { useEffect, useState } from "react"


export function DataBinding(){


    const [price, setPrice] = useState(65);
    const [name, setName] = useState('please set name')
    var username = "John"
    
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
        </div>
    )
}