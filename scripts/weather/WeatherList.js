import { useWeather } from "./WeatherProvider.js"
import { Weather } from "./Weather.js"

const contentTarget = document.querySelector(".weather")

export const FilterWeather = () => {

    // Get the weather
    let weatherToDisplay = useWeather()

        // Filter the list of weather by selecting each day's data at 12 o'clock, results in 5 days
        weatherToDisplay = weatherToDisplay.filter(weather => {
            if (weather.dt_txt.includes("12:00:00")) {
                return true
            }
            return false
        })
    render(weatherToDisplay)
}


// Render the weather objects

export const render = weatherToRender => {
    contentTarget.innerHTML = weatherToRender.map(
        (weatherObject) => {
            return Weather(weatherObject)
        }
        ).join("")
    }
