export const parkComponent = (parkObject) => {
    return `
        <div class="parkList">
            <h3 class="parkName">${parkObject.name}</h3>
            <button class="detailsButton" id="parkDetailsButton--${parkObject.id}">Park Details</button>
        </div>
     `
}
