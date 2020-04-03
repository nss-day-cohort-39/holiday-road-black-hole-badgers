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
// 3
// Render the weather objects
export const render = (weatherToRender) => {

    //for every individual weather object return a HTML representation of  object
    contentTarget.innerHTML = weatherToRender.map(
        (weatherObject) => {
            return Weather(weatherObject)
        }
        ).join("")
    }
    
    // Listen for changes to the weather state / whenever someone changes the park the 5 day forecast
    // renders and changes based on location

    eventHub.addEventListener("weatherStateChanged", customEvent => {
    FilterWeather()
})
// 1
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
    //splits the zip on the - to remove the extra four digits from the zip
    let currentZip = chosenPark.addresses[0].postalCode
    const [realZip, fakeZip] = currentZip.split("-")
    getWeather(realZip)
}
)