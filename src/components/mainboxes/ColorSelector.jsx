import { useContext } from "react";
import { ColorContext } from "../utils/ColorContext.jsx";
import { accentOptions } from "../../helpers/colors.js";

export function ColorSelector() {

    const {updateAccent} = useContext(ColorContext);

    return (
        <div className="colorSelector">
            {accentOptions.map(color => (
                <button
                    className="colorSelector-button"
                    key={color}
                    onClick={() => updateAccent(color)}
                    style={{backgroundColor: color}}/>
            ))}
        </div>
    )
}