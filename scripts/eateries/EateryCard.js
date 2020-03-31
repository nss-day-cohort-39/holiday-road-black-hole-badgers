import { eateryComponent } from "./Eatery.js"
import { useEatery } from "./EateryProvider.js"
<<<<<<< HEAD
import { eateryDialogButton } from "./EateryDetailDialog.js"
// import { eateryDialogButton } from "./EateryDetailDialog.js"
=======
>>>>>>> a059ac58d180c09ee1d453814a7bb84d3776226e

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


<<<<<<< HEAD

const render = eatery => {
    contentTarget.innerHTML = eateryComponent(eatery)
    eateryDialogButton()
=======
const render = (eatery) => {
    contentTarget.innerHTML = eateryComponent(eatery)
>>>>>>> a059ac58d180c09ee1d453814a7bb84d3776226e
}
