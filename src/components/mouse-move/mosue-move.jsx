import { useState } from "react"


export function MouseMove(){

    const [styleObj, setStyleObj] = useState({position:'fixed', top:'', left:''});

    function handleMouseMove(e){
        setStyleObj({position:'fixed', top:`${e.clientY}px`, left:`${e.clientX}px`});
    }

    return(
        <div>
            <div onMouseMove={handleMouseMove} style={{height:'1000px'}}>
                <p className="fs-2">Move mouse pointer to test</p>
            </div>
            <img src="flag.gif" style={styleObj} width="50" height="50" />
        </div>
    )
}