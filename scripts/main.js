import { getParks } from "./parks/ParkProvider.js";
import { parkSelect } from "./parks/ParkSelect.js";
import { getAttractions } from "./attractions/AttractionProvider.js";
import AttractionSelect from "./attractions/AttractionSelect.js";


getAttractions()
    .then(AttractionSelect)
    



getParks()
    .then(parkSelect)
