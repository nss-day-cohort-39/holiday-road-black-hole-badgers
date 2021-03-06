import { useEatery } from "../eateries/EateryProvider.js"
import { useAttractions } from "../attractions/AttractionProvider.js"
import { useParks } from "../parks/ParkProvider.js"
import { useItinerary, getItineraries, deleteItinerary } from "./ItineraryProvider.js"
import { Itinerary } from "./Itinerary.js"

const contentTarget = document.querySelector(".savedItineraries")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("itineraryStateChanged", customEvent => {

    renderItinerary()
})

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteItinerary--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        deleteItinerary(id).then(renderItinerary)
    }
})

export const renderItinerary = () => {

    getItineraries().then(() => {
        //Stored the value of the arrays in variables
        const itineraryArray = useItinerary()
        const eateryArray = useEatery()
        const attractionArray = useAttractions()
        const parkArray = useParks()
    
    contentTarget.innerHTML = itineraryArray.map(
        itineraryObject => {
        //iterate array with a map to convert objects into HTML and selecting where it will populate
        const chosenEatery = eateryArray.find(
            eatery => eatery.id === itineraryObject.eatery) 
            //Matching the selected eatery id from dropdown to its itinerary object id
        const chosenAttraction = attractionArray.find(
            attraction => attraction.id === itineraryObject.attraction)
             //Matching the selected attraction id from dropdown to its itinerary object id
        const chosenPark = parkArray.find(
            park => park.id === itineraryObject.park)
             //Matching the selected park id from dropdown to its itinerary object id 
                return Itinerary(itineraryObject, chosenPark, chosenEatery, chosenAttraction) //HTML representation once elements are selected from the dropdown and populated into itinerary
    }
        ).join("") //turning data into strings from objects
    })
}


