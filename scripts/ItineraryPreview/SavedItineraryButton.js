const contentTarget = document.querySelector(".saveItineraryButton") //where the button will be displayed
const eventHub = document.querySelector(".container") //where all the things happen 


contentTarget.addEventListener("click", clickEvent => { //listen for the browser generated click event
    if (clickEvent.target.id === "saveItinerary") { //make sure you are only listening for the specific show all itineries button click . 
        //The clickevent.target.id is coming from the id of the show all itineries button
        // Create a custom event to tell any interested component that the user wants to see itineries
        const saveItineraryEvent = new CustomEvent("itinerarySaved") //new custom event that is showing there is a new event that itineray button was clicked
            //just letting the system know that the button was clicked
        // Dispatch it to event hub


        eventHub.dispatchEvent(saveItineraryEvent) //dispatching the new custom event to the event hub with the title of saveItineraryEvent
    }
})

export const displayItineraryButton = () => { //the HTML representation of the itinerary button that will be displayed in the DOM
    contentTarget.innerHTML = "<button id='saveItinerary'>Save Itinerary</button>"
}

