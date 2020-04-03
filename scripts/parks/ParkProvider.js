//used to import individual personal keys that are ignored by git 
import settings from "../../Settings.js" 

//empty array that stores the parks, must be defined to store the data
let parks = []

//This is so other modules can use a copy of the data without stealing it
export const useParks = () => {
    return parks.slice()
}
//1. fetch parks from the API and store it in the parks variable 
export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}&stateCode=CA,AZ,NV,UT,CO,NM`)
        .then(response => response.json())
        .then(
            //sorts the states in ABC order by first state displayed
            parsedParks => {
                //.data makes it an array, so you can iterate over it (.sort is the array method used)
                parks = parsedParks.data.sort((Beginning, End) => {
                    let nameA = Beginning.states
                    let nameB = End.states
                    if (nameA < nameB) {
                        return -1
                    }
                    if (nameA > nameB) {
                        return 1
                    }
                    return 0
                }
                )
            }
            )
        }
