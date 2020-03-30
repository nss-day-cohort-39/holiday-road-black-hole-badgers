import settings from "../../Settings.js"
//empty array that stores the weather, must be defined to store the data
let weather = []

// Allow other modules to get a copy of the weather data


export const useWeather = () => {
   return weather.slice()
}


// Get weather data state from API

export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=94016,us&units=imperial&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(
            parsedWeather => {
                weather = parsedWeather.list

            }
        )
}


