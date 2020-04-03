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

/*  
   Listens to the event and renders the Park Chosen to the Dom
*/

// Defines where we want to put the HTML
const contentTargetPark = document.querySelector(".itineraryParkPreview")

/*
    adding the method eventlistener to the eventHub for our custom event that we defined
    in parkselect
*/
eventHub.addEventListener("parkChosen", event => {
    //storing value of the array useParks in a variable
    const allParks = useParks()
    //specific park that is chosen from dropdown, 
    //.detail.park is coming from the detail in the custom event
    const thePark = event.detail.park
    // chosenPark will store the value of the park(object) chosen by user *line 70-73* 
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
