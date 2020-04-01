import { useWeather, getWeather } from "./WeatherProvider.js"
import { Weather } from "./Weather.js"
import { useParks } from "../parks/ParkProvider.js"

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
            if (currentPark.name === thePark) {
                return currentPark
            }
        }
    )
    let currentZip = chosenPark.addresses[0].postalCode
    const [realZip, fakeZip] = currentZip.split("-")
    getWeather(realZip)
}
)}
