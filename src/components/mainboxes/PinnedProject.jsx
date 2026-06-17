import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
import { languages } from "../../helpers/translate"

export function PinnedProject() {

    const { lang } = useContext(LanguageContext);
    const t = languages[lang];

    return (
        <a className="pplink" target="_blank" rel="noreferer noopener" href="https://www.nextgenrol.com.ar/">
            <div className="pinnedproject">
                <h3>{t.pinned.h1}</h3>
                <p><span>Next Gen App</span> 
                {t.pinned.p}
                </p>
            </div>
        </a>
    )
}