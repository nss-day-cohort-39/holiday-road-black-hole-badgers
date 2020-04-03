//Empty array that will contain the data from the Attractions API, must be defined to store the data
let attractions = []

//Function that returns a copy of the data that is fetched from the API
export const useAttractions = () => {
    return attractions.slice()
}

//Gets the data

export const getAttractions = () => {

    //fetches the data from the API 
    return fetch(`http://holidayroad.nss.team/bizarreries`)
        //returns a response in json 
        .then(response => response.json())
        //turn it into readable JavaScript
        .then(parsedAttractions => {
            attractions = parsedAttractions.sort((Beginning, End) => {
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

