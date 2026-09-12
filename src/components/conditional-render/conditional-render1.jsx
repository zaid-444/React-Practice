import { useState } from "react"


export function ConditionalRender1(){

    const [isSignedIn, setIsSignedIn] = useState(false);

    function handleSignIn(){
        setIsSignedIn(true);
    }

    function handleSignout(){
        setIsSignedIn(false);
    }


    return(
        <div className="container-fluid p-2">
            <header className="d-flex border border-2 border-secondary justify-content-between align-items-center p-4">
                <div>
                    <span className="bi bi-amazon">Amazon</span>
                </div>
                <div>
                    {
                        (isSignedIn===true)
                        ?
                        <div>
                            <span className="badge fs-5 bg-danger text-white rounded rounded-circle">
                                <span className="bi bi-person"></span>
                            </span>
                            <button onClick={handleSignout} className="btn btn-link">Signout</button>
                        </div>
                        :
                        <div className="input-group">
                        <input className="form-control" type="text" placeholder="User Name" />
                        <button onClick={handleSignIn} className="btn btn-danger"> Signin</button>
                        </div>
                    }
                </div>
            </header>
        </div>
    )
}