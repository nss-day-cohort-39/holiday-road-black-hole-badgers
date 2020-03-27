let attractions = []

export const useAttractions = () => {
    return attractions.slice()
}

export const getAttractions = () => {
    return fetch(`http://holidayroad.nss.team/bizarreries`)
        .then(response => response.json())
        .then(parsedAttractions => {
            console.log(parsedAttractions)
            attractions = parsedAttractions.sort(function (Beginning, End) {
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

