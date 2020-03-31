import { useEatery } from "../eateries/EateryProvider.js"
import { useAttractions } from "../attractions/AttractionProvider.js"
import { useParks } from "../parks/ParkProvider.js"
import { useItinerary } from "./ItineraryProvider.js"

contentTarget = document.querySelector(".savedItineraries")
const eventHub = document.querySelector(".container")

const renderItinerary = () => {
    //Stored the value of the arrays in variables
    const itineraryArray = useItinerary()
    const eateryArray = useEatery()
    const attractionArray = useAttractions()
    const parkArray = useParks()



} 

