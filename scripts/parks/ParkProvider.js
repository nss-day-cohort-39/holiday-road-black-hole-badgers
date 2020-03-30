import settings from "../../Settings.js"
//empty array that stores the parks, must be defined to store the data
let parks = []

//This is so other modules can use a copy of the data without stealing it
export const useParks = () => {
    return parks.slice()
}

//1. fetch parks from the API and store it in the parks variable and sorts the dropdown in ABC order
export const getParks = () => {
    return fetch(`http://localhost:8090/data`)
        .then(response => response.json())
        .then(
            parsedParks => {
                parks = parsedParks.sort(function (Beginning, End) {
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
