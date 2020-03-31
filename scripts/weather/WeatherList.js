import { getWeather, useWeather } from "./WeatherProvider.js"
import { Weather } from "./Weather.js"

const contentTarget = document.querySelector(".weather")

export const FilterWeather = () => {

    // Get the weather
    let weatherToDisplay = useWeather()

        // Filter the list of weather
        weatherToDisplay = weatherToDisplay.filter(weather => {
            if (weather.dt_txt.includes("12:00:00")) {
                return true
            }
            return false
        })
    render(weatherToDisplay)
}


// Renders all 40 weather objects

export const render = weatherToRender => {
    contentTarget.innerHTML = weatherToRender.map(
        (weatherObject) => {
            return Weather(weatherObject)
        }
        ).join("")
    }
