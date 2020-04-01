//Empty array to store the intinerary information

let itineraries = []

//Going to DOM and finding the element with the class of container
const eventHub = document.querySelector(".container")

//Defining a function for our custom event
const dispatchStateChangeEvent = () => {
    //CustomEvent to let other modules know that the itinerary state has changed
    const itineraryStateChangedEvent = new CustomEvent("itineraryStateChanged")

    eventHub.dispatchEvent(itineraryStateChangedEvent)
}

//Allow other modules to get a copy of the application state of the itinerary 
export const useItinerary = () => itineraries.slice()

/*
    Get the state of the itineraries from the API into the application
*/
export const getItineraries = () => {
    return fetch(`http://localhost:8088/itineraries`)
        .then(response => response.json())
        .then(parsedItineraries => {
            itineraries = parsedItineraries
        })
}

//deletes itineraries
export const deleteItinerary = itineraryId => {
    return fetch(`http://localhost:8088/itineraries/${itineraryId}`, {
        method: "DELETE"
    })
        .then(getItineraries)
        .then(dispatchStateChangeEvent)
}

//saves itineraries
export const saveItinerary = itinerary => {
    return fetch(`http://localhost:8088/itineraries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //converts JSON into a string 
        body: JSON.stringify(itinerary)
    })
    .then(getItineraries)
    //lets other modules know that the state has changed
    .then(dispatchStateChangeEvent)
}