import { useWeather, getWeather } from "./WeatherProvider.js"
import { Weather } from "./Weather.js"
import { useParks } from "../parks/ParkProvider.js"

const contentTarget = document.querySelector(".weather")
const eventHub = document.querySelector(".container")

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