import { useParks } from "./ParkProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".parkDropdown")

contentTarget.addEventListener("change", changeEvent => {
    if (changeEvent.target.id ==="parkSelect") {
        const parkChosen = changeEvent.target.value
        const parkChosenEvent = new CustomEvent ("parkChosen", {
            detail: {
                park: parkChosen
            }
        })
        eventHub.dispatchEvent(parkChosenEvent)
    }
})

// 2. Defining an event listener to show show that a change event happened.
//We define a custom event for the change that we want it to listen to
export const parkSelect = () => {
    const allParks = useParks()
    
    
// 1. Made an HTML representation of a dropdown. .map takes a function as an argument. 
// We are iterating over parkCollection

  const render = parksCollection => {
    contentTarget.innerHTML = `
        <select class="parkDropdown" id="parkSelect">
        <option value="0">Please select a park!</option>
        ${parksCollection.map(singlePark => {
          return `<option value="${singlePark.id}">${singlePark.name}: ${singlePark.states}</option>`
        })
    }
        </select>
        `
  }
    render(allParks)
}
