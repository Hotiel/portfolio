import { createContext, useState } from "react";

export const ColorContext = createContext();

export function ColorProvider({children}) {
    const [accent, setAccent] = useState("#48c953");

    const updateAccent = (color) => {
        setAccent(color);
        document.documentElement.style.setProperty("--accent-color", color);

    };
    
    return (
        <ColorContext.Provider value={{ accent, updateAccent }}>
            {children}
        </ColorContext.Provider>
    );
}