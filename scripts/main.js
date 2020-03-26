import { getParks } from "./parks/ParkProvider.js";
import { parkSelect } from "./parks/ParkSelect.js";
import { getAttractions } from "./attractions/AttractionProvider.js";
import AttractionSelect from "./attractions/AttractionSelect.js";
import { getEateries } from "./eateries/EateryProvider.js";
import { eaterySelect } from "./eateries/EaterySelect.js";


getAttractions()
    .then(AttractionSelect)
    



getParks()
    .then(parkSelect)


getEateries()
    .then(eaterySelect)