import { useWeather, getWeather } from "./WeatherProvider.js"
import { Weather } from "./Weather.js"
const contentTarget = document.querySelector(".weather")
const eventHub = document.querySelector(".container")

let allParks = useWeather()

export const FilterWeather = () => {

    eventHub.addEventListener("parkChosen", event => {
        for (let park of allParks) {
          if (event.detail.park === parkObject.parkCode) {
            console.log("in the if logic")
            console.log(park.addresses)
            getWeather(park).then(() => render(useWeather()))
          }
        }
      })


// Render the weather objects

const render = weatherToRender => {
    contentTarget.innerHTML = ""
    for (let days of weatherToRender) {
        if (weather.dt_txt.includes("12:00:00")) {
            contentTarget.innerHTML += Weather(days)

        }
    }}}