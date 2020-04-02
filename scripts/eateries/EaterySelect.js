import { useEatery } from "./EateryProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eateryDropdown")

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


export const eaterySelect = () => {
  const allEateries = useEatery()

  const render = (eateriesCollection) => {
    contentTarget.innerHTML = `
    <div class="dropdownContainer">
        <select class="dropdown" id="eaterySelect">
        <div class="dropdown-content">
        <option value="0">Please select an eatery!</option>
        ${eateriesCollection.map(singleEatery => {
          return `<option value="${singleEatery.id}">${singleEatery.businessName}: ${singleEatery.state}</option>`
        })
    }   </div>
        </select>
        </div>
        `
  }
    render(allEateries)
}
