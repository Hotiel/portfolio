export async function weatherData(latitude, longitude) {
    const cleanLat = parseFloat(latitude).toFixed(6);
    const cleanLon = parseFloat(longitude).toFixed(6);
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,rain,weather_code,snowfall`;
    const url2 = `https://nominatim.openstreetmap.org/reverse?lat=${cleanLat}&lon=${cleanLon}&format=json`;
    try {
        const res = await fetch(url, { method: "GET" });
        const res2 = await fetch(url2, { method: "GET" });
        const data = await res.json();
        const data2 = await res2.json();
        // console.log(data, data2);

        if (!data?.current) {
            console.error("Open-Meteo response missing current weather", data);
            return null;
        }if (!data2) {
            console.error("Acá estas errando en la revloc", data2);
            return null;
        }
        return {
            temp: data.current.temperature_2m,
            is_day: data.current.is_day,
            rain: data.current.rain,
            weather_code: data.current.weather_code,
            snowfall: data.current.snowfall,
            city: data2.address.town || locationData.address.village || data2.address.city || data2.address.state || data2.address.country,
        };
    } catch (error) {
        console.error(error);
        return null;
    }
}

//API de OpenWeatherMap: Utiliza códigos numéricos de 3 dígitos.
// 200-232: Tormentas eléctricas.
// 300-321: Lloviznas.500-531: 
// Lluvias (ej. 500 es lluvia ligera, 502 es lluvia intensa).
// 600-622: Nieve y aguanieve.
// 800: Cielo completamente despejado.
// 801-804: Nubosidad (desde parcialmente nublado hasta nublado total)