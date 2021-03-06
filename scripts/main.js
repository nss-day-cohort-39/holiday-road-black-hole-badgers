import { getParks } from "./parks/ParkProvider.js"
import { parkSelect } from "./parks/ParkSelect.js"
import { getAttractions } from "./attractions/AttractionProvider.js"
import AttractionSelect from "./attractions/AttractionSelect.js"
import { getEateries } from "./eateries/EateryProvider.js"
import { eaterySelect } from "./eateries/EaterySelect.js"
import  "./ItineraryPreview/ItineraryPreview.js"
import "./weather/WeatherList.js"
import { eateryDialogButton } from "./eateries/EateryDetailDialog.js"
import { attractionDialogButton } from "./attractions/AttractionDetailDialog.js"
import { renderItinerary } from "./Itinerary/ItineraryList.js"
import { displayItineraryButton } from "./ItineraryPreview/SavedItineraryButton.js"
import { headerRender } from "./header/Header.js"

headerRender()

getAttractions()
    .then(AttractionSelect)
    .then(attractionDialogButton)

getParks()
    .then(parkSelect)
    .then(renderItinerary)
    
getEateries()
    .then(eaterySelect)
    .then(eateryDialogButton)

displayItineraryButton()
