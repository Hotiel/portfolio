import { useState, useEffect } from "react";
import { weatherData } from "../../helpers/weatherData.js";
import { weatherMapper } from "../../helpers/weatherMapper.js";
import { BsCloudMoon, BsCloudSnow, BsInfoCircle } from "react-icons/bs";
import { TiWarningOutline, TiWeatherStormy, TiWeatherShower, TiWeatherPartlySunny, TiWeatherSunny, TiWeatherNight, TiWeatherCloudy } from "react-icons/ti"
import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
import { languages } from "../../helpers/translate"

export function Weather() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [icon, setIcon] =useState(<TiWarningOutline/>)
    const { lang } = useContext(LanguageContext);
    const t = languages[lang];

    useEffect(() => {
        const getData = async (latitude, longitude) => {
            try {
                const current = await weatherData(latitude, longitude);
                // console.log(current);
                setWeather(current);
            } catch (error) {
                console.log(error);
                setError("No se pudo obtener el clima");
            }
        };

        if (!navigator.geolocation) {
            setError("Geolocalización no soportada");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                getData(latitude, longitude);
                // console.log(position)
            },
            (geoError) => {
                console.error(geoError);
                getData(-31.24, -64.47)
            },
            { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 }
        );

    }, []);

    useEffect(()=>{
        if(weather){
        setIcon(weatherMapper(weather))}
        }, [weather]);


    return (
        <>
            <div className="weather-main">
                            <div className="button-tooltip-icon">
                                <BsInfoCircle />
                                <div className="infoCard infoCard1">
                                    {t.tooltip2.p}
                                    <span>{t.tooltip2.span}</span>
                                </div>
                                
                            </div>
                <div className="weather-info">
                    <p className="w-temp">
                        {error ? error : weather ? weather.temp + "º" : "loading"}
                    </p>
                    <p className="w-city">
                        {error ? error : weather ? weather.city : "loading"}
                    </p>
                </div>
                
                <div className="weather-icon-cont">
                    {/* <TiWeatherCloudy className="weather-icon" />  */}
                    <i className="weather-icon">{icon? icon : <TiWarningOutline/>}</i>
                </div>
            </div>
        </>
    );
}

// BsCloudMoon Noche parc despejada is_day === 0 & weather_code === 2
// TiWeatherNight, Noche  despejada is_day === 0 & weather_code = 0

// TiWeatherStormy, Tormenta weather_code = 95 || 96 || 99
// TiWeatherShower, lluvia 53 || 55 || 56 || 61 || 63 || 65 || 66 || 80 || 81 || 82
// BsCloudSnow nieve 57 || 67 || 71 || 73 || 75 || 77 || 85 || 86
// TiWeatherPartlySunny, Dia parcalmente soleado is_day === 1 & weather_code === 1
// TiWeatherSunny, Dia Soleado is_day === 1 & weather_code === 0

// TiWeatherCloudy, Nublado weather_code = 2 || 3 || 45 || 48 || 51
