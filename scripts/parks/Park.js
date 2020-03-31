export const parkComponent = (parkObject) => {
    return `
        <div class="parkList">
            <h3 class="parkName">${parkObject.name}</h3>
            <section>${parkObject.addresses[0].city}, ${parkObject.addresses[0].stateCode}</section>
            <div class="parkImg">
            <img src="${parkObject.images[0].url}" alt="picture of ${parkObject.name}">
        </div>
            <button class="detailsButton" id="parkDetailsButton--${parkObject.id}">Park Details</button>
        </div>
     `
}
