import { saveItinerary } from "../Itinerary/ItineraryProvider.js"

//where the button will be displayed
const contentTarget = document.querySelector(".saveItineraryButton") 

//listen for the browser generated click event
contentTarget.addEventListener("click", clickEvent => { 
    //make sure you are only listening for the specific show all itineries button click . 
    if (clickEvent.target.id === "saveItinerary") { 
        //grabbing the value of the selected option from the dropdown with the id of parkSelect
        const parkChosen = document.querySelector("#parkSelect").value
        const attractionChosen = document.querySelector("#attractionSelect").value //^
        const eateryChosen = document.querySelector("#eaterySelect").value //^

        //Generate the objects that will be saved to the itineraries.json
        //parseInt changes the id from a string to an int
        const newItinerary = {
            park: parkChosen,
            attraction: parseInt(attractionChosen),
            eatery: parseInt(eateryChosen)
        }
         /*
            Sending the newItinerary object via the 
            "Post" method function defined by saveItinerary to itineraries.JSON
         */
        saveItinerary(newItinerary)
    }
})

//the HTML representation of the itinerary button that will be displayed in the DOM
export const displayItineraryButton = () => { 
    contentTarget.innerHTML = "<button id='saveItinerary'>Save Itinerary</button>"
}