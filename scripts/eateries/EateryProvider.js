//Empty array that will contain the data from the Attractions API, must be defined to store the data
let eatery = []

//Function that returns a copy of the data that is fetched from the API
export const useEatery = () => {
    return eatery.slice()
}

//gets the data
export const getEateries = () => {
    
    //fetches the data from the api
    return fetch(`http://holidayroad.nss.team/eateries`)
        //returns a response in JSON
        .then(response => response.json())
        //turns it into readable javascript
        .then(parsedEateries => {
            eatery = parsedEateries.sort((Beginning, End) => {
                let nameA = Beginning.state
                let nameB = End.state
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