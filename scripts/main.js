import { getParks } from "./parks/ParkProvider.js"
import { parkSelect } from "./parks/ParkSelect.js"
import { getAttractions } from "./attractions/AttractionProvider.js"
import AttractionSelect from "./attractions/AttractionSelect.js"
import { getEateries } from "./eateries/EateryProvider.js"
import { eaterySelect } from "./eateries/EaterySelect.js"
import  "./eateries/EateryCard.js"
import "./weather/WeatherList.js"
import "./attractions/AttractionCard.js"
import { eateryDialogButton } from "./eateries/EateryDetailDialog.js"
import "./parks/ParkCard.js"
import { attractionDialogButton } from "./attractions/AttractionDetailDialog.js"


getAttractions()
    .then(AttractionSelect)
    .then(attractionDialogButton)

getParks()
    .then(parkSelect)
    
getEateries()
    .then(eaterySelect)
    .then(eateryDialogButton)


    


