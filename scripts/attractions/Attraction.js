export const attractionComponent = attractionObject => {
    return `
        <article class="attractionList">
            <h3 class="attractionName">${attractionObject.name}</h3>
            <section>${attractionObject.city}, ${attractionObject.state}</section>
            <button class="attractionButton" id="attractionDetailButton--${attractionObject.id}">Attraction Details</button>
        </article>
    `
}