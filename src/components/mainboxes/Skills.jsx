import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
import { languages } from "../../helpers/translate"

export function Skills() {

    const { lang } = useContext(LanguageContext);
    const t = languages[lang];

    return (
        
        <div className="skillscontainer">
            <h2>{t.skills.h1}</h2>
            <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Vite</li>
                <li>HTML | CSS | VanillaJS</li>
                <li>Mongo.db</li>
                <li>Python</li>
                <li>SQLite</li>
            </ul>
            <p>
                {t.skills.p}
            </p>
        </div>
    )
}