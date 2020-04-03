import { useEatery } from "./EateryProvider.js"

//Defining the eventHub where events will take place
const eventHub = document.querySelector(".container")

//adding a target for where the HTML representation of the dropdown will render
const contentTarget = document.querySelector(".eateryDropdown")

//adding an event listener to listen for a change event 
//which occurse when you select a dropdown
contentTarget.addEventListener("change", changeEvent => {

  //defines which change we want the browser to listen for
  if (changeEvent.target.id ==="eaterySelect") {
    //storing the value of the selected park into eateryChosen
      const eateryChosen = changeEvent.target.value
      //defining a custom event that a eatery was chosen from the drop down 
      const eateryChosenEvent = new CustomEvent ("eateryChosen", {
         detail: {
           /* 
              eatery is the property, eateryChosen is the value
              eateryChosen is the value you get from the dropdown
           */
              eatery: eateryChosen
          }
      })

         /*
            dispatchEvent is a method for custom events to let other 
            modules know that a park was chosen. itinerayPreview and
            savedItineraryButton are listening
        */
      eventHub.dispatchEvent(eateryChosenEvent)
  }
})
/*
    2. Defining an event listener to show show that a change event happened.
    We define a custom event for the change that we want it to listen to 
*/

export const eaterySelect = () => {
  const allEateries = useEatery()
  
  // 1. Made an HTML representation of a dropdown. .map takes a function as an argument. 
    // We are iterating over parkCollection

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
