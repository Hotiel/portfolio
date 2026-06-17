import { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({children}) {
    const [lang, setLang] = useState("en");

    const updateLang = () => {
        if(lang === "en"){return setLang("es")};
        if(lang === "es"){return setLang("en")};
    };
    
    return (
        <LanguageContext.Provider value={{lang, updateLang}}>
            {children}
        </LanguageContext.Provider>
    );
}