import { useEffect, useState } from "react"
import {motion} from "framer-motion"


export function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
    return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    })
    return(
        <div className="clockcontainer">
            <div className="clock">
                {formattedTime}
            </div>
            <p></p>
        </div>
    )
}