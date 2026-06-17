import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
import { languages } from "../../helpers/translate"



export function Hero() {

    const { lang } = useContext(LanguageContext);
    const t = languages[lang];
    
    return (
        <div className="heroContainer">
            
            <div className="herotextcontainer">
                <h1>{t.hero.h1}</h1>
                <p className="texthero">{t.hero.p1}<span>Leonardo Polidori</span>{t.hero.p2}<span>{t.hero.farewell}</span></p>
            </div>
            
            <div className="heroimagecontainer">
                <img src="./leo4.png" alt="Avatar de Leonardo Polidori" />
            </div>

        </div>
    )
}