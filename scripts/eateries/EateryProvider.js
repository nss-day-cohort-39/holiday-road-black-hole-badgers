let eatery = []

export const useEatery = () => {
    return eatery.slice()
}


export const getEateries = () => {
    return fetch(`http://holidayroad.nss.team/eateries`)
        .then(response => response.json())
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