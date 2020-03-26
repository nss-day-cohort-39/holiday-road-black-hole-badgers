import { useParks } from "./ParkProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".parkDropdown")



export const parkSelect = () => {
    const allParks = useParks()
    
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
    

  
  const render = (parksCollection) => {
    contentTarget.innerHTML = `
        <select class="parkDropdown" id="parkSelect">
        <option value="0">Please select a park!</option>
        ${parksCollection.map(singlePark => {
          return `<option>${singlePark.name}: ${singlePark.states}</option>`
        })
    }
        </select>
        `
  }
    render(allParks)
}
