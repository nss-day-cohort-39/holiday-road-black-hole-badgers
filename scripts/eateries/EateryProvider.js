let eatery = []

export const useEatery = () => {
    return eatery.slice()
}


export const getEateries = () => {
    return fetch(`http://holidayroad.nss.team/eateries`)
        .then(response => response.json())
        .then(parsedEateries => {
            console.log(parsedEateries)
            eatery = parsedEateries
        }
    )
}