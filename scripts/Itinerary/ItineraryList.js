import { useEatery } from "../eateries/EateryProvider.js"
import { useAttractions } from "../attractions/AttractionProvider.js"
import { useParks } from "../parks/ParkProvider.js"
import { useItinerary, getItineraries } from "./ItineraryProvider.js"
import { Itinerary } from "./Itinerary.js"

const contentTarget = document.querySelector(".savedItineraries")

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
            attraction => attraction.id === intineraryObject.attraction)
             //Matching the selected attraction id from dropdown to its itinerary object id
        const chosenPark = parkArray.find(
            park => park.id === intineraryObject.park)
             //Matching the selected park id from dropdown to its itinerary object id 
                return Itinerary(chosenEatery, chosenAttraction, chosenPark) //HTML representation once elements are selected from the dropdown and populated into itinerary
    }
        ).join("") //turning data into strings from objects
    })
}