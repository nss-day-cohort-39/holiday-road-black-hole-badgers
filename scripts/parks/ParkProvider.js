import Settings from "../../Settings.js"

let parks = []

export const useParks = () => {
    return parks.slice()
}

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${Settings.npsKey}&stateCode=CA,AZ,NV,UT,CO,NM`)
        .then(response => response.json())
        .then(parsedParks => {
            console.table(parsedParks)
            parks = parsedParks
        }
    )
}
