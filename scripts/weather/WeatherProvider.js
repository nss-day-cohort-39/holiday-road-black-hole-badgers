import settings from "../../Settings.js"
// import { useParks } from "../parks/ParkProvider.js"


// const eventHub = document.querySelector(".container")
//empty array that stores the weather, must be defined to store the data
let weather = []

// Allow other modules to get a copy of the weather data


export const useWeather = () => {
   return weather.slice()
}

// let currentZip = ""

// eventHub.addEventListener("parkChosen", event => {
//     const allParks = useParks()
//     const thePark = event.detail.park
//     const chosenPark = allParks.find(
//         (currentPark) => {
//             if (currentPark.name === thePark) {
//                 return currentPark
//             }
//         }
//     )
//     currentZip = chosenPark.addresses[0].postalCode
//     console.log(currentZip)
// }
//     )
    
    
    // Get weather data state from API
    
    export const getWeather = (parkObject) => {
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${parkObject.addresses[0].postalCode},us&units=imperial&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(
            parsedWeather => {
                weather = parsedWeather.list
                
            }
            )
        }
        
        
        