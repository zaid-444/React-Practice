import { useState } from "react";
import { Login } from "../login/login"
import { RegisterDemo } from "../register/register-demo";



export function ConditionalRender(){
    const [component, setComponent] = useState(null);

    function handleLoginClick(){
        setComponent(<Login />);
    }

    function handleRegisterClick(){
        setComponent(RegisterDemo)
    }

    return(
        <div className="container-fluid p-4">
            <h2>Home</h2>
            <button className="btn btn-primary mx-2" onClick={handleLoginClick}>Login</button>
            <button onClick={handleRegisterClick} className="btn btn-secondary mx-2">Register</button>
            <hr />
            {component}
        </div>
    )
}