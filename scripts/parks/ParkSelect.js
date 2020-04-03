/* 
    imported a copy of our array of parks with that value stored 
    in a variable called "useParks" from the park provider 
*/
import { useParks } from "./ParkProvider.js"

/* 
    going to DOM and using the method querySelector to find the first class ".container"
    storing the value in the variable eventHub
*/
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".parkDropdown")

/* 
    we are adding an event listerner to listen for a change event,
    which is when you select a dropdown 
*/
contentTarget.addEventListener("change", changeEvent => {
    /* 
        defining specially what change we want the browser to listen to 
    */
    if (changeEvent.target.id === "parkSelect") {
        // storing the value of the selected park into parkChosen
        const parkChosen = changeEvent.target.value
        //defining a custom event that a park was chosen from the dropdown
        const parkChosenEvent = new CustomEvent("parkChosen", {
            detail: {
                /* 
                    park is the property, parkChosen is the value
                    parkChosen is the value you get from the dropdown
                */
                park: parkChosen
            }
        })
        /*
            dispatchEvent is a method for custom events to let other 
            modules know that a park was chosen. itinerayPreview and
            savedItineraryButton are listening
        */
        eventHub.dispatchEvent(parkChosenEvent)
    }
})

/*
    2. Defining an event listener to show show that a change event happened.
    We define a custom event for the change that we want it to listen to 
*/
export const parkSelect = () => {
    const allParks = useParks()


    // 1. Made an HTML representation of a dropdown. .map takes a function as an argument. 
    // We are iterating over parkCollection

    const render = parksCollection => {
        contentTarget.innerHTML = `
    <div class="dropdownContainer">
        <select class="dropdown" id="parkSelect">
        <div class="dropdown-content">
        <option value="0">Please select a park!</option>
        ${parksCollection.map(singlePark => { //creates a new array with the results from the render function
            return `<option value="${singlePark.id}">${singlePark.name}: ${singlePark.states}</option>`
        })
            }   
        </div>
        </select>
    </div>
    `
    }
    render(allParks)
}
