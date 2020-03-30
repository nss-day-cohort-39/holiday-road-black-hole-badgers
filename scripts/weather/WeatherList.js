import { getWeather, useWeather } from "./WeatherProvider.js"
import { Weather } from "./Weather.js"

const contentTarget = document.querySelector(".weather")

export const render = weatherToRender => {
    contentTarget.innerHTML = weatherToRender.map(
        (weatherObject) => {
            return Weather(weatherObject)
        }
        ).join("")
    }
    
export const WeatherList = () => {      
    let weatherToDisplay = useWeather()
    render(weatherToDisplay)
}