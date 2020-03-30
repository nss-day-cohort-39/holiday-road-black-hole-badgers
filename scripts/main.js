import { getParks } from "./parks/ParkProvider.js"
import { parkSelect } from "./parks/ParkSelect.js"
import { getAttractions } from "./attractions/AttractionProvider.js"
import AttractionSelect from "./attractions/AttractionSelect.js"
import { getEateries } from "./eateries/EateryProvider.js"
import { eaterySelect } from "./eateries/EaterySelect.js"
import { getWeather, useWeather } from "./weather/WeatherProvider.js"
import  "./eateries/EateryCard.js"
import { WeatherList } from "./weather/WeatherList.js"
import "./attractions/AttractionCard.js"
import { eateryDialogButton } from "./eateries/EateryDetailDialog.js"


getAttractions()
    .then(AttractionSelect)

getParks()
    .then(parkSelect)

getEateries()
    .then(eaterySelect)
    .then(eateryDialogButton)

getWeather()
    .then(WeatherList)


