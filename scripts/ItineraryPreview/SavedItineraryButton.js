import { saveItinerary } from "../Itinerary/ItineraryProvider.js"

const contentTarget = document.querySelector(".saveItineraryButton") //where the button will be displayed

contentTarget.addEventListener("click", clickEvent => { //listen for the browser generated click event
    if (clickEvent.target.id === "saveItinerary") { //make sure you are only listening for the specific show all itineries button click . 
        const parkChosen = document.querySelector("#parkSelect").value//grabbing the value of the selected option from the dropdown with the id of parkSelect
        const attractionChosen = document.querySelector("#attractionSelect").value //^
        const eateryChosen = document.querySelector("#eaterySelect").value //^

        // Factory function to generate the object that will be saved
        const newItinerary = {
            park: parkChosen,
            attraction: attractionChosen,
            eatery: eateryChosen
        }
        saveItinerary(newItinerary) //Sending the newItinerary object via the "Post" method function defined by saveItinerary to itineraries.JSON
    }
})


export const displayItineraryButton = () => { //the HTML representation of the itinerary button that will be displayed in the DOM
    contentTarget.innerHTML = "<button id='saveItinerary'>Save Itinerary</button>"
}