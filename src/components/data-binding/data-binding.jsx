import { useState } from "react"


export function DataBinding(){
    const [price] = useState(65);
    var username = "John"
    return(
        <div>
            <h1>Data Binding</h1>
            <p>Hello! {username}</p>
            <input type="text" value={username} />
            <p>Price = {price}</p>
        </div>
    )
}