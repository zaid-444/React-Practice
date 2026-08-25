import { useState } from "react"
import './mouse-animation.css'


export function MouseAnimation(){

    const [animationObject, setAnimationObject] = useState({animationName:'Spin', animationDuration:'3s', animationIterationCount:'infinite', animationtimingFunction:'linear'})

    function handleMouseDown(){
        setAnimationObject({animationName:'Spin', animationDuration:'1s', animationIterationCount:'infinite', animationtimingFunction:'linear'})
    }

    function handleMouseUp(){
        setAnimationObject({animationName:'Spin', animationDuration:'3s', animationIterationCount:'infinite', animationtimingFunction:'linear'})
    }
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <img onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} style={animationObject}  src="react.svg"  width="200" height="200" />
        </div>
    )
}