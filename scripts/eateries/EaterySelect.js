import { useEatery } from "./EateryProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eateryDropdown")



export const eaterySelect = () => {
  const allEateries = useEatery()
  

    contentTarget.addEventListener("change", changeEvent => {
        if (changeEvent.target.id ==="eaterySelect") {
            const eateryChosen = changeEvent.target.value
            const eateryChosenEvent = new CustomEvent ("eateryChosen", {
                detail: {
                    eatery: eateryChosen
                }
            })
            eventHub.dispatchEvent(eateryChosenEvent)
        }
    })
    

  
  const render = (eateriesCollection) => {
    contentTarget.innerHTML = `
        <select class="eateryDropdown" id="eaterySelect">
        <option value="0">Please select a eatery!</option>
        ${eateriesCollection.map(singleEatery => {
          return `<option>${singleEatery.businessName}: ${singleEatery.state}</option>`
        })
    }
        </select>
        `
  }
    render(allEateries)
}
