import { useState, useEffect } from "react";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { BsInfoCircle } from "react-icons/bs";
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
import { languages } from "../../helpers/translate"


export function Button() {

    const [clicks, setClicks] = useState(null);
    const [loading, setLoading] = useState(false);

    const { lang } = useContext(LanguageContext);
    const t = languages[lang];

useEffect(()=> {
    const getData = async() => {
        try{
            const loadData = await fetch (
                "https://portfolio-0d7v.onrender.com/counter", 
                {method: "GET"}
            );    
                const data = await loadData.json();
                setClicks(data.clicks);
                // console.log(data);
                // console.log(data.clicks);
        }catch (error) {
            console.error(error)
        }
    }
    getData();
}, []);


    const handleClick = async () => {
    if (loading) return;

    setLoading(true);

    try {
        const res = await fetch(
                "https://portfolio-0d7v.onrender.com/counter", 
                {method: "PATCH"}
            )
            const data = await res.json();
            setClicks(data.clicks);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    };


    return(

            <>
            {/* <div className="glass">Touch me</div> */}
            <div className="buttonBox">
            <div className="button-tooltip-icon">
                <BsInfoCircle />
                <div className="infoCard">{t.tooltip1.p}

                    <span>{t.tooltip1.span}</span>

                </div>
                
            </div>
                <h3>Counter button</h3>
                <div className="buttonCont">
                    <button onClick={handleClick} disabled={loading}>
                        {loading? `LOADING` : `CLICK ME`}
                    </button>
                    <div className="buttonCounter">{clicks === null? <p className="buttonCounter-p">Loading data</p> : <p className="buttonCounter-p">{clicks}</p>}</div>
                </div>
                
            </div>
            
            </>

    );
}