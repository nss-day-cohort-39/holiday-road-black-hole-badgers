export const attractionComponent = attractionObject => {
    return `
        <article class="attractionList">
            <h3 class="attractionName">${attractionObject.name}</h3>
            <button class="attractionButton" id="attractionDetailButton--${attractionObject.id}">Attraction Details</button>
        </article>
    `
}