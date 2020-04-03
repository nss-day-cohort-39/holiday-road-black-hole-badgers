import { useWeather, getWeather } from "./WeatherProvider.js"
import { Weather } from "./Weather.js"
import { useParks } from "../parks/ParkProvider.js"

const contentTarget = document.querySelector(".weather")
const eventHub = document.querySelector(".container")
//FilterWeather is a function that holds the filtered weather logic within
export const FilterWeather = () => {

    // Get the weather and store it in a variable
    let weatherToDisplay = useWeather()

        // Filter the list of weather by selecting each day's data at 12 o'clock, results in 5 day forecast
       const weatherDisplayed = weatherToDisplay.filter(weather => {
            if (weather.dt_txt.includes("12:00:00")) {
                return true
            }
            return false
        })
    render(weatherDisplayed)
}

// Render the weather objects
export const render = weatherToRender => {
    contentTarget.innerHTML = weatherToRender.map(
        (weatherObject) => {
            return Weather(weatherObject)
        }
        ).join("")
    }
    // Listen for changes to the weather state
    eventHub.addEventListener("weatherStateChanged", customEvent => {
    FilterWeather()
})

// Listen for the park state to be changed, shout the zip of the chosen park to other modules
eventHub.addEventListener("parkChosen", event => {
    const allParks = useParks()
    const thePark = event.detail.park
    const chosenPark = allParks.find(
        (currentPark) => {
            if (currentPark.id === thePark) {
                return currentPark
            }
        }
    )
    let currentZip = chosenPark.addresses[0].postalCode
    const [realZip, fakeZip] = currentZip.split("-")
    getWeather(realZip)
}
)