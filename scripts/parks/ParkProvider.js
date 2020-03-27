import settings from "../../Settings.js"

let parks = []

export const useParks = () => {
    return parks.slice()
}
export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}&stateCode=CA,AZ,NV,UT,CO,NM`)
        .then(response => response.json())
        .then(
            parsedParks => {
                parks = parsedParks.data.sort(function (Beginning, End) {
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
