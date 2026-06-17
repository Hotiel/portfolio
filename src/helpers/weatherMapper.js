import { BsCloudMoon, BsCloudSnow  } from "react-icons/bs";
import { TiWarningOutline, TiWeatherStormy, TiWeatherShower, TiWeatherPartlySunny, TiWeatherSunny, TiWeatherNight, TiWeatherCloudy } from "react-icons/ti"

// export async function weatherMapper(weather) {
//     try {
//         let icon = null;
//         const is_day = await weather.is_day;
//         const weather_code = await weather.weather_code;

//         if(is_day === 0 && weather_code === 0){return(<TiWarningOutline/>)} //Nohce des
//         if(is_day === 1 && weather_code === 0){return(icon = <TiWeatherSunny/>)} // Dia des
//         if (is_day === 1 && [1,2].includes(weather_code)){return(icon = <TiWeatherPartlySunny/>)} // Dia par des
//         if(is_day === 0 && [1,2].includes(weather_code)){return(icon = <BsCloudMoon/>)} //  Noche par des

//         if([2, 3, 45, 48].includes(weather_code)){return (icon = <TiWeatherCloudy/>)} //nublado

//         if([51, 53, 55, 56, 61, 63, 65, 66, 80, 81, 82].includes(weather_code)){return (icon = <TiWeatherShower/>)} //lluvia
//         if([57, 67, 71, 73, 75, 77, 85, 86].includes(weather_code)){return (icon = <BsCloudSnow/>)} //nieve
//         if(weather_code >= 95){return (icon = <TiWeatherStormy/>)} // tormenta
//         else{return (icon = <TiWarningOutline/>)}  //error
//     }catch(error){console.error(error)}
    
// }

export function weatherMapper(weather) {

    const { is_day, weather_code } = weather;

    if (weather_code >= 95) {
        return TiWeatherStormy;
    }

    if ([57,67,71,73,75,77,85,86].includes(weather_code)) {
        return BsCloudSnow;
    }

    if ([51,53,55,56,61,63,65,66,80,81,82].includes(weather_code)) {
        return TiWeatherShower;
    }

    if ([3,45,48].includes(weather_code)) {
        return TiWeatherCloudy;
    }

    if (is_day === 1 && [1,2].includes(weather_code)) {
        return TiWeatherPartlySunny;
    }

    if (is_day === 0 && [1,2].includes(weather_code)) {
        return BsCloudMoon;
    }

    if (is_day === 1 && weather_code === 0) {
        return TiWeatherSunny;
    }

    if (is_day === 0 && weather_code === 0) {
        return TiWeatherNight;
    }

    return TiWarningOutline;
}