import { useState } from "react"


export function ElementState(){

    const [userName, setUserName] = useState('');
    const [msg, setMsg] = useState('');

    function handleNameBlur(){
        setUserName(userName.toUpperCase());
        setMsg('');
    }

    function handleNameChange(e){
        setUserName(e.target.value);
    }

    function handleNameFocus(){
        setMsg('Name in Block Letters');
    }

    return(
        <div className="container-fluid p-4">
            <h2>Register</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input value={userName} onBlur={handleNameBlur} onFocus={handleNameFocus} onChange={handleNameChange} type="text" placeholder="Name in Block Letters"/></dd>
                <dd>{msg}</dd>
            </dl>
        </div>
    )
}