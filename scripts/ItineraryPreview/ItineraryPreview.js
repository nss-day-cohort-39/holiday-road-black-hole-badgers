import { useAttractions } from "../attractions/AttractionProvider.js"
import { attractionComponent } from "../attractions/Attraction.js"
import { parkComponent } from "../parks/Park.js"
import { useParks } from "../parks/ParkProvider.js"
import { parkDialogButton } from "../parks/ParkDetailDialog.js"
import { eateryComponent } from "../eateries/Eatery.js"
import { useEatery } from "../eateries/EateryProvider.js"

const eventHub = document.querySelector(".container")

const contentTargetEatery = document.querySelector(".itineraryEateryPreview")

eventHub.addEventListener("eateryChosen", event => {
    const allEateries = useEatery()
    const theEatery = event.detail.eatery
    const chosenEatery = allEateries.find(
        (currentEatery) => {
            if (currentEatery.id === parseInt(theEatery)) {
                return currentEatery
            }
        }
    )
    eateryRender(chosenEatery)
})

const eateryRender = eatery => {
    contentTargetEatery.innerHTML = eateryComponent(eatery)
}



const contentTargetAttraction = document.querySelector(".itineraryAttractionPreview")

eventHub.addEventListener("attractionChosen", event => {
    const allAttractions = useAttractions()
    const theChosenAttraction = event.detail.attraction
    const displayedAttraction = allAttractions.find(
        (currentAttraction) => {
            if (currentAttraction.id === parseInt(theChosenAttraction)) {
                return currentAttraction
            }
        }
    )
    attractionRender(displayedAttraction)
})


const attractionRender = attraction => {
    contentTargetAttraction.innerHTML = attractionComponent(attraction)
}


const contentTargetPark = document.querySelector(".itineraryParkPreview")


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
    render(chosenPark)
})


const render = (park) => {
    contentTargetPark.innerHTML = parkComponent(park)
    parkDialogButton()
}
