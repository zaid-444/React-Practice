
export function Navbar(props){

    if(props.orientation==='horizontal'){
        return(
        <nav className="d-flex mb-2 bg-info rounded text-dark p-4 justify-content-between align-items-center fs-5">
            <div className="d-flex justify-content-center align-items-center">
                <span className={props.logo}></span>
                <span className="fw-bold mx-2">{props.brand}</span>
            </div>
            <div>
                {
                    props.menuitems.map(item=> <span className="mx-3" key={item}>{item}</span>)
                }
            </div>
            <div>
                <span className="bi bi-heart"></span>
                <span className="bi bi-person mx-4"></span>
                <span className="bi bi-gift"></span>
            </div>
        </nav>
    )
    } else{
        return(
            <nav className={`d-flex flex-column ${props.theme} justify-content-between align-items-center p-2 border border-1 border-secondry rounded`} style={{width:'200px', height:'400px'}}>
                <div>
                    <span className={props.logo}></span>
                    <span className="fw-bold mx-2">{props.brand}</span>
                </div>
                <div>
                    {
                        props.menuitems.map(item=> <span className="my-4 btn w-100 btn-light d-block">{item}</span>)
                    }
                </div>
                <div>
                    <span className="bi bi-heart"></span>
                    <span className="bi bi-person mx-4"></span>
                    <span className="bi bi-gift"></span>
                </div>
            </nav>
        )
    }

}