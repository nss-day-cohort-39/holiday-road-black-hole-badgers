import { parkComponent } from "./Park.js"
import { useParks } from "./ParkProvider.js"
import { parkDialogButton } from "./ParkDetailDialog.js"
import { getWeather } from "../weather/WeatherProvider.js"

const contentTarget = document.querySelector(".itineraryParkPreview")
const eventHub = document.querySelector(".container")


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
    render(chosenPark)
})


const render = (park) => {
    contentTarget.innerHTML = parkComponent(park)
    parkDialogButton()
}

