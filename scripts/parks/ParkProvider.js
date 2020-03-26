import Settings from "../../Settings.js"

let parks = []


export const useParks = () => {
    return parks.slice()
}
export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${Settings.npsKey}&stateCode=AZ,NV,NM,OR,WA,ID,MT,UT,CO`)
        .then(response => response.json())
        .then(
            parsedParks => {
                parks = parsedParks
                console.table(parks)
            }
            )
        }