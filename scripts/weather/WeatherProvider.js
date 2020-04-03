import settings from "../../Settings.js"

// Empty array that stores the weather, must be defined to store the data
let weather = []
const eventHub = document.querySelector(".container")

// Let other modules know that the state of the weather has changed
//defining the dispatch change event for WeatherList
const dispatchStateChangeEvent = () => {
    const weatherStateChangedEvent = new CustomEvent("weatherStateChanged")

    eventHub.dispatchEvent(weatherStateChangedEvent)
}

// Allow other modules to get a copy of the weather data

export const useWeather = () => {
    return weather.slice()
 }

// Get weather data state from API, parameter is sent from the chosen park in WeatherList
export const getWeather = (zipcode) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&units=imperial&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(
            parsedWeather => {
                weather = parsedWeather.list
                
            }
        )
        .then(dispatchStateChangeEvent)
}


