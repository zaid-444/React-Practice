import { useRef, useState } from "react"


export function DebounceDemo(){

    const [msg, setMsg] = useState(null);

    function Level1(){
        setMsg('Volume Increased: 25%');
    }

    function Level2(){
        setMsg('Volume Increased: 50%');
    }

    function Level3(){
        setMsg('Volume Increased: 75%');
    }

    function Level4(){
        setMsg('Volume Increased: 100%');
    }

    let thread = useRef(null);

    function VolumeUpClick(){
        setTimeout(Level1,1000)
        thread.current = setTimeout(Level2,2000)
        setTimeout(Level3,4000)
        setTimeout(Level4,6000)

    }

    function handleCancleClick(){
        alert('Canceled')
        clearTimeout(thread.current)
    }

    return(
        <div className="container-fluid p-4">
            <button onClick={VolumeUpClick} className="btn btn-warning bi bi-volume-up"></button>
            <button onClick={handleCancleClick} className="btn btn-danger mx-2">Cancel Level2</button>
            <p className="fs-4">{msg}</p>
        </div>
    )
}