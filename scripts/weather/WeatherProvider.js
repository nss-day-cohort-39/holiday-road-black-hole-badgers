import settings from "../../Settings.js"
import { useParks } from "../parks/ParkProvider.js"

//empty array that stores the weather, must be defined to store the data
let weather = []
const eventHub = document.querySelector(".container")
// Allow other modules to get a copy of the weather data

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
    const currentZip = chosenPark.addresses[0].postalCode
})

// addresses[0].postalCode
export const useWeather = () => {
   return weather.slice()
}


// Get weather data state from API

export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${currentZip},us&units=imperial&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(
            parsedWeather => {
                weather = parsedWeather.list

            }
        )
}


