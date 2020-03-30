import { useAttractions } from "./AttractionProvider.js";
import { attractionComponent } from "./Attraction.js";


const contentTarget = document.querySelector(".itineraryAttractionPreview")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("attractionChosen", event => {
    const allAttractions = useAttractions()
    const theChosenAttraction = event.detail.attraction
    const displayedAttraction = allAttractions.find(
        (currentAttraction) => {
            if (currentAttraction.name === theChosenAttraction) {
                return currentAttraction
            }
        }
    )
    render(displayedAttraction)
})


const render = attraction => {
    contentTarget.innerHTML = attractionComponent(attraction)
}
