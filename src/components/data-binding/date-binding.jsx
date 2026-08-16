import moment from "moment";
import { useEffect, useState } from "react";


export function DateBinding(){
    
    const [departure] = useState(new Date('2026-08-15 12:00:00'));

    useEffect(()=>{

    },[])

    return(
        <div>
            <h2>Departure: {moment(departure).format('dddd DD, MMMM YYYY')}</h2>
        </div>
    )
}