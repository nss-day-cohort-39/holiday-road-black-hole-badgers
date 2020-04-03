//HTML representation of a single attraction 
export const attractionComponent = attractionObject => {
    return `
        <article class="attractionList">
            <h3 class="attractionName">${attractionObject.name}</h3>
            <section>${attractionObject.city}, ${attractionObject.state}</section>
            <button class="attractionButton" id="attractionDetailButton--${attractionObject.id}">Attraction Details</button>
            <dialog class="dialog--attraction" id="details--${attractionObject.id}">
                <ul>
                    <li>Overview: ${attractionObject.description}</li>
                    <li>${attractionObject.ameneties.souvenirs?"We have souvenirs for sale!":"No souvenirs for sale."}</li>
                    <li>${attractionObject.ameneties.restrooms?"Restrooms are available!":"Sorry, restrooms are not available."}</li>
                </ul>
                <button class="button--close">Close Attraction Details</button>
            
            </dialog>        
        
            </article>
    `
}

//line 11 & 12 are ternary operaters providing values based on booleans that are inside of the API