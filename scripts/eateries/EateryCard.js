import { eateryComponent } from "./Eatery.js"
import { useEatery } from "./EateryProvider.js"

const contentTarget = document.querySelector(".itineraryEateryPreview")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("eateryChosen", event => {
    const allEateries = useEatery()
    const theEatery = event.detail.eatery
    const chosenEatery = allEateries.find(
        (currentEatery) => {
            if (currentEatery.businessName === theEatery) {
                return currentEatery
            }
        }
    )
    render(chosenEatery)
})


const render = (eatery) => {
    contentTarget.innerHTML = eateryComponent(eatery)
}
