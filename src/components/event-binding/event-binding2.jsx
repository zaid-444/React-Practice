import { useState } from "react"


export function EventBinding2(){

    const [userName, setUserName] = useState('Zaid')

    function handleNameChange(e){
        setUserName(e.target.value)
    }

    return(
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" value={userName} onChange={handleNameChange} /></dd>
            </dl>
            <h2>Hello ! {userName}</h2>
        </div>
    )
}